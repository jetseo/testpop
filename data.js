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
    title: { ko:'카톡 답장 유형 테스트', en:'Chat Reply Type Test',
             ja:'トーク返信タイプ診断', zh:'聊天回复类型测试' },
    desc:  { ko:'내 메신저 답장 스타일은?', en:'What kind of texter are you?',
             ja:'あなたの返信スタイルは？', zh:'你的回复风格是哪种？' }
  },
  {
    id: 'wallet-voice',
    obj: () => TEST_WALLET,
    emoji: '🐷',
    thumb: 'images/money_hero.jpg',
    title: { ko:'내 통장이 하고 싶은 말', en:'What Your Wallet Wants to Say',
             ja:'あなたの貯金箱の本音', zh:'你的钱包想对你说' },
    desc:  { ko:'소비 습관으로 보는 내 통장의 속마음', en:'Your spending habits, voiced by your wallet',
             ja:'消費習慣でわかる貯金箱の本音', zh:'从消费习惯看你钱包的心声' }
  }
];

// id로 테스트 객체 찾기
function getTest(id){
  const t = TESTS.find(x=>x.id===id);
  return t ? t.obj() : null;
}
function getTestMeta(id){ return TESTS.find(x=>x.id===id) || null; }

console.log('data.js loaded — tests:', TESTS.length);
