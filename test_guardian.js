/* ===========================================================
   나의 수호동물 테스트 (guardian-animal)
   8유형 × 12문항 × 4언어
   =========================================================== */

const TEST_GUARDIAN = {
  id: 'guardian-animal',
  emoji: '🐾',

  resultLabel: {
    ko: '나의 수호동물은',
    en: 'Your guardian animal is',
    ja: '私の守護動物は',
    zh: '我的守护动物是'
  },

  typeList: ['wolf','eagle','fox','bear','cat','deer','owl','dolphin'],

  meta: {
    wolf:    { img: 'images/guardian_wolf.jpg',    color: '#3b4d7a', ink: '#fff' },
    eagle:   { img: 'images/guardian_eagle.jpg',   color: '#2980b9', ink: '#fff' },
    fox:     { img: 'images/guardian_fox.jpg',     color: '#c0392b', ink: '#fff' },
    bear:    { img: 'images/guardian_bear.jpg',    color: '#795548', ink: '#fff' },
    cat:     { img: 'images/guardian_cat.jpg',     color: '#6c3483', ink: '#fff' },
    deer:    { img: 'images/guardian_deer.jpg',    color: '#27ae60', ink: '#fff' },
    owl:     { img: 'images/guardian_owl.jpg',     color: '#1a5276', ink: '#fff' },
    dolphin: { img: 'images/guardian_dolphin.jpg', color: '#0097a7', ink: '#fff' }
  },

  types: {
    wolf: {
      ko: { name: '🐺 늑대', tag: '#독립심 #본능 #리더십',
        desc: '당신의 수호동물은 늑대입니다. 강한 본능과 독립심으로 자신만의 길을 걸어가는 타입입니다. 혼자서도 충분히 강하지만, 신뢰하는 사람들과 함께할 때 진정한 힘을 발휘합니다. 자신의 감각을 믿고 흔들리지 않는 내면의 힘이 당신의 가장 큰 무기입니다.',
        best: 'eagle', worst: 'dolphin' },
      en: { name: '🐺 Wolf', tag: '#Independence #Instinct #Leadership',
        desc: 'Your guardian animal is the wolf. You walk your own path with strong instincts and fierce independence. While you are powerful on your own, you truly shine when alongside those you trust. Your unwavering inner strength and sharp instincts are your greatest weapons.',
        best: 'eagle', worst: 'dolphin' },
      ja: { name: '🐺 オオカミ', tag: '#独立心 #本能 #リーダーシップ',
        desc: 'あなたの守護動物はオオカミです。強い本能と独立心で自分だけの道を歩むタイプです。一人でも十分に強いですが、信頼する人たちと共にいるとき真の力を発揮します。自分の感覚を信じ、ぶれない内なる力があなたの最大の武器です。',
        best: 'eagle', worst: 'dolphin' },
      zh: { name: '🐺 狼', tag: '#独立心 #本能 #领导力',
        desc: '你的守护动物是狼。你凭借强烈的本能和独立心走着自己的路。独自一人也足够强大，但与信任的人在一起时才能发挥真正的力量。相信自己的感觉、坚定不移的内心力量是你最大的武器。',
        best: 'eagle', worst: 'dolphin' }
    },
    eagle: {
      ko: { name: '🦅 독수리', tag: '#통찰력 #자유 #큰그림',
        desc: '당신의 수호동물은 독수리입니다. 높은 곳에서 전체를 내려다보는 넓은 시야를 가진 타입입니다. 남들이 보지 못하는 것을 꿰뚫어 보는 통찰력과 어디에도 얽매이지 않는 자유로운 정신이 당신의 특징입니다. 목표를 정하면 정확하고 빠르게 나아갑니다.',
        best: 'wolf', worst: 'bear' },
      en: { name: '🦅 Eagle', tag: '#Insight #Freedom #BigPicture',
        desc: 'Your guardian animal is the eagle. You have a broad perspective, always viewing the whole picture from above. Your piercing insight — seeing what others cannot — and your free spirit untethered by convention define you. Once you set a goal, you move toward it with precision and speed.',
        best: 'wolf', worst: 'bear' },
      ja: { name: '🦅 ワシ', tag: '#洞察力 #自由 #大局観',
        desc: 'あなたの守護動物はワシです。高い場所から全体を見渡す広い視野を持つタイプです。他の人が見えないものを見通す洞察力と、どこにも縛られない自由な精神があなたの特徴です。目標を定めたら正確かつ素早く前進します。',
        best: 'wolf', worst: 'bear' },
      zh: { name: '🦅 鹰', tag: '#洞察力 #自由 #大局观',
        desc: '你的守护动物是鹰。你拥有从高处俯瞰全局的宽广视野。洞察他人看不到的事物的能力，以及不受任何束缚的自由精神是你的特征。一旦确定目标，便精准迅速地向前迈进。',
        best: 'wolf', worst: 'bear' }
    },
    fox: {
      ko: { name: '🦊 여우', tag: '#영리함 #임기응변 #매력',
        desc: '당신의 수호동물은 여우입니다. 어떤 상황에서도 재빠르게 최선책을 찾아내는 영리함이 돋보입니다. 타고난 매력으로 사람을 끌어당기며, 위기 상황일수록 빛을 발하는 타입입니다. 직관과 순발력으로 어떤 어려움도 유연하게 헤쳐나갑니다.',
        best: 'dolphin', worst: 'owl' },
      en: { name: '🦊 Fox', tag: '#Clever #Adaptable #Charming',
        desc: 'Your guardian animal is the fox. You stand out for your cleverness — always finding the best solution in any situation. Your natural charm draws people in, and you shine brightest when things get tough. You navigate any difficulty with intuition and quick thinking.',
        best: 'dolphin', worst: 'owl' },
      ja: { name: '🦊 キツネ', tag: '#賢さ #臨機応変 #魅力',
        desc: 'あなたの守護動物はキツネです。どんな状況でも素早く最善策を見つける賢さが際立ちます。生まれ持った魅力で人を引きつけ、危機的状況ほど輝くタイプです。直感と瞬発力でどんな困難も柔軟に乗り越えます。',
        best: 'dolphin', worst: 'owl' },
      zh: { name: '🦊 狐狸', tag: '#聪明 #随机应变 #魅力',
        desc: '你的守护动物是狐狸。在任何情况下都能迅速找到最佳方案的聪明才智令人瞩目。天生的魅力吸引着周围的人，越是危机时刻越能发光发热。凭借直觉和反应力灵活应对任何困难。',
        best: 'dolphin', worst: 'owl' }
    },
    bear: {
      ko: { name: '🐻 곰', tag: '#든든함 #보호본능 #여유',
        desc: '당신의 수호동물은 곰입니다. 묵직한 존재감으로 주변 사람들에게 안정감을 주는 타입입니다. 쉽게 흔들리지 않는 단단한 내면과 소중한 사람을 끝까지 지키려는 강한 보호 본능을 가졌습니다. 느긋해 보여도 결정적인 순간에는 누구보다 믿음직합니다.',
        best: 'deer', worst: 'eagle' },
      en: { name: '🐻 Bear', tag: '#Reliable #Protective #Easygoing',
        desc: 'Your guardian animal is the bear. You bring a sense of calm and stability to those around you through your solid, grounding presence. You have a strong inner core that does not easily waver, and a fierce protective instinct for those you care about. Easygoing on the surface, yet more dependable than anyone when it counts.',
        best: 'deer', worst: 'eagle' },
      ja: { name: '🐻 クマ', tag: '#頼もしさ #保護本能 #余裕',
        desc: 'あなたの守護動物はクマです。どっしりとした存在感で周りの人に安心感を与えるタイプです。簡単には揺らがない強い内面と、大切な人を最後まで守ろうとする強い保護本能を持っています。のんびりして見えても、ここぞという瞬間には誰よりも頼りになります。',
        best: 'deer', worst: 'eagle' },
      zh: { name: '🐻 熊', tag: '#可靠 #保护本能 #从容',
        desc: '你的守护动物是熊。你那沉稳的存在感给周围的人带来安全感。拥有不易动摇的坚定内心，以及守护重要之人到最后的强烈保护本能。看似从容淡定，在关键时刻却比任何人都值得信赖。',
        best: 'deer', worst: 'eagle' }
    },
    cat: {
      ko: { name: '🐱 고양이', tag: '#자유로움 #신비 #도도함',
        desc: '당신의 수호동물은 고양이입니다. 자신만의 페이스를 지키며 누구에게도 완전히 길들여지지 않는 자유로운 영혼입니다. 신비로운 매력을 품고 있으며, 깊이 신뢰하는 사람에게만 마음을 여는 특별함이 있습니다. 혼자만의 시간을 소중히 여기고 독립적인 삶을 추구합니다.',
        best: 'owl', worst: 'bear' },
      en: { name: '🐱 Cat', tag: '#Freedom #Mystery #Independence',
        desc: 'Your guardian animal is the cat. You are a free spirit who keeps your own pace and cannot be fully tamed by anyone. You carry a mysterious allure and only open your heart to those you deeply trust. You treasure your alone time and pursue an independent life on your own terms.',
        best: 'owl', worst: 'bear' },
      ja: { name: '🐱 ネコ', tag: '#自由 #神秘 #気まぐれ',
        desc: 'あなたの守護動物はネコです。自分だけのペースを守り、誰にも完全には懐かない自由な魂です。神秘的な魅力を持ち、深く信頼する人にだけ心を開く特別さがあります。一人の時間を大切にし、独立した生き方を追求します。',
        best: 'owl', worst: 'bear' },
      zh: { name: '🐱 猫', tag: '#自由 #神秘 #傲娇',
        desc: '你的守护动物是猫。你是一个保持自己节奏、不被任何人完全驯服的自由灵魂。拥有神秘的魅力，只向深深信任的人敞开心扉。珍视独处时光，追求独立自主的生活方式。',
        best: 'owl', worst: 'bear' }
    },
    deer: {
      ko: { name: '🦌 사슴', tag: '#섬세함 #공감 #순수함',
        desc: '당신의 수호동물은 사슴입니다. 타인의 감정을 섬세하게 읽어내는 뛰어난 공감 능력을 가진 타입입니다. 순수하고 따뜻한 마음으로 주변에 평화를 가져다주며, 아름다운 것과 감동적인 것에 민감하게 반응합니다. 조화로운 관계를 소중히 여기는 감성적인 사람입니다.',
        best: 'bear', worst: 'wolf' },
      en: { name: '🦌 Deer', tag: '#Sensitivity #Empathy #Purity',
        desc: 'Your guardian animal is the deer. You have an exceptional ability to read others\' emotions with great sensitivity. Your pure and warm heart brings peace to those around you, and you respond deeply to beauty and things that move the soul. You are an emotional person who cherishes harmonious relationships.',
        best: 'bear', worst: 'wolf' },
      ja: { name: '🦌 シカ', tag: '#繊細さ #共感 #純粋さ',
        desc: 'あなたの守護動物はシカです。他者の感情を繊細に読み取る優れた共感能力を持つタイプです。純粋で温かい心で周りに平和をもたらし、美しいものや感動的なものに敏感に反応します。調和のとれた関係を大切にする感性豊かな人です。',
        best: 'bear', worst: 'wolf' },
      zh: { name: '🦌 鹿', tag: '#细腻 #共情 #纯真',
        desc: '你的守护动物是鹿。你拥有出色的感知他人情绪的能力，极为细腻。纯洁温暖的心为周围带来平静，对美好的事物和令人感动的事情反应敏锐。你是一个珍视和谐关系的感性之人。',
        best: 'bear', worst: 'wolf' }
    },
    owl: {
      ko: { name: '🦉 올빼미', tag: '#지혜 #관찰력 #신중함',
        desc: '당신의 수호동물은 올빼미입니다. 깊이 생각하고 천천히 판단하는 지혜로운 타입입니다. 놓치는 것 없이 상황을 관찰하며, 말은 적지만 한마디 한마디에 무게가 있습니다. 겉으로 드러내지 않아도 가장 많이 알고 가장 깊이 이해하는 사람이 바로 당신입니다.',
        best: 'cat', worst: 'fox' },
      en: { name: '🦉 Owl', tag: '#Wisdom #Observation #Prudence',
        desc: 'Your guardian animal is the owl. You are a wise type who thinks deeply and judges carefully. You observe every situation without missing a thing, and though you speak little, every word carries weight. Without making a show of it, you are the one who knows the most and understands the deepest.',
        best: 'cat', worst: 'fox' },
      ja: { name: '🦉 フクロウ', tag: '#知恵 #観察力 #慎重さ',
        desc: 'あなたの守護動物はフクロウです。深く考え、ゆっくり判断する賢いタイプです。見逃しなく状況を観察し、口数は少ないですが一言一言に重みがあります。表には出さなくても、最もよく知り最も深く理解しているのはあなたです。',
        best: 'cat', worst: 'fox' },
      zh: { name: '🦉 猫头鹰', tag: '#智慧 #观察力 #谨慎',
        desc: '你的守护动物是猫头鹰。你是一个深思熟虑、慢慢判断的睿智类型。不遗漏任何细节地观察情况，话语虽少，但每一句都有分量。即使不表现出来，知道得最多、理解得最深的人正是你。',
        best: 'cat', worst: 'fox' }
    },
    dolphin: {
      ko: { name: '🐬 돌고래', tag: '#사교성 #유쾌함 #소통',
        desc: '당신의 수호동물은 돌고래입니다. 어디서든 밝은 에너지로 주변을 활기차게 만드는 타입입니다. 뛰어난 소통 능력과 유쾌한 성격으로 사람들 사이의 다리 역할을 합니다. 팀워크를 중요하게 여기며, 함께할수록 더 빛나는 사람입니다.',
        best: 'fox', worst: 'wolf' },
      en: { name: '🐬 Dolphin', tag: '#Sociable #Cheerful #Communication',
        desc: 'Your guardian animal is the dolphin. You energize every room you enter with your bright, positive energy. Your excellent communication skills and cheerful personality make you a natural bridge between people. You value teamwork deeply and shine even brighter when working alongside others.',
        best: 'fox', worst: 'wolf' },
      ja: { name: '🐬 イルカ', tag: '#社交性 #明るさ #コミュニケーション',
        desc: 'あなたの守護動物はイルカです。どこでも明るいエネルギーで周りを活気づけるタイプです。優れたコミュニケーション能力と明るい性格で人々の橋渡し役を果たします。チームワークを大切にし、共にいるほど輝く人です。',
        best: 'fox', worst: 'wolf' },
      zh: { name: '🐬 海豚', tag: '#社交性 #开朗 #沟通',
        desc: '你的守护动物是海豚。无论在哪里都用明亮的能量让周围充满活力。出色的沟通能力和开朗的性格使你成为人与人之间的桥梁。你重视团队合作，与他人在一起时越发光彩夺目。',
        best: 'fox', worst: 'wolf' }
    }
  },

  questions: {
    ko: [
      { q: '주말 아침, 나는 보통…', a: [
        { t: '일찍 일어나 혼자만의 시간을 즐긴다', s: {wolf:2,cat:1} },
        { t: '늦잠 자고 여유롭게 쉰다', s: {bear:2,deer:1} },
        { t: '친구에게 먼저 연락해 약속을 잡는다', s: {dolphin:2,fox:1} },
        { t: '계획을 세우고 하루를 시작한다', s: {eagle:2,owl:1} }
      ]},
      { q: '나를 가장 잘 표현하는 단어는?', a: [
        { t: '강인함', s: {wolf:2,eagle:1} },
        { t: '따뜻함', s: {bear:2,deer:1} },
        { t: '영리함', s: {fox:2,owl:1} },
        { t: '밝음', s: {dolphin:2,cat:1} }
      ]},
      { q: '힘든 일이 생겼을 때 나는?', a: [
        { t: '혼자 조용히 해결하려 한다', s: {wolf:2,cat:1} },
        { t: '믿을 수 있는 사람에게 털어놓는다', s: {bear:2,deer:1} },
        { t: '빠르게 상황을 파악하고 방법을 찾는다', s: {fox:2,eagle:1} },
        { t: '시간을 두고 깊이 생각한다', s: {owl:2,cat:1} }
      ]},
      { q: '모임에서 나는 주로…', a: [
        { t: '분위기를 주도하고 이야기를 이끈다', s: {dolphin:2,eagle:1} },
        { t: '조용히 있다가 중요한 말만 한다', s: {owl:2,wolf:1} },
        { t: '모두가 편안하도록 분위기를 맞춘다', s: {deer:2,bear:1} },
        { t: '재미있는 이야기로 웃음을 만든다', s: {fox:2,dolphin:1} }
      ]},
      { q: '나에게 가장 중요한 것은?', a: [
        { t: '자유와 독립', s: {wolf:2,cat:1} },
        { t: '안정과 신뢰', s: {bear:2,deer:1} },
        { t: '지식과 통찰', s: {owl:2,eagle:1} },
        { t: '관계와 즐거움', s: {dolphin:2,fox:1} }
      ]},
      { q: '낯선 사람을 처음 만날 때 나는?', a: [
        { t: '먼저 말을 걸고 금방 친해진다', s: {dolphin:2,fox:1} },
        { t: '천천히 관찰하며 신중하게 다가간다', s: {owl:2,wolf:1} },
        { t: '자연스럽게 내 매력을 발산한다', s: {cat:2,fox:1} },
        { t: '따뜻하게 대하며 편하게 해준다', s: {deer:2,bear:1} }
      ]},
      { q: '내가 선택하는 휴가 스타일은?', a: [
        { t: '혼자 자연 속에서 조용히 쉬기', s: {wolf:2,owl:1} },
        { t: '친구들과 신나게 여행하기', s: {dolphin:2,fox:1} },
        { t: '새로운 것을 배우고 탐험하기', s: {eagle:2,owl:1} },
        { t: '아무것도 안 하고 편안하게 쉬기', s: {bear:2,cat:1} }
      ]},
      { q: '갈등 상황에서 나는?', a: [
        { t: '원칙대로 당당하게 맞선다', s: {wolf:2,eagle:1} },
        { t: '조용히 중재하며 화해를 이끈다', s: {deer:2,bear:1} },
        { t: '상황을 분석해 현명하게 해결한다', s: {owl:2,fox:1} },
        { t: '유머로 긴장을 풀고 분위기를 바꾼다', s: {dolphin:2,fox:1} }
      ]},
      { q: '나의 단점에 가까운 것은?', a: [
        { t: '고집이 세고 타협하기 어렵다', s: {wolf:2,eagle:1} },
        { t: '감정에 쉽게 영향받는다', s: {deer:2,dolphin:1} },
        { t: '너무 계산적으로 보일 때가 있다', s: {fox:2,owl:1} },
        { t: '귀찮은 건 피하고 싶어한다', s: {bear:2,cat:1} }
      ]},
      { q: '친구가 나에 대해 자주 하는 말은?', a: [
        { t: '"넌 혼자서도 뭐든 잘해"', s: {wolf:2,cat:1} },
        { t: '"네 옆에 있으면 편안해"', s: {bear:2,deer:1} },
        { t: '"너는 어떻게 그런 생각을 해?"', s: {owl:2,fox:1} },
        { t: '"너 때문에 분위기가 살아나"', s: {dolphin:2,fox:1} }
      ]},
      { q: '가장 끌리는 삶의 방식은?', a: [
        { t: '자유롭게 내 길을 개척하는 삶', s: {wolf:2,eagle:1} },
        { t: '소중한 사람들과 따뜻하게 사는 삶', s: {bear:2,deer:1} },
        { t: '끊임없이 배우고 성장하는 삶', s: {owl:2,eagle:1} },
        { t: '즐겁고 활기차게 사람들과 함께하는 삶', s: {dolphin:2,fox:1} }
      ]},
      { q: '밤하늘을 보며 드는 생각은?', a: [
        { t: '저 광활함처럼 자유롭고 싶다', s: {eagle:2,wolf:1} },
        { t: '오늘 하루도 수고했다, 편안하다', s: {bear:2,deer:1} },
        { t: '저 별들에는 어떤 비밀이 있을까', s: {owl:2,cat:1} },
        { t: '좋은 사람들과 이 순간을 나누고 싶다', s: {dolphin:2,fox:1} }
      ]}
    ],

    en: [
      { q: 'On a weekend morning, I usually…', a: [
        { t: 'Wake up early and enjoy time alone', s: {wolf:2,cat:1} },
        { t: 'Sleep in and relax at my own pace', s: {bear:2,deer:1} },
        { t: 'Reach out to friends and make plans', s: {dolphin:2,fox:1} },
        { t: 'Make a plan and get the day started', s: {eagle:2,owl:1} }
      ]},
      { q: 'The word that best describes me is…', a: [
        { t: 'Strong', s: {wolf:2,eagle:1} },
        { t: 'Warm', s: {bear:2,deer:1} },
        { t: 'Clever', s: {fox:2,owl:1} },
        { t: 'Bright', s: {dolphin:2,cat:1} }
      ]},
      { q: 'When something difficult comes up, I…', a: [
        { t: 'Try to handle it quietly on my own', s: {wolf:2,cat:1} },
        { t: 'Open up to someone I trust', s: {bear:2,deer:1} },
        { t: 'Quickly read the situation and find a way', s: {fox:2,eagle:1} },
        { t: 'Take time and think it through deeply', s: {owl:2,cat:1} }
      ]},
      { q: 'At a social gathering, I usually…', a: [
        { t: 'Take the lead and drive the conversation', s: {dolphin:2,eagle:1} },
        { t: 'Stay quiet and only speak when it counts', s: {owl:2,wolf:1} },
        { t: 'Make sure everyone feels comfortable', s: {deer:2,bear:1} },
        { t: 'Keep the laughs coming with fun stories', s: {fox:2,dolphin:1} }
      ]},
      { q: 'What matters most to me is…', a: [
        { t: 'Freedom and independence', s: {wolf:2,cat:1} },
        { t: 'Stability and trust', s: {bear:2,deer:1} },
        { t: 'Knowledge and insight', s: {owl:2,eagle:1} },
        { t: 'Relationships and fun', s: {dolphin:2,fox:1} }
      ]},
      { q: 'When I meet a stranger for the first time, I…', a: [
        { t: 'Start talking right away and connect quickly', s: {dolphin:2,fox:1} },
        { t: 'Observe carefully and approach with caution', s: {owl:2,wolf:1} },
        { t: 'Naturally let my charm do the work', s: {cat:2,fox:1} },
        { t: 'Treat them warmly and make them feel at ease', s: {deer:2,bear:1} }
      ]},
      { q: 'My ideal vacation style is…', a: [
        { t: 'A quiet solo retreat in nature', s: {wolf:2,owl:1} },
        { t: 'A fun trip with friends', s: {dolphin:2,fox:1} },
        { t: 'Exploring and learning something new', s: {eagle:2,owl:1} },
        { t: 'Total relaxation with no agenda', s: {bear:2,cat:1} }
      ]},
      { q: 'In a conflict situation, I…', a: [
        { t: 'Stand my ground and face it head-on', s: {wolf:2,eagle:1} },
        { t: 'Quietly mediate and guide everyone toward peace', s: {deer:2,bear:1} },
        { t: 'Analyze the situation and resolve it wisely', s: {owl:2,fox:1} },
        { t: 'Use humor to ease the tension', s: {dolphin:2,fox:1} }
      ]},
      { q: 'My closest weakness is…', a: [
        { t: 'I can be stubborn and hard to compromise with', s: {wolf:2,eagle:1} },
        { t: 'I\'m easily affected by emotions', s: {deer:2,dolphin:1} },
        { t: 'I can come across as too calculating', s: {fox:2,owl:1} },
        { t: 'I tend to avoid hassle and effort', s: {bear:2,cat:1} }
      ]},
      { q: 'Something friends often say about me is…', a: [
        { t: '"You handle everything so well on your own"', s: {wolf:2,cat:1} },
        { t: '"I feel so calm when I\'m around you"', s: {bear:2,deer:1} },
        { t: '"How do you come up with that?"', s: {owl:2,fox:1} },
        { t: '"You always bring the energy"', s: {dolphin:2,fox:1} }
      ]},
      { q: 'The lifestyle I\'m most drawn to is…', a: [
        { t: 'Blazing my own trail freely', s: {wolf:2,eagle:1} },
        { t: 'Living warmly with the people I love', s: {bear:2,deer:1} },
        { t: 'Constantly learning and growing', s: {owl:2,eagle:1} },
        { t: 'Living joyfully alongside others', s: {dolphin:2,fox:1} }
      ]},
      { q: 'Looking up at the night sky, I think…', a: [
        { t: 'I want to be as free as that vast space', s: {eagle:2,wolf:1} },
        { t: 'What a good day — I feel at peace', s: {bear:2,deer:1} },
        { t: 'I wonder what secrets those stars hold', s: {owl:2,cat:1} },
        { t: 'I want to share this moment with the people I love', s: {dolphin:2,fox:1} }
      ]}
    ],

    ja: [
      { q: '週末の朝、私はたいてい…', a: [
        { t: '早起きして一人だけの時間を楽しむ', s: {wolf:2,cat:1} },
        { t: '朝寝坊してゆっくり休む', s: {bear:2,deer:1} },
        { t: '友達に先に連絡して約束を取り付ける', s: {dolphin:2,fox:1} },
        { t: '計画を立てて一日を始める', s: {eagle:2,owl:1} }
      ]},
      { q: '私を最もよく表す言葉は？', a: [
        { t: '強さ', s: {wolf:2,eagle:1} },
        { t: '温かさ', s: {bear:2,deer:1} },
        { t: '賢さ', s: {fox:2,owl:1} },
        { t: '明るさ', s: {dolphin:2,cat:1} }
      ]},
      { q: '辛いことが起きたとき、私は？', a: [
        { t: '一人で静かに解決しようとする', s: {wolf:2,cat:1} },
        { t: '信頼できる人に打ち明ける', s: {bear:2,deer:1} },
        { t: '素早く状況を把握して方法を探す', s: {fox:2,eagle:1} },
        { t: '時間をかけて深く考える', s: {owl:2,cat:1} }
      ]},
      { q: '集まりで私はたいてい…', a: [
        { t: '雰囲気を主導して会話を引っ張る', s: {dolphin:2,eagle:1} },
        { t: '静かにしていて重要なことだけ言う', s: {owl:2,wolf:1} },
        { t: 'みんなが居心地よいよう雰囲気を整える', s: {deer:2,bear:1} },
        { t: '面白い話で笑いを作る', s: {fox:2,dolphin:1} }
      ]},
      { q: '私にとって最も大切なものは？', a: [
        { t: '自由と独立', s: {wolf:2,cat:1} },
        { t: '安定と信頼', s: {bear:2,deer:1} },
        { t: '知識と洞察', s: {owl:2,eagle:1} },
        { t: '関係と楽しさ', s: {dolphin:2,fox:1} }
      ]},
      { q: '初めて会う人に対して私は？', a: [
        { t: '先に話しかけてすぐ仲良くなる', s: {dolphin:2,fox:1} },
        { t: 'ゆっくり観察して慎重に近づく', s: {owl:2,wolf:1} },
        { t: '自然に自分の魅力を発散する', s: {cat:2,fox:1} },
        { t: '温かく接して相手を楽にさせる', s: {deer:2,bear:1} }
      ]},
      { q: '私が選ぶ休暇スタイルは？', a: [
        { t: '一人で自然の中で静かに過ごす', s: {wolf:2,owl:1} },
        { t: '友達と楽しく旅行する', s: {dolphin:2,fox:1} },
        { t: '新しいことを学んで探検する', s: {eagle:2,owl:1} },
        { t: '何もしないでのんびり休む', s: {bear:2,cat:1} }
      ]},
      { q: '葛藤の状況で私は？', a: [
        { t: '原則通りに堂々と立ち向かう', s: {wolf:2,eagle:1} },
        { t: '静かに仲裁して和解を導く', s: {deer:2,bear:1} },
        { t: '状況を分析して賢く解決する', s: {owl:2,fox:1} },
        { t: 'ユーモアで緊張をほぐす', s: {dolphin:2,fox:1} }
      ]},
      { q: '私の短所に近いのは？', a: [
        { t: '頑固で妥協しにくい', s: {wolf:2,eagle:1} },
        { t: '感情に左右されやすい', s: {deer:2,dolphin:1} },
        { t: '計算高く見られることがある', s: {fox:2,owl:1} },
        { t: '面倒なことは避けたがる', s: {bear:2,cat:1} }
      ]},
      { q: '友達がよく言う私についての言葉は？', a: [
        { t: '「一人でも何でもできるね」', s: {wolf:2,cat:1} },
        { t: '「そばにいると落ち着く」', s: {bear:2,deer:1} },
        { t: '「どうしてそんな考えができるの？」', s: {owl:2,fox:1} },
        { t: '「あなたのおかげで場が盛り上がる」', s: {dolphin:2,fox:1} }
      ]},
      { q: '最も惹かれる生き方は？', a: [
        { t: '自由に自分の道を切り開く人生', s: {wolf:2,eagle:1} },
        { t: '大切な人たちと温かく暮らす人生', s: {bear:2,deer:1} },
        { t: '絶えず学んで成長する人生', s: {owl:2,eagle:1} },
        { t: '楽しく活気あふれる人生', s: {dolphin:2,fox:1} }
      ]},
      { q: '夜空を見上げて思うことは？', a: [
        { t: 'あの広大さのように自由になりたい', s: {eagle:2,wolf:1} },
        { t: '今日も一日お疲れ様、穏やかだな', s: {bear:2,deer:1} },
        { t: 'あの星々にはどんな秘密があるのだろう', s: {owl:2,cat:1} },
        { t: 'この瞬間を大切な人と分かち合いたい', s: {dolphin:2,fox:1} }
      ]}
    ],

    zh: [
      { q: '周末早上，我通常…', a: [
        { t: '早起享受独处时光', s: {wolf:2,cat:1} },
        { t: '睡懒觉悠闲休息', s: {bear:2,deer:1} },
        { t: '主动联系朋友约好碰面', s: {dolphin:2,fox:1} },
        { t: '制定计划开始新的一天', s: {eagle:2,owl:1} }
      ]},
      { q: '最能形容我的词是…', a: [
        { t: '坚强', s: {wolf:2,eagle:1} },
        { t: '温暖', s: {bear:2,deer:1} },
        { t: '聪明', s: {fox:2,owl:1} },
        { t: '开朗', s: {dolphin:2,cat:1} }
      ]},
      { q: '遇到困难时，我会…', a: [
        { t: '独自安静地解决', s: {wolf:2,cat:1} },
        { t: '向信任的人倾诉', s: {bear:2,deer:1} },
        { t: '迅速把握情况寻找解决方法', s: {fox:2,eagle:1} },
        { t: '花时间深思熟虑', s: {owl:2,cat:1} }
      ]},
      { q: '在聚会中，我通常…', a: [
        { t: '主导气氛引领对话', s: {dolphin:2,eagle:1} },
        { t: '保持安静只说重要的话', s: {owl:2,wolf:1} },
        { t: '让大家都感到舒适自在', s: {deer:2,bear:1} },
        { t: '用有趣的故事制造笑声', s: {fox:2,dolphin:1} }
      ]},
      { q: '对我来说最重要的是…', a: [
        { t: '自由与独立', s: {wolf:2,cat:1} },
        { t: '稳定与信任', s: {bear:2,deer:1} },
        { t: '知识与洞察', s: {owl:2,eagle:1} },
        { t: '关系与快乐', s: {dolphin:2,fox:1} }
      ]},
      { q: '第一次见到陌生人时，我会…', a: [
        { t: '主动搭话很快熟络起来', s: {dolphin:2,fox:1} },
        { t: '慢慢观察谨慎靠近', s: {owl:2,wolf:1} },
        { t: '自然地展现自己的魅力', s: {cat:2,fox:1} },
        { t: '热情对待让对方感到轻松', s: {deer:2,bear:1} }
      ]},
      { q: '我选择的假期方式是…', a: [
        { t: '独自在大自然中静静休息', s: {wolf:2,owl:1} },
        { t: '和朋友一起开心旅行', s: {dolphin:2,fox:1} },
        { t: '学习新事物并探索未知', s: {eagle:2,owl:1} },
        { t: '什么都不做轻松休息', s: {bear:2,cat:1} }
      ]},
      { q: '面对冲突时，我会…', a: [
        { t: '按原则堂堂正正地应对', s: {wolf:2,eagle:1} },
        { t: '悄悄调解引导和解', s: {deer:2,bear:1} },
        { t: '分析情况明智解决', s: {owl:2,fox:1} },
        { t: '用幽默化解紧张气氛', s: {dolphin:2,fox:1} }
      ]},
      { q: '我最接近的缺点是…', a: [
        { t: '固执，难以妥协', s: {wolf:2,eagle:1} },
        { t: '容易受情绪影响', s: {deer:2,dolphin:1} },
        { t: '有时显得过于算计', s: {fox:2,owl:1} },
        { t: '想要避免麻烦的事', s: {bear:2,cat:1} }
      ]},
      { q: '朋友经常说我的话是…', a: [
        { t: '"你自己一个人也什么都能做到"', s: {wolf:2,cat:1} },
        { t: '"在你身边感觉很安心"', s: {bear:2,deer:1} },
        { t: '"你怎么能想到这些？"', s: {owl:2,fox:1} },
        { t: '"有你在气氛就活跃起来了"', s: {dolphin:2,fox:1} }
      ]},
      { q: '最吸引我的生活方式是…', a: [
        { t: '自由开拓自己道路的人生', s: {wolf:2,eagle:1} },
        { t: '与重要的人温暖生活的人生', s: {bear:2,deer:1} },
        { t: '不断学习成长的人生', s: {owl:2,eagle:1} },
        { t: '快乐活跃地与人相处的人生', s: {dolphin:2,fox:1} }
      ]},
      { q: '仰望夜空时，脑海中浮现的是…', a: [
        { t: '想像那片广阔一样自由', s: {eagle:2,wolf:1} },
        { t: '今天也辛苦了，好安心', s: {bear:2,deer:1} },
        { t: '那些星星里有什么秘密呢', s: {owl:2,cat:1} },
        { t: '想和重要的人分享这个瞬间', s: {dolphin:2,fox:1} }
      ]}
    ]
  }
};
