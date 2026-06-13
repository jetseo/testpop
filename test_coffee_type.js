const TEST_COFFEE_TYPE = {
  id: 'coffee-type',
  emoji: '☕',
  resultLabel: {
    ko: '나를 닮은 커피',
    en: 'My Coffee Type',
    ja: '私に似たコーヒー',
    zh: '像我的咖啡'
  },
  typeList: ['espresso','americano','latte','cappuccino','vanillalatte','coldbrew','affogato','decaf'],
  meta: {
    espresso:    { img:'images/coffee_espresso.jpg',    color:'#1a1008', ink:'#fff' },
    americano:   { img:'images/coffee_americano.jpg',   color:'#1a3a5c', ink:'#fff' },
    latte:       { img:'images/coffee_latte.jpg',       color:'#c8956c', ink:'#fff' },
    cappuccino:  { img:'images/coffee_cappuccino.jpg',  color:'#8b5e3c', ink:'#fff' },
    vanillalatte:{ img:'images/coffee_vanillalatte.jpg',color:'#c9a84c', ink:'#fff' },
    coldbrew:    { img:'images/coffee_coldbrew.jpg',    color:'#0d1b2a', ink:'#fff' },
    affogato:    { img:'images/coffee_affogato.jpg',    color:'#3d1c02', ink:'#fff' },
    decaf:       { img:'images/coffee_decaf.jpg',       color:'#4a7c59', ink:'#fff' }
  },
  types: {
    espresso: {
      ko: { name:'에스프레소', tag:'#직설적 #강렬함 #임팩트', desc:'당신은 말이 적지만 한마디 한마디에 무게가 있습니다. 불필요한 것은 걷어내고 핵심만 남기는 스타일. 처음엔 강렬해서 가까이하기 어려울 수 있지만, 한번 빠지면 헤어나오기 힘든 매력이 있어요. 짧고 굵게, 여운이 오래 남는 사람입니다.', best:'coldbrew', worst:'decaf' },
      en: { name:'Espresso', tag:'#Direct #Intense #Impactful', desc:'You say little, but every word carries weight. You strip away the unnecessary and leave only the essence. You might seem intimidating at first, but once people get close, they can\'t get enough. Short, bold, and unforgettable.', best:'coldbrew', worst:'decaf' },
      ja: { name:'エスプレッソ', tag:'#直球 #強烈 #インパクト', desc:'言葉は少ないけれど、一言一言に重みがあります。余分なものを削ぎ落とし、本質だけを残すスタイル。最初は近づきにくく感じるかもしれませんが、一度ハマると抜け出せない魅力があります。短くて濃い、余韻が長く続く人です。', best:'coldbrew', worst:'decaf' },
      zh: { name:'浓缩咖啡', tag:'#直接 #强烈 #有冲击力', desc:'你话不多，但每句话都有分量。去除不必要的，只留下本质。一开始可能让人难以接近，但一旦沉迷就难以自拔。简短而浓烈，余韵悠长。', best:'coldbrew', worst:'decaf' }
    },
    americano: {
      ko: { name:'아이스 아메리카노', tag:'#쿨함 #무던함 #사계절아아', desc:'당신은 사계절 내내 흔들리지 않는 쿨한 사람입니다. 유행을 타지 않고 자기 스타일을 고수하며, 어떤 상황에서도 덤덤하게 중심을 잡습니다. 겉으로는 차갑게 보여도 속은 의외로 따뜻해요. 믿음직하고 한결같은 존재입니다.', best:'espresso', worst:'vanillalatte' },
      en: { name:'Iced Americano', tag:'#Cool #Steady #AllSeasonsIced', desc:'You\'re unfazed year-round — cool through and through. You stick to your own style without chasing trends, and stay calm no matter what the situation. You might seem cold on the outside, but you\'re surprisingly warm inside. Reliable and consistent.', best:'espresso', worst:'vanillalatte' },
      ja: { name:'アイスアメリカーノ', tag:'#クール #淡々 #四季通じてアイス', desc:'あなたは一年中ブレないクールな人です。流行に流されず自分のスタイルを貫き、どんな状況でも落ち着いて中心を保ちます。外見は冷たく見えても、内面は意外と温かいです。頼りがいがあって一貫した存在です。', best:'espresso', worst:'vanillalatte' },
      zh: { name:'冰美式咖啡', tag:'#冷静 #淡然 #四季冰饮', desc:'你是一年四季都不动摇的冷静之人。不追赶潮流，坚持自己的风格，任何情况下都能沉着保持重心。表面看起来冷漠，内心却出乎意料地温暖。可靠而始终如一的存在。', best:'espresso', worst:'vanillalatte' }
    },
    latte: {
      ko: { name:'카페 라떼', tag:'#다정함 #평화주의 #포근한', desc:'당신은 어디서나 분위기를 부드럽게 만드는 사람입니다. 갈등을 싫어하고 모두가 편안하길 바라는 진정한 평화주의자. 따뜻하고 포근해서 곁에 있으면 마음이 녹아버려요. 자극적인 것보다 은은하게 오래가는 매력이 있습니다.', best:'cappuccino', worst:'espresso' },
      en: { name:'Café Latte', tag:'#Warm #Peacemaker #Cozy', desc:'You have a gift for softening the atmosphere wherever you go. A true peacemaker who dislikes conflict and wants everyone to feel comfortable. Warm and cozy — being near you makes people\'s hearts melt. Your appeal isn\'t flashy; it lingers gently and lasts.', best:'cappuccino', worst:'espresso' },
      ja: { name:'カフェラテ', tag:'#優しさ #平和主義 #温かみ', desc:'あなたはどこでも雰囲気を柔らかくする人です。対立を嫌い、みんなが快適でいられることを望む本物の平和主義者。温かくて包み込むような雰囲気で、そばにいると心がほぐれます。刺激的というより、じんわりと長く続く魅力があります。', best:'cappuccino', worst:'espresso' },
      zh: { name:'拿铁咖啡', tag:'#温柔 #和平主义 #温暖', desc:'你是一个能让任何地方的氛围都变得柔和的人。真正的和平主义者，不喜欢冲突，希望每个人都感到舒适。温暖而有包容感，在你身边会让人心融化。不是刺激性的，而是有着淡淡持久的魅力。', best:'cappuccino', worst:'espresso' }
    },
    cappuccino: {
      ko: { name:'카푸치노', tag:'#폼나는외모 #따뜻한속 #반전매력', desc:'당신은 겉으로는 세련되고 폼나 보이지만, 실은 누구보다 따뜻하고 감성적인 사람입니다. 처음엔 도도해 보여서 거리감이 생길 수 있지만, 친해지면 의외로 수줍고 귀여운 면이 있어요. 폼은 있지만 거품처럼 가볍지 않은 진짜 깊이가 있습니다.', best:'latte', worst:'coldbrew' },
      en: { name:'Cappuccino', tag:'#StyleishOutside #WarmInside #HiddenCharm', desc:'You look sophisticated and put-together on the outside, but you\'re actually warmer and more emotional than anyone. You might seem standoffish at first, but get close and you\'ll find a surprisingly shy and cute side. You have style — but unlike foam, you have real depth beneath it.', best:'latte', worst:'coldbrew' },
      ja: { name:'カプチーノ', tag:'#見た目はお洒落 #中身は温かい #ギャップ萌え', desc:'外見はスタイリッシュでカッコよく見えますが、実は誰よりも温かく感受性豊かな人です。最初はよそよそしく見えて距離感が生まれるかもしれませんが、仲良くなると意外と恥ずかしがり屋でかわいい一面があります。スタイルはあるけれど、泡のように軽くない本物の深みがあります。', best:'latte', worst:'coldbrew' },
      zh: { name:'卡布奇诺', tag:'#外表精致 #内心温暖 #反差魅力', desc:'你外表看起来精致有型，但实际上是比任何人都更温暖、更感性的人。一开始可能显得冷漠疏远，但熟悉后会发现意外羞涩可爱的一面。有风格，但不像泡沫那样轻浮，有真正的深度。', best:'latte', worst:'coldbrew' }
    },
    vanillalatte: {
      ko: { name:'바닐라 라떼', tag:'#낭만적 #감성충만 #분위기장인', desc:'당신은 일상 속 작은 것에서 아름다움을 발견하는 낭만주의자입니다. 카페 창가 자리, 빗소리, 노을 같은 것들이 당신의 감성을 자극해요. 달콤하고 부드러운 매력으로 주변 사람들을 행복하게 만들고, 있는 것만으로 분위기가 바뀌는 사람입니다.', best:'latte', worst:'espresso' },
      en: { name:'Vanilla Latte', tag:'#Romantic #Emotional #MoodSetter', desc:'You\'re a romanticist who finds beauty in the small things of everyday life. Window seats at cafés, the sound of rain, a glowing sunset — these are what stir your soul. Your sweet, gentle charm makes the people around you happy, and your very presence shifts the whole atmosphere.', best:'latte', worst:'espresso' },
      ja: { name:'バニララテ', tag:'#ロマンチスト #感性豊か #雰囲気メーカー', desc:'あなたは日常の小さなことに美しさを見つけるロマンチストです。カフェの窓際席、雨音、夕焼けといったものがあなたの感性を刺激します。甘くて柔らかい魅力で周りの人を幸せにし、いるだけで雰囲気が変わる人です。', best:'latte', worst:'espresso' },
      zh: { name:'香草拿铁', tag:'#浪漫 #感性十足 #氛围大师', desc:'你是一个能从日常小事中发现美的浪漫主义者。咖啡馆靠窗的座位、雨声、夕阳，这些东西会触动你的感性。甜蜜柔和的魅力让周围的人感到幸福，你的存在本身就能改变整个氛围。', best:'latte', worst:'espresso' }
    },
    coldbrew: {
      ko: { name:'콜드브루', tag:'#깊이있는 #느긋한완벽주의 #시간이답', desc:'당신은 시간이 걸려도 반드시 좋은 결과를 만들어내는 사람입니다. 빠름보다 깊이를 선택하고, 천천히 우려낸 것처럼 갈수록 진해지는 매력이 있어요. 급하게 판단하지 않고 오래 관찰하며, 한번 믿으면 끝까지 가는 타입입니다.', best:'espresso', worst:'cappuccino' },
      en: { name:'Cold Brew', tag:'#Depth #EasygoingPerfectionist #TimeIsTheAnswer', desc:'You\'re someone who always produces great results, even if it takes time. You choose depth over speed, and your appeal deepens the more time passes — like coffee slowly steeping. You don\'t rush to judgment; you observe patiently, and once you trust someone, you go all the way.', best:'espresso', worst:'cappuccino' },
      ja: { name:'コールドブリュー', tag:'#深み #ゆったり完璧主義 #時間が答え', desc:'あなたは時間がかかっても必ず良い結果を生み出す人です。速さより深さを選び、ゆっくり抽出されたコーヒーのように時間とともに濃くなる魅力があります。急いで判断せず長く観察し、一度信じたら最後まで付き合うタイプです。', best:'espresso', worst:'cappuccino' },
      zh: { name:'冷萃咖啡', tag:'#有深度 #从容完美主义 #时间是答案', desc:'你是一个即使花时间也一定能创造出好结果的人。选择深度而非速度，像慢慢萃取的咖啡一样，越到后来越有魅力。不轻易下判断，长时间观察，一旦信任就会坚持到底。', best:'espresso', worst:'cappuccino' }
    },
    affogato: {
      ko: { name:'아포가토', tag:'#반전매력 #겉과속이달라 #의외의조합', desc:'당신은 처음 보는 것만으로는 절대 알 수 없는 사람입니다. 차가운 것 같지만 뜨겁고, 달콤한 것 같지만 쌉싸름한 반전의 연속. 예상을 깨는 매력이 있고, 알아갈수록 새로운 면이 나와서 절대 질리지 않는 타입입니다.', best:'vanillalatte', worst:'americano' },
      en: { name:'Affogato', tag:'#SurpriseFactor #OppositeInside #UnexpectedCombo', desc:'You\'re someone who can\'t be figured out at first glance. You seem cold but you\'re hot; you seem sweet but you\'re bitter — a constant series of plot twists. You have an attraction that defies expectations, and new sides of you keep emerging the more people get to know you. You never get boring.', best:'vanillalatte', worst:'americano' },
      ja: { name:'アフォガート', tag:'#ギャップ萌え #外と中が違う #意外な組み合わせ', desc:'あなたは見た目だけでは絶対にわからない人です。冷たそうで熱く、甘そうで苦い、意外性の連続。予想を裏切る魅力があり、知れば知るほど新しい面が出てきて絶対に飽きないタイプです。', best:'vanillalatte', worst:'americano' },
      zh: { name:'阿芙佳朵', tag:'#反转魅力 #表里不一 #意外组合', desc:'你是一个仅凭第一眼绝对无法了解的人。看似冷漠却炽热，看似甜蜜却苦涩，充满意外。有打破预期的魅力，越了解越能发现新的一面，是永远不会令人厌倦的类型。', best:'vanillalatte', worst:'americano' }
    },
    decaf: {
      ko: { name:'디카페인', tag:'#섬세한감수성 #자극싫어 #나만의페이스', desc:'당신은 커피의 향과 분위기는 좋아하지만 자극은 최소화하고 싶은 섬세한 사람입니다. 나만의 속도로, 나만의 방식으로 살아가는 것을 중요하게 생각해요. 겉으로는 조용해 보여도 내면 세계가 풍부하고, 적은 자극에도 깊이 감동받는 감수성을 가졌습니다.', best:'latte', worst:'espresso' },
      en: { name:'Decaf', tag:'#SensitiveSoul #NoOverstimulation #MyOwnPace', desc:'You love the aroma and atmosphere of coffee, but you want to keep stimulation to a minimum. Living at your own pace, in your own way — that\'s what matters to you. You might seem quiet on the outside, but your inner world is rich, and you\'re moved deeply by even the smallest things.', best:'latte', worst:'espresso' },
      ja: { name:'デカフェ', tag:'#繊細な感受性 #刺激は最小限 #マイペース', desc:'あなたはコーヒーの香りと雰囲気は好きだけど、刺激は最小限にしたい繊細な人です。自分のペースで、自分のやり方で生きることを大切にしています。外見は静かに見えても内面の世界は豊かで、小さな刺激にも深く感動する感受性を持っています。', best:'latte', worst:'espresso' },
      zh: { name:'低因咖啡', tag:'#细腻感性 #不喜刺激 #我的节奏', desc:'你喜欢咖啡的香气和氛围，但想把刺激降到最低，是一个细腻的人。按照自己的节奏，以自己的方式生活，这对你来说很重要。外表看起来安静，但内心世界丰富，即使是微小的刺激也能深深感动的感性之人。', best:'latte', worst:'espresso' }
    }
  },
  questions: {
    ko: [
      {
        q: '월요일 아침, 알람이 울렸다. 나는?',
        a: [
          { t: '바로 일어나서 오늘 할 일을 정리한다', s: { espresso:2, americano:1 } },
          { t: '5분만... 을 세 번 반복한다', s: { decaf:2, coldbrew:1 } },
          { t: '일어나긴 하는데 멍하니 10분을 보낸다', s: { latte:2, cappuccino:1 } },
          { t: '이미 일어나 있었다. 일찍 깼거든', s: { coldbrew:2, affogato:1 } }
        ]
      },
      {
        q: '카페에서 자리를 고를 때 나는?',
        a: [
          { t: '바 자리, 혼자 집중하기 좋은 곳', s: { espresso:2, coldbrew:1 } },
          { t: '창가 자리, 바깥 풍경 보면서', s: { vanillalatte:2, decaf:1 } },
          { t: '중앙 자리, 사람들 보는 게 좋아서', s: { americano:2, cappuccino:1 } },
          { t: '아무 데나, 크게 상관없음', s: { latte:2, affogato:1 } }
        ]
      },
      {
        q: '친구가 고민을 털어놓을 때 나의 반응은?',
        a: [
          { t: '해결책을 바로 제시한다', s: { espresso:2, americano:1 } },
          { t: '공감하면서 끝까지 다 들어준다', s: { latte:2, decaf:1 } },
          { t: '분위기를 가볍게 만들어 웃기려 한다', s: { affogato:2, cappuccino:1 } },
          { t: '말은 적게, 하지만 옆에 있어준다', s: { coldbrew:2, vanillalatte:1 } }
        ]
      },
      {
        q: '나의 SNS 피드를 한 마디로 표현하면?',
        a: [
          { t: '거의 없음, 구경만 함', s: { americano:2, coldbrew:1 } },
          { t: '감성 사진 위주, 분위기 맛집', s: { vanillalatte:2, latte:1 } },
          { t: '일상 공유, 친구들이랑 소통용', s: { latte:2, cappuccino:1 } },
          { t: '게시물은 없지만 스토리는 가끔', s: { decaf:2, affogato:1 } }
        ]
      },
      {
        q: '스트레스받을 때 나의 해소법은?',
        a: [
          { t: '혼자 조용히 있는다', s: { espresso:2, decaf:1 } },
          { t: '친한 사람한테 털어놓는다', s: { latte:2, vanillalatte:1 } },
          { t: '운동이나 뭔가 몸 쓰는 걸 한다', s: { americano:2, espresso:1 } },
          { t: '맛있는 거 먹거나 뭔가 즐기러 간다', s: { affogato:2, cappuccino:1 } }
        ]
      },
      {
        q: '처음 만나는 사람에게 나는 어떻게 보일까?',
        a: [
          { t: '차갑고 까다로울 것 같다', s: { espresso:2, americano:1 } },
          { t: '친절하고 편안한 사람', s: { latte:2, decaf:1 } },
          { t: '세련되고 뭔가 있어 보이는 사람', s: { cappuccino:2, affogato:1 } },
          { t: '조용하고 잘 모르겠는 사람', s: { coldbrew:2, vanillalatte:1 } }
        ]
      },
      {
        q: '여행 계획을 세울 때 나는?',
        a: [
          { t: '분 단위로 일정을 짠다', s: { espresso:2, coldbrew:1 } },
          { t: '큰 틀만 잡고 즉흥적으로 간다', s: { affogato:2, americano:1 } },
          { t: '감성 카페랑 포토스팟 위주로 찾는다', s: { vanillalatte:2, latte:1 } },
          { t: '그냥 같이 가는 사람한테 맡긴다', s: { decaf:2, cappuccino:1 } }
        ]
      },
      {
        q: '좋아하는 사람이 생겼을 때 나는?',
        a: [
          { t: '티 안 내고 혼자 감정을 정리한다', s: { coldbrew:2, espresso:1 } },
          { t: '조금씩 친해지면서 자연스럽게 다가간다', s: { latte:2, decaf:1 } },
          { t: '분위기 타서 적절한 타이밍을 노린다', s: { cappuccino:2, affogato:1 } },
          { t: '설레서 주변에 다 말하고 다닌다', s: { vanillalatte:2, americano:1 } }
        ]
      },
      {
        q: '나의 이상적인 주말은?',
        a: [
          { t: '혼자 카페에서 책 읽거나 작업', s: { espresso:2, coldbrew:1 } },
          { t: '친구들이랑 맛집·카페 투어', s: { latte:2, vanillalatte:1 } },
          { t: '집에서 아무것도 안 하며 쉬기', s: { decaf:2, americano:1 } },
          { t: '갑자기 어딘가 훌쩍 떠나기', s: { affogato:2, cappuccino:1 } }
        ]
      },
      {
        q: '나를 가장 잘 표현하는 단어는?',
        a: [
          { t: '강함', s: { espresso:2, americano:1 } },
          { t: '따뜻함', s: { latte:2, vanillalatte:1 } },
          { t: '신비로움', s: { coldbrew:2, affogato:1 } },
          { t: '섬세함', s: { decaf:2, cappuccino:1 } }
        ]
      },
      {
        q: '갑자기 예상치 못한 일이 생겼을 때 나는?',
        a: [
          { t: '빠르게 상황 파악하고 대처한다', s: { espresso:2, americano:1 } },
          { t: '일단 당황하지만 곧 적응한다', s: { latte:2, cappuccino:1 } },
          { t: '오히려 신나고 재밌을 것 같다', s: { affogato:2, vanillalatte:1 } },
          { t: '조용히 혼자 감당하려 한다', s: { coldbrew:2, decaf:1 } }
        ]
      },
      {
        q: '주변 사람들이 나에게 자주 하는 말은?',
        a: [
          { t: '"너는 진짜 믿음직해"', s: { americano:2, coldbrew:1 } },
          { t: '"너랑 있으면 편해"', s: { latte:2, decaf:1 } },
          { t: '"너 생각보다 재밌다"', s: { affogato:2, cappuccino:1 } },
          { t: '"너는 좀 신비로운 것 같아"', s: { coldbrew:2, espresso:1 } }
        ]
      }
    ],
    en: [
      {
        q: 'Monday morning, the alarm goes off. You:',
        a: [
          { t: 'Get up right away and organize the day', s: { espresso:2, americano:1 } },
          { t: '"Five more minutes" — three times', s: { decaf:2, coldbrew:1 } },
          { t: 'Get up but stare blankly for 10 minutes', s: { latte:2, cappuccino:1 } },
          { t: 'Already awake — woke up early', s: { coldbrew:2, affogato:1 } }
        ]
      },
      {
        q: 'Choosing a seat at a café:',
        a: [
          { t: 'Bar seat — good for focusing alone', s: { espresso:2, coldbrew:1 } },
          { t: 'Window seat — love the view outside', s: { vanillalatte:2, decaf:1 } },
          { t: 'Center — love watching people', s: { americano:2, cappuccino:1 } },
          { t: 'Anywhere — doesn\'t really matter', s: { latte:2, affogato:1 } }
        ]
      },
      {
        q: 'A friend opens up about a problem. You:',
        a: [
          { t: 'Jump straight to solutions', s: { espresso:2, americano:1 } },
          { t: 'Empathize and listen to everything', s: { latte:2, decaf:1 } },
          { t: 'Lighten the mood and try to make them laugh', s: { affogato:2, cappuccino:1 } },
          { t: 'Few words, but stay by their side', s: { coldbrew:2, vanillalatte:1 } }
        ]
      },
      {
        q: 'Your SNS feed in one word:',
        a: [
          { t: 'Basically empty — just a lurker', s: { americano:2, coldbrew:1 } },
          { t: 'Aesthetic photos, all vibes', s: { vanillalatte:2, latte:1 } },
          { t: 'Daily life, chatting with friends', s: { latte:2, cappuccino:1 } },
          { t: 'No posts but occasional stories', s: { decaf:2, affogato:1 } }
        ]
      },
      {
        q: 'How do you deal with stress?',
        a: [
          { t: 'Spend quiet time alone', s: { espresso:2, decaf:1 } },
          { t: 'Vent to someone close', s: { latte:2, vanillalatte:1 } },
          { t: 'Work out or do something physical', s: { americano:2, espresso:1 } },
          { t: 'Eat something good or go enjoy something', s: { affogato:2, cappuccino:1 } }
        ]
      },
      {
        q: 'How do you think you come across to someone new?',
        a: [
          { t: 'Cold and hard to approach', s: { espresso:2, americano:1 } },
          { t: 'Friendly and easy to be around', s: { latte:2, decaf:1 } },
          { t: 'Polished, like someone with a story', s: { cappuccino:2, affogato:1 } },
          { t: 'Quiet and hard to read', s: { coldbrew:2, vanillalatte:1 } }
        ]
      },
      {
        q: 'Planning a trip:',
        a: [
          { t: 'Schedule mapped down to the minute', s: { espresso:2, coldbrew:1 } },
          { t: 'Rough outline, then improvise', s: { affogato:2, americano:1 } },
          { t: 'Mostly aesthetic cafés and photo spots', s: { vanillalatte:2, latte:1 } },
          { t: 'Just leave it to whoever I\'m going with', s: { decaf:2, cappuccino:1 } }
        ]
      },
      {
        q: 'You develop feelings for someone. You:',
        a: [
          { t: 'Keep it to yourself and process quietly', s: { coldbrew:2, espresso:1 } },
          { t: 'Slowly get closer in a natural way', s: { latte:2, decaf:1 } },
          { t: 'Wait for the right vibe and timing', s: { cappuccino:2, affogato:1 } },
          { t: 'Get so excited you tell everyone', s: { vanillalatte:2, americano:1 } }
        ]
      },
      {
        q: 'Your ideal weekend:',
        a: [
          { t: 'Alone at a café reading or working', s: { espresso:2, coldbrew:1 } },
          { t: 'Food and café tour with friends', s: { latte:2, vanillalatte:1 } },
          { t: 'Stay home and do absolutely nothing', s: { decaf:2, americano:1 } },
          { t: 'Spontaneously go somewhere on a whim', s: { affogato:2, cappuccino:1 } }
        ]
      },
      {
        q: 'The word that describes you best:',
        a: [
          { t: 'Strong', s: { espresso:2, americano:1 } },
          { t: 'Warm', s: { latte:2, vanillalatte:1 } },
          { t: 'Mysterious', s: { coldbrew:2, affogato:1 } },
          { t: 'Sensitive', s: { decaf:2, cappuccino:1 } }
        ]
      },
      {
        q: 'Something unexpected happens out of nowhere. You:',
        a: [
          { t: 'Quickly assess the situation and respond', s: { espresso:2, americano:1 } },
          { t: 'Panic at first, then adapt fast', s: { latte:2, cappuccino:1 } },
          { t: 'Actually kind of excited — sounds fun', s: { affogato:2, vanillalatte:1 } },
          { t: 'Quietly try to handle it alone', s: { coldbrew:2, decaf:1 } }
        ]
      },
      {
        q: 'What do people often say to you?',
        a: [
          { t: '"You\'re so reliable"', s: { americano:2, coldbrew:1 } },
          { t: '"I feel so comfortable around you"', s: { latte:2, decaf:1 } },
          { t: '"You\'re funnier than I expected"', s: { affogato:2, cappuccino:1 } },
          { t: '"There\'s something mysterious about you"', s: { coldbrew:2, espresso:1 } }
        ]
      }
    ],
    ja: [
      {
        q: '月曜の朝、アラームが鳴った。あなたは？',
        a: [
          { t: 'すぐ起きて今日のタスクを整理する', s: { espresso:2, americano:1 } },
          { t: '「あと5分」を三回繰り返す', s: { decaf:2, coldbrew:1 } },
          { t: '起きはするけどぼーっと10分過ごす', s: { latte:2, cappuccino:1 } },
          { t: 'もう起きてた。早く目が覚めたから', s: { coldbrew:2, affogato:1 } }
        ]
      },
      {
        q: 'カフェで席を選ぶとき、あなたは？',
        a: [
          { t: 'カウンター席、一人で集中できる場所', s: { espresso:2, coldbrew:1 } },
          { t: '窓際席、外の景色を見ながら', s: { vanillalatte:2, decaf:1 } },
          { t: '中央席、人を見るのが好きで', s: { americano:2, cappuccino:1 } },
          { t: 'どこでも、あまり気にしない', s: { latte:2, affogato:1 } }
        ]
      },
      {
        q: '友達が悩みを打ち明けてきた。あなたの反応は？',
        a: [
          { t: 'すぐ解決策を提示する', s: { espresso:2, americano:1 } },
          { t: '共感しながら最後まで聞く', s: { latte:2, decaf:1 } },
          { t: '雰囲気を軽くして笑わせようとする', s: { affogato:2, cappuccino:1 } },
          { t: '言葉は少なめ、でも隣にいてあげる', s: { coldbrew:2, vanillalatte:1 } }
        ]
      },
      {
        q: '自分のSNSフィードを一言で表すと？',
        a: [
          { t: 'ほぼなし、見るだけ', s: { americano:2, coldbrew:1 } },
          { t: '感性的な写真中心、雰囲気重視', s: { vanillalatte:2, latte:1 } },
          { t: '日常シェア、友達との交流用', s: { latte:2, cappuccino:1 } },
          { t: '投稿はないけどストーリーはたまに', s: { decaf:2, affogato:1 } }
        ]
      },
      {
        q: 'ストレスを感じたとき、あなたの解消法は？',
        a: [
          { t: '一人で静かにいる', s: { espresso:2, decaf:1 } },
          { t: '仲の良い人に打ち明ける', s: { latte:2, vanillalatte:1 } },
          { t: '運動や体を動かすことをする', s: { americano:2, espresso:1 } },
          { t: '美味しいものを食べたり楽しいことをしに行く', s: { affogato:2, cappuccino:1 } }
        ]
      },
      {
        q: '初めて会う人にどう見られると思う？',
        a: [
          { t: '冷たくて近づきにくそう', s: { espresso:2, americano:1 } },
          { t: '親切で居心地の良さそうな人', s: { latte:2, decaf:1 } },
          { t: 'スタイリッシュで何かありそうな人', s: { cappuccino:2, affogato:1 } },
          { t: '静かでよくわからない人', s: { coldbrew:2, vanillalatte:1 } }
        ]
      },
      {
        q: '旅行の計画を立てるとき、あなたは？',
        a: [
          { t: '分刻みでスケジュールを組む', s: { espresso:2, coldbrew:1 } },
          { t: '大枠だけ決めてあとは行き当たりばったり', s: { affogato:2, americano:1 } },
          { t: '感性カフェとフォトスポット中心に探す', s: { vanillalatte:2, latte:1 } },
          { t: '一緒に行く人に任せる', s: { decaf:2, cappuccino:1 } }
        ]
      },
      {
        q: '好きな人ができたとき、あなたは？',
        a: [
          { t: '素振りを見せず一人で気持ちを整理する', s: { coldbrew:2, espresso:1 } },
          { t: '少しずつ仲良くなりながら自然にアプローチ', s: { latte:2, decaf:1 } },
          { t: '雰囲気に乗って適切なタイミングを狙う', s: { cappuccino:2, affogato:1 } },
          { t: 'ときめいて周りに全部話してしまう', s: { vanillalatte:2, americano:1 } }
        ]
      },
      {
        q: '理想の週末は？',
        a: [
          { t: '一人カフェで本を読んだり作業したり', s: { espresso:2, coldbrew:1 } },
          { t: '友達とグルメ・カフェ巡り', s: { latte:2, vanillalatte:1 } },
          { t: '家で何もせずゆっくり休む', s: { decaf:2, americano:1 } },
          { t: '突然どこかへふらっと行く', s: { affogato:2, cappuccino:1 } }
        ]
      },
      {
        q: '自分を最もよく表す言葉は？',
        a: [
          { t: '強さ', s: { espresso:2, americano:1 } },
          { t: '温かさ', s: { latte:2, vanillalatte:1 } },
          { t: '神秘的', s: { coldbrew:2, affogato:1 } },
          { t: '繊細さ', s: { decaf:2, cappuccino:1 } }
        ]
      },
      {
        q: '突然予想外のことが起きたとき、あなたは？',
        a: [
          { t: '素早く状況を把握して対処する', s: { espresso:2, americano:1 } },
          { t: '最初は焦るけどすぐ適応する', s: { latte:2, cappuccino:1 } },
          { t: 'むしろワクワクして楽しそう', s: { affogato:2, vanillalatte:1 } },
          { t: '静かに一人で対処しようとする', s: { coldbrew:2, decaf:1 } }
        ]
      },
      {
        q: '周りの人によく言われることは？',
        a: [
          { t: '「あなたって本当に頼りになる」', s: { americano:2, coldbrew:1 } },
          { t: '「あなたといると落ち着く」', s: { latte:2, decaf:1 } },
          { t: '「思ったより面白い人だね」', s: { affogato:2, cappuccino:1 } },
          { t: '「なんか謎めいてる感じがする」', s: { coldbrew:2, espresso:1 } }
        ]
      }
    ],
    zh: [
      {
        q: '周一早上，闹钟响了。你会？',
        a: [
          { t: '立刻起床整理今天要做的事', s: { espresso:2, americano:1 } },
          { t: '"再五分钟"重复三次', s: { decaf:2, coldbrew:1 } },
          { t: '起来了但发呆了十分钟', s: { latte:2, cappuccino:1 } },
          { t: '已经醒了，早就醒了', s: { coldbrew:2, affogato:1 } }
        ]
      },
      {
        q: '在咖啡馆选座位时，你会？',
        a: [
          { t: '吧台座位，适合一个人专注', s: { espresso:2, coldbrew:1 } },
          { t: '靠窗座位，可以看外面的风景', s: { vanillalatte:2, decaf:1 } },
          { t: '中间座位，喜欢观察人', s: { americano:2, cappuccino:1 } },
          { t: '随便哪里都行，无所谓', s: { latte:2, affogato:1 } }
        ]
      },
      {
        q: '朋友向你倾诉烦恼时，你的反应是？',
        a: [
          { t: '立刻提出解决方案', s: { espresso:2, americano:1 } },
          { t: '共情并认真听完', s: { latte:2, decaf:1 } },
          { t: '活跃气氛，让对方笑起来', s: { affogato:2, cappuccino:1 } },
          { t: '话不多，但陪在身边', s: { coldbrew:2, vanillalatte:1 } }
        ]
      },
      {
        q: '用一句话形容你的社交媒体动态？',
        a: [
          { t: '基本没有，只是看看', s: { americano:2, coldbrew:1 } },
          { t: '以感性照片为主，注重氛围', s: { vanillalatte:2, latte:1 } },
          { t: '分享日常，和朋友互动', s: { latte:2, cappuccino:1 } },
          { t: '没有帖子但偶尔发状态', s: { decaf:2, affogato:1 } }
        ]
      },
      {
        q: '压力大时，你的解压方式是？',
        a: [
          { t: '一个人安静待着', s: { espresso:2, decaf:1 } },
          { t: '向亲近的人倾诉', s: { latte:2, vanillalatte:1 } },
          { t: '运动或做些体力活动', s: { americano:2, espresso:1 } },
          { t: '吃好吃的或去享受点什么', s: { affogato:2, cappuccino:1 } }
        ]
      },
      {
        q: '初次见面时，你觉得别人眼中的你是？',
        a: [
          { t: '冷漠，难以接近', s: { espresso:2, americano:1 } },
          { t: '亲切，让人放松', s: { latte:2, decaf:1 } },
          { t: '精致，感觉有故事', s: { cappuccino:2, affogato:1 } },
          { t: '安静，难以捉摸', s: { coldbrew:2, vanillalatte:1 } }
        ]
      },
      {
        q: '制定旅行计划时，你会？',
        a: [
          { t: '按分钟制定详细行程', s: { espresso:2, coldbrew:1 } },
          { t: '只定大框架，随机应变', s: { affogato:2, americano:1 } },
          { t: '主要找感性咖啡馆和拍照地点', s: { vanillalatte:2, latte:1 } },
          { t: '交给一起去的人决定', s: { decaf:2, cappuccino:1 } }
        ]
      },
      {
        q: '喜欢上一个人时，你会？',
        a: [
          { t: '不动声色，自己默默整理感情', s: { coldbrew:2, espresso:1 } },
          { t: '慢慢熟悉，自然地靠近', s: { latte:2, decaf:1 } },
          { t: '等待合适的氛围和时机', s: { cappuccino:2, affogato:1 } },
          { t: '兴奋得到处告诉别人', s: { vanillalatte:2, americano:1 } }
        ]
      },
      {
        q: '你理想的周末是？',
        a: [
          { t: '独自在咖啡馆看书或工作', s: { espresso:2, coldbrew:1 } },
          { t: '和朋友逛美食和咖啡馆', s: { latte:2, vanillalatte:1 } },
          { t: '在家什么都不做，好好休息', s: { decaf:2, americano:1 } },
          { t: '突然说走就走去某个地方', s: { affogato:2, cappuccino:1 } }
        ]
      },
      {
        q: '最能形容你的词是？',
        a: [
          { t: '强韧', s: { espresso:2, americano:1 } },
          { t: '温暖', s: { latte:2, vanillalatte:1 } },
          { t: '神秘', s: { coldbrew:2, affogato:1 } },
          { t: '细腻', s: { decaf:2, cappuccino:1 } }
        ]
      },
      {
        q: '突然发生意外状况时，你会？',
        a: [
          { t: '迅速判断情况并应对', s: { espresso:2, americano:1 } },
          { t: '先慌一下，然后很快适应', s: { latte:2, cappuccino:1 } },
          { t: '反而觉得有趣，有点兴奋', s: { affogato:2, vanillalatte:1 } },
          { t: '安静地独自承受', s: { coldbrew:2, decaf:1 } }
        ]
      },
      {
        q: '周围的人经常对你说的话是？',
        a: [
          { t: '"你真的很可靠"', s: { americano:2, coldbrew:1 } },
          { t: '"和你在一起很放松"', s: { latte:2, decaf:1 } },
          { t: '"你比我想的有意思"', s: { affogato:2, cappuccino:1 } },
          { t: '"你感觉有点神秘"', s: { coldbrew:2, espresso:1 } }
        ]
      }
    ]
  }
};
