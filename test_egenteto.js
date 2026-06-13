/* ===========================================================
   나는 에겐일까 테토일까? (egenteto)
   8유형 × 12문항 × 4언어
   =========================================================== */

const TEST_EGENTETO = {
  id: 'egenteto',
  emoji: '🌊',

  resultLabel: {
    ko: '나의 에겐·테토 유형은',
    en: 'Your Egen·Teto type is',
    ja: '私のエゲン・テト型は',
    zh: '我的埃根·泰托类型是'
  },

  typeList: ['moonflower','dreamer','empath','balancer','spark','leader','warrior','chameleon'],

  meta: {
    moonflower: { img:'images/egenteto_moonflower.jpg', color:'#b06090', ink:'#fff' },
    dreamer:    { img:'images/egenteto_dreamer.jpg',    color:'#7060b0', ink:'#fff' },
    empath:     { img:'images/egenteto_empath.jpg',     color:'#9060c0', ink:'#fff' },
    balancer:   { img:'images/egenteto_balancer.jpg',   color:'#4090a0', ink:'#fff' },
    spark:      { img:'images/egenteto_spark.jpg',      color:'#d08020', ink:'#fff' },
    leader:     { img:'images/egenteto_leader.jpg',     color:'#c03020', ink:'#fff' },
    warrior:    { img:'images/egenteto_warrior.jpg',    color:'#8090a0', ink:'#fff' },
    chameleon:  { img:'images/egenteto_chameleon.jpg',  color:'#a060b0', ink:'#fff' }
  },

  types: {
    moonflower: {
      ko: { name:'🌸 감성 충만 에겐', tag:'#순수에겐 #감성폭발 #공감천재',
        desc:'당신은 순수 에겐 에너지의 소유자입니다. 다른 사람의 감정을 본능적으로 느끼고, 아름다운 것에 쉽게 감동받습니다. 분위기를 부드럽게 만드는 능력이 있고, 깊은 감수성으로 주변을 따뜻하게 채웁니다. 때로는 너무 예민해서 상처받기도 하지만, 그 섬세함이 당신의 가장 큰 매력입니다.',
        best:'dreamer', worst:'warrior' },
      en: { name:'🌸 Pure Emotion Egen', tag:'#PureEgen #EmotionOverflow #EmpathyGenius',
        desc:'You are a pure Egen energy type. You instinctively feel other people\'s emotions and are easily moved by beautiful things. You have a gift for softening any atmosphere, and your deep sensitivity fills your surroundings with warmth. You may sometimes get hurt from being too sensitive — but that very delicacy is your greatest charm.',
        best:'dreamer', worst:'warrior' },
      ja: { name:'🌸 感性あふれるエゲン', tag:'#純粋エゲン #感性爆発 #共感天才',
        desc:'あなたは純粋なエゲンエネルギーの持ち主です。他の人の感情を本能的に感じ取り、美しいものにすぐ感動します。雰囲気を柔らかくする能力があり、深い感受性で周りを温かく満たします。時には敏感すぎて傷つくこともありますが、その繊細さがあなたの最大の魅力です。',
        best:'dreamer', worst:'warrior' },
      zh: { name:'🌸 感性满满的埃根', tag:'#纯粹埃根 #感性爆发 #共情天才',
        desc:'你是纯粹埃根能量的拥有者。本能地感受他人的情感，容易被美好的事物感动。有让氛围变得柔和的能力，用深厚的感受力温暖周围的人。有时因为过于敏感而受伤，但那种细腻正是你最大的魅力。',
        best:'dreamer', worst:'warrior' }
    },
    dreamer: {
      ko: { name:'🌙 몽글몽글 에겐', tag:'#에겐감성 #내면세계 #창의적',
        desc:'당신은 깊은 내면세계를 가진 에겐 타입입니다. 혼자만의 시간에서 영감을 얻고, 풍부한 상상력으로 세상을 바라봅니다. 겉으로는 조용해 보이지만 마음속엔 누구보다 다채로운 세계가 펼쳐져 있습니다. 예술, 음악, 글쓰기 같은 창의적인 활동에서 진짜 나를 발견합니다.',
        best:'empath', worst:'leader' },
      en: { name:'🌙 Dreamy Egen', tag:'#EgenSensitivity #InnerWorld #Creative',
        desc:'You are an Egen type with a rich inner world. You find inspiration in solitude and view the world through a vivid imagination. You may seem quiet on the outside — but inside, a more colorful world unfolds than anyone else\'s. You discover your true self through creative activities like art, music, and writing.',
        best:'empath', worst:'leader' },
      ja: { name:'🌙 ふわふわエゲン', tag:'#エゲン感性 #内面世界 #クリエイティブ',
        desc:'あなたは深い内面世界を持つエゲンタイプです。一人の時間からインスピレーションを得て、豊かな想像力で世界を見つめます。外見は静かに見えますが、心の中には誰よりも多彩な世界が広がっています。芸術、音楽、文章など創造的な活動で本当の自分を見つけます。',
        best:'empath', worst:'leader' },
      zh: { name:'🌙 梦幻埃根', tag:'#埃根感性 #内心世界 #创意',
        desc:'你是拥有深厚内心世界的埃根类型。从独处时间中获得灵感，用丰富的想象力看待世界。外表看起来安静，但内心展开着比任何人都更丰富多彩的世界。在艺术、音乐、写作等创意活动中发现真实的自己。',
        best:'empath', worst:'leader' }
    },
    empath: {
      ko: { name:'💜 따뜻한 에겐', tag:'#에겐기질 #배려만렙 #눈치왕',
        desc:'당신은 따뜻한 에겐 에너지를 가진 사람입니다. 주변 사람들의 감정 변화를 누구보다 빠르게 캐치하고, 말 없이도 필요한 것을 먼저 채워줍니다. 갈등 상황에서 중재자 역할을 자연스럽게 맡고, 모두가 편안함을 느끼도록 배려합니다. 당신이 있으면 어떤 공간도 따뜻해집니다.',
        best:'balancer', worst:'spark' },
      en: { name:'💜 Warm Egen', tag:'#EgenNature #MaxConsideration #SocialSense',
        desc:'You carry warm Egen energy. You pick up on the emotional shifts of those around you faster than anyone, and you fill their needs before they even speak. You naturally step into the mediator role during conflict, and you look after everyone so they feel at ease. Any space becomes warm when you\'re in it.',
        best:'balancer', worst:'spark' },
      ja: { name:'💜 温かいエゲン', tag:'#エゲン気質 #気遣い満点 #空気読み王',
        desc:'あなたは温かいエゲンエネルギーを持つ人です。周りの人の感情の変化を誰よりも早く察知し、言葉がなくても必要なものを先に満たしてあげます。対立の場面では自然と仲裁役を担い、みんなが心地よく感じられるよう配慮します。あなたがいるとどんな空間も温かくなります。',
        best:'balancer', worst:'spark' },
      zh: { name:'💜 温暖的埃根', tag:'#埃根气质 #体贴满分 #察言观色王',
        desc:'你拥有温暖的埃根能量。比任何人都能更快察觉周围人的情绪变化，不用言语就能先满足对方所需。在冲突时自然地担当调解者的角色，体贴地让所有人感到舒适。有你在的地方任何空间都会变得温暖。',
        best:'balancer', worst:'spark' }
    },
    balancer: {
      ko: { name:'🌊 중간 어딘가', tag:'#에겐테토밸런스 #중재자 #유연함',
        desc:'당신은 에겐과 테토 에너지가 절묘하게 균형을 이루는 타입입니다. 감성적이면서도 결단력이 있고, 부드러우면서도 추진력이 있습니다. 상황에 따라 에겐처럼 공감하고 테토처럼 행동할 수 있어서, 어떤 사람과도 자연스럽게 어울립니다. 이 균형이 당신의 가장 큰 강점입니다.',
        best:'chameleon', worst:'moonflower' },
      en: { name:'🌊 Somewhere in Between', tag:'#EgenTetoBalance #Mediator #Flexible',
        desc:'You are a type where Egen and Teto energy balance each other perfectly. You are both emotional and decisive, both gentle and driven. Depending on the situation, you can empathize like an Egen and act like a Teto — which means you naturally click with anyone. This balance is your greatest strength.',
        best:'chameleon', worst:'moonflower' },
      ja: { name:'🌊 どこか中間', tag:'#エゲンテトバランス #仲裁者 #柔軟',
        desc:'あなたはエゲンとテトのエネルギーが絶妙にバランスを保つタイプです。感性的でありながら決断力があり、柔らかいながらも推進力があります。状況に応じてエゲンのように共感し、テトのように行動できるため、どんな人とも自然に打ち解けます。このバランスがあなたの最大の強みです。',
        best:'chameleon', worst:'moonflower' },
      zh: { name:'🌊 介于两者之间', tag:'#埃根泰托平衡 #调解者 #灵活',
        desc:'你是埃根和泰托能量绝妙平衡的类型。既感性又有决断力，既温柔又有推进力。根据情况可以像埃根一样共情，像泰托一样行动，因此能与任何人自然融洽相处。这种平衡是你最大的优势。',
        best:'chameleon', worst:'moonflower' }
    },
    spark: {
      ko: { name:'✨ 활활 테토 기질', tag:'#테토기질 #활기넘침 #즉흥왕',
        desc:'당신은 테토 기질이 살짝 더 강한 활기찬 타입입니다. 에너지가 넘치고 새로운 것에 빠르게 반응하며, 분위기를 띄우는 데 천부적인 재능이 있습니다. 계획보다는 즉흥적으로 움직이는 편이고, 그 과정에서 예상치 못한 재미를 만들어냅니다. 당신과 함께하면 지루할 틈이 없습니다.',
        best:'leader', worst:'empath' },
      en: { name:'✨ Sparkling Teto Nature', tag:'#TetoNature #BurstingEnergy #ImprovKing',
        desc:'You are a lively type with a slightly stronger Teto temperament. You overflow with energy, react quickly to new things, and have a natural talent for lifting the mood. You tend to move on impulse rather than by plan, and in doing so you create unexpected fun. There\'s never a dull moment with you around.',
        best:'leader', worst:'empath' },
      ja: { name:'✨ 燃えるテト気質', tag:'#テト気質 #活気あふれ #即興王',
        desc:'あなたはテト気質が少し強い活発なタイプです。エネルギーにあふれ、新しいことに素早く反応し、場を盛り上げる天性の才能があります。計画よりも即興で動く傾向があり、その過程で予想外の楽しさを生み出します。あなたと一緒にいると退屈する暇がありません。',
        best:'leader', worst:'empath' },
      zh: { name:'✨ 燃烧的泰托气质', tag:'#泰托气质 #活力满满 #即兴王',
        desc:'你是泰托气质稍强的活泼类型。充满能量，对新事物反应迅速，有天生的活跃气氛的才能。比起计划更倾向于即兴行动，在这个过程中创造出意想不到的乐趣。和你在一起没有无聊的时间。',
        best:'leader', worst:'empath' }
    },
    leader: {
      ko: { name:'🔥 불꽃 테토', tag:'#테토감성 #추진력 #결단력',
        desc:'당신은 강한 테토 에너지를 가진 리더형입니다. 목표가 생기면 주저 없이 달려들고, 팀을 이끄는 데 탁월한 능력을 발휘합니다. 결단이 빠르고 실행력이 강하며, 어떤 상황에서도 흔들리지 않는 의지를 가지고 있습니다. 당신이 앞에 서면 사람들이 자연스럽게 따라옵니다.',
        best:'warrior', worst:'dreamer' },
      en: { name:'🔥 Flame Teto', tag:'#TetoEnergy #DrivingForce #Decisive',
        desc:'You are a leader-type with strong Teto energy. When a goal appears, you charge toward it without hesitation, and you demonstrate exceptional ability at leading a team. You make decisions fast, execute with strength, and have a will that never wavers in any situation. When you step forward, people naturally follow.',
        best:'warrior', worst:'dreamer' },
      ja: { name:'🔥 炎のテト', tag:'#テトエネルギー #推進力 #決断力',
        desc:'あなたは強いテトエネルギーを持つリーダータイプです。目標が生まれたら躊躇なく飛び込み、チームを率いる卓越した能力を発揮します。決断が速く実行力が強く、どんな状況でも揺るがない意志を持っています。あなたが前に立つと人々が自然についてきます。',
        best:'warrior', worst:'dreamer' },
      zh: { name:'🔥 火焰泰托', tag:'#泰托能量 #推进力 #决断力',
        desc:'你是拥有强大泰托能量的领导者类型。目标一出现就毫不犹豫地冲向它，在领导团队方面展现出卓越的能力。决策迅速，执行力强，在任何情况下都有不动摇的意志。你站在前面时，人们自然会跟随。',
        best:'warrior', worst:'dreamer' }
    },
    warrior: {
      ko: { name:'⚡ 풀테토 직진러', tag:'#순수테토 #승부욕 #강인함',
        desc:'당신은 순수 테토 에너지의 결정체입니다. 직진하는 것이 본능이고, 목표 앞에서는 어떤 장애물도 두려움이 없습니다. 강한 승부욕과 자신감으로 무장되어 있으며, 말보다 행동이 앞섭니다. 가끔은 너무 직진해서 주변을 당황시키기도 하지만, 그 열정과 강인함이 진짜 당신입니다.',
        best:'leader', worst:'moonflower' },
      en: { name:'⚡ Full Teto Straight Arrow', tag:'#PureTeto #Competitive #Resilient',
        desc:'You are the crystallization of pure Teto energy. Going straight ahead is your instinct, and no obstacle frightens you when there\'s a goal in sight. You are armed with fierce competitiveness and confidence, and your actions speak louder than your words. You sometimes catch people off guard with how direct you are — but that passion and toughness is the real you.',
        best:'leader', worst:'moonflower' },
      ja: { name:'⚡ フルテト直進型', tag:'#純粋テト #勝負強い #強靭さ',
        desc:'あなたは純粋なテトエネルギーの結晶です。直進することが本能で、目標の前ではどんな障害も恐れません。強い勝負欲と自信に満ちており、言葉より行動が先に出ます。時には直進しすぎて周りを驚かせることもありますが、その情熱と強靭さが本当のあなたです。',
        best:'leader', worst:'moonflower' },
      zh: { name:'⚡ 全泰托直冲型', tag:'#纯粹泰托 #争强好胜 #坚韧',
        desc:'你是纯粹泰托能量的结晶。直冲是你的本能，面对目标时对任何障碍都无所畏惧。拥有强烈的好胜心和自信，行动先于言语。有时因为太直接而让周围的人感到惊讶，但那份热情和坚韧才是真实的你。',
        best:'leader', worst:'moonflower' }
    },
    chameleon: {
      ko: { name:'🌈 나만의 유형', tag:'#상황따라전환 #다재다능 #유일무이',
        desc:'당신은 에겐과 테토를 자유자재로 오가는 카멜레온형입니다. 필요에 따라 공감자가 되었다가 리더가 되고, 조용해졌다가 에너지를 폭발시킵니다. 어떤 유형으로도 규정되지 않는 유일무이한 존재입니다. 이 유연함이 당신을 특별하게 만들고, 어디서든 자신만의 색깔을 만들어냅니다.',
        best:'balancer', worst:'dreamer' },
      en: { name:'🌈 My Own Type', tag:'#SituationalShift #Versatile #OneOfAKind',
        desc:'You are a chameleon type who moves freely between Egen and Teto. As needed, you become an empath or a leader, grow quiet or explode with energy. You are a one-of-a-kind being who cannot be defined by any single type. This flexibility is what makes you special — and wherever you go, you create your own distinct color.',
        best:'balancer', worst:'dreamer' },
      ja: { name:'🌈 私だけのタイプ', tag:'#状況で切替 #多才多能 #唯一無二',
        desc:'あなたはエゲンとテトを自由自在に行き来するカメレオンタイプです。必要に応じて共感者になったりリーダーになったり、静かになったかと思えばエネルギーを爆発させます。どんなタイプにも定義されない唯一無二の存在です。この柔軟さがあなたを特別にし、どこでも自分だけの色を作り出します。',
        best:'balancer', worst:'dreamer' },
      zh: { name:'🌈 我的专属类型', tag:'#随情况切换 #多才多艺 #独一无二',
        desc:'你是可以自由穿梭于埃根和泰托之间的变色龙类型。根据需要成为共情者或领导者，时而安静时而爆发能量。是无法被任何单一类型定义的独一无二的存在。这种灵活性使你与众不同，无论在哪里都能创造出属于自己的色彩。',
        best:'balancer', worst:'dreamer' }
    }
  },

  questions: {
    ko: [
      { q: '친구가 갑자기 울기 시작했다. 나는?', a: [
        { t: '말없이 옆에 앉아 등을 토닥인다', s:{moonflower:2,empath:1} },
        { t: '왜 우는지 물어보고 해결책을 찾는다', s:{leader:2,warrior:1} },
        { t: '같이 울 것 같다, 감정이 전염된다', s:{dreamer:2,moonflower:1} },
        { t: '어색하지만 최대한 편하게 해주려 한다', s:{balancer:2,spark:1} }
      ]},
      { q: '새로운 모임에 갔을 때 나는?', a: [
        { t: '구석에서 분위기 파악 후 조용히 녹아든다', s:{dreamer:2,moonflower:1} },
        { t: '먼저 말 걸고 금방 친해진다', s:{spark:2,warrior:1} },
        { t: '자연스럽게 리더 역할을 맡게 된다', s:{leader:2,warrior:1} },
        { t: '관심 가는 사람 옆에서 조용히 챙긴다', s:{empath:2,balancer:1} }
      ]},
      { q: '팀 프로젝트에서 나는 주로?', a: [
        { t: '팀원들의 의견을 하나로 모으는 역할', s:{empath:2,balancer:1} },
        { t: '아이디어를 내고 분위기를 살리는 역할', s:{spark:2,chameleon:1} },
        { t: '방향을 정하고 실행을 이끄는 역할', s:{leader:2,warrior:1} },
        { t: '세심하게 디테일을 챙기는 역할', s:{dreamer:2,moonflower:1} }
      ]},
      { q: '억울한 일이 생겼을 때 나는?', a: [
        { t: '혼자 속으로 삭이고 넘긴다', s:{moonflower:2,dreamer:1} },
        { t: '바로 말하고 해결한다', s:{warrior:2,leader:1} },
        { t: '믿는 사람한테 털어놓는다', s:{empath:2,balancer:1} },
        { t: '시간이 지나면 괜찮아진다, 일단 기다린다', s:{balancer:2,chameleon:1} }
      ]},
      { q: '좋아하는 사람에게 나는?', a: [
        { t: '먼저 다가가기 어렵다, 눈치만 본다', s:{moonflower:2,dreamer:1} },
        { t: '바로 고백한다, 직진이 최고다', s:{warrior:2,spark:1} },
        { t: '자주 챙겨주고 곁에 있어주는 방식으로', s:{empath:2,moonflower:1} },
        { t: '친해지면서 자연스럽게 어필한다', s:{balancer:2,chameleon:1} }
      ]},
      { q: '갑자기 계획이 바뀌었다. 나의 반응은?', a: [
        { t: '많이 당황스럽다, 미리 알아야 마음이 편하다', s:{moonflower:2,dreamer:1} },
        { t: '상황에 맞게 빠르게 적응한다', s:{warrior:2,leader:1} },
        { t: '좀 아쉽지만 괜찮다, 유연하게 대처한다', s:{balancer:2,chameleon:1} },
        { t: '오히려 즉흥적인 게 더 재미있을 수도', s:{spark:2,chameleon:1} }
      ]},
      { q: '누군가 나를 오해했을 때는?', a: [
        { t: '상처받지만 해명하지 못하고 혼자 앓는다', s:{moonflower:2,empath:1} },
        { t: '바로 해명하고 오해를 푼다', s:{warrior:2,leader:1} },
        { t: '상황을 보고 적절하게 대응한다', s:{balancer:2,chameleon:1} },
        { t: '상처받지만 시간이 지나면 이해할 거라 믿는다', s:{dreamer:2,empath:1} }
      ]},
      { q: '쉬는 날 가장 하고 싶은 건?', a: [
        { t: '조용히 혼자 좋아하는 것에 집중하기', s:{dreamer:2,moonflower:1} },
        { t: '에너지 넘치는 활동이나 운동', s:{warrior:2,spark:1} },
        { t: '친한 사람들과 감성 카페나 드라이브', s:{empath:2,moonflower:1} },
        { t: '그날 기분에 따라 완전히 달라진다', s:{chameleon:2,balancer:1} }
      ]},
      { q: '결정을 내릴 때 나는?', a: [
        { t: '감정과 분위기를 먼저 따른다', s:{moonflower:2,empath:1} },
        { t: '논리와 효율성을 따진다', s:{leader:2,warrior:1} },
        { t: '여러 사람의 의견을 듣고 결정한다', s:{empath:2,balancer:1} },
        { t: '직감과 상황에 따라 다르다', s:{chameleon:2,spark:1} }
      ]},
      { q: '나를 가장 잘 표현하는 단어는?', a: [
        { t: '감성적이다', s:{moonflower:2,dreamer:1} },
        { t: '추진력 있다', s:{warrior:2,leader:1} },
        { t: '따뜻하다', s:{empath:2,balancer:1} },
        { t: '예측불가다', s:{chameleon:2,spark:1} }
      ]},
      { q: '친구들 사이에서 나는 주로?', a: [
        { t: '조용하지만 없으면 허전한 존재', s:{dreamer:2,empath:1} },
        { t: '분위기 메이커, 없으면 심심해지는 존재', s:{spark:2,chameleon:1} },
        { t: '믿음직한 든든한 존재', s:{leader:2,warrior:1} },
        { t: '고민 상담소, 다들 나한테 털어놓는다', s:{empath:2,moonflower:1} }
      ]},
      { q: '지금 이 순간 가장 공감되는 문장은?', a: [
        { t: '"감정이 사실보다 중요할 때가 있다"', s:{moonflower:2,empath:1} },
        { t: '"생각보다 행동이 먼저다"', s:{warrior:2,spark:1} },
        { t: '"모두가 행복하면 나도 행복하다"', s:{empath:2,balancer:1} },
        { t: '"나는 나만의 방식으로 산다"', s:{chameleon:2,dreamer:1} }
      ]}
    ],

    en: [
      { q: 'A friend suddenly starts crying. You…', a: [
        { t: 'Sit beside them and pat their back without a word', s:{moonflower:2,empath:1} },
        { t: 'Ask why they\'re crying and look for a solution', s:{leader:2,warrior:1} },
        { t: 'Feel like crying too — emotions are contagious', s:{dreamer:2,moonflower:1} },
        { t: 'Feel awkward but try your best to make them comfortable', s:{balancer:2,spark:1} }
      ]},
      { q: 'At a new gathering, you…', a: [
        { t: 'Read the room from a corner, then quietly blend in', s:{dreamer:2,moonflower:1} },
        { t: 'Talk first and make friends quickly', s:{spark:2,warrior:1} },
        { t: 'Naturally end up taking the leader role', s:{leader:2,warrior:1} },
        { t: 'Quietly look after the people you find interesting', s:{empath:2,balancer:1} }
      ]},
      { q: 'In a team project, you usually…', a: [
        { t: 'Bring everyone\'s opinions together', s:{empath:2,balancer:1} },
        { t: 'Generate ideas and energize the atmosphere', s:{spark:2,chameleon:1} },
        { t: 'Set the direction and lead the execution', s:{leader:2,warrior:1} },
        { t: 'Carefully handle the fine details', s:{dreamer:2,moonflower:1} }
      ]},
      { q: 'When something unfair happens to you, you…', a: [
        { t: 'Swallow it alone and move on', s:{moonflower:2,dreamer:1} },
        { t: 'Address it immediately and resolve it', s:{warrior:2,leader:1} },
        { t: 'Open up to someone you trust', s:{empath:2,balancer:1} },
        { t: 'Wait it out — it\'ll be fine with time', s:{balancer:2,chameleon:1} }
      ]},
      { q: 'With someone you like, you…', a: [
        { t: 'Struggle to approach first and just observe', s:{moonflower:2,dreamer:1} },
        { t: 'Confess immediately — going straight is the best', s:{warrior:2,spark:1} },
        { t: 'Look after them often and stay by their side', s:{empath:2,moonflower:1} },
        { t: 'Get close naturally and appeal from there', s:{balancer:2,chameleon:1} }
      ]},
      { q: 'Plans suddenly change. Your reaction is…', a: [
        { t: 'Very flustered — you need to know in advance to feel settled', s:{moonflower:2,dreamer:1} },
        { t: 'Adapt quickly to the new situation', s:{warrior:2,leader:1} },
        { t: 'A bit disappointed, but you handle it flexibly', s:{balancer:2,chameleon:1} },
        { t: 'Actually, spontaneous might be even more fun', s:{spark:2,chameleon:1} }
      ]},
      { q: 'When someone misunderstands you, you…', a: [
        { t: 'Feel hurt but can\'t explain yourself and suffer alone', s:{moonflower:2,empath:1} },
        { t: 'Explain right away and clear it up', s:{warrior:2,leader:1} },
        { t: 'Read the situation and respond appropriately', s:{balancer:2,chameleon:1} },
        { t: 'Feel hurt but believe they\'ll understand in time', s:{dreamer:2,empath:1} }
      ]},
      { q: 'On a day off, what you most want to do is…', a: [
        { t: 'Quietly focus on something you love, alone', s:{dreamer:2,moonflower:1} },
        { t: 'High-energy activities or exercise', s:{warrior:2,spark:1} },
        { t: 'A cozy café or drive with close friends', s:{empath:2,moonflower:1} },
        { t: 'Completely depends on how you feel that day', s:{chameleon:2,balancer:1} }
      ]},
      { q: 'When making a decision, you…', a: [
        { t: 'Follow your emotions and the mood first', s:{moonflower:2,empath:1} },
        { t: 'Weigh logic and efficiency', s:{leader:2,warrior:1} },
        { t: 'Listen to multiple people\'s opinions before deciding', s:{empath:2,balancer:1} },
        { t: 'Go with instinct — it varies by situation', s:{chameleon:2,spark:1} }
      ]},
      { q: 'The word that describes you best is…', a: [
        { t: 'Emotional', s:{moonflower:2,dreamer:1} },
        { t: 'Driven', s:{warrior:2,leader:1} },
        { t: 'Warm', s:{empath:2,balancer:1} },
        { t: 'Unpredictable', s:{chameleon:2,spark:1} }
      ]},
      { q: 'Among your friends, you are usually…', a: [
        { t: 'Quiet but someone who\'d be missed if absent', s:{dreamer:2,empath:1} },
        { t: 'The mood-maker — things get boring without you', s:{spark:2,chameleon:1} },
        { t: 'The reliable, dependable one', s:{leader:2,warrior:1} },
        { t: 'The counselor — everyone opens up to you', s:{empath:2,moonflower:1} }
      ]},
      { q: 'Right now, which sentence resonates most with you?', a: [
        { t: '"Sometimes feelings matter more than facts"', s:{moonflower:2,empath:1} },
        { t: '"Action comes before thought"', s:{warrior:2,spark:1} },
        { t: '"When everyone is happy, so am I"', s:{empath:2,balancer:1} },
        { t: '"I live by my own rules"', s:{chameleon:2,dreamer:1} }
      ]}
    ],

    ja: [
      { q: '友達が突然泣き始めた。私は？', a: [
        { t: '無言で隣に座って背中をポンポンする', s:{moonflower:2,empath:1} },
        { t: 'なぜ泣いているか聞いて解決策を探す', s:{leader:2,warrior:1} },
        { t: '一緒に泣きそう、感情が伝染する', s:{dreamer:2,moonflower:1} },
        { t: '気まずいけど最大限楽にしてあげようとする', s:{balancer:2,spark:1} }
      ]},
      { q: '新しい集まりに行った時、私は？', a: [
        { t: '隅で雰囲気を把握してから静かに溶け込む', s:{dreamer:2,moonflower:1} },
        { t: '先に話しかけてすぐ仲良くなる', s:{spark:2,warrior:1} },
        { t: '自然とリーダー役を担うことになる', s:{leader:2,warrior:1} },
        { t: '気になる人の隣でそっと気にかける', s:{empath:2,balancer:1} }
      ]},
      { q: 'チームプロジェクトで私は主に？', a: [
        { t: 'チームメンバーの意見をまとめる役割', s:{empath:2,balancer:1} },
        { t: 'アイデアを出して雰囲気を盛り上げる役割', s:{spark:2,chameleon:1} },
        { t: '方向を決めて実行を率いる役割', s:{leader:2,warrior:1} },
        { t: '細かいディテールを丁寧に担当する役割', s:{dreamer:2,moonflower:1} }
      ]},
      { q: '理不尽なことがあった時、私は？', a: [
        { t: '一人で消化して流す', s:{moonflower:2,dreamer:1} },
        { t: 'すぐ言って解決する', s:{warrior:2,leader:1} },
        { t: '信頼できる人に打ち明ける', s:{empath:2,balancer:1} },
        { t: '時間が経てば大丈夫、とりあえず待つ', s:{balancer:2,chameleon:1} }
      ]},
      { q: '好きな人に対して私は？', a: [
        { t: '先に近づくのが難しい、様子を見るだけ', s:{moonflower:2,dreamer:1} },
        { t: 'すぐ告白する、直進が一番', s:{warrior:2,spark:1} },
        { t: 'よく気にかけてそばにいてあげる方法で', s:{empath:2,moonflower:1} },
        { t: '仲良くなりながら自然にアピールする', s:{balancer:2,chameleon:1} }
      ]},
      { q: '急に予定が変わった。私の反応は？', a: [
        { t: 'かなり動揺する、事前に知らないと落ち着かない', s:{moonflower:2,dreamer:1} },
        { t: '状況に合わせてすばやく適応する', s:{warrior:2,leader:1} },
        { t: '少し残念だけど柔軟に対処する', s:{balancer:2,chameleon:1} },
        { t: 'むしろ即興の方が楽しいかも', s:{spark:2,chameleon:1} }
      ]},
      { q: '誰かに誤解された時は？', a: [
        { t: '傷つくが弁明できず一人で悩む', s:{moonflower:2,empath:1} },
        { t: 'すぐ弁明して誤解を解く', s:{warrior:2,leader:1} },
        { t: '状況を見て適切に対応する', s:{balancer:2,chameleon:1} },
        { t: '傷つくが時間が経てばわかってくれると信じる', s:{dreamer:2,empath:1} }
      ]},
      { q: '休みの日に一番したいことは？', a: [
        { t: '静かに一人で好きなことに集中する', s:{dreamer:2,moonflower:1} },
        { t: 'エネルギー発散できる活動や運動', s:{warrior:2,spark:1} },
        { t: '親しい人と感性的なカフェやドライブ', s:{empath:2,moonflower:1} },
        { t: 'その日の気分によって全然変わる', s:{chameleon:2,balancer:1} }
      ]},
      { q: '決断を下す時、私は？', a: [
        { t: '感情と雰囲気を優先する', s:{moonflower:2,empath:1} },
        { t: '論理と効率性を考える', s:{leader:2,warrior:1} },
        { t: 'いろんな人の意見を聞いてから決める', s:{empath:2,balancer:1} },
        { t: '直感と状況によって変わる', s:{chameleon:2,spark:1} }
      ]},
      { q: '自分を一番よく表す言葉は？', a: [
        { t: '感情的だ', s:{moonflower:2,dreamer:1} },
        { t: '推進力がある', s:{warrior:2,leader:1} },
        { t: '温かい', s:{empath:2,balancer:1} },
        { t: '予測不可能だ', s:{chameleon:2,spark:1} }
      ]},
      { q: '友達の中で私は主に？', a: [
        { t: '静かだけどいないと寂しい存在', s:{dreamer:2,empath:1} },
        { t: '雰囲気メーカー、いないと退屈になる存在', s:{spark:2,chameleon:1} },
        { t: '頼りになる安心感のある存在', s:{leader:2,warrior:1} },
        { t: 'お悩み相談所、みんな私に打ち明ける', s:{empath:2,moonflower:1} }
      ]},
      { q: '今この瞬間、最も共感できる文章は？', a: [
        { t: '「感情が事実より大切な時がある」', s:{moonflower:2,empath:1} },
        { t: '「考えるより行動が先だ」', s:{warrior:2,spark:1} },
        { t: '「みんなが幸せなら私も幸せ」', s:{empath:2,balancer:1} },
        { t: '「私は自分のやり方で生きる」', s:{chameleon:2,dreamer:1} }
      ]}
    ],

    zh: [
      { q: '朋友突然开始哭泣，我会？', a: [
        { t: '默默坐在旁边轻拍后背', s:{moonflower:2,empath:1} },
        { t: '问为什么哭，寻找解决方案', s:{leader:2,warrior:1} },
        { t: '感觉自己也要哭了，情绪会传染', s:{dreamer:2,moonflower:1} },
        { t: '有些尴尬但尽力让对方舒适', s:{balancer:2,spark:1} }
      ]},
      { q: '去新的聚会时，我会？', a: [
        { t: '在角落观察气氛后悄悄融入', s:{dreamer:2,moonflower:1} },
        { t: '主动搭话，很快熟悉起来', s:{spark:2,warrior:1} },
        { t: '自然而然地担当领导角色', s:{leader:2,warrior:1} },
        { t: '默默关注感兴趣的人', s:{empath:2,balancer:1} }
      ]},
      { q: '团队项目中我主要？', a: [
        { t: '整合团队成员意见的角色', s:{empath:2,balancer:1} },
        { t: '提出想法活跃气氛的角色', s:{spark:2,chameleon:1} },
        { t: '确定方向并引领执行的角色', s:{leader:2,warrior:1} },
        { t: '细心处理细节的角色', s:{dreamer:2,moonflower:1} }
      ]},
      { q: '遇到委屈的事时，我会？', a: [
        { t: '一个人消化掉算了', s:{moonflower:2,dreamer:1} },
        { t: '马上说出来解决', s:{warrior:2,leader:1} },
        { t: '向信任的人倾诉', s:{empath:2,balancer:1} },
        { t: '时间久了就好了，先等等', s:{balancer:2,chameleon:1} }
      ]},
      { q: '对喜欢的人，我会？', a: [
        { t: '很难主动靠近，只是观察', s:{moonflower:2,dreamer:1} },
        { t: '直接表白，直冲最好', s:{warrior:2,spark:1} },
        { t: '经常关心陪伴在身边', s:{empath:2,moonflower:1} },
        { t: '慢慢熟悉自然地展示自己', s:{balancer:2,chameleon:1} }
      ]},
      { q: '计划突然改变，我的反应是？', a: [
        { t: '很慌乱，需要提前知道才安心', s:{moonflower:2,dreamer:1} },
        { t: '迅速适应新情况', s:{warrior:2,leader:1} },
        { t: '有点遗憾但灵活应对', s:{balancer:2,chameleon:1} },
        { t: '即兴的反而可能更有趣', s:{spark:2,chameleon:1} }
      ]},
      { q: '被人误解时，我会？', a: [
        { t: '受伤但无法解释，一个人难受', s:{moonflower:2,empath:1} },
        { t: '立刻解释消除误解', s:{warrior:2,leader:1} },
        { t: '看情况适当应对', s:{balancer:2,chameleon:1} },
        { t: '受伤但相信时间长了对方会理解', s:{dreamer:2,empath:1} }
      ]},
      { q: '休息日最想做的是？', a: [
        { t: '安静地一个人专注于喜欢的事', s:{dreamer:2,moonflower:1} },
        { t: '高能量的活动或运动', s:{warrior:2,spark:1} },
        { t: '和亲近的人去感性的咖啡馆或兜风', s:{empath:2,moonflower:1} },
        { t: '完全取决于当天的心情', s:{chameleon:2,balancer:1} }
      ]},
      { q: '做决定时，我会？', a: [
        { t: '优先考虑情感和氛围', s:{moonflower:2,empath:1} },
        { t: '考虑逻辑和效率', s:{leader:2,warrior:1} },
        { t: '听多方意见后再决定', s:{empath:2,balancer:1} },
        { t: '凭直觉，因情况而异', s:{chameleon:2,spark:1} }
      ]},
      { q: '最能代表我的词是？', a: [
        { t: '感性', s:{moonflower:2,dreamer:1} },
        { t: '有推进力', s:{warrior:2,leader:1} },
        { t: '温暖', s:{empath:2,balancer:1} },
        { t: '难以预测', s:{chameleon:2,spark:1} }
      ]},
      { q: '在朋友中我通常是？', a: [
        { t: '安静但不在就会想念的存在', s:{dreamer:2,empath:1} },
        { t: '气氛担当，没有就会变无聊的存在', s:{spark:2,chameleon:1} },
        { t: '可靠有安全感的存在', s:{leader:2,warrior:1} },
        { t: '心灵驿站，大家都向我倾诉', s:{empath:2,moonflower:1} }
      ]},
      { q: '此刻最有共鸣的句子是？', a: [
        { t: '"有时感情比事实更重要"', s:{moonflower:2,empath:1} },
        { t: '"行动先于思考"', s:{warrior:2,spark:1} },
        { t: '"大家幸福我也幸福"', s:{empath:2,balancer:1} },
        { t: '"我按自己的方式生活"', s:{chameleon:2,dreamer:1} }
      ]}
    ]
  }
};
