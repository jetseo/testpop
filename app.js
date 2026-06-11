/* ===========================================================
   testpop 앱 로직 (허브 구조)
   라우팅: #home(허브) → #test/<id>(인트로) → #quiz → #result/<id>/<type>
   =========================================================== */
(function(){
  'use strict';

  let lang = detectLang();
  let curId = null;      // 현재 테스트 id
  let TEST = null;       // 현재 테스트 객체
  let answers = [];
  let qIndex = 0;

  const SITE = (location.origin.startsWith('http') && !location.origin.includes('localhost') && !location.origin.includes('127.0.0.1'))
    ? location.origin : 'https://testpop.app';

  function detectLang(){
    const u=new URLSearchParams(location.search).get('lang');
    if(u&&LANGS.includes(u))return u;
    let s; try{s=localStorage.getItem('lang');}catch(e){}
    if(s&&LANGS.includes(s))return s;
    const b=(navigator.language||'ko').slice(0,2);
    return LANGS.includes(b)?b:'ko';
  }
  function setLang(l){
    lang=l; try{localStorage.setItem('lang',l);}catch(e){}
    document.documentElement.lang=l; render();
  }
  const t=(k)=>(UI[lang]&&UI[lang][k])||UI.ko[k]||k;
  const L=(obj)=>obj?(obj[lang]||obj.ko):''; // 다국어 객체에서 현재 언어 추출

  // ---- GA4 이벤트 추적 (gtag 없으면 조용히 무시) ----
  function track(event, params){
    try{ if(window.gtag) window.gtag('event', event, params||{}); }catch(e){}
  }

  // ---- 라우팅 ----
  function route(){
    const h=location.hash.slice(1);
    if(h.startsWith('result/')){
      const [,id,ty]=h.split('/');
      if(loadTest(id) && TEST.typeList.includes(ty)){ renderResult(ty); return; }
    }
    if(h==='quiz' && TEST){ renderQuiz(); return; }
    if(h.startsWith('test/')){
      const id=h.split('/')[1];
      if(loadTest(id)){ renderIntro(); return; }
    }
    renderHub();
  }
  function loadTest(id){
    const obj=getTest(id);
    if(!obj)return false;
    curId=id; TEST=obj; return true;
  }
  // 탭 제목 동적 설정
  function setTitle(testId){
    if(testId){
      const m=getTestMeta(testId);
      document.title = L(m.title) + ' | testpop';
    } else {
      document.title = t('page_title');
    }
  }

  // ---- 점수 계산 ----
  function calcType(){
    const score={}; TEST.typeList.forEach(x=>score[x]=0);
    answers.forEach(a=>{for(const k in a)score[k]=(score[k]||0)+a[k];});
    let best=TEST.typeList[0],max=-1;
    TEST.typeList.forEach(x=>{if(score[x]>max){max=score[x];best=x;}});
    return best;
  }

  // ---- 화면: 허브(홈) ----
  function renderHub(){
    curId=null; TEST=null; setTitle(null);
    const app=document.getElementById('app');
    app.innerHTML=`
      <section class="hub-hero">
        <div class="hub-banner"><img src="images/og.jpg" alt="testpop" loading="eager"></div>
        <p class="hub-sub">${t('hub_sub')}</p>
      </section>
      <section class="test-list">
        ${TESTS.map(m=>`
          <a class="test-card" href="#test/${m.id}">
            <div class="test-thumb"><img src="${m.thumb}" alt="" loading="lazy"></div>
            <div class="test-info">
              <span class="test-emoji">${m.emoji}</span>
              <h2 class="test-name">${L(m.title)}</h2>
              <p class="test-desc">${L(m.desc)}</p>
            </div>
            <span class="test-go">${t('do_test')} →</span>
          </a>
        `).join('')}
      </section>
      <div class="ad-slot" data-slot="hub-bottom" aria-hidden="true"></div>
    `;
  }

  // ---- 화면: 테스트 인트로 ----
  function renderIntro(){
    setTitle(curId);
    const m=getTestMeta(curId);
    const app=document.getElementById('app');
    app.innerHTML=`
      <section class="hero">
        <a class="back-link" href="#home">← testpop</a>
        <div class="hero-art"><img src="${m.thumb}" alt="" loading="eager"></div>
        <h1 class="hero-title">${m.emoji} ${L(m.title)}</h1>
        <p class="hero-tagline">${L(m.desc)}</p>
        <p class="hero-sub">${t('hero_sub')}</p>
        <button class="btn-primary" id="startBtn">${t('start')}</button>
      </section>
    `;
    document.getElementById('startBtn').onclick=()=>{answers=[];qIndex=0;track('test_start',{test_id:curId});location.hash='quiz';};
  }

  // ---- 화면: 퀴즈 ----
  function renderQuiz(){
    const qs=TEST.questions[lang]||TEST.questions.ko;
    if(qIndex>=qs.length){const rt=calcType();track('test_complete',{test_id:curId,result_type:rt});location.hash='result/'+curId+'/'+rt;return;}
    const q=qs[qIndex];
    const pct=Math.round(qIndex/qs.length*100);
    const app=document.getElementById('app');
    app.innerHTML=`
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
      btn.onclick=()=>{answers.push(q.a[+btn.dataset.i].s);qIndex++;window.scrollTo(0,0);renderQuiz();};
    });
  }

  // ---- 화면: 결과 ----
  function renderResult(ty){
    setTitle(curId);
    const m=TEST.meta[ty], d=TEST.types[ty][lang];
    const bestD=TEST.types[d.best][lang], worstD=TEST.types[d.worst][lang];
    const meta=getTestMeta(curId);
    const app=document.getElementById('app');
    app.innerHTML=`
      <section class="result">
        <p class="result-label">${L(TEST.resultLabel)}</p>
        <div class="result-card" style="--c:${m.color};--ink:${m.ink}">
          <img class="result-img" src="${m.img}" alt="${d.name}">
          <h2 class="result-name">${d.name}</h2>
          <p class="result-tag">${d.tag}</p>
        </div>
        <p class="result-desc">${d.desc}</p>
        <div class="ad-slot" data-slot="result-mid" aria-hidden="true"></div>
        <div class="match">
          <div class="match-item best"><span class="match-label">💕 ${t('match_best')}</span><span>${bestD.name}</span></div>
          <div class="match-item worst"><span class="match-label">⚡ ${t('match_worst')}</span><span>${worstD.name}</span></div>
        </div>
        <div class="card-maker">
          <p class="card-maker-label">${t('card_hint')}</p>
          <input id="nick" type="text" maxlength="12" placeholder="${t('nickname_ph')}">
          <button class="btn-make" id="cardBtn">${t('make_card')}</button>
        </div>
        <canvas id="cardCanvas" width="720" height="1500" style="display:none"></canvas>
        <div class="share-row">
          <button class="btn-share share" id="shareBtn">${t('share')}</button>
          <button class="btn-share save" id="saveBtn">${t('save_image')}</button>
        </div>
        <div class="result-actions">
          <button class="btn-ghost" id="retryBtn">${t('retry')}</button>
          <a class="btn-ghost" href="#home" style="text-decoration:none">${t('other_tests')}</a>
        </div>
        <div class="ad-slot" data-slot="result-bottom" aria-hidden="true"></div>
      </section>
    `;
    document.getElementById('retryBtn').onclick=()=>{answers=[];qIndex=0;location.hash='quiz';};
    document.getElementById('shareBtn').onclick=()=>{track('result_share',{test_id:curId,result_type:ty});shareSocial(ty,d);};
    document.getElementById('cardBtn').onclick=()=>drawCard(ty,d,false);
    document.getElementById('saveBtn').onclick=()=>{track('card_save',{test_id:curId,result_type:ty});drawCard(ty,d,true);};
  }

  // ---- 결과 카드 Canvas ----
  function drawCard(ty,d,download){
    const m=TEST.meta[ty];
    const cv=document.getElementById('cardCanvas'), ctx=cv.getContext('2d');
    const nick=(document.getElementById('nick').value||'').trim();
    const img=new Image(); img.crossOrigin='anonymous';
    img.onload=()=>{
      const W=720, pad=36;
      const ix=pad+16, iy=pad+16, iw=W-pad*2-32, ih=Math.round(iw*1.05);
      // 설명 줄 나누기 (높이 계산 먼저)
      ctx.font='32px "Noto Sans KR",sans-serif';
      const maxW=W-pad*2-40, lineH=46;
      const descLines=splitLines(ctx, d.desc, maxW);
      // 동적 높이 계산: 상단여백+이미지+이름영역+설명+워터마크+하단여백
      const descTop = iy+ih+54;
      const descH = descLines.length*lineH;
      const wmH = 130; // 워터마크 영역 (2줄 + 하단 여백 확보)
      const H = descTop + descH + wmH + pad;
      cv.width=W; cv.height=H;

      // 배경
      ctx.fillStyle=m.color; ctx.fillRect(0,0,W,H);
      const r=44;
      roundRect(ctx,pad,pad,W-pad*2,H-pad*2,r); ctx.fillStyle='#fff'; ctx.fill();

      // 이미지
      roundRect(ctx,ix,iy,iw,ih,32); ctx.save(); ctx.clip();
      const ratio=Math.max(iw/img.width,ih/img.height),dw=img.width*ratio,dh=img.height*ratio;
      ctx.drawImage(img,ix+(iw-dw)/2,iy+(ih-dh)/2,dw,dh);
      // 닉네임 유무에 따라 흰 띠 높이 조절 (닉네임 있으면 더 높게)
      const bandH = nick ? 280 : 210;
      const grad=ctx.createLinearGradient(0,iy+ih-bandH,0,iy+ih);
      grad.addColorStop(0,'rgba(255,255,255,0)');
      grad.addColorStop(1,'rgba(255,255,255,0.94)');
      ctx.fillStyle=grad; ctx.fillRect(ix,iy+ih-bandH,iw,bandH);
      ctx.restore();

      ctx.textAlign='center';
      // 유형명 — 폭에 맞게 폰트 자동 축소
      let nameSize=58;
      do { ctx.font='bold '+nameSize+'px "Noto Sans KR",sans-serif';
           if(ctx.measureText(d.name).width<=iw-40) break; nameSize-=3;
      } while(nameSize>32);

      if(nick){
        // 1줄: 유형명 → 2줄: 닉네임 칩 (붙여서 하나의 타이틀) → 3줄: 태그
        ctx.fillStyle=m.ink;
        ctx.font='bold '+nameSize+'px "Noto Sans KR",sans-serif';
        ctx.fillText(d.name, W/2, iy+ih-160);
        // 닉네임 칩 (유형명 바로 아래)
        ctx.font='bold 46px "Noto Sans KR",sans-serif';
        const tw=ctx.measureText(nick).width, bw=Math.min(tw+72, iw-40), bh=72;
        const bx=(W-bw)/2, by=iy+ih-138;
        roundRect(ctx,bx,by,bw,bh,36); ctx.fillStyle=m.color; ctx.fill();
        ctx.fillStyle=m.ink; ctx.textAlign='center'; ctx.fillText(nick, W/2, by+50);
        // 태그 (닉네임 아래)
        ctx.fillStyle='#666'; ctx.font='32px "Noto Sans KR",sans-serif';
        ctx.fillText(d.tag, W/2, iy+ih-30);
      } else {
        // 닉네임 없으면 기존처럼 유형명+태그만
        ctx.fillStyle=m.ink; ctx.fillText(d.name, W/2, iy+ih-72);
        ctx.fillStyle='#666'; ctx.font='34px "Noto Sans KR",sans-serif';
        ctx.fillText(d.tag, W/2, iy+ih-28);
      }

      // 설명
      ctx.textAlign='center'; ctx.fillStyle='#444'; ctx.font='32px "Noto Sans KR",sans-serif';
      descLines.forEach((ln,i)=>ctx.fillText(ln, W/2, descTop+i*lineH));

      // 워터마크 (둥근 모서리에 안 걸리게 위로)
      ctx.fillStyle='#aaa'; ctx.font='30px "Noto Sans KR",sans-serif';
      ctx.fillText(L(getTestMeta(curId).title), W/2, H-pad-78);
      ctx.fillStyle=m.ink; ctx.font='bold 36px sans-serif';
      ctx.fillText('testpop.app', W/2, H-pad-36);

      cv.style.display='block';
      if(download){const a=document.createElement('a');a.download='testpop-result.png';a.href=cv.toDataURL('image/png');a.click();}
    };
    img.onerror=()=>toast('image load failed');
    img.src=m.img;
  }
  // 텍스트를 maxW에 맞춰 줄 배열로 분리 (영어=단어단위, CJK=글자단위)
  function splitLines(ctx,text,maxW){
    // 공백 기준 토큰화하되, 토큰 자체가 너무 길면 글자단위로 쪼갬
    const tokens=text.split(/(\s+)/); // 공백도 토큰으로 보존
    let line='', lines=[];
    const pushChar=(str)=>{ // 토큰이 maxW보다 길 때 글자단위 처리
      for(const ch of str){
        if(ctx.measureText(line+ch).width>maxW && line){lines.push(line);line=ch;}
        else line+=ch;
      }
    };
    for(const tk of tokens){
      if(ctx.measureText(line+tk).width<=maxW){ line+=tk; }
      else if(ctx.measureText(tk).width>maxW){ pushChar(tk); }
      else { if(line.trim())lines.push(line.trimEnd()); line=tk.trimStart(); }
    }
    if(line.trim())lines.push(line.trimEnd());
    if(lines.length>7){lines=lines.slice(0,7); lines[6]=lines[6].replace(/.$/,'')+'…';}
    return lines;
  }
  function roundRect(ctx,x,y,w,h,r){
    ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);
    ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();
  }

  // ---- 공유 ----
  function resultUrl(ty){return SITE+'/?lang='+lang+'#result/'+curId+'/'+ty;}
  function copyLink(ty){
    const url=resultUrl(ty);
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(url).then(()=>toast(t('copied'))).catch(()=>fallbackCopy(url));
    }else fallbackCopy(url);
  }
  function fallbackCopy(text){
    const ta=document.createElement('textarea');
    ta.value=text;ta.style.position='fixed';ta.style.opacity='0';
    document.body.appendChild(ta);ta.select();
    let ok=false;try{ok=document.execCommand('copy');}catch(e){}
    ta.remove(); if(ok)toast(t('copied'));
  }
  function shareSocial(ty,d){
    const url=resultUrl(ty),text=`${L(TEST.resultLabel)}: ${d.name}`;
    if(navigator.share){navigator.share({title:t('site_title'),text,url}).catch(()=>{});return;}
    copyLink(ty);
  }
  function toast(msg){
    let el=document.getElementById('toast');
    if(!el){el=document.createElement('div');el.id='toast';document.body.appendChild(el);}
    el.textContent=msg;el.classList.add('show');
    setTimeout(()=>el.classList.remove('show'),1800);
  }

  // ---- 공통 셸 ----
  function render(){
    document.querySelectorAll('#langSel button').forEach(b=>b.classList.toggle('on',b.dataset.l===lang));
    document.getElementById('f-about').textContent=t('footer_about');
    document.getElementById('f-privacy').textContent=t('footer_privacy');
    document.getElementById('f-contact').textContent=t('footer_contact');
    const fn=document.getElementById('f-note'); if(fn)fn.textContent=t('footer_note');
    route();
  }
  window.addEventListener('hashchange',route);
  document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('brand').onclick=()=>{location.hash='home';};
    document.querySelectorAll('#langSel button').forEach(b=>b.onclick=()=>setLang(b.dataset.l));
    document.documentElement.lang=lang; render();
  });
})();
