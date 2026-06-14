const TEST_STARTUP = {
  id: 'startup',
  emoji: '🚀',
  resultLabel: {
    ko: '내가 창업한다면',
    en: 'My Startup Type',
    ja: '私のスタートアップ',
    zh: '我的创业类型'
  },
  typeList: ['tech','platform','commerce','space','finance','content','luxury','health'],
  meta: {
    tech:     { img:'images/startup_tech.jpg',     color:'#1a2f6e', ink:'#fff' },
    platform: { img:'images/startup_platform.jpg', color:'#7c4dff', ink:'#fff' },
    commerce: { img:'images/startup_commerce.jpg', color:'#e65100', ink:'#fff' },
    space:    { img:'images/startup_space.jpg',    color:'#0d1b2a', ink:'#fff' },
    finance:  { img:'images/startup_finance.jpg',  color:'#b8860b', ink:'#fff' },
    content:  { img:'images/startup_content.jpg',  color:'#c2185b', ink:'#fff' },
    luxury:   { img:'images/startup_luxury.jpg',   color:'#4a0072', ink:'#fff' },
    health:   { img:'images/startup_health.jpg',   color:'#2e7d32', ink:'#fff' }
  },
  types: {
    tech: {
      ko: {
        name: '🤖 AI 테크 스타트업',
        tag: '#혁신 #미래기술 #천재형',
        desc: '당신은 기술로 세상을 바꾸는 비전을 가진 창업가입니다. 복잡한 문제를 논리적으로 분석하고, 아무도 생각 못한 해결책을 찾아냅니다. 팀원들은 당신의 날카로운 통찰력에 감탄하지만, 때론 너무 앞서나가는 탓에 따라오기 벅차다고 느끼기도 해요. 완벽한 제품을 향한 집착이 곧 당신의 경쟁력입니다.',
        best: 'space',
        worst: 'luxury'
      },
      en: {
        name: '🤖 AI Tech Startup',
        tag: '#Innovation #FutureTech #Genius',
        desc: 'You\'re a visionary who believes technology can change the world. You dissect complex problems with razor-sharp logic and find solutions nobody else imagined. Your team is in awe of your insights, though sometimes you move so fast they struggle to keep up. Your obsession with the perfect product is exactly what gives you the edge.',
        best: 'space',
        worst: 'luxury'
      },
      ja: {
        name: '🤖 AIテックスタートアップ',
        tag: '#革新 #未来技術 #天才型',
        desc: 'あなたはテクノロジーで世界を変えるビジョンを持つ起業家です。複雑な問題を論理的に分析し、誰も思いつかない解決策を見つけ出します。チームメンバーはあなたの鋭い洞察力に感心しますが、時には先を行きすぎてついていくのが大変だと感じることも。完璧な製品へのこだわりがあなたの競争力です。',
        best: 'space',
        worst: 'luxury'
      },
      zh: {
        name: '🤖 AI科技创业公司',
        tag: '#创新 #未来技术 #天才型',
        desc: '你是一位相信科技能改变世界的创业者。你用犀利的逻辑剖析复杂问题，找到别人想不到的解决方案。团队对你的洞察力叹为观止，但有时你走得太快，让他们难以跟上。对完美产品的执着正是你的核心竞争力。',
        best: 'space',
        worst: 'luxury'
      }
    },
    platform: {
      ko: {
        name: '📱 SNS 플랫폼 스타트업',
        tag: '#연결 #커뮤니티 #성장해킹',
        desc: '당신은 사람과 사람을 연결하는 데 천재적인 감각을 가지고 있습니다. 트렌드를 누구보다 빠르게 읽고, 사용자가 무엇을 원하는지 직감적으로 파악합니다. 소셜 네트워크처럼 인맥이 넓고, 그 인맥을 자산으로 만드는 능력이 탁월합니다. 숫자보다 사람을 중심에 두는 것이 당신만의 경영 철학이에요.',
        best: 'content',
        worst: 'finance'
      },
      en: {
        name: '📱 Social Platform Startup',
        tag: '#Connection #Community #GrowthHacking',
        desc: 'You have a genius for connecting people. You read trends faster than anyone and intuitively understand what users want. Like a social network yourself, your web of connections is vast — and you have an incredible talent for turning relationships into assets. People, not numbers, are at the center of your business philosophy.',
        best: 'content',
        worst: 'finance'
      },
      ja: {
        name: '📱 SNSプラットフォームスタートアップ',
        tag: '#つながり #コミュニティ #成長',
        desc: 'あなたは人と人をつなぐことに天才的なセンスを持っています。トレンドを誰よりも早く読み取り、ユーザーが何を求めているかを直感的に把握します。SNSのように人脈が広く、その人脈を資産に変える能力が卓越しています。数字よりも人を中心に置くのがあなたの経営哲学です。',
        best: 'content',
        worst: 'finance'
      },
      zh: {
        name: '📱 社交平台创业公司',
        tag: '#连接 #社区 #增长黑客',
        desc: '你有连接人与人的天才直觉。你比任何人都更快地捕捉趋势，凭直觉了解用户需要什么。你的人脉像社交网络一样广泛，将关系转化为资产的能力卓越。以人为中心而非数字，是你独特的经营哲学。',
        best: 'content',
        worst: 'finance'
      }
    },
    commerce: {
      ko: {
        name: '🛒 이커머스 제국',
        tag: '#전략 #효율 #물류왕',
        desc: '당신은 숫자와 시스템으로 제국을 건설하는 타입입니다. 비용 구조, 마진, 재고 최적화... 이런 단어들이 오히려 설레게 느껴진다면 바로 당신! 감보다 데이터를 믿고, 작은 비효율도 그냥 넘기지 않습니다. 냉철한 판단력으로 경쟁자를 압도하고, 결국엔 시장을 지배하는 스타일이에요.',
        best: 'finance',
        worst: 'content'
      },
      en: {
        name: '🛒 E-commerce Empire',
        tag: '#Strategy #Efficiency #LogisticsKing',
        desc: 'You\'re the type who builds empires with numbers and systems. Cost structures, margins, inventory optimization — if these words excite you, that\'s your sign. You trust data over gut feelings and never let even a small inefficiency slide. Your cold-blooded judgment overwhelms the competition, and you\'ll end up dominating the market.',
        best: 'finance',
        worst: 'content'
      },
      ja: {
        name: '🛒 Eコマース帝国',
        tag: '#戦略 #効率 #物流王',
        desc: 'あなたは数字とシステムで帝国を築くタイプです。コスト構造、マージン、在庫最適化…こういった言葉がむしろワクワクするなら、まさにあなた！感よりデータを信頼し、小さな非効率も見逃しません。冷静な判断力で競合を圧倒し、最終的には市場を支配するスタイルです。',
        best: 'finance',
        worst: 'content'
      },
      zh: {
        name: '🛒 电商帝国',
        tag: '#战略 #效率 #物流之王',
        desc: '你是用数字和系统构建帝国的类型。成本结构、利润率、库存优化……如果这些词让你兴奋，那就是你了！你信任数据而非直觉，绝不放过任何小小的低效。凭借冷静的判断力压倒竞争对手，最终主导市场。',
        best: 'finance',
        worst: 'content'
      }
    },
    space: {
      ko: {
        name: '🚀 우주/모빌리티 스타트업',
        tag: '#도전 #비전 #혁명가',
        desc: '당신은 남들이 불가능하다고 할 때 오히려 흥분하는 타입입니다. 화성 이주, 자율주행, 하늘을 나는 자동차… 당신의 꿈은 언제나 지구 밖을 향합니다. 실패를 두려워하지 않고 오히려 실패에서 배우는 것을 즐기죠. 세상이 아직 보지 못한 미래를 먼저 사는 것, 그게 당신의 삶입니다.',
        best: 'tech',
        worst: 'luxury'
      },
      en: {
        name: '🚀 Space & Mobility Startup',
        tag: '#Challenge #Vision #Revolutionary',
        desc: 'You\'re the type who gets excited when others say it\'s impossible. Mars colonization, autonomous driving, flying cars — your dreams always reach beyond this planet. You don\'t fear failure; you enjoy learning from it. Living in the future the world hasn\'t seen yet — that\'s just how you roll.',
        best: 'tech',
        worst: 'luxury'
      },
      ja: {
        name: '🚀 宇宙・モビリティスタートアップ',
        tag: '#挑戦 #ビジョン #革命家',
        desc: 'あなたは他の人が不可能だと言う時にむしろ興奮するタイプです。火星移住、自動運転、空飛ぶ車…あなたの夢はいつも地球の外を向いています。失敗を恐れず、むしろ失敗から学ぶことを楽しんでいます。世界がまだ見ていない未来を先に生きること、それがあなたの人生です。',
        best: 'tech',
        worst: 'luxury'
      },
      zh: {
        name: '🚀 航天/出行创业公司',
        tag: '#挑战 #愿景 #革命者',
        desc: '你是那种在别人说不可能时反而兴奋的类型。火星移民、自动驾驶、飞行汽车……你的梦想永远指向地球之外。你不畏惧失败，反而享受从失败中学习。走在世界还未见到的未来之前，这就是你的生活方式。',
        best: 'tech',
        worst: 'luxury'
      }
    },
    finance: {
      ko: {
        name: '💹 핀테크/투자 스타트업',
        tag: '#분석 #데이터 #안정적천재',
        desc: '당신은 돈의 흐름을 읽는 탁월한 눈을 가지고 있습니다. 충동적인 결정 대신 철저한 분석과 리스크 계산으로 움직이죠. 화려하진 않아도 꾸준히 성장하는 것, 그게 당신의 전략입니다. 주변에서 위기라고 할 때도 당신은 이미 기회를 보고 있어요. 숫자 뒤에 숨겨진 진실을 보는 능력, 그게 당신만의 무기입니다.',
        best: 'commerce',
        worst: 'platform'
      },
      en: {
        name: '💹 Fintech & Investment Startup',
        tag: '#Analytics #Data #StableGenius',
        desc: 'You have an exceptional eye for reading the flow of money. Instead of impulsive decisions, you operate through thorough analysis and calculated risk. Your strategy: steady, consistent growth over flashy moves. When others see a crisis, you\'ve already spotted the opportunity. Your ability to see the truth hidden behind the numbers — that\'s your secret weapon.',
        best: 'commerce',
        worst: 'platform'
      },
      ja: {
        name: '💹 フィンテック・投資スタートアップ',
        tag: '#分析 #データ #安定の天才',
        desc: 'あなたはお金の流れを読む卓越した目を持っています。衝動的な決断ではなく、徹底的な分析とリスク計算で動きます。派手ではなくても、着実に成長すること、それがあなたの戦略です。周りが危機だと言う時も、あなたはすでにチャンスを見ています。数字の裏に隠された真実を見る能力、それがあなただけの武器です。',
        best: 'commerce',
        worst: 'platform'
      },
      zh: {
        name: '💹 金融科技/投资创业公司',
        tag: '#分析 #数据 #稳定天才',
        desc: '你拥有解读资金流向的卓越眼光。你不做冲动决策，而是通过彻底分析和风险计算行动。不追求华丽，而是稳定持续增长，这就是你的策略。当别人说危机时，你已经看到了机会。看穿数字背后真相的能力，就是你独有的武器。',
        best: 'commerce',
        worst: 'platform'
      }
    },
    content: {
      ko: {
        name: '🎬 콘텐츠/미디어 스타트업',
        tag: '#창의 #감성 #스토리텔러',
        desc: '당신은 이야기로 세상을 움직이는 크리에이터입니다. 숫자보다 감정, 전략보다 영감을 따라가는 타입이죠. 하나의 영상, 하나의 글로 수백만 명의 마음을 움직일 수 있다고 진심으로 믿습니다. 때로는 현실적인 부분을 놓치기도 하지만, 그 열정과 창의력은 누구도 따라올 수 없습니다.',
        best: 'platform',
        worst: 'commerce'
      },
      en: {
        name: '🎬 Content & Media Startup',
        tag: '#Creative #Emotional #Storyteller',
        desc: 'You\'re a creator who moves the world through stories. You follow emotion over numbers, inspiration over strategy. You genuinely believe a single video or a single post can touch the hearts of millions. Sometimes the practical details escape you — but your passion and creativity? No one can match that.',
        best: 'platform',
        worst: 'commerce'
      },
      ja: {
        name: '🎬 コンテンツ・メディアスタートアップ',
        tag: '#クリエイティブ #感性 #ストーリーテラー',
        desc: 'あなたはストーリーで世界を動かすクリエイターです。数字より感情、戦略よりインスピレーションを追うタイプです。一つの動画、一つの文章で何百万人もの心を動かせると心から信じています。時に現実的な部分を見落とすこともありますが、その情熱と創造力は誰にも真似できません。',
        best: 'platform',
        worst: 'commerce'
      },
      zh: {
        name: '🎬 内容/媒体创业公司',
        tag: '#创意 #感性 #故事讲述者',
        desc: '你是用故事推动世界的创作者。你追随情感而非数字，追随灵感而非策略。你真心相信一个视频、一篇文章能触动数百万人的心。有时会忽略现实细节，但你的激情和创造力？无人能及。',
        best: 'platform',
        worst: 'commerce'
      }
    },
    luxury: {
      ko: {
        name: '💎 럭셔리 브랜드 스타트업',
        tag: '#품격 #희소성 #아름다움',
        desc: '당신은 단순한 제품이 아니라 경험과 가치를 파는 사람입니다. 싸게 많이 파는 것보다, 단 하나라도 완벽하게 만드는 것을 선택합니다. 심미적 감각이 뛰어나고, 디테일에 집착하는 편이죠. 브랜드는 곧 철학이라고 생각하는 당신, 언젠가 세상에서 가장 갖고 싶은 것을 만들어낼 겁니다.',
        best: 'content',
        worst: 'tech'
      },
      en: {
        name: '💎 Luxury Brand Startup',
        tag: '#Prestige #Exclusivity #Beauty',
        desc: 'You sell experiences and values, not mere products. You\'d choose crafting one perfect piece over selling cheap in volume, every time. Your aesthetic sense is refined, and you\'re obsessed with details. For you, a brand is a philosophy — and someday, you\'ll create the most coveted thing in the world.',
        best: 'content',
        worst: 'tech'
      },
      ja: {
        name: '💎 ラグジュアリーブランドスタートアップ',
        tag: '#品格 #希少性 #美しさ',
        desc: 'あなたは単なる製品ではなく、体験と価値を売る人です。安く大量に売るより、たった一つでも完璧に作ることを選びます。審美的センスに優れ、細部にこだわる傾向があります。ブランドはすなわち哲学だと考えるあなたは、いつか世界で最も欲しいものを作り出すでしょう。',
        best: 'content',
        worst: 'tech'
      },
      zh: {
        name: '💎 奢侈品牌创业公司',
        tag: '#品格 #稀缺性 #美',
        desc: '你销售的不是产品，而是体验与价值。比起低价大量销售，你宁愿选择精心打造一件完美之作。你有卓越的审美感，痴迷于细节。你认为品牌即哲学——有朝一日，你将创造出世界上最令人渴望拥有的东西。',
        best: 'content',
        worst: 'tech'
      }
    },
    health: {
      ko: {
        name: '🌿 헬스케어/웰니스 스타트업',
        tag: '#건강 #지속가능 #따뜻한리더',
        desc: '당신은 사람들의 삶을 더 건강하고 행복하게 만들고 싶은 따뜻한 마음을 가진 창업가입니다. 빠른 성장보다 지속 가능한 임팩트를 추구하고, 팀원 한 명 한 명을 소중히 여기는 스타일이에요. 공감 능력이 뛰어나 고객의 니즈를 정확히 파악하고, 그 신뢰가 당신 사업의 가장 강한 무기입니다.',
        best: 'platform',
        worst: 'space'
      },
      en: {
        name: '🌿 Healthcare & Wellness Startup',
        tag: '#Health #Sustainable #WarmLeader',
        desc: 'You\'re a warm-hearted entrepreneur who wants to make people\'s lives healthier and happier. You chase sustainable impact over rapid growth, and you genuinely treasure every single person on your team. Your empathy lets you pinpoint exactly what customers need — and that trust is the strongest weapon in your business.',
        best: 'platform',
        worst: 'space'
      },
      ja: {
        name: '🌿 ヘルスケア・ウェルネススタートアップ',
        tag: '#健康 #持続可能 #温かいリーダー',
        desc: 'あなたは人々の生活をより健康で幸せにしたいという温かい心を持つ起業家です。急成長よりも持続可能なインパクトを追求し、チームメンバー一人ひとりを大切にするスタイルです。共感能力に優れ、顧客のニーズを正確に把握し、その信頼があなたのビジネスの最大の武器です。',
        best: 'platform',
        worst: 'space'
      },
      zh: {
        name: '🌿 医疗健康/wellness创业公司',
        tag: '#健康 #可持续 #温暖领袖',
        desc: '你是一位怀有温暖之心的创业者，希望让人们的生活更健康、更幸福。你追求可持续的影响而非快速增长，真心珍视团队中的每一位成员。你的同理心让你精准把握客户需求，这份信任是你商业中最强大的武器。',
        best: 'platform',
        worst: 'space'
      }
    }
  },
  questions: {
    ko: [
      {
        q: '친구가 "우리 같이 창업하자!"고 했을 때 나의 첫 반응은?',
        a: [
          { t: '"어떤 시장인지 먼저 조사해보자"', s: { finance: 2, commerce: 1 } },
          { t: '"오 재밌겠다! 어떤 아이디어야?"', s: { platform: 2, content: 1 } },
          { t: '"기술적으로 뭘 만들 수 있을지 생각해봐야지"', s: { tech: 2, space: 1 } },
          { t: '"브랜드 이름부터 지어볼까?"', s: { luxury: 2, health: 1 } }
        ]
      },
      {
        q: '나만의 사무실을 꾸민다면 어떤 스타일?',
        a: [
          { t: '화이트보드와 모니터로 가득 찬 테크 연구소', s: { tech: 2, space: 1 } },
          { t: '오픈 공간에 빈백과 컬러풀한 포스트잇', s: { platform: 2, content: 1 } },
          { t: '깔끔하고 미니멀한 데이터 센터 느낌', s: { finance: 2, commerce: 1 } },
          { t: '프리미엄 가구와 갤러리 같은 분위기', s: { luxury: 2, health: 1 } }
        ]
      },
      {
        q: '스타트업이 처음으로 수익을 냈다! 그 돈으로 가장 먼저 하고 싶은 건?',
        a: [
          { t: 'R&D에 전부 재투자한다', s: { tech: 2, space: 1 } },
          { t: '마케팅과 SNS 채널 확장', s: { platform: 2, content: 1 } },
          { t: '물류·시스템 인프라 강화', s: { commerce: 2, finance: 1 } },
          { t: '브랜드 캠페인과 팝업 스토어', s: { luxury: 2, health: 1 } }
        ]
      },
      {
        q: '투자자 피칭 자리, 나의 강점은?',
        a: [
          { t: '기술력과 특허로 승부한다', s: { tech: 2, finance: 1 } },
          { t: '월 성장률 데이터로 설득한다', s: { platform: 2, commerce: 1 } },
          { t: '우리 비전이 얼마나 큰지를 보여준다', s: { space: 2, tech: 1 } },
          { t: '브랜드 스토리와 감성으로 감동시킨다', s: { content: 2, luxury: 1 } }
        ]
      },
      {
        q: '팀원이 실수를 저질렀을 때 나는?',
        a: [
          { t: '원인을 분석하고 프로세스를 개선한다', s: { commerce: 2, finance: 1 } },
          { t: '괜찮다고 격려하고 함께 해결책을 찾는다', s: { health: 2, platform: 1 } },
          { t: '"이게 왜 안 됐는지 데이터로 설명해봐"', s: { tech: 2, space: 1 } },
          { t: '감정보다 결과로 판단한다', s: { finance: 2, commerce: 1 } }
        ]
      },
      {
        q: '경쟁사가 비슷한 제품을 먼저 출시했다. 나의 대응은?',
        a: [
          { t: '기술적으로 압도적으로 앞서간다', s: { tech: 2, space: 1 } },
          { t: '커뮤니티 팬덤을 먼저 만든다', s: { platform: 2, content: 1 } },
          { t: '가격과 효율로 시장을 잠식한다', s: { commerce: 2, finance: 1 } },
          { t: '고품격 포지셔닝으로 차별화한다', s: { luxury: 2, health: 1 } }
        ]
      },
      {
        q: '내가 가장 읽고 싶은 책은?',
        a: [
          { t: '일론 머스크 자서전', s: { space: 2, tech: 1 } },
          { t: '제프 베조스의 아마존 이야기', s: { commerce: 2, finance: 1 } },
          { t: '마크 저커버그와 메타의 탄생', s: { platform: 2, content: 1 } },
          { t: '샤넬, 브랜드가 된 이름', s: { luxury: 2, health: 1 } }
        ]
      },
      {
        q: '10년 후 내 회사의 모습은?',
        a: [
          { t: 'AI가 세상을 바꾸는 핵심 기업', s: { tech: 2, space: 1 } },
          { t: '전 세계 수억 명이 쓰는 플랫폼', s: { platform: 2, commerce: 1 } },
          { t: '안정적으로 수익을 내는 유니콘', s: { finance: 2, commerce: 1 } },
          { t: '사람들의 삶을 더 나아지게 한 브랜드', s: { health: 2, luxury: 1 } }
        ]
      },
      {
        q: '창업 멘토를 뽑는다면?',
        a: [
          { t: '젠슨 황 (엔비디아 CEO)', s: { tech: 2, finance: 1 } },
          { t: '일론 머스크', s: { space: 2, tech: 1 } },
          { t: '워런 버핏', s: { finance: 2, commerce: 1 } },
          { t: '미야자키 하야오', s: { content: 2, luxury: 1 } }
        ]
      },
      {
        q: '회사 점심 회식, 나의 선택은?',
        a: [
          { t: '팀 전체 케이터링 파티 🎉', s: { platform: 2, health: 1 } },
          { t: '각자 좋아하는 거 배달 시키기 🛵', s: { commerce: 2, finance: 1 } },
          { t: '미쉐린 레스토랑 예약 🥂', s: { luxury: 2, content: 1 } },
          { t: '건강한 샐러드 바 🥗', s: { health: 2, space: 1 } }
        ]
      },
      {
        q: '해외 출장 중 갑작스러운 자유 시간 2시간! 나는?',
        a: [
          { t: '현지 스타트업 생태계 탐방', s: { tech: 2, platform: 1 } },
          { t: '현지 마켓·물류 센터 방문', s: { commerce: 2, finance: 1 } },
          { t: '우주센터나 모터쇼 구경', s: { space: 2, tech: 1 } },
          { t: '명품 부티크·갤러리 투어', s: { luxury: 2, content: 1 } }
        ]
      },
      {
        q: '내가 진짜 원하는 창업의 이유는?',
        a: [
          { t: '기술로 인류의 문제를 해결하고 싶다', s: { tech: 2, health: 1 } },
          { t: '사람들이 즐기는 무언가를 만들고 싶다', s: { platform: 2, content: 1 } },
          { t: '경제적 자유와 시스템을 갖고 싶다', s: { finance: 2, commerce: 1 } },
          { t: '내 이름을 건 브랜드를 남기고 싶다', s: { luxury: 2, space: 1 } }
        ]
      }
    ],
    en: [
      {
        q: 'A friend says "Let\'s start a company together!" Your first reaction?',
        a: [
          { t: '"Let\'s research the market first"', s: { finance: 2, commerce: 1 } },
          { t: '"Sounds fun! What\'s the idea?"', s: { platform: 2, content: 1 } },
          { t: '"I need to think about what we can build technically"', s: { tech: 2, space: 1 } },
          { t: '"Can we brainstorm brand names first?"', s: { luxury: 2, health: 1 } }
        ]
      },
      {
        q: 'You\'re designing your own office. What\'s the vibe?',
        a: [
          { t: 'Tech lab filled with whiteboards and monitors', s: { tech: 2, space: 1 } },
          { t: 'Open space with beanbags and colorful post-its', s: { platform: 2, content: 1 } },
          { t: 'Clean, minimal data center aesthetic', s: { finance: 2, commerce: 1 } },
          { t: 'Premium furniture and gallery-like atmosphere', s: { luxury: 2, health: 1 } }
        ]
      },
      {
        q: 'Your startup just turned its first profit! What do you spend it on first?',
        a: [
          { t: 'Reinvest everything into R&D', s: { tech: 2, space: 1 } },
          { t: 'Marketing and expanding SNS channels', s: { platform: 2, content: 1 } },
          { t: 'Strengthen logistics and system infrastructure', s: { commerce: 2, finance: 1 } },
          { t: 'Brand campaign and pop-up store', s: { luxury: 2, health: 1 } }
        ]
      },
      {
        q: 'You\'re pitching to investors. What\'s your strongest card?',
        a: [
          { t: 'Technology and patents', s: { tech: 2, finance: 1 } },
          { t: 'Monthly growth rate data', s: { platform: 2, commerce: 1 } },
          { t: 'The sheer scale of our vision', s: { space: 2, tech: 1 } },
          { t: 'Brand story and emotional connection', s: { content: 2, luxury: 1 } }
        ]
      },
      {
        q: 'A team member makes a mistake. What do you do?',
        a: [
          { t: 'Analyze the root cause and improve the process', s: { commerce: 2, finance: 1 } },
          { t: 'Encourage them and find a solution together', s: { health: 2, platform: 1 } },
          { t: '"Walk me through the data on why this failed"', s: { tech: 2, space: 1 } },
          { t: 'Judge by results, not emotions', s: { finance: 2, commerce: 1 } }
        ]
      },
      {
        q: 'A competitor just launched a similar product first. Your move?',
        a: [
          { t: 'Outpace them technologically', s: { tech: 2, space: 1 } },
          { t: 'Build a loyal community fanbase first', s: { platform: 2, content: 1 } },
          { t: 'Undercut the market with better pricing and efficiency', s: { commerce: 2, finance: 1 } },
          { t: 'Differentiate with a premium positioning', s: { luxury: 2, health: 1 } }
        ]
      },
      {
        q: 'Which book do you most want to read?',
        a: [
          { t: 'Elon Musk\'s autobiography', s: { space: 2, tech: 1 } },
          { t: 'The Amazon story by Jeff Bezos', s: { commerce: 2, finance: 1 } },
          { t: 'The story of Mark Zuckerberg and Meta', s: { platform: 2, content: 1 } },
          { t: 'Chanel: The Name Behind the Brand', s: { luxury: 2, health: 1 } }
        ]
      },
      {
        q: 'What does your company look like in 10 years?',
        a: [
          { t: 'A core AI company reshaping the world', s: { tech: 2, space: 1 } },
          { t: 'A platform used by hundreds of millions worldwide', s: { platform: 2, commerce: 1 } },
          { t: 'A stable, profitable unicorn', s: { finance: 2, commerce: 1 } },
          { t: 'A brand that genuinely improved people\'s lives', s: { health: 2, luxury: 1 } }
        ]
      },
      {
        q: 'If you could pick one startup mentor, who would it be?',
        a: [
          { t: 'Jensen Huang (NVIDIA CEO)', s: { tech: 2, finance: 1 } },
          { t: 'Elon Musk', s: { space: 2, tech: 1 } },
          { t: 'Warren Buffett', s: { finance: 2, commerce: 1 } },
          { t: 'Hayao Miyazaki', s: { content: 2, luxury: 1 } }
        ]
      },
      {
        q: 'Team lunch! What do you choose?',
        a: [
          { t: 'Full team catering party 🎉', s: { platform: 2, health: 1 } },
          { t: 'Everyone orders their own delivery 🛵', s: { commerce: 2, finance: 1 } },
          { t: 'Michelin restaurant reservation 🥂', s: { luxury: 2, content: 1 } },
          { t: 'Healthy salad bar 🥗', s: { health: 2, space: 1 } }
        ]
      },
      {
        q: 'Surprise 2 free hours during a business trip abroad! You:',
        a: [
          { t: 'Explore the local startup ecosystem', s: { tech: 2, platform: 1 } },
          { t: 'Visit a local market or logistics center', s: { commerce: 2, finance: 1 } },
          { t: 'Check out a space center or motor show', s: { space: 2, tech: 1 } },
          { t: 'Luxury boutique and gallery tour', s: { luxury: 2, content: 1 } }
        ]
      },
      {
        q: 'What\'s your real reason for wanting to start a company?',
        a: [
          { t: 'Solve humanity\'s problems through technology', s: { tech: 2, health: 1 } },
          { t: 'Create something people genuinely enjoy', s: { platform: 2, content: 1 } },
          { t: 'Achieve financial freedom and build systems', s: { finance: 2, commerce: 1 } },
          { t: 'Leave behind a brand with my name on it', s: { luxury: 2, space: 1 } }
        ]
      }
    ],
    ja: [
      {
        q: '友達に「一緒に創業しよう！」と言われた。最初の反応は？',
        a: [
          { t: '「まず市場調査しよう」', s: { finance: 2, commerce: 1 } },
          { t: '「面白そう！どんなアイデア？」', s: { platform: 2, content: 1 } },
          { t: '「技術的に何が作れるか考えないと」', s: { tech: 2, space: 1 } },
          { t: '「まずブランド名を考えようか」', s: { luxury: 2, health: 1 } }
        ]
      },
      {
        q: '自分だけのオフィスを作るなら、どんなスタイル？',
        a: [
          { t: 'ホワイトボードとモニターだらけのテック研究室', s: { tech: 2, space: 1 } },
          { t: 'ビーンバッグとカラフルな付箋のオープンスペース', s: { platform: 2, content: 1 } },
          { t: 'スッキリミニマルなデータセンター風', s: { finance: 2, commerce: 1 } },
          { t: 'プレミアム家具とギャラリーのような雰囲気', s: { luxury: 2, health: 1 } }
        ]
      },
      {
        q: 'スタートアップが初めて黒字に！そのお金で最初にすることは？',
        a: [
          { t: '全額をR&Dに再投資', s: { tech: 2, space: 1 } },
          { t: 'マーケティングとSNSチャンネルの拡大', s: { platform: 2, content: 1 } },
          { t: '物流・システムインフラの強化', s: { commerce: 2, finance: 1 } },
          { t: 'ブランドキャンペーンとポップアップストア', s: { luxury: 2, health: 1 } }
        ]
      },
      {
        q: '投資家へのピッチ、あなたの強みは？',
        a: [
          { t: '技術力と特許で勝負する', s: { tech: 2, finance: 1 } },
          { t: '月間成長率データで説得する', s: { platform: 2, commerce: 1 } },
          { t: 'ビジョンの大きさを見せる', s: { space: 2, tech: 1 } },
          { t: 'ブランドストーリーと感性で感動させる', s: { content: 2, luxury: 1 } }
        ]
      },
      {
        q: 'チームメンバーがミスをした。あなたは？',
        a: [
          { t: '原因を分析してプロセスを改善する', s: { commerce: 2, finance: 1 } },
          { t: '大丈夫と励まして一緒に解決策を探す', s: { health: 2, platform: 1 } },
          { t: '「なぜ失敗したかデータで説明して」', s: { tech: 2, space: 1 } },
          { t: '感情より結果で判断する', s: { finance: 2, commerce: 1 } }
        ]
      },
      {
        q: '競合が似た製品を先にリリース。どう対応する？',
        a: [
          { t: '技術的に圧倒的に先へ進む', s: { tech: 2, space: 1 } },
          { t: 'コミュニティファンダムを先に作る', s: { platform: 2, content: 1 } },
          { t: '価格と効率で市場を侵食する', s: { commerce: 2, finance: 1 } },
          { t: '高品格ポジショニングで差別化する', s: { luxury: 2, health: 1 } }
        ]
      },
      {
        q: '一番読みたい本は？',
        a: [
          { t: 'イーロン・マスクの自伝', s: { space: 2, tech: 1 } },
          { t: 'ジェフ・ベゾスとアマゾンの話', s: { commerce: 2, finance: 1 } },
          { t: 'マーク・ザッカーバーグとメタの誕生', s: { platform: 2, content: 1 } },
          { t: 'シャネル、ブランドになった名前', s: { luxury: 2, health: 1 } }
        ]
      },
      {
        q: '10年後の自分の会社は？',
        a: [
          { t: 'AIで世界を変える中核企業', s: { tech: 2, space: 1 } },
          { t: '世界中の何億人もが使うプラットフォーム', s: { platform: 2, commerce: 1 } },
          { t: '安定して収益を上げるユニコーン', s: { finance: 2, commerce: 1 } },
          { t: '人々の生活をより良くしたブランド', s: { health: 2, luxury: 1 } }
        ]
      },
      {
        q: '創業メンターを選ぶなら？',
        a: [
          { t: 'ジェンスン・ファン（NVIDIAのCEO）', s: { tech: 2, finance: 1 } },
          { t: 'イーロン・マスク', s: { space: 2, tech: 1 } },
          { t: 'ウォーレン・バフェット', s: { finance: 2, commerce: 1 } },
          { t: '宮崎駿', s: { content: 2, luxury: 1 } }
        ]
      },
      {
        q: 'チームランチ会食、あなたの選択は？',
        a: [
          { t: 'チーム全員のケータリングパーティー 🎉', s: { platform: 2, health: 1 } },
          { t: 'それぞれ好きなものをデリバリー 🛵', s: { commerce: 2, finance: 1 } },
          { t: 'ミシュランレストランを予約 🥂', s: { luxury: 2, content: 1 } },
          { t: 'ヘルシーなサラダバー 🥗', s: { health: 2, space: 1 } }
        ]
      },
      {
        q: '海外出張中に突然の自由時間2時間！あなたは？',
        a: [
          { t: '現地のスタートアップエコシステムを探訪', s: { tech: 2, platform: 1 } },
          { t: '現地マーケット・物流センターを訪問', s: { commerce: 2, finance: 1 } },
          { t: '宇宙センターやモーターショーを見学', s: { space: 2, tech: 1 } },
          { t: '高級ブティック・ギャラリーツアー', s: { luxury: 2, content: 1 } }
        ]
      },
      {
        q: '本当に求める創業の理由は？',
        a: [
          { t: '技術で人類の問題を解決したい', s: { tech: 2, health: 1 } },
          { t: '人々が楽しむものを作りたい', s: { platform: 2, content: 1 } },
          { t: '経済的自由とシステムを持ちたい', s: { finance: 2, commerce: 1 } },
          { t: '自分の名前を冠したブランドを残したい', s: { luxury: 2, space: 1 } }
        ]
      }
    ],
    zh: [
      {
        q: '朋友说"我们一起创业吧！"你的第一反应是？',
        a: [
          { t: '"先调研一下市场"', s: { finance: 2, commerce: 1 } },
          { t: '"听起来有意思！什么想法？"', s: { platform: 2, content: 1 } },
          { t: '"得想想技术上能做什么"', s: { tech: 2, space: 1 } },
          { t: '"先想想品牌名字？"', s: { luxury: 2, health: 1 } }
        ]
      },
      {
        q: '如果布置自己的办公室，会是什么风格？',
        a: [
          { t: '满是白板和显示器的科技实验室', s: { tech: 2, space: 1 } },
          { t: '有懒人沙发和彩色便利贴的开放空间', s: { platform: 2, content: 1 } },
          { t: '简洁极简的数据中心风格', s: { finance: 2, commerce: 1 } },
          { t: '高档家具和画廊般的氛围', s: { luxury: 2, health: 1 } }
        ]
      },
      {
        q: '创业公司首次盈利！第一件事是什么？',
        a: [
          { t: '全部再投入研发', s: { tech: 2, space: 1 } },
          { t: '营销和扩展社交媒体渠道', s: { platform: 2, content: 1 } },
          { t: '强化物流和系统基础设施', s: { commerce: 2, finance: 1 } },
          { t: '品牌活动和快闪店', s: { luxury: 2, health: 1 } }
        ]
      },
      {
        q: '向投资人路演，你的核心优势是？',
        a: [
          { t: '技术实力和专利', s: { tech: 2, finance: 1 } },
          { t: '月增长率数据', s: { platform: 2, commerce: 1 } },
          { t: '展示愿景有多宏大', s: { space: 2, tech: 1 } },
          { t: '用品牌故事和情感打动人', s: { content: 2, luxury: 1 } }
        ]
      },
      {
        q: '团队成员犯了错误，你会怎么做？',
        a: [
          { t: '分析原因，改进流程', s: { commerce: 2, finance: 1 } },
          { t: '鼓励他，一起找解决方案', s: { health: 2, platform: 1 } },
          { t: '"用数据解释为什么失败"', s: { tech: 2, space: 1 } },
          { t: '用结果而非情绪来判断', s: { finance: 2, commerce: 1 } }
        ]
      },
      {
        q: '竞争对手先推出了类似产品。你的应对策略？',
        a: [
          { t: '在技术上遥遥领先', s: { tech: 2, space: 1 } },
          { t: '先建立社区粉丝群', s: { platform: 2, content: 1 } },
          { t: '用价格和效率蚕食市场', s: { commerce: 2, finance: 1 } },
          { t: '以高端定位实现差异化', s: { luxury: 2, health: 1 } }
        ]
      },
      {
        q: '你最想读哪本书？',
        a: [
          { t: '埃隆·马斯克自传', s: { space: 2, tech: 1 } },
          { t: '杰夫·贝佐斯与亚马逊的故事', s: { commerce: 2, finance: 1 } },
          { t: '马克·扎克伯格与Meta的诞生', s: { platform: 2, content: 1 } },
          { t: '香奈儿，成为品牌的名字', s: { luxury: 2, health: 1 } }
        ]
      },
      {
        q: '10年后你的公司是什么样子？',
        a: [
          { t: 'AI改变世界的核心企业', s: { tech: 2, space: 1 } },
          { t: '全球数亿人使用的平台', s: { platform: 2, commerce: 1 } },
          { t: '稳定盈利的独角兽', s: { finance: 2, commerce: 1 } },
          { t: '让人们生活变得更美好的品牌', s: { health: 2, luxury: 1 } }
        ]
      },
      {
        q: '如果选一位创业导师，你会选谁？',
        a: [
          { t: '黄仁勋（英伟达CEO）', s: { tech: 2, finance: 1 } },
          { t: '埃隆·马斯克', s: { space: 2, tech: 1 } },
          { t: '沃伦·巴菲特', s: { finance: 2, commerce: 1 } },
          { t: '宫崎骏', s: { content: 2, luxury: 1 } }
        ]
      },
      {
        q: '公司团队午餐，你会选择？',
        a: [
          { t: '全团队外卖派对 🎉', s: { platform: 2, health: 1 } },
          { t: '各自点自己喜欢的外卖 🛵', s: { commerce: 2, finance: 1 } },
          { t: '预订米其林餐厅 🥂', s: { luxury: 2, content: 1 } },
          { t: '健康沙拉吧 🥗', s: { health: 2, space: 1 } }
        ]
      },
      {
        q: '出差途中突然有2小时自由时间！你会？',
        a: [
          { t: '探访当地创业生态圈', s: { tech: 2, platform: 1 } },
          { t: '参观当地市场或物流中心', s: { commerce: 2, finance: 1 } },
          { t: '参观航天中心或车展', s: { space: 2, tech: 1 } },
          { t: '奢侈品精品店和画廊之旅', s: { luxury: 2, content: 1 } }
        ]
      },
      {
        q: '你真正想创业的原因是什么？',
        a: [
          { t: '用技术解决人类的问题', s: { tech: 2, health: 1 } },
          { t: '创造人们真正喜欢的东西', s: { platform: 2, content: 1 } },
          { t: '实现财务自由，建立体系', s: { finance: 2, commerce: 1 } },
          { t: '留下一个以自己名字命名的品牌', s: { luxury: 2, space: 1 } }
        ]
      }
    ]
  }
};
