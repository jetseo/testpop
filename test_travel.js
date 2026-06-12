/* ===========================================================
   나에게 어울리는 여행지 테스트 (travel-dest)
   8유형 × 12문항 × 4언어
   =========================================================== */

const TEST_TRAVEL = {
  id: 'travel-dest',
  emoji: '✈️',

  resultLabel: {
    ko: '나에게 어울리는 여행지는',
    en: 'Your perfect travel destination is',
    ja: '私にぴったりの旅行先は',
    zh: '最适合我的旅行目的地是'
  },

  typeList: ['paris','tokyo','newyork','bali','iceland','morocco','newzealand','sydney'],

  meta: {
    paris:      { img: 'images/travel_paris.jpg',      color: '#b5547a', ink: '#fff' },
    tokyo:      { img: 'images/travel_tokyo.jpg',      color: '#7b3fa0', ink: '#fff' },
    newyork:    { img: 'images/travel_newyork.jpg',    color: '#4a3060', ink: '#fff' },
    bali:       { img: 'images/travel_bali.jpg',       color: '#2d7a3a', ink: '#fff' },
    iceland:    { img: 'images/travel_iceland.jpg',    color: '#1a4a6e', ink: '#fff' },
    morocco:    { img: 'images/travel_morocco.jpg',    color: '#b06020', ink: '#fff' },
    newzealand: { img: 'images/travel_newzealand.jpg', color: '#3a7a4a', ink: '#fff' },
    sydney:     { img: 'images/travel_sydney.jpg',     color: '#1a6a9a', ink: '#fff' }
  },

  types: {
    paris: {
      ko: { name: '🗼 파리', tag: '#낭만 #예술 #감성',
        desc: '당신에게 어울리는 여행지는 파리입니다. 일상 속에서도 아름다움을 발견하고 감성을 소중히 여기는 당신에게 파리는 완벽한 무대입니다. 에펠탑 아래 카페에 앉아 따뜻한 커피 한 잔을 마시며 센 강을 바라보는 것, 그 순간이 당신이 꿈꾸는 여행입니다.',
        best: 'tokyo', worst: 'newyork' },
      en: { name: '🗼 Paris', tag: '#Romance #Art #Sensitivity',
        desc: 'Your perfect destination is Paris. You find beauty in everyday moments and treasure your sensitivity — Paris is your ideal stage. Sitting at a café beneath the Eiffel Tower, cradling a warm coffee while gazing at the Seine: that moment is exactly the kind of travel you dream of.',
        best: 'tokyo', worst: 'newyork' },
      ja: { name: '🗼 パリ', tag: '#ロマンス #芸術 #感性',
        desc: 'あなたにぴったりの旅行先はパリです。日常の中にも美しさを発見し、感性を大切にするあなたにパリは完璧な舞台です。エッフェル塔の下のカフェに座り、温かいコーヒーを飲みながらセーヌ川を眺める、その瞬間があなたの夢見る旅行です。',
        best: 'tokyo', worst: 'newyork' },
      zh: { name: '🗼 巴黎', tag: '#浪漫 #艺术 #感性',
        desc: '最适合你的旅行目的地是巴黎。你善于在日常中发现美，珍视内心感受，巴黎是你完美的舞台。坐在埃菲尔铁塔下的咖啡馆，捧着一杯温热的咖啡凝望塞纳河，那个瞬间正是你梦想中的旅行。',
        best: 'tokyo', worst: 'newyork' }
    },
    tokyo: {
      ko: { name: '🗾 도쿄', tag: '#트렌드 #디테일 #설렘',
        desc: '당신에게 어울리는 여행지는 도쿄입니다. 새로운 트렌드에 민감하고 디테일을 놓치지 않는 당신에게 도쿄는 끝없는 발견의 도시입니다. 골목 하나하나에 숨어있는 작은 가게들, 벚꽃이 흩날리는 밤거리, 감각적인 카페와 맛집. 도쿄는 당신의 호기심을 끝없이 자극합니다.',
        best: 'paris', worst: 'iceland' },
      en: { name: '🗾 Tokyo', tag: '#Trends #Details #Excitement',
        desc: 'Your perfect destination is Tokyo. You are attuned to new trends and never miss a detail — Tokyo is a city of endless discovery for you. Hidden shops tucked into every alley, night streets filled with drifting cherry blossoms, stylish cafés and unforgettable food: Tokyo never stops stimulating your curiosity.',
        best: 'paris', worst: 'iceland' },
      ja: { name: '🗾 東京', tag: '#トレンド #こだわり #ときめき',
        desc: 'あなたにぴったりの旅行先は東京です。新しいトレンドに敏感でディテールを見逃さないあなたに、東京は果てしない発見の街です。路地裏に隠れた小さなお店、桜が舞う夜の街、おしゃれなカフェとグルメ。東京はあなたの好奇心を絶えず刺激します。',
        best: 'paris', worst: 'iceland' },
      zh: { name: '🗾 东京', tag: '#潮流 #细节 #心动',
        desc: '最适合你的旅行目的地是东京。你对新趋势敏感，不放过任何细节，东京是一座让你不断发现惊喜的城市。藏在每条小巷里的小店、樱花飘落的夜街、时髦的咖啡馆和美食。东京会不断激发你的好奇心。',
        best: 'paris', worst: 'iceland' }
    },
    newyork: {
      ko: { name: '🗽 뉴욕', tag: '#야망 #에너지 #도전',
        desc: '당신에게 어울리는 여행지는 뉴욕입니다. 에너지가 넘치고 도전을 즐기는 당신에게 뉴욕은 완벽한 무대입니다. 잠들지 않는 도시의 열기 속에서 당신은 오히려 더 빛납니다. 브루클린 브리지 위에서 바라보는 맨해튼 야경처럼, 당신의 꿈도 그렇게 빛나고 있습니다.',
        best: 'sydney', worst: 'bali' },
      en: { name: '🗽 New York', tag: '#Ambition #Energy #Challenge',
        desc: 'Your perfect destination is New York. You overflow with energy and thrive on challenge — New York is your perfect stage. In the heat of the city that never sleeps, you shine even brighter. Like the Manhattan skyline seen from the Brooklyn Bridge at night, your dreams glow just as brilliantly.',
        best: 'sydney', worst: 'bali' },
      ja: { name: '🗽 ニューヨーク', tag: '#野心 #エネルギー #挑戦',
        desc: 'あなたにぴったりの旅行先はニューヨークです。エネルギーにあふれ挑戦を楽しむあなたにニューヨークは完璧な舞台です。眠らない街の熱気の中でこそあなたはより輝きます。ブルックリン・ブリッジからのマンハッタンの夜景のように、あなたの夢もそのように輝いています。',
        best: 'sydney', worst: 'bali' },
      zh: { name: '🗽 纽约', tag: '#野心 #能量 #挑战',
        desc: '最适合你的旅行目的地是纽约。你充满活力，享受挑战，纽约是你完美的舞台。在这座不夜城的热浪中，你反而更加闪耀。就像从布鲁克林大桥眺望曼哈顿夜景一样，你的梦想也同样璀璨夺目。',
        best: 'sydney', worst: 'bali' }
    },
    bali: {
      ko: { name: '🌴 발리', tag: '#힐링 #자연 #여유',
        desc: '당신에게 어울리는 여행지는 발리입니다. 지친 일상에서 벗어나 진정한 휴식을 원하는 당신에게 발리는 최고의 선물입니다. 에메랄드빛 논밭, 향기로운 꽃, 고요한 사원 앞에서 당신은 잃어버린 자신을 되찾습니다. 느리게 흐르는 시간이 당신을 치유합니다.',
        best: 'newzealand', worst: 'newyork' },
      en: { name: '🌴 Bali', tag: '#Healing #Nature #Ease',
        desc: 'Your perfect destination is Bali. For someone who craves true rest away from the exhaustion of daily life, Bali is the greatest gift. Before emerald rice paddies, fragrant flowers, and silent temples, you rediscover a part of yourself you had lost. Time flows slowly here — and it heals you.',
        best: 'newzealand', worst: 'newyork' },
      ja: { name: '🌴 バリ', tag: '#癒し #自然 #ゆとり',
        desc: 'あなたにぴったりの旅行先はバリです。疲れた日常から離れて本当の休息を求めるあなたにバリは最高のプレゼントです。エメラルド色の田んぼ、香り高い花、静かなお寺の前であなたは失っていた自分を取り戻します。ゆっくり流れる時間があなたを癒します。',
        best: 'newzealand', worst: 'newyork' },
      zh: { name: '🌴 巴厘岛', tag: '#治愈 #自然 #从容',
        desc: '最适合你的旅行目的地是巴厘岛。对于渴望从疲惫日常中解脱、寻求真正休息的你来说，巴厘岛是最好的礼物。在翡翠般的稻田、芬芳的鲜花、宁静的寺庙前，你重新找回了失去的自己。缓缓流淌的时光会治愈你。',
        best: 'newzealand', worst: 'newyork' }
    },
    iceland: {
      ko: { name: '🌌 아이슬란드', tag: '#고독 #신비 #자유',
        desc: '당신에게 어울리는 여행지는 아이슬란드입니다. 혼자만의 시간을 소중히 여기고 세상의 경이로움에 감동받는 당신에게 아이슬란드는 꿈의 목적지입니다. 오로라가 춤추는 밤하늘 아래 혼자 서 있는 그 순간, 당신은 비로소 완전히 자유를 느낍니다.',
        best: 'newzealand', worst: 'tokyo' },
      en: { name: '🌌 Iceland', tag: '#Solitude #Mystery #Freedom',
        desc: 'Your perfect destination is Iceland. You treasure time alone and are moved by the wonders of the world — Iceland is your dream destination. Standing alone beneath a night sky where the aurora dances, you feel, for the first time, completely free.',
        best: 'newzealand', worst: 'tokyo' },
      ja: { name: '🌌 アイスランド', tag: '#孤独 #神秘 #自由',
        desc: 'あなたにぴったりの旅行先はアイスランドです。一人だけの時間を大切にし、世界の驚異に感動するあなたにアイスランドは夢の目的地です。オーロラが踊る夜空の下に一人佇む、その瞬間あなたはついに完全な自由を感じます。',
        best: 'newzealand', worst: 'tokyo' },
      zh: { name: '🌌 冰岛', tag: '#孤独 #神秘 #自由',
        desc: '最适合你的旅行目的地是冰岛。你珍视独处时光，被世界的奇观所感动，冰岛是你梦想的目的地。在极光起舞的夜空下独自伫立的那一刻，你终于感受到了完全的自由。',
        best: 'newzealand', worst: 'tokyo' }
    },
    morocco: {
      ko: { name: '🕌 모로코', tag: '#이국적 #모험 #감각',
        desc: '당신에게 어울리는 여행지는 모로코입니다. 낯선 것에 대한 두려움 대신 설렘을 느끼는 당신에게 모로코는 오감을 깨우는 여행지입니다. 향신료 냄새가 가득한 시장, 모자이크 타일로 뒤덮인 골목, 황금빛 석양이 물드는 메디나. 당신의 모험심이 여기서 활짝 피어납니다.',
        best: 'bali', worst: 'sydney' },
      en: { name: '🕌 Morocco', tag: '#Exotic #Adventure #Senses',
        desc: 'Your perfect destination is Morocco. Instead of fearing the unfamiliar, you feel excited by it — Morocco is a destination that awakens all five senses. Spice-filled markets, alleys covered in mosaic tiles, a medina bathed in golden sunset light: this is where your adventurous spirit fully blooms.',
        best: 'bali', worst: 'sydney' },
      ja: { name: '🕌 モロッコ', tag: '#エキゾチック #冒険 #感覚',
        desc: 'あなたにぴったりの旅行先はモロッコです。見知らぬものへの恐れの代わりにときめきを感じるあなたにモロッコは五感を目覚めさせる旅行先です。スパイスの香りが満ちた市場、モザイクタイルに覆われた路地、黄金色の夕日に染まるメディナ。あなたの冒険心がここで花開きます。',
        best: 'bali', worst: 'sydney' },
      zh: { name: '🕌 摩洛哥', tag: '#异域风情 #冒险 #感官',
        desc: '最适合你的旅行目的地是摩洛哥。面对陌生事物你感受到的不是恐惧而是心动，摩洛哥是一个唤醒五感的旅行地。弥漫着香料气息的市场、铺满马赛克瓷砖的小巷、被金色夕阳染红的老城区。你的冒险精神在这里尽情绽放。',
        best: 'bali', worst: 'sydney' }
    },
    newzealand: {
      ko: { name: '🏔️ 뉴질랜드', tag: '#자연 #모험 #청정',
        desc: '당신에게 어울리는 여행지는 뉴질랜드입니다. 때 묻지 않은 자연 속에서 진정한 자신을 만나고 싶은 당신에게 뉴질랜드는 최고의 선택입니다. 에메랄드빛 피오르드, 설산, 꽃이 만발한 초원. 도시의 소음에서 벗어나 순수한 지구의 아름다움을 온몸으로 느낍니다.',
        best: 'iceland', worst: 'newyork' },
      en: { name: '🏔️ New Zealand', tag: '#Nature #Adventure #Purity',
        desc: 'Your perfect destination is New Zealand. For someone who wants to meet their true self in untouched nature, New Zealand is the ultimate choice. Emerald fjords, snow-capped mountains, wildflower meadows in full bloom: far from the noise of the city, you feel the pure beauty of the earth with your whole body.',
        best: 'iceland', worst: 'newyork' },
      ja: { name: '🏔️ ニュージーランド', tag: '#自然 #冒険 #清純',
        desc: 'あなたにぴったりの旅行先はニュージーランドです。汚れのない自然の中で本当の自分に出会いたいあなたにニュージーランドは最高の選択です。エメラルド色のフィヨルド、雪山、花が咲き乱れる草原。都市の喧騒から離れて純粋な地球の美しさを全身で感じます。',
        best: 'iceland', worst: 'newyork' },
      zh: { name: '🏔️ 新西兰', tag: '#自然 #冒险 #纯净',
        desc: '最适合你的旅行目的地是新西兰。对于想在纯净自然中寻找真实自我的你来说，新西兰是最好的选择。翡翠色的峡湾、白雪皑皑的山峰、繁花盛开的草原。远离城市的喧嚣，用全身感受地球纯粹的美丽。',
        best: 'iceland', worst: 'newyork' }
    },
    sydney: {
      ko: { name: '🌊 시드니', tag: '#활동적 #개방적 #밝음',
        desc: '당신에게 어울리는 여행지는 시드니입니다. 밝고 활동적이며 새로운 사람들과 쉽게 어울리는 당신에게 시드니는 완벽한 도시입니다. 탁 트인 항구, 눈부신 햇살, 활기찬 해변. 오페라 하우스를 배경으로 펼쳐지는 시드니의 일상이 당신의 에너지와 꼭 닮았습니다.',
        best: 'newyork', worst: 'morocco' },
      en: { name: '🌊 Sydney', tag: '#Active #Openness #Brightness',
        desc: 'Your perfect destination is Sydney. You are bright, active, and naturally connect with new people — Sydney is your perfect city. Open harbour, dazzling sunshine, lively beaches. The everyday life of Sydney, set against the backdrop of the Opera House, is a perfect reflection of your energy.',
        best: 'newyork', worst: 'morocco' },
      ja: { name: '🌊 シドニー', tag: '#アクティブ #開放的 #明るさ',
        desc: 'あなたにぴったりの旅行先はシドニーです。明るく活動的で新しい人たちとすぐに打ち解けるあなたにシドニーは完璧な都市です。開けた港、眩しい陽光、活気ある海辺。オペラハウスを背景に広がるシドニーの日常があなたのエネルギーにそっくりです。',
        best: 'newyork', worst: 'morocco' },
      zh: { name: '🌊 悉尼', tag: '#活跃 #开放 #阳光',
        desc: '最适合你的旅行目的地是悉尼。你开朗活跃，容易与新朋友相处，悉尼是你完美的城市。开阔的港口、耀眼的阳光、充满活力的海滩。以歌剧院为背景展开的悉尼日常，与你的活力如出一辙。',
        best: 'newyork', worst: 'morocco' }
    }
  },

  questions: {
    ko: [
      { q: '이상적인 여행의 첫날 아침은?', a: [
        { t: '카페에서 커피 한 잔, 창밖 풍경을 천천히 감상한다', s: {paris:2,tokyo:1} },
        { t: '숙소에서 뒹굴다가 느지막이 나간다', s: {bali:2,newzealand:1} },
        { t: '일찍 일어나 새벽 산책을 즐긴다', s: {iceland:2,newzealand:1} },
        { t: '바로 나가서 볼거리, 맛집 탐방 시작', s: {tokyo:2,newyork:1} }
      ]},
      { q: '여행지에서 가장 하고 싶은 것은?', a: [
        { t: '미술관, 갤러리, 유명 건축물 감상', s: {paris:2,tokyo:1} },
        { t: '아무것도 안 하고 그냥 쉬기', s: {bali:2,iceland:1} },
        { t: '현지 시장, 맛집, 골목 탐험', s: {morocco:2,tokyo:1} },
        { t: '하이킹, 액티비티, 자연 탐험', s: {newzealand:2,sydney:1} }
      ]},
      { q: '여행 중 가장 설레는 순간은?', a: [
        { t: '오래 꿈꿔온 명소를 실제로 마주했을 때', s: {paris:2,newyork:1} },
        { t: '아무도 모르는 숨겨진 장소를 발견했을 때', s: {morocco:2,tokyo:1} },
        { t: '자연 속에서 압도적인 풍경을 봤을 때', s: {iceland:2,newzealand:1} },
        { t: '현지인과 자연스럽게 대화가 통했을 때', s: {sydney:2,bali:1} }
      ]},
      { q: '나의 여행 스타일은?', a: [
        { t: '꼼꼼한 계획파, 동선 미리 짜놓기', s: {tokyo:2,paris:1} },
        { t: '즉흥적으로 발길 닿는 대로', s: {morocco:2,iceland:1} },
        { t: '느리게, 한 곳을 깊게 즐기기', s: {bali:2,paris:1} },
        { t: '많은 곳을 빠르게 돌아다니기', s: {newyork:2,sydney:1} }
      ]},
      { q: '여행 중 힘들 때 회복하는 방법은?', a: [
        { t: '예쁜 카페에서 혼자 멍하니 앉아 있기', s: {paris:2,iceland:1} },
        { t: '자연 속에서 조용히 산책하기', s: {newzealand:2,bali:1} },
        { t: '맛있는 걸 먹으면 다 해결된다', s: {tokyo:2,morocco:1} },
        { t: '새로운 사람을 만나면 오히려 에너지가 충전된다', s: {sydney:2,newyork:1} }
      ]},
      { q: '여행 사진을 찍을 때 나는?', a: [
        { t: '감성적인 구도로 분위기를 담는다', s: {paris:2,bali:1} },
        { t: '낯선 골목, 현지 일상을 포착한다', s: {morocco:2,tokyo:1} },
        { t: '압도적인 자연 풍경을 최대한 담는다', s: {iceland:2,newzealand:1} },
        { t: '사진보다 눈으로 직접 즐기는 편', s: {bali:2,sydney:1} }
      ]},
      { q: '여행지 숙소 선택 기준은?', a: [
        { t: '분위기 있는 부티크 호텔이나 감성 숙소', s: {paris:2,morocco:1} },
        { t: '자연 속 프라이빗한 빌라나 글램핑', s: {bali:2,newzealand:1} },
        { t: '교통 편리하고 가성비 좋은 곳', s: {tokyo:2,newyork:1} },
        { t: '바다나 자연이 보이는 뷰 맛집', s: {sydney:2,iceland:1} }
      ]},
      { q: '여행 전날 밤, 나는?', a: [
        { t: '설레서 잠이 안 온다', s: {paris:2,tokyo:1} },
        { t: '짐을 여러 번 다시 싼다', s: {newyork:2,tokyo:1} },
        { t: '그냥 편하게 잔다, 여행은 현지에서 생각한다', s: {bali:2,iceland:1} },
        { t: '마지막으로 현지 맛집 리스트를 확인한다', s: {morocco:2,sydney:1} }
      ]},
      { q: '가장 매력적인 여행의 요소는?', a: [
        { t: '아름다운 건축과 예술', s: {paris:2,morocco:1} },
        { t: '다양한 음식과 문화 체험', s: {tokyo:2,morocco:1} },
        { t: '압도적인 자연과 풍경', s: {iceland:2,newzealand:1} },
        { t: '활기찬 도시 에너지', s: {newyork:2,sydney:1} }
      ]},
      { q: '여행에서 돌아왔을 때 가장 그리운 것은?', a: [
        { t: '그 도시만의 특별한 분위기와 감성', s: {paris:2,tokyo:1} },
        { t: '몸과 마음이 완전히 쉬었던 그 느낌', s: {bali:2,newzealand:1} },
        { t: '아무도 나를 모르는 곳에서 느꼈던 자유', s: {iceland:2,morocco:1} },
        { t: '새로운 사람들과 나눴던 에너지', s: {sydney:2,newyork:1} }
      ]},
      { q: '같이 여행하고 싶은 동행은?', a: [
        { t: '감성 코드가 맞는 친한 친구 한 명', s: {paris:2,bali:1} },
        { t: '혼자 여행이 최고다', s: {iceland:2,morocco:1} },
        { t: '활동적이고 에너지 넘치는 친구들', s: {newyork:2,sydney:1} },
        { t: '조용하고 느긋하게 함께할 수 있는 사람', s: {bali:2,newzealand:1} }
      ]},
      { q: '여행의 가장 큰 목적은?', a: [
        { t: '새로운 감성과 영감을 얻기 위해', s: {paris:2,tokyo:1} },
        { t: '지친 일상에서 완전히 벗어나 쉬기 위해', s: {bali:2,iceland:1} },
        { t: '낯선 문화와 세계를 직접 경험하기 위해', s: {morocco:2,newyork:1} },
        { t: '자연의 아름다움을 느끼고 활력을 얻기 위해', s: {newzealand:2,sydney:1} }
      ]}
    ],

    en: [
      { q: 'Your ideal first morning of a trip is…', a: [
        { t: 'A coffee at a café, slowly taking in the view outside', s: {paris:2,tokyo:1} },
        { t: 'Lounging at the accommodation, heading out late', s: {bali:2,newzealand:1} },
        { t: 'Waking up early for a dawn stroll', s: {iceland:2,newzealand:1} },
        { t: 'Heading straight out to explore sights and restaurants', s: {tokyo:2,newyork:1} }
      ]},
      { q: 'What do you most want to do at your destination?', a: [
        { t: 'Visit art museums, galleries, and iconic architecture', s: {paris:2,tokyo:1} },
        { t: 'Do absolutely nothing and just rest', s: {bali:2,iceland:1} },
        { t: 'Explore local markets, food, and hidden alleys', s: {morocco:2,tokyo:1} },
        { t: 'Hike, do activities, and explore nature', s: {newzealand:2,sydney:1} }
      ]},
      { q: 'The most thrilling moment while traveling is…', a: [
        { t: 'Coming face to face with a landmark I\'ve long dreamed of', s: {paris:2,newyork:1} },
        { t: 'Discovering a hidden spot nobody knows about', s: {morocco:2,tokyo:1} },
        { t: 'Being overwhelmed by a stunning landscape in nature', s: {iceland:2,newzealand:1} },
        { t: 'Naturally connecting in conversation with a local', s: {sydney:2,bali:1} }
      ]},
      { q: 'My travel style is…', a: [
        { t: 'Detailed planner — mapping out every route in advance', s: {tokyo:2,paris:1} },
        { t: 'Spontaneous — going wherever my feet take me', s: {morocco:2,iceland:1} },
        { t: 'Slow — staying in one place and enjoying it deeply', s: {bali:2,paris:1} },
        { t: 'Fast — hitting as many places as possible', s: {newyork:2,sydney:1} }
      ]},
      { q: 'When I feel tired during a trip, I recover by…', a: [
        { t: 'Sitting alone in a cozy café, zoning out', s: {paris:2,iceland:1} },
        { t: 'Taking a quiet walk in nature', s: {newzealand:2,bali:1} },
        { t: 'Eating something delicious — that fixes everything', s: {tokyo:2,morocco:1} },
        { t: 'Meeting new people — it actually recharges me', s: {sydney:2,newyork:1} }
      ]},
      { q: 'When taking photos on a trip, I…', a: [
        { t: 'Capture the mood with an aesthetic composition', s: {paris:2,bali:1} },
        { t: 'Shoot unfamiliar alleys and local everyday life', s: {morocco:2,tokyo:1} },
        { t: 'Capture overwhelming natural scenery as fully as possible', s: {iceland:2,newzealand:1} },
        { t: 'Prefer experiencing it with my own eyes over taking photos', s: {bali:2,sydney:1} }
      ]},
      { q: 'My criteria for choosing accommodation is…', a: [
        { t: 'A charming boutique hotel or aesthetic guesthouse', s: {paris:2,morocco:1} },
        { t: 'A private villa or glamping in nature', s: {bali:2,newzealand:1} },
        { t: 'Convenient location and good value', s: {tokyo:2,newyork:1} },
        { t: 'A room with a view of the sea or nature', s: {sydney:2,iceland:1} }
      ]},
      { q: 'The night before a trip, I…', a: [
        { t: 'Can\'t sleep from excitement', s: {paris:2,tokyo:1} },
        { t: 'Repack my bag multiple times', s: {newyork:2,tokyo:1} },
        { t: 'Sleep comfortably — I\'ll figure it out when I arrive', s: {bali:2,iceland:1} },
        { t: 'Do one last check of my local restaurant list', s: {morocco:2,sydney:1} }
      ]},
      { q: 'The most appealing element of travel is…', a: [
        { t: 'Beautiful architecture and art', s: {paris:2,morocco:1} },
        { t: 'Diverse food and cultural experiences', s: {tokyo:2,morocco:1} },
        { t: 'Overwhelming nature and scenery', s: {iceland:2,newzealand:1} },
        { t: 'The vibrant energy of a city', s: {newyork:2,sydney:1} }
      ]},
      { q: 'What do I miss most after returning from a trip?', a: [
        { t: 'The unique atmosphere and feeling of that city', s: {paris:2,tokyo:1} },
        { t: 'The feeling of my body and mind being completely rested', s: {bali:2,newzealand:1} },
        { t: 'The freedom of being somewhere nobody knows me', s: {iceland:2,morocco:1} },
        { t: 'The energy I shared with new people', s: {sydney:2,newyork:1} }
      ]},
      { q: 'Who do I want to travel with?', a: [
        { t: 'One close friend who shares my vibe', s: {paris:2,bali:1} },
        { t: 'Solo travel is the best', s: {iceland:2,morocco:1} },
        { t: 'Active, energetic friends', s: {newyork:2,sydney:1} },
        { t: 'Someone I can travel quietly and leisurely with', s: {bali:2,newzealand:1} }
      ]},
      { q: 'The biggest purpose of travel for me is…', a: [
        { t: 'To gain new feelings and inspiration', s: {paris:2,tokyo:1} },
        { t: 'To completely escape from exhausting everyday life and rest', s: {bali:2,iceland:1} },
        { t: 'To directly experience unfamiliar cultures and the world', s: {morocco:2,newyork:1} },
        { t: 'To feel the beauty of nature and regain vitality', s: {newzealand:2,sydney:1} }
      ]}
    ],

    ja: [
      { q: '理想的な旅行初日の朝は？', a: [
        { t: 'カフェでコーヒー一杯、窓の外の景色をゆっくり楽しむ', s: {paris:2,tokyo:1} },
        { t: '宿でのんびりして遅めに出発する', s: {bali:2,newzealand:1} },
        { t: '早起きして夜明けの散歩を楽しむ', s: {iceland:2,newzealand:1} },
        { t: 'すぐ出かけて観光スポットやグルメ探索スタート', s: {tokyo:2,newyork:1} }
      ]},
      { q: '旅行先で一番したいことは？', a: [
        { t: '美術館、ギャラリー、有名建築物の鑑賞', s: {paris:2,tokyo:1} },
        { t: '何もしないでただ休む', s: {bali:2,iceland:1} },
        { t: '地元の市場、グルメ、路地探検', s: {morocco:2,tokyo:1} },
        { t: 'ハイキング、アクティビティ、自然探索', s: {newzealand:2,sydney:1} }
      ]},
      { q: '旅行中に最もときめく瞬間は？', a: [
        { t: 'ずっと夢見ていた名所を実際に目の前にした時', s: {paris:2,newyork:1} },
        { t: '誰も知らない隠れた場所を発見した時', s: {morocco:2,tokyo:1} },
        { t: '自然の中で圧倒的な景色を見た時', s: {iceland:2,newzealand:1} },
        { t: '地元の人と自然に会話できた時', s: {sydney:2,bali:1} }
      ]},
      { q: '私の旅行スタイルは？', a: [
        { t: '綿密な計画派、ルートを事前に組む', s: {tokyo:2,paris:1} },
        { t: '気の向くままに即興で', s: {morocco:2,iceland:1} },
        { t: 'ゆっくり、一カ所を深く楽しむ', s: {bali:2,paris:1} },
        { t: 'たくさんの場所を素早く回る', s: {newyork:2,sydney:1} }
      ]},
      { q: '旅行中に疲れた時の回復方法は？', a: [
        { t: 'おしゃれなカフェで一人ぼんやり座っている', s: {paris:2,iceland:1} },
        { t: '自然の中を静かに散歩する', s: {newzealand:2,bali:1} },
        { t: '美味しいものを食べれば全部解決', s: {tokyo:2,morocco:1} },
        { t: '新しい人と出会うとむしろエネルギーが充電される', s: {sydney:2,newyork:1} }
      ]},
      { q: '旅行で写真を撮る時は？', a: [
        { t: '感性的な構図で雰囲気を切り取る', s: {paris:2,bali:1} },
        { t: '見知らぬ路地や地元の日常を捉える', s: {morocco:2,tokyo:1} },
        { t: '圧倒的な自然の景色をできる限り収める', s: {iceland:2,newzealand:1} },
        { t: '写真より目で直接楽しむ派', s: {bali:2,sydney:1} }
      ]},
      { q: '旅行先の宿を選ぶ基準は？', a: [
        { t: '雰囲気のあるブティックホテルや感性的な宿', s: {paris:2,morocco:1} },
        { t: '自然の中のプライベートヴィラやグランピング', s: {bali:2,newzealand:1} },
        { t: '交通が便利でコスパの良い場所', s: {tokyo:2,newyork:1} },
        { t: '海や自然が見えるビューのある部屋', s: {sydney:2,iceland:1} }
      ]},
      { q: '旅行前夜、私は？', a: [
        { t: 'わくわくして眠れない', s: {paris:2,tokyo:1} },
        { t: '荷物を何度も詰め直す', s: {newyork:2,tokyo:1} },
        { t: 'ぐっすり寝る、現地で考えればいい', s: {bali:2,iceland:1} },
        { t: '最後にもう一度現地グルメリストを確認する', s: {morocco:2,sydney:1} }
      ]},
      { q: '旅行で最も魅力的な要素は？', a: [
        { t: '美しい建築と芸術', s: {paris:2,morocco:1} },
        { t: '多様な食べ物と文化体験', s: {tokyo:2,morocco:1} },
        { t: '圧倒的な自然と景色', s: {iceland:2,newzealand:1} },
        { t: '活気ある都市エネルギー', s: {newyork:2,sydney:1} }
      ]},
      { q: '旅行から帰った後、一番恋しいのは？', a: [
        { t: 'その街だけの特別な雰囲気と感性', s: {paris:2,tokyo:1} },
        { t: '体も心も完全に休めたあの感覚', s: {bali:2,newzealand:1} },
        { t: '誰も私を知らない場所で感じた自由', s: {iceland:2,morocco:1} },
        { t: '新しい人たちと分かち合ったエネルギー', s: {sydney:2,newyork:1} }
      ]},
      { q: '一緒に旅したい同行者は？', a: [
        { t: '感性のコードが合う親しい友達一人', s: {paris:2,bali:1} },
        { t: '一人旅が最高だ', s: {iceland:2,morocco:1} },
        { t: '活動的でエネルギッシュな友達', s: {newyork:2,sydney:1} },
        { t: '静かでのんびり一緒にいられる人', s: {bali:2,newzealand:1} }
      ]},
      { q: '旅行の一番の目的は？', a: [
        { t: '新しい感性とインスピレーションを得るため', s: {paris:2,tokyo:1} },
        { t: '疲れた日常から完全に離れて休むため', s: {bali:2,iceland:1} },
        { t: '見知らぬ文化と世界を直接体験するため', s: {morocco:2,newyork:1} },
        { t: '自然の美しさを感じて活力を得るため', s: {newzealand:2,sydney:1} }
      ]}
    ],

    zh: [
      { q: '理想旅行第一天早上是？', a: [
        { t: '在咖啡馆喝杯咖啡，慢慢欣赏窗外风景', s: {paris:2,tokyo:1} },
        { t: '在住处懒着，晚点再出门', s: {bali:2,newzealand:1} },
        { t: '早起享受黎明散步', s: {iceland:2,newzealand:1} },
        { t: '直接出门开始探索景点和美食', s: {tokyo:2,newyork:1} }
      ]},
      { q: '在旅行目的地最想做的是？', a: [
        { t: '参观美术馆、画廊和著名建筑', s: {paris:2,tokyo:1} },
        { t: '什么都不做，好好休息', s: {bali:2,iceland:1} },
        { t: '探索当地市场、美食和小巷', s: {morocco:2,tokyo:1} },
        { t: '徒步、活动和探索自然', s: {newzealand:2,sydney:1} }
      ]},
      { q: '旅行中最令我心动的瞬间是？', a: [
        { t: '亲眼看到梦寐以求的名胜时', s: {paris:2,newyork:1} },
        { t: '发现无人知晓的隐秘地点时', s: {morocco:2,tokyo:1} },
        { t: '在大自然中看到震撼人心的风景时', s: {iceland:2,newzealand:1} },
        { t: '和当地人自然地聊起来时', s: {sydney:2,bali:1} }
      ]},
      { q: '我的旅行风格是？', a: [
        { t: '周密计划型，提前规划好路线', s: {tokyo:2,paris:1} },
        { t: '随心所欲，走到哪算哪', s: {morocco:2,iceland:1} },
        { t: '慢游型，在一处深度体验', s: {bali:2,paris:1} },
        { t: '快速型，尽量多去几个地方', s: {newyork:2,sydney:1} }
      ]},
      { q: '旅行途中疲惫时如何恢复？', a: [
        { t: '一个人坐在漂亮的咖啡馆发呆', s: {paris:2,iceland:1} },
        { t: '在大自然中静静散步', s: {newzealand:2,bali:1} },
        { t: '吃好吃的就能解决一切', s: {tokyo:2,morocco:1} },
        { t: '遇到新朋友反而更充电', s: {sydney:2,newyork:1} }
      ]},
      { q: '旅行拍照时，我会？', a: [
        { t: '用感性的构图捕捉氛围', s: {paris:2,bali:1} },
        { t: '拍下陌生的小巷和当地日常', s: {morocco:2,tokyo:1} },
        { t: '尽量记录震撼的自然风景', s: {iceland:2,newzealand:1} },
        { t: '比起拍照更喜欢用眼睛直接欣赏', s: {bali:2,sydney:1} }
      ]},
      { q: '选择旅行住宿的标准是？', a: [
        { t: '有格调的精品酒店或感性民宿', s: {paris:2,morocco:1} },
        { t: '自然中的私人别墅或豪华露营', s: {bali:2,newzealand:1} },
        { t: '交通便利、性价比高的地方', s: {tokyo:2,newyork:1} },
        { t: '能看到海或自然风景的房间', s: {sydney:2,iceland:1} }
      ]},
      { q: '旅行前夜，我会？', a: [
        { t: '兴奋得睡不着', s: {paris:2,tokyo:1} },
        { t: '反复整理行李', s: {newyork:2,tokyo:1} },
        { t: '安稳入睡，到了再说', s: {bali:2,iceland:1} },
        { t: '最后再确认一遍当地美食清单', s: {morocco:2,sydney:1} }
      ]},
      { q: '旅行中最吸引我的要素是？', a: [
        { t: '美丽的建筑与艺术', s: {paris:2,morocco:1} },
        { t: '多样的美食与文化体验', s: {tokyo:2,morocco:1} },
        { t: '震撼人心的自然与风景', s: {iceland:2,newzealand:1} },
        { t: '充满活力的城市能量', s: {newyork:2,sydney:1} }
      ]},
      { q: '旅行回来后最思念的是？', a: [
        { t: '那座城市独特的氛围与感性', s: {paris:2,tokyo:1} },
        { t: '身心完全放松的那种感觉', s: {bali:2,newzealand:1} },
        { t: '在没人认识我的地方感受到的自由', s: {iceland:2,morocco:1} },
        { t: '与新朋友共享的能量', s: {sydney:2,newyork:1} }
      ]},
      { q: '想和谁一起旅行？', a: [
        { t: '感性相投的亲密朋友一个人', s: {paris:2,bali:1} },
        { t: '独自旅行最好', s: {iceland:2,morocco:1} },
        { t: '活跃有活力的朋友们', s: {newyork:2,sydney:1} },
        { t: '能安静悠闲相处的人', s: {bali:2,newzealand:1} }
      ]},
      { q: '旅行最大的目的是？', a: [
        { t: '获得新的感性与灵感', s: {paris:2,tokyo:1} },
        { t: '彻底逃离疲惫的日常好好休息', s: {bali:2,iceland:1} },
        { t: '亲身体验陌生的文化与世界', s: {morocco:2,newyork:1} },
        { t: '感受自然之美，重获活力', s: {newzealand:2,sydney:1} }
      ]}
    ]
  }
};
