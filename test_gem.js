/* ===========================================================
   나를 닮은 보석 테스트 (gem-type)
   8유형 × 12문항 × 4언어
   =========================================================== */

const TEST_GEM = {
  id: 'gem-type',
  emoji: '💎',

  resultLabel: {
    ko: '나를 닮은 보석은',
    en: 'The gem that resembles you is',
    ja: '私に似ている宝石は',
    zh: '与我相似的宝石是'
  },

  typeList: ['diamond','ruby','emerald','sapphire','amethyst','pearl','opal','topaz'],

  meta: {
    diamond:  { img: 'images/gem_diamond.jpg',  color: '#7b9fc7', ink: '#fff' },
    ruby:     { img: 'images/gem_ruby.jpg',     color: '#c0392b', ink: '#fff' },
    emerald:  { img: 'images/gem_emerald.jpg',  color: '#1e8449', ink: '#fff' },
    sapphire: { img: 'images/gem_sapphire.jpg', color: '#1a3a8a', ink: '#fff' },
    amethyst: { img: 'images/gem_amethyst.jpg', color: '#6c3483', ink: '#fff' },
    pearl:    { img: 'images/gem_pearl.jpg',    color: '#b07a8a', ink: '#fff' },
    opal:     { img: 'images/gem_opal.jpg',     color: '#8e44ad', ink: '#fff' },
    topaz:    { img: 'images/gem_topaz.jpg',    color: '#d68910', ink: '#fff' }
  },

  types: {
    diamond: {
      ko: { name: '💎 다이아몬드', tag: '#완벽주의 #강인함 #희소성',
        desc: '당신을 닮은 보석은 다이아몬드입니다. 세상에서 가장 단단하고 빛나는 존재처럼, 어떤 압박 속에서도 흔들리지 않는 강인함을 지녔습니다. 높은 기준을 가지고 있으며 스스로에게도 타인에게도 최선을 요구합니다. 진짜 가치를 아는 사람만이 당신의 빛을 알아봅니다.',
        best: 'pearl', worst: 'opal' },
      en: { name: '💎 Diamond', tag: '#Perfectionist #Resilience #Rare',
        desc: 'The gem that resembles you is the diamond. Like the hardest and most brilliant thing in the world, you have a resilience that never wavers under pressure. You hold high standards and demand the best — from yourself and from others. Only those who truly understand value can recognize your light.',
        best: 'pearl', worst: 'opal' },
      ja: { name: '💎 ダイヤモンド', tag: '#完璧主義 #強さ #希少性',
        desc: 'あなたに似ている宝石はダイヤモンドです。世界で最も硬く輝く存在のように、どんなプレッシャーの中でも揺るがない強さを持っています。高い基準を持ち、自分にも他人にも最善を求めます。本当の価値を知る人だけがあなたの輝きを見抜きます。',
        best: 'pearl', worst: 'opal' },
      zh: { name: '💎 钻石', tag: '#完美主义 #坚韧 #稀有',
        desc: '与你相似的宝石是钻石。就像世界上最坚硬最闪耀的存在一样，在任何压力下都不动摇。对自己和他人都有高标准，追求最好。只有真正懂得价值的人才能发现你的光芒。',
        best: 'pearl', worst: 'opal' }
    },
    ruby: {
      ko: { name: '❤️ 루비', tag: '#열정 #카리스마 #에너지',
        desc: '당신을 닮은 보석은 루비입니다. 내면에서 타오르는 불꽃처럼 넘치는 열정과 에너지를 가진 사람입니다. 어떤 공간에 들어서든 분위기를 압도하는 카리스마가 있고, 목표를 향해 돌진하는 추진력은 타의 추종을 불허합니다. 당신의 열기가 주변을 뜨겁게 만듭니다.',
        best: 'topaz', worst: 'sapphire' },
      en: { name: '❤️ Ruby', tag: '#Passion #Charisma #Energy',
        desc: 'The gem that resembles you is the ruby. Like a flame burning from within, you overflow with passion and energy. You have a charisma that commands any room you enter, and a drive toward your goals that nobody can match. Your heat warms everyone around you.',
        best: 'topaz', worst: 'sapphire' },
      ja: { name: '❤️ ルビー', tag: '#情熱 #カリスマ #エネルギー',
        desc: 'あなたに似ている宝石はルビーです。内から燃え上がる炎のような溢れる情熱とエネルギーを持つ人です。どんな空間に入っても雰囲気を圧倒するカリスマがあり、目標に向かって突き進む推進力は誰にも負けません。あなたの熱さが周りを温めます。',
        best: 'topaz', worst: 'sapphire' },
      zh: { name: '❤️ 红宝石', tag: '#热情 #魅力 #能量',
        desc: '与你相似的宝石是红宝石。像内心燃烧的火焰一样，充满热情和能量。无论进入哪个空间都有压倒全场的魅力，向目标冲刺的推进力无人能及。你的热度温暖着周围的人。',
        best: 'topaz', worst: 'sapphire' }
    },
    emerald: {
      ko: { name: '💚 에메랄드', tag: '#지혜 #균형 #성장',
        desc: '당신을 닮은 보석은 에메랄드입니다. 깊은 숲처럼 넓은 시야와 균형 잡힌 사고방식을 지닌 사람입니다. 감정과 이성 사이에서 현명하게 중심을 잡고, 꾸준히 성장하는 것을 가장 큰 가치로 여깁니다. 당신 곁에 있으면 마음이 안정되고 자연스럽게 성장하게 됩니다.',
        best: 'sapphire', worst: 'ruby' },
      en: { name: '💚 Emerald', tag: '#Wisdom #Balance #Growth',
        desc: 'The gem that resembles you is the emerald. Like a deep forest, you have a broad perspective and a balanced way of thinking. You wisely find your center between emotion and reason, and you hold steady, continual growth as your highest value. People feel settled and naturally grow when they\'re by your side.',
        best: 'sapphire', worst: 'ruby' },
      ja: { name: '💚 エメラルド', tag: '#知恵 #バランス #成長',
        desc: 'あなたに似ている宝石はエメラルドです。深い森のように広い視野とバランスの取れた思考方式を持つ人です。感情と理性の間で賢く中心を保ち、着実な成長を最大の価値としています。あなたのそばにいると心が落ち着き、自然と成長できます。',
        best: 'sapphire', worst: 'ruby' },
      zh: { name: '💚 祖母绿', tag: '#智慧 #平衡 #成长',
        desc: '与你相似的宝石是祖母绿。像深邃的森林一样，拥有宽广的视野和均衡的思维方式。在情感和理性之间明智地保持中心，将持续成长视为最大的价值。在你身边心情会平静，自然而然地成长。',
        best: 'sapphire', worst: 'ruby' }
    },
    sapphire: {
      ko: { name: '💙 사파이어', tag: '#신뢰 #냉철함 #깊이',
        desc: '당신을 닮은 보석은 사파이어입니다. 깊고 고요한 밤하늘처럼 믿음직하고 흔들리지 않는 사람입니다. 감정에 휩쓸리지 않고 이성적으로 판단하며, 한번 맺은 신뢰는 절대 배신하지 않습니다. 겉은 차갑게 보여도 그 안에는 누구보다 깊은 성실함이 담겨 있습니다.',
        best: 'emerald', worst: 'ruby' },
      en: { name: '💙 Sapphire', tag: '#Trust #CoolHead #Depth',
        desc: 'The gem that resembles you is the sapphire. Like the deep and quiet night sky, you are dependable and unshakeable. You judge rationally without being swept away by emotion, and once trust is given, you never betray it. You may seem cool on the outside, but inside you carry a sincerity deeper than anyone else\'s.',
        best: 'emerald', worst: 'ruby' },
      ja: { name: '💙 サファイア', tag: '#信頼 #冷静さ #深み',
        desc: 'あなたに似ている宝石はサファイアです。深く静かな夜空のように頼りがいがあり、ぶれない人です。感情に流されず理性的に判断し、一度結んだ信頼は絶対に裏切りません。外見は冷たく見えても、その中には誰よりも深い誠実さが宿っています。',
        best: 'emerald', worst: 'ruby' },
      zh: { name: '💙 蓝宝石', tag: '#信任 #冷静 #深度',
        desc: '与你相似的宝石是蓝宝石。像深邃寂静的夜空一样可靠而坚定。不被情绪左右，理性判断，一旦建立的信任绝不背叛。外表看起来冷淡，但内心却有比任何人都深厚的诚实。',
        best: 'emerald', worst: 'ruby' }
    },
    amethyst: {
      ko: { name: '💜 아메시스트', tag: '#직관 #신비 #감수성',
        desc: '당신을 닮은 보석은 아메시스트입니다. 남들이 보지 못하는 것을 느끼는 예민한 직관과 깊은 감수성을 지닌 사람입니다. 신비로운 매력으로 사람들을 끌어당기고, 예술과 아름다움에 깊이 감동받습니다. 당신의 내면세계는 그 어떤 보석보다 풍부하고 다채롭습니다.',
        best: 'opal', worst: 'diamond' },
      en: { name: '💜 Amethyst', tag: '#Intuition #Mystery #Sensitivity',
        desc: 'The gem that resembles you is the amethyst. You possess a keen intuition and deep sensitivity that feels things others cannot see. You draw people in with a mysterious charm, and you are deeply moved by art and beauty. Your inner world is richer and more colorful than any gemstone.',
        best: 'opal', worst: 'diamond' },
      ja: { name: '💜 アメシスト', tag: '#直感 #神秘 #感受性',
        desc: 'あなたに似ている宝石はアメシストです。他の人が見えないものを感じる鋭い直感と深い感受性を持つ人です。神秘的な魅力で人々を引きつけ、芸術や美しさに深く感動します。あなたの内面世界はどんな宝石よりも豊かで多彩です。',
        best: 'opal', worst: 'diamond' },
      zh: { name: '💜 紫水晶', tag: '#直觉 #神秘 #感受性',
        desc: '与你相似的宝石是紫水晶。拥有感知他人看不到的事物的敏锐直觉和深厚感受力。以神秘的魅力吸引人，深深地被艺术和美所感动。你的内心世界比任何宝石都丰富多彩。',
        best: 'opal', worst: 'diamond' }
    },
    pearl: {
      ko: { name: '🤍 진주', tag: '#우아함 #차분함 #포용',
        desc: '당신을 닮은 보석은 진주입니다. 오랜 시간 모래알 하나를 품어 만들어지는 진주처럼, 고통을 아름다움으로 승화시키는 힘이 있습니다. 차분하고 우아한 품격으로 주변을 편안하게 하고, 어떤 사람도 너그럽게 받아들이는 넓은 마음을 가졌습니다.',
        best: 'diamond', worst: 'topaz' },
      en: { name: '🤍 Pearl', tag: '#Grace #Calm #Embrace',
        desc: 'The gem that resembles you is the pearl. Like a pearl formed by embracing a single grain of sand over time, you have the power to transform pain into beauty. Your calm and graceful presence puts everyone at ease, and you have a generous heart that welcomes anyone.',
        best: 'diamond', worst: 'topaz' },
      ja: { name: '🤍 パール', tag: '#優雅さ #穏やかさ #包容',
        desc: 'あなたに似ている宝石はパールです。長い時間をかけて砂粒一つを包んで作られる真珠のように、苦しみを美しさへと昇華させる力があります。穏やかで優雅な品格で周りを和ませ、どんな人も寛大に受け入れる広い心を持っています。',
        best: 'diamond', worst: 'topaz' },
      zh: { name: '🤍 珍珠', tag: '#优雅 #沉静 #包容',
        desc: '与你相似的宝石是珍珠。就像历经漫长时间包裹一粒沙砾形成的珍珠一样，有将痛苦升华为美丽的力量。沉静优雅的气质让周围的人感到舒适，拥有宽容接纳任何人的宽广心胸。',
        best: 'diamond', worst: 'topaz' }
    },
    opal: {
      ko: { name: '🌈 오팔', tag: '#창의성 #자유 #다양성',
        desc: '당신을 닮은 보석은 오팔입니다. 보는 각도마다 다른 색을 뿜어내는 오팔처럼, 다양한 면을 가진 자유로운 영혼입니다. 창의적인 아이디어가 끊임없이 샘솟고, 고정관념에 얽매이지 않는 독창적인 시각으로 세상을 바라봅니다. 당신과 함께하면 매 순간이 새롭습니다.',
        best: 'amethyst', worst: 'diamond' },
      en: { name: '🌈 Opal', tag: '#Creativity #Freedom #Diversity',
        desc: 'The gem that resembles you is the opal. Like an opal that radiates a different color from every angle, you are a free spirit with countless facets. Creative ideas spring from you endlessly, and you see the world through an original lens unconstrained by convention. Every moment feels new when you\'re around.',
        best: 'amethyst', worst: 'diamond' },
      ja: { name: '🌈 オパール', tag: '#創造性 #自由 #多様性',
        desc: 'あなたに似ている宝石はオパールです。見る角度ごとに異なる色を放つオパールのように、多様な面を持つ自由な魂です。創造的なアイデアが絶えず湧き出て、固定観念にとらわれない独自の視点で世界を見つめます。あなたと一緒にいると毎瞬間が新しく感じられます。',
        best: 'amethyst', worst: 'diamond' },
      zh: { name: '🌈 蛋白石', tag: '#创意 #自由 #多样性',
        desc: '与你相似的宝石是蛋白石。就像从每个角度都散发不同颜色的蛋白石，是拥有多面性的自由灵魂。创意想法源源不断，以不受固定观念束缚的独特视角看待世界。和你在一起每个瞬间都是新鲜的。',
        best: 'amethyst', worst: 'diamond' }
    },
    topaz: {
      ko: { name: '💛 토파즈', tag: '#긍정 #따뜻함 #소통',
        desc: '당신을 닮은 보석은 토파즈입니다. 따스한 햇살처럼 어디서든 밝은 에너지를 발산하는 사람입니다. 긍정적인 마음가짐으로 어떤 상황에서도 희망을 찾아내고, 주변 사람들에게 따뜻한 위로와 응원을 아끼지 않습니다. 당신이 있는 곳은 언제나 환해집니다.',
        best: 'ruby', worst: 'pearl' },
      en: { name: '💛 Topaz', tag: '#Positivity #Warmth #Communication',
        desc: 'The gem that resembles you is the topaz. Like warm sunlight, you radiate bright energy wherever you go. With a positive mindset, you find hope in any situation and generously offer warm comfort and encouragement to those around you. Wherever you are, the room always gets brighter.',
        best: 'ruby', worst: 'pearl' },
      ja: { name: '💛 トパーズ', tag: '#ポジティブ #温かさ #コミュニケーション',
        desc: 'あなたに似ている宝石はトパーズです。温かい陽光のようにどこでも明るいエネルギーを発散する人です。ポジティブな心がけでどんな状況でも希望を見つけ、周りの人々に温かい慰めと励ましを惜しみなく与えます。あなたがいる場所はいつも明るくなります。',
        best: 'ruby', worst: 'pearl' },
      zh: { name: '💛 黄玉', tag: '#积极 #温暖 #沟通',
        desc: '与你相似的宝石是黄玉。像温暖的阳光一样，无论在哪里都散发明亮的能量。以积极的心态在任何情况下都能找到希望，毫不吝惜地给予周围的人温暖的安慰和鼓励。你所在的地方总是变得明亮。',
        best: 'ruby', worst: 'pearl' }
    }
  },

  questions: {
    ko: [
      { q: '나를 가장 잘 표현하는 색깔은?', a: [
        { t: '투명하고 순수한 흰빛', s: {diamond:2, pearl:1} },
        { t: '뜨겁고 강렬한 빨강', s: {ruby:2, topaz:1} },
        { t: '깊고 차분한 파랑', s: {sapphire:2, emerald:1} },
        { t: '신비롭고 몽환적인 보라', s: {amethyst:2, opal:1} }
      ]},
      { q: '친구들이 나에게 자주 하는 말은?', a: [
        { t: '"넌 정말 기준이 높아"', s: {diamond:2, sapphire:1} },
        { t: '"네 열정이 부러워"', s: {ruby:2, topaz:1} },
        { t: '"넌 항상 균형이 있어"', s: {emerald:2, pearl:1} },
        { t: '"너는 진짜 독특해"', s: {opal:2, amethyst:1} }
      ]},
      { q: '스트레스를 받을 때 나는?', a: [
        { t: '혼자 조용히 해결한다', s: {diamond:2, sapphire:1} },
        { t: '활동적으로 에너지를 발산한다', s: {ruby:2, topaz:1} },
        { t: '자연이나 조용한 곳에서 충전한다', s: {emerald:2, pearl:1} },
        { t: '예술이나 창작 활동을 한다', s: {amethyst:2, opal:1} }
      ]},
      { q: '내가 가장 중요하게 여기는 가치는?', a: [
        { t: '완벽함과 탁월함', s: {diamond:2, sapphire:1} },
        { t: '열정과 도전', s: {ruby:2, topaz:1} },
        { t: '성장과 배움', s: {emerald:2, opal:1} },
        { t: '조화와 포용', s: {pearl:2, emerald:1} }
      ]},
      { q: '처음 만나는 사람에게 나는?', a: [
        { t: '신중하게 관찰하다가 천천히 다가간다', s: {sapphire:2, diamond:1} },
        { t: '먼저 활발하게 말을 건다', s: {topaz:2, ruby:1} },
        { t: '따뜻하게 배려하며 편안하게 해준다', s: {pearl:2, emerald:1} },
        { t: '독특한 나만의 방식으로 인상을 남긴다', s: {opal:2, amethyst:1} }
      ]},
      { q: '내 꿈이나 목표를 이루는 방식은?', a: [
        { t: '완벽한 계획을 세우고 철저하게 실행', s: {diamond:2, sapphire:1} },
        { t: '강한 의지로 어떤 장애물도 돌파', s: {ruby:2, emerald:1} },
        { t: '꾸준히 조금씩 성장하며 이루어간다', s: {emerald:2, pearl:1} },
        { t: '창의적인 방법으로 나만의 길을 간다', s: {opal:2, amethyst:1} }
      ]},
      { q: '가장 끌리는 여행 스타일은?', a: [
        { t: '완벽하게 계획된 럭셔리 여행', s: {diamond:2, sapphire:1} },
        { t: '에너지 넘치는 액티비티 여행', s: {ruby:2, topaz:1} },
        { t: '자연 속에서 힐링하는 여행', s: {emerald:2, pearl:1} },
        { t: '예상치 못한 발견이 있는 즉흥 여행', s: {opal:2, amethyst:1} }
      ]},
      { q: '어려운 결정을 내릴 때 나는?', a: [
        { t: '모든 가능성을 분석하고 최선을 선택', s: {diamond:2, emerald:1} },
        { t: '직감을 믿고 과감하게 결정', s: {ruby:2, amethyst:1} },
        { t: '주변 사람들과 충분히 상의 후 결정', s: {pearl:2, topaz:1} },
        { t: '느낌과 논리를 모두 고려해서 결정', s: {sapphire:2, opal:1} }
      ]},
      { q: '나의 가장 큰 강점은?', a: [
        { t: '어떤 상황에서도 흔들리지 않는 의지', s: {diamond:2, sapphire:1} },
        { t: '사람들을 이끄는 카리스마와 에너지', s: {ruby:2, topaz:1} },
        { t: '모두를 포용하는 따뜻한 마음', s: {pearl:2, emerald:1} },
        { t: '남들이 생각하지 못한 아이디어', s: {opal:2, amethyst:1} }
      ]},
      { q: '내가 추구하는 삶의 방식은?', a: [
        { t: '높은 기준으로 최고를 추구하는 삶', s: {diamond:2, ruby:1} },
        { t: '끊임없이 도전하고 성취하는 삶', s: {ruby:2, emerald:1} },
        { t: '소중한 사람들과 평화롭게 사는 삶', s: {pearl:2, topaz:1} },
        { t: '자유롭게 나만의 색깔을 만들어가는 삶', s: {opal:2, amethyst:1} }
      ]},
      { q: '누군가 내 의견에 반박할 때 나는?', a: [
        { t: '논리적으로 내 주장을 방어한다', s: {diamond:2, sapphire:1} },
        { t: '당당하게 맞서서 토론한다', s: {ruby:2, emerald:1} },
        { t: '상대의 말도 경청하며 절충점을 찾는다', s: {pearl:2, topaz:1} },
        { t: '예상치 못한 새로운 관점을 제시한다', s: {opal:2, amethyst:1} }
      ]},
      { q: '나를 가장 잘 나타내는 문장은?', a: [
        { t: '"최고가 아니면 의미가 없다"', s: {diamond:2, ruby:1} },
        { t: '"열정이 있는 곳에 길이 있다"', s: {ruby:2, topaz:1} },
        { t: '"천천히, 하지만 확실하게"', s: {emerald:2, pearl:1} },
        { t: '"세상은 내 캔버스다"', s: {opal:2, amethyst:1} }
      ]}
    ],

    en: [
      { q: 'The color that best describes me is…', a: [
        { t: 'Transparent and pure white light', s: {diamond:2, pearl:1} },
        { t: 'Hot and intense red', s: {ruby:2, topaz:1} },
        { t: 'Deep and calm blue', s: {sapphire:2, emerald:1} },
        { t: 'Mysterious and dreamy purple', s: {amethyst:2, opal:1} }
      ]},
      { q: 'What friends often say to me is…', a: [
        { t: '"You really have high standards"', s: {diamond:2, sapphire:1} },
        { t: '"I envy your passion"', s: {ruby:2, topaz:1} },
        { t: '"You\'re always so balanced"', s: {emerald:2, pearl:1} },
        { t: '"You\'re genuinely one of a kind"', s: {opal:2, amethyst:1} }
      ]},
      { q: 'When I\'m stressed, I…', a: [
        { t: 'Quietly solve it on my own', s: {diamond:2, sapphire:1} },
        { t: 'Release energy through activity', s: {ruby:2, topaz:1} },
        { t: 'Recharge in nature or a quiet place', s: {emerald:2, pearl:1} },
        { t: 'Do art or creative activities', s: {amethyst:2, opal:1} }
      ]},
      { q: 'What I value most is…', a: [
        { t: 'Perfection and excellence', s: {diamond:2, sapphire:1} },
        { t: 'Passion and challenge', s: {ruby:2, topaz:1} },
        { t: 'Growth and learning', s: {emerald:2, opal:1} },
        { t: 'Harmony and acceptance', s: {pearl:2, emerald:1} }
      ]},
      { q: 'When meeting someone new, I…', a: [
        { t: 'Observe carefully and approach slowly', s: {sapphire:2, diamond:1} },
        { t: 'Actively speak up first', s: {topaz:2, ruby:1} },
        { t: 'Warmly make them feel comfortable', s: {pearl:2, emerald:1} },
        { t: 'Leave an impression in my own unique way', s: {opal:2, amethyst:1} }
      ]},
      { q: 'How I pursue my dreams or goals…', a: [
        { t: 'Make a perfect plan and execute it thoroughly', s: {diamond:2, sapphire:1} },
        { t: 'Break through any obstacle with sheer will', s: {ruby:2, emerald:1} },
        { t: 'Grow steadily little by little', s: {emerald:2, pearl:1} },
        { t: 'Find my own creative path', s: {opal:2, amethyst:1} }
      ]},
      { q: 'My ideal travel style is…', a: [
        { t: 'A perfectly planned luxury trip', s: {diamond:2, sapphire:1} },
        { t: 'An energetic activity-packed trip', s: {ruby:2, topaz:1} },
        { t: 'A healing retreat in nature', s: {emerald:2, pearl:1} },
        { t: 'A spontaneous trip full of unexpected discoveries', s: {opal:2, amethyst:1} }
      ]},
      { q: 'When making a difficult decision, I…', a: [
        { t: 'Analyze all possibilities and choose the best option', s: {diamond:2, emerald:1} },
        { t: 'Trust my gut and decide boldly', s: {ruby:2, amethyst:1} },
        { t: 'Consult with people around me before deciding', s: {pearl:2, topaz:1} },
        { t: 'Consider both feeling and logic', s: {sapphire:2, opal:1} }
      ]},
      { q: 'My greatest strength is…', a: [
        { t: 'Unshakeable will in any situation', s: {diamond:2, sapphire:1} },
        { t: 'The charisma and energy to lead others', s: {ruby:2, topaz:1} },
        { t: 'A warm heart that embraces everyone', s: {pearl:2, emerald:1} },
        { t: 'Ideas that nobody else thinks of', s: {opal:2, amethyst:1} }
      ]},
      { q: 'The way of life I pursue is…', a: [
        { t: 'Pursuing the best with high standards', s: {diamond:2, ruby:1} },
        { t: 'Constantly challenging and achieving', s: {ruby:2, emerald:1} },
        { t: 'Living peacefully with the people I care about', s: {pearl:2, topaz:1} },
        { t: 'Freely creating my own colors', s: {opal:2, amethyst:1} }
      ]},
      { q: 'When someone pushes back on my opinion, I…', a: [
        { t: 'Defend my argument logically', s: {diamond:2, sapphire:1} },
        { t: 'Stand my ground and debate confidently', s: {ruby:2, emerald:1} },
        { t: 'Listen to their side and find common ground', s: {pearl:2, topaz:1} },
        { t: 'Offer an unexpected new perspective', s: {opal:2, amethyst:1} }
      ]},
      { q: 'The sentence that best represents me is…', a: [
        { t: '"If it\'s not the best, it\'s not worth it"', s: {diamond:2, ruby:1} },
        { t: '"Where there\'s passion, there\'s a way"', s: {ruby:2, topaz:1} },
        { t: '"Slowly but surely"', s: {emerald:2, pearl:1} },
        { t: '"The world is my canvas"', s: {opal:2, amethyst:1} }
      ]}
    ],

    ja: [
      { q: '自分を一番よく表す色は？', a: [
        { t: '透明で純粋な白い光', s: {diamond:2, pearl:1} },
        { t: '熱くて強烈な赤', s: {ruby:2, topaz:1} },
        { t: '深くて落ち着いた青', s: {sapphire:2, emerald:1} },
        { t: '神秘的で幻想的な紫', s: {amethyst:2, opal:1} }
      ]},
      { q: '友達がよく言う言葉は？', a: [
        { t: '「基準が高いね」', s: {diamond:2, sapphire:1} },
        { t: '「情熱が羨ましい」', s: {ruby:2, topaz:1} },
        { t: '「いつもバランスが取れてる」', s: {emerald:2, pearl:1} },
        { t: '「本当に独特だね」', s: {opal:2, amethyst:1} }
      ]},
      { q: 'ストレスを感じた時、私は？', a: [
        { t: '一人で静かに解決する', s: {diamond:2, sapphire:1} },
        { t: '活動的にエネルギーを発散する', s: {ruby:2, topaz:1} },
        { t: '自然や静かな場所で充電する', s: {emerald:2, pearl:1} },
        { t: '芸術や創作活動をする', s: {amethyst:2, opal:1} }
      ]},
      { q: '最も大切にする価値は？', a: [
        { t: '完璧さと卓越性', s: {diamond:2, sapphire:1} },
        { t: '情熱と挑戦', s: {ruby:2, topaz:1} },
        { t: '成長と学び', s: {emerald:2, opal:1} },
        { t: '調和と包容', s: {pearl:2, emerald:1} }
      ]},
      { q: '初めて会う人に対して私は？', a: [
        { t: '慎重に観察してからゆっくり近づく', s: {sapphire:2, diamond:1} },
        { t: '先に積極的に話しかける', s: {topaz:2, ruby:1} },
        { t: '温かく配慮して居心地よくする', s: {pearl:2, emerald:1} },
        { t: '独自の方法で印象を残す', s: {opal:2, amethyst:1} }
      ]},
      { q: '夢や目標を達成する方法は？', a: [
        { t: '完璧な計画を立てて徹底的に実行', s: {diamond:2, sapphire:1} },
        { t: '強い意志でどんな障害も突破', s: {ruby:2, emerald:1} },
        { t: '着実に少しずつ成長しながら達成', s: {emerald:2, pearl:1} },
        { t: '創造的な方法で自分だけの道を行く', s: {opal:2, amethyst:1} }
      ]},
      { q: '一番惹かれる旅行スタイルは？', a: [
        { t: '完璧に計画されたラグジュアリー旅行', s: {diamond:2, sapphire:1} },
        { t: 'エネルギッシュなアクティビティ旅行', s: {ruby:2, topaz:1} },
        { t: '自然の中でヒーリングする旅行', s: {emerald:2, pearl:1} },
        { t: '予想外の発見がある即興旅行', s: {opal:2, amethyst:1} }
      ]},
      { q: '難しい決断をする時、私は？', a: [
        { t: 'すべての可能性を分析して最善を選ぶ', s: {diamond:2, emerald:1} },
        { t: '直感を信じて大胆に決断する', s: {ruby:2, amethyst:1} },
        { t: '周りの人と十分相談してから決める', s: {pearl:2, topaz:1} },
        { t: '感覚と論理を両方考慮して決める', s: {sapphire:2, opal:1} }
      ]},
      { q: '自分の最大の強みは？', a: [
        { t: 'どんな状況でも揺るがない意志', s: {diamond:2, sapphire:1} },
        { t: '人をひきつけるカリスマとエネルギー', s: {ruby:2, topaz:1} },
        { t: '誰でも包み込む温かい心', s: {pearl:2, emerald:1} },
        { t: '誰も思いつかないアイデア', s: {opal:2, amethyst:1} }
      ]},
      { q: '追求する生き方は？', a: [
        { t: '高い基準で最高を目指す人生', s: {diamond:2, ruby:1} },
        { t: '絶えず挑戦し達成し続ける人生', s: {ruby:2, emerald:1} },
        { t: '大切な人たちと平和に暮らす人生', s: {pearl:2, topaz:1} },
        { t: '自由に自分だけの色を作っていく人生', s: {opal:2, amethyst:1} }
      ]},
      { q: '誰かが私の意見に反論した時、私は？', a: [
        { t: '論理的に自分の主張を守る', s: {diamond:2, sapphire:1} },
        { t: '堂々と立ち向かって議論する', s: {ruby:2, emerald:1} },
        { t: '相手の話も聞いて妥協点を探す', s: {pearl:2, topaz:1} },
        { t: '予想外の新しい観点を提示する', s: {opal:2, amethyst:1} }
      ]},
      { q: '自分を最もよく表す言葉は？', a: [
        { t: '「最高でなければ意味がない」', s: {diamond:2, ruby:1} },
        { t: '「情熱があるところに道がある」', s: {ruby:2, topaz:1} },
        { t: '「ゆっくりでも確実に」', s: {emerald:2, pearl:1} },
        { t: '「世界は私のキャンバスだ」', s: {opal:2, amethyst:1} }
      ]}
    ],

    zh: [
      { q: '最能代表我的颜色是？', a: [
        { t: '透明纯净的白光', s: {diamond:2, pearl:1} },
        { t: '炽热强烈的红色', s: {ruby:2, topaz:1} },
        { t: '深沉平静的蓝色', s: {sapphire:2, emerald:1} },
        { t: '神秘梦幻的紫色', s: {amethyst:2, opal:1} }
      ]},
      { q: '朋友经常对我说的话是？', a: [
        { t: '"你的标准真的很高"', s: {diamond:2, sapphire:1} },
        { t: '"真羡慕你的热情"', s: {ruby:2, topaz:1} },
        { t: '"你总是很平衡"', s: {emerald:2, pearl:1} },
        { t: '"你真的很独特"', s: {opal:2, amethyst:1} }
      ]},
      { q: '压力大时，我会？', a: [
        { t: '独自安静地解决', s: {diamond:2, sapphire:1} },
        { t: '积极地发泄能量', s: {ruby:2, topaz:1} },
        { t: '在自然或安静的地方充电', s: {emerald:2, pearl:1} },
        { t: '进行艺术或创作活动', s: {amethyst:2, opal:1} }
      ]},
      { q: '我最看重的价值是？', a: [
        { t: '完美与卓越', s: {diamond:2, sapphire:1} },
        { t: '热情与挑战', s: {ruby:2, topaz:1} },
        { t: '成长与学习', s: {emerald:2, opal:1} },
        { t: '和谐与包容', s: {pearl:2, emerald:1} }
      ]},
      { q: '遇到初次见面的人时，我会？', a: [
        { t: '谨慎观察后慢慢靠近', s: {sapphire:2, diamond:1} },
        { t: '积极主动先打招呼', s: {topaz:2, ruby:1} },
        { t: '温暖体贴让对方感到舒适', s: {pearl:2, emerald:1} },
        { t: '用独特的方式留下印象', s: {opal:2, amethyst:1} }
      ]},
      { q: '实现梦想或目标的方式是？', a: [
        { t: '制定完美计划并彻底执行', s: {diamond:2, sapphire:1} },
        { t: '凭借强大意志突破一切障碍', s: {ruby:2, emerald:1} },
        { t: '稳稳地一点点成长实现', s: {emerald:2, pearl:1} },
        { t: '用创意方式走自己的路', s: {opal:2, amethyst:1} }
      ]},
      { q: '最吸引我的旅行方式是？', a: [
        { t: '完美计划的豪华旅行', s: {diamond:2, sapphire:1} },
        { t: '充满活力的户外活动旅行', s: {ruby:2, topaz:1} },
        { t: '在大自然中治愈身心的旅行', s: {emerald:2, pearl:1} },
        { t: '充满意外发现的即兴旅行', s: {opal:2, amethyst:1} }
      ]},
      { q: '做出艰难决定时，我会？', a: [
        { t: '分析所有可能性选择最佳方案', s: {diamond:2, emerald:1} },
        { t: '相信直觉果断决定', s: {ruby:2, amethyst:1} },
        { t: '与周围的人充分商量后决定', s: {pearl:2, topaz:1} },
        { t: '同时考虑感觉和逻辑', s: {sapphire:2, opal:1} }
      ]},
      { q: '我最大的优点是？', a: [
        { t: '在任何情况下都不动摇的意志', s: {diamond:2, sapphire:1} },
        { t: '引领他人的魅力和能量', s: {ruby:2, topaz:1} },
        { t: '包容所有人的温暖心肠', s: {pearl:2, emerald:1} },
        { t: '别人想不到的创意', s: {opal:2, amethyst:1} }
      ]},
      { q: '我追求的生活方式是？', a: [
        { t: '以高标准追求最好的人生', s: {diamond:2, ruby:1} },
        { t: '不断挑战和成就的人生', s: {ruby:2, emerald:1} },
        { t: '与重要的人平静生活的人生', s: {pearl:2, topaz:1} },
        { t: '自由创造自己色彩的人生', s: {opal:2, amethyst:1} }
      ]},
      { q: '有人反驳我的意见时，我会？', a: [
        { t: '用逻辑捍卫自己的主张', s: {diamond:2, sapphire:1} },
        { t: '堂堂正正地应对并讨论', s: {ruby:2, emerald:1} },
        { t: '倾听对方的话并寻找折中点', s: {pearl:2, topaz:1} },
        { t: '提出意想不到的新观点', s: {opal:2, amethyst:1} }
      ]},
      { q: '最能代表我的句子是？', a: [
        { t: '"不是最好的就没有意义"', s: {diamond:2, ruby:1} },
        { t: '"有热情的地方就有路"', s: {ruby:2, topaz:1} },
        { t: '"慢慢来，但要确实"', s: {emerald:2, pearl:1} },
        { t: '"世界是我的画布"', s: {opal:2, amethyst:1} }
      ]}
    ]
  }
};
