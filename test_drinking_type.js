const TEST_DRINKING_TYPE = {
  id: 'drinking-type',
  emoji: '🍻',
  resultLabel: {
    ko: '나의 술자리 유형',
    en: 'My Drinking Party Type',
    ja: '私の飲み会タイプ',
    zh: '我的聚餐类型'
  },
  typeList: ['cheerleader','homebody','sipper','philosopher','foodie','paparazzi','ghost','lastman'],
  meta: {
    cheerleader: { img:'images/drink_cheerleader.jpg', color:'#c8720a', ink:'#fff' },
    homebody:    { img:'images/drink_homebody.jpg',    color:'#7a5230', ink:'#fff' },
    sipper:      { img:'images/drink_sipper.jpg',      color:'#6a4c9c', ink:'#fff' },
    philosopher: { img:'images/drink_philosopher.jpg', color:'#1a2a5e', ink:'#fff' },
    foodie:      { img:'images/drink_foodie.jpg',      color:'#c45e00', ink:'#fff' },
    paparazzi:   { img:'images/drink_paparazzi.jpg',   color:'#2a2a2a', ink:'#fff' },
    ghost:       { img:'images/drink_ghost.jpg',       color:'#3a3a5c', ink:'#fff' },
    lastman:     { img:'images/drink_lastman.jpg',     color:'#0d1b4a', ink:'#fff' }
  },
  types: {
    cheerleader: {
      ko: { name:'🎤 분위기메이커', tag:'#텐션담당 #없으면섭섭해 #회식의신', desc:'당신이 없으면 술자리가 반쪽입니다. 첫 잔부터 마지막 잔까지 에너지가 넘치고, 어색한 공기를 1초 만에 녹이는 능력자. 모두가 즐길 수 있도록 자연스럽게 분위기를 이끌고, 다음 날 "어제 진짜 재밌었다"는 말은 항상 당신 덕분입니다.', best:'lastman', worst:'homebody' },
      en: { name:'🎤 Party Starter', tag:'#VibeKeeper #AlwaysNeeded #SoulOfTheNight', desc:'Without you, the party is only half a party. Your energy runs from the first glass to the last, and you can dissolve any awkward silence in a second. You naturally lead the mood so everyone can enjoy themselves — and when people say "last night was so fun," it\'s always because of you.', best:'lastman', worst:'homebody' },
      ja: { name:'🎤 盛り上げ役', tag:'#テンション担当 #いないと寂しい #飲み会の神', desc:'あなたがいないと飲み会は半分です。最初の一杯から最後の一杯までエネルギーに満ち溢れ、気まずい空気を1秒で溶かす能力者。みんなが楽しめるよう自然に雰囲気をリードし、翌日「昨日本当に楽しかった」という言葉はいつもあなたのおかげです。', best:'lastman', worst:'homebody' },
      zh: { name:'🎤 气氛担当', tag:'#活跃分子 #少了你不行 #聚会灵魂', desc:'没有你，聚会就缺了一半。从第一杯到最后一杯能量满满，能在一秒内融化尴尬的空气。自然而然地带动氛围让所有人都能享受，第二天大家说"昨天真的好玩"，都是因为有你。', best:'lastman', worst:'homebody' }
    },
    homebody: {
      ko: { name:'🏠 빨리집가고싶은파', tag:'#카카오택시대기중 #칼퇴의연장 #집이최고', desc:'술자리에 몸은 있지만 마음은 이미 집 침대 위입니다. 속으로 카카오택시 앱을 켜놓고 타이밍을 노리는 중. 그래도 오긴 왔고, 나름 즐기긴 하지만, 1차가 끝나는 순간 번개같이 사라지는 스타일. 집이 세상에서 제일 좋은 사람입니다.', best:'ghost', worst:'lastman' },
      en: { name:'🏠 Homebody', tag:'#AlreadyBookedCab #ClockWatcher #HomeIsHome', desc:'Your body is at the table, but your heart is already in bed at home. You\'ve had the taxi app open in your pocket, waiting for the right moment. You showed up, you sort of enjoyed it — but the second the first round ends, you vanish like lightning. Home is simply the best place on earth.', best:'ghost', worst:'lastman' },
      ja: { name:'🏠 早く帰りたい派', tag:'#タクシーアプリ待機中 #定時退社の延長 #家が最高', desc:'飲み会に体はあっても、心はすでに家のベッドの上です。心の中でタクシーアプリを開いてタイミングを狙っています。来はしたし、それなりに楽しんでいますが、一次会が終わった瞬間に電光石火で消えるスタイル。家が世界で一番いい人です。', best:'ghost', worst:'lastman' },
      zh: { name:'🏠 想早回家派', tag:'#出租车已预约 #下班延长版 #家是最好的', desc:'身体在酒桌上，心早已在家里的床上了。心里悄悄开着打车软件等待时机。来是来了，也算享受了，但一旦第一摊结束，瞬间消失得无影无踪。家是这个世界上最好的地方。', best:'ghost', worst:'lastman' }
    },
    sipper: {
      ko: { name:'🍵 홀짝홀짝파', tag:'#안취하는미스터리 #술잔항상가득 #페이스조절의신', desc:'몇 시간이 지나도 당신의 잔은 항상 같은 양. 주변이 아무리 난장판이 되어도 당신은 여전히 멀쩡합니다. 취한 척 안 하고, 취할 이유도 없는 사람. 술자리의 관찰자이자 다음 날 가장 또렷하게 어제를 기억하는 사람입니다.', best:'philosopher', worst:'lastman' },
      en: { name:'🍵 The Sipper', tag:'#NeverGetsdrunk #AlwaysComposed #PaceControlMaster', desc:'Hours pass, but your glass always looks the same. No matter how chaotic things get around you, you\'re still completely fine. You don\'t pretend to be drunk, and you have no reason to be. You\'re the observer of the evening — and the one who remembers everything most clearly the next day.', best:'philosopher', worst:'lastman' },
      ja: { name:'🍵 ちびちび派', tag:'#酔わないミステリー #グラスはいつも同じ量 #ペース調整の神', desc:'何時間経ってもあなたのグラスはいつも同じ量。周りがどれだけ騒がしくなっても、あなたは相変わらずしっかりしています。酔ったふりもせず、酔う理由もない人。飲み会のオブザーバーであり、翌日一番はっきりと昨日を覚えている人です。', best:'philosopher', worst:'lastman' },
      zh: { name:'🍵 浅酌慢饮派', tag:'#永远不醉之谜 #杯子总是一样满 #控制节奏大师', desc:'过了几个小时，你的杯子里总是同样的量。不管周围多么混乱，你依然状态完好。不装醉，也没有醉的理由。你是聚会的观察者，也是第二天记得最清楚昨晚发生了什么的人。', best:'philosopher', worst:'lastman' }
    },
    philosopher: {
      ko: { name:'🌙 인생술사', tag:'#2차부터진지모드 #인생얘기는나한테 #새벽감성', desc:'1차 때는 평범하다가 2차부터 갑자기 인생 얘기를 꺼내는 사람. "근데 있잖아, 우리 왜 사는 걸까?" 이런 말이 자연스럽게 나오는 새벽 감성 담당. 깊은 대화가 오갈 때 가장 빛나고, 술자리를 술자리 이상으로 만드는 마법 같은 존재입니다.', best:'sipper', worst:'paparazzi' },
      en: { name:'🌙 Drunk Philosopher', tag:'#SeriousModeAt2ndRound #TalkToMeAboutLife #LateNightVibes', desc:'Perfectly normal at the first round — then someone flips a switch and suddenly you\'re asking "wait, why do we even exist?" Deep conversations are where you truly shine, and you have a magical ability to turn a simple drinking session into something that feels meaningful and unforgettable.', best:'sipper', worst:'paparazzi' },
      ja: { name:'🌙 人生酒仙', tag:'#二次会から本気モード #人生話は私に #深夜の感性', desc:'一次会では普通なのに、二次会から突然人生の話を始める人。「ねえ、私たちってなんで生きてるんだろう？」こんな言葉が自然に出てくる深夜感性担当。深い対話が交わされるとき最も輝き、飲み会を飲み会以上のものにする魔法のような存在です。', best:'sipper', worst:'paparazzi' },
      zh: { name:'🌙 人生哲学家', tag:'#二摊开始认真模式 #人生话题找我 #深夜感性', desc:'第一摊很普通，到了第二摊突然开始聊人生。"你说，我们活着到底是为了什么？"这种话自然而然地说出口。深度对话时最为闪亮，有种神奇的能力，能把普通的聚酒变成难忘的夜晚。', best:'sipper', worst:'paparazzi' }
    },
    foodie: {
      ko: { name:'🍖 안주에진심', tag:'#술보다안주 #메뉴선정전문가 #오늘치킨맞지', desc:'당신에게 술자리의 핵심은 안주입니다. 메뉴판을 제일 먼저 펼치고, 제일 신중하게 고르며, 안주가 나오면 눈이 반짝입니다. 삼겹살, 치킨, 떡볶이... 맛있는 안주만 있으면 술이 없어도 행복한 사람. 사실 안주 먹으러 나온 거 맞습니다.', best:'philosopher', worst:'homebody' },
      en: { name:'🍖 Snack Devotee', tag:'#FoodOverDrinks #MenuExpert #ChickenEveryTime', desc:'For you, the real point of a night out is the food. You\'re the first to open the menu, the most careful about choosing, and your eyes light up the moment the dishes arrive. Samgyeopsal, fried chicken, tteokbokki — as long as the food is good, you\'re happy even without drinks. Let\'s be honest: you came for the snacks.', best:'philosopher', worst:'homebody' },
      ja: { name:'🍖 おつまみ命', tag:'#お酒よりおつまみ #メニュー選定のプロ #今日は唐揚げでしょ', desc:'あなたにとって飲み会の核心はおつまみです。メニューを一番最初に開き、一番慎重に選び、料理が来ると目が輝きます。サムギョプサル、チキン、トッポッキ…美味しいおつまみさえあればお酒がなくても幸せな人。実はおつまみを食べに来たのが正解です。', best:'philosopher', worst:'homebody' },
      zh: { name:'🍖 认真对待下酒菜', tag:'#下酒菜比酒重要 #菜单选择专家 #今天吃炸鸡对吧', desc:'对你来说，聚餐的核心是下酒菜。第一个打开菜单，最认真地选择，菜上来时眼睛发光。五花肉、炸鸡、炒年糕……只要有好吃的下酒菜，就算不喝酒也很幸福。说实话，来这里就是为了吃东西的。', best:'philosopher', worst:'homebody' }
    },
    paparazzi: {
      ko: { name:'📸 기록광', tag:'#찍어야직성풀려 #술자리인스타그래머 #내폰갤러리는나야나', desc:'술잔이 나오면 먼저 카메라가 나옵니다. 모든 안주, 모든 표정, 모든 순간을 기록해야 직성이 풀리는 타입. 덕분에 다음 날 단톡방에 사진이 쏟아지고, 기억이 흐릿한 사람들이 어제를 복원하는 데 당신이 필수입니다.', best:'cheerleader', worst:'sipper' },
      en: { name:'📸 The Documentarian', tag:'#MustCapureEverything #DrinkingInstagrammer #MyPhoneMyGallery', desc:'Before the drinks come out, the camera comes out. You have to document every dish, every expression, every moment — or you just can\'t relax. Because of you, the group chat floods with photos the next morning, and anyone who\'s fuzzy on the details needs you to piece the night back together.', best:'cheerleader', worst:'sipper' },
      ja: { name:'📸 記録マニア', tag:'#撮らないと気が済まない #飲み会インスタグラマー #私のスマホは私のもの', desc:'お酒が来る前にカメラが出ます。すべてのおつまみ、すべての表情、すべての瞬間を記録しないと気が済まないタイプ。おかげで翌日グループチャットに写真が溢れ、記憶が曖昧な人たちが昨日を復元するのにあなたが必須です。', best:'cheerleader', worst:'sipper' },
      zh: { name:'📸 记录狂', tag:'#不拍就浑身不自在 #聚餐摄影师 #我的手机我做主', desc:'酒还没来，相机先出来了。每道菜、每个表情、每个瞬间都要记录，否则浑身不自在。多亏了你，第二天群聊里照片满天飞，那些记忆模糊的人需要靠你来还原昨晚发生的事。', best:'cheerleader', worst:'sipper' }
    },
    ghost: {
      ko: { name:'👻 갑자기사라지는파', tag:'#어느새없음 #연락도안됨 #귀가귀신', desc:'분명 1차 때 있었는데 2차 이동하는 사이에 없습니다. 연락도 안 되고, 다음 날 물어보면 "어 나 집에 갔어"라고 태연하게 대답. 소리 없이 사라지는 귀신 같은 존재지만, 그게 매력이에요. 눈치 없이 끌려다니는 것보다 자기 페이스를 아는 쿨한 사람입니다.', best:'homebody', worst:'lastman' },
      en: { name:'👻 The Vanisher', tag:'#GoneWithoutATrace #PhoneOff #MasterOfExit', desc:'Definitely there at round one — but somehow gone by the time everyone moves to round two. Unreachable. Next day: "Oh yeah, I went home." Said completely casually. You disappear like a ghost without a sound, but that\'s your charm. You know your own pace, and that\'s honestly cooler than being dragged along.', best:'homebody', worst:'lastman' },
      ja: { name:'👻 突然消える派', tag:'#いつの間にかいない #連絡も取れない #帰宅の幽霊', desc:'確かに一次会にはいたのに、二次会に移動する間にいなくなっています。連絡も取れず、翌日聞いたら「あ、帰ったよ」と平然と答えます。音もなく消えるお化けみたいな存在ですが、それが魅力。空気を読まずに引きずられるより、自分のペースを知るクールな人です。', best:'homebody', worst:'lastman' },
      zh: { name:'👻 突然消失派', tag:'#不知何时已不见 #电话也打不通 #回家幽灵', desc:'明明第一摊还在，转移到第二摊的途中就不见了。电话也打不通，第二天问起，平静地回答"哦，我回家了"。像幽灵一样无声消失，但这就是魅力所在。比被人拉着走强，是个清楚自己节奏的酷人。', best:'homebody', worst:'lastman' }
    },
    lastman: {
      ko: { name:'🌅 끝까지남는파', tag:'#4차는기본 #다음날후회 #노래방까지는가야지', desc:'1차, 2차, 3차... 당신은 아직 집에 갈 생각이 없습니다. 술자리가 끝나는 게 아쉬워서 계속 "한 잔만 더"를 외치는 타입. 다음 날 아침 숙취와 함께 어젯밤을 후회하지만, 그게 그렇게 재밌는 걸 어떡해요. 오늘도 4차까지 갑니다.', best:'cheerleader', worst:'homebody' },
      en: { name:'🌅 Last One Standing', tag:'#4thRoundMinimum #MorningRegrets #NotYetNotYet', desc:'Round one, two, three... you have absolutely no intention of going home yet. You hate the thought of the night ending, so you keep calling for "just one more." The next morning you wake up with a hangover and regrets — but honestly, if it was that fun, what can you do? Tonight it\'s four rounds minimum.', best:'cheerleader', worst:'homebody' },
      ja: { name:'🌅 最後まで残る派', tag:'#4次会は基本 #翌日後悔 #カラオケまでは行かないと', desc:'一次会、二次会、三次会…あなたはまだ家に帰るつもりがありません。飲み会が終わるのが惜しくて「もう一杯だけ」と叫び続けるタイプ。翌朝二日酔いとともに昨夜を後悔しますが、それがそんなに楽しいんだからしょうがない。今日も四次会まで行きます。', best:'cheerleader', worst:'homebody' },
      zh: { name:'🌅 坚持到最后派', tag:'#四摊是基本 #第二天后悔 #KTV是必须的', desc:'第一摊、第二摊、第三摊……你压根没想着回家。舍不得聚会结束，一直喊着"再来一杯"。第二天早上带着宿醉后悔昨晚，但那么好玩有什么办法呢。今天也要坚持到第四摊。', best:'cheerleader', worst:'homebody' }
    }
  },
  questions: {
    ko: [
      {
        q: '회식 날짜가 잡혔다. 나의 첫 반응은?',
        a: [
          { t: '"오예! 이번에 어디 가요?"', s: { cheerleader:2, lastman:1 } },
          { t: '"...꼭 가야 해?"', s: { homebody:2, ghost:1 } },
          { t: '"메뉴가 뭔지가 더 중요한데"', s: { foodie:2, sipper:1 } },
          { t: '"그냥 적당히 먹고 오면 되지"', s: { sipper:2, philosopher:1 } }
        ]
      },
      {
        q: '자리에 앉자마자 나는?',
        a: [
          { t: '분위기 파악하고 아이스브레이킹 시작', s: { cheerleader:2, paparazzi:1 } },
          { t: '메뉴판 먼저 집어든다', s: { foodie:2, sipper:1 } },
          { t: '카메라 세팅하고 첫 잔 샷 찍을 준비', s: { paparazzi:2, cheerleader:1 } },
          { t: '슬쩍 시계 본다', s: { homebody:2, ghost:1 } }
        ]
      },
      {
        q: '1차가 끝날 때쯤 나의 마음은?',
        a: [
          { t: '"2차 어디 가요?? 노래방?"', s: { lastman:2, cheerleader:1 } },
          { t: '"이 정도면 됐다. 슬슬 빠질 타이밍"', s: { homebody:2, ghost:1 } },
          { t: '"안주 더 먹고 싶은데..."', s: { foodie:2, sipper:1 } },
          { t: '"이제 진짜 얘기 좀 해볼까"', s: { philosopher:2, sipper:1 } }
        ]
      },
      {
        q: '술자리에서 나의 포지션은?',
        a: [
          { t: '게임 제안하고 판 키우는 사람', s: { cheerleader:2, lastman:1 } },
          { t: '조용히 옆에서 먹고 마시는 사람', s: { sipper:2, foodie:1 } },
          { t: '사진 찍고 기록하는 사람', s: { paparazzi:2, cheerleader:1 } },
          { t: '옆 사람이랑 깊은 얘기 나누는 사람', s: { philosopher:2, sipper:1 } }
        ]
      },
      {
        q: '2차 이동 중 연락이 안 되는 사람이 있다. 알고 보니?',
        a: [
          { t: '"나 먼저 들어갔어" (나 자신)', s: { ghost:2, homebody:1 } },
          { t: '"야 빨리 와!" 재촉하는 사람 (나 자신)', s: { lastman:2, cheerleader:1 } },
          { t: '"사진 찍느라 뒤처졌어" (나 자신)', s: { paparazzi:2, foodie:1 } },
          { t: '"화장실 갔어" (진짜 화장실)', s: { sipper:2, philosopher:1 } }
        ]
      },
      {
        q: '술자리 단톡방에서 나의 역할은?',
        a: [
          { t: '사진 폭격하는 사람', s: { paparazzi:2, cheerleader:1 } },
          { t: '"나 먼저 들어갔어" 한 줄 남기는 사람', s: { ghost:2, homebody:1 } },
          { t: '"다들 고생했어~" 마무리 멘트 날리는 사람', s: { philosopher:2, sipper:1 } },
          { t: '"3차 갈 사람?"을 먼저 외치는 사람', s: { lastman:2, cheerleader:1 } }
        ]
      },
      {
        q: '안주를 고를 때 나는?',
        a: [
          { t: '제일 진지하게 메뉴판 분석', s: { foodie:2, philosopher:1 } },
          { t: '"아무거나요" 하고 다른 거 생각 중', s: { homebody:2, ghost:1 } },
          { t: '"비주얼 좋은 걸로!" 포토제닉 우선', s: { paparazzi:2, cheerleader:1 } },
          { t: '안주보다 술 먼저 시키는 사람', s: { lastman:2, sipper:1 } }
        ]
      },
      {
        q: '분위기가 처질 때 나는?',
        a: [
          { t: '게임 하나 제안해서 살린다', s: { cheerleader:2, lastman:1 } },
          { t: '이때다 싶어서 자리 뜰 준비', s: { homebody:2, ghost:1 } },
          { t: '갑자기 진지한 얘기 꺼낸다', s: { philosopher:2, sipper:1 } },
          { t: '열심히 안주 먹는다', s: { foodie:2, sipper:1 } }
        ]
      },
      {
        q: '다음 날 숙취 상태에서 단톡에 어제 사진이 왔다. 나의 반응은?',
        a: [
          { t: '"ㅋㅋㅋ 내가 찍은 거 맞지?" 자랑스러움', s: { paparazzi:2, cheerleader:1 } },
          { t: '"어제 뭔 얘기 했는지 기억이..." 아찔함', s: { philosopher:2, lastman:1 } },
          { t: '"나 왜 이렇게 멀쩡해 보이지?" 뿌듯함', s: { sipper:2, ghost:1 } },
          { t: '"역시 일찍 들어오길 잘했어" 현명함', s: { homebody:2, ghost:1 } }
        ]
      },
      {
        q: '이상적인 술자리 마무리는?',
        a: [
          { t: '1차만 하고 깔끔하게 집에', s: { homebody:2, sipper:1 } },
          { t: '노래방까지 가야 완성', s: { lastman:2, cheerleader:1 } },
          { t: '야외 포차에서 새벽 감성 충전', s: { philosopher:2, lastman:1 } },
          { t: '"어느새 없어진" 퇴장', s: { ghost:2, homebody:1 } }
        ]
      },
      {
        q: '술자리 중 가장 신나는 순간은?',
        a: [
          { t: '모두가 박장대소하는 그 순간', s: { cheerleader:2, paparazzi:1 } },
          { t: '진짜 맛있는 안주가 나왔을 때', s: { foodie:2, sipper:1 } },
          { t: '"우리 솔직하게 얘기해봐요" 시작될 때', s: { philosopher:2, sipper:1 } },
          { t: '"오늘 여기까지" 할 때', s: { homebody:2, ghost:1 } }
        ]
      },
      {
        q: '주변에서 나한테 자주 하는 말은?',
        a: [
          { t: '"너 없으면 재미없어"', s: { cheerleader:2, lastman:1 } },
          { t: '"너 왜 이렇게 안 취해?"', s: { sipper:2, philosopher:1 } },
          { t: '"너 언제 간 거야??"', s: { ghost:2, homebody:1 } },
          { t: '"사진 보내줘!!"', s: { paparazzi:2, cheerleader:1 } }
        ]
      }
    ],
    en: [
      {
        q: 'The team dinner date is set. Your first reaction?',
        a: [
          { t: '"Yesss! Where are we going?"', s: { cheerleader:2, lastman:1 } },
          { t: '"...Do I have to go?"', s: { homebody:2, ghost:1 } },
          { t: '"What\'s the menu though, that\'s what matters"', s: { foodie:2, sipper:1 } },
          { t: '"Just eat something and head back"', s: { sipper:2, philosopher:1 } }
        ]
      },
      {
        q: 'The moment you sit down, you:',
        a: [
          { t: 'Read the room and start breaking the ice', s: { cheerleader:2, paparazzi:1 } },
          { t: 'Grab the menu first', s: { foodie:2, sipper:1 } },
          { t: 'Get the camera ready for the first drink shot', s: { paparazzi:2, cheerleader:1 } },
          { t: 'Sneak a glance at your watch', s: { homebody:2, ghost:1 } }
        ]
      },
      {
        q: 'When the first round is wrapping up, you\'re thinking:',
        a: [
          { t: '"Where\'s round two?? Karaoke??"', s: { lastman:2, cheerleader:1 } },
          { t: '"That\'s enough. Time to make my exit"', s: { homebody:2, ghost:1 } },
          { t: '"I still want more food..."', s: { foodie:2, sipper:1 } },
          { t: '"Now let\'s have a real conversation"', s: { philosopher:2, sipper:1 } }
        ]
      },
      {
        q: 'Your role at the table is:',
        a: [
          { t: 'Suggesting drinking games and hyping everyone up', s: { cheerleader:2, lastman:1 } },
          { t: 'Quietly eating and drinking on the side', s: { sipper:2, foodie:1 } },
          { t: 'Taking photos and documenting everything', s: { paparazzi:2, cheerleader:1 } },
          { t: 'Having deep conversations with the person next to you', s: { philosopher:2, sipper:1 } }
        ]
      },
      {
        q: 'Someone goes missing during the move to round two. Turns out it was:',
        a: [
          { t: '"I headed home first" (you)', s: { ghost:2, homebody:1 } },
          { t: '"Hurry up!!" (you, rushing others)', s: { lastman:2, cheerleader:1 } },
          { t: '"I fell behind taking photos" (you)', s: { paparazzi:2, foodie:1 } },
          { t: '"Just went to the bathroom" (actually true)', s: { sipper:2, philosopher:1 } }
        ]
      },
      {
        q: 'In the group chat after the night out, you\'re the one who:',
        a: [
          { t: 'Drops 47 photos at 2am', s: { paparazzi:2, cheerleader:1 } },
          { t: 'Sends "I went ahead, good night~"', s: { ghost:2, homebody:1 } },
          { t: 'Types the wholesome wrap-up message', s: { philosopher:2, sipper:1 } },
          { t: 'Asks "who\'s down for round 3?" first', s: { lastman:2, cheerleader:1 } }
        ]
      },
      {
        q: 'When it\'s time to order food, you:',
        a: [
          { t: 'Study the menu with full seriousness', s: { foodie:2, philosopher:1 } },
          { t: 'Say "whatever\'s fine" while thinking about something else', s: { homebody:2, ghost:1 } },
          { t: '"Something photogenic!" — aesthetics first', s: { paparazzi:2, cheerleader:1 } },
          { t: 'Order more drinks before the food', s: { lastman:2, sipper:1 } }
        ]
      },
      {
        q: 'The vibe is dying. You:',
        a: [
          { t: 'Propose a game and resurrect the energy', s: { cheerleader:2, lastman:1 } },
          { t: 'See your window and start packing up', s: { homebody:2, ghost:1 } },
          { t: 'Suddenly bring up something deep and real', s: { philosopher:2, sipper:1 } },
          { t: 'Focus on eating', s: { foodie:2, sipper:1 } }
        ]
      },
      {
        q: 'Next morning, hungover, photos from last night drop in the chat. You:',
        a: [
          { t: '"Lol those are mine, right?" — proud', s: { paparazzi:2, cheerleader:1 } },
          { t: '"What did I even say last night..." — slightly terrified', s: { philosopher:2, lastman:1 } },
          { t: '"Why do I look so fine??" — quietly smug', s: { sipper:2, ghost:1 } },
          { t: '"Smart of me to leave early" — vindicated', s: { homebody:2, ghost:1 } }
        ]
      },
      {
        q: 'The ideal ending to a night out:',
        a: [
          { t: 'One round, clean exit, home', s: { homebody:2, sipper:1 } },
          { t: 'Not complete without karaoke', s: { lastman:2, cheerleader:1 } },
          { t: 'Outdoor tent bar for late-night vibes', s: { philosopher:2, lastman:1 } },
          { t: 'Quietly vanishing without saying goodbye', s: { ghost:2, homebody:1 } }
        ]
      },
      {
        q: 'The moment you enjoy most at a night out:',
        a: [
          { t: 'When everyone bursts out laughing at once', s: { cheerleader:2, paparazzi:1 } },
          { t: 'When an amazing dish arrives at the table', s: { foodie:2, sipper:1 } },
          { t: 'When someone says "okay let\'s be real for a second"', s: { philosopher:2, sipper:1 } },
          { t: 'When it\'s officially over and you can go home', s: { homebody:2, ghost:1 } }
        ]
      },
      {
        q: 'What do people always say to you?',
        a: [
          { t: '"It\'s not fun without you"', s: { cheerleader:2, lastman:1 } },
          { t: '"How are you not drunk right now?"', s: { sipper:2, philosopher:1 } },
          { t: '"When did you leave??"', s: { ghost:2, homebody:1 } },
          { t: '"Send me the photos!!"', s: { paparazzi:2, cheerleader:1 } }
        ]
      }
    ],
    ja: [
      {
        q: '飲み会の日程が決まった。最初の反応は？',
        a: [
          { t: '「やった！どこ行くんですか？」', s: { cheerleader:2, lastman:1 } },
          { t: '「…絶対行かないといけない？」', s: { homebody:2, ghost:1 } },
          { t: '「メニューの方が気になるんだけど」', s: { foodie:2, sipper:1 } },
          { t: '「適当に食べて帰ればいいか」', s: { sipper:2, philosopher:1 } }
        ]
      },
      {
        q: '席に着いた瞬間、あなたは？',
        a: [
          { t: '雰囲気を見てアイスブレイクを始める', s: { cheerleader:2, paparazzi:1 } },
          { t: 'まずメニューを手に取る', s: { foodie:2, sipper:1 } },
          { t: 'カメラをセットして最初の一杯を撮る準備', s: { paparazzi:2, cheerleader:1 } },
          { t: 'こっそり時計を見る', s: { homebody:2, ghost:1 } }
        ]
      },
      {
        q: '一次会が終わりそうな時、あなたの気持ちは？',
        a: [
          { t: '「二次会どこ行きますか？カラオケ？」', s: { lastman:2, cheerleader:1 } },
          { t: '「この辺でいいか。そろそろ抜けるタイミング」', s: { homebody:2, ghost:1 } },
          { t: '「もうちょっとおつまみ食べたいな…」', s: { foodie:2, sipper:1 } },
          { t: '「そろそろ本当の話しようか」', s: { philosopher:2, sipper:1 } }
        ]
      },
      {
        q: '飲み会でのあなたのポジションは？',
        a: [
          { t: 'ゲームを提案して場を盛り上げる人', s: { cheerleader:2, lastman:1 } },
          { t: '静かに横で食べて飲んでいる人', s: { sipper:2, foodie:1 } },
          { t: '写真を撮って記録する人', s: { paparazzi:2, cheerleader:1 } },
          { t: '隣の人と深い話をする人', s: { philosopher:2, sipper:1 } }
        ]
      },
      {
        q: '二次会移動中に連絡が取れない人がいる。実は？',
        a: [
          { t: '「先に帰った」（自分）', s: { ghost:2, homebody:1 } },
          { t: '「早く来て！」急かしてる（自分）', s: { lastman:2, cheerleader:1 } },
          { t: '「写真撮ってたら遅れた」（自分）', s: { paparazzi:2, foodie:1 } },
          { t: '「トイレ行ってた」（本当にトイレ）', s: { sipper:2, philosopher:1 } }
        ]
      },
      {
        q: '飲み会グループチャットでのあなたの役割は？',
        a: [
          { t: '写真を大量に投下する人', s: { paparazzi:2, cheerleader:1 } },
          { t: '「先に帰りました」一言残す人', s: { ghost:2, homebody:1 } },
          { t: '「みんなお疲れ〜」締めのメッセージを送る人', s: { philosopher:2, sipper:1 } },
          { t: '「三次会行く人？」を先に叫ぶ人', s: { lastman:2, cheerleader:1 } }
        ]
      },
      {
        q: 'おつまみを選ぶとき、あなたは？',
        a: [
          { t: '一番真剣にメニューを分析する', s: { foodie:2, philosopher:1 } },
          { t: '「何でもいいです」と言って他のことを考えてる', s: { homebody:2, ghost:1 } },
          { t: '「映えるやつで！」フォトジェニック優先', s: { paparazzi:2, cheerleader:1 } },
          { t: 'おつまみより先にお酒を頼む人', s: { lastman:2, sipper:1 } }
        ]
      },
      {
        q: '雰囲気が悪くなった時、あなたは？',
        a: [
          { t: 'ゲームを提案して盛り返す', s: { cheerleader:2, lastman:1 } },
          { t: 'チャンスとばかりに席を立つ準備', s: { homebody:2, ghost:1 } },
          { t: '突然真剣な話を持ち出す', s: { philosopher:2, sipper:1 } },
          { t: '一生懸命おつまみを食べる', s: { foodie:2, sipper:1 } }
        ]
      },
      {
        q: '翌日二日酔いの状態でグループに昨夜の写真が届いた。あなたの反応は？',
        a: [
          { t: '「ｗｗ私が撮ったやつだよね」誇らしい', s: { paparazzi:2, cheerleader:1 } },
          { t: '「昨夜何話したっけ…」ヒヤッとする', s: { philosopher:2, lastman:1 } },
          { t: '「なんで私こんなシャキッとしてるの」得意げ', s: { sipper:2, ghost:1 } },
          { t: '「早く帰っといてよかった」賢明な気持ち', s: { homebody:2, ghost:1 } }
        ]
      },
      {
        q: '理想の飲み会の締め方は？',
        a: [
          { t: '一次会だけでさっぱり帰宅', s: { homebody:2, sipper:1 } },
          { t: 'カラオケまで行って完成', s: { lastman:2, cheerleader:1 } },
          { t: '屋台で深夜の感性を充電', s: { philosopher:2, lastman:1 } },
          { t: '「いつの間にか消えた」退場', s: { ghost:2, homebody:1 } }
        ]
      },
      {
        q: '飲み会で一番盛り上がる瞬間は？',
        a: [
          { t: '全員が大爆笑するその瞬間', s: { cheerleader:2, paparazzi:1 } },
          { t: '本当においしいおつまみが来た時', s: { foodie:2, sipper:1 } },
          { t: '「正直に話してみよう」が始まる時', s: { philosopher:2, sipper:1 } },
          { t: '「今日はここまで」と言う時', s: { homebody:2, ghost:1 } }
        ]
      },
      {
        q: '周りからよく言われることは？',
        a: [
          { t: '「あなたがいないとつまらない」', s: { cheerleader:2, lastman:1 } },
          { t: '「なんで酔わないの？」', s: { sipper:2, philosopher:1 } },
          { t: '「いつ帰ったの！？」', s: { ghost:2, homebody:1 } },
          { t: '「写真送って！！」', s: { paparazzi:2, cheerleader:1 } }
        ]
      }
    ],
    zh: [
      {
        q: '聚餐日期定了。你的第一反应是？',
        a: [
          { t: '"耶！去哪里啊？"', s: { cheerleader:2, lastman:1 } },
          { t: '"……一定要去吗？"', s: { homebody:2, ghost:1 } },
          { t: '"菜单是什么更重要吧"', s: { foodie:2, sipper:1 } },
          { t: '"随便吃点回去就行了"', s: { sipper:2, philosopher:1 } }
        ]
      },
      {
        q: '一坐下来你会？',
        a: [
          { t: '观察气氛，开始活跃现场', s: { cheerleader:2, paparazzi:1 } },
          { t: '先拿菜单', s: { foodie:2, sipper:1 } },
          { t: '调好相机，准备拍第一杯酒', s: { paparazzi:2, cheerleader:1 } },
          { t: '偷偷看一眼手表', s: { homebody:2, ghost:1 } }
        ]
      },
      {
        q: '第一摊快结束时，你心里在想？',
        a: [
          { t: '"第二摊去哪？KTV？"', s: { lastman:2, cheerleader:1 } },
          { t: '"差不多了，该溜了"', s: { homebody:2, ghost:1 } },
          { t: '"还想再吃点下酒菜……"', s: { foodie:2, sipper:1 } },
          { t: '"现在可以聊点正经的了"', s: { philosopher:2, sipper:1 } }
        ]
      },
      {
        q: '你在聚餐中的位置是？',
        a: [
          { t: '提议游戏，炒热气氛', s: { cheerleader:2, lastman:1 } },
          { t: '安静地在旁边吃喝', s: { sipper:2, foodie:1 } },
          { t: '拍照记录一切', s: { paparazzi:2, cheerleader:1 } },
          { t: '和旁边的人聊深度话题', s: { philosopher:2, sipper:1 } }
        ]
      },
      {
        q: '转移第二摊时有人联系不上，原来是？',
        a: [
          { t: '"我先回去了"（就是自己）', s: { ghost:2, homebody:1 } },
          { t: '"快来！"催别人（就是自己）', s: { lastman:2, cheerleader:1 } },
          { t: '"拍照落后了"（就是自己）', s: { paparazzi:2, foodie:1 } },
          { t: '"去洗手间了"（真的是洗手间）', s: { sipper:2, philosopher:1 } }
        ]
      },
      {
        q: '聚餐群里你的角色是？',
        a: [
          { t: '狂发照片的人', s: { paparazzi:2, cheerleader:1 } },
          { t: '留下"我先走了"一句话的人', s: { ghost:2, homebody:1 } },
          { t: '发"大家辛苦了"收尾的人', s: { philosopher:2, sipper:1 } },
          { t: '第一个喊"去第三摊的举手"的人', s: { lastman:2, cheerleader:1 } }
        ]
      },
      {
        q: '点菜的时候你会？',
        a: [
          { t: '最认真地研究菜单', s: { foodie:2, philosopher:1 } },
          { t: '说"随便"，其实在想别的事', s: { homebody:2, ghost:1 } },
          { t: '"要好看的！"颜值优先', s: { paparazzi:2, cheerleader:1 } },
          { t: '菜还没点先点酒', s: { lastman:2, sipper:1 } }
        ]
      },
      {
        q: '气氛冷下来时，你会？',
        a: [
          { t: '提议游戏，重新点燃', s: { cheerleader:2, lastman:1 } },
          { t: '觉得这是溜走的好时机', s: { homebody:2, ghost:1 } },
          { t: '突然抛出一个深刻的话题', s: { philosopher:2, sipper:1 } },
          { t: '专心吃下酒菜', s: { foodie:2, sipper:1 } }
        ]
      },
      {
        q: '第二天宿醉，群里发来了昨晚的照片。你的反应是？',
        a: [
          { t: '"哈哈这是我拍的吧"自豪感', s: { paparazzi:2, cheerleader:1 } },
          { t: '"昨晚说了什么来着……"心里一凉', s: { philosopher:2, lastman:1 } },
          { t: '"我怎么看起来这么精神？"暗自得意', s: { sipper:2, ghost:1 } },
          { t: '"幸好早回去了"明智之举', s: { homebody:2, ghost:1 } }
        ]
      },
      {
        q: '理想的散场方式是？',
        a: [
          { t: '只去一摊，干净利落回家', s: { homebody:2, sipper:1 } },
          { t: '去了KTV才算完整', s: { lastman:2, cheerleader:1 } },
          { t: '在露天小酒馆感受深夜氛围', s: { philosopher:2, lastman:1 } },
          { t: '"不知不觉就消失了"的退场', s: { ghost:2, homebody:1 } }
        ]
      },
      {
        q: '聚餐中最开心的时刻是？',
        a: [
          { t: '所有人一起哄堂大笑的瞬间', s: { cheerleader:2, paparazzi:1 } },
          { t: '超好吃的菜上来的时候', s: { foodie:2, sipper:1 } },
          { t: '"我们说说心里话吧"开始时', s: { philosopher:2, sipper:1 } },
          { t: '宣布"今天到此为止"的时候', s: { homebody:2, ghost:1 } }
        ]
      },
      {
        q: '周围的人经常对你说的话是？',
        a: [
          { t: '"没有你就没意思了"', s: { cheerleader:2, lastman:1 } },
          { t: '"你怎么不醉的？"', s: { sipper:2, philosopher:1 } },
          { t: '"你什么时候走的！？"', s: { ghost:2, homebody:1 } },
          { t: '"把照片发给我！！"', s: { paparazzi:2, cheerleader:1 } }
        ]
      }
    ]
  }
};
