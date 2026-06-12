/* ===========================================================
   나의 주식 손실 반응 테스트 (stock-loss)
   8유형 × 12문항 × 4언어
   =========================================================== */

const TEST_STOCK = {
  id: 'stock-loss',
  emoji: '📉',

  resultLabel: {
    ko: '나의 주식 투자 유형은',
    en: 'Your stock investor type is',
    ja: '私の株式投資タイプは',
    zh: '我的股票投资类型是'
  },

  typeList: ['panic','hold','buy','cut','fomo','research','divine','sleep'],

  meta: {
    panic:    { img: 'images/stock_panic.jpg',    color: '#c0392b', ink: '#fff' },
    hold:     { img: 'images/stock_hold.jpg',     color: '#1a2a5e', ink: '#fff' },
    buy:      { img: 'images/stock_buy.jpg',      color: '#e67e00', ink: '#fff' },
    cut:      { img: 'images/stock_cut.jpg',      color: '#e74c3c', ink: '#fff' },
    fomo:     { img: 'images/stock_fomo.jpg',     color: '#27ae60', ink: '#fff' },
    research: { img: 'images/stock_research.jpg', color: '#1a3a4a', ink: '#fff' },
    divine:   { img: 'images/stock_divine.jpg',   color: '#6a0dad', ink: '#fff' },
    sleep:    { img: 'images/stock_sleep.jpg',    color: '#3a5a8a', ink: '#fff' }
  },

  types: {
    panic: {
      ko: { name: '😱 패닉셀러', tag: '#공포매도 #떨리는손 #후회반복',
        desc: '주가가 떨어지기 시작하면 심장이 먼저 반응합니다. "더 떨어지기 전에 팔아야 해!" 손이 먼저 움직이고 나서야 뇌가 따라옵니다. 매도 후 주가가 반등하면 땅을 치지만, 다음에도 똑같이 반응하는 것이 당신의 매력입니다. 손실보다 불안이 더 무서운 타입.',
        best: 'cut', worst: 'buy' },
      en: { name: '😱 Panic Seller', tag: '#PanicSell #TremblingHands #RegretLoop',
        desc: 'When the price starts dropping, your heart reacts first. "Gotta sell before it falls more!" Your hands move before your brain catches up. You beat yourself up when it rebounds after you sell — but you\'ll react the exact same way next time. You fear anxiety more than actual losses.',
        best: 'cut', worst: 'buy' },
      ja: { name: '😱 パニック売り', tag: '#恐怖売り #震える手 #後悔ループ',
        desc: '株価が下がり始めると、心臓が先に反応します。「もっと下がる前に売らなきゃ！」手が先に動いてから脳がついてきます。売った後に株価が反発すると悔しいですが、次も同じ反応をするのがあなたの魅力です。損失より不安の方が怖いタイプ。',
        best: 'cut', worst: 'buy' },
      zh: { name: '😱 恐慌抛售者', tag: '#恐慌卖出 #颤抖的手 #后悔循环',
        desc: '股价一开始下跌，心脏先有反应。"要在跌更多之前卖掉！"手比脑子先动。卖出后股价反弹就捶胸顿足，但下次还是会同样反应，这就是你的特色。比起实际亏损，更害怕焦虑的类型。',
        best: 'cut', worst: 'buy' }
    },
    hold: {
      ko: { name: '💎 존버왕', tag: '#다이아몬드손 #장기투자 #흔들림없음',
        desc: '-30%? 그게 어쨌다고. 진짜 투자자는 단기 등락에 흔들리지 않습니다. 차트가 폭락해도 "언젠간 오른다"는 믿음 하나로 버텨냅니다. 주변에서 "팔아야 하지 않아?"라고 해도 눈 하나 깜짝 안 합니다. 다이아몬드 손의 소유자, 당신이 진짜 존버왕입니다.',
        best: 'research', worst: 'panic' },
      en: { name: '💎 Diamond Hands', tag: '#DiamondHands #LongTerm #Unshakeable',
        desc: 'Down 30%? So what. Real investors don\'t flinch at short-term swings. Even when charts crash, you hold on with one belief: "It\'ll go up eventually." When everyone around you says "shouldn\'t you sell?", you don\'t even blink. True diamond hands — you are the ultimate HODLer.',
        best: 'research', worst: 'panic' },
      ja: { name: '💎 ガチホ王', tag: '#ダイヤモンドハンド #長期投資 #ぶれない',
        desc: '-30%？それがどうした。本物の投資家は短期の上下に動じません。チャートが暴落しても「いつかは上がる」という信念一つで耐え抜きます。周りが「売らなくていいの？」と言っても目一つ瞬きしません。ダイヤモンドハンドの持ち主、あなたこそ真のガチホ王です。',
        best: 'research', worst: 'panic' },
      zh: { name: '💎 钻石手', tag: '#钻石手 #长期投资 #岿然不动',
        desc: '跌30%？那又怎样。真正的投资者不会被短期涨跌动摇。即使图表暴跌，也凭借"总有一天会涨"的信念坚持下去。周围的人说"你不卖吗？"也眼睛都不眨一下。钻石手的拥有者，你才是真正的长期持有王。',
        best: 'research', worst: 'panic' }
    },
    buy: {
      ko: { name: '🛒 물타기신', tag: '#평단낮추기 #배짱투자 #긍정회로',
        desc: '주가가 떨어질수록 오히려 신이 납니다. "평단을 낮출 기회야!" 남들이 공포에 떨 때 당신은 장바구니를 채웁니다. 물타기가 성공하면 천재, 실패하면... 더 삽니다. 끝없는 긍정 회로와 배짱으로 무장한 당신은 하락장의 쇼핑왕입니다.',
        best: 'hold', worst: 'panic' },
      en: { name: '🛒 Dip Buyer', tag: '#AveragingDown #GutInvesting #PositiveLoop',
        desc: 'The lower the price falls, the more excited you get. "It\'s a chance to lower my average!" While others tremble in fear, you fill your shopping cart. If averaging down works, you\'re a genius. If it fails... you buy more. Armed with endless optimism and nerve, you are the king of bear market shopping.',
        best: 'hold', worst: 'panic' },
      ja: { name: '🛒 ナンピン神', tag: '#平均単価下げ #度胸投資 #ポジティブ回路',
        desc: '株価が下がるほどむしろ気分が上がります。「平均単価を下げるチャンスだ！」他の人が恐怖で震えている時、あなたはカートに商品を入れます。ナンピンが成功すれば天才、失敗すれば…さらに買います。果てしないポジティブ回路と度胸で武装したあなたは、下落相場のショッピング王です。',
        best: 'hold', worst: 'panic' },
      zh: { name: '🛒 越跌越买', tag: '#摊低成本 #胆大投资 #正面思维',
        desc: '股价越跌越兴奋。"这是摊低成本的机会！"别人恐慌时，你在往购物车里装。摊低成本成功了是天才，失败了……再多买点。凭借无尽的乐观和胆量，你是下跌市场的购物之王。',
        best: 'hold', worst: 'panic' }
    },
    cut: {
      ko: { name: '✂️ 칼손절러', tag: '#원칙매매 #냉정함 #리스크관리',
        desc: '손절선 -5%, 딱 거기서 자릅니다. 감정 없이, 미련 없이. "이미 산 건 매몰비용"이라는 투자 원칙을 철저히 지킵니다. 손절 후 주가가 올라도 흔들리지 않습니다. 감정보다 원칙이 먼저인 당신은 투자판의 냉철한 외과의사입니다.',
        best: 'research', worst: 'buy' },
      en: { name: '✂️ Stop-Loss Surgeon', tag: '#RuleBasedTrading #ColdLogic #RiskManagement',
        desc: 'Stop-loss at -5%: that\'s exactly where you cut. No emotion, no regret. You strictly follow the principle that "what you\'ve already bought is a sunk cost." Even if the price rises after you cut, you don\'t waver. You put principles before feelings — you are the cold, precise surgeon of investing.',
        best: 'research', worst: 'buy' },
      ja: { name: '✂️ 損切り職人', tag: '#ルールトレード #冷静 #リスク管理',
        desc: '損切りライン-5%、そこでズバッと切ります。感情なし、未練なし。「すでに買ったものはサンクコスト」という投資原則を徹底して守ります。損切り後に株価が上がっても動じません。感情より原則が先のあなたは、投資界の冷徹な外科医です。',
        best: 'research', worst: 'buy' },
      zh: { name: '✂️ 止损达人', tag: '#纪律交易 #冷静 #风险管理',
        desc: '止损线-5%，就在那里果断砍仓。无情绪，无留恋。严格遵守"已买入的是沉没成本"的投资原则。止损后股价上涨也不动摇。原则先于感情的你，是投资界冷静的外科医生。',
        best: 'research', worst: 'buy' }
    },
    fomo: {
      ko: { name: '🚀 뇌동매매러', tag: '#FOMO #단톡방필수 #올라탈때매수',
        desc: '"○○ 급등 ㄱㄱ" 메시지 하나면 충분합니다. 이유는 나중에 찾아보면 됩니다. 로켓이 발사된 걸 보면 일단 올라타야 직성이 풀립니다. 수익날 때의 짜릿함은 최고지만 뒤늦게 올라탄 로켓은... 결말을 알면서도 멈출 수 없는 당신입니다.',
        best: 'research', worst: 'hold' },
      en: { name: '🚀 FOMO Trader', tag: '#FOMO #GroupChatAddict #BuyWhenItPops',
        desc: 'One message saying "XXX surging, get in 🚀" is all it takes. You can look up the reason later. When you see a rocket launching, you just have to get on. The thrill when it works is unbeatable — but the late-launch rocket\'s ending... you know how it goes, yet you can\'t stop.',
        best: 'research', worst: 'hold' },
      ja: { name: '🚀 雰囲気トレーダー', tag: '#FOMO #グループチャット必須 #上がる時に買う',
        desc: '「○○急騰ゴーゴー」のメッセージ一つで十分です。理由は後で調べればいい。ロケットが発射されたら、とにかく乗らないと気が済みません。利益が出た時のスリルは最高ですが、乗り遅れたロケットは…結末を知っていても止められないあなたです。',
        best: 'research', worst: 'hold' },
      zh: { name: '🚀 追涨杀跌', tag: '#FOMO #群聊必看 #涨了才买',
        desc: '"○○急涨，冲啊🚀"一条消息就够了。理由以后再查。看到火箭发射了就必须上车才甘心。盈利时的刺激感无与伦比，但上车晚的火箭……明知结局却停不下来，这就是你。',
        best: 'research', worst: 'hold' }
    },
    research: {
      ko: { name: '📊 분석가형', tag: '#차트중독 #데이터신봉 #6모니터',
        desc: '매수 전 재무제표, 차트, 뉴스, 애널리스트 리포트를 모두 섭렵합니다. 모니터가 6개여도 부족합니다. 커피를 달고 살며 데이터 속에서 진실을 찾아냅니다. 분석하다가 매수 타이밍을 놓치는 게 유일한 단점이지만, 그래도 당신의 원칙은 흔들리지 않습니다.',
        best: 'cut', worst: 'divine' },
      en: { name: '📊 The Analyst', tag: '#ChartAddict #DataDriven #SixMonitors',
        desc: 'Before buying, you go through financial statements, charts, news, and analyst reports — all of them. Six monitors still aren\'t enough. You live on coffee, searching for truth in the data. Missing your entry point while analyzing is your only flaw, but even so, your principles never waver.',
        best: 'cut', worst: 'divine' },
      ja: { name: '📊 分析家タイプ', tag: '#チャート中毒 #データ信奉 #6モニター',
        desc: '買う前に財務諸表、チャート、ニュース、アナリストレポートをすべて読み込みます。モニターが6台でも足りません。コーヒーを飲みながらデータの中に真実を探し出します。分析しすぎて買いタイミングを逃すのが唯一の欠点ですが、それでもあなたの原則は揺るぎません。',
        best: 'cut', worst: 'divine' },
      zh: { name: '📊 分析师型', tag: '#图表成瘾 #数据驱动 #六屏显示器',
        desc: '买入前把财务报表、图表、新闻、分析师报告全部研读一遍。六个显示器都不够用。喝着咖啡在数据中寻找真相。分析过头错过买入时机是唯一的缺点，即便如此，你的原则也从不动摇。',
        best: 'cut', worst: 'divine' }
    },
    divine: {
      ko: { name: '🔮 감으로산다', tag: '#직관투자 #근거없는확신 #느낌이와',
        desc: '"왜 샀어?" "그냥 느낌이 왔어." 차트도 재무제표도 필요 없습니다. 오늘 아침 꿈에서 계시를 받았거나, 길을 가다 번뜩이는 영감이 왔거나. 맞을 때는 신의 경지, 틀릴 때는 우주의 배신. 논리 대신 직관을 믿는 투자 세계의 무당입니다.',
        best: 'fomo', worst: 'research' },
      en: { name: '🔮 Gut Investor', tag: '#IntuitiveInvesting #UngroundedConviction #ItJustFeelsRight',
        desc: '"Why did you buy that?" "I just had a feeling." No charts, no financial statements needed. Maybe you got a revelation in a dream this morning, or a flash of inspiration hit you on your walk. When it works, you\'re a prophet. When it doesn\'t, the universe betrayed you. You are the shaman of the investing world.',
        best: 'fomo', worst: 'research' },
      ja: { name: '🔮 カン投資家', tag: '#直感投資 #根拠なき確信 #ピンときた',
        desc: '「なんで買ったの？」「なんとなくピンときた」チャートも財務諸表も必要ありません。今朝の夢でお告げを受けたか、道を歩いていてひらめいたか。当たった時は神の域、外れた時は宇宙の裏切り。論理より直感を信じる投資界の占い師です。',
        best: 'fomo', worst: 'research' },
      zh: { name: '🔮 靠感觉投资', tag: '#直觉投资 #无根据的确信 #感觉来了',
        desc: '"你为什么买？""就是感觉来了。"不需要图表也不需要财务报表。也许今早做梦得到了启示，或者走路时突然有了灵感。猜对了是神的境界，猜错了是宇宙的背叛。比起逻辑更相信直觉的投资界巫师。',
        best: 'fomo', worst: 'research' }
    },
    sleep: {
      ko: { name: '😴 묻어두고잔다', tag: '#초장기투자 #무관심전략 #수면투자',
        desc: '매수하고 앱을 닫습니다. 그리고 잊어버립니다. -30%도 +50%도 그냥 자는 동안 일어난 일입니다. 사실 이 전략이 개인투자자에게 가장 수익률이 높다는 연구 결과도 있습니다. 무관심이 최고의 전략임을 몸으로 증명하는, 투자계의 현인입니다.',
        best: 'hold', worst: 'fomo' },
      en: { name: '😴 Sleep Investor', tag: '#UltraLongTerm #IgnoreStrategy #SleepThroughIt',
        desc: 'You buy, close the app, and forget about it. Down 30%, up 50% — it all just happens while you sleep. Studies actually show this strategy delivers the highest returns for individual investors. You prove with your own life that indifference is the ultimate strategy — you are the sage of investing.',
        best: 'hold', worst: 'fomo' },
      ja: { name: '😴 放置投資家', tag: '#超長期投資 #無関心戦略 #寝ながら投資',
        desc: '買ってアプリを閉じます。そして忘れます。-30%も+50%も、寝ている間に起きたことです。実はこの戦略が個人投資家に最も高いリターンをもたらすという研究結果もあります。無関心が最高の戦略であることを体で証明する、投資界の賢人です。',
        best: 'hold', worst: 'fomo' },
      zh: { name: '😴 放着不管派', tag: '#超长期投资 #无关心策略 #睡着投资',
        desc: '买入后关掉app，然后忘掉它。跌30%还是涨50%，都只是睡觉时发生的事。事实上有研究表明这种策略对个人投资者收益率最高。用亲身经历证明无关心才是最好策略的你，是投资界的智者。',
        best: 'hold', worst: 'fomo' }
    }
  },

  questions: {
    ko: [
      { q: '보유 주식이 -10% 됐다. 첫 반응은?', a: [
        { t: '심장이 쿵 내려앉는다', s: {panic:2,fomo:1} },
        { t: '손절선 확인하고 기다린다', s: {cut:2,research:1} },
        { t: '추가 매수 타이밍 재본다', s: {buy:2,hold:1} },
        { t: '어차피 장기투자, 신경 안 쓴다', s: {sleep:2,hold:1} }
      ]},
      { q: '주식 매수 전 나는?', a: [
        { t: '차트, 재무제표, 뉴스까지 다 본다', s: {research:2,cut:1} },
        { t: '느낌이 오면 그냥 산다', s: {divine:2,fomo:1} },
        { t: '단톡방이나 커뮤니티 반응을 본다', s: {fomo:2,panic:1} },
        { t: '그냥 사고 오래 기다린다', s: {sleep:2,hold:1} }
      ]},
      { q: '친구가 "○○ 주식 지금 급등 중이야!" 라고 하면?', a: [
        { t: '일단 사고 이유는 나중에 찾는다', s: {fomo:2,divine:1} },
        { t: '내가 분석해보고 판단한다', s: {research:2,cut:1} },
        { t: '"얼마나 올랐는데?" 하고 무시한다', s: {sleep:2,hold:1} },
        { t: '이미 많이 올랐으면 무섭다', s: {panic:2,cut:1} }
      ]},
      { q: '투자에서 가장 중요한 것은?', a: [
        { t: '철저한 원칙과 리스크 관리', s: {cut:2,research:1} },
        { t: '시간과 인내심', s: {hold:2,sleep:1} },
        { t: '빠른 판단과 행동력', s: {fomo:2,panic:1} },
        { t: '데이터와 분석', s: {research:2,cut:1} }
      ]},
      { q: '주가가 내 예상과 반대로 움직일 때?', a: [
        { t: '빠르게 손절하고 다음 기회를 본다', s: {cut:2,research:1} },
        { t: '더 사서 평단을 낮춘다', s: {buy:2,hold:1} },
        { t: '일단 버티면서 기다린다', s: {hold:2,sleep:1} },
        { t: '불안해서 잠을 못 잔다', s: {panic:2,fomo:1} }
      ]},
      { q: '나의 투자 스타일에 가까운 것은?', a: [
        { t: '감과 직관으로 결정한다', s: {divine:2,fomo:1} },
        { t: '데이터 기반으로 냉정하게 판단한다', s: {research:2,cut:1} },
        { t: '사고 나서 잊어버린다', s: {sleep:2,hold:1} },
        { t: '시장 분위기를 따라간다', s: {fomo:2,panic:1} }
      ]},
      { q: '수익이 +30% 됐다. 어떻게 할까?', a: [
        { t: '목표가까지 기다린다', s: {hold:2,research:1} },
        { t: '일부 수익 실현하고 나머지는 보유', s: {cut:2,research:1} },
        { t: '더 오를 것 같아서 그냥 둔다', s: {divine:2,sleep:1} },
        { t: '빨리 팔고 싶다, 언제 떨어질지 무섭다', s: {panic:2,fomo:1} }
      ]},
      { q: '주식 시장이 급락하는 날, 나는?', a: [
        { t: '패닉 상태로 뉴스와 차트를 계속 본다', s: {panic:2,research:1} },
        { t: '쇼핑 찬스라며 저가 매수에 나선다', s: {buy:2,fomo:1} },
        { t: '침착하게 손절선만 지킨다', s: {cut:2,hold:1} },
        { t: '몰라, 일단 자고 내일 본다', s: {sleep:2,divine:1} }
      ]},
      { q: '투자 손실로 스트레스받을 때 나는?', a: [
        { t: '원인을 분석하고 전략을 수정한다', s: {research:2,cut:1} },
        { t: '그냥 잊고 다른 일 한다', s: {sleep:2,hold:1} },
        { t: '밤새 차트를 보며 걱정한다', s: {panic:2,fomo:1} },
        { t: '"이건 기회야"라고 긍정적으로 생각한다', s: {buy:2,divine:1} }
      ]},
      { q: '가장 공감되는 투자 격언은?', a: [
        { t: '"계란을 한 바구니에 담지 마라"', s: {research:2,cut:1} },
        { t: '"10년 보유할 주식이 아니면 10분도 보유하지 마라"', s: {hold:2,sleep:1} },
        { t: '"공포에 사고 탐욕에 팔아라"', s: {buy:2,cut:1} },
        { t: '"느낌이 오면 그게 답이다"', s: {divine:2,fomo:1} }
      ]},
      { q: '주변 사람들은 내 투자 스타일을 어떻게 볼까?', a: [
        { t: '"너무 쫄보야, 조금만 버텨봐"', s: {panic:2,cut:1} },
        { t: '"어떻게 그렇게 침착해?"', s: {hold:2,sleep:1} },
        { t: '"근거가 없잖아, 왜 그걸 사?"', s: {divine:2,fomo:1} },
        { t: '"분석은 잘 하는데 너무 느려"', s: {research:2,cut:1} }
      ]},
      { q: '이상적인 투자 결과는?', a: [
        { t: '10년 후 10배 수익', s: {hold:2,sleep:1} },
        { t: '매달 꾸준한 소액 수익', s: {cut:2,research:1} },
        { t: '대박 한 방', s: {divine:2,fomo:1} },
        { t: '손실 없이 원금 보전', s: {panic:2,buy:1} }
      ]}
    ],

    en: [
      { q: 'Your stock is down -10%. What\'s your first reaction?', a: [
        { t: 'My heart sinks instantly', s: {panic:2,fomo:1} },
        { t: 'Check my stop-loss line and wait', s: {cut:2,research:1} },
        { t: 'Think about adding more to lower my average', s: {buy:2,hold:1} },
        { t: 'It\'s a long-term hold anyway — I don\'t care', s: {sleep:2,hold:1} }
      ]},
      { q: 'Before buying a stock, I…', a: [
        { t: 'Go through charts, financials, and news', s: {research:2,cut:1} },
        { t: 'Just buy it when I get a feeling', s: {divine:2,fomo:1} },
        { t: 'Check group chats and online communities', s: {fomo:2,panic:1} },
        { t: 'Just buy it and wait a long time', s: {sleep:2,hold:1} }
      ]},
      { q: 'A friend says "XXX stock is surging right now!" You…', a: [
        { t: 'Buy first, find the reason later', s: {fomo:2,divine:1} },
        { t: 'Do my own analysis and decide', s: {research:2,cut:1} },
        { t: 'Say "how much is it up?" and ignore it', s: {sleep:2,hold:1} },
        { t: 'Feel scared if it\'s already gone up a lot', s: {panic:2,cut:1} }
      ]},
      { q: 'The most important thing in investing is…', a: [
        { t: 'Strict principles and risk management', s: {cut:2,research:1} },
        { t: 'Time and patience', s: {hold:2,sleep:1} },
        { t: 'Quick judgment and action', s: {fomo:2,panic:1} },
        { t: 'Data and analysis', s: {research:2,cut:1} }
      ]},
      { q: 'When the stock moves opposite to my expectation, I…', a: [
        { t: 'Cut losses fast and look for the next opportunity', s: {cut:2,research:1} },
        { t: 'Buy more to lower my average', s: {buy:2,hold:1} },
        { t: 'Hold and wait it out', s: {hold:2,sleep:1} },
        { t: 'Feel so anxious I can\'t sleep', s: {panic:2,fomo:1} }
      ]},
      { q: 'The investing style closest to mine is…', a: [
        { t: 'I go with gut feeling and intuition', s: {divine:2,fomo:1} },
        { t: 'I make cold, data-driven decisions', s: {research:2,cut:1} },
        { t: 'I buy and forget about it', s: {sleep:2,hold:1} },
        { t: 'I follow market sentiment and trends', s: {fomo:2,panic:1} }
      ]},
      { q: 'Your stock is up +30%. What do you do?', a: [
        { t: 'Wait until it hits my target price', s: {hold:2,research:1} },
        { t: 'Take partial profits and hold the rest', s: {cut:2,research:1} },
        { t: 'Feels like it\'ll keep rising, just leave it', s: {divine:2,sleep:1} },
        { t: 'Want to sell quickly — scared it might drop', s: {panic:2,fomo:1} }
      ]},
      { q: 'On a day the market crashes, I…', a: [
        { t: 'Panic and obsessively watch news and charts', s: {panic:2,research:1} },
        { t: 'Go on a shopping spree for discounted stocks', s: {buy:2,fomo:1} },
        { t: 'Calmly stick to my stop-loss line only', s: {cut:2,hold:1} },
        { t: 'Don\'t care, going to sleep and checking tomorrow', s: {sleep:2,divine:1} }
      ]},
      { q: 'When stressed from investment losses, I…', a: [
        { t: 'Analyze what went wrong and adjust my strategy', s: {research:2,cut:1} },
        { t: 'Just forget about it and do something else', s: {sleep:2,hold:1} },
        { t: 'Stay up all night staring at charts and worrying', s: {panic:2,fomo:1} },
        { t: 'Think positively — "this is an opportunity"', s: {buy:2,divine:1} }
      ]},
      { q: 'The investing quote I relate to most is…', a: [
        { t: '"Don\'t put all your eggs in one basket"', s: {research:2,cut:1} },
        { t: '"If you\'re not willing to hold for 10 years, don\'t hold for 10 minutes"', s: {hold:2,sleep:1} },
        { t: '"Buy on fear, sell on greed"', s: {buy:2,cut:1} },
        { t: '"When you get a feeling, that\'s your answer"', s: {divine:2,fomo:1} }
      ]},
      { q: 'How do people around me see my investing style?', a: [
        { t: '"You\'re too scared — just hold a little longer"', s: {panic:2,cut:1} },
        { t: '"How are you so calm about this?"', s: {hold:2,sleep:1} },
        { t: '"There\'s no logic — why did you buy that?"', s: {divine:2,fomo:1} },
        { t: '"Your analysis is great but you\'re too slow to act"', s: {research:2,cut:1} }
      ]},
      { q: 'My ideal investment outcome is…', a: [
        { t: '10x returns in 10 years', s: {hold:2,sleep:1} },
        { t: 'Steady small gains every month', s: {cut:2,research:1} },
        { t: 'One massive jackpot', s: {divine:2,fomo:1} },
        { t: 'No losses, just getting my principal back safely', s: {panic:2,buy:1} }
      ]}
    ],

    ja: [
      { q: '保有株が-10%になった。最初の反応は？', a: [
        { t: '心臓がドキッとする', s: {panic:2,fomo:1} },
        { t: '損切りラインを確認して待つ', s: {cut:2,research:1} },
        { t: '追加購入のタイミングを計る', s: {buy:2,hold:1} },
        { t: 'どうせ長期投資、気にしない', s: {sleep:2,hold:1} }
      ]},
      { q: '株を買う前、私は？', a: [
        { t: 'チャート、財務諸表、ニュースまで全部見る', s: {research:2,cut:1} },
        { t: 'ピンときたらそのまま買う', s: {divine:2,fomo:1} },
        { t: 'グループチャットやコミュニティの反応を見る', s: {fomo:2,panic:1} },
        { t: 'とりあえず買って長く待つ', s: {sleep:2,hold:1} }
      ]},
      { q: '友達が「○○株が今急騰中だよ！」と言ったら？', a: [
        { t: 'とりあえず買って理由は後で探す', s: {fomo:2,divine:1} },
        { t: '自分で分析してから判断する', s: {research:2,cut:1} },
        { t: '「いくら上がったの？」と言って無視する', s: {sleep:2,hold:1} },
        { t: 'すでに上がっていたら怖い', s: {panic:2,cut:1} }
      ]},
      { q: '投資で最も重要なことは？', a: [
        { t: '徹底した原則とリスク管理', s: {cut:2,research:1} },
        { t: '時間と忍耐', s: {hold:2,sleep:1} },
        { t: '素早い判断と行動力', s: {fomo:2,panic:1} },
        { t: 'データと分析', s: {research:2,cut:1} }
      ]},
      { q: '株価が予想と逆に動いたとき？', a: [
        { t: '素早く損切りして次の機会を探す', s: {cut:2,research:1} },
        { t: 'さらに買って平均単価を下げる', s: {buy:2,hold:1} },
        { t: 'とりあえず耐えて待つ', s: {hold:2,sleep:1} },
        { t: '不安で眠れない', s: {panic:2,fomo:1} }
      ]},
      { q: '自分の投資スタイルに近いのは？', a: [
        { t: '感覚と直感で決める', s: {divine:2,fomo:1} },
        { t: 'データ基準で冷静に判断する', s: {research:2,cut:1} },
        { t: '買ったら忘れる', s: {sleep:2,hold:1} },
        { t: '市場の雰囲気についていく', s: {fomo:2,panic:1} }
      ]},
      { q: '株が+30%になった。どうする？', a: [
        { t: '目標株価まで待つ', s: {hold:2,research:1} },
        { t: '一部利確して残りは保有', s: {cut:2,research:1} },
        { t: 'まだ上がりそうだからそのままにする', s: {divine:2,sleep:1} },
        { t: '早く売りたい、いつ下がるか怖い', s: {panic:2,fomo:1} }
      ]},
      { q: '株式市場が急落した日、私は？', a: [
        { t: 'パニック状態でニュースとチャートを見続ける', s: {panic:2,research:1} },
        { t: 'お買い得チャンスとばかりに安値で買いに行く', s: {buy:2,fomo:1} },
        { t: '冷静に損切りラインだけを守る', s: {cut:2,hold:1} },
        { t: 'とりあえず寝て明日見る', s: {sleep:2,divine:1} }
      ]},
      { q: '投資損失でストレスを感じるとき？', a: [
        { t: '原因を分析して戦略を修正する', s: {research:2,cut:1} },
        { t: '忘れて他のことをする', s: {sleep:2,hold:1} },
        { t: '一晩中チャートを見て心配する', s: {panic:2,fomo:1} },
        { t: '「これはチャンスだ」とポジティブに考える', s: {buy:2,divine:1} }
      ]},
      { q: '最も共感できる投資格言は？', a: [
        { t: '「卵を一つのカゴに盛るな」', s: {research:2,cut:1} },
        { t: '「10年保有しない株は10分も持つな」', s: {hold:2,sleep:1} },
        { t: '「恐怖で買って欲で売れ」', s: {buy:2,cut:1} },
        { t: '「ピンときたらそれが答えだ」', s: {divine:2,fomo:1} }
      ]},
      { q: '周りの人は私の投資スタイルをどう見ている？', a: [
        { t: '「겁쟁이すぎ、もう少し待ってみて」', s: {panic:2,cut:1} },
        { t: '「どうしてそんなに落ち着いてるの？」', s: {hold:2,sleep:1} },
        { t: '「根拠がないじゃん、なんでそれ買うの？」', s: {divine:2,fomo:1} },
        { t: '「分析は上手だけど遅すぎる」', s: {research:2,cut:1} }
      ]},
      { q: '理想的な投資結果は？', a: [
        { t: '10年後に10倍の収益', s: {hold:2,sleep:1} },
        { t: '毎月安定した少額収益', s: {cut:2,research:1} },
        { t: '大当たり一発', s: {divine:2,fomo:1} },
        { t: '損失なしで元本を守る', s: {panic:2,buy:1} }
      ]}
    ],

    zh: [
      { q: '持仓股票跌了-10%，第一反应是？', a: [
        { t: '心里咯噔一下', s: {panic:2,fomo:1} },
        { t: '确认止损线，等待', s: {cut:2,research:1} },
        { t: '考虑加仓摊低成本', s: {buy:2,hold:1} },
        { t: '反正是长期投资，不在乎', s: {sleep:2,hold:1} }
      ]},
      { q: '买股票前，我会…', a: [
        { t: '看图表、财报、新闻全部研究一遍', s: {research:2,cut:1} },
        { t: '感觉来了就直接买', s: {divine:2,fomo:1} },
        { t: '看群聊和社区的反应', s: {fomo:2,panic:1} },
        { t: '买了就等着', s: {sleep:2,hold:1} }
      ]},
      { q: '朋友说"○○股票现在急涨！"你会？', a: [
        { t: '先买了再找理由', s: {fomo:2,divine:1} },
        { t: '自己分析后再判断', s: {research:2,cut:1} },
        { t: '说"涨多少了"然后无视', s: {sleep:2,hold:1} },
        { t: '已经涨很多了就觉得可怕', s: {panic:2,cut:1} }
      ]},
      { q: '投资中最重要的是？', a: [
        { t: '严格的原则和风险管理', s: {cut:2,research:1} },
        { t: '时间和耐心', s: {hold:2,sleep:1} },
        { t: '快速判断和行动力', s: {fomo:2,panic:1} },
        { t: '数据和分析', s: {research:2,cut:1} }
      ]},
      { q: '股价与预期相反时，我会…', a: [
        { t: '快速止损寻找下个机会', s: {cut:2,research:1} },
        { t: '加仓摊低成本', s: {buy:2,hold:1} },
        { t: '先扛着等待', s: {hold:2,sleep:1} },
        { t: '焦虑得睡不着', s: {panic:2,fomo:1} }
      ]},
      { q: '最接近我的投资风格是…', a: [
        { t: '凭感觉和直觉决定', s: {divine:2,fomo:1} },
        { t: '基于数据冷静判断', s: {research:2,cut:1} },
        { t: '买了就忘掉', s: {sleep:2,hold:1} },
        { t: '跟随市场情绪', s: {fomo:2,panic:1} }
      ]},
      { q: '股票涨了+30%，你怎么做？', a: [
        { t: '等到目标价', s: {hold:2,research:1} },
        { t: '部分止盈，剩余继续持有', s: {cut:2,research:1} },
        { t: '感觉还会涨，就放着', s: {divine:2,sleep:1} },
        { t: '想快点卖，怕跌下来', s: {panic:2,fomo:1} }
      ]},
      { q: '股市暴跌的那天，我会…', a: [
        { t: '恐慌地不停看新闻和图表', s: {panic:2,research:1} },
        { t: '趁机抄底大量买入', s: {buy:2,fomo:1} },
        { t: '冷静地只守住止损线', s: {cut:2,hold:1} },
        { t: '不管了，先睡觉明天再看', s: {sleep:2,divine:1} }
      ]},
      { q: '因投资亏损压力大时，我会…', a: [
        { t: '分析原因调整策略', s: {research:2,cut:1} },
        { t: '忘掉它做别的事', s: {sleep:2,hold:1} },
        { t: '熬夜盯着图表担心', s: {panic:2,fomo:1} },
        { t: '积极思考"这是机会"', s: {buy:2,divine:1} }
      ]},
      { q: '最有共鸣的投资格言是？', a: [
        { t: '"不要把鸡蛋放在同一个篮子里"', s: {research:2,cut:1} },
        { t: '"不打算持有十年，就不要持有十分钟"', s: {hold:2,sleep:1} },
        { t: '"在恐惧中买入，在贪婪中卖出"', s: {buy:2,cut:1} },
        { t: '"感觉来了就是答案"', s: {divine:2,fomo:1} }
      ]},
      { q: '周围的人怎么看我的投资风格？', a: [
        { t: '"太胆小了，再等一下嘛"', s: {panic:2,cut:1} },
        { t: '"你怎么能那么淡定？"', s: {hold:2,sleep:1} },
        { t: '"没有根据，为什么买那个？"', s: {divine:2,fomo:1} },
        { t: '"分析挺好的但行动太慢了"', s: {research:2,cut:1} }
      ]},
      { q: '理想的投资结果是？', a: [
        { t: '10年后10倍收益', s: {hold:2,sleep:1} },
        { t: '每月稳定的小额收益', s: {cut:2,research:1} },
        { t: '一次大爆发', s: {divine:2,fomo:1} },
        { t: '不亏损，保住本金', s: {panic:2,buy:1} }
      ]}
    ]
  }
};
