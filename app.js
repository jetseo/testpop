/* ===========================================================
   앱 로직: 라우팅 / 언어 / 테스트 진행 / 결과 / 공유
   외부 라이브러리 없음 (카카오 SDK는 선택적)
   =========================================================== */
(function(){
  'use strict';

  // ---- 상태 ----
  let lang = detectLang();
  let answers = [];      // 누적 점수
  let qIndex = 0;
  const TEST = TEST_KAKAO;

  // ---- 언어 감지 (URL ?lang= > localStorage > 브라우저) ----
  function detectLang(){
    const u = new URLSearchParams(location.search).get('lang');
    if(u && LANGS.includes(u)) return u;
    let s; try{ s = localStorage.getItem('lang'); }catch(e){}
    if(s && LANGS.includes(s)) return s;
    const b = (navigator.language||'ko').slice(0,2);
    return LANGS.includes(b) ? b : 'ko';
  }
  function setLang(l){
    lang = l;
    try{ localStorage.setItem('lang', l); }catch(e){}
    document.documentElement.lang = l;
    render();
  }
  const t = (k)=> (UI[lang] && UI[lang][k]) || UI.ko[k] || k;

  // ---- 라우팅: #home / #quiz / #result/<type> ----
  function route(){
    const h = location.hash.slice(1);
    if(h.startsWith('result/')){
      const ty = h.split('/')[1];
      if(TYPES.includes(ty)){ renderResult(ty); return; }
    }
    if(h==='quiz'){ renderQuiz(); return; }
    renderHome();
  }

  // ---- 점수 계산 ----
  function calcType(){
    const score = {}; TYPES.forEach(x=>score[x]=0);
    answers.forEach(a=>{ for(const k in a){ score[k]=(score[k]||0)+a[k]; } });
    let best=TYPES[0], max=-1;
    TYPES.forEach(x=>{ if(score[x]>max){max=score[x];best=x;} });
    return best;
  }

  // ---- 화면: 홈 ----
  function renderHome(){
    const app = document.getElementById('app');
    app.innerHTML = `
      <section class="hero">
        <div class="hero-art">
          <img src="images/hero.jpg" alt="" loading="eager" width="1200" height="630">
        </div>
        <h1 class="hero-title">${TEST.emoji} ${t('site_title')}</h1>
        <p class="hero-tagline">${t('site_tagline')}</p>
        <p class="hero-sub">${t('hero_sub')}</p>
        <button class="btn-primary" id="startBtn">${t('start')}</button>
      </section>
      <section class="type-preview">
        ${TYPES.map(ty=>{
          const m=TYPE_META[ty], d=TEST.types[ty][lang];
          return `<div class="chip" style="--c:${m.color}"><img src="${m.img}" alt="" loading="lazy"><span>${d.name}</span></div>`;
        }).join('')}
      </section>
      <div class="ad-slot" aria-hidden="true"><!-- AD: home-bottom --></div>
    `;
    document.getElementById('startBtn').onclick = ()=>{ answers=[]; qIndex=0; location.hash='quiz'; };
  }

  // ---- 화면: 퀴즈 ----
  function renderQuiz(){
    const qs = TEST.questions[lang] || TEST.questions.ko;
    if(qIndex>=qs.length){ const ty=calcType(); location.hash='result/'+ty; return; }
    const q = qs[qIndex];
    const pct = Math.round((qIndex)/qs.length*100);
    const app = document.getElementById('app');
    app.innerHTML = `
      <section class="quiz">
        <div class="qbar"><div class="qbar-fill" style="width:${pct}%"></div></div>
        <div class="qcount">${t('q_progress')} ${qIndex+1} / ${qs.length}</div>
        <h2 class="qtext">${q.q}</h2>
        <div class="answers">
          ${q.a.map((opt,i)=>`<button class="answer" data-i="${i}">${opt.t}</button>`).join('')}
        </div>
      </section>
    `;
    app.querySelectorAll('.answer').forEach(btn=>{
      btn.onclick=()=>{
        const i=+btn.dataset.i;
        answers.push(q.a[i].s);
        qIndex++;
        window.scrollTo(0,0);
        renderQuiz();
      };
    });
  }

  // ---- 화면: 결과 ----
  function renderResult(ty){
    const m=TYPE_META[ty], d=TEST.types[ty][lang];
    const bestD=TEST.types[d.best][lang], worstD=TEST.types[d.worst][lang];
    const app=document.getElementById('app');
    app.innerHTML = `
      <section class="result">
        <p class="result-label">${t('your_type')}</p>
        <div class="result-card" style="--c:${m.color};--ink:${m.ink}">
          <img class="result-img" src="${m.img}" alt="${d.name}" width="720" height="1280">
          <h2 class="result-name">${d.name}</h2>
          <p class="result-tag">${d.tag}</p>
        </div>
        <p class="result-desc">${d.desc}</p>
        <div class="match">
          <div class="match-item best"><span class="match-label">💕 ${t('match_best')}</span><span>${bestD.name}</span></div>
          <div class="match-item worst"><span class="match-label">⚡ ${t('match_worst')}</span><span>${worstD.name}</span></div>
        </div>
        <div class="nick-row">
          <input id="nick" type="text" maxlength="12" placeholder="${t('nickname_ph')}">
          <button class="btn-ghost" id="cardBtn">${t('make_card')}</button>
        </div>
        <canvas id="cardCanvas" width="720" height="1280" style="display:none"></canvas>
        <div class="share-row">
          <button class="btn-share kakao" id="shareBtn">${t('share_kakao')}</button>
          <button class="btn-share link" id="linkBtn">${t('share_link')}</button>
          <button class="btn-share save" id="saveBtn">${t('save_image')}</button>
        </div>
        <div class="result-actions">
          <button class="btn-ghost" id="retryBtn">${t('retry')}</button>
          <button class="btn-ghost" id="homeBtn">${t('home')}</button>
        </div>
        <div class="ad-slot" aria-hidden="true"><!-- AD: result-bottom --></div>
      </section>
    `;
    document.getElementById('retryBtn').onclick=()=>{answers=[];qIndex=0;location.hash='quiz';};
    document.getElementById('homeBtn').onclick=()=>{location.hash='home';};
    document.getElementById('linkBtn').onclick=()=>copyLink();
    document.getElementById('shareBtn').onclick=()=>shareSocial(ty,d);
    document.getElementById('cardBtn').onclick=()=>drawCard(ty,d,false);
    document.getElementById('saveBtn').onclick=()=>drawCard(ty,d,true);
  }

  // ---- 결과 카드 Canvas 생성 (테두리+닉네임+워터마크) ----
  function drawCard(ty,d,download){
    const m=TYPE_META[ty];
    const cv=document.getElementById('cardCanvas');
    const ctx=cv.getContext('2d');
    const W=cv.width,H=cv.height;
    const nick=(document.getElementById('nick').value||'').trim();
    const img=new Image();
    img.crossOrigin='anonymous';
    img.onload=()=>{
      // 배경
      ctx.fillStyle=m.color; ctx.fillRect(0,0,W,H);
      // 내부 카드 영역 (둥근 테두리)
      const pad=40, r=48;
      roundRect(ctx,pad,pad,W-pad*2,H-pad*2,r);
      ctx.fillStyle='#ffffff'; ctx.fill();
      // 캐릭터 이미지 (상단, 비율 유지 크롭)
      const iw=W-pad*2-40, ih=iw*0.92, ix=pad+20, iy=pad+20;
      roundRect(ctx,ix,iy,iw,ih,32); ctx.save(); ctx.clip();
      const ratio=Math.max(iw/img.width, ih/img.height);
      const dw=img.width*ratio, dh=img.height*ratio;
      ctx.drawImage(img, ix+(iw-dw)/2, iy+(ih-dh)/2, dw, dh);
      ctx.restore();
      // 유형명
      ctx.textAlign='center'; ctx.fillStyle=m.ink;
      ctx.font='bold 68px "Noto Sans KR",sans-serif';
      ctx.fillText(d.name, W/2, iy+ih+110);
      // 태그
      ctx.fillStyle='#555'; ctx.font='40px "Noto Sans KR",sans-serif';
      ctx.fillText(d.tag, W/2, iy+ih+175);
      // 닉네임 배지
      if(nick){
        ctx.font='bold 44px "Noto Sans KR",sans-serif';
        const tw=ctx.measureText(nick).width;
        const bw=tw+80, bx=(W-bw)/2, by=iy+ih+215;
        roundRect(ctx,bx,by,bw,76,38); ctx.fillStyle=m.color; ctx.fill();
        ctx.fillStyle=m.ink; ctx.fillText(nick, W/2, by+52);
      }
      // 하단 워터마크 (사이트 주소 = 바이럴 핵심)
      ctx.fillStyle='#999'; ctx.font='36px "Noto Sans KR",sans-serif';
      ctx.fillText(t('site_title'), W/2, H-pad-58);
      ctx.fillStyle=m.ink; ctx.font='bold 38px sans-serif';
      ctx.fillText(SITE_URL.replace(/^https?:\/\//,''), W/2, H-pad-12);

      cv.style.display='block';
      if(download){
        const a=document.createElement('a');
        a.download='my-reply-type.png';
        a.href=cv.toDataURL('image/png');
        a.click();
      }
    };
    img.onerror=()=>toast('image load failed');
    img.src=m.img;
  }
  function roundRect(ctx,x,y,w,h,r){
    ctx.beginPath();
    ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r);
    ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r);
    ctx.arcTo(x,y,x+w,y,r); ctx.closePath();
  }

  // ---- 공유 ----
  function resultUrl(ty){
    return location.origin+location.pathname+'?lang='+lang+'#result/'+ty;
  }
  function copyLink(){
    const ty=location.hash.split('/')[1];
    const url=resultUrl(ty);
    navigator.clipboard?.writeText(url).then(()=>toast(t('copied')),()=>fallbackCopy(url));
  }
  function fallbackCopy(text){
    const ta=document.createElement('textarea'); ta.value=text; document.body.appendChild(ta);
    ta.select(); try{document.execCommand('copy');toast(t('copied'));}catch(e){} ta.remove();
  }
  function shareSocial(ty,d){
    const url=resultUrl(ty);
    const text=`${t('your_type')}: ${d.name}`;
    // Web Share API 우선 (모바일에서 카톡 포함 네이티브 공유)
    if(navigator.share){
      navigator.share({title:t('site_title'),text,url}).catch(()=>{});
      return;
    }
    // 카카오 SDK 있으면 사용
    if(window.Kakao && Kakao.Share){
      Kakao.Share.sendDefault({
        objectType:'feed',
        content:{title:t('site_title'),description:text,
          imageUrl:location.origin+location.pathname+TYPE_META[ty].img,
          link:{mobileWebUrl:url,webUrl:url}}
      });
      return;
    }
    copyLink();
  }

  function toast(msg){
    let el=document.getElementById('toast');
    if(!el){el=document.createElement('div');el.id='toast';document.body.appendChild(el);}
    el.textContent=msg; el.classList.add('show');
    setTimeout(()=>el.classList.remove('show'),1800);
  }

  // ---- 공통 셸 렌더 (헤더/푸터/언어선택) ----
  function render(){
    // 헤더 언어 버튼 상태 갱신
    document.querySelectorAll('#langSel button').forEach(b=>{
      b.classList.toggle('on', b.dataset.l===lang);
    });
    document.getElementById('brand').textContent = t('site_title');
    document.getElementById('f-about').textContent=t('footer_about');
    document.getElementById('f-privacy').textContent=t('footer_privacy');
    document.getElementById('f-contact').textContent=t('footer_contact');
    route();
  }

  // ---- 초기화 ----
  window.addEventListener('hashchange',route);
  document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('brand').onclick=()=>{location.hash='home';};
    document.querySelectorAll('#langSel button').forEach(b=>{
      b.onclick=()=>setLang(b.dataset.l);
    });
    document.documentElement.lang=lang;
    render();
  });

  // 사이트 주소 (배포 후 실제 도메인으로 교체)
  const SITE_URL = location.origin.includes('http') && !location.origin.includes('localhost')
    ? location.origin : 'https://testpop.app';
})();
