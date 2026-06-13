/* ===========================================================
   내 분위기를 색으로 표현하면? (aura-color)
   8유형 × 12문항 × 4언어
   =========================================================== */

const TEST_AURA = {
  id: 'aura-color',
  emoji: '🎨',

  resultLabel: {
    ko: '내 분위기를 색으로 표현하면',
    en: 'The color that represents your vibe is',
    ja: '私の雰囲気を色で表すと',
    zh: '代表我气质的颜色是'
  },

  typeList: ['yellow','red','green','blue','purple','pink','white','dark'],

  meta: {
    yellow: { img:'images/aura_yellow.jpg', color:'#d4a000', ink:'#fff' },
    red:    { img:'images/aura_red.jpg',    color:'#c0392b', ink:'#fff' },
    green:  { img:'images/aura_green.jpg',  color:'#4a8c4a', ink:'#fff' },
    blue:   { img:'images/aura_blue.jpg',   color:'#2980b9', ink:'#fff' },
    purple: { img:'images/aura_purple.jpg', color:'#7b5ea7', ink:'#fff' },
    pink:   { img:'images/aura_pink.jpg',   color:'#d4607a', ink:'#fff' },
    white:  { img:'images/aura_white.jpg',  color:'#8a9aaa', ink:'#fff' },
    dark:   { img:'images/aura_dark.jpg',   color:'#2c3e50', ink:'#fff' },
  },

  types: {
    yellow: {
      ko: { name:'🟡 밝은 노랑', tag:'#긍정에너지 #햇살같은 #분위기메이커',
        desc:'당신의 분위기는 따뜻한 햇살 같은 노랑입니다. 어디서든 자연스럽게 에너지를 발산하고, 주변 사람들을 밝게 만드는 특별한 힘이 있어요. 작은 것에서도 기쁨을 찾아내는 긍정의 아이콘. 당신이 있으면 그 공간이 환해집니다.',
        best:'red', worst:'dark' },
      en: { name:'🟡 Sunny Yellow', tag:'#PositiveEnergy #Sunshine #MoodMaker',
        desc:"Your vibe is warm, sunny yellow. You naturally radiate energy wherever you go and have a special gift for brightening the people around you. You're an icon of positivity who finds joy in the smallest things. Wherever you are, the room lights up.",
        best:'red', worst:'dark' },
      ja: { name:'🟡 明るいイエロー', tag:'#ポジティブエネルギー #太陽みたい #雰囲気メーカー',
        desc:'あなたの雰囲気は温かい太陽のようなイエローです。どこでも自然にエネルギーを発散し、周りの人を明るくする特別な力があります。小さなことにも喜びを見つけるポジティブの象徴。あなたがいるとその場が明るくなります。',
        best:'red', worst:'dark' },
      zh: { name:'🟡 明亮黄色', tag:'#正能量 #阳光般 #气氛担当',
        desc:'你的气质是温暖阳光般的黄色。无论在哪里都能自然散发能量，有让周围人变得明朗的特别力量。是能从小事中发现喜悦的正能量象征。有你在的地方总会变得明亮。',
        best:'red', worst:'dark' }
    },
    red: {
      ko: { name:'🔴 불꽃 빨강', tag:'#열정가득 #추진력갑 #강렬한존재감',
        desc:'당신의 분위기는 활활 타오르는 빨강입니다. 한번 마음먹으면 멈추지 않는 에너지와 추진력을 가지고 있어요. 어디서든 존재감이 강렬하고, 사람들이 자연스럽게 당신을 주목합니다. 열정 그 자체인 당신, 주변을 뜨겁게 달구는 존재입니다.',
        best:'yellow', worst:'white' },
      en: { name:'🔴 Fiery Red', tag:'#FullOfPassion #DrivingForce #StrongPresence',
        desc:"Your vibe is blazing red. Once you set your mind to something, you have the energy and drive to never stop. Your presence is powerful wherever you go, and people naturally take notice of you. You are passion itself — the one who sets everything around you on fire.",
        best:'yellow', worst:'white' },
      ja: { name:'🔴 炎のレッド', tag:'#情熱たっぷり #推進力抜群 #強烈な存在感',
        desc:'あなたの雰囲気は燃え盛る赤です。一度決めたら止まらないエネルギーと推進力を持っています。どこでも存在感が強烈で、人々が自然とあなたに注目します。情熱そのものであるあなたは、周りを熱く燃やす存在です。',
        best:'yellow', worst:'white' },
      zh: { name:'🔴 火焰红色', tag:'#充满热情 #推进力强 #强烈存在感',
        desc:'你的气质是熊熊燃烧的红色。一旦下定决心就停不下来，拥有强大的能量和推进力。无论在哪里存在感都很强烈，人们会自然地注意到你。你就是热情本身，是点燃周围一切的存在。',
        best:'yellow', worst:'white' }
    },
    green: {
      ko: { name:'🟢 편안한 초록', tag:'#힐링존재 #안정감최고 #자연같은',
        desc:'당신의 분위기는 싱그러운 초록입니다. 곁에 있으면 마음이 편안해지고, 아무것도 하지 않아도 그냥 좋은 사람이에요. 균형을 자연스럽게 유지하고 주변 사람들에게 심리적 안정감을 줍니다. 당신은 삶의 쉼표 같은 존재입니다.',
        best:'blue', worst:'red' },
      en: { name:'🟢 Calm Green', tag:'#HealingPresence #StabilityVibes #NatureLike',
        desc:"Your vibe is fresh, verdant green. When you're nearby, hearts feel at ease — you're someone people just love being around, without needing to do anything at all. You naturally maintain balance and give the people around you a sense of psychological peace. You are like a comma in the sentence of life.",
        best:'blue', worst:'red' },
      ja: { name:'🟢 穏やかなグリーン', tag:'#癒しの存在 #安定感抜群 #自然みたい',
        desc:'あなたの雰囲気は清々しい緑です。そばにいると心が安らかになり、何もしなくてもただいるだけで好まれる人です。自然にバランスを保ち、周りの人に心理的な安定感を与えます。あなたは人生の句読点のような存在です。',
        best:'blue', worst:'red' },
      zh: { name:'🟢 舒适绿色', tag:'#治愈存在 #安定感强 #自然般',
        desc:'你的气质是清新的绿色。待在你身边心情会变得平静，不需要做什么，就这样待着就让人感到舒适。自然地保持平衡，给周围的人带来心理上的安定感。你是生命中逗号般的存在。',
        best:'blue', worst:'red' }
    },
    blue: {
      ko: { name:'🔵 깊은 파랑', tag:'#신뢰의아이콘 #차분한카리스마 #깊이있는',
        desc:'당신의 분위기는 깊고 고요한 파랑입니다. 말수는 적어도 한마디 한마디에 무게가 있고, 사람들이 자연스럽게 믿고 의지하게 됩니다. 감정에 흔들리지 않는 안정감과 깊이 있는 사고방식이 당신만의 카리스마를 만들어냅니다.',
        best:'green', worst:'yellow' },
      en: { name:'🔵 Deep Blue', tag:'#IconOfTrust #CalmCharisma #ThoughtfulDepth',
        desc:"Your vibe is deep and still blue. You may not say much, but every word carries weight, and people naturally come to trust and lean on you. Your emotional steadiness and thoughtful way of thinking create a charisma that is entirely your own.",
        best:'green', worst:'yellow' },
      ja: { name:'🔵 深いブルー', tag:'#信頼のアイコン #落ち着いたカリスマ #深みがある',
        desc:'あなたの雰囲気は深く静かな青です。口数は少なくても一言一言に重みがあり、人々が自然と信頼し頼るようになります。感情に揺れない安定感と深い思考方式があなただけのカリスマを生み出します。',
        best:'green', worst:'yellow' },
      zh: { name:'🔵 深邃蓝色', tag:'#信任象征 #沉稳魅力 #有深度',
        desc:'你的气质是深沉宁静的蓝色。话虽不多，但每句话都有分量，人们会自然地信任和依赖你。不被情绪左右的稳定感和深刻的思维方式创造出属于你独特的魅力。',
        best:'green', worst:'yellow' }
    },
    purple: {
      ko: { name:'🟣 신비로운 보라', tag:'#감성충만 #독특한매력 #예술적감수성',
        desc:'당신의 분위기는 신비로운 보라입니다. 남들이 보지 못하는 것을 느끼고, 독특한 감수성으로 세상을 바라봅니다. 쉽게 정의되지 않는 매력이 있고, 알면 알수록 새로운 면이 발견되는 사람이에요. 당신은 걸어다니는 예술작품입니다.',
        best:'pink', worst:'green' },
      en: { name:'🟣 Mysterious Purple', tag:'#EmotionOverflow #UniqueMagnetism #ArtisticSoul',
        desc:"Your vibe is mysterious purple. You sense things others can't see and view the world through a unique sensitivity. You have a charm that resists easy definition, and the more people get to know you, the more new sides they discover. You are a walking work of art.",
        best:'pink', worst:'green' },
      ja: { name:'🟣 神秘的なパープル', tag:'#感性あふれる #独特な魅力 #芸術的感受性',
        desc:'あなたの雰囲気は神秘的な紫です。他の人が見えないものを感じ、独特の感受性で世界を見つめます。簡単に定義されない魅力があり、知れば知るほど新しい面が発見される人です。あなたは歩く芸術作品です。',
        best:'pink', worst:'green' },
      zh: { name:'🟣 神秘紫色', tag:'#感性满满 #独特魅力 #艺术感受力',
        desc:'你的气质是神秘的紫色。能感受到别人看不到的东西，用独特的感受力看待世界。拥有难以被定义的魅力，越了解越能发现新的一面。你是一件行走的艺术品。',
        best:'pink', worst:'green' }
    },
    pink: {
      ko: { name:'🩷 따뜻한 핑크', tag:'#사랑의화신 #공감능력최고 #분위기포근',
        desc:'당신의 분위기는 따뜻한 핑크입니다. 상대방의 마음을 자연스럽게 이해하고, 포근한 온기로 주변을 감쌉니다. 사람들이 당신 곁에 있으면 마음이 녹아내리는 이유가 있어요. 세상에서 가장 부드러운 힘을 가진 존재입니다.',
        best:'purple', worst:'dark' },
      en: { name:'🩷 Warm Pink', tag:'#EmbodimentOfLove #EmpathyMax #CozyVibes',
        desc:"Your vibe is warm pink. You naturally understand others' feelings and wrap everyone around you in a cozy warmth. There's a reason people's hearts melt when they're by your side. You are a being with the gentlest power in the world.",
        best:'purple', worst:'dark' },
      ja: { name:'🩷 温かいピンク', tag:'#愛の化身 #共感力最高 #ほっこり雰囲気',
        desc:'あなたの雰囲気は温かいピンクです。相手の気持ちを自然に理解し、温かさで周りを包みます。人々があなたのそばにいると心が溶ける理由があります。世界で一番柔らかな力を持つ存在です。',
        best:'purple', worst:'dark' },
      zh: { name:'🩷 温暖粉色', tag:'#爱的化身 #共情力最强 #温馨气氛',
        desc:'你的气质是温暖的粉色。自然地理解对方的心情，用温暖包裹周围的人。人们待在你身边心会融化是有原因的。你是拥有世界上最温柔力量的存在。',
        best:'purple', worst:'dark' }
    },
    white: {
      ko: { name:'🤍 순수한 화이트', tag:'#맑은영혼 #꾸밈없는매력 #투명한존재',
        desc:'당신의 분위기는 순수한 화이트입니다. 꾸밈없이 솔직하고, 있는 그대로의 모습이 매력인 사람이에요. 복잡한 것을 단순하게 만드는 능력이 있고, 당신과 함께하면 마음이 정화되는 느낌을 받습니다. 보기 드문 맑은 영혼의 소유자입니다.',
        best:'blue', worst:'red' },
      en: { name:'🤍 Pure White', tag:'#ClearSoul #UnaffectedCharm #TransparentBeing',
        desc:"Your vibe is pure white. You're honest and unadorned, and your greatest charm is simply being who you are. You have a gift for simplifying the complicated, and being with you feels like a purification of the heart. You are the rare owner of a truly clear soul.",
        best:'blue', worst:'red' },
      ja: { name:'🤍 純粋なホワイト', tag:'#澄んだ魂 #飾らない魅力 #透明な存在',
        desc:'あなたの雰囲気は純粋な白です。飾らず素直で、ありのままの姿が魅力の人です。複雑なことを単純にする能力があり、あなたと一緒にいると心が浄化される感覚を受けます。稀に見る澄んだ魂の持ち主です。',
        best:'blue', worst:'red' },
      zh: { name:'🤍 纯粹白色', tag:'#清澈灵魂 #不加修饰的魅力 #透明的存在',
        desc:'你的气质是纯粹的白色。不加修饰、真诚坦率，原本的样子就是魅力所在。有将复杂事物变简单的能力，和你在一起会有心灵净化的感觉。你是难得一见的清澈灵魂拥有者。',
        best:'blue', worst:'red' }
    },
    dark: {
      ko: { name:'🖤 쿨한 다크', tag:'#미스터리매력 #시크한아우라 #깊이를모를',
        desc:'당신의 분위기는 쿨하고 신비로운 다크입니다. 쉽게 속을 드러내지 않고, 알 듯 모를 듯한 매력으로 사람들을 끌어당깁니다. 말보다 행동으로 보여주는 타입이고, 가까워지면 가까워질수록 더 깊은 면이 있음을 알게 됩니다. 당신은 겉과 속이 다른 매력 덩어리입니다.',
        best:'purple', worst:'yellow' },
      en: { name:'🖤 Cool Dark', tag:'#MysteriousCharm #ChicAura #UnfathomableDepth',
        desc:"Your vibe is cool and mysterious dark. You don't easily reveal yourself, and you draw people in with an allure that's hard to read. You show rather than tell, and the closer someone gets to you, the more they realize how much depth lies beneath. You are a bundle of contradictions — and that's your greatest charm.",
        best:'purple', worst:'yellow' },
      ja: { name:'🖤 クールなダーク', tag:'#ミステリアスな魅力 #シックなオーラ #底知れぬ深さ',
        desc:'あなたの雰囲気はクールで神秘的なダークです。簡単に本心を見せず、分かるような分からないような魅力で人々を引き寄せます。言葉より行動で示すタイプで、近づけば近づくほど深い面があることが分かります。表と裏が異なる魅力の塊です。',
        best:'purple', worst:'yellow' },
      zh: { name:'🖤 酷炫暗色', tag:'#神秘魅力 #高冷气场 #深不可测',
        desc:'你的气质是酷炫神秘的暗色。不轻易展示内心，用似懂非懂的魅力吸引人。比起言语更用行动展示，越靠近越会发现有更深的一面。你是表里不一的魅力体。',
        best:'purple', worst:'yellow' }
    }
  },

  questions: {
    ko: [
      { q: '친구들이 나를 처음 만났을 때 가장 많이 하는 말은?', a: [
        { t: '"뭔가 밝고 에너지 넘쳐 보여"', s:{yellow:2,red:1} },
        { t: '"분위기 있다, 뭔가 쿨해"', s:{dark:2,blue:1} },
        { t: '"엄청 편안해 보여, 같이 있으면 좋을 것 같아"', s:{green:2,white:1} },
        { t: '"뭔가 독특하고 신비로운 느낌"', s:{purple:2,pink:1} }
      ]},
      { q: '나의 방 분위기를 고른다면?', a: [
        { t: '밝고 화사한 색상, 귀여운 소품 가득', s:{yellow:2,pink:1} },
        { t: '자연 소재, 식물과 따뜻한 조명', s:{green:2,white:1} },
        { t: '심플하고 미니멀, 어두운 톤', s:{dark:2,blue:1} },
        { t: '감성적인 무드등, 별자리 포스터', s:{purple:2,pink:1} }
      ]},
      { q: '갑자기 하루 휴가가 생겼다. 나는?', a: [
        { t: '친구들에게 연락해서 즉흥 모임', s:{yellow:2,red:1} },
        { t: '조용한 카페에서 혼자 책 읽기', s:{blue:2,purple:1} },
        { t: '자연 속에서 산책이나 피크닉', s:{green:2,white:1} },
        { t: '"뭔가 색다른 거 해볼까?" 새로운 곳 탐험', s:{red:2,dark:1} }
      ]},
      { q: '내가 스트레스 받을 때 행동은?', a: [
        { t: '밖에 나가서 몸을 움직인다', s:{red:2,yellow:1} },
        { t: '혼자 조용히 있으면서 정리한다', s:{blue:2,dark:1} },
        { t: '친한 사람과 수다로 풀어낸다', s:{pink:2,yellow:1} },
        { t: '음악 듣거나 창작활동을 한다', s:{purple:2,green:1} }
      ]},
      { q: '내 패션 스타일을 고른다면?', a: [
        { t: '알록달록 밝은 컬러, 캐주얼하고 편한 옷', s:{yellow:2,pink:1} },
        { t: '블랙 위주, 심플하고 미니멀한 스타일', s:{dark:2,blue:1} },
        { t: '자연스러운 어스 톤, 편안한 느낌', s:{green:2,white:1} },
        { t: '독특한 빈티지나 나만의 믹스매치', s:{purple:2,red:1} }
      ]},
      { q: '모임에서 나는 주로 어떤 역할?', a: [
        { t: '분위기 띄우는 에너지 메이커', s:{yellow:2,red:1} },
        { t: '조용히 옆에서 챙겨주는 사람', s:{green:2,pink:1} },
        { t: '말은 적지만 한마디 하면 다 웃는 사람', s:{dark:2,blue:1} },
        { t: '예상 밖의 아이디어로 놀라게 하는 사람', s:{purple:2,white:1} }
      ]},
      { q: '나를 색으로 표현한다면 어떤 이유로?', a: [
        { t: '밝고 따뜻해서 주변을 환하게 만드니까', s:{yellow:2,pink:1} },
        { t: '강렬하고 에너지 넘치니까', s:{red:2,yellow:1} },
        { t: '차분하고 깊이가 있으니까', s:{blue:2,dark:1} },
        { t: '편안하고 안정감을 주니까', s:{green:2,white:1} }
      ]},
      { q: '내가 가장 끌리는 음악 장르는?', a: [
        { t: '신나는 팝, 댄스 뮤직', s:{yellow:2,red:1} },
        { t: '잔잔한 어쿠스틱, 재즈', s:{green:2,white:1} },
        { t: '감성적인 발라드, 인디', s:{purple:2,blue:1} },
        { t: '힙합, 일렉트로닉, 강한 비트', s:{dark:2,red:1} }
      ]},
      { q: '연인이 생긴다면 어떤 스타일?', a: [
        { t: '같이 뭔가를 신나게 만들어 가는 연애', s:{yellow:2,red:1} },
        { t: '서로 말 없이도 편안한 연애', s:{green:2,blue:1} },
        { t: '감성적이고 세심한 배려가 넘치는 연애', s:{pink:2,purple:1} },
        { t: '서로의 독립성을 존중하는 쿨한 연애', s:{dark:2,white:1} }
      ]},
      { q: '화가 났을 때 나는?', a: [
        { t: '바로 표현하고 빨리 잊는다', s:{red:2,yellow:1} },
        { t: '말하지 않고 혼자 삭힌다', s:{dark:2,blue:1} },
        { t: '"그럴 수도 있지"하고 이해한다', s:{green:2,white:1} },
        { t: '마음이 상해 오래 남는다', s:{pink:2,purple:1} }
      ]},
      { q: '지금 이 순간 가장 끌리는 풍경은?', a: [
        { t: '햇살 가득한 해바라기 밭', s:{yellow:2,green:1} },
        { t: '벚꽃 날리는 봄날 공원', s:{pink:2,purple:1} },
        { t: '고요한 새벽 바다', s:{blue:2,dark:1} },
        { t: '반짝이는 별이 가득한 밤하늘', s:{dark:2,purple:1} }
      ]},
      { q: '나를 가장 잘 표현하는 한 마디는?', a: [
        { t: '"나만의 빛이 있어"', s:{yellow:2,white:1} },
        { t: '"나는 멈추지 않아"', s:{red:2,dark:1} },
        { t: '"나는 깊어"', s:{blue:2,purple:1} },
        { t: '"나는 따뜻해"', s:{pink:2,green:1} }
      ]}
    ],

    en: [
      { q: "What do people say when they first meet you?", a: [
        { t: '"You seem bright and full of energy"', s:{yellow:2,red:1} },
        { t: '"You have an aura — something cool about you"', s:{dark:2,blue:1} },
        { t: '"You seem so easy to be around"', s:{green:2,white:1} },
        { t: '"There\'s something unique and mysterious about you"', s:{purple:2,pink:1} }
      ]},
      { q: "What would your room look like?", a: [
        { t: 'Bright colors and cute decorations everywhere', s:{yellow:2,pink:1} },
        { t: 'Natural materials, plants, and warm lighting', s:{green:2,white:1} },
        { t: 'Simple and minimal, dark tones', s:{dark:2,blue:1} },
        { t: 'Mood lighting and star maps', s:{purple:2,pink:1} }
      ]},
      { q: "You suddenly have a free day. What do you do?", a: [
        { t: 'Text everyone for a spontaneous hangout', s:{yellow:2,red:1} },
        { t: 'Read alone at a quiet café', s:{blue:2,purple:1} },
        { t: 'Take a walk or have a picnic in nature', s:{green:2,white:1} },
        { t: 'Explore somewhere new and different', s:{red:2,dark:1} }
      ]},
      { q: "How do you handle stress?", a: [
        { t: 'Go outside and move your body', s:{red:2,yellow:1} },
        { t: 'Be alone quietly and sort things out', s:{blue:2,dark:1} },
        { t: 'Chat it out with someone close', s:{pink:2,yellow:1} },
        { t: 'Listen to music or do something creative', s:{purple:2,green:1} }
      ]},
      { q: "Which best describes your fashion style?", a: [
        { t: 'Colorful and casual — fun and easy', s:{yellow:2,pink:1} },
        { t: 'Mostly black — simple and minimal', s:{dark:2,blue:1} },
        { t: 'Natural earth tones — relaxed and comfortable', s:{green:2,white:1} },
        { t: 'Vintage or unique mix-and-match', s:{purple:2,red:1} }
      ]},
      { q: "What\'s your role in a group?", a: [
        { t: 'The energy-maker who hypes everyone up', s:{yellow:2,red:1} },
        { t: 'The quiet one who looks after everyone', s:{green:2,pink:1} },
        { t: 'Quiet but when you say something, everyone laughs', s:{dark:2,blue:1} },
        { t: 'The one with unexpected ideas that surprise people', s:{purple:2,white:1} }
      ]},
      { q: "If you were a color, why would that be?", a: [
        { t: 'Because you\'re warm and bright and light up the room', s:{yellow:2,pink:1} },
        { t: 'Because you\'re intense and full of energy', s:{red:2,yellow:1} },
        { t: 'Because you\'re calm and have real depth', s:{blue:2,dark:1} },
        { t: 'Because you\'re comforting and grounding', s:{green:2,white:1} }
      ]},
      { q: "Which music genre do you gravitate toward?", a: [
        { t: 'Upbeat pop and dance music', s:{yellow:2,red:1} },
        { t: 'Chill acoustic or jazz', s:{green:2,white:1} },
        { t: 'Emotional ballads or indie', s:{purple:2,blue:1} },
        { t: 'Hip-hop, electronic, heavy beats', s:{dark:2,red:1} }
      ]},
      { q: "What kind of relationship do you want?", a: [
        { t: 'Building something exciting together', s:{yellow:2,red:1} },
        { t: 'Comfortable silence — no words needed', s:{green:2,blue:1} },
        { t: 'Emotional and full of thoughtful gestures', s:{pink:2,purple:1} },
        { t: 'Cool and independent — respecting space', s:{dark:2,white:1} }
      ]},
      { q: "When you\'re angry, you...", a: [
        { t: 'Express it immediately and forget quickly', s:{red:2,yellow:1} },
        { t: 'Stay quiet and process it alone', s:{dark:2,blue:1} },
        { t: 'Think "they had their reasons" and let it go', s:{green:2,white:1} },
        { t: 'Get hurt and carry it for a while', s:{pink:2,purple:1} }
      ]},
      { q: "Which scene are you most drawn to right now?", a: [
        { t: 'A sunflower field drenched in sunlight', s:{yellow:2,green:1} },
        { t: 'A spring park with petals floating down', s:{pink:2,purple:1} },
        { t: 'A quiet ocean at dawn', s:{blue:2,dark:1} },
        { t: 'A night sky bursting with stars', s:{dark:2,purple:1} }
      ]},
      { q: "Which phrase best describes you?", a: [
        { t: '"I have my own kind of light"', s:{yellow:2,white:1} },
        { t: '"I never stop"', s:{red:2,dark:1} },
        { t: '"I run deep"', s:{blue:2,purple:1} },
        { t: '"I\'m warm"', s:{pink:2,green:1} }
      ]}
    ],

    ja: [
      { q: '友達が初めて会った時に一番よく言うことは？', a: [
        { t: '"明るくてエネルギッシュに見える"', s:{yellow:2,red:1} },
        { t: '"雰囲気があって、なんかクールだね"', s:{dark:2,blue:1} },
        { t: '"すごく話しやすそう、一緒にいたら楽しそう"', s:{green:2,white:1} },
        { t: '"なんか独特で神秘的な感じ"', s:{purple:2,pink:1} }
      ]},
      { q: '自分の部屋の雰囲気を選ぶなら？', a: [
        { t: '明るくカラフル、かわいい小物がたくさん', s:{yellow:2,pink:1} },
        { t: '自然素材、植物と温かい照明', s:{green:2,white:1} },
        { t: 'シンプルでミニマル、暗いトーン', s:{dark:2,blue:1} },
        { t: '感性的なムードライト、星座ポスター', s:{purple:2,pink:1} }
      ]},
      { q: '急に一日休みができたら、私は？', a: [
        { t: '友達に連絡して即席の集まり', s:{yellow:2,red:1} },
        { t: '静かなカフェで一人で読書', s:{blue:2,purple:1} },
        { t: '自然の中で散歩やピクニック', s:{green:2,white:1} },
        { t: '"何か新しいことしてみようか" 新しい場所を探検', s:{red:2,dark:1} }
      ]},
      { q: 'ストレスを感じた時の行動は？', a: [
        { t: '外に出て体を動かす', s:{red:2,yellow:1} },
        { t: '一人で静かに過ごして整理する', s:{blue:2,dark:1} },
        { t: '親しい人とおしゃべりで発散する', s:{pink:2,yellow:1} },
        { t: '音楽を聴いたり創作活動をする', s:{purple:2,green:1} }
      ]},
      { q: '自分のファッションスタイルを選ぶなら？', a: [
        { t: 'カラフルで明るい色、カジュアルで楽な服', s:{yellow:2,pink:1} },
        { t: 'ブラック中心、シンプルでミニマルなスタイル', s:{dark:2,blue:1} },
        { t: '自然なアースカラー、リラックスした感じ', s:{green:2,white:1} },
        { t: 'ユニークなヴィンテージや自分だけのミックス', s:{purple:2,red:1} }
      ]},
      { q: '集まりで自分はどんな役割？', a: [
        { t: '場を盛り上げるエネルギーメーカー', s:{yellow:2,red:1} },
        { t: '静かに横でみんなを気にかける人', s:{green:2,pink:1} },
        { t: '口数は少ないが一言言えばみんな笑う人', s:{dark:2,blue:1} },
        { t: '予想外のアイデアで驚かせる人', s:{purple:2,white:1} }
      ]},
      { q: '自分を色で表現するとしたらなぜ？', a: [
        { t: '明るく温かくて周りを照らすから', s:{yellow:2,pink:1} },
        { t: '強烈でエネルギーにあふれているから', s:{red:2,yellow:1} },
        { t: '落ち着いていて深みがあるから', s:{blue:2,dark:1} },
        { t: '穏やかで安定感を与えるから', s:{green:2,white:1} }
      ]},
      { q: '一番引かれる音楽ジャンルは？', a: [
        { t: '元気なポップ、ダンスミュージック', s:{yellow:2,red:1} },
        { t: '穏やかなアコースティック、ジャズ', s:{green:2,white:1} },
        { t: '感性的なバラード、インディー', s:{purple:2,blue:1} },
        { t: 'ヒップホップ、エレクトロニック、強いビート', s:{dark:2,red:1} }
      ]},
      { q: '恋人ができたらどんなスタイル？', a: [
        { t: '一緒に何かをワクワク作り上げていく恋愛', s:{yellow:2,red:1} },
        { t: 'お互い無言でも居心地いい恋愛', s:{green:2,blue:1} },
        { t: '感性的で細やかな気遣いあふれる恋愛', s:{pink:2,purple:1} },
        { t: 'お互いの独立性を尊重するクールな恋愛', s:{dark:2,white:1} }
      ]},
      { q: '怒った時の自分は？', a: [
        { t: 'すぐ表現してすぐ忘れる', s:{red:2,yellow:1} },
        { t: '言わずに一人で消化する', s:{dark:2,blue:1} },
        { t: '"そういうこともあるよね"と理解する', s:{green:2,white:1} },
        { t: '傷ついて長く残る', s:{pink:2,purple:1} }
      ]},
      { q: '今この瞬間、一番引かれる風景は？', a: [
        { t: '陽光あふれるひまわり畑', s:{yellow:2,green:1} },
        { t: '桜が舞う春の公園', s:{pink:2,purple:1} },
        { t: '静かな夜明けの海', s:{blue:2,dark:1} },
        { t: '星がきらめく夜空', s:{dark:2,purple:1} }
      ]},
      { q: '自分を一番よく表す一言は？', a: [
        { t: '"私だけの輝きがある"', s:{yellow:2,white:1} },
        { t: '"私は止まらない"', s:{red:2,dark:1} },
        { t: '"私は深い"', s:{blue:2,purple:1} },
        { t: '"私は温かい"', s:{pink:2,green:1} }
      ]}
    ],

    zh: [
      { q: '朋友第一次见到我时最常说什么？', a: [
        { t: '"看起来很开朗，充满能量"', s:{yellow:2,red:1} },
        { t: '"有气场，感觉很酷"', s:{dark:2,blue:1} },
        { t: '"感觉很好相处，待在一起会很舒服"', s:{green:2,white:1} },
        { t: '"有点独特，感觉很神秘"', s:{purple:2,pink:1} }
      ]},
      { q: '选择自己房间的风格的话？', a: [
        { t: '色彩鲜艳，摆满可爱小物件', s:{yellow:2,pink:1} },
        { t: '天然材质，植物和温暖灯光', s:{green:2,white:1} },
        { t: '简约极简，深色调', s:{dark:2,blue:1} },
        { t: '感性氛围灯，星座海报', s:{purple:2,pink:1} }
      ]},
      { q: '突然有一天假期，我会？', a: [
        { t: '联系朋友来一场即兴聚会', s:{yellow:2,red:1} },
        { t: '在安静的咖啡馆独自读书', s:{blue:2,purple:1} },
        { t: '在大自然中散步或野餐', s:{green:2,white:1} },
        { t: '"要不要去个陌生的地方？"探索新地方', s:{red:2,dark:1} }
      ]},
      { q: '我压力大时会？', a: [
        { t: '出去活动身体发泄', s:{red:2,yellow:1} },
        { t: '独自安静待着整理思绪', s:{blue:2,dark:1} },
        { t: '和亲近的人聊天发泄', s:{pink:2,yellow:1} },
        { t: '听音乐或做创意活动', s:{purple:2,green:1} }
      ]},
      { q: '选择自己的穿衣风格的话？', a: [
        { t: '色彩鲜艳，休闲舒适', s:{yellow:2,pink:1} },
        { t: '以黑色为主，简约极简', s:{dark:2,blue:1} },
        { t: '自然大地色，放松随意', s:{green:2,white:1} },
        { t: '独特复古或自己的混搭', s:{purple:2,red:1} }
      ]},
      { q: '在聚会中我通常是什么角色？', a: [
        { t: '活跃气氛的能量担当', s:{yellow:2,red:1} },
        { t: '安静地在旁边照顾大家', s:{green:2,pink:1} },
        { t: '话不多但说一句大家就笑', s:{dark:2,blue:1} },
        { t: '用意想不到的主意让大家惊喜', s:{purple:2,white:1} }
      ]},
      { q: '如果用颜色表达自己，是因为？', a: [
        { t: '明亮温暖，能照亮周围的人', s:{yellow:2,pink:1} },
        { t: '强烈、充满能量', s:{red:2,yellow:1} },
        { t: '沉稳、有深度', s:{blue:2,dark:1} },
        { t: '令人安心、带来稳定感', s:{green:2,white:1} }
      ]},
      { q: '最喜欢哪种音乐风格？', a: [
        { t: '欢快的流行、舞曲', s:{yellow:2,red:1} },
        { t: '轻柔的民谣、爵士', s:{green:2,white:1} },
        { t: '感性的抒情歌、独立音乐', s:{purple:2,blue:1} },
        { t: '嘻哈、电子、强节奏', s:{dark:2,red:1} }
      ]},
      { q: '有恋人的话想要什么样的恋爱？', a: [
        { t: '一起兴奋地创造些什么的恋爱', s:{yellow:2,red:1} },
        { t: '无需言语也舒适的恋爱', s:{green:2,blue:1} },
        { t: '感性、充满细心体贴的恋爱', s:{pink:2,purple:1} },
        { t: '尊重彼此独立的酷恋爱', s:{dark:2,white:1} }
      ]},
      { q: '生气时我会？', a: [
        { t: '马上表达，很快就忘', s:{red:2,yellow:1} },
        { t: '不说出来，独自消化', s:{dark:2,blue:1} },
        { t: '"这也是没办法的事"，理解对方', s:{green:2,white:1} },
        { t: '受伤后会留很久', s:{pink:2,purple:1} }
      ]},
      { q: '此刻最想看到的风景是？', a: [
        { t: '阳光灿烂的向日葵田', s:{yellow:2,green:1} },
        { t: '樱花飘落的春日公园', s:{pink:2,purple:1} },
        { t: '寂静的黎明大海', s:{blue:2,dark:1} },
        { t: '繁星闪烁的夜空', s:{dark:2,purple:1} }
      ]},
      { q: '最能代表我的一句话是？', a: [
        { t: '"我有自己的光"', s:{yellow:2,white:1} },
        { t: '"我不会停下"', s:{red:2,dark:1} },
        { t: '"我有深度"', s:{blue:2,purple:1} },
        { t: '"我很温暖"', s:{pink:2,green:1} }
      ]}
    ]
  }
};
