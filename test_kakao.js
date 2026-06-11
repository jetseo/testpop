/* ===========================================================
   테스트 #1: 카톡 답장 유형 테스트
   12문항 / 각 선택지는 8개 유형에 가중치 부여
   =========================================================== */
const TEST_KAKAO = {
  id: 'kakao-reply',
  emoji: '💬',
  // 유형 순서 + 유형별 이미지/색상
  typeList: ['instant','ghost_read','tmi','emoji','short','fairy','night','diver'],
  meta: {
    instant:    { img:'images/instant.jpg',    color:'#FFD54A', ink:'#7A5A00' },
    ghost_read: { img:'images/ghost_read.jpg', color:'#9DC3E6', ink:'#27486B' },
    tmi:        { img:'images/tmi.jpg',         color:'#FFB877', ink:'#8A4B12' },
    emoji:      { img:'images/emoji.jpg',       color:'#FFAFC9', ink:'#9B2C57' },
    short:      { img:'images/short.jpg',       color:'#B8BEC6', ink:'#3D4650' },
    fairy:      { img:'images/fairy.jpg',       color:'#C9B6E4', ink:'#5B3F86' },
    night:      { img:'images/night.jpg',       color:'#6E6A9E', ink:'#FFFFFF' },
    diver:      { img:'images/diver.jpg',       color:'#5FC9C9', ink:'#0E5252' }
  },
  // 결과 유형 이름 + 설명 (4개 언어)
  types: {
    instant: {
      ko:{name:'⚡ 즉답봇', tag:'0.1초 컷 답장러',
        desc:'알림이 뜨는 순간 이미 답장 완료. 상대방이 "벌써 읽었어?" 하고 놀랄 정도예요. 빠른 만큼 가끔 오타도 빛의 속도지만, 당신과 대화하면 답답할 일은 절대 없죠.',
        best:'tmi', worst:'diver'},
      en:{name:'⚡ Instant Bot', tag:'0.1-second replier',
        desc:'The notification barely buzzes and your reply is already sent. Friends are stunned by your speed. Typos travel at light speed too, but chatting with you is never frustrating.',
        best:'tmi', worst:'diver'},
      ja:{name:'⚡ 即レスボット', tag:'0.1秒返信',
        desc:'通知が鳴った瞬間にはもう返信完了。相手が「もう読んだの！？」と驚くほど。速い分タイプミスも光速ですが、あなたとの会話で待たされることは絶対にありません。',
        best:'tmi', worst:'diver'},
      zh:{name:'⚡ 秒回机器人', tag:'0.1秒回复',
        desc:'通知刚响，你的回复已经发出。朋友都惊讶于你的速度。打错字也是光速，但和你聊天绝不会让人着急。',
        best:'tmi', worst:'diver'}
    },
    ghost_read: {
      ko:{name:'👀 읽씹 장인', tag:'읽고 잠수하는 고수',
        desc:'분명 읽음 표시는 떴는데… 답장은 안 옵니다. 악의는 없어요. 그냥 "나중에 해야지" 하다가 까먹는 거예요. 당신의 "1"은 사라졌지만 답장은 영원히 오지 않을 수도.',
        best:'fairy', worst:'instant'},
      en:{name:'👀 Master of Left-on-Read', tag:'reads then vanishes',
        desc:'The "read" mark is there… but no reply comes. No bad intent — you just think "later" and forget. The unread count is gone, but the reply might never arrive.',
        best:'fairy', worst:'instant'},
      ja:{name:'👀 既読スルーの達人', tag:'読んで潜水',
        desc:'既読はついているのに…返信は来ません。悪気はゼロ。「後でやろう」と思って忘れるだけ。未読は消えたけど、返信は永遠に来ないかも。',
        best:'fairy', worst:'instant'},
      zh:{name:'👀 已读不回大师', tag:'读完就潜水',
        desc:'明明显示已读…却没有回复。没有恶意，只是想着"待会儿回"然后就忘了。未读消失了，但回复可能永远不会来。',
        best:'fairy', worst:'instant'}
    },
    tmi: {
      ko:{name:'📚 TMI 폭격기', tag:'장문 답장 장인',
        desc:'"ㅇㅋ"로 끝낼 수 있는 대화를 소설 한 편으로 만드는 재주. 오늘 점심부터 어제 꾼 꿈까지 다 공유해요. 당신과의 대화창은 늘 스크롤 압박이지만, 그만큼 정이 넘칩니다.',
        best:'instant', worst:'short'},
      en:{name:'📚 TMI Bomber', tag:'master of long replies',
        desc:'You turn a chat that could end with "k" into a full novel. From today\'s lunch to last night\'s dream, you share it all. Your chat window always needs scrolling, but it overflows with warmth.',
        best:'instant', worst:'short'},
      ja:{name:'📚 TMI爆撃機', tag:'長文返信の達人',
        desc:'「了解」で終わる会話を小説一本にする才能。今日のランチから昨日見た夢まで全部共有。あなたとのトーク画面は常にスクロール地獄、でもその分愛にあふれています。',
        best:'instant', worst:'short'},
      zh:{name:'📚 TMI轰炸机', tag:'长篇回复达人',
        desc:'能把一句"嗯"就能结束的对话写成一部小说。从今天的午饭到昨晚的梦全都分享。和你的聊天框总是需要滚动，但满满都是温情。',
        best:'instant', worst:'short'}
    },
    emoji: {
      ko:{name:'🎨 이모티콘 장인', tag:'글자보다 짤로 말함',
        desc:'말은 줄이고 이모티콘으로 모든 감정을 표현하는 타입. 웃긴 짤, 귀여운 스티커가 당신의 언어예요. 가끔 무슨 뜻인지 해석이 필요하지만, 대화창은 항상 알록달록 즐겁습니다.',
        best:'fairy', worst:'short'},
      en:{name:'🎨 Sticker Artist', tag:'speaks in memes',
        desc:'You cut the words and express every emotion with stickers. Funny memes and cute emojis are your language. Sometimes they need decoding, but your chats are always colorful and fun.',
        best:'fairy', worst:'short'},
      ja:{name:'🎨 スタンプ職人', tag:'文字よりスタンプ',
        desc:'言葉は減らし、スタンプで全ての感情を表現するタイプ。面白い画像、可愛いスタンプがあなたの言語。たまに解読が必要だけど、トーク画面はいつもカラフルで楽しい。',
        best:'fairy', worst:'short'},
      zh:{name:'🎨 表情包艺术家', tag:'用表情包说话',
        desc:'话很少，用表情包表达所有情绪。搞笑图、可爱贴纸就是你的语言。有时需要解读，但你的聊天框总是五彩缤纷又有趣。',
        best:'fairy', worst:'short'}
    },
    short: {
      ko:{name:'🗿 ㅇㅇ 단답형', tag:'효율 끝판왕',
        desc:'"ㅇㅇ", "ㄱㄱ", "ㅇㅋ". 당신의 답장은 효율 그 자체. 감정 노동 제로, 데이터 절약 최고. 무뚝뚝해 보여도 할 말은 다 합니다. 다만 가끔 상대가 삐질 수 있으니 주의.',
        best:'short', worst:'tmi'},
      en:{name:'🗿 One-Word Replier', tag:'peak efficiency',
        desc:'"k", "yes", "ok". Your replies are efficiency itself. Zero emotional labor, maximum data saving. You may seem blunt, but you say everything needed. Just watch out — others might get a little hurt.',
        best:'short', worst:'tmi'},
      ja:{name:'🗿 一言返信型', tag:'効率の極み',
        desc:'「うん」「了解」「おけ」。あなたの返信は効率そのもの。感情労働ゼロ、データ節約最高。そっけなく見えても言いたいことは全部言う。ただ相手が拗ねることもあるので注意。',
        best:'short', worst:'tmi'},
      zh:{name:'🗿 单字回复型', tag:'效率之王',
        desc:'"嗯""好""ok"。你的回复就是效率本身。零情绪劳动，最省流量。看起来冷淡，但该说的都说了。只是偶尔对方会闹小情绪，注意哦。',
        best:'short', worst:'tmi'}
    },
    fairy: {
      ko:{name:'🧚 답장요정', tag:'센스 만점 리액션러',
        desc:'적절한 타이밍, 완벽한 리액션, 따뜻한 한마디. 당신과 대화하면 기분이 좋아져요. 상대의 감정을 읽고 딱 맞는 답을 주는 진정한 대화의 고수. 모두가 당신과 톡하고 싶어 합니다.',
        best:'emoji', worst:'short'},
      en:{name:'🧚 Reply Fairy', tag:'perfect reactions',
        desc:'Right timing, perfect reactions, a warm word. Chatting with you lifts everyone\'s mood. You read emotions and give just the right reply — a true conversation master. Everyone wants to text you.',
        best:'emoji', worst:'short'},
      ja:{name:'🧚 返信の妖精', tag:'センス抜群リアクション',
        desc:'絶妙なタイミング、完璧なリアクション、温かい一言。あなたと話すと気分が良くなる。相手の感情を読んでピッタリの返事をする本物の会話の達人。みんながあなたとトークしたがります。',
        best:'emoji', worst:'short'},
      zh:{name:'🧚 回复小精灵', tag:'反应满分',
        desc:'恰到好处的时机、完美的反应、温暖的一句话。和你聊天心情就会变好。你能读懂对方的情绪，给出最合适的回复——真正的对话高手。每个人都想和你聊天。',
        best:'emoji', worst:'short'}
    },
    night: {
      ko:{name:'🌙 밤샘 톡러', tag:'새벽 감성 메신저',
        desc:'낮엔 조용하다가 새벽 2시에 살아나는 타입. 밤이 깊을수록 대화는 진해지고 감성은 폭발해요. 진지한 고민 상담은 늘 당신 몫. 다만 다음 날 아침 메시지는 답이 좀 늦습니다.',
        best:'night', worst:'instant'},
      en:{name:'🌙 Night Owl Texter', tag:'after-midnight mood',
        desc:'Quiet by day, alive at 2 AM. The deeper the night, the deeper the talk and the bigger the feelings. Serious heart-to-hearts are always your role. Just don\'t expect a fast reply the next morning.',
        best:'night', worst:'instant'},
      ja:{name:'🌙 夜更かしトーカー', tag:'深夜テンション',
        desc:'昼は静かなのに深夜2時に蘇るタイプ。夜が深まるほど会話は濃くなり感情が爆発。真剣な悩み相談はいつもあなたの担当。ただ翌朝のメッセージは返信が遅めです。',
        best:'night', worst:'instant'},
      zh:{name:'🌙 熬夜聊天党', tag:'深夜感性',
        desc:'白天安静，凌晨2点复活的类型。夜越深，聊天越深入，情绪越爆发。认真的烦恼倾诉总是你的活儿。只是第二天早上的消息回得有点慢。',
        best:'night', worst:'instant'}
    },
    diver: {
      ko:{name:'🤿 잠수왕', tag:'며칠 뒤 등장',
        desc:'갑자기 사라졌다가 "헐 미안 이제 봤어"로 부활하는 전설의 잠수부. 며칠씩 연락이 끊겨도 당신만의 페이스가 있어요. 친구들은 이제 익숙해졌지만, 그래도 가끔은 숨 쉬러 올라와 주세요!',
        best:'night', worst:'instant'},
      en:{name:'🤿 The Diver', tag:'resurfaces days later',
        desc:'Vanishes suddenly, then revives with "omg sorry just saw this." A legendary diver who can go dark for days. You have your own pace. Friends are used to it now — but please come up for air sometimes!',
        best:'night', worst:'instant'},
      ja:{name:'🤿 潜水王', tag:'数日後に登場',
        desc:'突然消えて「ごめん今見た」で復活する伝説のダイバー。何日も連絡が途絶えてもあなたなりのペースがある。友達はもう慣れたけど、たまには息継ぎに浮上してね！',
        best:'night', worst:'instant'},
      zh:{name:'🤿 潜水王', tag:'几天后才出现',
        desc:'突然消失，再以"啊抱歉才看到"复活的传说级潜水员。断联好几天也有自己的节奏。朋友们已经习惯了，但偶尔也浮上来换换气吧！',
        best:'night', worst:'instant'}
    }
  },
  // 12개 질문 — 각 선택지는 유형별 점수
  questions: {
    ko:[
      {q:'카톡 알림이 울렸다. 나의 반응은?',a:[
        {t:'바로 확인하고 즉시 답장',s:{instant:3}},
        {t:'읽긴 하는데 답은 나중에',s:{ghost_read:2,diver:1}},
        {t:'일단 이모티콘부터 하나 보냄',s:{emoji:3}},
        {t:'지금 새벽이면 신나서 답장',s:{night:3}}
      ]},
      {q:'친구가 "오늘 뭐했어?"라고 물으면?',a:[
        {t:'아침부터 있었던 일 전부 상세히',s:{tmi:3}},
        {t:'"그냥 집"',s:{short:3}},
        {t:'상황별 이모티콘으로 표현',s:{emoji:3}},
        {t:'질문 되받아치며 리액션',s:{fairy:2,instant:1}}
      ]},
      {q:'단톡방에서 내 위치는?',a:[
        {t:'제일 빨리 반응하는 사람',s:{instant:3}},
        {t:'읽기만 하는 유령 회원',s:{ghost_read:3}},
        {t:'분위기 띄우는 리액션 담당',s:{fairy:2,emoji:1}},
        {t:'며칠 만에 한 번 등장',s:{diver:3}}
      ]},
      {q:'답장하기 귀찮을 때 나는?',a:[
        {t:'그냥 안 읽은 척',s:{ghost_read:2,diver:1}},
        {t:'"ㅇㅇ" 한 방',s:{short:3}},
        {t:'귀여운 짤로 때우기',s:{emoji:3}},
        {t:'귀찮아도 일단 빨리 답함',s:{instant:3}}
      ]},
      {q:'좋아하는 사람에게 답장할 때?',a:[
        {t:'0.1초 컷, 티 다 남',s:{instant:3}},
        {t:'일부러 좀 뜸 들이기',s:{ghost_read:2}},
        {t:'완벽한 답장 고민 또 고민',s:{fairy:3}},
        {t:'새벽 감성 장문 고백',s:{night:2,tmi:1}}
      ]},
      {q:'내 카톡 대화창의 특징은?',a:[
        {t:'스크롤 압박 장문의 향연',s:{tmi:3}},
        {t:'단답 위주 깔끔',s:{short:3}},
        {t:'이모티콘 알록달록',s:{emoji:3}},
        {t:'읽씹 흔적 가득',s:{ghost_read:3}}
      ]},
      {q:'새벽 2시, 친구가 메시지를 보냈다',a:[
        {t:'완전 신나서 바로 답장',s:{night:3}},
        {t:'자는 중이라 아침에 확인',s:{instant:1,short:1}},
        {t:'읽고 다시 잠듦',s:{ghost_read:2}},
        {t:'이때다 싶어 고민 상담 시작',s:{night:2,tmi:1}}
      ]},
      {q:'답장 속도를 평가한다면?',a:[
        {t:'세계 최고 속도',s:{instant:3}},
        {t:'느릴 땐 며칠',s:{diver:3}},
        {t:'기분 따라 들쑥날쑥',s:{night:2,ghost_read:1}},
        {t:'적당히 센스있게',s:{fairy:3}}
      ]},
      {q:'친구의 고민 상담, 나의 답장은?',a:[
        {t:'진심 담은 장문 조언',s:{tmi:2,fairy:1}},
        {t:'"힘내" 한마디',s:{short:3}},
        {t:'위로 이모티콘 폭격',s:{emoji:3}},
        {t:'완벽한 타이밍의 공감',s:{fairy:3}}
      ]},
      {q:'읽씹 당했을 때 내 심정은?',a:[
        {t:'나도 자주 해서 이해함',s:{ghost_read:2,diver:1}},
        {t:'바로 답 안 오면 답답',s:{instant:3}},
        {t:'쿨하게 신경 안 씀',s:{short:2}},
        {t:'서운해서 곱씹음',s:{night:2}}
      ]},
      {q:'그룹 채팅 알림이 100개 쌓였다',a:[
        {t:'다 읽고 하나하나 반응',s:{tmi:2,fairy:1}},
        {t:'스크롤 쭉 내리고 끝',s:{ghost_read:2,short:1}},
        {t:'중요한 것만 골라 즉답',s:{instant:2}},
        {t:'며칠 묵혔다 한 번에',s:{diver:3}}
      ]},
      {q:'나를 가장 잘 표현하는 말은?',a:[
        {t:'대화의 분위기 메이커',s:{fairy:2,emoji:1}},
        {t:'효율적인 미니멀리스트',s:{short:3}},
        {t:'정 많은 수다쟁이',s:{tmi:3}},
        {t:'마이페이스 자유인',s:{diver:2,night:1}}
      ]}
    ],
    en:[
      {q:'Your phone buzzes with a new message. You...',a:[
        {t:'Check and reply instantly',s:{instant:3}},
        {t:'Read it, reply later (maybe)',s:{ghost_read:2,diver:1}},
        {t:'Send a sticker first',s:{emoji:3}},
        {t:'If it\'s late night, reply excitedly',s:{night:3}}
      ]},
      {q:'A friend asks "What did you do today?"',a:[
        {t:'Recap everything since breakfast',s:{tmi:3}},
        {t:'"nothing"',s:{short:3}},
        {t:'Express it all with stickers',s:{emoji:3}},
        {t:'Throw the question back with a reaction',s:{fairy:2,instant:1}}
      ]},
      {q:'Your role in group chats?',a:[
        {t:'First to respond, always',s:{instant:3}},
        {t:'The silent ghost member',s:{ghost_read:3}},
        {t:'The hype/reaction crew',s:{fairy:2,emoji:1}},
        {t:'Show up once every few days',s:{diver:3}}
      ]},
      {q:'When you don\'t feel like replying?',a:[
        {t:'Pretend I didn\'t see it',s:{ghost_read:2,diver:1}},
        {t:'One "k" and done',s:{short:3}},
        {t:'Cover it with a cute meme',s:{emoji:3}},
        {t:'Reply fast anyway',s:{instant:3}}
      ]},
      {q:'Texting someone you like?',a:[
        {t:'0.1 sec reply, totally obvious',s:{instant:3}},
        {t:'Wait on purpose to play it cool',s:{ghost_read:2}},
        {t:'Agonize over the perfect reply',s:{fairy:3}},
        {t:'Late-night heartfelt paragraphs',s:{night:2,tmi:1}}
      ]},
      {q:'Your chat window looks like...',a:[
        {t:'A scroll-heavy wall of text',s:{tmi:3}},
        {t:'Clean, short replies only',s:{short:3}},
        {t:'Colorful with stickers everywhere',s:{emoji:3}},
        {t:'Full of left-on-read traces',s:{ghost_read:3}}
      ]},
      {q:'2 AM, a friend texts you',a:[
        {t:'Wide awake, reply immediately',s:{night:3}},
        {t:'Asleep, will see it in the morning',s:{instant:1,short:1}},
        {t:'Read it and fall back asleep',s:{ghost_read:2}},
        {t:'Perfect time to start a deep talk',s:{night:2,tmi:1}}
      ]},
      {q:'How fast do you reply?',a:[
        {t:'World-record speed',s:{instant:3}},
        {t:'Sometimes it takes days',s:{diver:3}},
        {t:'Depends on my mood',s:{night:2,ghost_read:1}},
        {t:'Just the right, thoughtful pace',s:{fairy:3}}
      ]},
      {q:'A friend shares a problem. You reply...',a:[
        {t:'A long, heartfelt piece of advice',s:{tmi:2,fairy:1}},
        {t:'"hang in there"',s:{short:3}},
        {t:'A barrage of comfort stickers',s:{emoji:3}},
        {t:'Perfectly timed empathy',s:{fairy:3}}
      ]},
      {q:'When someone leaves you on read?',a:[
        {t:'I do it too, I get it',s:{ghost_read:2,diver:1}},
        {t:'No instant reply = anxious',s:{instant:3}},
        {t:'Couldn\'t care less',s:{short:2}},
        {t:'Quietly hurt, replay it in my head',s:{night:2}}
      ]},
      {q:'100 unread group messages pile up',a:[
        {t:'Read all, react one by one',s:{tmi:2,fairy:1}},
        {t:'Scroll past and done',s:{ghost_read:2,short:1}},
        {t:'Reply only to the important ones',s:{instant:2}},
        {t:'Let it sit for days, then catch up',s:{diver:3}}
      ]},
      {q:'Which describes you best?',a:[
        {t:'The mood-maker of any chat',s:{fairy:2,emoji:1}},
        {t:'An efficient minimalist',s:{short:3}},
        {t:'A warm-hearted chatterbox',s:{tmi:3}},
        {t:'A free spirit at my own pace',s:{diver:2,night:1}}
      ]}
    ],
    ja:[
      {q:'通知が鳴った。あなたの反応は？',a:[
        {t:'すぐ確認して即返信',s:{instant:3}},
        {t:'読むけど返信は後で',s:{ghost_read:2,diver:1}},
        {t:'とりあえずスタンプを一つ',s:{emoji:3}},
        {t:'深夜ならテンション上げて返信',s:{night:3}}
      ]},
      {q:'友達に「今日何してた？」と聞かれたら？',a:[
        {t:'朝からの出来事を全部詳しく',s:{tmi:3}},
        {t:'「家」',s:{short:3}},
        {t:'状況別スタンプで表現',s:{emoji:3}},
        {t:'質問を返してリアクション',s:{fairy:2,instant:1}}
      ]},
      {q:'グループトークでの自分の位置は？',a:[
        {t:'一番早く反応する人',s:{instant:3}},
        {t:'読むだけの幽霊メンバー',s:{ghost_read:3}},
        {t:'場を盛り上げるリアクション担当',s:{fairy:2,emoji:1}},
        {t:'数日に一度だけ登場',s:{diver:3}}
      ]},
      {q:'返信が面倒なとき、私は？',a:[
        {t:'読んでないフリ',s:{ghost_read:2,diver:1}},
        {t:'「うん」一発',s:{short:3}},
        {t:'可愛いスタンプでごまかす',s:{emoji:3}},
        {t:'面倒でもとりあえず早く返す',s:{instant:3}}
      ]},
      {q:'好きな人に返信するとき？',a:[
        {t:'0.1秒、バレバレ',s:{instant:3}},
        {t:'わざと少し焦らす',s:{ghost_read:2}},
        {t:'完璧な返信を悩みに悩む',s:{fairy:3}},
        {t:'深夜テンションで長文告白',s:{night:2,tmi:1}}
      ]},
      {q:'あなたのトーク画面の特徴は？',a:[
        {t:'スクロール地獄の長文祭り',s:{tmi:3}},
        {t:'短文中心ですっきり',s:{short:3}},
        {t:'スタンプでカラフル',s:{emoji:3}},
        {t:'既読スルーの痕跡だらけ',s:{ghost_read:3}}
      ]},
      {q:'深夜2時、友達からメッセージが来た',a:[
        {t:'テンション上がって即返信',s:{night:3}},
        {t:'寝てるので朝確認',s:{instant:1,short:1}},
        {t:'読んでまた寝る',s:{ghost_read:2}},
        {t:'ここぞと悩み相談スタート',s:{night:2,tmi:1}}
      ]},
      {q:'返信スピードを評価すると？',a:[
        {t:'世界最速',s:{instant:3}},
        {t:'遅いときは数日',s:{diver:3}},
        {t:'気分次第でバラバラ',s:{night:2,ghost_read:1}},
        {t:'ほどよくセンスよく',s:{fairy:3}}
      ]},
      {q:'友達の悩み相談、私の返信は？',a:[
        {t:'心を込めた長文アドバイス',s:{tmi:2,fairy:1}},
        {t:'「頑張れ」の一言',s:{short:3}},
        {t:'励ましスタンプ爆撃',s:{emoji:3}},
        {t:'完璧なタイミングの共感',s:{fairy:3}}
      ]},
      {q:'既読スルーされたときの気持ちは？',a:[
        {t:'自分もよくやるので理解',s:{ghost_read:2,diver:1}},
        {t:'すぐ返事が来ないとモヤモヤ',s:{instant:3}},
        {t:'クールに気にしない',s:{short:2}},
        {t:'寂しくて引きずる',s:{night:2}}
      ]},
      {q:'グループ通知が100件たまった',a:[
        {t:'全部読んで一つずつ反応',s:{tmi:2,fairy:1}},
        {t:'スクロールして終わり',s:{ghost_read:2,short:1}},
        {t:'重要なものだけ即返信',s:{instant:2}},
        {t:'数日寝かせて一気に',s:{diver:3}}
      ]},
      {q:'自分を一番表す言葉は？',a:[
        {t:'会話のムードメーカー',s:{fairy:2,emoji:1}},
        {t:'効率的なミニマリスト',s:{short:3}},
        {t:'情に厚いおしゃべり',s:{tmi:3}},
        {t:'マイペースな自由人',s:{diver:2,night:1}}
      ]}
    ],
    zh:[
      {q:'消息通知响了，你的反应是？',a:[
        {t:'马上看并立刻回复',s:{instant:3}},
        {t:'看是看了，回复待会儿',s:{ghost_read:2,diver:1}},
        {t:'先发个表情包',s:{emoji:3}},
        {t:'如果是深夜就兴奋地回',s:{night:3}}
      ]},
      {q:'朋友问"今天干嘛了？"',a:[
        {t:'从早上开始详细汇报',s:{tmi:3}},
        {t:'"在家"',s:{short:3}},
        {t:'用表情包表达一切',s:{emoji:3}},
        {t:'反问回去加个反应',s:{fairy:2,instant:1}}
      ]},
      {q:'你在群聊里的位置？',a:[
        {t:'永远第一个回应',s:{instant:3}},
        {t:'只看不说的幽灵成员',s:{ghost_read:3}},
        {t:'活跃气氛的反应担当',s:{fairy:2,emoji:1}},
        {t:'几天才出现一次',s:{diver:3}}
      ]},
      {q:'懒得回复的时候，你会？',a:[
        {t:'假装没看见',s:{ghost_read:2,diver:1}},
        {t:'一个"嗯"搞定',s:{short:3}},
        {t:'用可爱表情包糊弄',s:{emoji:3}},
        {t:'再懒也先快点回',s:{instant:3}}
      ]},
      {q:'给喜欢的人回复时？',a:[
        {t:'0.1秒秒回，藏都藏不住',s:{instant:3}},
        {t:'故意拖一会儿装酷',s:{ghost_read:2}},
        {t:'反复纠结完美回复',s:{fairy:3}},
        {t:'深夜感性长文告白',s:{night:2,tmi:1}}
      ]},
      {q:'你的聊天框特点是？',a:[
        {t:'需要狂滚的长文盛宴',s:{tmi:3}},
        {t:'短句为主很清爽',s:{short:3}},
        {t:'表情包五彩缤纷',s:{emoji:3}},
        {t:'满是已读不回的痕迹',s:{ghost_read:3}}
      ]},
      {q:'凌晨2点，朋友发来消息',a:[
        {t:'超精神立刻回复',s:{night:3}},
        {t:'在睡觉，早上再看',s:{instant:1,short:1}},
        {t:'看完继续睡',s:{ghost_read:2}},
        {t:'正好开始倾诉烦恼',s:{night:2,tmi:1}}
      ]},
      {q:'评价一下你的回复速度？',a:[
        {t:'世界最快',s:{instant:3}},
        {t:'慢起来要好几天',s:{diver:3}},
        {t:'看心情忽快忽慢',s:{night:2,ghost_read:1}},
        {t:'恰到好处又有分寸',s:{fairy:3}}
      ]},
      {q:'朋友倾诉烦恼，你的回复是？',a:[
        {t:'走心的长篇建议',s:{tmi:2,fairy:1}},
        {t:'"加油"两个字',s:{short:3}},
        {t:'安慰表情包轰炸',s:{emoji:3}},
        {t:'完美时机的共情',s:{fairy:3}}
      ]},
      {q:'被已读不回时你的心情？',a:[
        {t:'我也常这样，理解',s:{ghost_read:2,diver:1}},
        {t:'不秒回就着急',s:{instant:3}},
        {t:'酷酷地毫不在意',s:{short:2}},
        {t:'有点失落反复回想',s:{night:2}}
      ]},
      {q:'群消息堆了100条未读',a:[
        {t:'全看完一条条回应',s:{tmi:2,fairy:1}},
        {t:'一滑到底就完事',s:{ghost_read:2,short:1}},
        {t:'只挑重要的秒回',s:{instant:2}},
        {t:'放几天再一次性补',s:{diver:3}}
      ]},
      {q:'最能形容你的是？',a:[
        {t:'聊天的气氛制造者',s:{fairy:2,emoji:1}},
        {t:'高效的极简主义者',s:{short:3}},
        {t:'重感情的话痨',s:{tmi:3}},
        {t:'按自己节奏的自由人',s:{diver:2,night:1}}
      ]}
    ]
  }
};
console.log('test_kakao.js loaded');
