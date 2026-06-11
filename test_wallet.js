/* ===========================================================
   테스트 #2: 내 통장이 하고 싶은 말
   소비 습관 → 통장 의인화 8유형 / 12문항 / 4개 언어
   =========================================================== */
const TEST_WALLET = {
  id: 'wallet-voice',
  emoji: '🐷',
  typeList: ['empty','guardian','yolo','turtle','impulse','thrifty','investor','balance'],
  meta: {
    empty:    { img:'images/money_empty.jpg',    color:'#C8E6D4', ink:'#3A6B52' },
    guardian: { img:'images/money_guardian.jpg', color:'#A8D8D8', ink:'#1E5A5A' },
    yolo:     { img:'images/money_yolo.jpg',      color:'#FFD9A8', ink:'#8A4B12' },
    turtle:   { img:'images/money_turtle.jpg',    color:'#C5E0B8', ink:'#3E6B2E' },
    impulse:  { img:'images/money_impulse.jpg',   color:'#FFB3C7', ink:'#9B2C57' },
    thrifty:  { img:'images/money_thrifty.jpg',   color:'#C9C2B8', ink:'#4A4036' },
    investor: { img:'images/money_investor.jpg',  color:'#A8C8F0', ink:'#1E4A86' },
    balance:  { img:'images/money_balance.jpg',   color:'#C9C2E8', ink:'#4A3F86' }
  },
  types: {
    empty: {
      ko:{name:'👻 텅장 요정', tag:'"잔고가… 텅 비었어요"',
        desc:'월급은 스쳐 지나가고 통장엔 바람만 붑니다. 카드값 막느라 늘 아슬아슬하지만 그래도 어떻게든 살아가는 당신. 통장이 한마디 합니다: "이번 달도… 우리 같이 버텨봐요."',
        best:'guardian', worst:'impulse'},
      en:{name:'👻 Empty Wallet Ghost', tag:'"My balance is… empty"',
        desc:'Your paycheck just passes through and only wind blows in your account. Always cutting it close to cover the card bill, yet somehow you survive. Your wallet whispers: "Let\'s make it through this month together too."',
        best:'guardian', worst:'impulse'},
      ja:{name:'👻 空っぽ貯金箱の妖精', tag:'「残高が…空っぽです」',
        desc:'給料は通り過ぎ、口座には風だけが吹きます。カードの支払いでいつもギリギリbut なんとか生きているあなた。貯金箱が一言：「今月も…一緒に乗り越えましょう」',
        best:'guardian', worst:'impulse'},
      zh:{name:'👻 空钱包精灵', tag:'"余额…空空如也"',
        desc:'工资只是路过，账户里只剩穿堂风。为还信用卡总是惊险万分，但你总能撑过去。钱包说了句话："这个月…我们也一起扛过去吧。"',
        best:'guardian', worst:'impulse'}
    },
    guardian: {
      ko:{name:'📒 가계부 수호신', tag:'"모든 지출을 기록하죠"',
        desc:'커피 한 잔까지 가계부에 적는 철저함. 당신의 통장은 늘 정돈되어 있고 새는 돈이 없어요. 통장이 흐뭇하게 말합니다: "당신 덕분에 제가 참 든든합니다."',
        best:'empty', worst:'impulse'},
      en:{name:'📒 Budget Guardian', tag:'"I log every expense"',
        desc:'You record every coffee in your ledger. Your account is always tidy with no leaks. Your wallet says proudly: "Thanks to you, I feel so secure."',
        best:'empty', worst:'impulse'},
      ja:{name:'📒 家計簿の守護神', tag:'「全ての支出を記録します」',
        desc:'コーヒー一杯まで家計簿に書く徹底ぶり。あなたの口座は常に整い、無駄な出費がありません。貯金箱が満足げに：「あなたのおかげで安心です」',
        best:'empty', worst:'impulse'},
      zh:{name:'📒 记账守护神', tag:'"每一笔都记下来"',
        desc:'连一杯咖啡都记进账本的彻底。你的账户总是井井有条，没有漏财。钱包欣慰地说："多亏有你，我特别踏实。"',
        best:'empty', worst:'impulse'}
    },
    yolo: {
      ko:{name:'🎉 욜로 통장', tag:'"인생은 한 번뿐!"',
        desc:'미래보다 지금 이 순간! 좋아하는 데엔 아낌없이 씁니다. 후회는 없지만 통장은 가끔 놀라요. 통장이 웃으며 말합니다: "당신은 즐겁겠지만… 저는 좀 쉬고 싶어요!"',
        best:'turtle', worst:'thrifty'},
      en:{name:'🎉 YOLO Wallet', tag:'"You only live once!"',
        desc:'Now over later! You spend freely on what you love. No regrets, but your wallet gets startled sometimes. It laughs: "You\'re having fun… but I\'d like a little rest!"',
        best:'turtle', worst:'thrifty'},
      ja:{name:'🎉 YOLO貯金箱', tag:'「人生は一度きり！」',
        desc:'未来より今この瞬間！好きなことには惜しみなく使います。後悔はないけど貯金箱はたまに驚きます。貯金箱が笑って：「あなたは楽しいけど…私は少し休みたい！」',
        best:'turtle', worst:'thrifty'},
      zh:{name:'🎉 YOLO钱包', tag:'"人生只有一次！"',
        desc:'当下比未来重要！喜欢的东西毫不吝啬。从不后悔，但钱包偶尔被吓到。它笑着说："你是开心了…但我想歇会儿！"',
        best:'turtle', worst:'thrifty'}
    },
    turtle: {
      ko:{name:'🐢 적금 거북이', tag:'"느리지만 꾸준히 모아요"',
        desc:'화려하진 않지만 매달 묵묵히 적금을 넣는 당신. 티끌 모아 태산을 진짜로 믿는 사람이에요. 통장이 든든하게 말합니다: "우리, 천천히 가도 분명 도착할 거예요."',
        best:'balance', worst:'impulse'},
      en:{name:'🐢 Savings Turtle', tag:'"Slow but steady"',
        desc:'Not flashy, but you quietly add to savings every month. You truly believe small drops make an ocean. Your wallet says reassuringly: "Slow as we are, we\'ll surely get there."',
        best:'balance', worst:'impulse'},
      ja:{name:'🐢 積立の亀', tag:'「ゆっくりでも着実に」',
        desc:'派手じゃないけど毎月黙々と積立するあなた。塵も積もれば山となるを本気で信じる人。貯金箱が頼もしく：「ゆっくりでも、きっと辿り着けます」',
        best:'balance', worst:'impulse'},
      zh:{name:'🐢 存钱乌龟', tag:'"慢但持续地存"',
        desc:'不张扬，但每月默默存钱的你。是真心相信积少成多的人。钱包踏实地说："我们慢慢来，也一定能到达。"',
        best:'balance', worst:'impulse'}
    },
    impulse: {
      ko:{name:'💳 충동구매 폭주 통장', tag:'"손이 먼저 결제했어요"',
        desc:'"이건 사야 해"가 입에 붙은 당신. 장바구니는 늘 가득, 택배는 매일 도착. 통장이 어지러워하며 외칩니다: "잠깐만요! 결제하기 전에 3초만… 제발 3초만!"',
        best:'guardian', worst:'empty'},
      en:{name:'💳 Impulse Buyer', tag:'"My hands checked out first"',
        desc:'"I have to buy this" is your catchphrase. Cart always full, packages arrive daily. Your wallet cries dizzily: "Wait! Just 3 seconds before you pay… please, 3 seconds!"',
        best:'guardian', worst:'empty'},
      ja:{name:'💳 衝動買い暴走貯金箱', tag:'「手が勝手に決済しました」',
        desc:'「これは買わなきゃ」が口癖のあなた。カートは常に満杯、宅配は毎日到着。貯金箱が目を回して叫びます：「待って！決済前に3秒だけ…お願い3秒！」',
        best:'guardian', worst:'empty'},
      zh:{name:'💳 冲动消费暴走钱包', tag:'"手比脑子先付款"',
        desc:'"这个必须买"是你的口头禅。购物车永远满，快递每天到。钱包晕头转向地喊："等等！付款前就3秒…求你了3秒！"',
        best:'guardian', worst:'empty'}
    },
    thrifty: {
      ko:{name:'🔒 짠돌이 금고지기', tag:'"한 푼도 못 나가요"',
        desc:'할인, 쿠폰, 적립은 기본. 1원도 허투루 안 쓰는 절약의 달인. 통장은 두둑하지만 가끔 외로워요. 통장이 슬쩍 말합니다: "가끔은… 당신을 위해 좀 써도 괜찮아요."',
        best:'investor', worst:'yolo'},
      en:{name:'🔒 Frugal Vault Keeper', tag:'"Not a single cent leaves"',
        desc:'Discounts, coupons, points — all standard. A master of saving who wastes nothing. Your account is full but a little lonely. Your wallet murmurs: "Sometimes… it\'s okay to spend a little on yourself."',
        best:'investor', worst:'yolo'},
      ja:{name:'🔒 ケチな金庫番', tag:'「一銭も出しません」',
        desc:'割引、クーポン、ポイントは基本。1円も無駄にしない節約の達人。貯金箱は満杯but たまに寂しい。貯金箱がそっと：「たまには…自分のために使ってもいいんですよ」',
        best:'investor', worst:'yolo'},
      zh:{name:'🔒 吝啬金库管理员', tag:'"一分钱也别想出去"',
        desc:'打折、优惠券、积分都是基本操作。一分钱都不浪费的节约大师。账户鼓鼓的，但偶尔有点孤单。钱包悄悄说："偶尔…为自己花一点也没关系。"',
        best:'investor', worst:'yolo'}
    },
    investor: {
      ko:{name:'📈 투자 모험가', tag:'"위험을 즐기는 도전자"',
        desc:'예금만으론 만족 못 하죠. 주식, 코인, 부동산 — 돈이 일하게 만드는 당신. 통장이 두근거리며 말합니다: "오늘은 또 어떤 모험일까요? 저도 같이 갈게요!"',
        best:'thrifty', worst:'empty'},
      en:{name:'📈 Investment Adventurer', tag:'"A challenger who loves risk"',
        desc:'Savings alone won\'t do. Stocks, crypto, real estate — you make money work. Your wallet says with a thrill: "What adventure today? I\'m coming with you!"',
        best:'thrifty', worst:'empty'},
      ja:{name:'📈 投資の冒険家', tag:'「リスクを楽しむ挑戦者」',
        desc:'預金だけじゃ満足しません。株、コイン、不動産 — お金を働かせるあなた。貯金箱がドキドキして：「今日はどんな冒険？私も一緒に行きます！」',
        best:'thrifty', worst:'empty'},
      zh:{name:'📈 投资冒险家', tag:'"享受风险的挑战者"',
        desc:'只存钱可不够。股票、币、房产——让钱替你工作的你。钱包激动地说："今天又是什么冒险？我也跟你一起去！"',
        best:'thrifty', worst:'empty'}
    },
    balance: {
      ko:{name:'☯️ 균형 통장', tag:'"쓸 땐 쓰고 모을 땐 모아요"',
        desc:'무리한 절약도, 과한 소비도 없는 황금 밸런스. 쓸 땐 즐기고 모을 땐 확실히 모으는 현명함. 통장이 평온하게 말합니다: "당신과 함께라면 저는 늘 평화롭습니다."',
        best:'turtle', worst:'impulse'},
      en:{name:'☯️ Balanced Wallet', tag:'"Spend when you should, save when you should"',
        desc:'No extreme saving, no excess spending — the golden balance. You enjoy when spending and save firmly when saving. Your wallet says calmly: "With you, I\'m always at peace."',
        best:'turtle', worst:'impulse'},
      ja:{name:'☯️ バランス貯金箱', tag:'「使う時は使い、貯める時は貯める」',
        desc:'無理な節約も過度な消費もない黄金バランス。使う時は楽しみ、貯める時はしっかり貯める賢さ。貯金箱が穏やかに：「あなたとならいつも平和です」',
        best:'turtle', worst:'impulse'},
      zh:{name:'☯️ 平衡钱包', tag:'"该花就花，该存就存"',
        desc:'没有过度节约，也没有过度消费的黄金平衡。花的时候享受，存的时候坚定的智慧。钱包平静地说："有你在，我永远很安心。"',
        best:'turtle', worst:'impulse'}
    }
  },
  questions: {
    ko:[
      {q:'월급날, 가장 먼저 하는 일은?',a:[
        {t:'카드값부터 막는다',s:{empty:3}},
        {t:'가계부에 수입 기록',s:{guardian:3}},
        {t:'그동안 참았던 거 지른다',s:{yolo:2,impulse:1}},
        {t:'정해둔 금액 자동 적금',s:{turtle:2,balance:1}}
      ]},
      {q:'갖고 싶은 물건이 생겼다',a:[
        {t:'고민 없이 바로 결제',s:{impulse:3}},
        {t:'한 달 고민 후 결정',s:{thrifty:2,guardian:1}},
        {t:'할인할 때까지 기다림',s:{thrifty:3}},
        {t:'살 만한지 예산부터 확인',s:{balance:2,guardian:1}}
      ]},
      {q:'통장 잔고를 확인할 때 기분은?',a:[
        {t:'볼 때마다 한숨',s:{empty:3}},
        {t:'뿌듯하고 든든',s:{thrifty:2,guardian:1}},
        {t:'별로 신경 안 씀',s:{yolo:2,impulse:1}},
        {t:'투자 수익률부터 확인',s:{investor:3}}
      ]},
      {q:'친구가 비싼 곳에 가자고 한다',a:[
        {t:'좋아! 인생은 한 번뿐',s:{yolo:3}},
        {t:'이번 달 예산 보고 결정',s:{balance:2,guardian:1}},
        {t:'더 싼 곳을 제안',s:{thrifty:3}},
        {t:'돈 없어서 다음에',s:{empty:2}}
      ]},
      {q:'여윳돈 100만원이 생겼다',a:[
        {t:'주식이나 코인에 투자',s:{investor:3}},
        {t:'전액 적금/예금',s:{turtle:2,thrifty:1}},
        {t:'반은 쓰고 반은 저축',s:{balance:3}},
        {t:'갖고 싶던 거 다 산다',s:{impulse:2,yolo:1}}
      ]},
      {q:'내 소비를 한마디로?',a:[
        {t:'늘 통장이 텅텅',s:{empty:3}},
        {t:'1원도 허투루 안 씀',s:{thrifty:3}},
        {t:'쓸 땐 쓰고 모을 땐 모음',s:{balance:3}},
        {t:'사고 나서 후회 반복',s:{impulse:3}}
      ]},
      {q:'카드 명세서를 받았을 때?',a:[
        {t:'"이걸 내가 다 썼다고?"',s:{impulse:2,empty:1}},
        {t:'예상한 그대로 정확',s:{guardian:3}},
        {t:'명세서? 안 봄',s:{yolo:2}},
        {t:'다음 달 계획 바로 세움',s:{balance:2,turtle:1}}
      ]},
      {q:'세일 기간이 다가온다',a:[
        {t:'필요한 것만 미리 리스트업',s:{guardian:2,balance:1}},
        {t:'장바구니 가득 담아둠',s:{impulse:3}},
        {t:'쿠폰까지 총동원해 최저가',s:{thrifty:3}},
        {t:'세일이어도 안 사면 0원',s:{empty:1,thrifty:1}}
      ]},
      {q:'노후 준비, 나는?',a:[
        {t:'연금·투자로 차근차근',s:{investor:2,turtle:1}},
        {t:'적금으로 꾸준히',s:{turtle:3}},
        {t:'아직 생각 안 함',s:{yolo:2,empty:1}},
        {t:'균형 있게 분산 중',s:{balance:3}}
      ]},
      {q:'갑자기 큰돈이 필요하면?',a:[
        {t:'비상금이 준비되어 있다',s:{guardian:2,thrifty:1}},
        {t:'적금을 깬다',s:{turtle:2}},
        {t:'당장 빌릴 곳부터 찾는다',s:{empty:3}},
        {t:'투자 자산을 일부 판다',s:{investor:3}}
      ]},
      {q:'쇼핑할 때 나의 모습은?',a:[
        {t:'필요한 것만 딱',s:{thrifty:2,balance:1}},
        {t:'세일이면 일단 담음',s:{impulse:3}},
        {t:'사고 싶은 거 다 삼',s:{yolo:2,impulse:1}},
        {t:'장바구니만 담고 안 삼',s:{thrifty:2,empty:1}}
      ]},
      {q:'내 통장이 나에게 바라는 건?',a:[
        {t:'제발 좀 채워줘',s:{empty:3}},
        {t:'가끔은 너를 위해 써',s:{thrifty:2,turtle:1}},
        {t:'지금처럼만 균형 있게',s:{balance:3}},
        {t:'결제 전에 3초만 생각해',s:{impulse:3}}
      ]}
    ],
    en:[
      {q:'On payday, the first thing you do?',a:[
        {t:'Pay off the card bill first',s:{empty:3}},
        {t:'Log the income in my ledger',s:{guardian:3}},
        {t:'Splurge on what I held back',s:{yolo:2,impulse:1}},
        {t:'Auto-transfer a set amount to savings',s:{turtle:2,balance:1}}
      ]},
      {q:'You spot something you want',a:[
        {t:'Buy it instantly, no hesitation',s:{impulse:3}},
        {t:'Mull it over for a month',s:{thrifty:2,guardian:1}},
        {t:'Wait until it goes on sale',s:{thrifty:3}},
        {t:'Check my budget first',s:{balance:2,guardian:1}}
      ]},
      {q:'How do you feel checking your balance?',a:[
        {t:'A sigh every single time',s:{empty:3}},
        {t:'Proud and secure',s:{thrifty:2,guardian:1}},
        {t:'I don\'t really care',s:{yolo:2,impulse:1}},
        {t:'I check my returns first',s:{investor:3}}
      ]},
      {q:'A friend suggests a pricey place',a:[
        {t:'Yes! You only live once',s:{yolo:3}},
        {t:'Decide after checking my budget',s:{balance:2,guardian:1}},
        {t:'Suggest somewhere cheaper',s:{thrifty:3}},
        {t:'Maybe next time, I\'m broke',s:{empty:2}}
      ]},
      {q:'You get a spare $1,000',a:[
        {t:'Invest in stocks or crypto',s:{investor:3}},
        {t:'All into savings',s:{turtle:2,thrifty:1}},
        {t:'Spend half, save half',s:{balance:3}},
        {t:'Buy everything I wanted',s:{impulse:2,yolo:1}}
      ]},
      {q:'Your spending in one phrase?',a:[
        {t:'Account always empty',s:{empty:3}},
        {t:'Never waste a cent',s:{thrifty:3}},
        {t:'Spend and save in balance',s:{balance:3}},
        {t:'Buy then regret, repeat',s:{impulse:3}}
      ]},
      {q:'When the card statement arrives?',a:[
        {t:'"I spent all THAT?"',s:{impulse:2,empty:1}},
        {t:'Exactly as I expected',s:{guardian:3}},
        {t:'Statement? I don\'t look',s:{yolo:2}},
        {t:'Plan next month right away',s:{balance:2,turtle:1}}
      ]},
      {q:'A big sale is coming up',a:[
        {t:'List only what I need in advance',s:{guardian:2,balance:1}},
        {t:'Fill my cart to the brim',s:{impulse:3}},
        {t:'Stack coupons for the lowest price',s:{thrifty:3}},
        {t:'Sale or not, buying nothing = $0',s:{empty:1,thrifty:1}}
      ]},
      {q:'Retirement prep — you?',a:[
        {t:'Pension & investments, step by step',s:{investor:2,turtle:1}},
        {t:'Steady savings',s:{turtle:3}},
        {t:'Haven\'t thought about it',s:{yolo:2,empty:1}},
        {t:'Diversifying with balance',s:{balance:3}}
      ]},
      {q:'If you suddenly need a lot of cash?',a:[
        {t:'I have an emergency fund ready',s:{guardian:2,thrifty:1}},
        {t:'Break into my savings',s:{turtle:2}},
        {t:'Scramble to find a place to borrow',s:{empty:3}},
        {t:'Sell some investment assets',s:{investor:3}}
      ]},
      {q:'You when shopping?',a:[
        {t:'Only what I need, done',s:{thrifty:2,balance:1}},
        {t:'On sale? Into the cart',s:{impulse:3}},
        {t:'Buy everything I want',s:{yolo:2,impulse:1}},
        {t:'Fill the cart but never check out',s:{thrifty:2,empty:1}}
      ]},
      {q:'What your wallet wishes from you?',a:[
        {t:'Please, just fill me up',s:{empty:3}},
        {t:'Spend on yourself sometimes',s:{thrifty:2,turtle:1}},
        {t:'Stay balanced, just like now',s:{balance:3}},
        {t:'Think 3 seconds before paying',s:{impulse:3}}
      ]}
    ],
    ja:[
      {q:'給料日、まず最初にすることは？',a:[
        {t:'まずカードの支払い',s:{empty:3}},
        {t:'家計簿に収入を記録',s:{guardian:3}},
        {t:'我慢してたものを買う',s:{yolo:2,impulse:1}},
        {t:'決めた額を自動積立',s:{turtle:2,balance:1}}
      ]},
      {q:'欲しいものができた',a:[
        {t:'迷わず即決済',s:{impulse:3}},
        {t:'1ヶ月悩んでから決定',s:{thrifty:2,guardian:1}},
        {t:'セールまで待つ',s:{thrifty:3}},
        {t:'まず予算を確認',s:{balance:2,guardian:1}}
      ]},
      {q:'残高を確認する時の気分は？',a:[
        {t:'見るたびにため息',s:{empty:3}},
        {t:'誇らしくて安心',s:{thrifty:2,guardian:1}},
        {t:'あまり気にしない',s:{yolo:2,impulse:1}},
        {t:'まず投資の利回りを確認',s:{investor:3}}
      ]},
      {q:'友達が高い店に行こうと言う',a:[
        {t:'いいね！人生一度きり',s:{yolo:3}},
        {t:'今月の予算を見て決める',s:{balance:2,guardian:1}},
        {t:'もっと安い店を提案',s:{thrifty:3}},
        {t:'お金ないから今度',s:{empty:2}}
      ]},
      {q:'余裕資金10万円ができた',a:[
        {t:'株やコインに投資',s:{investor:3}},
        {t:'全額貯金',s:{turtle:2,thrifty:1}},
        {t:'半分使って半分貯金',s:{balance:3}},
        {t:'欲しかったもの全部買う',s:{impulse:2,yolo:1}}
      ]},
      {q:'自分の消費を一言で？',a:[
        {t:'いつも口座が空っぽ',s:{empty:3}},
        {t:'1円も無駄にしない',s:{thrifty:3}},
        {t:'使う時は使い貯める時は貯める',s:{balance:3}},
        {t:'買って後悔の繰り返し',s:{impulse:3}}
      ]},
      {q:'カード明細が届いた時？',a:[
        {t:'「こんなに使った？」',s:{impulse:2,empty:1}},
        {t:'予想通りピッタリ',s:{guardian:3}},
        {t:'明細？見ない',s:{yolo:2}},
        {t:'すぐ来月の計画を立てる',s:{balance:2,turtle:1}}
      ]},
      {q:'セール時期が近づく',a:[
        {t:'必要な物だけ事前にリスト化',s:{guardian:2,balance:1}},
        {t:'カートを満杯にする',s:{impulse:3}},
        {t:'クーポン総動員で最安値',s:{thrifty:3}},
        {t:'セールでも買わなきゃ0円',s:{empty:1,thrifty:1}}
      ]},
      {q:'老後の準備、あなたは？',a:[
        {t:'年金・投資でコツコツ',s:{investor:2,turtle:1}},
        {t:'積立で着実に',s:{turtle:3}},
        {t:'まだ考えてない',s:{yolo:2,empty:1}},
        {t:'バランスよく分散中',s:{balance:3}}
      ]},
      {q:'急に大金が必要になったら？',a:[
        {t:'非常用資金が準備済み',s:{guardian:2,thrifty:1}},
        {t:'積立を崩す',s:{turtle:2}},
        {t:'すぐ借りる先を探す',s:{empty:3}},
        {t:'投資資産を一部売る',s:{investor:3}}
      ]},
      {q:'買い物中の自分は？',a:[
        {t:'必要な物だけきっちり',s:{thrifty:2,balance:1}},
        {t:'セールならとりあえずカートへ',s:{impulse:3}},
        {t:'欲しい物は全部買う',s:{yolo:2,impulse:1}},
        {t:'カートに入れても買わない',s:{thrifty:2,empty:1}}
      ]},
      {q:'貯金箱があなたに望むことは？',a:[
        {t:'お願いだから満たして',s:{empty:3}},
        {t:'たまには自分のために使って',s:{thrifty:2,turtle:1}},
        {t:'今みたいにバランスよく',s:{balance:3}},
        {t:'決済前に3秒考えて',s:{impulse:3}}
      ]}
    ],
    zh:[
      {q:'发薪日，你最先做的事？',a:[
        {t:'先还信用卡',s:{empty:3}},
        {t:'把收入记进账本',s:{guardian:3}},
        {t:'买下一直忍着的东西',s:{yolo:2,impulse:1}},
        {t:'自动转入固定金额存款',s:{turtle:2,balance:1}}
      ]},
      {q:'出现了想要的东西',a:[
        {t:'毫不犹豫立刻下单',s:{impulse:3}},
        {t:'纠结一个月再决定',s:{thrifty:2,guardian:1}},
        {t:'等打折再说',s:{thrifty:3}},
        {t:'先看预算够不够',s:{balance:2,guardian:1}}
      ]},
      {q:'查看余额时的心情？',a:[
        {t:'每次看都叹气',s:{empty:3}},
        {t:'自豪又踏实',s:{thrifty:2,guardian:1}},
        {t:'不太在意',s:{yolo:2,impulse:1}},
        {t:'先看投资收益率',s:{investor:3}}
      ]},
      {q:'朋友约你去贵的地方',a:[
        {t:'好啊！人生只有一次',s:{yolo:3}},
        {t:'看这月预算再决定',s:{balance:2,guardian:1}},
        {t:'提议去更便宜的',s:{thrifty:3}},
        {t:'没钱，下次吧',s:{empty:2}}
      ]},
      {q:'多出一笔闲钱',a:[
        {t:'投资股票或币',s:{investor:3}},
        {t:'全部存起来',s:{turtle:2,thrifty:1}},
        {t:'一半花一半存',s:{balance:3}},
        {t:'把想要的全买了',s:{impulse:2,yolo:1}}
      ]},
      {q:'一句话形容你的消费？',a:[
        {t:'账户总是空空',s:{empty:3}},
        {t:'一分钱都不浪费',s:{thrifty:3}},
        {t:'该花花该存存',s:{balance:3}},
        {t:'买完就后悔循环',s:{impulse:3}}
      ]},
      {q:'收到信用卡账单时？',a:[
        {t:'"这些都是我花的？"',s:{impulse:2,empty:1}},
        {t:'和预想的分毫不差',s:{guardian:3}},
        {t:'账单？不看',s:{yolo:2}},
        {t:'马上规划下个月',s:{balance:2,turtle:1}}
      ]},
      {q:'打折季临近',a:[
        {t:'提前列好只买需要的',s:{guardian:2,balance:1}},
        {t:'购物车塞满',s:{impulse:3}},
        {t:'优惠券全用上凑最低价',s:{thrifty:3}},
        {t:'打折也不买就是省钱',s:{empty:1,thrifty:1}}
      ]},
      {q:'养老准备，你是？',a:[
        {t:'养老金·投资慢慢来',s:{investor:2,turtle:1}},
        {t:'靠存款稳步进行',s:{turtle:3}},
        {t:'还没想过',s:{yolo:2,empty:1}},
        {t:'均衡分散中',s:{balance:3}}
      ]},
      {q:'突然需要一大笔钱？',a:[
        {t:'已备好应急金',s:{guardian:2,thrifty:1}},
        {t:'动用存款',s:{turtle:2}},
        {t:'马上找地方借',s:{empty:3}},
        {t:'卖掉部分投资资产',s:{investor:3}}
      ]},
      {q:'购物时的你？',a:[
        {t:'只买需要的，干脆',s:{thrifty:2,balance:1}},
        {t:'打折就先加购物车',s:{impulse:3}},
        {t:'想买的全买',s:{yolo:2,impulse:1}},
        {t:'只加购物车不结账',s:{thrifty:2,empty:1}}
      ]},
      {q:'你的钱包希望你做什么？',a:[
        {t:'求求你填满我',s:{empty:3}},
        {t:'偶尔也为自己花点',s:{thrifty:2,turtle:1}},
        {t:'像现在这样保持平衡',s:{balance:3}},
        {t:'付款前想3秒',s:{impulse:3}}
      ]}
    ]
  }
};
console.log('test_wallet.js loaded');
