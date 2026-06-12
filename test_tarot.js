/* ===========================================================
   나의 타로 카드 테스트 (tarot-card)
   8유형 × 12문항 × 4언어
   =========================================================== */

const TEST_TAROT = {
  id: 'tarot-card',
  emoji: '🔮',

  resultLabel: {
    ko: '나의 타로 카드는',
    en: 'Your tarot card is',
    ja: '私のタロットカードは',
    zh: '我的塔罗牌是'
  },

  typeList: ['sun','moon','star','tower','empress','magician','wheel','strength'],

  meta: {
    sun:      { img: 'images/tarot_sun.jpg',      color: '#e67e00', ink: '#fff' },
    moon:     { img: 'images/tarot_moon.jpg',     color: '#4a3080', ink: '#fff' },
    star:     { img: 'images/tarot_star.jpg',     color: '#5b4fcf', ink: '#fff' },
    tower:    { img: 'images/tarot_tower.jpg',    color: '#c0392b', ink: '#fff' },
    empress:  { img: 'images/tarot_empress.jpg',  color: '#c2558b', ink: '#fff' },
    magician: { img: 'images/tarot_magician.jpg', color: '#6a0dad', ink: '#fff' },
    wheel:    { img: 'images/tarot_wheel.jpg',    color: '#0e8a6e', ink: '#fff' },
    strength: { img: 'images/tarot_strength.jpg', color: '#d4820a', ink: '#fff' }
  },

  types: {
    sun: {
      ko: { name: '☀️ 태양', tag: '#긍정 #활력 #성공',
        desc: '당신의 타로 카드는 태양입니다. 어디서든 밝은 에너지를 발산하며 주변을 따뜻하게 물들이는 사람입니다. 자신감이 넘치고 행동력이 강하며, 함께 있으면 절로 기운이 나는 존재입니다. 긍정적인 에너지로 어떤 어둠도 밝혀내는 것이 당신의 가장 큰 힘입니다.',
        best: 'star', worst: 'moon' },
      en: { name: '☀️ The Sun', tag: '#Positivity #Vitality #Success',
        desc: 'Your tarot card is The Sun. You radiate bright energy wherever you go, warming everything around you. Full of confidence and drive, you are the kind of person whose presence lifts everyone\'s spirits. Your ability to light up even the darkest spaces with positivity is your greatest strength.',
        best: 'star', worst: 'moon' },
      ja: { name: '☀️ 太陽', tag: '#ポジティブ #活力 #成功',
        desc: 'あなたのタロットカードは太陽です。どこでも明るいエネルギーを発散し、周りを温かく染める人です。自信にあふれ行動力が強く、一緒にいると自然と元気が出る存在です。ポジティブなエネルギーでどんな暗闇も照らし出すことがあなたの最大の力です。',
        best: 'star', worst: 'moon' },
      zh: { name: '☀️ 太阳', tag: '#积极 #活力 #成功',
        desc: '你的塔罗牌是太阳。无论在哪里都散发着明亮的能量，温暖着周围一切。充满自信、行动力强，与你在一起会自然而然地充满活力。用积极的能量照亮任何黑暗，这是你最大的力量。',
        best: 'star', worst: 'moon' }
    },
    moon: {
      ko: { name: '🌙 달', tag: '#직관 #신비 #감성',
        desc: '당신의 타로 카드는 달입니다. 남들이 느끼지 못하는 것을 감지하는 예민한 직관의 소유자입니다. 감정의 흐름을 섬세하게 읽고, 겉으로 드러나지 않는 진실을 꿰뚫어 봅니다. 신비로운 내면세계를 가진 당신은 깊은 공감과 감수성으로 사람들의 마음을 움직입니다.',
        best: 'star', worst: 'sun' },
      en: { name: '🌙 The Moon', tag: '#Intuition #Mystery #Sensitivity',
        desc: 'Your tarot card is The Moon. You possess a keen intuition that senses what others cannot feel. You read the flow of emotions with great sensitivity and see through truths that are not visible on the surface. With your mysterious inner world, you move people\'s hearts through deep empathy and feeling.',
        best: 'star', worst: 'sun' },
      ja: { name: '🌙 月', tag: '#直感 #神秘 #感性',
        desc: 'あなたのタロットカードは月です。他の人が感じられないことを感知する鋭い直感の持ち主です。感情の流れを繊細に読み取り、表に出ない真実を見通します。神秘的な内面世界を持つあなたは、深い共感と感受性で人々の心を動かします。',
        best: 'star', worst: 'sun' },
      zh: { name: '🌙 月亮', tag: '#直觉 #神秘 #感性',
        desc: '你的塔罗牌是月亮。你拥有感知他人无法察觉之事的敏锐直觉。细腻地读取情感流动，洞察表面看不到的真相。拥有神秘内心世界的你，凭借深刻的共情和感受力打动人心。',
        best: 'star', worst: 'sun' }
    },
    star: {
      ko: { name: '⭐ 별', tag: '#희망 #순수 #치유',
        desc: '당신의 타로 카드는 별입니다. 어떤 상황에서도 희망을 잃지 않는 순수한 영혼의 소유자입니다. 말 한마디, 존재 하나만으로도 주변 사람들에게 위안과 치유를 선사합니다. 어두운 밤하늘에서 길을 안내하는 별처럼, 당신은 사람들이 나아갈 방향을 밝혀주는 존재입니다.',
        best: 'moon', worst: 'tower' },
      en: { name: '⭐ The Star', tag: '#Hope #Purity #Healing',
        desc: 'Your tarot card is The Star. You are a pure soul who never loses hope no matter the circumstances. With just a single word or your simple presence, you bring comfort and healing to those around you. Like a star guiding the way through the dark night sky, you are someone who lights the path forward for others.',
        best: 'moon', worst: 'tower' },
      ja: { name: '⭐ 星', tag: '#希望 #純粋 #癒し',
        desc: 'あなたのタロットカードは星です。どんな状況でも希望を失わない純粋な魂の持ち主です。一言や存在だけで周りの人に慰めと癒しを与えます。暗い夜空で道を照らす星のように、あなたは人々が進む方向を明るくする存在です。',
        best: 'moon', worst: 'tower' },
      zh: { name: '⭐ 星星', tag: '#希望 #纯真 #治愈',
        desc: '你的塔罗牌是星星。你是一个无论在任何情况下都不失去希望的纯洁灵魂。仅凭一句话或你的存在，就能给周围的人带来安慰和治愈。就像在黑暗夜空中指引方向的星星，你是照亮人们前进方向的存在。',
        best: 'moon', worst: 'tower' }
    },
    tower: {
      ko: { name: '🗼 탑', tag: '#변화 #혁신 #돌파력',
        desc: '당신의 타로 카드는 탑입니다. 기존의 틀을 깨고 새로운 것을 만들어내는 강렬한 에너지를 가진 사람입니다. 변화를 두려워하지 않고 오히려 즐기며, 정체된 상황을 뒤흔들어 혁신을 이끌어냅니다. 충격적인 변화 속에서도 재탄생하는 불사조 같은 강인함이 당신의 본질입니다.',
        best: 'magician', worst: 'star' },
      en: { name: '🗼 The Tower', tag: '#Change #Innovation #Breakthrough',
        desc: 'Your tarot card is The Tower. You carry an intense energy for breaking existing frameworks and creating something new. You do not fear change — you embrace it — and you shake up stagnant situations to drive innovation. Like a phoenix reborn through shocking transformation, resilience is your essence.',
        best: 'magician', worst: 'star' },
      ja: { name: '🗼 塔', tag: '#変化 #革新 #突破力',
        desc: 'あなたのタロットカードは塔です。既存の枠を壊し新しいものを作り出す強烈なエネルギーを持つ人です。変化を恐れずむしろ楽しみ、停滞した状況を揺るがして革新を導き出します。衝撃的な変化の中でも再生する不死鳥のような強さがあなたの本質です。',
        best: 'magician', worst: 'star' },
      zh: { name: '🗼 塔', tag: '#变化 #革新 #突破力',
        desc: '你的塔罗牌是塔。你拥有打破现有框架、创造新事物的强烈能量。不惧变化，反而享受变化，震撼停滞的局面并引领革新。即使在令人震惊的变化中也能重生，如凤凰般的坚韧是你的本质。',
        best: 'magician', worst: 'star' }
    },
    empress: {
      ko: { name: '👑 여황제', tag: '#풍요 #창의 #포용',
        desc: '당신의 타로 카드는 여황제입니다. 풍부한 감수성과 창의력으로 주변에 아름다움을 만들어내는 사람입니다. 넓은 포용력으로 모든 것을 품어 안으며, 자연스러운 카리스마로 사람들을 이끕니다. 당신이 있는 곳에는 언제나 풍요롭고 따뜻한 에너지가 넘칩니다.',
        best: 'strength', worst: 'tower' },
      en: { name: '👑 The Empress', tag: '#Abundance #Creativity #Embrace',
        desc: 'Your tarot card is The Empress. You create beauty around you with your rich sensitivity and creativity. You embrace everything with wide-open arms, and your natural charisma draws people to you effortlessly. Wherever you are, there is always an energy of warmth and abundance.',
        best: 'strength', worst: 'tower' },
      ja: { name: '👑 女帝', tag: '#豊かさ #創造性 #包容力',
        desc: 'あなたのタロットカードは女帝です。豊かな感受性と創造力で周りに美しさを生み出す人です。広い包容力ですべてを包み込み、自然なカリスマで人々を導きます。あなたがいる場所には常に豊かで温かいエネルギーがあふれています。',
        best: 'strength', worst: 'tower' },
      zh: { name: '👑 女皇', tag: '#丰盛 #创意 #包容',
        desc: '你的塔罗牌是女皇。你用丰富的感受力和创造力在周围创造美好。以宽广的包容心拥抱一切，凭借自然的魅力引领他人。你所在的地方总是充满丰盛而温暖的能量。',
        best: 'strength', worst: 'tower' }
    },
    magician: {
      ko: { name: '🪄 마법사', tag: '#의지 #실행력 #능력',
        desc: '당신의 타로 카드는 마법사입니다. 목표를 정하면 반드시 해내는 강한 의지와 실행력의 소유자입니다. 가진 것을 최대한 활용하는 능력이 뛰어나며, 불가능해 보이는 일도 가능하게 만들어냅니다. 아이디어를 현실로 변환시키는 놀라운 능력이 당신을 특별하게 만듭니다.',
        best: 'tower', worst: 'wheel' },
      en: { name: '🪄 The Magician', tag: '#Willpower #Action #Ability',
        desc: 'Your tarot card is The Magician. You have a fierce will and drive that ensures you accomplish what you set out to do. You excel at making the most of what you have, turning even the seemingly impossible into reality. Your remarkable ability to transform ideas into action is what makes you truly special.',
        best: 'tower', worst: 'wheel' },
      ja: { name: '🪄 魔術師', tag: '#意志 #実行力 #能力',
        desc: 'あなたのタロットカードは魔術師です。目標を定めたら必ずやり遂げる強い意志と実行力の持ち主です。持っているものを最大限に活用する能力に優れ、不可能に見えることも可能にします。アイデアを現実に変換する驚くべき能力があなたを特別にします。',
        best: 'tower', worst: 'wheel' },
      zh: { name: '🪄 魔术师', tag: '#意志 #执行力 #能力',
        desc: '你的塔罗牌是魔术师。一旦确定目标，就必然实现的强大意志和执行力的拥有者。善于最大限度地利用现有资源，将看似不可能的事情变为可能。将想法转化为现实的惊人能力使你与众不同。',
        best: 'tower', worst: 'wheel' }
    },
    wheel: {
      ko: { name: '🎡 운명의 수레바퀴', tag: '#흐름 #순환 #유연함',
        desc: '당신의 타로 카드는 운명의 수레바퀴입니다. 삶의 흐름을 거스르지 않고 자연스럽게 받아들이는 유연한 사람입니다. 좋을 때도 나쁠 때도 균형을 잃지 않으며, 변화하는 상황 속에서도 중심을 지킵니다. 모든 것은 돌고 돌아 제자리를 찾는다는 것을 본능적으로 아는 지혜로운 존재입니다.',
        best: 'star', worst: 'magician' },
      en: { name: '🎡 Wheel of Fortune', tag: '#Flow #Cycle #Flexibility',
        desc: 'Your tarot card is the Wheel of Fortune. You are a flexible person who accepts the flow of life naturally rather than fighting against it. You maintain balance in both good times and bad, keeping your center even as circumstances change. You instinctively know that everything comes back around — a wisdom that sets you apart.',
        best: 'star', worst: 'magician' },
      ja: { name: '🎡 運命の輪', tag: '#流れ #循環 #柔軟性',
        desc: 'あなたのタロットカードは運命の輪です。人生の流れに逆らわず自然に受け入れる柔軟な人です。良い時も悪い時もバランスを崩さず、変化する状況の中でも中心を保ちます。すべては巡り巡って元の場所に戻るということを本能的に知っている賢明な存在です。',
        best: 'star', worst: 'magician' },
      zh: { name: '🎡 命运之轮', tag: '#流动 #循环 #灵活',
        desc: '你的塔罗牌是命运之轮。你是一个不抗拒生命流动、自然接受的灵活之人。无论好时坏时都不失去平衡，在变化的情况中也能保持中心。本能地知道一切都会循环往复回到原位，这是你的智慧所在。',
        best: 'star', worst: 'magician' }
    },
    strength: {
      ko: { name: '🦁 힘', tag: '#인내 #용기 #내면의강함',
        desc: '당신의 타로 카드는 힘입니다. 겉으로 드러나지 않아도 누구보다 강한 내면을 가진 사람입니다. 폭발적인 힘이 아닌 조용하고 깊은 용기로 어떤 상황도 헤쳐나갑니다. 두려움과 마주하면서도 흔들리지 않는 당신의 인내와 내면의 강함은 주변 모든 사람에게 깊은 신뢰를 줍니다.',
        best: 'empress', worst: 'tower' },
      en: { name: '🦁 Strength', tag: '#Patience #Courage #InnerStrength',
        desc: 'Your tarot card is Strength. You have an inner strength greater than anyone\'s, even if it doesn\'t always show on the surface. You navigate any situation not with explosive force, but with quiet, deep courage. Your patience and inner strength in the face of fear — never wavering — earn the deep trust of everyone around you.',
        best: 'empress', worst: 'tower' },
      ja: { name: '🦁 力', tag: '#忍耐 #勇気 #内なる強さ',
        desc: 'あなたのタロットカードは力です。表に出なくても誰よりも強い内面を持つ人です。爆発的な力ではなく、静かで深い勇気でどんな状況も乗り越えます。恐怖と向き合いながらもぶれないあなたの忍耐と内なる強さは、周りのすべての人に深い信頼を与えます。',
        best: 'empress', worst: 'tower' },
      zh: { name: '🦁 力量', tag: '#忍耐 #勇气 #内在力量',
        desc: '你的塔罗牌是力量。即使不表现出来，你也拥有比任何人都强大的内心。不是用爆发性的力量，而是用安静而深沉的勇气度过任何情况。面对恐惧也不动摇的忍耐和内在力量，给周围所有人带来深深的信任。',
        best: 'empress', worst: 'tower' }
    }
  },

  questions: {
    ko: [
      { q: '아침에 눈을 떴을 때 드는 첫 번째 생각은?', a: [
        { t: '오늘도 좋은 일이 생길 것 같다', s: {sun:2,star:1} },
        { t: '어젯밤 꾼 꿈이 아직도 생생하다', s: {moon:2,star:1} },
        { t: '오늘 할 일을 머릿속으로 정리한다', s: {magician:2,wheel:1} },
        { t: '그냥 조금 더 누워 있고 싶다', s: {strength:2,empress:1} }
      ]},
      { q: '나에게 가장 잘 맞는 단어는?', a: [
        { t: '밝음', s: {sun:2,star:1} },
        { t: '신비로움', s: {moon:2,magician:1} },
        { t: '따뜻함', s: {empress:2,strength:1} },
        { t: '강인함', s: {tower:2,strength:1} }
      ]},
      { q: '가장 끌리는 풍경은?', a: [
        { t: '햇살 가득한 해바라기 밭', s: {sun:2,empress:1} },
        { t: '달빛 아래 조용한 호수', s: {moon:2,star:1} },
        { t: '별이 쏟아지는 맑은 밤하늘', s: {star:2,wheel:1} },
        { t: '폭풍 뒤 맑게 갠 하늘', s: {tower:2,strength:1} }
      ]},
      { q: '힘든 상황을 만났을 때 나는?', a: [
        { t: '긍정적으로 생각하며 버텨낸다', s: {sun:2,strength:1} },
        { t: '감이 오는 대로 움직인다', s: {moon:2,wheel:1} },
        { t: '조용히 인내하며 때를 기다린다', s: {strength:2,star:1} },
        { t: '빠르게 판단하고 행동으로 돌파한다', s: {magician:2,tower:1} }
      ]},
      { q: '내가 가장 소중히 여기는 것은?', a: [
        { t: '지금 이 순간의 행복', s: {sun:2,wheel:1} },
        { t: '감정과 직관', s: {moon:2,empress:1} },
        { t: '희망과 꿈', s: {star:2,sun:1} },
        { t: '변화와 성장', s: {tower:2,magician:1} }
      ]},
      { q: '친구들이 나에 대해 자주 하는 말은?', a: [
        { t: '"넌 항상 밝고 에너지가 넘쳐"', s: {sun:2,empress:1} },
        { t: '"넌 눈치가 빠르고 분위기를 잘 읽어"', s: {moon:2,magician:1} },
        { t: '"넌 항상 나를 위로해줘"', s: {star:2,strength:1} },
        { t: '"넌 한번 마음먹으면 끝까지 해"', s: {magician:2,tower:1} }
      ]},
      { q: '나의 의사결정 방식은?', a: [
        { t: '느낌과 직감을 믿는다', s: {moon:2,wheel:1} },
        { t: '논리적으로 분석하고 판단한다', s: {magician:2,tower:1} },
        { t: '상황의 흐름에 맡긴다', s: {wheel:2,moon:1} },
        { t: '내 마음이 원하는 대로 한다', s: {empress:2,sun:1} }
      ]},
      { q: '가장 무서운 것은?', a: [
        { t: '활기를 잃고 무기력해지는 것', s: {sun:2,magician:1} },
        { t: '내 감정을 아무도 이해 못 하는 것', s: {moon:2,star:1} },
        { t: '희망이 사라지는 것', s: {star:2,empress:1} },
        { t: '변화 없이 멈춰 있는 것', s: {tower:2,wheel:1} }
      ]},
      { q: '나의 약점에 가까운 것은?', a: [
        { t: '충동적으로 행동할 때가 있다', s: {sun:2,tower:1} },
        { t: '지나치게 감정에 흔들린다', s: {moon:2,star:1} },
        { t: '우유부단하고 결정이 느리다', s: {wheel:2,strength:1} },
        { t: '고집이 너무 세다', s: {magician:2,tower:1} }
      ]},
      { q: '이상적인 하루의 마무리는?', a: [
        { t: '오늘도 즐거웠다고 웃으며 잠들기', s: {sun:2,star:1} },
        { t: '혼자 조용히 오늘 하루를 음미하기', s: {moon:2,strength:1} },
        { t: '내일 할 일을 계획하고 뿌듯하게 자기', s: {magician:2,wheel:1} },
        { t: '사랑하는 사람과 따뜻한 시간 보내기', s: {empress:2,star:1} }
      ]},
      { q: '나를 가장 성장시키는 것은?', a: [
        { t: '실패해도 다시 일어나는 경험', s: {tower:2,strength:1} },
        { t: '내 감정을 솔직하게 들여다보는 것', s: {moon:2,star:1} },
        { t: '새로운 도전을 해내는 성취감', s: {magician:2,sun:1} },
        { t: '자연스럽게 흘러가는 삶의 변화', s: {wheel:2,empress:1} }
      ]},
      { q: '지금 내 마음에 가장 가까운 이미지는?', a: [
        { t: '구름 한 점 없는 맑은 하늘', s: {sun:2,star:1} },
        { t: '잔잔한 달빛이 비치는 밤바다', s: {moon:2,wheel:1} },
        { t: '폭풍 속에서도 꺼지지 않는 불꽃', s: {tower:2,strength:1} },
        { t: '꽃이 만발한 평화로운 정원', s: {empress:2,star:1} }
      ]}
    ],

    en: [
      { q: 'The first thought when you wake up in the morning is…', a: [
        { t: 'Something good is going to happen today', s: {sun:2,star:1} },
        { t: 'The dream I had last night is still vivid', s: {moon:2,star:1} },
        { t: 'I mentally organize what I need to do today', s: {magician:2,wheel:1} },
        { t: 'I just want to lie in bed a little longer', s: {strength:2,empress:1} }
      ]},
      { q: 'The word that fits me best is…', a: [
        { t: 'Bright', s: {sun:2,star:1} },
        { t: 'Mysterious', s: {moon:2,magician:1} },
        { t: 'Warm', s: {empress:2,strength:1} },
        { t: 'Strong', s: {tower:2,strength:1} }
      ]},
      { q: 'The scenery I\'m most drawn to is…', a: [
        { t: 'A sunflower field bathed in sunlight', s: {sun:2,empress:1} },
        { t: 'A quiet lake under moonlight', s: {moon:2,star:1} },
        { t: 'A clear night sky showering stars', s: {star:2,wheel:1} },
        { t: 'A sky that has cleared after a storm', s: {tower:2,strength:1} }
      ]},
      { q: 'When I face a difficult situation, I…', a: [
        { t: 'Think positively and push through', s: {sun:2,strength:1} },
        { t: 'Move according to my gut feeling', s: {moon:2,wheel:1} },
        { t: 'Quietly endure and wait for the right moment', s: {strength:2,star:1} },
        { t: 'Decide quickly and break through with action', s: {magician:2,tower:1} }
      ]},
      { q: 'What I value most is…', a: [
        { t: 'Happiness in this present moment', s: {sun:2,wheel:1} },
        { t: 'Emotion and intuition', s: {moon:2,empress:1} },
        { t: 'Hope and dreams', s: {star:2,sun:1} },
        { t: 'Change and growth', s: {tower:2,magician:1} }
      ]},
      { q: 'Something friends often say about me is…', a: [
        { t: '"You\'re always bright and full of energy"', s: {sun:2,empress:1} },
        { t: '"You read the room so well"', s: {moon:2,magician:1} },
        { t: '"You always comfort me"', s: {star:2,strength:1} },
        { t: '"Once you set your mind to something, you see it through"', s: {magician:2,tower:1} }
      ]},
      { q: 'My decision-making style is…', a: [
        { t: 'I trust my feelings and instincts', s: {moon:2,wheel:1} },
        { t: 'I analyze logically and then judge', s: {magician:2,tower:1} },
        { t: 'I go with the flow of the situation', s: {wheel:2,moon:1} },
        { t: 'I follow what my heart wants', s: {empress:2,sun:1} }
      ]},
      { q: 'My biggest fear is…', a: [
        { t: 'Losing my energy and becoming helpless', s: {sun:2,magician:1} },
        { t: 'No one understanding my emotions', s: {moon:2,star:1} },
        { t: 'Losing hope', s: {star:2,empress:1} },
        { t: 'Being stuck with no change', s: {tower:2,wheel:1} }
      ]},
      { q: 'My closest weakness is…', a: [
        { t: 'I sometimes act impulsively', s: {sun:2,tower:1} },
        { t: 'I get too carried away by my emotions', s: {moon:2,star:1} },
        { t: 'I\'m indecisive and slow to decide', s: {wheel:2,strength:1} },
        { t: 'I can be too stubborn', s: {magician:2,tower:1} }
      ]},
      { q: 'My ideal way to end the day is…', a: [
        { t: 'Falling asleep with a smile thinking it was a good day', s: {sun:2,star:1} },
        { t: 'Quietly savoring the day alone', s: {moon:2,strength:1} },
        { t: 'Planning tomorrow and going to bed feeling accomplished', s: {magician:2,wheel:1} },
        { t: 'Spending warm time with someone I love', s: {empress:2,star:1} }
      ]},
      { q: 'What helps me grow the most is…', a: [
        { t: 'The experience of getting back up after failure', s: {tower:2,strength:1} },
        { t: 'Looking honestly at my emotions', s: {moon:2,star:1} },
        { t: 'The sense of achievement from taking on new challenges', s: {magician:2,sun:1} },
        { t: 'The natural changes that flow through life', s: {wheel:2,empress:1} }
      ]},
      { q: 'The image closest to how I feel right now is…', a: [
        { t: 'A clear blue sky without a single cloud', s: {sun:2,star:1} },
        { t: 'A calm night sea lit by moonlight', s: {moon:2,wheel:1} },
        { t: 'A flame that won\'t go out even in a storm', s: {tower:2,strength:1} },
        { t: 'A peaceful garden in full bloom', s: {empress:2,star:1} }
      ]}
    ],

    ja: [
      { q: '朝目が覚めたとき最初に思うことは？', a: [
        { t: '今日もいいことがありそうだ', s: {sun:2,star:1} },
        { t: '昨夜見た夢がまだ鮮明だ', s: {moon:2,star:1} },
        { t: '今日やることを頭の中で整理する', s: {magician:2,wheel:1} },
        { t: 'もう少し横になっていたい', s: {strength:2,empress:1} }
      ]},
      { q: '私に最もよく当てはまる言葉は？', a: [
        { t: '明るさ', s: {sun:2,star:1} },
        { t: '神秘的', s: {moon:2,magician:1} },
        { t: '温かさ', s: {empress:2,strength:1} },
        { t: '強さ', s: {tower:2,strength:1} }
      ]},
      { q: '最も惹かれる風景は？', a: [
        { t: '陽光あふれるひまわり畑', s: {sun:2,empress:1} },
        { t: '月明かりの下の静かな湖', s: {moon:2,star:1} },
        { t: '星が降り注ぐ澄んだ夜空', s: {star:2,wheel:1} },
        { t: '嵐の後に晴れ渡った空', s: {tower:2,strength:1} }
      ]},
      { q: '困難な状況に直面したとき私は？', a: [
        { t: 'ポジティブに考えて乗り越える', s: {sun:2,strength:1} },
        { t: '直感の赴くままに動く', s: {moon:2,wheel:1} },
        { t: '静かに耐えてチャンスを待つ', s: {strength:2,star:1} },
        { t: '素早く判断して行動で突破する', s: {magician:2,tower:1} }
      ]},
      { q: '私が最も大切にしているものは？', a: [
        { t: 'この瞬間の幸せ', s: {sun:2,wheel:1} },
        { t: '感情と直感', s: {moon:2,empress:1} },
        { t: '希望と夢', s: {star:2,sun:1} },
        { t: '変化と成長', s: {tower:2,magician:1} }
      ]},
      { q: '友達が私についてよく言う言葉は？', a: [
        { t: '「あなたはいつも明るくてエネルギッシュ」', s: {sun:2,empress:1} },
        { t: '「あなたは空気を読むのが上手い」', s: {moon:2,magician:1} },
        { t: '「あなたはいつも私を慰めてくれる」', s: {star:2,strength:1} },
        { t: '「一度決めたら最後までやり遂げる」', s: {magician:2,tower:1} }
      ]},
      { q: '私の意思決定の方法は？', a: [
        { t: '感覚と直感を信じる', s: {moon:2,wheel:1} },
        { t: '論理的に分析して判断する', s: {magician:2,tower:1} },
        { t: '状況の流れに任せる', s: {wheel:2,moon:1} },
        { t: '自分の心が望むままにする', s: {empress:2,sun:1} }
      ]},
      { q: '一番怖いことは？', a: [
        { t: '活力を失って無気力になること', s: {sun:2,magician:1} },
        { t: '自分の感情を誰も理解してくれないこと', s: {moon:2,star:1} },
        { t: '希望が消えること', s: {star:2,empress:1} },
        { t: '変化なく止まってしまうこと', s: {tower:2,wheel:1} }
      ]},
      { q: '自分の弱点に近いのは？', a: [
        { t: '衝動的に行動することがある', s: {sun:2,tower:1} },
        { t: '感情に流されすぎる', s: {moon:2,star:1} },
        { t: '優柔不断で決断が遅い', s: {wheel:2,strength:1} },
        { t: '頑固すぎる', s: {magician:2,tower:1} }
      ]},
      { q: '理想的な一日の締めくくりは？', a: [
        { t: '今日も楽しかったと笑って眠る', s: {sun:2,star:1} },
        { t: '一人で静かに今日一日を味わう', s: {moon:2,strength:1} },
        { t: '明日の計画を立てて満足して寝る', s: {magician:2,wheel:1} },
        { t: '愛する人と温かい時間を過ごす', s: {empress:2,star:1} }
      ]},
      { q: '私を最も成長させるものは？', a: [
        { t: '失敗しても立ち上がる経験', s: {tower:2,strength:1} },
        { t: '自分の感情を正直に見つめること', s: {moon:2,star:1} },
        { t: '新しい挑戦を成し遂げる達成感', s: {magician:2,sun:1} },
        { t: '自然に流れていく人生の変化', s: {wheel:2,empress:1} }
      ]},
      { q: '今の自分の気持ちに最も近いイメージは？', a: [
        { t: '雲ひとつない澄んだ空', s: {sun:2,star:1} },
        { t: '穏やかな月明かりが照らす夜の海', s: {moon:2,wheel:1} },
        { t: '嵐の中でも消えない炎', s: {tower:2,strength:1} },
        { t: '花が満開の穏やかな庭園', s: {empress:2,star:1} }
      ]}
    ],

    zh: [
      { q: '早上睁眼时第一个想法是？', a: [
        { t: '今天也会发生好事', s: {sun:2,star:1} },
        { t: '昨晚做的梦还历历在目', s: {moon:2,star:1} },
        { t: '在脑海中整理今天要做的事', s: {magician:2,wheel:1} },
        { t: '就想再多躺一会儿', s: {strength:2,empress:1} }
      ]},
      { q: '最适合形容我的词是…', a: [
        { t: '明亮', s: {sun:2,star:1} },
        { t: '神秘', s: {moon:2,magician:1} },
        { t: '温暖', s: {empress:2,strength:1} },
        { t: '坚强', s: {tower:2,strength:1} }
      ]},
      { q: '最吸引我的风景是…', a: [
        { t: '阳光灿烂的向日葵田', s: {sun:2,empress:1} },
        { t: '月光下宁静的湖面', s: {moon:2,star:1} },
        { t: '繁星倾泻的晴朗夜空', s: {star:2,wheel:1} },
        { t: '暴风雨后放晴的天空', s: {tower:2,strength:1} }
      ]},
      { q: '遇到困难时，我会…', a: [
        { t: '积极思考，坚持下去', s: {sun:2,strength:1} },
        { t: '跟随直觉行动', s: {moon:2,wheel:1} },
        { t: '静静忍耐，等待时机', s: {strength:2,star:1} },
        { t: '迅速判断，用行动突破', s: {magician:2,tower:1} }
      ]},
      { q: '我最珍视的是…', a: [
        { t: '此刻的幸福', s: {sun:2,wheel:1} },
        { t: '情感与直觉', s: {moon:2,empress:1} },
        { t: '希望与梦想', s: {star:2,sun:1} },
        { t: '变化与成长', s: {tower:2,magician:1} }
      ]},
      { q: '朋友常说我的话是…', a: [
        { t: '"你总是那么开朗充满活力"', s: {sun:2,empress:1} },
        { t: '"你很会察言观色"', s: {moon:2,magician:1} },
        { t: '"你总是安慰我"', s: {star:2,strength:1} },
        { t: '"你一旦下定决心就会做到底"', s: {magician:2,tower:1} }
      ]},
      { q: '我的决策方式是…', a: [
        { t: '相信感觉和直觉', s: {moon:2,wheel:1} },
        { t: '逻辑分析后判断', s: {magician:2,tower:1} },
        { t: '顺势而为', s: {wheel:2,moon:1} },
        { t: '按照内心所想去做', s: {empress:2,sun:1} }
      ]},
      { q: '最害怕的事是…', a: [
        { t: '失去活力变得无力', s: {sun:2,magician:1} },
        { t: '没有人理解我的感情', s: {moon:2,star:1} },
        { t: '失去希望', s: {star:2,empress:1} },
        { t: '停滞不前没有变化', s: {tower:2,wheel:1} }
      ]},
      { q: '我最接近的弱点是…', a: [
        { t: '有时会冲动行事', s: {sun:2,tower:1} },
        { t: '过于被情绪左右', s: {moon:2,star:1} },
        { t: '优柔寡断，决定慢', s: {wheel:2,strength:1} },
        { t: '太过固执', s: {magician:2,tower:1} }
      ]},
      { q: '理想的结束一天的方式是…', a: [
        { t: '笑着入睡，觉得今天很开心', s: {sun:2,star:1} },
        { t: '独自安静地回味今天', s: {moon:2,strength:1} },
        { t: '制定明天的计划，满足地入睡', s: {magician:2,wheel:1} },
        { t: '和爱的人共度温馨时光', s: {empress:2,star:1} }
      ]},
      { q: '最能让我成长的是…', a: [
        { t: '失败后重新站起来的经历', s: {tower:2,strength:1} },
        { t: '诚实地审视自己的情感', s: {moon:2,star:1} },
        { t: '完成新挑战的成就感', s: {magician:2,sun:1} },
        { t: '自然流动的人生变化', s: {wheel:2,empress:1} }
      ]},
      { q: '现在最接近我内心感受的意象是…', a: [
        { t: '万里无云的晴朗天空', s: {sun:2,star:1} },
        { t: '月光倒映的平静夜海', s: {moon:2,wheel:1} },
        { t: '暴风中也不熄灭的火焰', s: {tower:2,strength:1} },
        { t: '繁花盛开的宁静花园', s: {empress:2,star:1} }
      ]}
    ]
  }
};
