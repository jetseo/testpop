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
    title: { ko:'나의 카톡 답장 유형 테스트', en:'My Chat Reply Type Test',
             ja:'私のトーク返信タイプ診断', zh:'我的聊天回复类型测试' },
    desc:  { ko:'내 메신저 답장 스타일은?', en:'What kind of texter are you?',
             ja:'あなたの返信スタイルは？', zh:'你的回复风格是哪种？' }
  },
  {
    id: 'wallet-voice',
    obj: () => TEST_WALLET,
    emoji: '🐷',
    thumb: 'images/money_hero.jpg',
    title: { ko:'나의 통장 유형 테스트', en:'My Wallet Type Test',
             ja:'私の通帳タイプ診断', zh:'我的通帐类型测试' },
    desc:  { ko:'소비 습관으로 보는 내 통장의 속마음', en:'Your spending habits, voiced by your wallet',
             ja:'消費習慣でわかる貯金箱の本音', zh:'从消费习惯看你钱包的心声' }
  },
  {
    id: 'alter-ego',
    obj: () => TEST_ALTER,
    emoji: '🐾',
    thumb: 'images/alter_hero.jpg',
    title: { ko:'나를 닮은 동물 테스트', en:'Which Animal Are You?',
             ja:'私に似ている動物は？', zh:'哪种动物最像你？' },
    desc:  { ko:'나를 꼭 닮은 동물은 무엇일까?', en:'Find the animal that matches your soul',
             ja:'あなたにそっくりな動物は？', zh:'找到与你最相似的动物' }
  },
  {
    id: 'love-cell',
    obj: () => TEST_LOVE,
    emoji: '💘',
    thumb: 'images/love_hero.jpg',
    title: { ko:'나의 연애 세포 테스트', en:'Your Love Cell Test',
             ja:'私の恋愛細胞診断', zh:'我的恋爱细胞测试' },
    desc:  { ko:'연애할 때 나는 어떤 하트일까?', en:'What kind of heart are you in love?',
             ja:'恋する時、私はどんなハート？', zh:'恋爱时我是哪种心？' }
  },
  {
    id: 'fantasy-job',
    obj: () => TEST_FANTASY,
    emoji: '⚔️',
    thumb: 'images/fantasy_hero.jpg',
    title: { ko:'나의 판타지 직업 테스트', en:'Your Fantasy Job Test',
             ja:'私のファンタジー職業診断', zh:'我的奇幻职业测试' },
    desc:  { ko:'판타지 세계에서 나의 직업은?', en:'What would your job be in a fantasy world?',
             ja:'ファンタジー世界での私の職業は？', zh:'在奇幻世界里你会是什么职业？' }
  },
  {
    id: 'tarot-card',
    obj: () => TEST_TAROT,
    emoji: '🔮',
    thumb: 'images/tarot_hero.jpg',
    title: { ko:'나의 타로 카드 테스트', en:'Your Tarot Card Test',
             ja:'私のタロットカード診断', zh:'我的塔罗牌测试' },
    desc:  { ko:'내 운명을 담은 타로 카드는?', en:'Which tarot card holds your destiny?',
             ja:'私の運命を宿すタロットカードは？', zh:'承载我命运的塔罗牌是？' }
  }
  ,{
    id: 'stock-loss',
    obj: () => TEST_STOCK,
    emoji: '📉',
    thumb: 'images/stock_hero.jpg',
    title: { ko:'나의 주식 투자 유형 테스트', en:'Your Stock Investor Type',
             ja:'私の株式投資タイプ診断', zh:'我的股票投资类型测试' },
    desc:  { ko:'-30% 됐을 때 나는 어떤 타입?', en:'How do you react when stocks drop -30%?',
             ja:'-30%になった時あなたはどのタイプ？', zh:'跌了-30%你是哪种投资者？' }
  }
  ,{
    id: 'travel-dest',
    obj: () => TEST_TRAVEL,
    emoji: '✈️',
    thumb: 'images/travel_hero.jpg',
    title: { ko:'나에게 어울리는 여행지 테스트', en:'Your Perfect Travel Destination',
             ja:'私にぴったりの旅行先は？', zh:'最适合我的旅行目的地测试' },
    desc:  { ko:'내 성격에 꼭 맞는 여행지는?', en:'Which destination matches your soul?',
             ja:'私の性格にぴったりの旅行先は？', zh:'最符合我性格的旅行目的地是？' }
  }
  ,{
    id: 'gem-type',
    obj: () => TEST_GEM,
    emoji: '💎',
    thumb: 'images/gem_hero.jpg',
    title: { ko:'나를 닮은 보석 테스트', en:'Which Gem Are You?',
             ja:'私に似ている宝石は？', zh:'哪种宝石最像你？' },
    desc:  { ko:'나를 꼭 닮은 보석은 무엇일까?', en:'Find the gem that matches your soul',
             ja:'あなたにそっくりな宝石は？', zh:'找到与你最相似的宝石' }
  }
];

// id로 테스트 객체 찾기
function getTest(id){
  const t = TESTS.find(x=>x.id===id);
  return t ? t.obj() : null;
}
function getTestMeta(id){ return TESTS.find(x=>x.id===id) || null; }

console.log('data.js loaded — tests:', TESTS.length); // 10
