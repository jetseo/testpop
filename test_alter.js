/* ===========================================================
   테스트 #3: 내 안의 또 다른 나 — 부캐 테스트
   숨은 성향 → 동물 부캐 8유형 / 12문항 / 4개 언어
   =========================================================== */
const TEST_ALTER = {
  id: 'alter-ego',
  emoji: '🪞',
  typeList: ['retriever','cat','owl','dolphin','wolf','sloth','fox','bear'],
  resultLabel: { ko:'내 안의 또 다른 나는', en:'Your alter ego is', ja:'私の中のもう一人は', zh:'我内心的另一个我是' },
  meta: {
    retriever:{ img:'images/alter_retriever.jpg', color:'#FFD98A', ink:'#8A5A00' },
    cat:      { img:'images/alter_cat.jpg',       color:'#C9B6E4', ink:'#5B3F86' },
    owl:      { img:'images/alter_owl.jpg',       color:'#A8D0C8', ink:'#1E5A52' },
    dolphin:  { img:'images/alter_dolphin.jpg',   color:'#A8D8F0', ink:'#1E5A86' },
    wolf:     { img:'images/alter_wolf.jpg',       color:'#9AA3C0', ink:'#2E3658' },
    sloth:    { img:'images/alter_sloth.jpg',      color:'#C5DDB0', ink:'#4A6B2E' },
    fox:      { img:'images/alter_fox.jpg',        color:'#FFB877', ink:'#8A4B12' },
    bear:     { img:'images/alter_bear.jpg',       color:'#E0C2A0', ink:'#6B4A2E' }
  },
  types: {
    retriever:{
      ko:{name:'🐶 사교적 골든리트리버', tag:'모두의 분위기 메이커',
        desc:'어디서든 금세 친구를 만드는 당신. 밝은 에너지로 주변을 환하게 밝히고, 함께 있으면 누구나 편안해져요. 가끔 너무 다 퍼주다 지치기도 하지만, 그 따뜻함이 당신의 가장 큰 매력입니다.',
        best:'cat', worst:'wolf'},
      en:{name:'🐶 Sociable Golden Retriever', tag:'everyone\'s mood-maker',
        desc:'You make friends anywhere in no time. Your bright energy lights up the room and puts everyone at ease. Sometimes you give too much and tire out, but that warmth is your greatest charm.',
        best:'cat', worst:'wolf'},
      ja:{name:'🐶 社交的ゴールデンレトリバー', tag:'みんなのムードメーカー',
        desc:'どこでもすぐ友達を作るあなた。明るいエネルギーで周りを照らし、一緒にいると誰もが安心します。たまに与えすぎて疲れることもあるけど、その温かさが最大の魅力です。',
        best:'cat', worst:'wolf'},
      zh:{name:'🐶 社交金毛犬', tag:'全场气氛担当',
        desc:'你在哪都能很快交到朋友。明亮的能量点亮周围，和你在一起谁都觉得自在。偶尔付出太多会累，但那份温暖正是你最大的魅力。',
        best:'cat', worst:'wolf'}
    },
    cat:{
      ko:{name:'🐱 새침한 고양이', tag:'츤데레 마이웨이',
        desc:'겉으론 시크하지만 속은 누구보다 따뜻한 츤데레. 혼자만의 시간이 꼭 필요하고, 내 페이스를 지키는 게 중요해요. 마음을 연 사람에겐 한없이 다정한 반전 매력의 소유자입니다.',
        best:'retriever', worst:'dolphin'},
      en:{name:'🐱 Aloof Cat', tag:'tsundere, my way',
        desc:'Chic on the outside, warmer than anyone inside — a true tsundere. You need your alone time and value keeping your own pace. To those you open up to, you\'re endlessly sweet: the charm of contrast.',
        best:'retriever', worst:'dolphin'},
      ja:{name:'🐱 ツンとした猫', tag:'ツンデレ・マイウェイ',
        desc:'見た目はクールbut 中は誰より温かいツンデレ。一人の時間が必要で、自分のペースを守るのが大事。心を開いた相手にはとことん優しい、反転の魅力の持ち主です。',
        best:'retriever', worst:'dolphin'},
      zh:{name:'🐱 高冷猫咪', tag:'傲娇的我行我素',
        desc:'外表高冷，内心却比谁都温暖的傲娇。需要独处的时间，重视保持自己的节奏。对敞开心扉的人无比温柔，是反差萌的拥有者。',
        best:'retriever', worst:'dolphin'}
    },
    owl:{
      ko:{name:'🦉 지혜로운 부엉이', tag:'조용한 브레인',
        desc:'말수는 적지만 머릿속은 늘 분주한 사색가. 깊이 관찰하고 신중하게 판단해서, 사람들이 중요한 결정을 앞두고 당신을 찾아요. 조용한 카리스마로 신뢰를 얻는 진정한 지혜의 소유자입니다.',
        best:'fox', worst:'dolphin'},
      en:{name:'🦉 Wise Owl', tag:'the quiet brain',
        desc:'Few words, but a mind always at work. You observe deeply and judge carefully, so people seek you out before big decisions. With quiet charisma you earn trust — a true keeper of wisdom.',
        best:'fox', worst:'dolphin'},
      ja:{name:'🦉 賢いフクロウ', tag:'静かなブレイン',
        desc:'口数は少ないけど頭の中は常に忙しい思索家。深く観察し慎重に判断するので、人は大事な決断の前にあなたを訪ねます。静かなカリスマで信頼を得る、真の知恵の持ち主です。',
        best:'fox', worst:'dolphin'},
      zh:{name:'🦉 智慧猫头鹰', tag:'安静的大脑',
        desc:'话不多，但脑子总在运转的思考者。深入观察、慎重判断，所以人们在重大决定前都来找你。用安静的魅力赢得信任，是真正的智慧担当。',
        best:'fox', worst:'dolphin'}
    },
    dolphin:{
      ko:{name:'🐬 자유로운 돌고래', tag:'통통 튀는 자유영혼',
        desc:'틀에 갇히는 걸 싫어하는 자유로운 영혼. 새로운 경험과 즉흥적인 모험을 사랑하고, 어디로 튈지 모르는 매력이 있어요. 당신과 함께하면 평범한 하루도 특별한 모험이 됩니다.',
        best:'bear', worst:'owl'},
      en:{name:'🐬 Free Dolphin', tag:'a bouncy free spirit',
        desc:'A free soul who hates being boxed in. You love new experiences and spontaneous adventures, with an unpredictable charm. With you, even an ordinary day turns into a special adventure.',
        best:'bear', worst:'owl'},
      ja:{name:'🐬 自由なイルカ', tag:'弾ける自由な魂',
        desc:'枠にはまるのが嫌いな自由な魂。新しい経験と即興の冒険を愛し、どこへ跳ねるか分からない魅力があります。あなたと一緒なら平凡な一日も特別な冒険になります。',
        best:'bear', worst:'owl'},
      zh:{name:'🐬 自由海豚', tag:'活蹦乱跳的自由灵魂',
        desc:'讨厌被框住的自由灵魂。热爱新体验和即兴冒险，有种不知会蹦向何方的魅力。和你在一起，平凡的一天也会变成特别的冒险。',
        best:'bear', worst:'owl'}
    },
    wolf:{
      ko:{name:'🐺 카리스마 늑대', tag:'타고난 리더',
        desc:'묵묵히 앞장서는 타고난 리더. 강한 신념과 책임감으로 무리를 이끌고, 위기에서 더 빛나는 사람이에요. 겉으론 도도해 보여도 동료를 끝까지 챙기는 든든한 우두머리입니다.',
        best:'sloth', worst:'retriever'},
      en:{name:'🐺 Charismatic Wolf', tag:'a natural-born leader',
        desc:'A born leader who quietly takes the front. With strong conviction and responsibility you lead the pack, shining brightest in a crisis. Aloof on the surface, but a dependable chief who looks after the team to the end.',
        best:'sloth', worst:'retriever'},
      ja:{name:'🐺 カリスマ狼', tag:'生まれながらのリーダー',
        desc:'黙々と先頭に立つ生まれながらのリーダー。強い信念と責任感で群れを率い、危機でこそ輝く人。見た目はクールでも仲間を最後まで守る頼れるボスです。',
        best:'sloth', worst:'retriever'},
      zh:{name:'🐺 魅力之狼', tag:'天生的领袖',
        desc:'默默走在前面的天生领袖。以坚定的信念和责任感带领团队，在危机中更加闪耀。表面高傲，却是守护同伴到最后的可靠头领。',
        best:'sloth', worst:'retriever'}
    },
    sloth:{
      ko:{name:'🦥 느긋한 나무늘보', tag:'마이페이스 힐러',
        desc:'서두르지 않는 여유의 달인. 어떤 상황에도 평온함을 잃지 않고, 그 느긋함이 주변 사람들의 마음까지 편안하게 만들어요. 함께 있으면 시간이 천천히 흐르는 듯한 힐링을 주는 존재입니다.',
        best:'wolf', worst:'fox'},
      en:{name:'🦥 Easygoing Sloth', tag:'a my-pace healer',
        desc:'A master of unhurried calm. You keep your peace in any situation, and that ease soothes the people around you too. With you, time seems to slow down — you\'re a presence that heals.',
        best:'wolf', worst:'fox'},
      ja:{name:'🦥 のんびりナマケモノ', tag:'マイペースな癒し手',
        desc:'急がない余裕の達人。どんな状況でも平穏を失わず、そののんびりさが周りの心まで安らげます。一緒にいると時間がゆっくり流れるような癒しをくれる存在です。',
        best:'wolf', worst:'fox'},
      zh:{name:'🦥 悠闲树懒', tag:'我行我素的治愈者',
        desc:'从容不迫的高手。无论什么情况都不失平静，那份悠闲也让周围人的心安定下来。和你在一起仿佛时间都慢了下来，是带来治愈的存在。',
        best:'wolf', worst:'fox'}
    },
    fox:{
      ko:{name:'🦊 호기심 여우', tag:'반짝이는 아이디어뱅크',
        desc:'세상 모든 게 궁금한 아이디어뱅크. 영리한 두뇌와 번뜩이는 재치로 늘 새로운 걸 만들어내요. 지루한 걸 못 참고 끊임없이 도전하는, 반짝이는 호기심이 무기인 사람입니다.',
        best:'owl', worst:'sloth'},
      en:{name:'🦊 Curious Fox', tag:'a sparkling idea bank',
        desc:'An idea bank curious about everything. With a clever mind and quick wit, you\'re always creating something new. You can\'t stand boredom and keep challenging yourself — sparkling curiosity is your weapon.',
        best:'owl', worst:'sloth'},
      ja:{name:'🦊 好奇心キツネ', tag:'きらめくアイデアバンク',
        desc:'世の中すべてが気になるアイデアバンク。賢い頭脳とひらめく機転で常に新しいものを生み出します。退屈が苦手で絶えず挑戦する、きらめく好奇心が武器の人です。',
        best:'owl', worst:'sloth'},
      zh:{name:'🦊 好奇狐狸', tag:'闪光的点子库',
        desc:'对世间万物都好奇的点子库。凭聪明的头脑和灵光的机智，总能创造新东西。受不了无聊，不断挑战——闪光的好奇心就是你的武器。',
        best:'owl', worst:'sloth'}
    },
    bear:{
      ko:{name:'🐻 따뜻한 곰', tag:'든든한 보호자',
        desc:'곁에 있는 것만으로 안심이 되는 든든한 보호자. 묵직한 신뢰감과 넉넉한 품으로 사람들을 품어줘요. 표현은 서툴러도 행동으로 사랑을 보여주는, 진국 중의 진국인 사람입니다.',
        best:'dolphin', worst:'cat'},
      en:{name:'🐻 Warm Bear', tag:'a dependable protector',
        desc:'A reliable protector whose mere presence reassures. With solid trust and a generous embrace, you hold people close. You may be clumsy with words, but you show love through action — genuine to the core.',
        best:'dolphin', worst:'cat'},
      ja:{name:'🐻 温かいクマ', tag:'頼れる守り手',
        desc:'そばにいるだけで安心できる頼れる守り手。どっしりした信頼感と大きな包容力で人を包みます。表現は不器用でも行動で愛を示す、本物中の本物の人です。',
        best:'dolphin', worst:'cat'},
      zh:{name:'🐻 温暖的熊', tag:'可靠的守护者',
        desc:'光是在身边就让人安心的可靠守护者。以厚重的信赖感和宽广的胸怀包容他人。也许不善表达，却用行动展现爱——是实在中的实在人。',
        best:'dolphin', worst:'cat'}
    }
  },
  questions: { ko:[
    {q:'처음 만난 사람들 사이에서 나는?',a:[
      {t:'먼저 다가가 말을 건다',s:{retriever:3}},
      {t:'분위기를 조용히 관찰한다',s:{owl:2,cat:1}},
      {t:'재미있는 사람을 찾아 다닌다',s:{dolphin:2,fox:1}},
      {t:'편한 한두 명하고만 얘기',s:{cat:2,bear:1}}
    ]},
    {q:'주말에 가장 하고 싶은 건?',a:[
      {t:'친구들과 왁자지껄 모임',s:{retriever:3}},
      {t:'집에서 혼자 푹 쉬기',s:{sloth:2,cat:1}},
      {t:'안 가본 곳으로 즉흥 여행',s:{dolphin:3}},
      {t:'새로운 취미나 공부',s:{fox:2,owl:1}}
    ]},
    {q:'친구가 고민을 털어놓으면?',a:[
      {t:'끝까지 들어주고 위로한다',s:{bear:2,retriever:1}},
      {t:'냉철하게 해결책을 분석',s:{owl:3}},
      {t:'기분 전환하러 데리고 나간다',s:{dolphin:2}},
      {t:'든든하게 곁을 지켜준다',s:{bear:3}}
    ]},
    {q:'팀 프로젝트에서 내 역할은?',a:[
      {t:'전체를 이끄는 리더',s:{wolf:3}},
      {t:'아이디어를 쏟아내는 사람',s:{fox:3}},
      {t:'분위기를 띄우는 윤활유',s:{retriever:2,dolphin:1}},
      {t:'묵묵히 맡은 일 완수',s:{sloth:1,owl:1,bear:1}}
    ]},
    {q:'스트레스를 푸는 나만의 방법은?',a:[
      {t:'사람들과 수다 떨기',s:{retriever:2,dolphin:1}},
      {t:'혼자만의 시간 갖기',s:{cat:3}},
      {t:'느긋하게 쉬며 충전',s:{sloth:3}},
      {t:'새로운 자극 찾아 나서기',s:{fox:2,dolphin:1}}
    ]},
    {q:'중요한 결정을 내릴 때 나는?',a:[
      {t:'직관을 믿고 빠르게',s:{dolphin:2,wolf:1}},
      {t:'정보를 모아 신중하게',s:{owl:3}},
      {t:'믿는 사람과 의논',s:{bear:2,retriever:1}},
      {t:'내 소신대로 밀어붙임',s:{wolf:3}}
    ]},
    {q:'사람들이 말하는 나의 첫인상은?',a:[
      {t:'밝고 친근하다',s:{retriever:3}},
      {t:'차분하고 똑똑해 보인다',s:{owl:2,cat:1}},
      {t:'시크하고 도도하다',s:{cat:2,wolf:1}},
      {t:'편안하고 따뜻하다',s:{bear:2,sloth:1}}
    ]},
    {q:'갑자기 약속이 취소됐다. 내 반응은?',a:[
      {t:'오히려 좋아! 집에서 쉰다',s:{sloth:2,cat:1}},
      {t:'다른 친구에게 바로 연락',s:{retriever:3}},
      {t:'혼자 즉흥적으로 뭔가 한다',s:{dolphin:2,fox:1}},
      {t:'밀린 일을 처리한다',s:{owl:2,wolf:1}}
    ]},
    {q:'내가 가장 두려워하는 건?',a:[
      {t:'혼자 외톨이가 되는 것',s:{retriever:2,bear:1}},
      {t:'내 자유가 묶이는 것',s:{dolphin:2,cat:1}},
      {t:'무능력해 보이는 것',s:{wolf:2,owl:1}},
      {t:'갈등과 다툼',s:{sloth:2,bear:1}}
    ]},
    {q:'새로운 모임에 갔을 때 나는?',a:[
      {t:'금세 중심 인물이 된다',s:{retriever:2,wolf:1}},
      {t:'관찰하다 천천히 스며든다',s:{owl:2,cat:1}},
      {t:'재미있는 사람과 금방 친해짐',s:{dolphin:2,fox:1}},
      {t:'조용히 있다가 일찍 나온다',s:{cat:2,sloth:1}}
    ]},
    {q:'친구들이 나에게 자주 하는 말은?',a:[
      {t:'"너랑 있으면 즐거워"',s:{retriever:2,dolphin:1}},
      {t:'"넌 진짜 똑똑해"',s:{owl:2,fox:1}},
      {t:'"넌 듬직해"',s:{bear:2,wolf:1}},
      {t:'"넌 알다가도 모르겠어"',s:{cat:2,dolphin:1}}
    ]},
    {q:'이상적인 나의 모습은?',a:[
      {t:'모두에게 사랑받는 사람',s:{retriever:3}},
      {t:'존경받는 리더',s:{wolf:3}},
      {t:'자유롭게 사는 사람',s:{dolphin:3}},
      {t:'평온하고 지혜로운 사람',s:{owl:2,sloth:1}}
    ]}
  ],
  en:[
    {q:'Among people you just met, you...',a:[
      {t:'Approach and strike up a chat first',s:{retriever:3}},
      {t:'Quietly observe the vibe',s:{owl:2,cat:1}},
      {t:'Seek out the fun people',s:{dolphin:2,fox:1}},
      {t:'Talk only to one or two you\'re comfy with',s:{cat:2,bear:1}}
    ]},
    {q:'What you most want to do on a weekend?',a:[
      {t:'A lively gathering with friends',s:{retriever:3}},
      {t:'Rest alone at home',s:{sloth:2,cat:1}},
      {t:'A spontaneous trip somewhere new',s:{dolphin:3}},
      {t:'A new hobby or some studying',s:{fox:2,owl:1}}
    ]},
    {q:'When a friend shares a worry?',a:[
      {t:'Listen to the end and comfort them',s:{bear:2,retriever:1}},
      {t:'Coolly analyze a solution',s:{owl:3}},
      {t:'Take them out for a change of mood',s:{dolphin:2}},
      {t:'Stay solidly by their side',s:{bear:3}}
    ]},
    {q:'Your role in a team project?',a:[
      {t:'The leader steering it all',s:{wolf:3}},
      {t:'The one pouring out ideas',s:{fox:3}},
      {t:'The lubricant lifting the mood',s:{retriever:2,dolphin:1}},
      {t:'Quietly finishing my part',s:{sloth:1,owl:1,bear:1}}
    ]},
    {q:'Your own way to relieve stress?',a:[
      {t:'Chatting with people',s:{retriever:2,dolphin:1}},
      {t:'Having time to myself',s:{cat:3}},
      {t:'Recharging by resting easy',s:{sloth:3}},
      {t:'Seeking new stimulation',s:{fox:2,dolphin:1}}
    ]},
    {q:'When making an important decision?',a:[
      {t:'Trust my gut and move fast',s:{dolphin:2,wolf:1}},
      {t:'Gather info and decide carefully',s:{owl:3}},
      {t:'Discuss with someone I trust',s:{bear:2,retriever:1}},
      {t:'Push ahead on my conviction',s:{wolf:3}}
    ]},
    {q:'Your first impression, people say?',a:[
      {t:'Bright and friendly',s:{retriever:3}},
      {t:'Calm and smart-looking',s:{owl:2,cat:1}},
      {t:'Chic and aloof',s:{cat:2,wolf:1}},
      {t:'Easygoing and warm',s:{bear:2,sloth:1}}
    ]},
    {q:'Plans suddenly cancelled. You react?',a:[
      {t:'Even better! Rest at home',s:{sloth:2,cat:1}},
      {t:'Text another friend right away',s:{retriever:3}},
      {t:'Do something spontaneous alone',s:{dolphin:2,fox:1}},
      {t:'Handle my backlog of tasks',s:{owl:2,wolf:1}}
    ]},
    {q:'What you fear most?',a:[
      {t:'Ending up alone and isolated',s:{retriever:2,bear:1}},
      {t:'Having my freedom tied down',s:{dolphin:2,cat:1}},
      {t:'Looking incompetent',s:{wolf:2,owl:1}},
      {t:'Conflict and quarrels',s:{sloth:2,bear:1}}
    ]},
    {q:'At a new gathering, you...',a:[
      {t:'Quickly become the center',s:{retriever:2,wolf:1}},
      {t:'Observe, then slowly blend in',s:{owl:2,cat:1}},
      {t:'Bond fast with the fun ones',s:{dolphin:2,fox:1}},
      {t:'Stay quiet and leave early',s:{cat:2,sloth:1}}
    ]},
    {q:'What friends often say about you?',a:[
      {t:'"You\'re fun to be around"',s:{retriever:2,dolphin:1}},
      {t:'"You\'re really smart"',s:{owl:2,fox:1}},
      {t:'"You\'re dependable"',s:{bear:2,wolf:1}},
      {t:'"I can never quite figure you out"',s:{cat:2,dolphin:1}}
    ]},
    {q:'Your ideal self?',a:[
      {t:'Someone loved by everyone',s:{retriever:3}},
      {t:'A respected leader',s:{wolf:3}},
      {t:'Someone living freely',s:{dolphin:3}},
      {t:'Someone calm and wise',s:{owl:2,sloth:1}}
    ]}
  ],
  ja:[
    {q:'初対面の人たちの中で私は？',a:[
      {t:'自分から話しかける',s:{retriever:3}},
      {t:'静かに雰囲気を観察する',s:{owl:2,cat:1}},
      {t:'面白い人を探し回る',s:{dolphin:2,fox:1}},
      {t:'気の合う一二人とだけ話す',s:{cat:2,bear:1}}
    ]},
    {q:'週末に一番やりたいことは？',a:[
      {t:'友達とにぎやかに集まる',s:{retriever:3}},
      {t:'家で一人ゆっくり休む',s:{sloth:2,cat:1}},
      {t:'行ったことない所へ即興旅行',s:{dolphin:3}},
      {t:'新しい趣味や勉強',s:{fox:2,owl:1}}
    ]},
    {q:'友達が悩みを打ち明けたら？',a:[
      {t:'最後まで聞いて慰める',s:{bear:2,retriever:1}},
      {t:'冷静に解決策を分析',s:{owl:3}},
      {t:'気分転換に連れ出す',s:{dolphin:2}},
      {t:'どっしりそばで支える',s:{bear:3}}
    ]},
    {q:'チームプロジェクトでの役割は？',a:[
      {t:'全体を率いるリーダー',s:{wolf:3}},
      {t:'アイデアを出しまくる人',s:{fox:3}},
      {t:'雰囲気を盛り上げる潤滑油',s:{retriever:2,dolphin:1}},
      {t:'黙々と担当を完遂',s:{sloth:1,owl:1,bear:1}}
    ]},
    {q:'ストレス発散の私なりの方法は？',a:[
      {t:'人とおしゃべりする',s:{retriever:2,dolphin:1}},
      {t:'一人の時間を持つ',s:{cat:3}},
      {t:'のんびり休んで充電',s:{sloth:3}},
      {t:'新しい刺激を探しに行く',s:{fox:2,dolphin:1}}
    ]},
    {q:'重要な決断をするとき私は？',a:[
      {t:'直感を信じて素早く',s:{dolphin:2,wolf:1}},
      {t:'情報を集めて慎重に',s:{owl:3}},
      {t:'信じる人と相談',s:{bear:2,retriever:1}},
      {t:'自分の信念で押し進める',s:{wolf:3}}
    ]},
    {q:'人が言う私の第一印象は？',a:[
      {t:'明るくて親しみやすい',s:{retriever:3}},
      {t:'落ち着いて賢そう',s:{owl:2,cat:1}},
      {t:'クールでツンとしてる',s:{cat:2,wolf:1}},
      {t:'穏やかで温かい',s:{bear:2,sloth:1}}
    ]},
    {q:'急に約束がキャンセル。私の反応は？',a:[
      {t:'むしろ嬉しい！家で休む',s:{sloth:2,cat:1}},
      {t:'別の友達にすぐ連絡',s:{retriever:3}},
      {t:'一人で即興的に何かする',s:{dolphin:2,fox:1}},
      {t:'溜まった用事を片付ける',s:{owl:2,wolf:1}}
    ]},
    {q:'私が一番恐れるのは？',a:[
      {t:'一人ぼっちになること',s:{retriever:2,bear:1}},
      {t:'自由が縛られること',s:{dolphin:2,cat:1}},
      {t:'無能に見えること',s:{wolf:2,owl:1}},
      {t:'対立と争い',s:{sloth:2,bear:1}}
    ]},
    {q:'新しい集まりに行ったとき私は？',a:[
      {t:'すぐ中心人物になる',s:{retriever:2,wolf:1}},
      {t:'観察してゆっくり馴染む',s:{owl:2,cat:1}},
      {t:'面白い人とすぐ仲良くなる',s:{dolphin:2,fox:1}},
      {t:'静かにいて早めに帰る',s:{cat:2,sloth:1}}
    ]},
    {q:'友達がよく私に言うことは？',a:[
      {t:'「君といると楽しい」',s:{retriever:2,dolphin:1}},
      {t:'「君は本当に賢い」',s:{owl:2,fox:1}},
      {t:'「君は頼もしい」',s:{bear:2,wolf:1}},
      {t:'「君はよく分からない」',s:{cat:2,dolphin:1}}
    ]},
    {q:'理想の私の姿は？',a:[
      {t:'みんなに愛される人',s:{retriever:3}},
      {t:'尊敬されるリーダー',s:{wolf:3}},
      {t:'自由に生きる人',s:{dolphin:3}},
      {t:'穏やかで賢い人',s:{owl:2,sloth:1}}
    ]}
  ],
  zh:[
    {q:'在初次见面的人中，我是？',a:[
      {t:'主动上前搭话',s:{retriever:3}},
      {t:'安静地观察气氛',s:{owl:2,cat:1}},
      {t:'四处寻找有趣的人',s:{dolphin:2,fox:1}},
      {t:'只和一两个熟悉的人聊',s:{cat:2,bear:1}}
    ]},
    {q:'周末最想做的事？',a:[
      {t:'和朋友热闹聚会',s:{retriever:3}},
      {t:'在家一个人好好休息',s:{sloth:2,cat:1}},
      {t:'临时起意去没去过的地方',s:{dolphin:3}},
      {t:'新爱好或学习',s:{fox:2,owl:1}}
    ]},
    {q:'朋友倾诉烦恼时？',a:[
      {t:'听到最后并安慰',s:{bear:2,retriever:1}},
      {t:'冷静分析解决方案',s:{owl:3}},
      {t:'带去散心换换心情',s:{dolphin:2}},
      {t:'踏实地陪在身边',s:{bear:3}}
    ]},
    {q:'团队项目里我的角色？',a:[
      {t:'统领全局的领导',s:{wolf:3}},
      {t:'疯狂输出点子的人',s:{fox:3}},
      {t:'活跃气氛的润滑剂',s:{retriever:2,dolphin:1}},
      {t:'默默完成分内事',s:{sloth:1,owl:1,bear:1}}
    ]},
    {q:'我减压的独门方法？',a:[
      {t:'和人聊天',s:{retriever:2,dolphin:1}},
      {t:'拥有独处时间',s:{cat:3}},
      {t:'悠闲休息充电',s:{sloth:3}},
      {t:'去寻找新刺激',s:{fox:2,dolphin:1}}
    ]},
    {q:'做重要决定时我？',a:[
      {t:'相信直觉迅速决定',s:{dolphin:2,wolf:1}},
      {t:'收集信息谨慎判断',s:{owl:3}},
      {t:'和信任的人商量',s:{bear:2,retriever:1}},
      {t:'按自己的信念推进',s:{wolf:3}}
    ]},
    {q:'别人说我的第一印象是？',a:[
      {t:'开朗又亲切',s:{retriever:3}},
      {t:'沉稳又聪明',s:{owl:2,cat:1}},
      {t:'高冷又傲娇',s:{cat:2,wolf:1}},
      {t:'随和又温暖',s:{bear:2,sloth:1}}
    ]},
    {q:'约会突然取消，我的反应？',a:[
      {t:'反而开心！在家休息',s:{sloth:2,cat:1}},
      {t:'马上联系别的朋友',s:{retriever:3}},
      {t:'一个人即兴做点什么',s:{dolphin:2,fox:1}},
      {t:'处理积压的事情',s:{owl:2,wolf:1}}
    ]},
    {q:'我最害怕的是？',a:[
      {t:'变得孤身一人',s:{retriever:2,bear:1}},
      {t:'自由被束缚',s:{dolphin:2,cat:1}},
      {t:'显得无能',s:{wolf:2,owl:1}},
      {t:'冲突和争吵',s:{sloth:2,bear:1}}
    ]},
    {q:'去新聚会时我？',a:[
      {t:'很快成为中心人物',s:{retriever:2,wolf:1}},
      {t:'观察后慢慢融入',s:{owl:2,cat:1}},
      {t:'和有趣的人很快熟络',s:{dolphin:2,fox:1}},
      {t:'安静待着早点离开',s:{cat:2,sloth:1}}
    ]},
    {q:'朋友常对我说的话？',a:[
      {t:'"和你在一起很开心"',s:{retriever:2,dolphin:1}},
      {t:'"你真的很聪明"',s:{owl:2,fox:1}},
      {t:'"你很可靠"',s:{bear:2,wolf:1}},
      {t:'"我总是猜不透你"',s:{cat:2,dolphin:1}}
    ]},
    {q:'我理想中的样子？',a:[
      {t:'被所有人喜爱的人',s:{retriever:3}},
      {t:'受尊敬的领袖',s:{wolf:3}},
      {t:'自由生活的人',s:{dolphin:3}},
      {t:'平静而智慧的人',s:{owl:2,sloth:1}}
    ]}
  ]}
};
console.log('test_alter.js loaded');
