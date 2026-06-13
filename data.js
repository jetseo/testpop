/* ===========================================================
   testpop 공통 데이터 + 테스트 레지스트리
   새 테스트 추가 시: test_XXX.js 만들고 TESTS 배열에 등록
   =========================================================== */

const LANGS = ['ko', 'en', 'ja', 'zh'];

// 테스트 레지스트리 — 허브에 노출되는 순서대로
// id는 라우팅/이미지 식별자, thumb는 허브 카드 썸네일(히어로 재활용)
const TESTS = [
  {
    id: 'kakao-reply',
    obj: () => TEST_KAKAO,
    emoji: '💬',
    thumb: 'images/hero.jpg',
    title: { ko:'나는 어떤 카톡 유형?', en:'What\'s Your Chat Reply Type?',
             ja:'私のトーク返信タイプは？', zh:'我是哪种聊天回复类型？' },
    desc:  { ko:'내 메신저 답장 스타일은?', en:'What kind of texter are you?',
             ja:'あなたの返信スタイルは？', zh:'你的回复风格是哪种？' }
  },
  {
    id: 'wallet-voice',
    obj: () => TEST_WALLET,
    emoji: '🐷',
    thumb: 'images/money_hero.jpg',
    title: { ko:'내 통장의 속마음은?', en:'What Does Your Wallet Say About You?',
             ja:'私の貯金箱の本音は？', zh:'我的钱包想说什么？' },
    desc:  { ko:'소비 습관으로 보는 내 통장의 속마음', en:'Your spending habits, voiced by your wallet',
             ja:'消費習慣でわかる貯金箱の本音', zh:'从消费习惯看你钱包的心声' }
  },
  {
    id: 'alter-ego',
    obj: () => TEST_ALTER,
    emoji: '🐾',
    thumb: 'images/alter_hero.jpg',
    title: { ko:'나를 닮은 동물은?', en:'Which Animal Resembles You?',
             ja:'私に似ている動物は？', zh:'哪种动物最像你？' },
    desc:  { ko:'나를 꼭 닮은 동물은 무엇일까?', en:'Find the animal that matches your soul',
             ja:'あなたにそっくりな動物は？', zh:'找到与你最相似的动物' }
  },
  {
    id: 'love-cell',
    obj: () => TEST_LOVE,
    emoji: '💘',
    thumb: 'images/love_hero.jpg',
    title: { ko:'내 연애 세포 유형은?', en:'What\'s Your Love Cell Type?',
             ja:'私の恋愛細胞タイプは？', zh:'我的恋爱细胞是哪种？' },
    desc:  { ko:'연애할 때 나는 어떤 하트일까?', en:'What kind of heart are you in love?',
             ja:'恋する時、私はどんなハート？', zh:'恋爱时我是哪种心？' }
  },
  {
    id: 'fantasy-job',
    obj: () => TEST_FANTASY,
    emoji: '⚔️',
    thumb: 'images/fantasy_hero.jpg',
    title: { ko:'판타지 세계의 내 직업은?', en:'What\'s Your Fantasy World Job?',
             ja:'ファンタジー世界での私の職業は？', zh:'我在奇幻世界的职业是？' },
    desc:  { ko:'판타지 세계에서 나의 직업은?', en:'What would your job be in a fantasy world?',
             ja:'ファンタジー世界での私の職業は？', zh:'在奇幻世界里你会是什么职业？' }
  },
  {
    id: 'tarot-card',
    obj: () => TEST_TAROT,
    emoji: '🔮',
    thumb: 'images/tarot_hero.jpg',
    title: { ko:'내 운명의 타로 카드는?', en:'Which Tarot Card Is Your Destiny?',
             ja:'私の運命のタロットカードは？', zh:'哪张塔罗牌是我的命运？' },
    desc:  { ko:'내 운명을 담은 타로 카드는?', en:'Which tarot card holds your destiny?',
             ja:'私の運命を宿すタロットカードは？', zh:'承载我命运的塔罗牌是？' }
  }
  ,{
    id: 'stock-loss',
    obj: () => TEST_STOCK,
    emoji: '📉',
    thumb: 'images/stock_hero.jpg',
    title: { ko:'나는 어떤 투자자?', en:'What Kind of Investor Are You?',
             ja:'私はどんな投資家？', zh:'我是哪种投资者？' },
    desc:  { ko:'-30% 됐을 때 나는 어떤 타입?', en:'How do you react when stocks drop -30%?',
             ja:'-30%になった時あなたはどのタイプ？', zh:'跌了-30%你是哪种投资者？' }
  }
  ,{
    id: 'travel-dest',
    obj: () => TEST_TRAVEL,
    emoji: '✈️',
    thumb: 'images/travel_hero.jpg',
    title: { ko:'나에게 어울리는 여행지는?', en:'Which Destination Suits You?',
             ja:'私にぴったりの旅行先は？', zh:'最适合我的旅行目的地是？' },
    desc:  { ko:'내 성격에 꼭 맞는 여행지는?', en:'Which destination matches your soul?',
             ja:'私の性格にぴったりの旅行先は？', zh:'最符合我性格的旅行目的地是？' }
  }
  ,{
    id: 'gem-type',
    obj: () => TEST_GEM,
    emoji: '💎',
    thumb: 'images/gem_hero.jpg',
    title: { ko:'나를 닮은 보석은?', en:'Which Gem Resembles You?',
             ja:'私に似ている宝石は？', zh:'哪种宝石最像你？' },
    desc:  { ko:'나를 꼭 닮은 보석은 무엇일까?', en:'Find the gem that matches your soul',
             ja:'あなたにそっくりな宝石は？', zh:'找到与你最相似的宝石' }
  }
  ,{
    id: 'egenteto', isNew: true,
    obj: () => TEST_EGENTETO,
    emoji: '🌊',
    thumb: 'images/egenteto_hero.jpg',
    title: { ko:'나는 에겐일까 테토일까?', en:'Am I Egen or Teto?',
             ja:'私はエゲン？テト？', zh:'我是埃根还是泰托？' },
    desc:  { ko:'나의 에겐·테토 에너지 유형은?', en:'Find your Egen·Teto energy type',
             ja:'私のエゲン・テトエネルギータイプは？', zh:'找到我的埃根泰托能量类型' }
  }
  ,{
    id: 'aura-color', isNew: true,
    obj: () => TEST_AURA,
    emoji: '🎨',
    thumb: 'images/aura_hero.jpg',
    title: { ko:'내 분위기를 색으로 표현하면?', en:'What Color Is Your Vibe?',
             ja:'私の雰囲気を色で表すと？', zh:'我的气质用颜色表达是？' },
    desc:  { ko:'나의 분위기를 색으로 알아봐요', en:'Find the color that matches your vibe',
             ja:'あなたの雰囲気を色で表してみましょう', zh:'用颜色发现你的气质' }
  }
];

// id로 테스트 객체 찾기
function getTest(id){
  const t = TESTS.find(x=>x.id===id);
  return t ? t.obj() : null;
}
function getTestMeta(id){ return TESTS.find(x=>x.id===id) || null; }

console.log('data.js loaded — tests:', TESTS.length); // 12
