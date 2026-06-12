/* ===========================================================
   나의 판타지 직업 테스트 (fantasy-job)
   8유형 × 12문항 × 4언어
   =========================================================== */

const TEST_FANTASY = {
  id: 'fantasy-job',
  emoji: '⚔️',

  resultLabel: {
    ko: '나의 판타지 직업은',
    en: 'Your fantasy job is',
    ja: '私のファンタジー職業は',
    zh: '我的奇幻职业是'
  },

  typeList: ['king','knight','wizard','bard','sage','merchant','healer','thief'],

  meta: {
    king:     { img: 'images/fantasy_king.jpg',     color: '#7c3aed', ink: '#fff' },
    knight:   { img: 'images/fantasy_knight.jpg',   color: '#2563eb', ink: '#fff' },
    wizard:   { img: 'images/fantasy_wizard.jpg',   color: '#1e3a8a', ink: '#fff' },
    bard:     { img: 'images/fantasy_bard.jpg',     color: '#d97706', ink: '#fff' },
    sage:     { img: 'images/fantasy_sage.jpg',     color: '#78716c', ink: '#fff' },
    merchant: { img: 'images/fantasy_merchant.jpg', color: '#b45309', ink: '#fff' },
    healer:   { img: 'images/fantasy_healer.jpg',   color: '#16a34a', ink: '#fff' },
    thief:    { img: 'images/fantasy_thief.jpg',    color: '#4c1d95', ink: '#fff' }
  },

  types: {
    king: {
      ko: { name: '👑 왕', tag: '#리더십 #카리스마 #결단력',
        desc: '당신은 타고난 리더입니다. 큰 그림을 보고 결단을 내리는 능력이 뛰어나며, 주변 사람들이 자연스럽게 당신을 따릅니다. 책임감이 강하고 목표를 향해 흔들리지 않는 왕의 기질을 가졌습니다.',
        best: 'knight', worst: 'thief' },
      en: { name: '👑 King', tag: '#Leadership #Charisma #Decisiveness',
        desc: 'You are a born leader. You excel at seeing the big picture and making bold decisions. People naturally follow you, and your strong sense of responsibility keeps you focused on your goals.',
        best: 'knight', worst: 'thief' },
      ja: { name: '👑 王様', tag: '#リーダーシップ #カリスマ #決断力',
        desc: 'あなたは生まれながらのリーダーです。大局を見て決断を下す能力に優れ、周囲の人々が自然とあなたについてきます。責任感が強く、目標に向かってぶれない王の気質を持っています。',
        best: 'knight', worst: 'thief' },
      zh: { name: '👑 国王', tag: '#领导力 #魅力 #决断力',
        desc: '你是天生的领导者。你善于看清大局并做出果断决策，周围的人自然而然地跟随你。你责任感强烈，目标明确，拥有真正王者的气质。',
        best: 'knight', worst: 'thief' }
    },
    knight: {
      ko: { name: '⚔️ 기사', tag: '#정의감 #용기 #충성심',
        desc: '당신은 정의를 위해 앞장서는 기사입니다. 옳고 그름이 분명하고, 약자를 보호하려는 본능이 강합니다. 어떤 상황에서도 원칙을 지키며 믿을 수 있는 사람으로 평가받습니다.',
        best: 'king', worst: 'thief' },
      en: { name: '⚔️ Knight', tag: '#Justice #Courage #Loyalty',
        desc: 'You are a knight who stands up for justice. You have a clear sense of right and wrong and a strong instinct to protect the weak. You are known as someone who keeps their principles no matter what.',
        best: 'king', worst: 'thief' },
      ja: { name: '⚔️ 騎士', tag: '#正義感 #勇気 #忠誠心',
        desc: 'あなたは正義のために先頭に立つ騎士です。善悪の判断が明確で、弱者を守ろうとする本能が強いです。どんな状況でも原則を守り、信頼できる人物として評価されます。',
        best: 'king', worst: 'thief' },
      zh: { name: '⚔️ 骑士', tag: '#正义感 #勇气 #忠诚',
        desc: '你是一位为正义而战的骑士。你对是非有清晰的判断，有强烈的保护弱者的本能。无论在什么情况下都坚守原则，被视为值得信赖的人。',
        best: 'king', worst: 'thief' }
    },
    wizard: {
      ko: { name: '🔮 마법사', tag: '#지적호기심 #분석력 #신비로움',
        desc: '당신은 세상의 이치를 탐구하는 마법사입니다. 남들이 보지 못하는 패턴을 발견하고, 깊이 있는 사고로 문제를 해결합니다. 혼자만의 시간을 소중히 여기며 지식을 쌓는 것에서 큰 보람을 느낍니다.',
        best: 'sage', worst: 'bard' },
      en: { name: '🔮 Wizard', tag: '#Curiosity #Analysis #Mystery',
        desc: 'You are a wizard who explores the secrets of the world. You spot patterns others miss and solve problems with deep, analytical thinking. You treasure your alone time and find great fulfillment in accumulating knowledge.',
        best: 'sage', worst: 'bard' },
      ja: { name: '🔮 魔法使い', tag: '#知的好奇心 #分析力 #神秘',
        desc: 'あなたは世界の理を探求する魔法使いです。他の人が見えないパターンを発見し、深い思考で問題を解決します。一人の時間を大切にし、知識を積み重ねることに大きなやりがいを感じます。',
        best: 'sage', worst: 'bard' },
      zh: { name: '🔮 魔法师', tag: '#求知欲 #分析力 #神秘',
        desc: '你是一位探索世界奥秘的魔法师。你能发现别人看不到的规律，用深邃的思维解决问题。你珍视独处的时间，从积累知识中获得巨大的成就感。',
        best: 'sage', worst: 'bard' }
    },
    bard: {
      ko: { name: '🎵 음유시인', tag: '#감수성 #표현력 #자유로움',
        desc: '당신은 세상을 노래로 물들이는 음유시인입니다. 감정 표현이 풍부하고 창의적이며, 어디서든 분위기를 밝게 만드는 재능이 있습니다. 자유롭게 떠돌며 새로운 이야기를 만들어가는 삶을 사랑합니다.',
        best: 'merchant', worst: 'wizard' },
      en: { name: '🎵 Bard', tag: '#Sensitivity #Expression #Freedom',
        desc: 'You are a bard who colors the world with song. You are emotionally expressive and creative, with a natural talent for brightening any atmosphere. You love a life of wandering freely and creating new stories.',
        best: 'merchant', worst: 'wizard' },
      ja: { name: '🎵 吟遊詩人', tag: '#感受性 #表現力 #自由',
        desc: 'あなたは世界を歌で彩る吟遊詩人です。感情表現が豊かで創造的、どこでも雰囲気を明るくする才能があります。自由に旅しながら新しい物語を作っていく人生を愛しています。',
        best: 'merchant', worst: 'wizard' },
      zh: { name: '🎵 游吟诗人', tag: '#感性 #表现力 #自由',
        desc: '你是一位用歌声为世界染色的游吟诗人。情感丰富而富有创意，天生有让任何场合都变得欢乐的才能。你热爱自由漫游、创造新故事的生活方式。',
        best: 'merchant', worst: 'wizard' }
    },
    sage: {
      ko: { name: '📖 현자', tag: '#지혜 #통찰력 #차분함',
        desc: '당신은 오랜 경험과 깊은 사색으로 지혜를 쌓은 현자입니다. 감정에 휩쓸리지 않고 상황을 객관적으로 바라보며, 주변 사람들에게 진심 어린 조언을 건넵니다. 말보다 행동으로 신뢰를 얻는 타입입니다.',
        best: 'wizard', worst: 'merchant' },
      en: { name: '📖 Sage', tag: '#Wisdom #Insight #Calm',
        desc: 'You are a sage who has built wisdom through long experience and deep reflection. You view situations objectively without being swept away by emotion, and you offer sincere advice to those around you. You earn trust through actions, not words.',
        best: 'wizard', worst: 'merchant' },
      ja: { name: '📖 賢者', tag: '#知恵 #洞察力 #穏やかさ',
        desc: 'あなたは長い経験と深い思索で知恵を積んだ賢者です。感情に流されず状況を客観的に見つめ、周囲の人々に真摯なアドバイスを贈ります。言葉より行動で信頼を得るタイプです。',
        best: 'wizard', worst: 'merchant' },
      zh: { name: '📖 智者', tag: '#智慧 #洞察力 #沉稳',
        desc: '你是一位通过丰富经验和深刻思考积累智慧的贤者。你不被情绪左右，客观地看待情况，向周围的人提供真诚的建议。你用行动而非语言赢得信任。',
        best: 'wizard', worst: 'merchant' }
    },
    merchant: {
      ko: { name: '💰 상인', tag: '#협상력 #실용주의 #사교성',
        desc: '당신은 기회를 놓치지 않는 타고난 상인입니다. 사람 사이의 관계를 잘 파악하고, 누구와도 금세 친해지는 사교성을 가졌습니다. 현실적인 판단력과 협상 능력으로 어떤 상황에서도 이득을 만들어냅니다.',
        best: 'bard', worst: 'sage' },
      en: { name: '💰 Merchant', tag: '#Negotiation #Pragmatism #Sociability',
        desc: 'You are a born merchant who never misses an opportunity. You read people well and have a sociable nature that lets you befriend anyone quickly. Your practical judgment and negotiation skills help you find advantage in any situation.',
        best: 'bard', worst: 'sage' },
      ja: { name: '💰 商人', tag: '#交渉力 #実用主義 #社交性',
        desc: 'あなたはチャンスを逃さない生まれながらの商人です。人間関係をよく把握し、誰とでもすぐに仲良くなれる社交性を持っています。現実的な判断力と交渉能力で、どんな状況でも利益を生み出します。',
        best: 'bard', worst: 'sage' },
      zh: { name: '💰 商人', tag: '#谈判力 #实用主义 #社交性',
        desc: '你是一个不会错过任何机会的天生商人。你善于洞察人际关系，拥有能与任何人迅速打成一片的社交能力。凭借务实的判断力和谈判技巧，在任何情况下都能创造利益。',
        best: 'bard', worst: 'sage' }
    },
    healer: {
      ko: { name: '🌿 치유사', tag: '#공감능력 #따뜻함 #헌신',
        desc: '당신은 상처 입은 이들을 어루만지는 치유사입니다. 타인의 감정을 섬세하게 읽고, 필요한 순간에 조용히 곁에 있어주는 능력이 탁월합니다. 자신보다 남을 먼저 생각하는 따뜻한 마음이 당신의 가장 큰 힘입니다.',
        best: 'knight', worst: 'thief' },
      en: { name: '🌿 Healer', tag: '#Empathy #Warmth #Dedication',
        desc: 'You are a healer who soothes the wounded. You read others\' emotions with great sensitivity and have an exceptional ability to quietly be there when someone needs you. Your warmth — always putting others before yourself — is your greatest strength.',
        best: 'knight', worst: 'thief' },
      ja: { name: '🌿 治癒師', tag: '#共感力 #温かさ #献身',
        desc: 'あなたは傷ついた人々を癒す治癒師です。他者の感情を繊細に読み取り、必要な瞬間に静かに寄り添う能力が卓越しています。自分より他者を先に思う温かい心があなたの最大の力です。',
        best: 'knight', worst: 'thief' },
      zh: { name: '🌿 治愈师', tag: '#共情能力 #温暖 #奉献',
        desc: '你是一位抚慰受伤者的治愈师。你能细腻地感知他人的情绪，在需要的时刻默默陪伴的能力出色。将他人置于自己之前的温暖之心，是你最大的力量。',
        best: 'knight', worst: 'thief' }
    },
    thief: {
      ko: { name: '🌙 도적', tag: '#눈치 #임기응변 #독립심',
        desc: '당신은 규칙보다 자신의 감각을 믿는 도적입니다. 상황 파악이 빠르고 틀에 얽매이지 않는 자유로운 사고방식을 가졌습니다. 혼자서도 충분히 살아남을 수 있는 강한 독립심과 생존 본능을 가진 매력적인 존재입니다.',
        best: 'bard', worst: 'king' },
      en: { name: '🌙 Thief', tag: '#Intuition #Adaptability #Independence',
        desc: 'You are a thief who trusts your instincts over rules. You read situations quickly and have a free-thinking mindset unconstrained by convention. You are a compelling person with a strong sense of independence and survival instinct — more than capable of making it on your own.',
        best: 'bard', worst: 'king' },
      ja: { name: '🌙 盗賊', tag: '#機転 #臨機応変 #独立心',
        desc: 'あなたはルールより自分の感覚を信じる盗賊です。状況把握が早く、型にはまらない自由な思考方式を持っています。一人でも十分に生き残れる強い独立心と生存本能を持つ、魅力的な存在です。',
        best: 'bard', worst: 'king' },
      zh: { name: '🌙 盗贼', tag: '#眼力 #随机应变 #独立',
        desc: '你是一个相信直觉胜过规则的盗贼。你能快速洞察局势，拥有不受常规束缚的自由思维。凭借强烈的独立意识和生存本能，你完全有能力独自闯荡，是个极具魅力的存在。',
        best: 'bard', worst: 'king' }
    }
  },

  questions: {
    ko: [
      { q: '친구들 사이에서 나는 보통…', a: [
        { t: '분위기를 이끄는 편이다', s: {king:2,knight:1} },
        { t: '묵묵히 옆에서 도와주는 편이다', s: {healer:2,sage:1} },
        { t: '재밌는 이야기로 분위기를 띄운다', s: {bard:2,merchant:1} },
        { t: '상황을 보며 조용히 관찰한다', s: {thief:2,wizard:1} }
      ]},
      { q: '주말에 가장 하고 싶은 것은?', a: [
        { t: '새로운 곳을 탐험하거나 여행 가기', s: {thief:2,bard:1} },
        { t: '조용히 책 읽거나 공부하기', s: {sage:2,wizard:1} },
        { t: '친구들과 신나게 놀기', s: {merchant:2,bard:1} },
        { t: '계획을 세우고 목표를 점검하기', s: {king:2,knight:1} }
      ]},
      { q: '내가 가장 중요하게 생각하는 가치는?', a: [
        { t: '정의와 원칙', s: {knight:2,king:1} },
        { t: '자유와 창의성', s: {bard:2,thief:1} },
        { t: '지식과 진리', s: {wizard:2,sage:1} },
        { t: '관계와 배려', s: {healer:2,merchant:1} }
      ]},
      { q: '팀 프로젝트에서 나는 주로…', a: [
        { t: '전체를 지휘하고 방향을 정한다', s: {king:2,knight:1} },
        { t: '묵묵히 실행에 집중한다', s: {knight:2,healer:1} },
        { t: '분위기를 살리고 아이디어를 낸다', s: {bard:2,merchant:1} },
        { t: '정보를 모아 분석하고 전략을 짠다', s: {wizard:2,sage:1} }
      ]},
      { q: '위기 상황에서 나는?', a: [
        { t: '앞에 나서서 문제를 해결한다', s: {king:2,knight:1} },
        { t: '침착하게 상황을 분석한다', s: {sage:2,wizard:1} },
        { t: '주변 사람들을 챙기며 안정시킨다', s: {healer:2,knight:1} },
        { t: '재빠르게 탈출구를 찾는다', s: {thief:2,merchant:1} }
      ]},
      { q: '나를 가장 잘 표현하는 단어는?', a: [
        { t: '카리스마', s: {king:2,bard:1} },
        { t: '다정함', s: {healer:2,bard:1} },
        { t: '냉철함', s: {wizard:2,sage:1} },
        { t: '영리함', s: {thief:2,merchant:1} }
      ]},
      { q: '싫어하는 상황은?', a: [
        { t: '내 의견이 무시당할 때', s: {king:2,knight:1} },
        { t: '주변이 너무 시끄럽고 혼란스러울 때', s: {sage:2,wizard:1} },
        { t: '규칙에 꽉 묶여 움직이지 못할 때', s: {thief:2,bard:1} },
        { t: '누군가 상처받는 것을 볼 때', s: {healer:2,knight:1} }
      ]},
      { q: '나의 약점에 가까운 것은?', a: [
        { t: '가끔 독단적으로 굴 때가 있다', s: {king:2,knight:1} },
        { t: '감정에 너무 쉽게 영향받는다', s: {healer:2,bard:1} },
        { t: '현실 감각이 떨어질 때가 있다', s: {wizard:2,sage:1} },
        { t: '규칙을 잘 안 지키려 한다', s: {thief:2,merchant:1} }
      ]},
      { q: '어떤 보상이 가장 동기부여가 되나요?', a: [
        { t: '사람들의 인정과 존경', s: {king:2,knight:1} },
        { t: '새로운 지식과 발견', s: {wizard:2,sage:1} },
        { t: '돈과 실질적인 이익', s: {merchant:2,thief:1} },
        { t: '누군가의 진심 어린 감사', s: {healer:2,bard:1} }
      ]},
      { q: '이상적인 나의 모습은?', a: [
        { t: '모두가 따르는 강한 리더', s: {king:2,knight:1} },
        { t: '자유롭게 세상을 누비는 여행자', s: {bard:2,thief:1} },
        { t: '모든 것을 꿰뚫는 지혜로운 사람', s: {sage:2,wizard:1} },
        { t: '필요한 사람 곁에 항상 있는 사람', s: {healer:2,merchant:1} }
      ]},
      { q: '친구가 고민을 털어놓을 때 나는?', a: [
        { t: '해결책을 찾아 조언해준다', s: {sage:2,king:1} },
        { t: '일단 충분히 들어주고 공감한다', s: {healer:2,bard:1} },
        { t: '재밌는 이야기로 기분을 전환시킨다', s: {bard:2,merchant:1} },
        { t: '문제의 핵심을 파악해 정확히 짚어준다', s: {wizard:2,knight:1} }
      ]},
      { q: '내가 살고 싶은 세계는?', a: [
        { t: '내가 왕으로서 나라를 다스리는 세계', s: {king:2,knight:1} },
        { t: '지식과 마법이 넘치는 신비로운 세계', s: {wizard:2,sage:1} },
        { t: '모험과 자유가 가득한 세계', s: {thief:2,bard:1} },
        { t: '모두가 평화롭게 공존하는 세계', s: {healer:2,merchant:1} }
      ]}
    ],

    en: [
      { q: 'Among my friends, I usually…', a: [
        { t: 'Take the lead and set the mood', s: {king:2,knight:1} },
        { t: 'Quietly support from the sidelines', s: {healer:2,sage:1} },
        { t: 'Liven things up with fun stories', s: {bard:2,merchant:1} },
        { t: 'Observe quietly and read the room', s: {thief:2,wizard:1} }
      ]},
      { q: 'What do I most want to do on the weekend?', a: [
        { t: 'Explore somewhere new or go on a trip', s: {thief:2,bard:1} },
        { t: 'Quietly read or study', s: {sage:2,wizard:1} },
        { t: 'Hang out and have fun with friends', s: {merchant:2,bard:1} },
        { t: 'Make plans and check on my goals', s: {king:2,knight:1} }
      ]},
      { q: 'The value I hold most dear is…', a: [
        { t: 'Justice and principle', s: {knight:2,king:1} },
        { t: 'Freedom and creativity', s: {bard:2,thief:1} },
        { t: 'Knowledge and truth', s: {wizard:2,sage:1} },
        { t: 'Relationships and caring for others', s: {healer:2,merchant:1} }
      ]},
      { q: 'In a team project, I usually…', a: [
        { t: 'Direct the whole group and set the course', s: {king:2,knight:1} },
        { t: 'Focus silently on execution', s: {knight:2,healer:1} },
        { t: 'Boost morale and generate ideas', s: {bard:2,merchant:1} },
        { t: 'Gather information, analyze, and strategize', s: {wizard:2,sage:1} }
      ]},
      { q: 'In a crisis, I…', a: [
        { t: 'Step forward and tackle the problem head-on', s: {king:2,knight:1} },
        { t: 'Stay calm and analyze the situation', s: {sage:2,wizard:1} },
        { t: 'Look after the people around me and keep them calm', s: {healer:2,knight:1} },
        { t: 'Quickly find a way out', s: {thief:2,merchant:1} }
      ]},
      { q: 'The word that best describes me is…', a: [
        { t: 'Charismatic', s: {king:2,bard:1} },
        { t: 'Warm-hearted', s: {healer:2,bard:1} },
        { t: 'Cool-headed', s: {wizard:2,sage:1} },
        { t: 'Clever', s: {thief:2,merchant:1} }
      ]},
      { q: 'A situation I really dislike is…', a: [
        { t: 'When my opinion is ignored', s: {king:2,knight:1} },
        { t: 'When things around me are too noisy and chaotic', s: {sage:2,wizard:1} },
        { t: 'When I\'m tied down by rules and can\'t move freely', s: {thief:2,bard:1} },
        { t: 'When I see someone getting hurt', s: {healer:2,knight:1} }
      ]},
      { q: 'My closest weakness is…', a: [
        { t: 'I can be overly stubborn at times', s: {king:2,knight:1} },
        { t: 'I\'m too easily affected by emotions', s: {healer:2,bard:1} },
        { t: 'I sometimes lose touch with practical reality', s: {wizard:2,sage:1} },
        { t: 'I tend to avoid following rules', s: {thief:2,merchant:1} }
      ]},
      { q: 'What reward motivates me most?', a: [
        { t: 'Recognition and respect from others', s: {king:2,knight:1} },
        { t: 'New knowledge and discoveries', s: {wizard:2,sage:1} },
        { t: 'Money and tangible gains', s: {merchant:2,thief:1} },
        { t: 'Someone\'s heartfelt gratitude', s: {healer:2,bard:1} }
      ]},
      { q: 'My ideal self is…', a: [
        { t: 'A strong leader everyone follows', s: {king:2,knight:1} },
        { t: 'A free traveler roaming the world', s: {bard:2,thief:1} },
        { t: 'A wise person who sees through everything', s: {sage:2,wizard:1} },
        { t: 'Someone who is always there for those who need them', s: {healer:2,merchant:1} }
      ]},
      { q: 'When a friend shares their worries with me, I…', a: [
        { t: 'Find solutions and give advice', s: {sage:2,king:1} },
        { t: 'Listen fully and show empathy first', s: {healer:2,bard:1} },
        { t: 'Cheer them up with a fun story', s: {bard:2,merchant:1} },
        { t: 'Get to the core of the problem and address it directly', s: {wizard:2,knight:1} }
      ]},
      { q: 'The world I want to live in is…', a: [
        { t: 'A world where I rule as king', s: {king:2,knight:1} },
        { t: 'A mysterious world full of knowledge and magic', s: {wizard:2,sage:1} },
        { t: 'A world full of adventure and freedom', s: {thief:2,bard:1} },
        { t: 'A world where everyone coexists in peace', s: {healer:2,merchant:1} }
      ]}
    ],

    ja: [
      { q: '友達の中で私はだいたい…', a: [
        { t: '雰囲気をリードする方だ', s: {king:2,knight:1} },
        { t: '黙って横でサポートする方だ', s: {healer:2,sage:1} },
        { t: '面白い話で場を盛り上げる', s: {bard:2,merchant:1} },
        { t: '状況を見ながら静かに観察する', s: {thief:2,wizard:1} }
      ]},
      { q: '週末に一番したいことは？', a: [
        { t: '新しい場所を探検したり旅に出たりする', s: {thief:2,bard:1} },
        { t: '静かに本を読んだり勉強したりする', s: {sage:2,wizard:1} },
        { t: '友達と思い切り遊ぶ', s: {merchant:2,bard:1} },
        { t: '計画を立てて目標を確認する', s: {king:2,knight:1} }
      ]},
      { q: '私が最も大切にしている価値観は？', a: [
        { t: '正義と原則', s: {knight:2,king:1} },
        { t: '自由と創造性', s: {bard:2,thief:1} },
        { t: '知識と真実', s: {wizard:2,sage:1} },
        { t: '人間関係と思いやり', s: {healer:2,merchant:1} }
      ]},
      { q: 'チームプロジェクトで私は主に…', a: [
        { t: '全体を指揮して方向を決める', s: {king:2,knight:1} },
        { t: '黙々と実行に集中する', s: {knight:2,healer:1} },
        { t: '雰囲気を盛り上げてアイデアを出す', s: {bard:2,merchant:1} },
        { t: '情報を集めて分析し戦略を立てる', s: {wizard:2,sage:1} }
      ]},
      { q: '危機の状況では？', a: [
        { t: '前に出て問題を解決する', s: {king:2,knight:1} },
        { t: '冷静に状況を分析する', s: {sage:2,wizard:1} },
        { t: '周りの人を気にかけて落ち着かせる', s: {healer:2,knight:1} },
        { t: '素早く逃げ道を探す', s: {thief:2,merchant:1} }
      ]},
      { q: '私を最もよく表す言葉は？', a: [
        { t: 'カリスマ', s: {king:2,bard:1} },
        { t: '優しさ', s: {healer:2,bard:1} },
        { t: '冷静さ', s: {wizard:2,sage:1} },
        { t: '賢さ', s: {thief:2,merchant:1} }
      ]},
      { q: '嫌いな状況は？', a: [
        { t: '自分の意見が無視されるとき', s: {king:2,knight:1} },
        { t: '周りがうるさくて混乱しているとき', s: {sage:2,wizard:1} },
        { t: 'ルールに縛られて動けないとき', s: {thief:2,bard:1} },
        { t: '誰かが傷つくのを見るとき', s: {healer:2,knight:1} }
      ]},
      { q: '自分の弱点に近いのは？', a: [
        { t: '時々独断的になることがある', s: {king:2,knight:1} },
        { t: '感情に左右されやすい', s: {healer:2,bard:1} },
        { t: '現実感覚が落ちることがある', s: {wizard:2,sage:1} },
        { t: 'ルールを守ろうとしない', s: {thief:2,merchant:1} }
      ]},
      { q: '最もやる気が出る報酬は？', a: [
        { t: '人々からの認定と尊敬', s: {king:2,knight:1} },
        { t: '新しい知識と発見', s: {wizard:2,sage:1} },
        { t: 'お金と実質的な利益', s: {merchant:2,thief:1} },
        { t: '誰かの心からの感謝', s: {healer:2,bard:1} }
      ]},
      { q: '理想の自分の姿は？', a: [
        { t: '皆がついてくる強いリーダー', s: {king:2,knight:1} },
        { t: '自由に世界を駆け回る旅人', s: {bard:2,thief:1} },
        { t: 'すべてを見通す知恵のある人', s: {sage:2,wizard:1} },
        { t: '必要な人のそばに常にいる人', s: {healer:2,merchant:1} }
      ]},
      { q: '友達が悩みを打ち明けるとき、私は？', a: [
        { t: '解決策を見つけてアドバイスする', s: {sage:2,king:1} },
        { t: 'まず十分に聞いて共感する', s: {healer:2,bard:1} },
        { t: '面白い話で気分転換させる', s: {bard:2,merchant:1} },
        { t: '問題の核心を把握して的確に指摘する', s: {wizard:2,knight:1} }
      ]},
      { q: '住みたい世界は？', a: [
        { t: '自分が王として国を治める世界', s: {king:2,knight:1} },
        { t: '知識と魔法があふれる神秘的な世界', s: {wizard:2,sage:1} },
        { t: '冒険と自由に満ちた世界', s: {thief:2,bard:1} },
        { t: '皆が平和に共存する世界', s: {healer:2,merchant:1} }
      ]}
    ],

    zh: [
      { q: '在朋友中，我通常…', a: [
        { t: '引领气氛的那种人', s: {king:2,knight:1} },
        { t: '默默在旁边支持的那种人', s: {healer:2,sage:1} },
        { t: '用有趣的故事活跃气氛', s: {bard:2,merchant:1} },
        { t: '观察局势、静静旁观', s: {thief:2,wizard:1} }
      ]},
      { q: '周末最想做的事是？', a: [
        { t: '探索新地方或去旅行', s: {thief:2,bard:1} },
        { t: '安静地读书或学习', s: {sage:2,wizard:1} },
        { t: '和朋友一起尽情玩耍', s: {merchant:2,bard:1} },
        { t: '制定计划并检查目标', s: {king:2,knight:1} }
      ]},
      { q: '我最看重的价值是？', a: [
        { t: '正义与原则', s: {knight:2,king:1} },
        { t: '自由与创造力', s: {bard:2,thief:1} },
        { t: '知识与真理', s: {wizard:2,sage:1} },
        { t: '人际关系与关怀', s: {healer:2,merchant:1} }
      ]},
      { q: '在团队项目中，我通常…', a: [
        { t: '指挥全局并确定方向', s: {king:2,knight:1} },
        { t: '默默专注于执行', s: {knight:2,healer:1} },
        { t: '活跃气氛并提出想法', s: {bard:2,merchant:1} },
        { t: '收集信息、分析并制定战略', s: {wizard:2,sage:1} }
      ]},
      { q: '遇到危机时，我会…', a: [
        { t: '站出来解决问题', s: {king:2,knight:1} },
        { t: '冷静分析情况', s: {sage:2,wizard:1} },
        { t: '照顾周围的人并安抚他们', s: {healer:2,knight:1} },
        { t: '迅速寻找出路', s: {thief:2,merchant:1} }
      ]},
      { q: '最能形容我的词是…', a: [
        { t: '魅力四射', s: {king:2,bard:1} },
        { t: '温暖体贴', s: {healer:2,bard:1} },
        { t: '冷静理智', s: {wizard:2,sage:1} },
        { t: '机智聪明', s: {thief:2,merchant:1} }
      ]},
      { q: '我讨厌的情况是？', a: [
        { t: '我的意见被忽视的时候', s: {king:2,knight:1} },
        { t: '周围太嘈杂混乱的时候', s: {sage:2,wizard:1} },
        { t: '被规则束缚无法行动的时候', s: {thief:2,bard:1} },
        { t: '看到有人受到伤害的时候', s: {healer:2,knight:1} }
      ]},
      { q: '我最接近的弱点是…', a: [
        { t: '有时候会过于独断', s: {king:2,knight:1} },
        { t: '太容易受情绪影响', s: {healer:2,bard:1} },
        { t: '有时候脱离现实', s: {wizard:2,sage:1} },
        { t: '不太愿意遵守规则', s: {thief:2,merchant:1} }
      ]},
      { q: '最能激励我的奖励是？', a: [
        { t: '他人的认可与尊重', s: {king:2,knight:1} },
        { t: '新知识与新发现', s: {wizard:2,sage:1} },
        { t: '金钱和实际利益', s: {merchant:2,thief:1} },
        { t: '某人发自内心的感谢', s: {healer:2,bard:1} }
      ]},
      { q: '理想中的自己是…', a: [
        { t: '所有人都追随的强大领导者', s: {king:2,knight:1} },
        { t: '自由漫游世界的旅行者', s: {bard:2,thief:1} },
        { t: '洞察一切的智慧之人', s: {sage:2,wizard:1} },
        { t: '随时在需要的人身边的人', s: {healer:2,merchant:1} }
      ]},
      { q: '朋友向我倾诉烦恼时，我会…', a: [
        { t: '找解决方案并给予建议', s: {sage:2,king:1} },
        { t: '先充分倾听并表示共情', s: {healer:2,bard:1} },
        { t: '用有趣的故事转换心情', s: {bard:2,merchant:1} },
        { t: '抓住问题核心并精准指出', s: {wizard:2,knight:1} }
      ]},
      { q: '我想生活的世界是…', a: [
        { t: '我作为国王统治国家的世界', s: {king:2,knight:1} },
        { t: '充满知识与魔法的神秘世界', s: {wizard:2,sage:1} },
        { t: '充满冒险与自由的世界', s: {thief:2,bard:1} },
        { t: '所有人和平共存的世界', s: {healer:2,merchant:1} }
      ]}
    ]
  }
};

