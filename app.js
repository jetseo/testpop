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
    clearCompleted();
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
      <div class="back-home-wrap">
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


    // 다른 테스트 보기 — 홈 이동 후 전체 테스트 섹션으로 스크롤
    const backToHomeBtn = document.getElementById('backToHomeBtn');
    if(backToHomeBtn){
      backToHomeBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        location.hash = 'home';
        let attempts = 0;
        const scrollToTests = () => {
          const sec = document.getElementById('all-tests-section');
          if(sec){
            const topbar = document.querySelector('.topbar');
            const offset = topbar ? topbar.offsetHeight : 0;
            window.scrollTo({top: sec.getBoundingClientRect().top + window.scrollY - offset, behavior:'smooth'});
          } else if(attempts++ < 20){
            setTimeout(scrollToTests, 50);
          }
        };
        setTimeout(scrollToTests, 500);
      });
    }
  }

  // ---- 화면: 퀴즈 ----
  function renderQuiz(slideOut){
    if(!slideOut) clearCompleted();
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
    // clearCompleted는 다른 페이지 이동 시 호출 (새로고침해도 내 결과 유지)
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
          <canvas id="cardCanvas" width="720" height="1500" style="display:none"></canvas>
          <button class="btn-share save" id="saveBtn" style="display:none;width:100%;margin-top:12px">${t('save_image')}</button>
        </div>
        <div class="share-row">
          <button class="btn-share retry" id="retryBtn">${t('retry')}</button>
          <button class="btn-share share" id="shareBtn">${t('share')}</button>
        </div>
        ` : `
        <div class="share-row">
          <button class="btn-share retry" id="retryBtn">${t('retry')}</button>
          <button class="btn-share share" id="shareBtn">${t('share')}</button>
        </div>
        `}
        <div class="result-actions">
          <a class="back-to-home" href="#home" id="resultBackBtn">← ${t('back_to_tests')}</a>
        </div>
        <div class="ad-slot" data-slot="result-bottom" aria-hidden="true"></div>
      </section>
    `;
    document.getElementById('retryBtn').onclick=()=>{answers=[];qIndex=0;location.hash='quiz';};
    const resultBackBtn = document.getElementById('resultBackBtn');
    if(resultBackBtn){
      resultBackBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        location.hash='home';
        // 렌더링 완료 후 스크롤 — 요소가 생길 때까지 폴링
        let attempts = 0;
        const scrollToTests = () => {
          const sec = document.getElementById('all-tests-section');
          if(sec){
            const topbar = document.querySelector('.topbar');
            const offset = topbar ? topbar.offsetHeight : 0;
            window.scrollTo({top: sec.getBoundingClientRect().top + window.scrollY - offset, behavior:'smooth'});
          } else if(attempts++ < 20){
            setTimeout(scrollToTests, 50);
          }
        };
        setTimeout(scrollToTests, 500);
      });
    }
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
      preview.style.cssText = 'width:100%;border-radius:20px;display:block;box-shadow:0 4px 20px rgba(0,0,0,.12);margin-top:14px';
      // card-maker 안의 canvas 앞에 삽입 (btnMake 아래)
      cv.parentNode.insertBefore(preview, cv);

      // 카드 생성 완료 → 이미지 저장 버튼 표시 (card-maker 안)
      const saveBtn = document.getElementById('saveBtn');
      if(saveBtn){ saveBtn.style.display = 'block'; }

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

    if(reduced){
      location.hash = 'result/'+curId+'/'+resultType;
      return;
    }

    // ============================
    // Phase 1: 관리자 출동 멘트 풀 (30가지)
    // ============================
    const adminPools = {
      ko: [
        ['🏃 관리자가 이불을 박차고 일어났습니다', '🧦 양말을 한 짝 못 찾고 있습니다', '🧦 그냥 한 짝만 신고 뛰고 있습니다'],
        ['😴 관리자가 자다가 알림을 받았습니다', '🥱 눈을 비비며 일어나고 있습니다', '☕ 커피도 없이 출발했습니다... 비장합니다'],
        ['🎮 관리자가 게임 중이었습니다', '😤 보스 직전에 컨트롤러를 내려놨습니다', '🏃 억울하지만 뛰고 있습니다'],
        ['🍜 관리자가 라면을 먹고 있었습니다', '😱 면이 불기 전에 포기했습니다', '🏃 라면보다 당신이 더 중요합니다 (거짓말)'],
        ['🛁 관리자가 샤워 중이었습니다', '💨 반쪽만 헹구고 뛰쳐나왔습니다', '🏃 머리에서 물이 뚝뚝 떨어지고 있습니다'],
        ['📺 관리자가 드라마 정주행 중이었습니다', '😭 클리프행어 직전에 멈췄습니다', '🏃 내용이 너무 궁금해서 더 빨리 뛰고 있습니다'],
        ['🐈 관리자가 고양이를 쓰다듬고 있었습니다', '😾 고양이가 화를 냈습니다', '🏃 고양이의 저주를 받으며 달리고 있습니다'],
        ['💼 관리자가 이미 퇴근 후였습니다', '😒 야근수당도 없이 출발했습니다', '🏃 노조 결성을 고민하며 뛰고 있습니다'],
        ['🍺 관리자가 치맥 중이었습니다', '🐔 치킨 한 조각을 손에 들고 뛰고 있습니다', '🏃 닭다리를 놓지 않는 프로 의식입니다'],
        ['🧹 관리자가 대청소 중이었습니다', '🪣 걸레를 든 채로 출발했습니다', '🏃 청소는 나중에... 어차피 또 더러워집니다'],
        ['📚 관리자가 자기계발서를 읽고 있었습니다', '📖 "성공하는 사람들의 7가지 습관" 3페이지에서 멈췄습니다', '🏃 8번째 습관은 열심히 뛰는 것입니다'],
        ['🎵 관리자가 노래방에 있었습니다', '🎤 애창곡 "내 나이가 어때서" 중간에 마이크를 내려놨습니다', '🏃 흥얼거리며 뛰고 있습니다'],
        ['🏋️ 관리자가 헬스장에 있었습니다', '💪 벤치프레스 중 바벨을 내려놨습니다', '🏃 워밍업은 충분히 됐습니다'],
        ['🧖 관리자가 마사지 중이었습니다', '😌 절반만 받고 일어났습니다', '🏃 반쪽 몸만 개운한 상태로 뛰고 있습니다'],
        ['🌙 관리자가 별을 보고 있었습니다', '🔭 목성을 발견하려던 참이었습니다', '🏃 목성은 내일 보기로 했습니다'],
        ['🎨 관리자가 그림을 그리고 있었습니다', '🖌️ 명작 완성 직전에 붓을 내려놨습니다', '🏃 반 고흐도 이랬을 겁니다'],
        ['🧩 관리자가 퍼즐을 맞추고 있었습니다', '🎯 마지막 한 조각 남았습니다', '🏃 그 한 조각의 위치는 영영 모를 것입니다'],
        ['🐕 관리자가 강아지 산책 중이었습니다', '🐾 강아지를 이웃집에 맡겼습니다', '🏃 강아지가 배신자를 외치고 있습니다'],
        ['📱 관리자가 유튜브 쇼츠 보는 중이었습니다', '📵 알고리즘의 늪에서 겨우 빠져나왔습니다', '🏃 손가락은 아직도 스크롤 중입니다'],
        ['🍕 관리자가 피자를 시켜놨습니다', '🛵 배달이 5분 후 도착 예정이었습니다', '🏃 배달 수령 실패를 각오하고 뛰고 있습니다'],
        ['🎯 관리자가 다트를 연습 중이었습니다', '🎳 불스아이 직전이었습니다', '🏃 아쉬움을 동력으로 뛰고 있습니다'],
        ['🧸 관리자가 인형 수집 중이었습니다', '🪆 한정판 마트료시카를 개봉하려던 참이었습니다', '🏃 마트료시카는 집을 지키고 있습니다'],
        ['🌿 관리자가 화분에 물을 주고 있었습니다', '🥀 선인장도 물이 필요한 순간이었습니다', '🏃 선인장아 잘 버텨라... 너는 할 수 있어'],
        ['✈️ 관리자가 해외여행 중이었습니다', '🚨 비행기 탑승구 앞에서 돌아섰습니다', '🏃 환불 불가 티켓을 포기하고 뛰고 있습니다'],
        ['🎮 관리자가 롤 랭크 게임 중이었습니다', '😤 탑 라이너가 트롤링 중이었습니다', '🏃 어차피 지던 게임이었습니다 (자기위안)'],
        ['📝 관리자가 일기를 쓰고 있었습니다', '🖊️ "오늘은 조용한 하루였다"까지 쓰다 멈췄습니다', '🏃 조용하지 않은 하루가 되었습니다'],
        ['🧊 관리자가 냉동실을 정리 중이었습니다', '🫐 3년 묵은 냉동 블루베리를 발견한 순간이었습니다', '🏃 블루베리의 정체는 영원히 미스터리입니다'],
        ['🪥 관리자가 양치 중이었습니다', '🦷 2분 중 47초만 완료했습니다', '🏃 치과 선생님께는 비밀입니다'],
        ['🌅 관리자가 일출을 보고 있었습니다', '📸 인생샷 직전이었습니다', '🏃 일출은 내일도 뜹니다... 아마도'],
        ['💤 관리자가 회의 중에 졸고 있었습니다', '😳 꿈에서도 일하다가 깼습니다', '🏃 이게 꿈인지 현실인지 모르며 뛰고 있습니다'],
      ],
      en: [
        ["🏃 The admin threw off their blanket", "🧦 Can't find one sock", "🏃 Running with mismatched socks. Commitment."],
        ["😴 The admin got an alert mid-sleep", "🥱 Rubbing eyes, barely conscious", "🏃 No coffee. Just pure dedication (and panic)"],
        ["🎮 The admin was mid-game", "😤 Put down the controller right before the boss", "🏃 Running with deep regret"],
        ["🍜 The admin was eating instant noodles", "😱 Sacrificed the noodles before they got soggy", "🏃 You better be worth it"],
        ["🛁 The admin was in the shower", "💨 Left half-rinsed", "🏃 Dripping all the way to the office"],
        ["📺 The admin was binge-watching", "😭 Paused on a cliffhanger", "🏃 Running faster out of frustration"],
        ["🐈 The admin was petting their cat", "😾 The cat did not approve of this interruption", "🏃 Running under a cat's curse"],
        ["💼 The admin had already clocked out", "😒 No overtime pay. Still came.", "🏃 Reconsidering life choices while running"],
        ["🍺 The admin was having fried chicken and beer", "🐔 Still holding the drumstick", "🏃 Professional dedication: never drops the chicken"],
        ["🧹 The admin was deep-cleaning", "🪣 Left mid-mop", "🏃 At least the floor is half-clean"],
        ["📚 The admin was reading self-help books", "📖 Stopped at page 3 of \"7 Habits...\"", "🏃 Habit #8: Drop everything and run"],
        ["🎵 The admin was at karaoke", "🎤 Dropped the mic mid-chorus", "🏃 Humming to maintain rhythm while running"],
        ["🏋️ The admin was at the gym", "💪 Dropped the barbell mid-rep", "🏃 Fully warmed up and ready to go"],
        ["🧖 The admin was getting a massage", "😌 Left after only half the session", "🏃 One side is relaxed. The other is tense."],
        ["🌙 The admin was stargazing", "🔭 Was this close to finding Jupiter", "🏃 Jupiter will still be there tomorrow"],
      ],
      ja: [
        ['🏃 管理者が布団を蹴飛ばして起きました', '🧦 靴下が片方見つかりません', '🏃 片方だけ履いて走っています'],
        ['😴 管理者が寝ている最中に通知が来ました', '🥱 目をこすりながら起き上がっています', '☕ コーヒーなしで出発しました…覚悟の表れです'],
        ['🎮 管理者がゲーム中でした', '😤 ボスの直前でコントローラーを置きました', '🏃 悔しいですが走っています'],
        ['🍜 管理者がラーメンを食べていました', '😱 麺が伸びる前に諦めました', '🏃 ラーメンよりあなたが大事です（嘘）'],
        ['🛁 管理者がシャワー中でした', '💨 半分だけ流して飛び出しました', '🏃 髪から水がぽたぽた落ちています'],
        ['📺 管理者がドラマを一気見中でした', '😭 クライマックス直前で止めました', '🏃 気になりすぎてより速く走っています'],
        ['🐈 管理者が猫を撫でていました', '😾 猫が怒りました', '🏃 猫の呪いを受けながら走っています'],
        ['💼 管理者はすでに退勤後でした', '😒 残業代もなく出発しました', '🏃 労働組合の結成を考えながら走っています'],
      ],
      zh: [
        ['🏃 管理员从被窝里跳了出来', '🧦 找不到另一只袜子', '🏃 穿着单只袜子在跑'],
        ['😴 管理员睡着的时候收到了通知', '🥱 揉着眼睛爬起来了', '☕ 没喝咖啡就出发了……这就是敬业精神'],
        ['🎮 管理员正在打游戏', '😤 在打boss之前放下了手柄', '🏃 虽然很遗憾但还是跑了'],
        ['🍜 管理员正在吃泡面', '😱 面条泡发前放弃了', '🏃 您比泡面更重要（谎话）'],
        ['🛁 管理员正在洗澡', '💨 只冲了一半就跑出来了', '🏃 头发还在滴水'],
        ['📺 管理员正在追剧', '😭 在高潮部分暂停了', '🏃 越着急越跑得快'],
        ['🐈 管理员正在撸猫', '😾 猫生气了', '🏃 顶着猫咪的诅咒在跑'],
        ['💼 管理员已经下班了', '😒 没有加班费还是来了', '🏃 边跑边考虑要不要成立工会'],
      ],
    };

    // ============================
    // Phase 2: 랜덤 부팅 화면 풀
    // ============================
    const bootScreens = [
      // 286
      {
        name: 'IBM PC/AT 286',
        lines: [
          'IBM PC/AT BIOS v1.04  (C) 1984 IBM Corp.',
          'CPU: Intel 80286 @ 8MHz',
          'Memory Test: 1024K OK......',
          'Fixed Disk 0: 20MB Seagate ST-225',
          'Loading PC-DOS 3.3...',
          '',
          'C>',
        ]
      },
      // 386
      {
        name: 'MS-DOS 386',
        lines: [
          'AMI BIOS v1.01.12  (C) 1990 American Megatrends',
          'CPU: Intel 80386DX @ 33MHz',
          'Memory Test: 4096K OK',
          'IDE HDD: 80MB WD Caviar',
          'VGA: 640x480 16 colors',
          'Loading MS-DOS 5.0...',
          '',
          'C:\>',
        ]
      },
      // 486
      {
        name: 'Windows 3.1 / 486',
        lines: [
          'Award BIOS v4.51PG  (C) 1993 Award Software',
          'CPU: Intel 486DX2 @ 66MHz',
          'Memory Test: 8MB OK',
          'Detecting HDD... Primary Master: 210MB',
          'CD-ROM: Creative CD-ROM x2',
          'Sound Blaster 16 detected',
          'Starting MS-DOS...',
          '',
          'C:\WIN>',
        ]
      },
      // 586 (Pentium)
      {
        name: 'Pentium 586',
        lines: [
          'AWARD BIOS v4.51PG  PnP/PCI/ISA  (C) 1995',
          'CPU: Intel Pentium @ 133MHz',
          'Memory Test: 32MB OK',
          'Detecting IDE... HDD: 1.2GB  CD-ROM: 24x',
          'PnP Init: Detecting PnP devices...OK',
          'ESS AudioDrive ES688 detected',
          'Starting Windows 95...',
          '',
          'C:\>',
        ]
      },
      // Linux
      {
        name: 'Linux',
        lines: [
          'GRUB Loading stage1.5...',
          'GRUB Loading, please wait...',
          'Linux kernel 2.6.32 (C) Linus Torvalds',
          '[    0.000000] Initializing cgroup subsys cpuset',
          '[    0.000000] Linux version 2.6.32 (gcc 4.4.7)',
          '[    0.523441] ACPI: IRQ0 used by override.',
          '[    1.204331] EXT4-fs: mounted filesystem',
          '[    2.001234] eth0: link up 100Mbps',
          '[    2.345678] System boot complete.',
          '',
          'debian login: root',
          'Password: ********',
          "Last login: Never (첫 로그인입니다)",
          'root@debian:~#',
        ]
      },
      // 라즈베리파이
      {
        name: 'Raspberry Pi',
        lines: [
          'Raspberry Pi 3 Model B (C) 2018 Raspberry Pi Foundation',
          '[  0.000000] Booting Linux on physical CPU 0x0',
          '[  0.000000] Linux version 5.10.17-v7+ (armv7l)',
          '[  1.234567] mmc0: new high speed SDHC card',
          '[  1.456789] EXT4-fs: mounted / on mmcblk0p2',
          '[  2.001234] Bluetooth: HCI UART driver initialized',
          '[  2.345678] wifi0: IEEE 802.11bgn ready',
          '',
          'Raspbian GNU/Linux 10 raspberrypi tty1',
          'raspberrypi login: pi',
          'Password: ********',
          'pi@raspberrypi:~ $',
        ]
      },
    ];

    // ============================
    // Phase 3: 분석 로그
    // ============================
    const analyzeLogs = {
      ko: [
        '> personality_scan.exe /deep /full',
        '> 답변 데이터 파싱 중...',
        '> 성격 패턴 매칭...',
        '> 경고: 결과가 너무 정확할 수 있음 ⚠️',
        '> 유형 데이터베이스 검색...',
        '> 교차 검증 완료',
        '> 결과 산출 중...',
      ],
      en: [
        '> personality_scan.exe /deep /full',
        '> Parsing answer data...',
        '> Matching personality patterns...',
        '> Warning: result may be uncomfortably accurate ⚠️',
        '> Searching type database...',
        '> Cross-validation complete',
        '> Calculating result...',
      ],
      ja: [
        '> personality_scan.exe /deep /full',
        '> 回答データを解析中...',
        '> 性格パターンをマッチング中...',
        '> 警告: 結果が正確すぎる可能性あり ⚠️',
        '> タイプデータベースを検索中...',
        '> クロス検証完了',
        '> 結果を算出中...',
      ],
      zh: [
        '> personality_scan.exe /deep /full',
        '> 解析答案数据...',
        '> 匹配性格模式...',
        '> 警告：结果可能过于准确 ⚠️',
        '> 搜索类型数据库...',
        '> 交叉验证完成',
        '> 计算结果中...',
      ],
    };

    // 랜덤 선택
    const adminMsgs = adminPools[lang] || adminPools.ko;
    const adminScript = adminMsgs[Math.floor(Math.random() * adminMsgs.length)];
    const boot = bootScreens[Math.floor(Math.random() * bootScreens.length)];
    const analyzeLog = analyzeLogs[lang] || analyzeLogs.ko;

    // 터미널 HTML 렌더링
    app.innerHTML = `
      <div class="terminal-screen">
        <div class="terminal-header">
          <span class="terminal-dot red"></span>
          <span class="terminal-dot yellow"></span>
          <span class="terminal-dot green"></span>
          <span class="terminal-title">testpop — ${boot.name}</span>
        </div>
        <div class="terminal-body" id="terminalBody"></div>
      </div>
    `;

    const body = document.getElementById('terminalBody');

    // 줄 추가 헬퍼
    function addLine(txt, cls, cb){
      const line = document.createElement('div');
      line.className = 'terminal-line' + (cls ? ' '+cls : '');
      body.appendChild(line);
      body.scrollTop = body.scrollHeight;
      if(!txt){ if(cb) cb(); return; }
      let ci = 0;
      const speed = txt.startsWith('[') ? 8 : 22; // 리눅스 로그는 빠르게
      const type = ()=>{
        if(ci <= txt.length){
          line.innerHTML = txt.slice(0,ci) + '<span class="terminal-cursor">█</span>';
          ci++;
          setTimeout(type, speed);
        } else {
          line.innerHTML = txt;
          if(cb) cb();
        }
      };
      type();
    }

    // 커서 깜빡임
    function blinkCursor(el, times, interval, cb){
      let n = 0;
      const blink = ()=>{
        el.style.opacity = el.style.opacity === '0' ? '1' : '0';
        n++;
        if(n < times*2) setTimeout(blink, interval);
        else { el.style.opacity = '1'; if(cb) cb(); }
      };
      setTimeout(blink, interval);
    }

    // 프로그레스 바
    function progressBar(label, cb){
      const line = document.createElement('div');
      line.className = 'terminal-line terminal-progress';
      body.appendChild(line);
      body.scrollTop = body.scrollHeight;
      let pct = 0;
      const fill = ()=>{
        const bar = '█'.repeat(Math.floor(pct/5)) + '░'.repeat(20-Math.floor(pct/5));
        line.innerHTML = label + ' [' + bar + '] ' + pct + '%';
        if(pct < 100){ pct = Math.min(100, pct + Math.floor(Math.random()*8)+3); setTimeout(fill, 60); }
        else { line.innerHTML = label + ' [████████████████████] 100% <span class="terminal-ok">OK</span>'; if(cb) cb(); }
      };
      fill();
    }

    // ---- 시퀀스 실행 ----
    let seq = Promise.resolve();

    function wait(ms){ return new Promise(r=>setTimeout(r,ms)); }

    function queueLine(txt, cls, delay){
      seq = seq.then(()=>new Promise(r=>{
        setTimeout(()=>addLine(txt,cls,r), delay||0);
      }));
    }

    function queueWait(ms){
      seq = seq.then(()=>wait(ms));
    }

    // Phase 1: 관리자 출동
    queueLine('📟 분석 요청이 접수되었습니다...', 'terminal-fun', 0);
    queueWait(700);
    for(const msg of adminScript){
      queueLine(msg, 'terminal-fun', 300);
      queueWait(600);
    }
    queueLine('🖥️  컴퓨터실 도착. PC를 켭니다...', 'terminal-fun', 300);
    queueWait(800);

    // Phase 2: 부팅 화면
    seq = seq.then(()=>new Promise(r=>{
      // 화면 클리어 효과
      setTimeout(()=>{
        body.innerHTML = '';
        r();
      }, 300);
    }));

    for(const bl of boot.lines){
      if(bl === ''){
        queueLine('', '', 0);
        queueWait(200);
      } else {
        queueLine(bl, 'terminal-boot', 0);
        queueWait(bl.startsWith('[') ? 80 : 180);
      }
    }

    // 커서 깜빡임 후 명령어 입력
    seq = seq.then(()=>new Promise(r=>{
      setTimeout(()=>{
        const lastLine = body.lastElementChild;
        if(lastLine) blinkCursor(lastLine, 5, 300, r);
        else r();
      }, 200);
    }));

    // Phase 3: 분석 명령어 및 로그
    for(const log of analyzeLog){
      queueLine(log, log.startsWith('>') ? 'terminal-cmd' : '', 0);
      queueWait(log.includes('경고') || log.includes('Warning') || log.includes('警告') ? 900 : 400);
    }

    // 프로그레스 바 3개
    const progressItems = {
      ko: ['성격 스캔', '유형 매칭', '결과 생성'],
      en: ['Personality Scan', 'Type Matching', 'Result Build'],
      ja: ['性格スキャン', 'タイプマッチ', '結果生成'],
      zh: ['性格扫描', '类型匹配', '生成结果'],
    };
    const pItems = progressItems[lang] || progressItems.ko;

    seq = seq.then(()=>new Promise(r=>{
      setTimeout(()=>{
        progressBar(pItems[0], ()=>{
          setTimeout(()=>{
            progressBar(pItems[1], ()=>{
              setTimeout(()=>{
                progressBar(pItems[2], ()=>{
                  setTimeout(()=>{
                    addLine('', '', null);
                    const hl = {ko:'✓ RESULT FOUND — 결과를 불러옵니다!', en:'✓ RESULT FOUND — Loading your result!', ja:'✓ RESULT FOUND — 結果を表示します!', zh:'✓ RESULT FOUND — 正在加载结果!'};
                    addLine(hl[lang]||hl.ko, 'terminal-highlight', ()=>{
                      setTimeout(()=>{
                        app.style.transition = 'opacity .4s ease';
                        app.style.opacity = '0';
                        setTimeout(()=>{
                          app.style.transition = '';
                          app.style.opacity = '1';
                          location.hash = 'result/'+curId+'/'+resultType;
                        }, 400);
                      }, 1200);
                    });
                    r();
                  }, 200);
                });
              }, 300);
            });
          }, 300);
        });
      }, 0);
    }));
  }

    // ---- 결과 카드 뒤집기 ----    // ---- 결과 카드 뒤집기 ----
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



