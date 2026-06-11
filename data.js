/* ===========================================================
   테스트 데이터 + 다국어 언어팩 (단일 파일 관리)
   새 테스트 추가 시 이 파일만 수정하면 됩니다.
   =========================================================== */

// 지원 언어
const LANGS = ['ko', 'en', 'ja', 'zh'];

// 결과 유형 8종 (이미지 파일명과 1:1 매칭)
const TYPES = ['instant','ghost_read','tmi','emoji','short','fairy','night','diver'];

// 유형별 메타: 색상 테마(카드 배경), 이미지
const TYPE_META = {
  instant:    { img:'images/instant.jpg',    color:'#FFD54A', ink:'#7A5A00' },
  ghost_read: { img:'images/ghost_read.jpg', color:'#9DC3E6', ink:'#27486B' },
  tmi:        { img:'images/tmi.jpg',         color:'#FFB877', ink:'#8A4B12' },
  emoji:      { img:'images/emoji.jpg',       color:'#FFAFC9', ink:'#9B2C57' },
  short:      { img:'images/short.jpg',       color:'#B8BEC6', ink:'#3D4650' },
  fairy:      { img:'images/fairy.jpg',       color:'#C9B6E4', ink:'#5B3F86' },
  night:      { img:'images/night.jpg',       color:'#6E6A9E', ink:'#FFFFFF' },
  diver:      { img:'images/diver.jpg',       color:'#5FC9C9', ink:'#0E5252' }
};

console.log('data.js loaded');
