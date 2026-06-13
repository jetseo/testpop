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

    // 추천 카드덱용: 랜덤 5개 선택
    const featured = shuffle(TESTS.slice()).slice(0, 5);
    const shuffled = shuffle(TESTS.slice());

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
      <p class="list-title">${t('all_tests')||'전체 테스트'}</p>
      <section class="test-list">
        ${shuffled.map(m=>`
          <a class="test-card" href="#test/${m.id}" aria-label="${L(m.title)}">
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
        <a class="back-link" href="#home">← testpop</a>
        <div class="hero-art"><img src="${m.thumb}" alt="" loading="eager"></div>
        <h1 class="hero-title">${m.emoji} ${L(m.title)}</h1>
        <p class="hero-tagline">${L(m.desc)}</p>
        <p class="hero-sub">${t('hero_sub')}</p>
        <button class="btn-primary" id="startBtn">${t('start')}</button>
      </section>
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

    // 답변 버튼 HTML 미리 준비 (숨김 상태)
    ansEl.innerHTML = q.a.map((opt,i)=>
      `<button class="answer" data-i="${i}">${opt.t}</button>`
    ).join('');

    // 모션 감소 시 바로 표시
    if(reduced){
      qtxt.textContent = q.q;
      qtxt.style.opacity = '1';
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
        // 타이핑 완료 → 선택지 등장
        setTimeout(()=>{
          ansEl.style.transition = 'opacity .35s ease';
          ansEl.style.opacity = '1';
          bindAnswers(q);
        }, 200);
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
        if(navigator.vibrate) navigator.vibrate(40);

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

        <!-- 카드 뒤집기 래퍼 -->
        <div class="result-flip-wrap" id="flipWrap">
          <div class="result-flip-inner" id="flipInner">
            <!-- 앞면: 실제 결과 카드 -->
            <div class="result-flip-front">
              <div class="result-card" style="--c:${m.color};--ink:${m.ink}" id="resultCard">
                <img class="result-img" src="${m.img}" alt="${d.name}">
                <h2 class="result-name">${d.name}</h2>
                <p class="result-tag">${d.tag}</p>
              </div>
            </div>
            <!-- 뒷면: 물음표 -->
            <div class="result-flip-back" aria-hidden="true">
              <span class="flip-icon">🎴</span>
              <span class="flip-hint">${t('flip_hint')||'탭해서 결과 확인!'}</span>
            </div>
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
          <button class="btn-share share" id="shareBtn">${t('share')}</button>
          <button class="btn-share save" id="saveBtn">${t('save_image')}</button>
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
    if(!fromLink) {
      setTimeout(()=> launchConfetti(), 400);
    }

    // 카드 뒤집기 초기화
    initCardFlip(fromLink);
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
      const wmPad = 60;   // 설명 끝 → 워터마크 시작 여백
      const wmLineH = 48; // 워터마크 줄 간격
      const wmH = wmPad + wmLineH*2 + 56; // 여백 + 테스트명 + 주소 + 하단 여백
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
      // 닉네임 유무에 따라 띠 높이 조절
      const bandH = nick ? 280 : 210;
      // m.color를 RGB로 파싱해서 그라데이션에 활용
      const hex = m.color.replace('#','');
      const cr=parseInt(hex.slice(0,2),16), cg=parseInt(hex.slice(2,4),16), cb=parseInt(hex.slice(4,6),16);
      const grad=ctx.createLinearGradient(0,iy+ih-bandH,0,iy+ih);
      grad.addColorStop(0,`rgba(${cr},${cg},${cb},0)`);
      grad.addColorStop(0.4,`rgba(${cr},${cg},${cb},0.55)`);
      grad.addColorStop(1,`rgba(${cr},${cg},${cb},0.95)`);
      ctx.fillStyle=grad; ctx.fillRect(ix,iy+ih-bandH,iw,bandH);
      ctx.restore();

      // 텍스트 공통 그림자 설정 (어떤 배경색이든 가독성 보장)
      function setShadow(ctx, strong){
        ctx.shadowColor = 'rgba(0,0,0,0.55)';
        ctx.shadowBlur  = strong ? 12 : 8;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = strong ? 2 : 1;
      }
      function clearShadow(ctx){
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur  = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
      }

      ctx.textAlign='center';
      // 유형명 — 폭에 맞게 폰트 자동 축소
      let nameSize=58;
      do { ctx.font='bold '+nameSize+'px "Noto Sans KR",sans-serif';
           if(ctx.measureText(d.name).width<=iw-40) break; nameSize-=3;
      } while(nameSize>32);

      if(nick){
        // 1줄: 유형명 → 2줄: 닉네임 칩 → 3줄: 태그
        setShadow(ctx, true);
        ctx.fillStyle='#fff';
        ctx.font='bold '+nameSize+'px "Noto Sans KR",sans-serif';
        ctx.fillText(d.name, W/2, iy+ih-160);
        // 닉네임 칩 — 반투명 흰색 배경, m.color 글씨
        clearShadow(ctx);
        ctx.font='bold 46px "Noto Sans KR",sans-serif';
        const tw=ctx.measureText(nick).width, bw=Math.min(tw+72, iw-40), bh=72;
        const bx=(W-bw)/2, by=iy+ih-138;
        roundRect(ctx,bx,by,bw,bh,36); ctx.fillStyle='rgba(255,255,255,0.95)'; ctx.fill();
        ctx.fillStyle=m.color; ctx.textAlign='center'; ctx.fillText(nick, W/2, by+50);
        // 태그
        setShadow(ctx, false);
        ctx.fillStyle='#fff'; ctx.font='32px "Noto Sans KR",sans-serif';
        ctx.fillText(d.tag, W/2, iy+ih-30);
        clearShadow(ctx);
      } else {
        // 닉네임 없으면 유형명+태그만
        setShadow(ctx, true);
        ctx.fillStyle='#fff'; ctx.fillText(d.name, W/2, iy+ih-72);
        setShadow(ctx, false);
        ctx.fillStyle='#fff'; ctx.font='34px "Noto Sans KR",sans-serif';
        ctx.fillText(d.tag, W/2, iy+ih-28);
        clearShadow(ctx);
      }

      // 설명
      ctx.textAlign='center'; ctx.fillStyle='#444'; ctx.font='32px "Noto Sans KR",sans-serif';
      descLines.forEach((ln,i)=>ctx.fillText(ln, W/2, descTop+i*lineH));

      // 워터마크 — descH 끝 기준 고정 오프셋 (글자 길이와 무관하게 항상 표시)
      const wmY1 = descTop + descH + wmPad + wmLineH;     // 테스트명
      const wmY2 = descTop + descH + wmPad + wmLineH*2;   // testpop.app
      ctx.fillStyle='#aaa'; ctx.font='30px "Noto Sans KR",sans-serif';
      ctx.fillText(L(getTestMeta(curId).title), W/2, wmY1);
      ctx.fillStyle=m.color; ctx.font='bold 36px sans-serif';
      ctx.fillText('testpop.app', W/2, wmY2);

      cv.style.display='block';

      // 생성된 이미지 상단이 topbar 바로 아래에 딱 맞게 스크롤
      setTimeout(()=>{
        const topbar = document.querySelector('.topbar');
        const topbarH = topbar ? topbar.offsetHeight : 0;
        const top = cv.getBoundingClientRect().top + window.scrollY - topbarH;
        window.scrollTo({ top, behavior: 'smooth' });
      }, 50);

      if(download){
        const a=document.createElement('a');
        // 파일명: testpop_유형명_닉네임_시각 (특수문자/공백 정리, 이모지 제거)
        const clean=(s)=>(s||'').replace(/[^\p{L}\p{N}]+/gu,'').slice(0,20);
        const stamp=new Date().toISOString().slice(0,19).replace(/[-:T]/g,'');
        const parts=['testpop', clean(d.name), nick&&clean(nick), stamp].filter(Boolean);
        a.download=parts.join('_')+'.png';
        a.href=cv.toDataURL('image/png'); a.click();
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

    // 테스트별 분석 메시지
    const msgs = {
      ko: [
        '답변 열심히 읽는 중... 📖',
        '어, 이거 흥미롭네요 🤔',
        '비슷한 유형이랑 비교해 보는 중...',
        '결과 그림 열심히 그리는 중 🎨',
        '거의 다 됐는데 조금만 기다려요...',
        '사실 처음부터 답 알고 있었어요 😏',
        '두구두구두구두구두구두구두구두구두구두구... 🥁',
        '짜잔! 결과 나왔어요 ✨',
      ],
      en: [
        'Reading your answers very carefully... 📖',
        'Oh, this is interesting 🤔',
        'Comparing with similar types...',
        'Drawing your result right now 🎨',
        'Almost done, just a little longer...',
        'Honestly I knew from the start 😏',
        'Drumroll drumroll drumroll drumroll drumroll... 🥁',
        'Ta-da! Your result is ready ✨',
      ],
      ja: [
        '答えを一生懸命読んでいます... 📖',
        'あ、これは面白い 🤔',
        '似たタイプと比べています...',
        '結果の絵を一生懸命描いています 🎨',
        'もうすぐですよ、ちょっと待って...',
        '実は最初から答えわかってました 😏',
        'ドドドドドドドドドドドドドドドド... 🥁',
        'じゃーん！結果が出ました ✨',
      ],
      zh: [
        '正在认真阅读你的答案... 📖',
        '哦，这很有趣 🤔',
        '正在与相似类型比较...',
        '正在努力画结果图 🎨',
        '快好了，再等一下...',
        '其实从一开始就知道答案了 😏',
        '咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚... 🥁',
        '哒哒！结果出来了 ✨',
      ],
    };
    const msgList = msgs[lang] || msgs.ko;

    // 모션 감소 시 바로 결과로
    if(reduced){
      location.hash = 'result/'+curId+'/'+resultType;
      return;
    }

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
    let msgIdx = 0;
    let charIdx = 0;
    let fullText = msgList[0];

    // 타이핑 효과
    // 두구두구 메시지(인덱스 6)는 타이핑 속도 빠르게, 나머지는 천천히
    function typeNext(){
      const isDrumroll = msgIdx === 6;
      const speed = isDrumroll ? 25 : 75;
      if(charIdx < fullText.length){
        charIdx++;
        textEl.innerHTML = fullText.slice(0, charIdx) +
          '<span class="analyzing-cursor"></span>';
        setTimeout(typeNext, speed);
      } else {
        // 타이핑 완료 — 커서만 깜빡이다가 다음 메시지로
        textEl.innerHTML = fullText + '<span class="analyzing-cursor"></span>';
        msgIdx++;
        if(msgIdx < msgList.length){
          const delay = msgIdx === 7 ? 700 : 400;
          setTimeout(()=>{
            // fade out
            textEl.style.transition = 'opacity .2s ease';
            textEl.style.opacity = '0';
            setTimeout(()=>{
              fullText = msgList[msgIdx];
              charIdx = 0;
              textEl.innerHTML = '<span class="analyzing-cursor"></span>';
              textEl.style.opacity = '1';
              setTimeout(typeNext, 100);
            }, 200);
          }, delay);
        }
      }
    }

    // 진행바 애니메이션
    const totalTime = 5000;
    const steps = 20;
    let step = 0;
    const barTimer = setInterval(()=>{
      step++;
      const pct = Math.min(step / steps * 100, 100);
      if(barEl) barEl.style.width = pct + '%';
      if(step >= steps) clearInterval(barTimer);
    }, totalTime / steps);

    typeNext();

    // 분석 완료 후 결과로
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



