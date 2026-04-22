window.CBTI_TYPES = [
  {
    code: "HUMAN",
    name: "还有人类吗",
    intro: "这么说的人难道觉得自己算人类吗......",
    description: [
      "你的核心气质是一种高浓度的旁观感：人在场，魂不一定在场。",
      "你对大多数热闹都保持一点距离，尤其在群体失控、语境混乱时，会迅速进入“先别把我算作人类”的精神状态。",
      "你不是单纯冷淡，而是天然自带一种和现实世界半脱钩的观察视角。"
    ],
    targetRanges: {
      meaninglessness: [3, 8],
      abstractness: [7, 10],
      deconstruction: [2, 6],
      aggression: [0, 3],
      witness: [0, 3],
      memeHistory: [8, 10],
      wisdom: [1, 6]
    },
    priority: 96
  },
  {
    code: "LEITI",
    name: "雷霆",
    intro: "可是我真的觉得这很神圣啊",
    description: [
      "你身上有一种很典型的‘突然升格’气质：别人还在玩梗，你已经把场面理解成命运、神性与审判。",
      "你的发言往往带着强烈的判断力和气场，像一道落得很快的雷，未必总温和，但一定很难忽视。",
      "你适合那些带一点庄严、带一点过度投入、又带一点荒诞神圣感的互联网语境。"
    ],
    targetRanges: {
      meaninglessness: [2, 7],
      abstractness: [5, 9],
      deconstruction: [3, 7],
      aggression: [5, 10],
      witness: [2, 7],
      memeHistory: [4, 8],
      wisdom: [8, 10]
    },
    priority: 99
  },
  {
    code: "CABEI",
    name: "踩踩背",
    intro: "所以这到底是什么意思......",
    description: [
      "你的人格核心是：先把别人整迷糊，再用一种很柔软、很难解释的方式靠近。",
      "你擅长制造那种‘我一时说不清它是什么意思，但我就是觉得很对味’的亲密感。",
      "你的可爱不完全是撒娇，而是一种带谜语、带贴近、带情绪附着力的独特存在方式。"
    ],
    targetRanges: {
      meaninglessness: [5, 10],
      abstractness: [6, 10],
      deconstruction: [2, 6],
      aggression: [8, 10],
      witness: [1, 6],
      memeHistory: [3, 8],
      wisdom: [0, 5]
    },
    priority: 100
  },
  {
    code: "GOOD?",
    name: "哪边是好的",
    intro: "每次他们都敷衍我说什么立场不同",
    description: [
      "你习惯在混乱里追问方向，在立场里追问答案，在已经失控的语境里继续问‘到底哪边是好的’。",
      "你身上既有困惑感，也有一种不肯轻易被糊弄过去的执拗。",
      "这让你显得很会参与争论、很会掉进语境，也很容易成为互联网迷思的长期住户。"
    ],
    targetRanges: {
      meaninglessness: [3, 7],
      abstractness: [2, 6],
      deconstruction: [6, 10],
      aggression: [1, 5],
      witness: [3, 7],
      memeHistory: [5, 10],
      wisdom: [1, 4]
    },
    priority: 84
  },
  {
    code: "WHAT",
    name: "？",
    intro: "何意味？",
    description: [
      "你的标志性气质就是：困惑、留白、问号本身。",
      "你不是在正常提问，而是在把整个语境推入一个‘到底在干嘛’的悬空状态。",
      "你很适合那些一眼看过去只有问号、但问号里又包含无限梗感和无意义感的互联网表达。"
    ],
    targetRanges: {
      meaninglessness: [8, 10],
      abstractness: [5, 9],
      deconstruction: [2, 7],
      aggression: [0, 4],
      witness: [1, 5],
      memeHistory: [4, 9],
      wisdom: [0, 4]
    },
    priority: 95
  },
  {
    code: "ILIKEU",
    name: "我喜欢你",
    intro: "我也喜欢你！",
    description: [
      "你的人格底色偏真诚、偏热烈，一旦情绪确认，往往会很直接地向外表达。",
      "你并不完全属于高防御型人格，比起永远绕弯，你更容易在关键时刻把喜欢说出口。",
      "你的珍贵之处在于：在充满戏谑和试探的互联网语境里，你仍然保留了一点坦率和回应能力。"
    ],
    targetRanges: {
      meaninglessness: [0, 3],
      abstractness: [0, 3],
      deconstruction: [0, 3],
      aggression: [6, 10],
      witness: [1, 5],
      memeHistory: [0, 4],
      wisdom: [1, 5]
    },
    priority: 80
  },
  {
    code: "JIKU",
    name: "你已急哭",
    intro: "如果你没急就不会感到冒犯，如果感到冒犯说明你急了",
    description: [
      "你很会用一套近乎无解的逻辑结构把对方推进‘急了没’的循环里。",
      "你的表达风格兼具挑衅、诡辩、围观感和节目效果，非常适合引发二次传播。",
      "你不一定真的生气，但你很擅长把别人送进一种越解释越像急了的困局。"
    ],
    targetRanges: {
      meaninglessness: [4, 8],
      abstractness: [2, 6],
      deconstruction: [7, 10],
      aggression: [5, 9],
      witness: [8, 10],
      memeHistory: [4, 8],
      wisdom: [2, 6]
    },
    priority: 94
  },
  {
    code: "NAZA",
    name: "那咋了",
    intro: "课题分离的大师之作，三个字应对所有攻击",
    description: [
      "你的厉害之处在于一种极简的防御和卸力能力：不解释，不内耗，不陪跑情绪。",
      "你既可以是冷静，也可以是摆烂，还可以是某种很高级的课题分离。",
      "在很多冲突里，你都像一个轻飘飘但异常有效的终结句。"
    ],
    targetRanges: {
      meaninglessness: [1, 5],
      abstractness: [0, 4],
      deconstruction: [1, 4],
      aggression: [2, 5],
      witness: [0, 4],
      memeHistory: [1, 5],
      wisdom: [6, 10]
    },
    priority: 88
  },
  {
    code: "BANK",
    name: "CCB",
    intro: "其实是中国建设银行哒",
    description: [
      "你的气质核心是一种经典互联网误读梗：别人以为你懂那个梗，你却突然把它拉回到另一个字面世界。",
      "你擅长靠缩写、双关、误会和一本正经的跑偏制造喜剧效果。",
      "这种气质不靠强攻击性，而靠一种非常稳定的‘把语境带偏’能力。"
    ],
    targetRanges: {
      meaninglessness: [6, 10],
      abstractness: [5, 9],
      deconstruction: [4, 8],
      aggression: [0, 4],
      witness: [1, 6],
      memeHistory: [6, 10],
      wisdom: [2, 6]
    },
    priority: 91
  },
  {
    code: "PAST",
    name: "往日种种......",
    intro: "我上可陪神圣曼波，下可陪咕嘎奶龙，眼见天下无一不是苦命鸳鸯",
    description: [
      "你非常适合那种带一点旧互联网沧桑感、带一点看尽梗海沉浮后的感叹口吻。",
      "你既懂古早，也懂新梗，既能陪神圣曼波，也能陪咕嘎奶龙，本质上是一种高神史、高见证的互联网老人气质。",
      "你的人格魅力来自‘我什么都见过，所以我现在说这句话格外有分量’。"
    ],
    targetRanges: {
      meaninglessness: [4, 9],
      abstractness: [3, 7],
      deconstruction: [2, 6],
      aggression: [0, 4],
      witness: [7, 10],
      memeHistory: [8, 10],
      wisdom: [6, 10]
    },
    priority: 97
  },
  {
    code: "ME2?",
    name: "我也要吗",
    intro: "愿每一个说着‘我也要吗’的你，在决定的时刻都能亲手抓住自己的命运",
    description: [
      "你的人格核心是一种试探式的渴望：想要、又不完全敢认领，靠一句反问把欲望和不确定一起说出来。",
      "你很适合那种看起来轻轻的、软软的、其实里面装着命运感和分配感的梗语境。",
      "你不是完全被动，你只是习惯先问一句‘我也要吗’，再决定自己要不要伸手。"
    ],
    targetRanges: {
      meaninglessness: [3, 7],
      abstractness: [2, 6],
      deconstruction: [1, 5],
      aggression: [5, 10],
      witness: [1, 5],
      memeHistory: [2, 7],
      wisdom: [0, 4]
    },
    priority: 90
  }
];
