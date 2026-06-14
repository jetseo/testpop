const TEST_WORK_SURVIVAL = {
  id: 'work-survival',
  emoji: '💼',
  resultLabel: {
    ko: '나의 직장 생존 유형',
    en: 'My Work Survival Type',
    ja: '私の職場生存タイプ',
    zh: '我的职场生存类型'
  },
  typeList: ['shadow','ace','diplomat','planner','clown','ghost','mentor','chameleon'],
  meta: {
    shadow:    { img:'images/work_shadow.jpg',    color:'#3d3d5c', ink:'#fff' },
    ace:       { img:'images/work_ace.jpg',       color:'#b22222', ink:'#fff' },
    diplomat:  { img:'images/work_diplomat.jpg',  color:'#1565c0', ink:'#fff' },
    planner:   { img:'images/work_planner.jpg',   color:'#2e7d32', ink:'#fff' },
    clown:     { img:'images/work_clown.jpg',     color:'#e65100', ink:'#fff' },
    ghost:     { img:'images/work_ghost.jpg',     color:'#4a4a4a', ink:'#fff' },
    mentor:    { img:'images/work_mentor.jpg',    color:'#5d4037', ink:'#fff' },
    chameleon: { img:'images/work_chameleon.jpg', color:'#00695c', ink:'#fff' }
  },
  types: {
    shadow: {
      ko: {
        name: '🗒️ 포스트잇 생존러',
        tag: '#조용한생존 #투명인간 #은근히핵심',
        desc: '당신은 절대 튀지 않지만, 없으면 회사가 돌아가지 않는 타입입니다. 모니터 옆에 붙은 포스트잇처럼 항상 거기 있었는데 언제 있었는지 모르는 존재. 불필요한 갈등은 피하고, 조용히 자기 일을 처리하는 것이 생존 전략입니다. 주변에서 "그 사람 원래 있었어?" 할 때 이미 중요한 일은 다 해놓은 상태예요.',
        best: 'mentor',
        worst: 'clown'
      },
      en: {
        name: '🗒️ Post-it Survivor',
        tag: '#QuietSurvivor #InvisibleForce #BackboneOfTheTeam',
        desc: 'You never stand out, but without you the office falls apart. Like a post-it note stuck to the monitor — always there, but nobody quite remembers when you arrived. Avoiding unnecessary conflict and quietly getting things done is your survival strategy. By the time people say "wait, were they always here?" — you\'ve already handled the important stuff.',
        best: 'mentor',
        worst: 'clown'
      },
      ja: {
        name: '🗒️ 付箋サバイバー',
        tag: '#静かな生存 #透明人間 #実は要の存在',
        desc: 'あなたは目立たないけれど、いないと会社が回らないタイプです。モニターの横に貼られた付箋のように、いつもそこにいるのにいつ来たか分からない存在。余計な衝突を避け、静かに自分の仕事をこなすのが生存戦略です。周りが「あの人、ずっといたっけ？」と言う頃には、重要な仕事はすべて終わっています。',
        best: 'mentor',
        worst: 'clown'
      },
      zh: {
        name: '🗒️ 便利贴生存者',
        tag: '#低调生存 #隐形存在 #默默扛起一切',
        desc: '你从不出风头，但没有你公司就转不动。就像贴在显示器旁边的便利贴——一直都在，却没人记得你什么时候出现的。避免不必要的冲突，安静地完成自己的工作，是你的生存策略。当别人说"那个人一直在吗？"的时候，你早就把重要的事情都处理好了。',
        best: 'mentor',
        worst: 'clown'
      }
    },
    ace: {
      ko: {
        name: '⚡ 에너지드링크 질주형',
        tag: '#성과머신 #항상풀가동 #번아웃직전',
        desc: '당신은 항상 최고 속도로 달리는 타입입니다. 마감 전날 밤새워도 결과물은 완벽하고, 팀에서 가장 많은 일을 처리합니다. 에너지드링크처럼 강렬하고 빠르지만, 언젠가는 바닥을 드러낼 수도 있어요. 성과로 모든 것을 증명하려는 욕구가 강하고, 인정받을 때 가장 큰 보람을 느끼는 타입입니다.',
        best: 'planner',
        worst: 'ghost'
      },
      en: {
        name: '⚡ Energy Drink Sprinter',
        tag: '#PerformanceMachine #AlwaysFullThrottle #PreBurnout',
        desc: 'You\'re the type who always runs at maximum speed. You can pull an all-nighter before a deadline and still deliver perfection — handling more work than anyone on the team. Like an energy drink, you\'re intense and fast, but the tank might run dry someday. You have a strong drive to prove yourself through results, and feel the most fulfilled when your efforts are recognized.',
        best: 'planner',
        worst: 'ghost'
      },
      ja: {
        name: '⚡ エナドリ疾走型',
        tag: '#成果マシン #常にフル稼働 #燃え尽き寸前',
        desc: 'あなたは常に最高速度で走るタイプです。締め切り前夜に徹夜しても完璧な成果物を出し、チームで最も多くの仕事をこなします。エナジードリンクのように強烈で速いですが、いつか底をつくかもしれません。成果で全てを証明しようとする欲求が強く、認められた時に最もやりがいを感じるタイプです。',
        best: 'planner',
        worst: 'ghost'
      },
      zh: {
        name: '⚡ 能量饮料冲刺型',
        tag: '#业绩机器 #永远全速运转 #濒临燃尽',
        desc: '你是那种永远以最高速度奔跑的类型。截止日期前通宵也能交出完美成果，处理的工作量比团队任何人都多。就像能量饮料一样强劲而快速，但总有一天可能会见底。你有强烈的通过成果证明自己的欲望，被认可时是你感到最有成就感的时刻。',
        best: 'planner',
        worst: 'ghost'
      }
    },
    diplomat: {
      ko: {
        name: '🤝 화이트보드 외교관',
        tag: '#인간관계마스터 #갈등중재자 #팀의접착제',
        desc: '당신은 회의실 화이트보드처럼 모두의 의견을 정리하고 방향을 잡아주는 사람입니다. 갈등이 생기면 자연스럽게 중간 역할을 맡고, 어떤 팀에서도 윤활유 같은 존재가 됩니다. 업무 능력보다 인간관계에서 더 빛나고, 사람들이 당신 주변에 모이는 이유를 본인만 모릅니다.',
        best: 'chameleon',
        worst: 'shadow'
      },
      en: {
        name: '🤝 Whiteboard Diplomat',
        tag: '#RelationshipMaster #ConflictMediator #TeamGlue',
        desc: 'Like a conference room whiteboard, you organize everyone\'s ideas and help the team find direction. When conflicts arise, you naturally step into the middle, becoming the lubricant in any team. You shine brighter in relationships than in raw task performance — and you\'re the only one who doesn\'t know why people keep gravitating toward you.',
        best: 'chameleon',
        worst: 'shadow'
      },
      ja: {
        name: '🤝 ホワイトボード外交官',
        tag: '#人間関係マスター #対立調停者 #チームの接着剤',
        desc: 'あなたは会議室のホワイトボードのように、みんなの意見を整理し方向性を示す人です。対立が生まれると自然に中間役を担い、どのチームでも潤滑油のような存在になります。業務能力よりも人間関係で輝き、なぜ人々があなたの周りに集まるのか、本人だけが気づいていません。',
        best: 'chameleon',
        worst: 'shadow'
      },
      zh: {
        name: '🤝 白板外交官',
        tag: '#人际关系大师 #冲突调解者 #团队粘合剂',
        desc: '你就像会议室的白板，整理所有人的意见，帮团队找到方向。出现矛盾时，你自然而然地担任中间人，成为任何团队的润滑剂。你在人际关系上比纯粹的工作能力更加耀眼，人们聚集在你周围的原因，只有你自己不知道。',
        best: 'chameleon',
        worst: 'shadow'
      }
    },
    planner: {
      ko: {
        name: '📋 다이어리 철벽형',
        tag: '#계획의신 #리스크제로 #빈칸공포증',
        desc: '당신의 다이어리에는 빈칸이 없습니다. 모든 일은 데드라인 3일 전에 끝나고, 돌발 상황에도 이미 플랜B가 준비되어 있어요. 꼼꼼함이 최고의 무기인 당신은 실수율이 팀에서 가장 낮습니다. 다만 완벽한 계획을 세우다가 시작이 늦어지는 것만 주의하면 됩니다.',
        best: 'ace',
        worst: 'clown'
      },
      en: {
        name: '📋 Planner Fortress',
        tag: '#MasterOfPlans #ZeroRisk #BlankPagePhobia',
        desc: 'There are no blank pages in your planner. Every task is done three days before the deadline, and you already have Plan B ready for any surprise. Your meticulousness is your greatest weapon — your error rate is the lowest on the team. Just watch out for spending so long perfecting the plan that you delay the start.',
        best: 'ace',
        worst: 'clown'
      },
      ja: {
        name: '📋 手帳鉄壁型',
        tag: '#計画の神 #リスクゼロ #空白恐怖症',
        desc: 'あなたの手帳に空白はありません。すべての仕事は締め切り3日前に終わり、突発的な状況にもすでにプランBが用意されています。几帳面さが最大の武器で、チームでミスが最も少ないのはあなたです。ただし、完璧な計画を立てようとして始まりが遅れることだけ気をつければ大丈夫です。',
        best: 'ace',
        worst: 'clown'
      },
      zh: {
        name: '📋 日程本铁壁型',
        tag: '#计划之神 #零风险 #空白恐惧症',
        desc: '你的日程本里没有空白。所有事情都在截止日期前三天完成，突发情况也已经准备好了B计划。细致入微是你最大的武器，你的失误率在团队中是最低的。只需注意不要因为追求完美的计划而推迟开始。',
        best: 'ace',
        worst: 'clown'
      }
    },
    clown: {
      ko: {
        name: '🍬 간식바구니 메이커',
        tag: '#분위기왕 #웃음제조기 #팀의비타민',
        desc: '당신이 있으면 팀 분위기가 달라집니다. 간식 바구니처럼 지칠 때 꺼내먹을 수 있는 존재, 월요일 아침을 버티게 해주는 힘. 유머와 공감 능력으로 팀의 텐션을 끌어올리고, 어떤 갈등도 한방에 녹여버리는 능력이 있어요. 업무 능력은 기본, 분위기 관리가 진짜 특기입니다.',
        best: 'diplomat',
        worst: 'planner'
      },
      en: {
        name: '🍬 Snack Basket Maker',
        tag: '#MoodMaster #LaughterGenerator #TeamVitamin',
        desc: 'When you\'re around, the whole team\'s energy shifts. Like a snack basket, you\'re there to pick people up when they\'re drained — the reason everyone survives Monday mornings. Your humor and empathy lift the team\'s spirits, and you have an uncanny ability to dissolve any conflict in an instant. Your actual work skills are solid, but mood management is your real superpower.',
        best: 'diplomat',
        worst: 'planner'
      },
      ja: {
        name: '🍬 お菓子バスケットメーカー',
        tag: '#雰囲気王 #笑い製造機 #チームのビタミン',
        desc: 'あなたがいるとチームの雰囲気が変わります。お菓子バスケットのように疲れた時に頼れる存在、月曜の朝を乗り越えさせてくれる力。ユーモアと共感力でチームのテンションを上げ、どんな対立も一発で溶かしてしまう能力があります。業務能力はもちろん、雰囲気管理が本当の特技です。',
        best: 'diplomat',
        worst: 'planner'
      },
      zh: {
        name: '🍬 零食篮子制造者',
        tag: '#氛围王者 #欢笑制造机 #团队维生素',
        desc: '有你在，团队氛围就会不一样。就像零食篮子，在大家疲惫时给予能量，是让人撑过周一早晨的力量。凭借幽默感和共情能力提振团队士气，有化解任何矛盾的能力。工作能力是基础，氛围管理才是真正的拿手好戏。',
        best: 'diplomat',
        worst: 'planner'
      }
    },
    ghost: {
      ko: {
        name: '🛗 칼퇴 엘리베이터형',
        tag: '#칼퇴의달인 #워라밸수호자 #6시엔없음',
        desc: '6시 정각, 당신은 이미 1층입니다. 일과 삶의 경계를 철저히 지키고, 불필요한 야근은 절대 하지 않는 워라밸 수호자. 업무 시간엔 누구보다 집중해서 처리하기 때문에 칼퇴가 가능한 거예요. "왜 벌써 가요?"라는 말에 흔들리지 않는 멘탈을 가졌습니다.',
        best: 'shadow',
        worst: 'ace'
      },
      en: {
        name: '🛗 Sharp-Exit Elevator',
        tag: '#ClockOutMaster #WorkLifeBalanceGuardian #GoneAt6',
        desc: 'At 6:00 sharp, you\'re already on the ground floor. You guard the boundary between work and life with iron discipline, and unnecessary overtime is simply not in your vocabulary. You can clock out on time because you focus harder than anyone during work hours. You have the mental fortitude to ignore "why are you leaving already?" without a second thought.',
        best: 'shadow',
        worst: 'ace'
      },
      ja: {
        name: '🛗 ジャスト退勤エレベーター型',
        tag: '#定時退勤の達人 #ワークライフバランス守護者 #6時にはいない',
        desc: '18時ちょうど、あなたはすでに1階にいます。仕事とプライベートの境界を徹底的に守り、不要な残業は絶対にしないワークライフバランスの守護者。勤務時間中は誰よりも集中して仕事をするから定時退勤が可能なんです。「もう帰るんですか？」という言葉に動じないメンタルを持っています。',
        best: 'shadow',
        worst: 'ace'
      },
      zh: {
        name: '🛗 准点下班电梯型',
        tag: '#准点下班达人 #工作生活平衡守护者 #6点消失',
        desc: '六点整，你已经在一楼了。严格守护工作与生活的界限，绝不做不必要的加班，是工作生活平衡的守护者。正因为在工作时间比任何人都更专注，才能准时下班。面对"这么早就走？"的质问，你有纹丝不动的心态。',
        best: 'shadow',
        worst: 'ace'
      }
    },
    mentor: {
      ko: {
        name: '☕ 낡은 머그컵 멘토',
        tag: '#조용한고수 #후배의구심점 #연륜의힘',
        desc: '당신은 말은 적지만 한마디 할 때는 핵심을 찌릅니다. 오래된 머그컵처럼 낡아 보여도 제일 믿음직하고, 손때가 탈수록 가치가 올라가는 타입. 후배들이 힘들 때 먼저 달려가진 않지만, 조용히 기다리다 딱 필요한 말을 건넵니다. 당신 옆에 있으면 왠지 든든한 이유가 있어요.',
        best: 'shadow',
        worst: 'ace'
      },
      en: {
        name: '☕ Old Mug Mentor',
        tag: '#QuietMaster #JuniorAnchor #WisdomOfExperience',
        desc: 'You say little, but when you do speak, it cuts right to the heart of things. Like an old mug, you might not look flashy, but you\'re the most reliable thing around — and your value only grows with time. You don\'t rush to juniors when they\'re struggling, but you quietly wait and then say exactly what they need to hear. There\'s a reason people feel at ease standing next to you.',
        best: 'shadow',
        worst: 'ace'
      },
      ja: {
        name: '☕ 古いマグカップメンター',
        tag: '#静かな達人 #後輩の拠り所 #経験の力',
        desc: 'あなたは口数は少ないですが、一言発する時は核心をついています。古いマグカップのように古びて見えても一番頼りになり、使い込むほど価値が上がるタイプ。後輩が辛い時に先に駆け寄るわけではないですが、静かに待ってからちょうど必要な言葉をかけます。あなたの隣にいるとなぜか心強い理由があります。',
        best: 'shadow',
        worst: 'ace'
      },
      zh: {
        name: '☕ 旧马克杯导师',
        tag: '#低调高手 #后辈的定心石 #经验的力量',
        desc: '你话不多，但开口时总能切中要害。就像一只旧马克杯，看起来不起眼，却是最可靠的存在——越用越有价值。后辈困难时你不会第一个冲上去，但你静静等待，在恰当的时候说出他们最需要听的话。站在你旁边总会莫名地感到踏实，这是有原因的。',
        best: 'shadow',
        worst: 'ace'
      }
    },
    chameleon: {
      ko: {
        name: '🎧 무선이어폰 적응형',
        tag: '#어디서든연결 #팀바팀적응 #생존유연성',
        desc: '당신은 어느 팀에 가도 2주면 완전히 녹아드는 타입입니다. 무선 이어폰처럼 어떤 기기에도 연결되고, 상황에 따라 주파수를 바꾸는 능력이 탁월합니다. 팀의 분위기를 빠르게 읽고, 지금 이 팀에 필요한 역할을 자연스럽게 채웁니다. 적응력이 최고의 무기이지만, 가끔 나다운 게 뭔지 헷갈릴 때도 있어요.',
        best: 'diplomat',
        worst: 'planner'
      },
      en: {
        name: '🎧 Wireless Earbuds Adapter',
        tag: '#ConnectsAnywhere #TeamByTeamAdaptation #SurvivalFlexibility',
        desc: 'You blend into any team within two weeks, no matter where you\'re placed. Like wireless earbuds, you can connect to any device and switch frequencies depending on the situation. You read the team\'s vibe quickly and naturally fill whatever role they need most. Adaptability is your greatest weapon — though sometimes you might wonder what "being yourself" actually means.',
        best: 'diplomat',
        worst: 'planner'
      },
      ja: {
        name: '🎧 ワイヤレスイヤホン適応型',
        tag: '#どこでも接続 #チーム別適応 #生存柔軟性',
        desc: 'あなたはどのチームに行っても2週間で完全に溶け込むタイプです。ワイヤレスイヤホンのようにどんな機器にも接続でき、状況に応じて周波数を変える能力が卓越しています。チームの雰囲気を素早く読み取り、今このチームに必要な役割を自然に埋めます。適応力が最大の武器ですが、時々自分らしさが何か迷う時もあります。',
        best: 'diplomat',
        worst: 'planner'
      },
      zh: {
        name: '🎧 无线耳机适应型',
        tag: '#随处连接 #随队适应 #生存灵活性',
        desc: '你去哪个团队，两周内就能完全融入。就像无线耳机，能连接任何设备，根据情况切换频率的能力卓越。你能迅速读懂团队氛围，自然而然地填补团队最需要的角色。适应力是你最大的武器，但有时也会迷惑于"真正的自己"是什么。',
        best: 'diplomat',
        worst: 'planner'
      }
    }
  },
  questions: {
    ko: [
      {
        q: '월요일 아침, 팀 단톡에 공지가 올라왔다. 나의 반응은?',
        a: [
          { t: '읽씹하고 내 할 일 먼저 정리한다', s: { shadow:2, planner:1 } },
          { t: '"저 담당할게요!" 바로 손든다', s: { ace:2, diplomat:1 } },
          { t: '"다들 무슨 생각이에요?" 반응 먼저 살핀다', s: { diplomat:2, chameleon:1 } },
          { t: '일단 커피부터 마시고 생각한다', s: { ghost:2, mentor:1 } }
        ]
      },
      {
        q: '회의 중 아무도 의견을 안 내고 침묵이 흐를 때, 나는?',
        a: [
          { t: '조용히 자료만 들여다본다', s: { shadow:2, planner:1 } },
          { t: '준비한 의견을 바로 꺼낸다', s: { ace:2, planner:1 } },
          { t: '"A씨는 어떻게 생각해요?" 다른 사람을 끌어들인다', s: { diplomat:2, chameleon:1 } },
          { t: '분위기를 깨는 농담으로 긴장을 푼다', s: { clown:2, diplomat:1 } }
        ]
      },
      {
        q: '갑자기 야근 요청이 들어왔다. 나의 대응은?',
        a: [
          { t: '미리 처리해둔 게 있어서 사실 필요 없다', s: { planner:2, ace:1 } },
          { t: '당연히 한다. 어차피 성과가 중요하니까', s: { ace:2, shadow:1 } },
          { t: '팀원들 상황 먼저 파악하고 결정한다', s: { diplomat:2, mentor:1 } },
          { t: '이미 약속이 있어서 정중히 거절한다', s: { ghost:2, chameleon:1 } }
        ]
      },
      {
        q: '팀에 신입이 들어왔다. 나의 자연스러운 행동은?',
        a: [
          { t: '내 일에 집중, 물어보면 대답해준다', s: { shadow:2, ghost:1 } },
          { t: '업무 잘하는 법 바로 알려준다', s: { ace:2, mentor:1 } },
          { t: '팀에 잘 적응하도록 먼저 챙겨준다', s: { diplomat:2, clown:1 } },
          { t: '언젠가 딱 필요한 순간에 조언한다', s: { mentor:2, shadow:1 } }
        ]
      },
      {
        q: '내가 실수를 해서 상사에게 지적을 받았다. 나는?',
        a: [
          { t: '조용히 수긍하고 혼자 복기한다', s: { shadow:2, planner:1 } },
          { t: '즉시 원인 파악하고 재발 방지책을 만든다', s: { planner:2, ace:1 } },
          { t: '팀원들한테 먼저 상황 공유하고 도움 요청한다', s: { diplomat:2, chameleon:1 } },
          { t: '"제가 쏠게요" 하며 분위기 전환한다', s: { clown:2, ghost:1 } }
        ]
      },
      {
        q: '점심 메뉴를 결정해야 하는데 팀원들 의견이 제각각일 때, 나는?',
        a: [
          { t: '아무거나 괜찮다고 한다', s: { shadow:2, chameleon:1 } },
          { t: '"그럼 A로 가죠" 빠르게 결정한다', s: { ace:2, planner:1 } },
          { t: '투표를 제안한다', s: { diplomat:2, planner:1 } },
          { t: '"저번엔 B 먹었으니 오늘은 C 어때요?" 중재한다', s: { mentor:2, diplomat:1 } }
        ]
      },
      {
        q: '오늘 퇴근 후 계획은?',
        a: [
          { t: '칼퇴 후 나만의 루틴 즐기기', s: { ghost:2, shadow:1 } },
          { t: '자기계발 강의나 운동', s: { ace:2, planner:1 } },
          { t: '팀원들이랑 저녁 한 잔', s: { diplomat:2, clown:1 } },
          { t: '그냥 집에서 쉬기, 내일을 위해', s: { mentor:2, ghost:1 } }
        ]
      },
      {
        q: '같은 팀 동료가 심각하게 힘들어 보인다. 나는?',
        a: [
          { t: '눈치채도 먼저 다가가기 어렵다', s: { shadow:2, ghost:1 } },
          { t: '"도움 필요하면 말해" 하고 실질적 지원을 제안한다', s: { ace:2, planner:1 } },
          { t: '가볍게 말 걸며 자연스럽게 털어놓게 유도한다', s: { diplomat:2, clown:1 } },
          { t: '딱 적당한 타이밍에 커피 한 잔 건넨다', s: { mentor:2, chameleon:1 } }
        ]
      },
      {
        q: '팀 프로젝트에서 나의 자연스러운 역할은?',
        a: [
          { t: '묵묵히 맡은 파트를 완성하는 사람', s: { shadow:2, planner:1 } },
          { t: '가장 많은 분량을 가져가는 에이스', s: { ace:2, ghost:1 } },
          { t: '역할 분배하고 일정 조율하는 사람', s: { diplomat:2, planner:1 } },
          { t: '분위기 살리고 중간중간 팀 결속력 챙기는 사람', s: { clown:2, mentor:1 } }
        ]
      },
      {
        q: '회사에서 나를 한 마디로 표현한다면?',
        a: [
          { t: '"없는 듯 있는 듯, 근데 없으면 안 되는"', s: { shadow:2, mentor:1 } },
          { t: '"저 사람 진짜 일 잘해"', s: { ace:2, planner:1 } },
          { t: '"분위기 메이커, 없으면 회식이 안 돼"', s: { clown:2, diplomat:1 } },
          { t: '"칼같이 퇴근하는데 욕은 못 하겠어"', s: { ghost:2, chameleon:1 } }
        ]
      },
      {
        q: '새로운 팀으로 발령이 났다. 첫 날 나의 모습은?',
        a: [
          { t: '조용히 관찰하며 분위기 파악한다', s: { shadow:2, chameleon:1 } },
          { t: '빠르게 업무 파악하고 기여 포인트 찾는다', s: { ace:2, planner:1 } },
          { t: '팀원 한 명씩 말 걸며 친해지려 한다', s: { diplomat:2, clown:1 } },
          { t: '있는 듯 없는 듯 자연스럽게 스며든다', s: { chameleon:2, ghost:1 } }
        ]
      },
      {
        q: '연말 인사평가 시즌이 됐다. 나의 마음은?',
        a: [
          { t: '내가 한 일은 알아서 보이겠지 (무덤덤)', s: { shadow:2, ghost:1 } },
          { t: '성과 정리 문서를 이미 만들어뒀다', s: { ace:2, planner:1 } },
          { t: '좋은 평가보다 팀 분위기가 더 신경쓰인다', s: { diplomat:2, mentor:1 } },
          { t: '사실 별로 안 떨린다, 워라밸이 더 중요', s: { ghost:2, chameleon:1 } }
        ]
      }
    ],
    en: [
      {
        q: 'Monday morning — a notice pops up in the team chat. Your reaction?',
        a: [
          { t: 'Mark it as read and organize my own tasks first', s: { shadow:2, planner:1 } },
          { t: '"I\'ll handle it!" — instantly volunteer', s: { ace:2, diplomat:1 } },
          { t: '"What does everyone think?" — gauge reactions first', s: { diplomat:2, chameleon:1 } },
          { t: 'Get a coffee first, think later', s: { ghost:2, mentor:1 } }
        ]
      },
      {
        q: 'Dead silence in a meeting — nobody\'s sharing opinions. You:',
        a: [
          { t: 'Quietly stare at the documents', s: { shadow:2, planner:1 } },
          { t: 'Immediately share a prepared opinion', s: { ace:2, planner:1 } },
          { t: '"What do you think, [name]?" — pull someone in', s: { diplomat:2, chameleon:1 } },
          { t: 'Break the tension with a joke', s: { clown:2, diplomat:1 } }
        ]
      },
      {
        q: 'Sudden overtime request. Your response?',
        a: [
          { t: 'Already handled it in advance — not needed', s: { planner:2, ace:1 } },
          { t: 'Of course. Results are what matter', s: { ace:2, shadow:1 } },
          { t: 'Check on teammates\' situations before deciding', s: { diplomat:2, mentor:1 } },
          { t: 'Politely decline — already have plans', s: { ghost:2, chameleon:1 } }
        ]
      },
      {
        q: 'A new hire joins the team. What do you naturally do?',
        a: [
          { t: 'Focus on my work, answer if asked', s: { shadow:2, ghost:1 } },
          { t: 'Immediately share tips on how to perform well', s: { ace:2, mentor:1 } },
          { t: 'Proactively help them settle in', s: { diplomat:2, clown:1 } },
          { t: 'Wait for the right moment to offer advice', s: { mentor:2, shadow:1 } }
        ]
      },
      {
        q: 'Your manager calls you out for a mistake. You:',
        a: [
          { t: 'Accept it quietly and review it alone', s: { shadow:2, planner:1 } },
          { t: 'Immediately find the cause and build a prevention plan', s: { planner:2, ace:1 } },
          { t: 'Share the situation with teammates and ask for help', s: { diplomat:2, chameleon:1 } },
          { t: '"Drinks on me" — pivot the atmosphere', s: { clown:2, ghost:1 } }
        ]
      },
      {
        q: 'Lunch debate — everyone wants something different. You:',
        a: [
          { t: '"Anything\'s fine with me"', s: { shadow:2, chameleon:1 } },
          { t: '"Let\'s go with A" — make the call fast', s: { ace:2, planner:1 } },
          { t: 'Suggest a vote', s: { diplomat:2, planner:1 } },
          { t: '"We had B last time, how about C today?" — mediate', s: { mentor:2, diplomat:1 } }
        ]
      },
      {
        q: 'What\'s your plan after work today?',
        a: [
          { t: 'Clock out sharp and enjoy my personal routine', s: { ghost:2, shadow:1 } },
          { t: 'Self-improvement class or workout', s: { ace:2, planner:1 } },
          { t: 'Grab drinks with teammates', s: { diplomat:2, clown:1 } },
          { t: 'Rest at home — saving energy for tomorrow', s: { mentor:2, ghost:1 } }
        ]
      },
      {
        q: 'A teammate looks seriously burned out. You:',
        a: [
          { t: 'Notice but find it hard to approach first', s: { shadow:2, ghost:1 } },
          { t: '"Let me know if you need help" — offer concrete support', s: { ace:2, planner:1 } },
          { t: 'Casually start a conversation to let them open up', s: { diplomat:2, clown:1 } },
          { t: 'Hand them a coffee at exactly the right moment', s: { mentor:2, chameleon:1 } }
        ]
      },
      {
        q: 'What\'s your natural role in a team project?',
        a: [
          { t: 'Quietly completing my assigned part', s: { shadow:2, planner:1 } },
          { t: 'The ace who takes on the biggest workload', s: { ace:2, ghost:1 } },
          { t: 'Distributing roles and coordinating schedules', s: { diplomat:2, planner:1 } },
          { t: 'Keeping morale up and team bonds strong', s: { clown:2, mentor:1 } }
        ]
      },
      {
        q: 'How would your coworkers describe you in one line?',
        a: [
          { t: '"Barely noticeable, but essential"', s: { shadow:2, mentor:1 } },
          { t: '"That person is seriously good at their job"', s: { ace:2, planner:1 } },
          { t: '"The mood-maker — team dinners don\'t work without them"', s: { clown:2, diplomat:1 } },
          { t: '"Clocks out like clockwork but nobody can complain"', s: { ghost:2, chameleon:1 } }
        ]
      },
      {
        q: 'You\'re transferred to a new team. What does day one look like?',
        a: [
          { t: 'Quietly observe and read the room', s: { shadow:2, chameleon:1 } },
          { t: 'Quickly grasp the work and find where I can contribute', s: { ace:2, planner:1 } },
          { t: 'Talk to teammates one by one to build rapport', s: { diplomat:2, clown:1 } },
          { t: 'Blend in naturally, barely noticeable', s: { chameleon:2, ghost:1 } }
        ]
      },
      {
        q: 'Year-end performance review season. Your headspace?',
        a: [
          { t: 'My work will speak for itself (unbothered)', s: { shadow:2, ghost:1 } },
          { t: 'Already prepared a results summary doc', s: { ace:2, planner:1 } },
          { t: 'More concerned about team vibes than ratings', s: { diplomat:2, mentor:1 } },
          { t: 'Not really nervous — work-life balance matters more', s: { ghost:2, chameleon:1 } }
        ]
      }
    ],
    ja: [
      {
        q: '月曜の朝、チームのグループチャットに連絡が来た。あなたの反応は？',
        a: [
          { t: '既読にして自分のタスクを先に整理する', s: { shadow:2, planner:1 } },
          { t: '「私がやります！」すぐに手を挙げる', s: { ace:2, diplomat:1 } },
          { t: '「みんなどう思う？」先に反応を見る', s: { diplomat:2, chameleon:1 } },
          { t: 'まずコーヒーを飲んでから考える', s: { ghost:2, mentor:1 } }
        ]
      },
      {
        q: '会議中に誰も意見を出さず沈黙が続いている。あなたは？',
        a: [
          { t: '静かに資料を見つめる', s: { shadow:2, planner:1 } },
          { t: '準備していた意見をすぐに出す', s: { ace:2, planner:1 } },
          { t: '「○○さんはどう思いますか？」と他の人を巻き込む', s: { diplomat:2, chameleon:1 } },
          { t: '場の空気を和らげる冗談を言う', s: { clown:2, diplomat:1 } }
        ]
      },
      {
        q: '突然残業を頼まれた。あなたの対応は？',
        a: [
          { t: '事前に済ませてあるので実は不要', s: { planner:2, ace:1 } },
          { t: 'もちろんやる。結果が大事だから', s: { ace:2, shadow:1 } },
          { t: 'チームメンバーの状況を先に確認してから決める', s: { diplomat:2, mentor:1 } },
          { t: '予定があるので丁重に断る', s: { ghost:2, chameleon:1 } }
        ]
      },
      {
        q: 'チームに新入社員が入ってきた。あなたが自然にすることは？',
        a: [
          { t: '自分の仕事に集中し、聞かれたら答える', s: { shadow:2, ghost:1 } },
          { t: '仕事のコツをすぐに教える', s: { ace:2, mentor:1 } },
          { t: 'チームに馴染めるよう先に気にかける', s: { diplomat:2, clown:1 } },
          { t: 'ちょうど必要な時にアドバイスする', s: { mentor:2, shadow:1 } }
        ]
      },
      {
        q: 'ミスをして上司に指摘された。あなたは？',
        a: [
          { t: '静かに認めて一人で振り返る', s: { shadow:2, planner:1 } },
          { t: 'すぐに原因を特定して再発防止策を作る', s: { planner:2, ace:1 } },
          { t: 'チームメンバーに状況を共有してサポートを求める', s: { diplomat:2, chameleon:1 } },
          { t: '「奢ります」と言って場の雰囲気を変える', s: { clown:2, ghost:1 } }
        ]
      },
      {
        q: 'ランチのメニューを決める際にみんなの意見がバラバラ。あなたは？',
        a: [
          { t: 'なんでもいいと言う', s: { shadow:2, chameleon:1 } },
          { t: '「じゃあAにしましょう」とさっさと決める', s: { ace:2, planner:1 } },
          { t: '投票を提案する', s: { diplomat:2, planner:1 } },
          { t: '「前回Bだったから今日はCどう？」と調整する', s: { mentor:2, diplomat:1 } }
        ]
      },
      {
        q: '今日の退勤後の予定は？',
        a: [
          { t: 'ジャスト退勤して自分のルーティンを楽しむ', s: { ghost:2, shadow:1 } },
          { t: '自己啓発講座や運動', s: { ace:2, planner:1 } },
          { t: 'チームメンバーと飲みに行く', s: { diplomat:2, clown:1 } },
          { t: '明日のためにゆっくり休む', s: { mentor:2, ghost:1 } }
        ]
      },
      {
        q: 'チームの同僚が深刻に辛そうに見える。あなたは？',
        a: [
          { t: '気づいても先に近づくのが難しい', s: { shadow:2, ghost:1 } },
          { t: '「困ったら言って」と具体的なサポートを申し出る', s: { ace:2, planner:1 } },
          { t: '軽く話しかけて自然に打ち明けられるよう誘導する', s: { diplomat:2, clown:1 } },
          { t: 'ちょうどいいタイミングでコーヒーを差し出す', s: { mentor:2, chameleon:1 } }
        ]
      },
      {
        q: 'チームプロジェクトでの自然な役割は？',
        a: [
          { t: '黙々と担当パートを仕上げる人', s: { shadow:2, planner:1 } },
          { t: '一番多くの分量を引き受けるエース', s: { ace:2, ghost:1 } },
          { t: '役割分担とスケジュール調整をする人', s: { diplomat:2, planner:1 } },
          { t: '雰囲気を盛り上げてチームの絆を維持する人', s: { clown:2, mentor:1 } }
        ]
      },
      {
        q: '会社でのあなたを一言で表すなら？',
        a: [
          { t: '「いるかいないか分からないけど、いないと困る」', s: { shadow:2, mentor:1 } },
          { t: '「あの人、本当に仕事できる」', s: { ace:2, planner:1 } },
          { t: '「雰囲気メーカー、いないと飲み会が成り立たない」', s: { clown:2, diplomat:1 } },
          { t: '「きっかり退勤するけど文句は言えない」', s: { ghost:2, chameleon:1 } }
        ]
      },
      {
        q: '新しいチームに異動になった。初日のあなたは？',
        a: [
          { t: '静かに観察して雰囲気を把握する', s: { shadow:2, chameleon:1 } },
          { t: '素早く業務を把握して貢献できるポイントを探す', s: { ace:2, planner:1 } },
          { t: 'チームメンバー一人ひとりに話しかけて仲良くなろうとする', s: { diplomat:2, clown:1 } },
          { t: 'いるかいないか分からないほど自然に溶け込む', s: { chameleon:2, ghost:1 } }
        ]
      },
      {
        q: '年末の人事評価シーズンになった。あなたの気持ちは？',
        a: [
          { t: '自分がしたことは自然と見えるだろう（平常心）', s: { shadow:2, ghost:1 } },
          { t: '成果まとめの資料はすでに作ってある', s: { ace:2, planner:1 } },
          { t: '評価よりチームの雰囲気の方が気になる', s: { diplomat:2, mentor:1 } },
          { t: '実はあまり緊張しない、ワークライフバランスの方が大事', s: { ghost:2, chameleon:1 } }
        ]
      }
    ],
    zh: [
      {
        q: '周一早上，团队群里发来通知。你的反应是？',
        a: [
          { t: '已读，先整理自己的任务', s: { shadow:2, planner:1 } },
          { t: '"我来！"立刻举手', s: { ace:2, diplomat:1 } },
          { t: '"大家怎么看？"先观察反应', s: { diplomat:2, chameleon:1 } },
          { t: '先喝杯咖啡再说', s: { ghost:2, mentor:1 } }
        ]
      },
      {
        q: '会议中没人发言，陷入沉默。你会？',
        a: [
          { t: '静静地盯着资料', s: { shadow:2, planner:1 } },
          { t: '立刻提出准备好的意见', s: { ace:2, planner:1 } },
          { t: '"××，你怎么看？"把别人拉进来', s: { diplomat:2, chameleon:1 } },
          { t: '用一个玩笑打破紧张气氛', s: { clown:2, diplomat:1 } }
        ]
      },
      {
        q: '突然被要求加班。你的应对是？',
        a: [
          { t: '早就处理好了，其实不需要加班', s: { planner:2, ace:1 } },
          { t: '当然加。成果最重要', s: { ace:2, shadow:1 } },
          { t: '先了解队员情况再决定', s: { diplomat:2, mentor:1 } },
          { t: '有约在先，礼貌拒绝', s: { ghost:2, chameleon:1 } }
        ]
      },
      {
        q: '团队来了新人。你自然会做的是？',
        a: [
          { t: '专注自己的工作，有问题再回答', s: { shadow:2, ghost:1 } },
          { t: '立刻告诉他怎么把工作做好', s: { ace:2, mentor:1 } },
          { t: '主动关心，帮他融入团队', s: { diplomat:2, clown:1 } },
          { t: '等到恰当时机再给建议', s: { mentor:2, shadow:1 } }
        ]
      },
      {
        q: '自己犯了错误被上司指出。你会？',
        a: [
          { t: '静静接受，独自复盘', s: { shadow:2, planner:1 } },
          { t: '立即找出原因，制定防范措施', s: { planner:2, ace:1 } },
          { t: '先向队员说明情况并寻求帮助', s: { diplomat:2, chameleon:1 } },
          { t: '"我请客"转移气氛', s: { clown:2, ghost:1 } }
        ]
      },
      {
        q: '午饭时间大家意见不一。你会？',
        a: [
          { t: '"什么都行"', s: { shadow:2, chameleon:1 } },
          { t: '"就去A吧"快速拍板', s: { ace:2, planner:1 } },
          { t: '提议投票决定', s: { diplomat:2, planner:1 } },
          { t: '"上次吃B了，今天C怎么样？"居中调和', s: { mentor:2, diplomat:1 } }
        ]
      },
      {
        q: '今天下班后的计划？',
        a: [
          { t: '准时下班，享受自己的例行活动', s: { ghost:2, shadow:1 } },
          { t: '自我提升课程或健身', s: { ace:2, planner:1 } },
          { t: '和队员一起吃饭喝酒', s: { diplomat:2, clown:1 } },
          { t: '在家好好休息，为明天储备能量', s: { mentor:2, ghost:1 } }
        ]
      },
      {
        q: '同事看起来非常疲惫。你会？',
        a: [
          { t: '发现了但很难主动上前', s: { shadow:2, ghost:1 } },
          { t: '"需要帮忙就说"，提供具体支持', s: { ace:2, planner:1 } },
          { t: '随意搭话，让他自然地倾诉', s: { diplomat:2, clown:1 } },
          { t: '在恰好的时机递上一杯咖啡', s: { mentor:2, chameleon:1 } }
        ]
      },
      {
        q: '在团队项目中你自然担任的角色是？',
        a: [
          { t: '默默完成自己负责部分的人', s: { shadow:2, planner:1 } },
          { t: '承担最多工作量的王牌', s: { ace:2, ghost:1 } },
          { t: '分配角色、协调进度的人', s: { diplomat:2, planner:1 } },
          { t: '活跃气氛、维护团队凝聚力的人', s: { clown:2, mentor:1 } }
        ]
      },
      {
        q: '用一句话形容公司里的你？',
        a: [
          { t: '"感觉不存在，但没有不行"', s: { shadow:2, mentor:1 } },
          { t: '"那个人工作真的很厉害"', s: { ace:2, planner:1 } },
          { t: '"氛围担当，没他聚餐都不好玩"', s: { clown:2, diplomat:1 } },
          { t: '"准时下班但没人敢说什么"', s: { ghost:2, chameleon:1 } }
        ]
      },
      {
        q: '被调到新团队。第一天的你是什么样子？',
        a: [
          { t: '静静观察，摸清氛围', s: { shadow:2, chameleon:1 } },
          { t: '迅速了解工作，寻找贡献点', s: { ace:2, planner:1 } },
          { t: '逐一与队员搭话，努力打好关系', s: { diplomat:2, clown:1 } },
          { t: '不知不觉就融入了，几乎感觉不到', s: { chameleon:2, ghost:1 } }
        ]
      },
      {
        q: '年终绩效考核季到了。你的心情？',
        a: [
          { t: '我做的事自然会被看到（平静）', s: { shadow:2, ghost:1 } },
          { t: '成果总结文档早就准备好了', s: { ace:2, planner:1 } },
          { t: '比起考核结果，更在意团队氛围', s: { diplomat:2, mentor:1 } },
          { t: '其实不太紧张，工作生活平衡更重要', s: { ghost:2, chameleon:1 } }
        ]
      }
    ]
  }
};
