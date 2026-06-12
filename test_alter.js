/* ===========================================================
   나를 닮은 동물 테스트 (alter-ego) — 질문 전면 개선판
   8유형 × 12문항 × 4언어
   =========================================================== */

const TEST_ALTER = (function(){

const _data = {
  id: 'alter-ego',
  emoji: '🐾',

  resultLabel: {
    ko: '나를 닮은 동물은',
    en: 'The animal that resembles you is',
    ja: '私に似ている動物は',
    zh: '与我相似的动物是'
  },

  typeList: ['retriever','cat','owl','dolphin','wolf','sloth','fox','bear'],

  meta: {
    retriever: { img:'images/alter_retriever.jpg', color:'#e8a020', ink:'#fff' },
    cat:       { img:'images/alter_cat.jpg',       color:'#7c5cbf', ink:'#fff' },
    owl:       { img:'images/alter_owl.jpg',       color:'#3a7a6a', ink:'#fff' },
    dolphin:   { img:'images/alter_dolphin.jpg',   color:'#2a88cc', ink:'#fff' },
    wolf:      { img:'images/alter_wolf.jpg',      color:'#3a4a7a', ink:'#fff' },
    sloth:     { img:'images/alter_sloth.jpg',     color:'#6a8a4a', ink:'#fff' },
    fox:       { img:'images/alter_fox.jpg',       color:'#d06020', ink:'#fff' },
    bear:      { img:'images/alter_bear.jpg',      color:'#8a5a3a', ink:'#fff' }
  },

  types: {
    retriever: {
      ko: { name:'🐶 골든 리트리버', tag:'#사교적 #애정꾼 #긍정에너지',
        desc:'당신을 닮은 동물은 골든 리트리버입니다. 어디서든 먼저 다가가 꼬리 치는 타입. 사람을 좋아하고 함께 있을 때 가장 빛납니다. 거절을 못 해서 가끔 지치기도 하지만, 당신 주변에는 언제나 웃음이 넘칩니다. 세상 모든 사람이 잠재적 친구인 낙천주의자.',
        best:'dolphin', worst:'cat' },
      en: { name:'🐶 Golden Retriever', tag:'#Sociable #Affectionate #PositiveEnergy',
        desc:'The animal that resembles you is the Golden Retriever. You\'re the type who wags their tail and approaches first, anywhere. You love people and shine brightest when you\'re with them. You sometimes wear yourself out because you can\'t say no — but laughter always surrounds you. A true optimist who sees everyone as a potential friend.',
        best:'dolphin', worst:'cat' },
      ja: { name:'🐶 ゴールデンレトリバー', tag:'#社交的 #愛情家 #ポジティブエネルギー',
        desc:'あなたに似ている動物はゴールデンレトリバーです。どこでも先に近づいてしっぽを振るタイプ。人が好きで一緒にいるときが一番輝きます。断れなくて疲れることもありますが、あなたの周りにはいつも笑顔があふれています。世界中の人が潜在的な友達だと思う楽天家。',
        best:'dolphin', worst:'cat' },
      zh: { name:'🐶 金毛猎犬', tag:'#社交 #爱意满满 #正能量',
        desc:'与你相似的动物是金毛猎犬。无论在哪里都会主动上前摇尾巴的类型。喜欢人，和大家在一起时最闪耀。因为不会拒绝而有时会累，但你身边总是充满笑声。是把所有人都视为潜在朋友的乐观主义者。',
        best:'dolphin', worst:'cat' }
    },
    cat: {
      ko: { name:'🐱 새침한 고양이', tag:'#독립적 #도도함 #신비로움',
        desc:'당신을 닮은 동물은 고양이입니다. 마음을 여는 데 시간이 걸리지만, 한번 허락하면 누구보다 깊은 애정을 줍니다. 혼자만의 공간과 시간이 꼭 필요하고, 억지로 친해지려는 사람은 본능적으로 밀어냅니다. 신비롭고 독립적인 당신만의 매력이 오히려 사람들을 끌어당깁니다.',
        best:'owl', worst:'retriever' },
      en: { name:'🐱 Aloof Cat', tag:'#Independent #Prideful #Mysterious',
        desc:'The animal that resembles you is the cat. It takes time for you to open up — but once you do, you give deeper affection than anyone. You absolutely need your own space and time, and you instinctively push away anyone who tries to force closeness. Your mysterious, independent charm is exactly what draws people to you.',
        best:'owl', worst:'retriever' },
      ja: { name:'🐱 気まぐれネコ', tag:'#独立的 #プライド高い #ミステリアス',
        desc:'あなたに似ている動物はネコです。心を開くのに時間がかかりますが、一度許すと誰よりも深い愛情を与えます。一人だけの空間と時間がどうしても必要で、無理に仲良くなろうとする人を本能的に遠ざけます。ミステリアスで独立的なあなただけの魅力がむしろ人を引きつけます。',
        best:'owl', worst:'retriever' },
      zh: { name:'🐱 高冷猫咪', tag:'#独立 #高傲 #神秘',
        desc:'与你相似的动物是猫咪。打开心扉需要时间，但一旦接受对方，会给予比任何人都深厚的情感。绝对需要自己的空间和时间，会本能地推开试图强行亲近的人。神秘而独立的独特魅力反而更吸引人。',
        best:'owl', worst:'retriever' }
    },
    owl: {
      ko: { name:'🦉 지혜로운 부엉이', tag:'#관찰력 #신중함 #깊은사고',
        desc:'당신을 닮은 동물은 부엉이입니다. 말은 적지만 한마디 한마디가 정확합니다. 결론을 내리기 전 모든 면을 꼼꼼히 살피고, 충동적인 결정은 거의 하지 않습니다. 사람들은 조언을 구하러 당신을 찾아오고, 당신은 항상 핵심을 꿰뚫는 답을 줍니다.',
        best:'cat', worst:'dolphin' },
      en: { name:'🦉 Wise Owl', tag:'#Observation #Prudence #DeepThinking',
        desc:'The animal that resembles you is the owl. You say little, but every word is precise. Before drawing conclusions, you carefully examine every angle — and you almost never make impulsive decisions. People come to you for advice, and you always give answers that cut straight to the heart of the matter.',
        best:'cat', worst:'dolphin' },
      ja: { name:'🦉 賢いフクロウ', tag:'#観察力 #慎重さ #深い思考',
        desc:'あなたに似ている動物はフクロウです。口数は少ないですが、一言一言が正確です。結論を出す前にすべての面を丁寧に確認し、衝動的な決断はほとんどしません。人々はアドバイスを求めてあなたのところに来て、あなたはいつも核心を突いた答えを返します。',
        best:'cat', worst:'dolphin' },
      zh: { name:'🦉 睿智猫头鹰', tag:'#观察力 #谨慎 #深度思考',
        desc:'与你相似的动物是猫头鹰。话不多，但每句话都很准确。在得出结论之前会仔细审视各个方面，几乎不会做出冲动的决定。人们会来向你寻求建议，而你总能给出直击核心的答案。',
        best:'cat', worst:'dolphin' }
    },
    dolphin: {
      ko: { name:'🐬 자유로운 돌고래', tag:'#유쾌함 #소통 #팀플레이어',
        desc:'당신을 닮은 동물은 돌고래입니다. 어디서든 분위기 메이커. 혼자보다 함께일 때 더 빛나고, 팀워크라면 누구에게도 지지 않습니다. 재치 있는 말 한마디로 무거운 분위기를 단번에 바꿔놓는 재능이 있습니다. 당신과 함께하면 어떤 일도 즐거워집니다.',
        best:'retriever', worst:'owl' },
      en: { name:'🐬 Free Dolphin', tag:'#Cheerful #Communication #TeamPlayer',
        desc:'The animal that resembles you is the dolphin. You are the mood-maker everywhere you go. You shine brighter together than alone, and nobody beats you when it comes to teamwork. You have a talent for flipping heavy atmospheres with one well-timed, witty remark. Everything becomes fun when you\'re around.',
        best:'retriever', worst:'owl' },
      ja: { name:'🐬 自由なイルカ', tag:'#明るさ #コミュニケーション #チームプレイヤー',
        desc:'あなたに似ている動物はイルカです。どこでも雰囲気メーカー。一人よりみんなと一緒の方が輝き、チームワークなら誰にも負けません。気の利いた一言で重い雰囲気を一気に変える才能があります。あなたと一緒にいると、どんなことも楽しくなります。',
        best:'retriever', worst:'owl' },
      zh: { name:'🐬 自由海豚', tag:'#开朗 #沟通 #团队合作',
        desc:'与你相似的动物是海豚。无论在哪里都是气氛担当。与其独自一人，和大家在一起时更闪耀，说到团队合作谁都比不过你。有用一句俏皮话瞬间打破沉重气氛的天赋。有你在的地方，什么事都变得有趣。',
        best:'retriever', worst:'owl' }
    },
    wolf: {
      ko: { name:'🐺 카리스마 늑대', tag:'#리더십 #독립심 #본능',
        desc:'당신을 닮은 동물은 늑대입니다. 무리를 이끄는 타고난 리더. 감정보다 본능과 판단력을 믿고, 한번 목표를 정하면 흔들리지 않습니다. 혼자서도 충분히 강하지만, 신뢰하는 사람들과 함께할 때 진가를 발휘합니다. 차갑게 보여도 자기 사람은 끝까지 지킵니다.',
        best:'bear', worst:'sloth' },
      en: { name:'🐺 Charismatic Wolf', tag:'#Leadership #Independence #Instinct',
        desc:'The animal that resembles you is the wolf. A born leader of the pack. You trust instinct and judgment over emotion, and once you set a goal, you never waver. You are strong enough on your own — but you show your true worth alongside people you trust. You may seem cold, but you protect your people to the end.',
        best:'bear', worst:'sloth' },
      ja: { name:'🐺 カリスマオオカミ', tag:'#リーダーシップ #独立心 #本能',
        desc:'あなたに似ている動物はオオカミです。群れを率いる生まれながらのリーダー。感情より本能と判断力を信じ、一度目標を定めたら揺るぎません。一人でも十分に強いですが、信頼する人たちと共にいるときこそ真価を発揮します。冷たく見えても自分の人は最後まで守ります。',
        best:'bear', worst:'sloth' },
      zh: { name:'🐺 魅力狼', tag:'#领导力 #独立心 #本能',
        desc:'与你相似的动物是狼。天生的狼群领袖。相信本能和判断力胜过情绪，一旦确定目标就绝不动摇。独自一人也足够强大，但和信任的人在一起时才能发挥真正的价值。看起来冷漠，但会守护自己人到最后。',
        best:'bear', worst:'sloth' }
    },
    sloth: {
      ko: { name:'🦥 느긋한 나무늘보', tag:'#여유 #평화주의 #나만의속도',
        desc:'당신을 닮은 동물은 나무늘보입니다. 서두르지 않아도 결국 도착합니다. 불필요한 에너지 낭비를 본능적으로 피하고, 꼭 해야 할 일만 완벽하게 합니다. "왜 저렇게 여유롭지?"라는 말을 자주 듣지만, 사실 당신은 이미 중요한 걸 다 알고 있는 사람입니다.',
        best:'bear', worst:'wolf' },
      en: { name:'🦥 Laid-Back Sloth', tag:'#Easygoing #Pacifist #OwnPace',
        desc:'The animal that resembles you is the sloth. You\'ll get there — no need to rush. You instinctively avoid wasting unnecessary energy, and you do only what needs to be done, perfectly. People often ask "how are you so relaxed?" — but the truth is, you already know what matters.',
        best:'bear', worst:'wolf' },
      ja: { name:'🦥 のんびりナマケモノ', tag:'#ゆとり #平和主義 #マイペース',
        desc:'あなたに似ている動物はナマケモノです。急がなくても結局たどり着きます。不必要なエネルギーの無駄遣いを本能的に避け、やるべきことだけを完璧にやります。「なんであんなに余裕があるの？」とよく言われますが、実はあなたはすでに大切なことを全部わかっている人です。',
        best:'bear', worst:'wolf' },
      zh: { name:'🦥 悠闲树懒', tag:'#从容 #和平主义 #我的节奏',
        desc:'与你相似的动物是树懒。不着急，最终也会到达。本能地避免不必要的能量消耗，只把必须做的事做到完美。经常听到"你怎么这么淡定？"这句话，但其实你已经明白了所有重要的事情。',
        best:'bear', worst:'wolf' }
    },
    fox: {
      ko: { name:'🦊 호기심 여우', tag:'#영리함 #임기응변 #매력',
        desc:'당신을 닮은 동물은 여우입니다. 어떤 상황에서도 재빠르게 최선책을 찾아냅니다. 호기심이 많아 새로운 것을 배우는 걸 좋아하고, 대화 상대를 금세 파악하는 센스가 있습니다. 위기일수록 더 빛나는 타입이고, 예상치 못한 아이디어로 주변을 놀라게 합니다.',
        best:'dolphin', worst:'owl' },
      en: { name:'🦊 Curious Fox', tag:'#Clever #Adaptable #Charming',
        desc:'The animal that resembles you is the fox. You find the best solution quickly, no matter the situation. Your curiosity drives you to love learning new things, and you have a natural sense for reading people in conversation. You shine brightest in a crisis, and you constantly surprise people with ideas they never saw coming.',
        best:'dolphin', worst:'owl' },
      ja: { name:'🦊 好奇心旺盛なキツネ', tag:'#賢さ #臨機応変 #魅力',
        desc:'あなたに似ている動物はキツネです。どんな状況でもすばやく最善策を見つけます。好奇心旺盛で新しいことを学ぶのが好きで、会話相手をすぐに把握するセンスがあります。危機のときほど輝くタイプで、予想外のアイデアで周囲を驚かせます。',
        best:'dolphin', worst:'owl' },
      zh: { name:'🦊 好奇狐狸', tag:'#聪明 #随机应变 #魅力',
        desc:'与你相似的动物是狐狸。无论什么情况都能迅速找到最佳方案。好奇心强，喜欢学习新事物，有迅速看透谈话对象的敏锐感觉。越是危机越能发光，用意想不到的想法让周围的人惊喜。',
        best:'dolphin', worst:'owl' }
    },
    bear: {
      ko: { name:'🐻 따뜻한 곰', tag:'#든든함 #보호본능 #깊은정',
        desc:'당신을 닮은 동물은 곰입니다. 말수는 적지만 행동으로 마음을 표현합니다. 소중한 사람을 끝까지 지키는 강한 보호본능이 있고, 한번 맺은 인연은 쉽게 놓지 않습니다. 겉으로는 둔해 보여도 의외로 세심하고, 가장 힘들 때 곁에 있어주는 사람이 바로 당신입니다.',
        best:'wolf', worst:'fox' },
      en: { name:'🐻 Warm Bear', tag:'#Reliable #Protective #DeepAffection',
        desc:'The animal that resembles you is the bear. You say little, but your actions speak volumes. You have a powerful protective instinct for the people you care about, and you never easily let go of a bond once formed. You may seem slow on the surface — but you\'re surprisingly attentive, and you\'re always the one who shows up when things get hardest.',
        best:'wolf', worst:'fox' },
      ja: { name:'🐻 温かいクマ', tag:'#頼もしさ #保護本能 #深い情',
        desc:'あなたに似ている動物はクマです。口数は少ないですが行動で気持ちを表します。大切な人を最後まで守る強い保護本能があり、一度結んだ縁は簡単には手放しません。外見上は鈍く見えても意外と繊細で、一番辛いときに側にいてくれるのはあなたです。',
        best:'wolf', worst:'fox' },
      zh: { name:'🐻 温暖棕熊', tag:'#可靠 #保护本能 #深厚情感',
        desc:'与你相似的动物是棕熊。话不多，但用行动表达心意。有强烈的保护本能守护重要的人，一旦建立的缘分不轻易放手。外表看起来迟钝，实际上出乎意料地细心，在最困难的时候陪伴在旁的正是你。',
        best:'wolf', worst:'fox' }
    }
  },

  questions: {
    ko: [
      { q: '카톡 읽씹 당했을 때 나는?', a: [
        { t: '"왜 안 읽어?" 먼저 한 번 더 보낸다', s: {retriever:2, dolphin:1} },
        { t: '나도 읽고 안 답한다', s: {cat:2, wolf:1} },
        { t: '뭔가 이유가 있겠지, 기다린다', s: {bear:2, sloth:1} },
        { t: '별로 신경 안 쓴다, 내 할 일 한다', s: {sloth:2, owl:1} }
      ]},
      { q: '맛집인데 웨이팅이 2시간이야. 나는?', a: [
        { t: '당연히 기다린다, 기다리는 것도 재미있어', s: {retriever:2, dolphin:1} },
        { t: '잠깐 고민하다 기다린다', s: {bear:2, owl:1} },
        { t: '근처 다른 맛집 빠르게 찾아본다', s: {fox:2, dolphin:1} },
        { t: '미련없이 다른 데 간다', s: {cat:2, wolf:1} }
      ]},
      { q: '단톡방에 침묵이 흐를 때 나는?', a: [
        { t: '먼저 재미있는 얘기나 밈을 던진다', s: {dolphin:2, retriever:1} },
        { t: '누군가 말하길 기다린다', s: {owl:2, bear:1} },
        { t: '읽기만 하고 아무것도 안 한다', s: {cat:2, sloth:1} },
        { t: '필요한 말만 딱 하고 나온다', s: {wolf:2, fox:1} }
      ]},
      { q: '처음 만난 사람, 나의 첫 행동은?', a: [
        { t: '먼저 말 걸고 이것저것 물어본다', s: {retriever:2, dolphin:1} },
        { t: '상대가 먼저 다가올 때까지 기다린다', s: {cat:2, owl:1} },
        { t: '조용히 관찰하다가 타이밍 보고 합류', s: {fox:2, wolf:1} },
        { t: '굳이 친해지려 하지 않는다', s: {sloth:2, bear:1} }
      ]},
      { q: '갑자기 오늘 계획이 다 취소됐다. 기분은?', a: [
        { t: '아쉽다, 뭐라도 새로 계획한다', s: {retriever:2, fox:1} },
        { t: '솔직히 좀 해방된 느낌', s: {cat:2, sloth:1} },
        { t: '집에서 혼자 쉬면 딱이다', s: {sloth:2, owl:1} },
        { t: '혼자서도 할 게 많다', s: {wolf:2, bear:1} }
      ]},
      { q: '친구가 내 험담을 했다는 걸 알게 됐다. 나는?', a: [
        { t: '직접 물어보고 이야기한다', s: {wolf:2, retriever:1} },
        { t: '모른 척하되 마음속으로는 정리한다', s: {cat:2, fox:1} },
        { t: '한동안 거리를 두며 상황을 지켜본다', s: {owl:2, bear:1} },
        { t: '그냥 넘긴다, 별일 아니다', s: {sloth:2, dolphin:1} }
      ]},
      { q: '여행지에서 길을 잃었다. 나는?', a: [
        { t: '주변 사람한테 바로 물어본다', s: {retriever:2, dolphin:1} },
        { t: '지도 앱으로 혼자 해결한다', s: {wolf:2, fox:1} },
        { t: '어차피 여행이니까 그냥 돌아다닌다', s: {sloth:2, bear:1} },
        { t: '일단 조용히 앉아서 상황 파악부터', s: {owl:2, cat:1} }
      ]},
      { q: '내가 가장 많이 듣는 말은?', a: [
        { t: '"너는 어떻게 그렇게 친화력이 좋아?"', s: {retriever:2, dolphin:1} },
        { t: '"너는 진짜 속을 모르겠어"', s: {cat:2, fox:1} },
        { t: '"왜 이렇게 늘 여유로워?"', s: {sloth:2, bear:1} },
        { t: '"한번 말할 때 딱 핵심만 말하네"', s: {owl:2, wolf:1} }
      ]},
      { q: '모임에서 재미없는 사람 옆에 앉게 됐다. 나는?', a: [
        { t: '오히려 내가 분위기를 띄워보려 한다', s: {retriever:2, dolphin:1} },
        { t: '조용히 자리를 옮기거나 다른 데 집중한다', s: {cat:2, wolf:1} },
        { t: '그냥 내 페이스로 조용히 있는다', s: {sloth:2, owl:1} },
        { t: '공통점을 찾아서 이야기 거리를 만든다', s: {fox:2, bear:1} }
      ]},
      { q: '나는 주로 어떤 방식으로 결정을 내릴까?', a: [
        { t: '느낌과 감으로 빠르게 결정한다', s: {dolphin:2, retriever:1} },
        { t: '장단점을 천천히 따져보고 결정한다', s: {owl:2, bear:1} },
        { t: '내 직관을 믿되 상황을 빠르게 계산한다', s: {fox:2, wolf:1} },
        { t: '결정을 최대한 미루다가 어쩔 수 없을 때 한다', s: {sloth:2, cat:1} }
      ]},
      { q: '힘들 때 나는 보통 어떻게 할까?', a: [
        { t: '친한 사람한테 바로 연락해서 털어놓는다', s: {retriever:2, dolphin:1} },
        { t: '혼자 조용히 삭이고 시간이 지나면 괜찮아진다', s: {cat:2, wolf:1} },
        { t: '맛있는 거 먹거나 좋아하는 걸 하면서 충전', s: {bear:2, sloth:1} },
        { t: '원인을 분석하고 해결책을 찾는다', s: {owl:2, fox:1} }
      ]},
      { q: '나의 이상적인 주말은?', a: [
        { t: '친구들과 신나게 놀거나 새로운 사람 만나기', s: {retriever:2, dolphin:1} },
        { t: '집에서 혼자 완전히 쉬기', s: {cat:2, sloth:1} },
        { t: '혼자 또는 소수와 조용히 취미 즐기기', s: {owl:2, bear:1} },
        { t: '뭔가 새로운 걸 배우거나 탐험하기', s: {fox:2, wolf:1} }
      ]}
    ],

    en: [
      { q: 'Someone left you on read. What do you do?', a: [
        { t: 'Send another message: "Why aren\'t you reading?"', s: {retriever:2, dolphin:1} },
        { t: 'Read their message and don\'t reply either', s: {cat:2, wolf:1} },
        { t: 'They must have a reason — wait patiently', s: {bear:2, sloth:1} },
        { t: 'Not bothered at all, keep doing your thing', s: {sloth:2, owl:1} }
      ]},
      { q: 'A famous restaurant has a 2-hour wait. You…', a: [
        { t: 'Of course you wait — the waiting is part of the fun', s: {retriever:2, dolphin:1} },
        { t: 'Think for a moment, then decide to wait', s: {bear:2, owl:1} },
        { t: 'Quickly find another great spot nearby', s: {fox:2, dolphin:1} },
        { t: 'No hesitation — you go somewhere else', s: {cat:2, wolf:1} }
      ]},
      { q: 'Silence falls in the group chat. You…', a: [
        { t: 'Throw in a funny story or meme to break the ice', s: {dolphin:2, retriever:1} },
        { t: 'Wait for someone else to say something', s: {owl:2, bear:1} },
        { t: 'Just read it and do nothing', s: {cat:2, sloth:1} },
        { t: 'Say only what needs to be said and move on', s: {wolf:2, fox:1} }
      ]},
      { q: 'Meeting someone new — your first move is…', a: [
        { t: 'Talk to them first and ask lots of questions', s: {retriever:2, dolphin:1} },
        { t: 'Wait for them to approach you', s: {cat:2, owl:1} },
        { t: 'Observe quietly, then join at the right moment', s: {fox:2, wolf:1} },
        { t: 'You don\'t really try to get close', s: {sloth:2, bear:1} }
      ]},
      { q: 'All your plans for today just got cancelled. How do you feel?', a: [
        { t: 'Bummed — you immediately start planning something new', s: {retriever:2, fox:1} },
        { t: 'Honestly, a bit liberated', s: {cat:2, sloth:1} },
        { t: 'Perfect time to rest alone at home', s: {sloth:2, owl:1} },
        { t: 'Plenty to do on your own anyway', s: {wolf:2, bear:1} }
      ]},
      { q: 'You find out a friend has been talking behind your back. You…', a: [
        { t: 'Bring it up directly and talk it out', s: {wolf:2, retriever:1} },
        { t: 'Act like you don\'t know, but quietly cut them off inside', s: {cat:2, fox:1} },
        { t: 'Keep your distance for a while and see how it plays out', s: {owl:2, bear:1} },
        { t: 'Let it go — it\'s not a big deal', s: {sloth:2, dolphin:1} }
      ]},
      { q: 'You get lost traveling. You…', a: [
        { t: 'Immediately ask someone nearby for help', s: {retriever:2, dolphin:1} },
        { t: 'Sort it out alone with a map app', s: {wolf:2, fox:1} },
        { t: 'It\'s a trip anyway — just wander around', s: {sloth:2, bear:1} },
        { t: 'Sit quietly and assess the situation first', s: {owl:2, cat:1} }
      ]},
      { q: 'The thing I hear most often is…', a: [
        { t: '"How are you so good with people?"', s: {retriever:2, dolphin:1} },
        { t: '"I can never tell what you\'re thinking"', s: {cat:2, fox:1} },
        { t: '"How are you always so relaxed?"', s: {sloth:2, bear:1} },
        { t: '"You always get straight to the point"', s: {owl:2, wolf:1} }
      ]},
      { q: 'You end up sitting next to a boring person at a gathering. You…', a: [
        { t: 'Try to liven things up yourself', s: {retriever:2, dolphin:1} },
        { t: 'Quietly move seats or focus elsewhere', s: {cat:2, wolf:1} },
        { t: 'Just stay in your own quiet lane', s: {sloth:2, owl:1} },
        { t: 'Find common ground and create a conversation', s: {fox:2, bear:1} }
      ]},
      { q: 'How do you usually make decisions?', a: [
        { t: 'Go with your gut — decide fast', s: {dolphin:2, retriever:1} },
        { t: 'Weigh the pros and cons slowly and carefully', s: {owl:2, bear:1} },
        { t: 'Trust your instincts while quickly calculating the situation', s: {fox:2, wolf:1} },
        { t: 'Delay as long as possible, decide only when forced', s: {sloth:2, cat:1} }
      ]},
      { q: 'When you\'re having a hard time, you usually…', a: [
        { t: 'Call a close friend immediately and talk it out', s: {retriever:2, dolphin:1} },
        { t: 'Quietly process it alone — time heals everything', s: {cat:2, wolf:1} },
        { t: 'Eat something good or do something you love to recharge', s: {bear:2, sloth:1} },
        { t: 'Analyze the cause and find a solution', s: {owl:2, fox:1} }
      ]},
      { q: 'Your ideal weekend is…', a: [
        { t: 'Hanging out with friends or meeting new people', s: {retriever:2, dolphin:1} },
        { t: 'Completely resting alone at home', s: {cat:2, sloth:1} },
        { t: 'Quietly enjoying a hobby alone or with a few close people', s: {owl:2, bear:1} },
        { t: 'Learning something new or exploring somewhere', s: {fox:2, wolf:1} }
      ]}
    ],

    ja: [
      { q: 'LINEを既読スルーされた。私は？', a: [
        { t: '「なんで読んでるの？」ともう一度送る', s: {retriever:2, dolphin:1} },
        { t: '私も読んで返信しない', s: {cat:2, wolf:1} },
        { t: '何か理由があるだろうと待つ', s: {bear:2, sloth:1} },
        { t: '特に気にせず自分のことをする', s: {sloth:2, owl:1} }
      ]},
      { q: '有名なお店で待ち時間2時間。私は？', a: [
        { t: 'もちろん待つ、待つのも楽しいし', s: {retriever:2, dolphin:1} },
        { t: 'ちょっと悩んで待つことにする', s: {bear:2, owl:1} },
        { t: '近くの別のお店をすばやく探す', s: {fox:2, dolphin:1} },
        { t: '迷わず別のところへ行く', s: {cat:2, wolf:1} }
      ]},
      { q: 'グループラインに沈黙が流れた。私は？', a: [
        { t: '先に面白い話やミームを投下する', s: {dolphin:2, retriever:1} },
        { t: '誰かが話すのを待つ', s: {owl:2, bear:1} },
        { t: '読むだけで何もしない', s: {cat:2, sloth:1} },
        { t: '必要なことだけ言って終わる', s: {wolf:2, fox:1} }
      ]},
      { q: '初めて会う人、私の最初の行動は？', a: [
        { t: '先に話しかけていろいろ聞く', s: {retriever:2, dolphin:1} },
        { t: '相手が先に来るまで待つ', s: {cat:2, owl:1} },
        { t: '静かに観察してタイミングを見て合流', s: {fox:2, wolf:1} },
        { t: '特に仲良くなろうとしない', s: {sloth:2, bear:1} }
      ]},
      { q: '突然今日の予定が全部キャンセルになった。気持ちは？', a: [
        { t: '残念、何か新しい計画を立てる', s: {retriever:2, fox:1} },
        { t: '正直ちょっと解放された感じ', s: {cat:2, sloth:1} },
        { t: '家で一人でゆっくりするのがちょうどいい', s: {sloth:2, owl:1} },
        { t: '一人でもやることはたくさんある', s: {wolf:2, bear:1} }
      ]},
      { q: '友達が陰口をたたいていたと知った。私は？', a: [
        { t: '直接聞いて話し合う', s: {wolf:2, retriever:1} },
        { t: '知らないふりをしつつ心の中で整理する', s: {cat:2, fox:1} },
        { t: 'しばらく距離をおいて状況を見る', s: {owl:2, bear:1} },
        { t: '流す、大したことじゃない', s: {sloth:2, dolphin:1} }
      ]},
      { q: '旅行先で道に迷った。私は？', a: [
        { t: '近くの人にすぐ聞く', s: {retriever:2, dolphin:1} },
        { t: '地図アプリで一人で解決する', s: {wolf:2, fox:1} },
        { t: 'どうせ旅行だし、そのまま歩き回る', s: {sloth:2, bear:1} },
        { t: 'まず静かに座って状況を把握する', s: {owl:2, cat:1} }
      ]},
      { q: '私がよく言われる言葉は？', a: [
        { t: '「なんでそんなに人懐っこいの？」', s: {retriever:2, dolphin:1} },
        { t: '「本当に何考えてるかわからない」', s: {cat:2, fox:1} },
        { t: '「なんでいつもそんなに余裕があるの？」', s: {sloth:2, bear:1} },
        { t: '「一言で核心だけ言うね」', s: {owl:2, wolf:1} }
      ]},
      { q: '集まりでつまらない人の隣に座ることになった。私は？', a: [
        { t: '自分が雰囲気を盛り上げようとする', s: {retriever:2, dolphin:1} },
        { t: '静かに席を移るか他に集中する', s: {cat:2, wolf:1} },
        { t: '自分のペースで静かにしている', s: {sloth:2, owl:1} },
        { t: '共通点を見つけて話題を作る', s: {fox:2, bear:1} }
      ]},
      { q: '私はどんな方法で決断を下すことが多い？', a: [
        { t: '感覚と勘で素早く決める', s: {dolphin:2, retriever:1} },
        { t: 'メリットとデメリットをゆっくり考えて決める', s: {owl:2, bear:1} },
        { t: '直感を信じながら状況をすばやく計算する', s: {fox:2, wolf:1} },
        { t: 'できるだけ先延ばしにして仕方ない時に決める', s: {sloth:2, cat:1} }
      ]},
      { q: '辛い時、私はたいていどうする？', a: [
        { t: '親しい人にすぐ連絡して打ち明ける', s: {retriever:2, dolphin:1} },
        { t: '一人で静かに消化して時間が経てば大丈夫になる', s: {cat:2, wolf:1} },
        { t: '美味しいものを食べたり好きなことをして充電', s: {bear:2, sloth:1} },
        { t: '原因を分析して解決策を探す', s: {owl:2, fox:1} }
      ]},
      { q: '理想的な週末は？', a: [
        { t: '友達と楽しく遊んだり新しい人に会う', s: {retriever:2, dolphin:1} },
        { t: '家で一人で完全に休む', s: {cat:2, sloth:1} },
        { t: '一人か少人数で静かに趣味を楽しむ', s: {owl:2, bear:1} },
        { t: '新しいことを学んだり探検したりする', s: {fox:2, wolf:1} }
      ]}
    ],

    zh: [
      { q: '被已读不回了，我会？', a: [
        { t: '再发一条"你怎么不回？"', s: {retriever:2, dolphin:1} },
        { t: '我也读了不回', s: {cat:2, wolf:1} },
        { t: '肯定有原因，耐心等', s: {bear:2, sloth:1} },
        { t: '完全不在意，做自己的事', s: {sloth:2, owl:1} }
      ]},
      { q: '网红餐厅要等2小时，我会？', a: [
        { t: '当然等，等待也是乐趣的一部分', s: {retriever:2, dolphin:1} },
        { t: '想了想还是决定等', s: {bear:2, owl:1} },
        { t: '迅速搜索附近其他好店', s: {fox:2, dolphin:1} },
        { t: '毫不犹豫去别家', s: {cat:2, wolf:1} }
      ]},
      { q: '群聊突然沉默了，我会？', a: [
        { t: '先抛出有趣的话题或表情包', s: {dolphin:2, retriever:1} },
        { t: '等别人先说话', s: {owl:2, bear:1} },
        { t: '只是看着，什么都不做', s: {cat:2, sloth:1} },
        { t: '说完必要的话就退出', s: {wolf:2, fox:1} }
      ]},
      { q: '遇到初次见面的人，我的第一个动作是？', a: [
        { t: '主动搭话，问这问那', s: {retriever:2, dolphin:1} },
        { t: '等对方先来', s: {cat:2, owl:1} },
        { t: '静静观察，看准时机再加入', s: {fox:2, wolf:1} },
        { t: '不特意去拉近关系', s: {sloth:2, bear:1} }
      ]},
      { q: '今天所有计划突然取消了，心情是？', a: [
        { t: '有点遗憾，马上重新计划', s: {retriever:2, fox:1} },
        { t: '老实说有点解脱的感觉', s: {cat:2, sloth:1} },
        { t: '正好一个人在家好好休息', s: {sloth:2, owl:1} },
        { t: '一个人也有很多事要做', s: {wolf:2, bear:1} }
      ]},
      { q: '得知朋友在背后说我坏话，我会？', a: [
        { t: '直接问清楚，好好谈谈', s: {wolf:2, retriever:1} },
        { t: '装作不知道，心里默默做好决定', s: {cat:2, fox:1} },
        { t: '暂时保持距离，观察情况', s: {owl:2, bear:1} },
        { t: '算了，没什么大不了的', s: {sloth:2, dolphin:1} }
      ]},
      { q: '旅行时迷路了，我会？', a: [
        { t: '马上向附近的人问路', s: {retriever:2, dolphin:1} },
        { t: '用地图app自己解决', s: {wolf:2, fox:1} },
        { t: '反正是旅行，就随便逛逛', s: {sloth:2, bear:1} },
        { t: '先静静坐下来搞清楚情况', s: {owl:2, cat:1} }
      ]},
      { q: '我最常听到的话是？', a: [
        { t: '"你怎么这么会交朋友？"', s: {retriever:2, dolphin:1} },
        { t: '"真的看不透你在想什么"', s: {cat:2, fox:1} },
        { t: '"你怎么总是那么淡定？"', s: {sloth:2, bear:1} },
        { t: '"你说话总是直击重点"', s: {owl:2, wolf:1} }
      ]},
      { q: '聚会上被安排坐在无聊的人旁边，我会？', a: [
        { t: '自己去活跃气氛', s: {retriever:2, dolphin:1} },
        { t: '悄悄换座位或专注别处', s: {cat:2, wolf:1} },
        { t: '就按自己的节奏安静待着', s: {sloth:2, owl:1} },
        { t: '找共同点制造话题', s: {fox:2, bear:1} }
      ]},
      { q: '我通常是怎么做决定的？', a: [
        { t: '凭感觉，迅速决定', s: {dolphin:2, retriever:1} },
        { t: '慢慢权衡利弊再决定', s: {owl:2, bear:1} },
        { t: '相信直觉的同时迅速计算情况', s: {fox:2, wolf:1} },
        { t: '尽量拖，不得不决定时才下决定', s: {sloth:2, cat:1} }
      ]},
      { q: '难受的时候，我通常会？', a: [
        { t: '马上联系亲近的人倾诉', s: {retriever:2, dolphin:1} },
        { t: '自己静静消化，时间久了就好了', s: {cat:2, wolf:1} },
        { t: '吃好吃的或做喜欢的事充电', s: {bear:2, sloth:1} },
        { t: '分析原因，寻找解决方案', s: {owl:2, fox:1} }
      ]},
      { q: '理想的周末是？', a: [
        { t: '和朋友尽情玩或认识新朋友', s: {retriever:2, dolphin:1} },
        { t: '一个人在家完全休息', s: {cat:2, sloth:1} },
        { t: '独自或和少数人安静享受爱好', s: {owl:2, bear:1} },
        { t: '学新东西或去探索', s: {fox:2, wolf:1} }
      ]}
    ]
  }
};

return _data;
})();

console.log('test_alter.js loaded');
