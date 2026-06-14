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
  let justCompleted = false;  // 방금 테스트를 정상 완료했는지 (링크 직접접근 구분용)

  // sessionStorage로 완료 여부 저장/확인 (새로고침 대응)
  function markCompleted(id, type){
    try { sessionStorage.setItem('tp_done', id+'/'+type); } catch(e){}
    justCompleted = true;
  }
  function checkCompleted(id, type){
    // justCompleted 플래그 먼저 확인 (같은 세션 내 직접 완료)
    if(justCompleted) return true;
    // sessionStorage에서 확인 (새로고침 시)
    try {
      const v = sessionStorage.getItem('tp_done');
      return v === id+'/'+type;
    } catch(e){ return false; }
  }
  function clearCompleted(){
    justCompleted = false;
    try { sessionStorage.removeItem('tp_done'); } catch(e){}
  }
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
  // 배열 셔플 (Fisher–Yates)
  function shuffle(arr){
    for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; }
    return arr;
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
      if(loadTest(id)){ window.scrollTo(0,0); renderIntro(); return; }
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

    // 추천 카드덱: 신규 테스트 먼저, 나머지 랜덤으로 채움
    // 추천 덱: 최신 3개 제외한 나머지에서 랜덤 5개
    const recentCount = 3;
    const recentIds = new Set(TESTS.slice(-recentCount).map(t => t.id));
    const featured = shuffle(TESTS.filter(t => !recentIds.has(t.id)).slice()).slice(0, 5);
    // 전체 그리드: 최신 3개 상단 고정(역순) + 나머지 랜덤
    const pinned = TESTS.slice(-recentCount).reverse();
    const shuffled = [...pinned, ...shuffle(TESTS.slice(0, TESTS.length - recentCount))];

    app.innerHTML=`
      <!-- 플로팅 장식 -->
      <div class="floating-deco" aria-hidden="true">
        <span class="deco-item">✨</span>
        <span class="deco-item">💎</span>
        <span class="deco-item">⭐</span>
        <span class="deco-item">🌟</span>
        <span class="deco-item">✦</span>
        <span class="deco-item">💫</span>
        <span class="deco-item">🔮</span>
        <span class="deco-item">✧</span>
      </div>

      <!-- 메인 배너 -->
      <section class="hub-hero">
        <div class="hub-banner"><img src="images/og.jpg" alt="testpop" loading="eager"></div>
        <p class="hub-sub">${t('hub_sub')}</p>
      </section>

      <!-- 추천 카드 덱 (Swiper) -->
      <section class="featured-deck">
        <p class="deck-title">✦ ${t('featured_deck')||'추천 테스트'} ✦</p>
        <div class="swiper swiper-deck">
          <div class="swiper-wrapper">
            ${featured.map(m=>`
              <div class="swiper-slide" role="button" tabindex="0"
                   aria-label="${L(m.title)}"
                   data-href="#test/${m.id}">
                ${recentIds.has(m.id) ? '<span class="deck-badge-new">✨ NEW</span>' : ''}
                <img class="deck-card-img" src="${m.thumb}" alt="${L(m.title)}" loading="lazy">
                <div class="deck-card-info">
                  <div class="deck-card-name">${m.emoji} ${L(m.title)}</div>
                  <div class="deck-card-desc">${L(m.desc)}</div>
                  <span class="deck-card-btn">${t('do_test')} →</span>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </section>

      <!-- 전체 테스트 리스트 -->
      <p class="list-title" id="all-tests-section">${t('all_tests')||'전체 테스트'}</p>
      <section class="test-list">
        ${shuffled.map(m=>`
          <a class="test-card" href="#test/${m.id}" aria-label="${L(m.title)}">
            ${recentIds.has(m.id) ? '<span class="badge-new">✨ NEW</span>' : ''}
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

    // Swiper 초기화
    initSwiper();

    // 카드 등장 애니메이션 (IntersectionObserver)
    initCardAnimation();

    // 3D 틸트 + sparkle (test-card)
    document.querySelectorAll('.test-card').forEach(el=>{
      initTilt(el);
      el.addEventListener('click', e=>{
        spawnSparkle(e.clientX || e.touches?.[0]?.clientX || 0,
                     e.clientY || e.touches?.[0]?.clientY || 0);
      });
    });

    // Swiper 슬라이드 틸트
    document.querySelectorAll('.swiper-deck .swiper-slide').forEach(el=>{
      initTilt(el);
    });

    // 스와이프 카드 클릭
    document.querySelectorAll('.swiper-slide[data-href]').forEach(el=>{
      el.addEventListener('click', ()=>{ location.hash=el.dataset.href.slice(1); });
      el.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' ') location.hash=el.dataset.href.slice(1); });
    });
  }

  // ---- Swiper 초기화 ----
  function initSwiper(){
    if(typeof Swiper === 'undefined') return;
    try {
      new Swiper('.swiper-deck', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
          rotate: 30,
          stretch: 0,
          depth: 80,
          modifier: 1,
          slideShadows: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    } catch(e) {
      // Swiper 로드 실패 시 fallback
      const deck = document.querySelector('.swiper-deck');
      if(deck){
        deck.style.display='flex';
        deck.style.overflowX='auto';
        deck.style.gap='12px';
        deck.style.padding='0 18px';
      }
    }
  }

  // ---- 카드 등장 애니메이션 ----
  function initCardAnimation(){
    // prefers-reduced-motion 체크
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.test-card').forEach(el=>el.classList.add('visible'));
      return;
    }
    if(!('IntersectionObserver' in window)){
      document.querySelectorAll('.test-card').forEach(el=>el.classList.add('visible'));
      return;
    }
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.test-card').forEach(el=>obs.observe(el));
  }

  // ---- 화면: 테스트 인트로 ----
  function renderIntro(){
    setTitle(curId);
    const m=getTestMeta(curId);
    const app=document.getElementById('app');

    // 페이지 전환 fade
    app.style.opacity='0';
    app.style.transform='translateY(12px)';
    app.style.transition='opacity .25s ease, transform .25s ease';

    app.innerHTML=`
      <section class="hero">
        <div class="hero-art"><img src="${m.thumb}" alt="" loading="eager"></div>
        <h1 class="hero-title">${m.emoji} ${L(m.title)}</h1>
        <p class="hero-sub hero-desc">${L(m.desc)}</p>
        <p class="hero-sub hero-10sec">${t('ten_sec_prefix')}</p>
        <button class="btn-primary" id="startBtn">${t('start')}</button>
      </section>
      <div class="share-intro-wrap">
        <button class="btn-share-intro" id="shareIntroBtn">🔗 ${t('share_intro')}</button>
        <a class="back-to-home" href="#home" id="backToHomeBtn">← ${t('back_to_tests')}</a>
      </div>
    `;

    // 등장 애니메이션
    requestAnimationFrame(()=>{
      requestAnimationFrame(()=>{
        app.style.opacity='1';
        app.style.transform='translateY(0)';
        setTimeout(()=>{ app.style.transition=''; }, 300);
      });
    });

    document.getElementById('startBtn').onclick=()=>{
      // 버튼 눌렸을 때 sparkle
      const btn = document.getElementById('startBtn');
      if(btn){
        const r = btn.getBoundingClientRect();
        spawnSparkle(r.left + r.width/2, r.top + r.height/2);
      }
      answers=[];qIndex=0;
      track('test_start',{test_id:curId});
      location.hash='quiz';
    };

    // 인트로 공유 버튼
    const shareIntroBtn = document.getElementById('shareIntroBtn');
    if(shareIntroBtn){
      shareIntroBtn.onclick=()=>{
        const url = location.origin + location.pathname + '#test/' + curId;
        if(navigator.share){
          navigator.share({ title: document.title, url });
        } else {
          navigator.clipboard.writeText(url).then(()=>{
            shareIntroBtn.textContent = '✓ ' + t('copied');
            setTimeout(()=>{ shareIntroBtn.innerHTML = '🔗 ' + t('share_intro'); }, 2000);
          });
        }
        track('result_share',{test_id:curId,share_type:'intro'});
      };
    }

    // 다른 테스트 보기 — 홈 이동 후 전체 테스트 섹션으로 스크롤
    const backToHomeBtn = document.getElementById('backToHomeBtn');
    if(backToHomeBtn){
      backToHomeBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        location.hash = 'home';
        setTimeout(()=>{
          const sec = document.getElementById('all-tests-section');
          if(sec) sec.scrollIntoView({ behavior:'smooth', block:'start' });
        }, 100);
      });
    }
  }

  // ---- 화면: 퀴즈 ----
  function renderQuiz(slideOut){
    const qs=TEST.questions[lang]||TEST.questions.ko;
    if(qIndex>=qs.length){
      const rt=calcType();
      track('test_complete',{test_id:curId,result_type:rt});
      markCompleted(curId, rt);
      showAnalyzing(rt);
      return;
    }

    const q=qs[qIndex];
    const pct=Math.round((qIndex)/qs.length*100);
    const app=document.getElementById('app');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 첫 문제: 전체 HTML 렌더링 — 프로그레스바/카운트는 quiz 밖에 고정
    if(!app.querySelector('.quiz-wrap')){
      app.innerHTML=`
        <div class="quiz-wrap">
          <div class="quiz-header">
            <div class="qbar"><div class="qbar-fill" style="width:0%"></div></div>
            <div class="qcount" id="qcount">${qIndex+1} / ${qs.length}</div>
          </div>
          <section class="quiz">
            <h2 class="qtext" id="qtext"></h2>
            <div class="answers" id="answers" style="opacity:0"></div>
          </section>
        </div>
      `;
      requestAnimationFrame(()=>{
        const bar = app.querySelector('.qbar-fill');
        if(bar) bar.style.width = pct + '%';
      });
      typeQuestion(q, qs.length, reduced);
      return;
    }

    // 2번째~ 문제: 헤더는 그대로 두고 quiz 섹션 내용만 교체
    const quiz = app.querySelector('.quiz');

    const doUpdate = () => {
      // 프로그레스바 & 카운트 — 애니메이션 없이 조용히 업데이트
      const bar = app.querySelector('.qbar-fill');
      const cnt = document.getElementById('qcount');
      if(bar) bar.style.width = pct + '%';
      if(cnt) cnt.textContent = (qIndex+1) + ' / ' + qs.length;

      // 질문/선택지 초기화
      const qtxt = document.getElementById('qtext');
      const ansEl = document.getElementById('answers');
      if(qtxt){ qtxt.style.opacity='0'; qtxt.textContent=''; }
      if(ansEl){ ansEl.style.opacity='0'; ansEl.innerHTML=''; }

      // quiz 섹션 슬라이드 인
      if(!reduced){
        quiz.classList.remove('slide-out');
        quiz.style.animation = 'none';
        requestAnimationFrame(()=>{ quiz.style.animation=''; });
      }

      typeQuestion(q, qs.length, reduced);
    };

    if(slideOut && !reduced){
      quiz.classList.add('slide-out');
      setTimeout(doUpdate, 180);
    } else {
      doUpdate();
    }
  }

  // ---- 질문 타이핑 효과 ----
  function typeQuestion(q, total, reduced){
    const qtxt = document.getElementById('qtext');
    const ansEl = document.getElementById('answers');
    if(!qtxt || !ansEl) return;

    // 답변 셔플 (매 문제마다 랜덤 순서)
    const shuffled = q.a.slice().sort(()=>Math.random()-.5);

    // 모션 감소 시 바로 표시
    if(reduced){
      qtxt.textContent = q.q;
      qtxt.style.opacity = '1';
      ansEl.innerHTML = shuffled.map(opt=>{
        const origIdx = q.a.indexOf(opt);
        return `<button class="answer" data-i="${origIdx}">${opt.t}</button>`;
      }).join('');
      ansEl.style.opacity = '1';
      bindAnswers(q);
      return;
    }

    // 질문 타이핑
    const text = q.q;
    let i = 0;
    qtxt.style.opacity = '1';

    function typeChar(){
      if(i <= text.length){
        qtxt.textContent = text.slice(0, i);
        i++;
        setTimeout(typeChar, 65);
      } else {
        // 타이핑 완료 → 선택지 순차 등장 (150ms 간격, 딜레이 추가)
        setTimeout(()=>{
          ansEl.innerHTML = shuffled.map(opt=>{
            const origIdx = q.a.indexOf(opt);
            return `<button class="answer" data-i="${origIdx}" style="opacity:0;transform:translateY(20px);transition:none">${opt.t}</button>`;
          }).join('');
          ansEl.style.opacity = '1';

          const btns = ansEl.querySelectorAll('.answer');
          btns.forEach((btn, idx)=>{
            setTimeout(()=>{
              btn.style.transition = 'opacity .3s ease, transform .3s ease';
              btn.style.opacity = '1';
              btn.style.transform = 'translateY(0)';
            }, 100 + idx * 150);
          });

          // 버튼 등장과 동시에 바로 이벤트 연결
          bindAnswers(q);
        }, 300);
      }
    }
    typeChar();
  }

  // ---- 답변 버튼 이벤트 연결 ----
  function bindAnswers(q){
    const app = document.getElementById('app');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    app.querySelectorAll('.answer').forEach((btn)=>{
      btn.onclick=()=>{
        btn.classList.add('selected');
        btn.disabled = true;
        app.querySelectorAll('.answer').forEach(b=>{ if(b!==btn) b.style.opacity='.45'; });

        const r=btn.getBoundingClientRect();
        spawnSparkle(r.left+r.width/2, r.top+r.height/2);

        setTimeout(()=>{
          answers.push(q.a[+btn.dataset.i].s);
          qIndex++;
          window.scrollTo({top:0, behavior:'smooth'});
          renderQuiz(true);
        }, 150);
      };
    });
  }

  // ---- 화면: 결과 ----
  function renderResult(ty){
    setTitle(curId);
    const m=TEST.meta[ty], d=TEST.types[ty][lang];
    const bestD=TEST.types[d.best][lang], worstD=TEST.types[d.worst][lang];
    const meta=getTestMeta(curId);
    const fromLink = !checkCompleted(curId, ty);
    clearCompleted(); // 소비 후 초기화 (다른 테스트로 이동 시 오염 방지)
    const app=document.getElementById('app');
    app.innerHTML=`
      <section class="result">
        ${fromLink?`<a class="friend-banner" href="#test/${curId}">${t('friend_result')}<span class="friend-cta">${t('try_too')} →</span></a>`:''}
        <p class="result-label">${L(TEST.resultLabel)}</p>

        <!-- 결과 카드 -->
        <div class="result-flip-wrap">
          <div class="result-card result-card-spin" style="--c:${m.color};--ink:${m.ink}" id="resultCard">
            <img class="result-img" src="${m.img}" alt="${d.name}">
            <h2 class="result-name">${d.name}</h2>
            <p class="result-tag">${d.tag}</p>
          </div>
        </div>

        <p class="result-desc">${d.desc}</p>
        <div class="ad-slot" data-slot="result-mid" aria-hidden="true"></div>
        <div class="match">
          <div class="match-item best"><span class="match-label">💕 ${t('match_best')}</span><span>${bestD.name}</span></div>
          <div class="match-item worst"><span class="match-label">⚡ ${t('match_worst')}</span><span>${worstD.name}</span></div>
        </div>
        ${!fromLink ? `
        <div class="card-maker">
          <p class="card-maker-label">${t('card_hint')}</p>
          <input id="nick" type="text" maxlength="12" placeholder="${t('nickname_ph')}">
          <button class="btn-make" id="cardBtn">${t('make_card')}</button>
        </div>
        <canvas id="cardCanvas" width="720" height="1500" style="display:none"></canvas>
        <div class="share-row">
          <button class="btn-share save" id="saveBtn">${t('save_image')}</button>
          <button class="btn-share share" id="shareBtn">${t('share')}</button>
        </div>
        ` : `
        <div class="share-row">
          <button class="btn-share share" id="shareBtn">${t('share')}</button>
        </div>
        `}
        <div class="result-actions">
          <button class="btn-ghost" id="retryBtn">${t('retry')}</button>
          <a class="btn-ghost" href="#home" style="text-decoration:none">${t('other_tests')}</a>
        </div>
        <div class="ad-slot" data-slot="result-bottom" aria-hidden="true"></div>
      </section>
    `;
    document.getElementById('retryBtn').onclick=()=>{answers=[];qIndex=0;location.hash='quiz';};
    document.getElementById('shareBtn').onclick=()=>{track('result_share',{test_id:curId,result_type:ty});shareSocial(ty,d);};
    if(!fromLink){
      document.getElementById('cardBtn').onclick=()=>drawCard(ty,d,false);
      document.getElementById('saveBtn').onclick=()=>{track('card_save',{test_id:curId,result_type:ty});drawCard(ty,d,true);};
    }

    // 결과 도달 시 confetti (테스트 완료한 경우만)
    if(!fromLink) setTimeout(()=> launchConfetti(), 600);
  }

  // ---- 결과 카드 Canvas ----
  function drawCard(ty,d,download){
    const m=TEST.meta[ty];
    const cv=document.getElementById('cardCanvas'), ctx=cv.getContext('2d');
    const nick=(document.getElementById('nick').value||'').trim();
    const img=new Image(); img.crossOrigin='anonymous';
    img.onload=()=>{
      // ---- 720×1280 완전 고정 (9:16) ----
      const W=720, H=1280;
      cv.width=W; cv.height=H;

      const pad=28;
      // 고정 영역
      const wmH = 88;
      const tagAreaH = 64;
      const bottomFixed = pad + wmH + tagAreaH; // 하단 고정

      // 설명 영역: 전체의 26% (너무 넓지 않게)
      const descAreaTarget = Math.round(H * 0.26);
      const gapTop = pad + 10;  // 상단 여백
      const gapMid = 22;        // 이미지↔설명 간격
      const ih = H - gapTop - gapMid - descAreaTarget - bottomFixed;
      const iw = W - pad*2 - 20;
      const ix = pad + 10;
      const iy = gapTop;

      // 배경
      ctx.fillStyle=m.color; ctx.fillRect(0,0,W,H);
      const r=40;
      roundRect(ctx,pad,pad,W-pad*2,H-pad*2,r); ctx.fillStyle='#fff'; ctx.fill();

      // 이미지
      roundRect(ctx,ix,iy,iw,ih,28); ctx.save(); ctx.clip();
      const ratio=Math.max(iw/img.width,ih/img.height),dw=img.width*ratio,dh=img.height*ratio;
      ctx.drawImage(img,ix+(iw-dw)/2,iy+(ih-dh)/2,dw,dh);

      // 이미지 하단 그라데이션 띠
      const bandH = nick ? 270 : 200;
      const hex=m.color.replace('#','');
      const cr=parseInt(hex.slice(0,2),16), cg=parseInt(hex.slice(2,4),16), cb=parseInt(hex.slice(4,6),16);
      const grad=ctx.createLinearGradient(0,iy+ih-bandH,0,iy+ih);
      grad.addColorStop(0,`rgba(${cr},${cg},${cb},0)`);
      grad.addColorStop(0.4,`rgba(${cr},${cg},${cb},0.55)`);
      grad.addColorStop(1,`rgba(${cr},${cg},${cb},0.95)`);
      ctx.fillStyle=grad; ctx.fillRect(ix,iy+ih-bandH,iw,bandH);
      ctx.restore();

      // 유형명
      ctx.textAlign='center';
      let nameSize=54;
      do { ctx.font='bold '+nameSize+'px "Noto Sans KR",sans-serif';
           if(ctx.measureText(d.name).width<=iw-40) break; nameSize-=3;
      } while(nameSize>32);

      function setShadow(ctx,strong){ ctx.shadowColor='rgba(0,0,0,0.55)'; ctx.shadowBlur=strong?12:8; ctx.shadowOffsetX=0; ctx.shadowOffsetY=strong?2:1; }
      function clearShadow(ctx){ ctx.shadowColor='transparent'; ctx.shadowBlur=0; ctx.shadowOffsetX=0; ctx.shadowOffsetY=0; }

      if(nick){
        setShadow(ctx,true);
        ctx.fillStyle='#fff'; ctx.font='bold '+nameSize+'px "Noto Sans KR",sans-serif';
        ctx.fillText(d.name, W/2, iy+ih-100);
        clearShadow(ctx);
        ctx.font='bold 44px "Noto Sans KR",sans-serif';
        const tw=ctx.measureText(nick).width, bw=Math.min(tw+68,iw-40), bh=68;
        const bx=(W-bw)/2, by=iy+ih-80;
        roundRect(ctx,bx,by,bw,bh,34); ctx.fillStyle='rgba(255,255,255,0.95)'; ctx.fill();
        ctx.fillStyle=m.color; ctx.fillText(nick, W/2, by+47);
        clearShadow(ctx);
      } else {
        setShadow(ctx,true);
        ctx.fillStyle='#fff'; ctx.fillText(d.name, W/2, iy+ih-40);
        clearShadow(ctx);
      }

      // 설명 영역
      const descTop = iy + ih + gapMid;
      const descAreaH = H - pad - descTop - wmH - tagAreaH;
      const maxW = W-pad*2-40;

      // B: 폰트를 공간에 맞게 키움 (최대 38px, 최소 22px)
      let fontSize=38;
      let descLines, lineH;
      while(fontSize>=22){
        lineH=Math.round(fontSize*1.55);
        ctx.font=fontSize+'px "Noto Sans KR",sans-serif';
        descLines=splitLines(ctx,d.desc,maxW);
        if(descLines.length*lineH<=descAreaH) break;
        fontSize-=2;
      }
      if(descLines.length*lineH>descAreaH){
        const ml=Math.floor(descAreaH/lineH);
        descLines=descLines.slice(0,ml);
        if(descLines.length>0) descLines[descLines.length-1]=descLines[descLines.length-1].replace(/.{0,3}$/,'…');
      }

      // 설명 텍스트 수직 중앙 정렬 (태그 영역 위)
      const totalDescH = descLines.length*lineH;
      const descStartY = descTop + Math.floor((descAreaH - totalDescH)/2) + lineH*0.85;
      ctx.textAlign='center'; ctx.fillStyle='#444';
      ctx.font=fontSize+'px "Noto Sans KR",sans-serif';
      descLines.forEach((ln,i)=>ctx.fillText(ln, W/2, descStartY+i*lineH));

      // C: 태그 영역 — 해시태그/닉네임 모두 칩으로 표시
      const tagY = H - pad - wmH - tagAreaH + 10;
      const tagStr = d.tag || '';
      // #으로 시작하면 공백으로 분리, 아니면 단어 단위로 분리 (최대 3개)
      const isHashTag = tagStr.trim().startsWith('#');
      const tags = isHashTag
        ? tagStr.split(' ').filter(t => t.startsWith('#'))
        : tagStr.split(/[\s,]+/).filter(Boolean).slice(0, 4);

      if(tags.length){
        ctx.font = 'bold 24px "Noto Sans KR",sans-serif';
        const chipPadX=20, chipGap=10, chipR=20, chipH=52;
        let totalChipW = tags.reduce((s,t,i)=>s+ctx.measureText(t).width+chipPadX*2+(i?chipGap:0), 0);

        const drawChips = (tagArr, startY) => {
          let rw = tagArr.reduce((s,t,i)=>s+ctx.measureText(t).width+chipPadX*2+(i?chipGap:0),0);
          let cx = (W - rw) / 2;
          tagArr.forEach(tag=>{
            const cw = ctx.measureText(tag).width + chipPadX*2;
            roundRect(ctx, cx, startY, cw, chipH, chipR);
            ctx.fillStyle = m.color+'22'; ctx.fill();
            ctx.strokeStyle = m.color+'88'; ctx.lineWidth = 1.5; ctx.stroke();
            ctx.fillStyle = m.color;
            ctx.fillText(tag, cx + cw/2, startY + chipH*0.66);
            cx += cw + chipGap;
          });
        };

        if(totalChipW > maxW){
          // 두 줄로 분리
          const mid = Math.ceil(tags.length/2);
          drawChips(tags.slice(0, mid), tagY);
          drawChips(tags.slice(mid), tagY + chipH + 8);
        } else {
          drawChips(tags, tagY + (chipH/2 - chipH/2)); // 수직 중앙
        }
      }

      // 워터마크 — 카드 하단 고정
      const wmY1 = H - pad - 16;
      const wmY2 = wmY1 - 46;
      ctx.fillStyle=m.color; ctx.font='bold 34px sans-serif';
      ctx.fillText('testpop.app', W/2, wmY1);
      ctx.fillStyle='#aaa'; ctx.font='28px "Noto Sans KR",sans-serif';
      ctx.fillText(L(getTestMeta(curId).title), W/2, wmY2);

      // Canvas → img 태그로 교체 (백그라운드 복귀 시 소실 방지)
      const dataUrl = cv.toDataURL('image/png');
      cv.style.display='none';

      // 기존 미리보기 이미지 제거 후 새로 삽입
      const oldPreview = document.getElementById('cardPreview');
      if(oldPreview) oldPreview.remove();
      const preview = document.createElement('img');
      preview.id = 'cardPreview';
      preview.src = dataUrl;
      preview.style.cssText = 'width:100%;border-radius:20px;display:block;box-shadow:0 4px 20px rgba(0,0,0,.12)';
      cv.parentNode.insertBefore(preview, cv);

      // 생성된 이미지 상단이 topbar 바로 아래에 딱 맞게 스크롤
      setTimeout(()=>{
        const topbar = document.querySelector('.topbar');
        const topbarH = topbar ? topbar.offsetHeight : 0;
        const top = preview.getBoundingClientRect().top + window.scrollY - topbarH;
        window.scrollTo({ top, behavior: 'smooth' });
      }, 50);

      if(download){
        const a=document.createElement('a');
        const clean=(s)=>(s||'').replace(/[^\p{L}\p{N}]+/gu,'').slice(0,20);
        const stamp=new Date().toISOString().slice(0,19).replace(/[-:T]/g,'');
        const parts=['testpop', clean(d.name), nick&&clean(nick), stamp].filter(Boolean);
        a.download=parts.join('_')+'.png';
        a.href=dataUrl; a.click();
      }
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
  // ---- 결과 분석 타이핑 화면 ----
  function showAnalyzing(resultType){
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const app = document.getElementById('app');
    const emoji = TEST.emoji || '🔮';

    if(reduced){
      location.hash = 'result/'+curId+'/'+resultType;
      return;
    }

    // 중간 랜덤 메시지 풀 (ko/en/ja/zh 각 25개)
    const midPool = {
      ko: [
        '음... 생각보다 복잡한 성격이네요 🤯',
        '이거 어디서 많이 본 유형인데 🧐',
        '확실히 독특한 면이 있어요 👀',
        '친구들도 비슷하게 생각할 것 같은데요 😏',
        '아, 이래서 그랬군요! 🙊',
        '데이터가 너무 명확해서 놀랐어요 😲',
        '솔직히 처음 답변에서 이미 알았어요 🔮',
        '우주가 당신의 유형을 알고 있었습니다 🌌',
        '잠깐, 이거 예상 밖인데요? 😳',
        '고민할 것도 없네요, 딱 이거예요 ✅',
        '통계적으로 꽤 드문 유형이에요 📊',
        'AI가 세 번 확인하고 있습니다 🤖',
        '결과가 충격적일 수도 있어요 (아닐 수도) 😅',
        '주변에 이런 유형 많이 있죠? 🫠',
        '빨리 친구한테 공유하고 싶을걸요 📱',
        '이 유형 진짜 맞는 것 같은데요? 🎯',
        '잠깐 커피 한 잔 하고 올게요... ☕',
        '음... 마지막 답변이 결정적이었어요 🃏',
        '역시 예상한 대로네요 😌',
        '이거 친구한테 보내면 깜짝 놀랄 걸요 🎁',
        '결과를 보고 공감할 준비 되셨나요? 😆',
        '전 세계 테스트 유형 중 이게 뭔지 알아요 🗺️',
        '지금 심장 두근거리지 않으세요? 💓',
        '솔직히 저도 두근두근합니다 🥺',
        '이 결과 진짜 찰떡같을 거예요 👌',
      ],
      en: [
        'Hmm... more complex than expected 🤯',
        "I've seen this type somewhere before 🧐",
        'You definitely have a unique side 👀',
        'Your friends probably think the same 😏',
        "Ahhh, so THAT'S why! 🙊",
        'The data is surprisingly clear 😲',
        'Honestly, I knew from your first answer 🔮',
        'The universe already knew your type 🌌',
        'Wait, this is unexpected... 😳',
        "No need to think twice, it's definitely this ✅",
        'Statistically quite a rare type 📊',
        'AI is triple-checking this 🤖',
        'Results may or may not be shocking 😅',
        'You know someone exactly like this, right? 🫠',
        'You will want to share this immediately 📱',
        'This type is spot on for you 🎯',
        'Just grabbing a coffee real quick... ☕',
        'That last answer was the deciding factor 🃏',
        'Exactly as I expected 😌',
        'Your friends will be surprised by this 🎁',
        'Ready to feel totally called out? 😆',
        'I know exactly which type this is 🗺️',
        'Is your heart beating faster right now? 💓',
        "I'll be honest, even I'm excited 🥺",
        "This result is going to fit you perfectly 👌",
      ],
      ja: [
        'うーん...思ったより複雑な性格ですね 🤯',
        'どこかで見たことあるタイプですね 🧐',
        '確かに独特な面がありますね 👀',
        '友達も同じように思ってそうです 😏',
        'あ、だからそうだったんですね！ 🙊',
        'データがあまりにも明確で驚きました 😲',
        '最初の回答でもう分かってました 🔮',
        '宇宙があなたのタイプを知っていました 🌌',
        'ちょっと待って、予想外かも？ 😳',
        '迷う必要なし、絶対これですよ ✅',
        '統計的にかなり珍しいタイプです 📊',
        'AIが三回確認しています 🤖',
        '結果は衝撃的かも（そうでないかも）😅',
        '周りにこういうタイプいますよね 🫠',
        '早く友達にシェアしたくなりますよ 📱',
        'ぴったりのタイプだと思います 🎯',
        'ちょっとコーヒー飲んできます... ☕',
        '最後の回答が決め手になりました 🃏',
        'やっぱり予想通りでしたね 😌',
        '友達が驚くと思いますよ 🎁',
        '共感する準備はできていますか？ 😆',
        'どのタイプか分かりましたよ 🗺️',
        'ドキドキしていませんか？ 💓',
        '私もドキドキしています 🥺',
        'ぴったりな結果になるはずです 👌',
      ],
      zh: [
        '嗯...性格比想象中复杂 🤯',
        '这个类型在哪里见过 🧐',
        '确实有独特的一面呢 👀',
        '朋友们应该也这样觉得吧 😏',
        '啊，原来是这样！ 🙊',
        '数据清晰到让我惊讶了 😲',
        '说实话，第一个答案就知道了 🔮',
        '宇宙早就知道你的类型了 🌌',
        '等等，这有点出乎意料？ 😳',
        '不用犹豫，就是这个 ✅',
        '统计上来说这是相当罕见的类型 📊',
        'AI正在三次确认 🤖',
        '结果可能令人震惊（也可能不会）😅',
        '周围有这种类型的人吧？ 🫠',
        '你会想立刻分享给朋友的 📱',
        '感觉这个类型非常适合你 🎯',
        '我去喝杯咖啡马上回来... ☕',
        '最后那个答案是关键 🃏',
        '果然不出所料 😌',
        '朋友看到会很惊讶的 🎁',
        '准备好感同身受了吗？ 😆',
        '我知道是哪个类型了 🗺️',
        '现在心跳有没有加速？ 💓',
        '说实话我也很期待 🥺',
        '这个结果一定非常贴切 👌',
      ],
    };

    const pool = (midPool[lang] || midPool.ko).slice().sort(()=>Math.random()-.5);
    const mid = pool.slice(0, 4); // 3개→4개로 증가

    const fixed = {
      ko: { first:'답변 열심히 읽는 중... 📖', pre:'거의 다 됐어요, 조금만요...', drum:'두구두구두구두구두구두구두구두구두구두구두구두구\n두구두구두구두구두구두구두구두구두구두구두구두구... 🥁', last:'✅ 분석 완료!' },
      en: { first:'Reading your answers carefully... 📖', pre:'Almost there, just a little more...', drum:'Drumroll drumroll drumroll drumroll drumroll drumroll\nDrumroll drumroll drumroll drumroll drumroll drumroll... 🥁', last:'✅ Analysis complete!' },
      ja: { first:'答えを一生懸命読んでいます... 📖', pre:'もうすぐですよ、ちょっと待って...', drum:'ドドドドドドドドドドドドドドドドドドドドドドドド\nドドドドドドドドドドドドドドドドドドドドドドドド... 🥁', last:'✅ 分析完了！' },
      zh: { first:'正在认真阅读你的答案... 📖', pre:'快好了，再等一下...', drum:'咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚\n咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚... 🥁', last:'✅ 分析完成！' },
    };
    const f = fixed[lang] || fixed.ko;
    const msgList = [f.first, ...mid, f.pre, f.drum, f.last];
    const drumIdx = msgList.length - 2;
    const totalTime = msgList.length * 1600 + 3000; // 마지막 멘트 노출 시간 확보

    app.innerHTML = `
      <div class="analyzing-screen">
        <div class="analyzing-emoji">${emoji}</div>
        <div class="analyzing-text" id="analyzingText"></div>
        <div class="analyzing-bar">
          <div class="analyzing-bar-fill" id="analyzingBar"></div>
        </div>
      </div>
    `;

    const textEl = document.getElementById('analyzingText');
    const barEl  = document.getElementById('analyzingBar');
    let msgIdx = 0, charIdx = 0;
    let fullText = msgList[0];

    function typeNext(){
      const isDrum = msgIdx === drumIdx;
      const isLast = msgIdx === msgList.length - 1;
      const speed = isDrum ? 60 : isLast ? 90 : 55;

      // 두구두구 시작 시 shake 클래스 추가
      if(isDrum && charIdx === 0){
        const screen = document.querySelector('.analyzing-screen');
        if(screen) screen.classList.add('drumroll');
      }

      if(charIdx < fullText.length){
        charIdx++;
        textEl.innerHTML = fullText.slice(0, charIdx) + '<span class="analyzing-cursor"></span>';
        setTimeout(typeNext, speed);
      } else {
        textEl.innerHTML = fullText + '<span class="analyzing-cursor"></span>';

        // 두구두구 끝나면 shake 제거
        if(isDrum){
          const screen = document.querySelector('.analyzing-screen');
          if(screen) screen.classList.remove('drumroll');
        }

        msgIdx++;
        if(msgIdx < msgList.length){
          const isLastMsg = msgIdx === msgList.length - 1;
          const delay = isLastMsg ? 2500 : 500;
          setTimeout(()=>{
            textEl.style.transition = 'opacity .2s ease';
            textEl.style.opacity = '0';
            setTimeout(()=>{
              fullText = msgList[msgIdx];
              charIdx = 0;
              textEl.innerHTML = '<span class="analyzing-cursor"></span>';
              textEl.style.opacity = '1';
              setTimeout(typeNext, 80);
            }, 200);
          }, delay);
        }
      }
    }

    const steps = 30;
    let step = 0;
    const barTimer = setInterval(()=>{
      step++;
      if(barEl) barEl.style.width = Math.min(step/steps*100, 100) + '%';
      if(step >= steps) clearInterval(barTimer);
    }, totalTime / steps);

    typeNext();

    setTimeout(()=>{
      app.style.transition = 'opacity .25s ease';
      app.style.opacity = '0';
      setTimeout(()=>{
        app.style.transition = '';
        app.style.opacity = '1';
        location.hash = 'result/'+curId+'/'+resultType;
      }, 250);
    }, totalTime);
  }

    // ---- 결과 카드 뒤집기 ----
  function initCardFlip(fromLink){
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const inner = document.getElementById('flipInner');
    const card  = document.getElementById('resultCard');
    if(!inner || !card) return;

    // 공유 링크로 직접 접근했거나 모션 감소 설정이면 바로 앞면 표시
    if(fromLink || reduced){
      inner.classList.add('flipping');
      card.classList.add('flipped');
      return;
    }

    // 뒷면을 먼저 보여주기 위해 초기 상태를 뒤집힌 상태로 설정
    inner.style.transform = 'rotateY(-180deg)';
    inner.style.transition = 'none';

    // 0.6초 후 자동으로 뒤집기 (confetti 타이밍과 맞춤)
    setTimeout(()=>{
      inner.style.transition = '';
      inner.classList.add('flipping');
      card.classList.add('flipped');

      // 뒤집힌 순간 sparkle
      const rect = inner.getBoundingClientRect();
      spawnSparkle(rect.left + rect.width/2, rect.top + rect.height/2);
    }, 600);

    // 탭으로도 즉시 뒤집기 가능
    let flipped = false;
    inner.addEventListener('click', ()=>{
      if(flipped) return;
      flipped = true;
      inner.style.transition = 'transform .4s cubic-bezier(.4,0,.2,1)';
      inner.classList.add('flipping');
      card.classList.add('flipped');
      const rect = inner.getBoundingClientRect();
      spawnSparkle(rect.left + rect.width/2, rect.top + rect.height/2);
    }, { once: true });
  }

  // ---- 3D 틸트 효과 ----
  function initTilt(el){
    if(!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduced) return;

    function applyTilt(x, y){
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (x - cx) / (rect.width  / 2); // -1 ~ 1
      const dy = (y - cy) / (rect.height / 2);
      const rotX = (-dy * 8).toFixed(2);  // 최대 ±8도
      const rotY = ( dx * 8).toFixed(2);
      el.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
      el.classList.add('tilting');
    }
    function resetTilt(){
      el.style.transform = '';
      el.style.transition = 'transform .4s ease';
      el.classList.remove('tilting');
      setTimeout(()=>{ el.style.transition = ''; }, 400);
    }

    // 마우스
    el.addEventListener('mousemove', e => applyTilt(e.clientX, e.clientY));
    el.addEventListener('mouseleave', resetTilt);

    // 터치 (모바일)
    el.addEventListener('touchmove', e => {
      const t = e.touches[0];
      applyTilt(t.clientX, t.clientY);
    }, { passive: true });
    el.addEventListener('touchend', resetTilt);
  }

  // ---- 탭 Sparkle 효과 ----
  function spawnSparkle(x, y){
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduced) return;
    const icons = ['✨','⭐','💫','✦','🌟','💎'];
    const count = 6;
    for(let i = 0; i < count; i++){
      const el = document.createElement('span');
      el.className = 'sparkle-particle';
      el.textContent = icons[Math.floor(Math.random() * icons.length)];
      const angle = (360 / count) * i + Math.random() * 30;
      const dist  = 40 + Math.random() * 30;
      const rad   = angle * Math.PI / 180;
      const tx = Math.cos(rad) * dist;
      const ty = Math.sin(rad) * dist;
      el.style.left = x + 'px';
      el.style.top  = y + 'px';
      el.style.setProperty('--tx', tx + 'px');
      el.style.setProperty('--ty', ty + 'px');
      el.style.animationDuration = (.4 + Math.random() * .3) + 's';
      document.body.appendChild(el);
      el.addEventListener('animationend', ()=> el.remove());
    }
  }

  // ---- Confetti 폭죽 효과 ----
  function launchConfetti(){
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduced) return;

    // canvas-confetti CDN 로드 (없으면 직접 구현)
    if(window.confetti){
      _fireConfetti();
      return;
    }
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js';
    s.onload = _fireConfetti;
    s.onerror = _fallbackConfetti; // CDN 실패 시 직접 구현
    document.head.appendChild(s);
  }

  function _fireConfetti(){
    if(!window.confetti) { _fallbackConfetti(); return; }
    // 왼쪽에서 오른쪽으로 두 번 발사
    window.confetti({ particleCount:60, spread:70, origin:{x:.3, y:.5},
      colors:['#FFD54A','#FF8FAB','#7EC8E3','#A8E6CF','#FFB347'] });
    setTimeout(()=>{
      window.confetti({ particleCount:60, spread:70, origin:{x:.7, y:.5},
        colors:['#FFD54A','#C9B1FF','#FF8FAB','#7EC8E3','#FFB347'] });
    }, 200);
  }

  function _fallbackConfetti(){
    // canvas-confetti 없을 때 직접 DOM 파티클
    const colors = ['#FFD54A','#FF8FAB','#7EC8E3','#A8E6CF','#C9B1FF','#FFB347'];
    const overlay = document.createElement('div');
    overlay.className = 'confetti-overlay';
    document.body.appendChild(overlay);
    for(let i = 0; i < 60; i++){
      const p = document.createElement('div');
      p.className = 'confetti-piece';
      p.style.left = Math.random() * 100 + 'vw';
      p.style.background = colors[Math.floor(Math.random()*colors.length)];
      p.style.width  = (8 + Math.random()*8) + 'px';
      p.style.height = (8 + Math.random()*8) + 'px';
      p.style.borderRadius = Math.random() > .5 ? '50%' : '2px';
      p.style.animationDuration = (1.2 + Math.random()*1.2) + 's';
      p.style.animationDelay   = Math.random() * .5 + 's';
      overlay.appendChild(p);
    }
    setTimeout(()=> overlay.remove(), 3000);
  }

  window.addEventListener('hashchange',route);
  document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('brand').onclick=()=>{location.hash='home';};
    document.querySelectorAll('#langSel button').forEach(b=>b.onclick=()=>setLang(b.dataset.l));
    document.documentElement.lang=lang; render();
  });
})();



