/* ===========================================================
   테스트 #4: 나의 연애 세포 테스트
   연애 태도 → 하트 마스코트 8유형 / 12문항 / 4개 언어
   =========================================================== */
const TEST_LOVE = {
  id: 'love-cell',
  emoji: '💘',
  resultLabel: { ko:'나의 연애 세포는', en:'Your love type is', ja:'あなたの恋愛タイプは', zh:'你的恋爱细胞是' },
  typeList: ['rush','pushpull','tsundere','devoted','careful','free','flutter','rookie'],
  meta: {
    rush:    { img:'images/love_rush.jpg',     color:'#FF8A7A', ink:'#9B2D1F' },
    pushpull:{ img:'images/love_pushpull.jpg', color:'#F06FB0', ink:'#8A1E5E' },
    tsundere:{ img:'images/love_tsundere.jpg', color:'#A8C8F0', ink:'#1E4A86' },
    devoted: { img:'images/love_devoted.jpg',  color:'#FFA8A0', ink:'#9B3A30' },
    careful: { img:'images/love_careful.jpg',  color:'#C9B6E4', ink:'#5B3F86' },
    free:    { img:'images/love_free.jpg',     color:'#A8D8F0', ink:'#1E5A86' },
    flutter: { img:'images/love_flutter.jpg',  color:'#FFAFC9', ink:'#9B2C57' },
    rookie:  { img:'images/love_rookie.jpg',   color:'#F0E0C8', ink:'#7A5A2E' }
  },
  types: {
    rush:{
      ko:{name:'🔥 불꽃 직진러', tag:'좋으면 바로 돌진!',
        desc:'마음에 들면 망설임 없이 표현하는 당신. 밀당? 그런 거 모릅니다. 좋아하는 사람 앞에서 솔직하고 적극적이라, 상대는 당신의 진심을 의심할 틈이 없어요. 그 뜨거운 직진이 당신의 가장 큰 매력입니다.',
        best:'careful', worst:'tsundere'},
      en:{name:'🔥 Full-Speed Charger', tag:'Like it? Go for it!',
        desc:'When you like someone, you express it without hesitation. Mind games? Not your thing. Honest and bold in front of the one you like, so they never doubt your sincerity. That fiery directness is your greatest charm.',
        best:'careful', worst:'tsundere'},
      ja:{name:'🔥 猪突猛進タイプ', tag:'好きなら即アタック！',
        desc:'好きになったら迷わず表現するあなた。駆け引き？そんなの知りません。好きな人の前では素直で積極的だから、相手はあなたの本気を疑う暇もありません。その熱い一直線が最大の魅力です。',
        best:'careful', worst:'tsundere'},
      zh:{name:'🔥 火焰直球型', tag:'喜欢就立刻冲！',
        desc:'喜欢就毫不犹豫表达的你。欲擒故纵？不存在的。在喜欢的人面前坦率又主动，对方根本没空怀疑你的真心。那份火热的直球就是你最大的魅力。',
        best:'careful', worst:'tsundere'}
    },
    pushpull:{
      ko:{name:'💃 밀당의 고수', tag:'끌고 당기는 매력',
        desc:'다가갈 때와 물러설 때를 아는 연애 전략가. 적당한 거리감으로 상대를 애타게 만드는 밀당의 달인이에요. 계산적이라기보다 본능적인 감각이죠. 당신과의 연애는 한순간도 지루할 틈이 없습니다.',
        best:'devoted', worst:'rookie'},
      en:{name:'💃 Push-and-Pull Pro', tag:'The art of give and take',
        desc:'A love strategist who knows when to lean in and when to step back. With just the right distance, you keep them on their toes — a master of push and pull. Less calculating, more instinct. Dating you is never dull for a second.',
        best:'devoted', worst:'rookie'},
      ja:{name:'💃 駆け引きの達人', tag:'押して引く魅力',
        desc:'近づく時と引く時を知る恋愛の戦略家。絶妙な距離感で相手をやきもきさせる駆け引きの達人。計算というより本能的な感覚。あなたとの恋は一瞬も退屈する暇がありません。',
        best:'devoted', worst:'rookie'},
      zh:{name:'💃 欲擒故纵高手', tag:'若即若离的魅力',
        desc:'懂得何时靠近何时后退的恋爱策略家。用恰到好处的距离感让对方牵肠挂肚，是欲擒故纵的高手。与其说是算计，不如说是本能。和你谈恋爱一秒都不会无聊。',
        best:'devoted', worst:'rookie'}
    },
    tsundere:{
      ko:{name:'❄️ 새침한 츤데레', tag:'겉은 차갑고 속은 다정',
        desc:'겉으론 무심한 척하지만 속은 누구보다 따뜻한 사람. 좋아하는 티를 내기 부끄러워 괜히 퉁명스러워지죠. 하지만 결정적인 순간엔 누구보다 챙기는 반전 매력. 그 갭이 상대를 설레게 합니다.',
        best:'free', worst:'rush'},
      en:{name:'❄️ Cool Tsundere', tag:'Cold outside, warm inside',
        desc:'You act indifferent on the surface, but inside you\'re warmer than anyone. Too shy to show you care, you turn unexpectedly blunt. Yet in crucial moments, you look after them more than anyone — the charm of contrast that makes hearts flutter.',
        best:'free', worst:'rush'},
      ja:{name:'❄️ ツンとしたツンデレ', tag:'外は冷たく中は優しい',
        desc:'表面はそっけないふりbut 中は誰より温かい人。好きなのを見せるのが恥ずかしくてつい無愛想に。でも肝心な時は誰より気にかける反転の魅力。そのギャップが相手をときめかせます。',
        best:'free', worst:'rush'},
      zh:{name:'❄️ 高冷傲娇', tag:'外冷内热',
        desc:'表面装作不在乎，内心却比谁都温暖。因为害羞不敢表露喜欢，反而变得冷淡。但关键时刻比谁都贴心，这种反差萌让对方小鹿乱撞。',
        best:'free', worst:'rush'}
    },
    devoted:{
      ko:{name:'🎁 헌신적 사랑꾼', tag:'좋아하면 다 퍼줌',
        desc:'사랑하는 사람을 위해서라면 아낌없이 주는 천생 연애꾼. 상대의 행복이 곧 내 행복이라 믿어요. 받는 것보다 주는 게 익숙한 당신, 가끔은 스스로도 챙기세요. 그 따뜻한 마음이 큰 사랑으로 돌아올 거예요.',
        best:'pushpull', worst:'free'},
      en:{name:'🎁 Devoted Lover', tag:'Gives everything for love',
        desc:'A born romantic who gives generously for the one you love. You believe their happiness is your happiness. More used to giving than receiving — sometimes take care of yourself too. That warm heart will come back to you as great love.',
        best:'pushpull', worst:'free'},
      ja:{name:'🎁 献身的な愛しんぼ', tag:'好きなら全部あげる',
        desc:'愛する人のためなら惜しみなく与える生まれながらの愛しんぼ。相手の幸せが自分の幸せだと信じています。もらうより与えるのが慣れているあなた、たまには自分も大切に。その温かさは大きな愛で返ってきます。',
        best:'pushpull', worst:'free'},
      zh:{name:'🎁 奉献型恋人', tag:'喜欢就全部给',
        desc:'为了爱的人毫不吝啬付出的天生恋爱家。你相信对方的幸福就是自己的幸福。比起接受更习惯给予的你，偶尔也照顾下自己。那份温暖会化作大大的爱回到你身边。',
        best:'pushpull', worst:'free'}
    },
    careful:{
      ko:{name:'🐌 신중한 거북이', tag:'천천히 깊어지는',
        desc:'서두르지 않고 천천히 마음을 여는 신중파. 한번 빠지면 깊고 오래가는 사랑을 해요. 시간이 걸려도 확실하게 다가가기에, 당신의 사랑은 쉽게 흔들리지 않습니다. 느리지만 가장 단단한 사랑의 소유자예요.',
        best:'rush', worst:'flutter'},
      en:{name:'🐌 Careful Tortoise', tag:'Slow but deep',
        desc:'A cautious type who opens up slowly, never rushing. Once you fall, your love runs deep and lasts long. You take your time but approach for sure, so your love isn\'t easily shaken. Slow, but the owner of the steadiest love.',
        best:'rush', worst:'flutter'},
      ja:{name:'🐌 慎重なカメ', tag:'ゆっくり深まる',
        desc:'焦らずゆっくり心を開く慎重派。一度はまると深く長く続く恋をします。時間がかかっても確実に近づくから、あなたの愛は簡単に揺るがない。遅いけど一番強い愛の持ち主です。',
        best:'rush', worst:'flutter'},
      zh:{name:'🐌 谨慎乌龟', tag:'慢慢加深',
        desc:'不着急、慢慢敞开心扉的谨慎派。一旦陷入就是深沉而长久的爱。即使花时间也确实地靠近，所以你的爱不易动摇。慢，却是最坚定的爱的拥有者。',
        best:'rush', worst:'flutter'}
    },
    free:{
      ko:{name:'🕊️ 자유로운 영혼', tag:'구속은 싫어, 쿨한 연애',
        desc:'연애도 내 삶의 일부일 뿐, 서로의 자유를 존중하는 쿨한 연애관의 소유자. 집착이나 구속과는 거리가 멀죠. 적당한 거리에서 서로를 응원하는 성숙한 사랑을 추구해요. 당신과 함께라면 숨 막힐 일이 없습니다.',
        best:'tsundere', worst:'devoted'},
      en:{name:'🕊️ Free Spirit', tag:'No strings, just cool love',
        desc:'For you, love is just one part of life — you respect each other\'s freedom. Far from clingy or possessive. You pursue a mature love that cheers each other on from a comfortable distance. With you, no one ever feels suffocated.',
        best:'tsundere', worst:'devoted'},
      ja:{name:'🕊️ 自由な魂', tag:'束縛は嫌、クールな恋愛',
        desc:'恋愛も人生の一部、お互いの自由を尊重するクールな恋愛観の持ち主。執着や束縛とは無縁。適度な距離で励まし合う成熟した愛を求めます。あなたとなら息苦しくなることがありません。',
        best:'tsundere', worst:'devoted'},
      zh:{name:'🕊️ 自由灵魂', tag:'讨厌束缚，酷酷的恋爱',
        desc:'恋爱也只是生活的一部分，尊重彼此自由的酷派恋爱观拥有者。和执着、束缚毫不沾边。追求在适当距离互相支持的成熟的爱。和你在一起永远不会觉得窒息。',
        best:'tsundere', worst:'devoted'}
    },
    flutter:{
      ko:{name:'💕 설렘 가득 금사빠', tag:'쉽게 빠지고 설렘 가득',
        desc:'작은 친절에도 심장이 두근, 설렘에 살고 설렘에 죽는 로맨티스트. 사랑에 빠지는 순간의 그 짜릿함을 누구보다 사랑하죠. 감정이 풍부하고 표현이 솔직해서, 당신 곁엔 늘 설렘이 가득합니다.',
        best:'careful', worst:'free'},
      en:{name:'💕 Smitten Romantic', tag:'Falls fast, full of flutter',
        desc:'Your heart races even at small kindnesses — a romantic who lives and dies by butterflies. You love the thrill of falling more than anyone. Rich in emotion and honest in expression, there\'s always a flutter around you.',
        best:'careful', worst:'free'},
      ja:{name:'💕 ときめき惚れっぽさん', tag:'すぐ惚れてときめき満載',
        desc:'小さな優しさにも胸がドキッ、ときめきに生きときめきに死ぬロマンチスト。恋に落ちる瞬間のあのときめきを誰より愛します。感情豊かで表現が素直だから、あなたのそばはいつもときめきでいっぱい。',
        best:'careful', worst:'free'},
      zh:{name:'💕 满满心动易心动', tag:'容易心动满满悸动',
        desc:'一点小善意就心跳加速，为心动而活的浪漫主义者。比谁都热爱坠入爱河瞬间的那份悸动。情感丰富、表达坦率，你身边总是充满悸动。',
        best:'careful', worst:'free'}
    },
    rookie:{
      ko:{name:'🌷 순수한 첫사랑', tag:'경험은 적지만 진심은 가득',
        desc:'연애 경험은 많지 않지만 마음만은 누구보다 진실한 순수파. 서툴러도 그 진심이 사랑스러워요. 계산 없는 솔직한 마음으로 다가가기에, 당신의 사랑은 맑고 깨끗합니다. 그 순수함이 가장 큰 무기예요.',
        best:'devoted', worst:'pushpull'},
      en:{name:'🌷 Pure First Love', tag:'Few experiences, full sincerity',
        desc:'Not much dating experience, but a pure soul whose heart is truer than anyone\'s. Even clumsy, that sincerity is lovable. You approach with an honest, uncalculating heart, so your love is clear and clean. That purity is your greatest weapon.',
        best:'devoted', worst:'pushpull'},
      ja:{name:'🌷 純粋な初恋', tag:'経験は少なくても真心満載',
        desc:'恋愛経験は多くないけど心は誰より真実な純粋派。不器用でもその真心が愛らしい。計算のない素直な心で近づくから、あなたの愛は澄んでいて綺麗。その純粋さが最大の武器です。',
        best:'devoted', worst:'pushpull'},
      zh:{name:'🌷 纯真初恋', tag:'经验少但真心满满',
        desc:'恋爱经验不多，但内心比谁都真诚的纯真派。即使笨拙，那份真心也很可爱。用没有算计的坦率之心靠近，所以你的爱清澈干净。那份纯真就是最大的武器。',
        best:'devoted', worst:'pushpull'}
    }
  },
  questions: { ko:[
    {q:'좋아하는 사람이 생겼다. 나는?',a:[
      {t:'바로 티 내고 다가간다',s:{rush:3}},
      {t:'밀당하며 간을 본다',s:{pushpull:3}},
      {t:'좋아하면서도 퉁명스러워진다',s:{tsundere:3}},
      {t:'혼자 마음만 키운다',s:{rookie:2,careful:1}}
    ]},
    {q:'썸 탈 때 연락 스타일은?',a:[
      {t:'먼저 자주 연락한다',s:{rush:2,devoted:1}},
      {t:'일부러 늦게 답한다',s:{pushpull:3}},
      {t:'읽고도 무심한 척',s:{tsundere:2,free:1}},
      {t:'연락 오면 설레서 바로 답',s:{flutter:2,rookie:1}}
    ]},
    {q:'연애에서 가장 중요한 건?',a:[
      {t:'불타는 열정',s:{rush:2,flutter:1}},
      {t:'적당한 밀당과 긴장감',s:{pushpull:3}},
      {t:'서로의 자유와 공간',s:{free:3}},
      {t:'변치 않는 신뢰',s:{careful:2,devoted:1}}
    ]},
    {q:'상대가 연락이 없을 때?',a:[
      {t:'바로 내가 먼저 연락',s:{rush:2,devoted:1}},
      {t:'나도 똑같이 안 한다',s:{pushpull:2,tsundere:1}},
      {t:'쿨하게 내 할 일 한다',s:{free:3}},
      {t:'무슨 일 있나 걱정된다',s:{flutter:2,rookie:1}}
    ]},
    {q:'고백은 어떻게?',a:[
      {t:'내가 먼저 직진 고백',s:{rush:3}},
      {t:'분위기 만들어 상대가 하게',s:{pushpull:2,free:1}},
      {t:'쑥스러워 말 못하고 빙빙',s:{tsundere:2,rookie:1}},
      {t:'설레서 떨리지만 진심으로',s:{flutter:2,devoted:1}}
    ]},
    {q:'연애하면 나는?',a:[
      {t:'올인! 다 퍼준다',s:{devoted:3}},
      {t:'내 페이스 유지',s:{free:2,pushpull:1}},
      {t:'천천히 깊어진다',s:{careful:3}},
      {t:'매일이 설렘 가득',s:{flutter:3}}
    ]},
    {q:'데이트 코스는?',a:[
      {t:'즉흥적으로 막 정한다',s:{rush:2,free:1}},
      {t:'상대가 좋아할 곳으로',s:{devoted:2,rookie:1}},
      {t:'분위기 좋은 곳 신중히',s:{careful:2,pushpull:1}},
      {t:'어디든 같이면 설렘',s:{flutter:3}}
    ]},
    {q:'싸웠을 때 나는?',a:[
      {t:'바로 풀자고 직진',s:{rush:2,devoted:1}},
      {t:'먼저 연락 안 하고 버틴다',s:{pushpull:2,tsundere:1}},
      {t:'시간을 두고 거리를 둔다',s:{free:2,careful:1}},
      {t:'내가 잘못했나 전전긍긍',s:{flutter:1,rookie:2}}
    ]},
    {q:'상대의 어떤 모습에 반하나?',a:[
      {t:'적극적이고 솔직한 사람',s:{rush:2,flutter:1}},
      {t:'밀당 잘하는 매력적인 사람',s:{pushpull:3}},
      {t:'서로 존중해주는 쿨한 사람',s:{free:3}},
      {t:'한결같고 다정한 사람',s:{devoted:2,careful:1}}
    ]},
    {q:'연애 경험을 말하자면?',a:[
      {t:'뜨겁게 많이 해봤다',s:{rush:2,pushpull:1}},
      {t:'쿨하게 여러 번',s:{free:2}},
      {t:'길고 진지한 연애 위주',s:{careful:2,devoted:1}},
      {t:'경험은 적지만 진심이었다',s:{rookie:3}}
    ]},
    {q:'사랑에 빠지는 속도는?',a:[
      {t:'순식간에 불타오른다',s:{rush:2,flutter:1}},
      {t:'쉽게 자주 설렌다',s:{flutter:3}},
      {t:'아주 천천히 신중하게',s:{careful:3}},
      {t:'겉으론 아닌 척 속으론 빠짐',s:{tsundere:3}}
    ]},
    {q:'나에게 연애란?',a:[
      {t:'인생을 불태우는 열정',s:{rush:2,flutter:1}},
      {t:'밀당의 짜릿한 게임',s:{pushpull:3}},
      {t:'내 삶을 지키며 함께',s:{free:3}},
      {t:'온 마음을 다하는 헌신',s:{devoted:2,rookie:1}}
    ]}
  ],
  en:[
    {q:'You develop a crush. You...',a:[
      {t:'Show it and approach right away',s:{rush:3}},
      {t:'Play it cool, test the waters',s:{pushpull:3}},
      {t:'Like them but act blunt',s:{tsundere:3}},
      {t:'Just nurse the feeling alone',s:{rookie:2,careful:1}}
    ]},
    {q:'Your texting style in a "situationship"?',a:[
      {t:'I text first and often',s:{rush:2,devoted:1}},
      {t:'I reply late on purpose',s:{pushpull:3}},
      {t:'Read it, act indifferent',s:{tsundere:2,free:1}},
      {t:'Reply instantly, all aflutter',s:{flutter:2,rookie:1}}
    ]},
    {q:'Most important thing in love?',a:[
      {t:'Burning passion',s:{rush:2,flutter:1}},
      {t:'Just enough tension and play',s:{pushpull:3}},
      {t:'Each other\'s freedom and space',s:{free:3}},
      {t:'Unchanging trust',s:{careful:2,devoted:1}}
    ]},
    {q:'When they go quiet on you?',a:[
      {t:'I reach out first right away',s:{rush:2,devoted:1}},
      {t:'I go quiet right back',s:{pushpull:2,tsundere:1}},
      {t:'Coolly mind my own business',s:{free:3}},
      {t:'I worry something\'s wrong',s:{flutter:2,rookie:1}}
    ]},
    {q:'How do you confess?',a:[
      {t:'I confess first, head-on',s:{rush:3}},
      {t:'Set the mood so they do it',s:{pushpull:2,free:1}},
      {t:'Too shy, I beat around the bush',s:{tsundere:2,rookie:1}},
      {t:'Nervous but heartfelt',s:{flutter:2,devoted:1}}
    ]},
    {q:'When in a relationship, you...',a:[
      {t:'Go all in, give everything',s:{devoted:3}},
      {t:'Keep my own pace',s:{free:2,pushpull:1}},
      {t:'Deepen slowly',s:{careful:3}},
      {t:'Flutter every single day',s:{flutter:3}}
    ]},
    {q:'Your ideal date plan?',a:[
      {t:'Decide on a whim',s:{rush:2,free:1}},
      {t:'Somewhere they\'d love',s:{devoted:2,rookie:1}},
      {t:'A nice spot, carefully chosen',s:{careful:2,pushpull:1}},
      {t:'Anywhere, as long as together',s:{flutter:3}}
    ]},
    {q:'After a fight, you...',a:[
      {t:'Rush to make up right away',s:{rush:2,devoted:1}},
      {t:'Hold out, won\'t text first',s:{pushpull:2,tsundere:1}},
      {t:'Take time and space',s:{free:2,careful:1}},
      {t:'Fret over what I did wrong',s:{flutter:1,rookie:2}}
    ]},
    {q:'What makes you fall for someone?',a:[
      {t:'Bold and honest people',s:{rush:2,flutter:1}},
      {t:'Charming, good at push-pull',s:{pushpull:3}},
      {t:'Cool people who respect you',s:{free:3}},
      {t:'Steady, warm-hearted people',s:{devoted:2,careful:1}}
    ]},
    {q:'Your dating experience?',a:[
      {t:'Plenty, and passionate',s:{rush:2,pushpull:1}},
      {t:'Several, kept it cool',s:{free:2}},
      {t:'Mostly long, serious ones',s:{careful:2,devoted:1}},
      {t:'Few, but always sincere',s:{rookie:3}}
    ]},
    {q:'How fast do you fall in love?',a:[
      {t:'I ignite in an instant',s:{rush:2,flutter:1}},
      {t:'I flutter easily and often',s:{flutter:3}},
      {t:'Very slowly and carefully',s:{careful:3}},
      {t:'Act like I don\'t, but I\'m falling',s:{tsundere:3}}
    ]},
    {q:'What is love to you?',a:[
      {t:'A passion that burns my life',s:{rush:2,flutter:1}},
      {t:'A thrilling game of push-pull',s:{pushpull:3}},
      {t:'Being together while keeping myself',s:{free:3}},
      {t:'Wholehearted devotion',s:{devoted:2,rookie:1}}
    ]}
  ],
  ja:[
    {q:'好きな人ができた。私は？',a:[
      {t:'すぐ態度に出して近づく',s:{rush:3}},
      {t:'駆け引きして様子を見る',s:{pushpull:3}},
      {t:'好きなのに無愛想になる',s:{tsundere:3}},
      {t:'一人で想いを育てる',s:{rookie:2,careful:1}}
    ]},
    {q:'気になる人との連絡スタイルは？',a:[
      {t:'自分から頻繁に連絡',s:{rush:2,devoted:1}},
      {t:'わざと遅めに返す',s:{pushpull:3}},
      {t:'既読でも無関心なふり',s:{tsundere:2,free:1}},
      {t:'連絡来たらときめいて即返信',s:{flutter:2,rookie:1}}
    ]},
    {q:'恋愛で一番大事なのは？',a:[
      {t:'燃える情熱',s:{rush:2,flutter:1}},
      {t:'適度な駆け引きと緊張感',s:{pushpull:3}},
      {t:'お互いの自由と空間',s:{free:3}},
      {t:'変わらない信頼',s:{careful:2,devoted:1}}
    ]},
    {q:'相手から連絡がない時？',a:[
      {t:'すぐ自分から連絡',s:{rush:2,devoted:1}},
      {t:'自分も同じくしない',s:{pushpull:2,tsundere:1}},
      {t:'クールに自分のことをする',s:{free:3}},
      {t:'何かあったか心配になる',s:{flutter:2,rookie:1}}
    ]},
    {q:'告白はどうする？',a:[
      {t:'自分から一直線に告白',s:{rush:3}},
      {t:'雰囲気を作って相手にさせる',s:{pushpull:2,free:1}},
      {t:'照れて言えず遠回し',s:{tsundere:2,rookie:1}},
      {t:'ドキドキするけど本気で',s:{flutter:2,devoted:1}}
    ]},
    {q:'恋愛すると私は？',a:[
      {t:'オールイン！全部あげる',s:{devoted:3}},
      {t:'自分のペースを保つ',s:{free:2,pushpull:1}},
      {t:'ゆっくり深まる',s:{careful:3}},
      {t:'毎日がときめき満載',s:{flutter:3}}
    ]},
    {q:'デートコースは？',a:[
      {t:'即興でパッと決める',s:{rush:2,free:1}},
      {t:'相手が好きそうな所へ',s:{devoted:2,rookie:1}},
      {t:'雰囲気の良い所を慎重に',s:{careful:2,pushpull:1}},
      {t:'どこでも一緒ならときめき',s:{flutter:3}}
    ]},
    {q:'喧嘩した時の私は？',a:[
      {t:'すぐ仲直りしようと直進',s:{rush:2,devoted:1}},
      {t:'先に連絡せず我慢',s:{pushpull:2,tsundere:1}},
      {t:'時間をおいて距離を取る',s:{free:2,careful:1}},
      {t:'自分が悪かったかと気を揉む',s:{flutter:1,rookie:2}}
    ]},
    {q:'相手のどんな姿に惚れる？',a:[
      {t:'積極的で素直な人',s:{rush:2,flutter:1}},
      {t:'駆け引き上手な魅力的な人',s:{pushpull:3}},
      {t:'お互い尊重するクールな人',s:{free:3}},
      {t:'一途で優しい人',s:{devoted:2,careful:1}}
    ]},
    {q:'恋愛経験を言うなら？',a:[
      {t:'熱く何度もしてきた',s:{rush:2,pushpull:1}},
      {t:'クールに何度か',s:{free:2}},
      {t:'長く真剣な恋愛中心',s:{careful:2,devoted:1}},
      {t:'経験は少ないけど本気だった',s:{rookie:3}}
    ]},
    {q:'恋に落ちる速さは？',a:[
      {t:'一瞬で燃え上がる',s:{rush:2,flutter:1}},
      {t:'すぐ頻繁にときめく',s:{flutter:3}},
      {t:'とてもゆっくり慎重に',s:{careful:3}},
      {t:'表は違うふり裏では夢中',s:{tsundere:3}}
    ]},
    {q:'私にとって恋愛とは？',a:[
      {t:'人生を燃やす情熱',s:{rush:2,flutter:1}},
      {t:'駆け引きのスリリングなゲーム',s:{pushpull:3}},
      {t:'自分の人生を守りつつ共に',s:{free:3}},
      {t:'心を尽くす献身',s:{devoted:2,rookie:1}}
    ]}
  ],
  zh:[
    {q:'有了喜欢的人，我会？',a:[
      {t:'马上表现并靠近',s:{rush:3}},
      {t:'欲擒故纵试探一下',s:{pushpull:3}},
      {t:'喜欢却变得冷淡',s:{tsundere:3}},
      {t:'一个人默默暗恋',s:{rookie:2,careful:1}}
    ]},
    {q:'暧昧时的联系风格？',a:[
      {t:'主动频繁联系',s:{rush:2,devoted:1}},
      {t:'故意晚点回',s:{pushpull:3}},
      {t:'已读也装作不在乎',s:{tsundere:2,free:1}},
      {t:'收到就心动秒回',s:{flutter:2,rookie:1}}
    ]},
    {q:'恋爱中最重要的是？',a:[
      {t:'燃烧的激情',s:{rush:2,flutter:1}},
      {t:'适度的拉扯和紧张感',s:{pushpull:3}},
      {t:'彼此的自由和空间',s:{free:3}},
      {t:'不变的信任',s:{careful:2,devoted:1}}
    ]},
    {q:'对方没联系时？',a:[
      {t:'马上主动联系',s:{rush:2,devoted:1}},
      {t:'我也照样不联系',s:{pushpull:2,tsundere:1}},
      {t:'酷酷地做自己的事',s:{free:3}},
      {t:'担心是不是出什么事了',s:{flutter:2,rookie:1}}
    ]},
    {q:'怎么告白？',a:[
      {t:'我先直球告白',s:{rush:3}},
      {t:'营造氛围让对方说',s:{pushpull:2,free:1}},
      {t:'害羞说不出口绕圈子',s:{tsundere:2,rookie:1}},
      {t:'紧张但真心地说',s:{flutter:2,devoted:1}}
    ]},
    {q:'恋爱时我会？',a:[
      {t:'全力投入！全都给',s:{devoted:3}},
      {t:'保持自己的节奏',s:{free:2,pushpull:1}},
      {t:'慢慢加深',s:{careful:3}},
      {t:'每天都满满心动',s:{flutter:3}}
    ]},
    {q:'约会路线？',a:[
      {t:'临时起意随便定',s:{rush:2,free:1}},
      {t:'去对方喜欢的地方',s:{devoted:2,rookie:1}},
      {t:'慎重选氛围好的地方',s:{careful:2,pushpull:1}},
      {t:'只要在一起哪都心动',s:{flutter:3}}
    ]},
    {q:'吵架时我会？',a:[
      {t:'马上想和好直球出击',s:{rush:2,devoted:1}},
      {t:'忍着不先联系',s:{pushpull:2,tsundere:1}},
      {t:'给点时间保持距离',s:{free:2,careful:1}},
      {t:'担心是不是我错了',s:{flutter:1,rookie:2}}
    ]},
    {q:'会被对方什么样子吸引？',a:[
      {t:'主动又坦率的人',s:{rush:2,flutter:1}},
      {t:'会欲擒故纵的迷人的人',s:{pushpull:3}},
      {t:'互相尊重的酷酷的人',s:{free:3}},
      {t:'始终如一温柔的人',s:{devoted:2,careful:1}}
    ]},
    {q:'说说恋爱经验？',a:[
      {t:'热烈地谈过很多次',s:{rush:2,pushpull:1}},
      {t:'酷酷地谈过几次',s:{free:2}},
      {t:'以长久认真的恋爱为主',s:{careful:2,devoted:1}},
      {t:'经验少但很真心',s:{rookie:3}}
    ]},
    {q:'坠入爱河的速度？',a:[
      {t:'瞬间燃起来',s:{rush:2,flutter:1}},
      {t:'容易频繁心动',s:{flutter:3}},
      {t:'非常缓慢谨慎',s:{careful:3}},
      {t:'表面装作不是内心却沦陷',s:{tsundere:3}}
    ]},
    {q:'对我来说恋爱是？',a:[
      {t:'燃烧人生的激情',s:{rush:2,flutter:1}},
      {t:'欲擒故纵的刺激游戏',s:{pushpull:3}},
      {t:'守护自己人生的同时相伴',s:{free:3}},
      {t:'倾尽全心的奉献',s:{devoted:2,rookie:1}}
    ]}
  ]}
};
console.log('test_love.js loaded');
