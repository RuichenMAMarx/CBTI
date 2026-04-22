window.CBTI_QUESTIONS = [
  // 抽象程度 3题：测表达是否“像人类”
  {
    id: 1,
    primaryDimension: "abstractness",
    title: "朋友发消息问你“吃了吗”，你当时心情一般。你更可能怎么回？",
    options: [
      { text: "吃了，你呢？", effects: { abstractness: 0, wisdom: 1 } },
      { text: "刚吃完，感觉今天这顿饭像命运安排的。", effects: { abstractness: 2, wisdom: 1 } },
      { text: "哈？什么饭？什么命？什么人类？", effects: { abstractness: 3, meaninglessness: 1 } },
      { text: "发一个看不出是答复还是发疯的表情包。", effects: { abstractness: 2, memeHistory: 1, witness: 1 } }
    ]
  },
  {
    id: 2,
    primaryDimension: "abstractness",
    title: "开会时领导突然点你名字，让你说两句。你更接近哪种状态？",
    options: [
      { text: "正常回答，尽量把话说清楚。", effects: { abstractness: 0, wisdom: 1 } },
      { text: "表面正常，实则脑子已经飘到别的宇宙。", effects: { abstractness: 2, deconstruction: 1 } },
      { text: "说着说着自己都觉得这段发言不像地球人能组织出来的。", effects: { abstractness: 3, witness: 1 } },
      { text: "会突然冒出一句很怪但你自己觉得非常自然的话。", effects: { abstractness: 2, meaninglessness: 1, memeHistory: 1 } }
    ]
  },
  {
    id: 3,
    primaryDimension: "abstractness",
    title: "深夜刷手机刷到停不下来时，你最容易进入哪种模式？",
    options: [
      { text: "困了就睡，没什么特别的。", effects: { abstractness: 0, wisdom: 1 } },
      { text: "开始胡思乱想，但还算在人类理解范围内。", effects: { abstractness: 1, witness: 1 } },
      { text: "越刷越觉得世界像一个巨大行为艺术。", effects: { abstractness: 3, deconstruction: 1 } },
      { text: "突然觉得自己已经和正常表达体系永久脱钩。", effects: { abstractness: 3, meaninglessness: 1, memeHistory: 1 } }
    ]
  },

  // 解构程度 3题：对规范、道德、秩序的轻视/拆解
  {
    id: 4,
    primaryDimension: "deconstruction",
    title: "朋友很认真地说“做人还是要有点体面”，你第一反应更像：",
    options: [
      { text: "确实，很多时候还是得注意分寸。", effects: { deconstruction: 0, wisdom: 1 } },
      { text: "看情况吧，具体情境具体分析。", effects: { deconstruction: 1, wisdom: 1 } },
      { text: "体面这个东西，一听就很适合拿来玩坏。", effects: { deconstruction: 3, abstractness: 1 } },
      { text: "接吻不就是在吸一个一头是史的吸管吗？", effects: { deconstruction: 3, meaninglessness: 1, memeHistory: 1 } }
    ]
  },
  {
    id: 5,
    primaryDimension: "deconstruction",
    title: "看到别人一本正经地维护某种“绝对正确的规则”时，你通常会：",
    options: [
      { text: "规则存在肯定有它的道理。", effects: { deconstruction: 0, wisdom: 1 } },
      { text: "我会先理解它，再决定要不要遵守。", effects: { deconstruction: 1, wisdom: 1 } },
      { text: "忍不住想从边上戳一个洞，看看它会不会自己塌。", effects: { deconstruction: 3, witness: 1 } },
      { text: "会立刻想到怎么把这套规则翻译成一个怪梗。", effects: { deconstruction: 2, meaninglessness: 1, abstractness: 1 } }
    ]
  },
  {
    id: 6,
    primaryDimension: "deconstruction",
    title: "和朋友讨论某件事“该不该做”时，你更可能说出哪种话？",
    options: [
      { text: "先判断后果，再看值不值得。", effects: { deconstruction: 0, wisdom: 1 } },
      { text: "我觉得是场景定义了对错。", effects: { deconstruction: 2, wisdom: 1 } },
      { text: "道德不过手中黏土，可以随意捏塑。", effects: { deconstruction: 3, abstractness: 1 } },
      { text: "天地一指也，万物一马也。", effects: { deconstruction: 3, meaninglessness: 1, witness: 1 } }
    ]
  },

  // 基米程度 3题：无意义语言填充
  {
    id: 7,
    primaryDimension: "meaninglessness",
    title: "聊天聊着聊着突然冷场了，你最可能用什么方式补一句？",
    options: [
      { text: "正常换个话题。", effects: { meaninglessness: 0, wisdom: 1 } },
      { text: "发个‘哈哈哈哈’缓冲一下。", effects: { meaninglessness: 1, witness: 1 } },
      { text: "来一句别人似懂非懂、但你觉得很顺口的怪话。", effects: { meaninglessness: 3, abstractness: 1 } },
      { text: "直接开始哈基米曼波式发言。", effects: { meaninglessness: 3, memeHistory: 1, witness: 1 } }
    ]
  },
  {
    id: 8,
    primaryDimension: "meaninglessness",
    title: "你发动态时，哪一种最像你？",
    options: [
      { text: "事情是什么就写什么。", effects: { meaninglessness: 0, wisdom: 1 } },
      { text: "想写得有点意思，但还是让人看得懂。", effects: { meaninglessness: 1, wisdom: 1 } },
      { text: "写一句你自己也说不清到底在表达什么的话。", effects: { meaninglessness: 3, abstractness: 1 } },
      { text: "‘为什么不往东西走？因为南北路多。’这种级别最对味。", effects: { meaninglessness: 3, memeHistory: 1, wisdom: 1 } }
    ]
  },
  {
    id: 9,
    primaryDimension: "meaninglessness",
    title: "朋友问你“这个梗到底什么意思”，你更可能：",
    options: [
      { text: "认真解释给他听。", effects: { meaninglessness: 0, wisdom: 1 } },
      { text: "说个大概意思，让他自己感受。", effects: { meaninglessness: 1, witness: 1 } },
      { text: "告诉他‘哈基米是智慧、判断、统治、裁决的意思’。", effects: { meaninglessness: 3, wisdom: 1, memeHistory: 1 } },
      { text: "越解释越怪，最后变成新的无意义语录。", effects: { meaninglessness: 3, deconstruction: 1, abstractness: 1 } }
    ]
  },

  // 哈气程度 3题：表达中的攻击性
  {
    id: 10,
    primaryDimension: "aggression",
    title: "有人在评论区阴阳你一句，你第一反应通常是：",
    options: [
      { text: "懒得理，划走。", effects: { aggression: 0, wisdom: 1 } },
      { text: "会有点不爽，但尽量忍住。", effects: { aggression: 1, witness: 1 } },
      { text: "想立刻回一句更冲的。", effects: { aggression: 3, wisdom: 1 } },
      { text: "我这个级别的基米有权哈任何人。", effects: { aggression: 3, meaninglessness: 1, memeHistory: 1 } }
    ]
  },
  {
    id: 11,
    primaryDimension: "aggression",
    title: "你和熟人斗嘴时，最像哪一种？",
    options: [
      { text: "开个玩笑就收，不会太上头。", effects: { aggression: 0, wisdom: 1 } },
      { text: "嘴上凶一下，但整体还是偏可控。", effects: { aggression: 1, witness: 1 } },
      { text: "会越聊越带劲，开始有点真哈气。", effects: { aggression: 3, abstractness: 1 } },
      { text: "若令基米无哈，不知有几人称帝，几人称王。", effects: { aggression: 3, meaninglessness: 1, memeHistory: 1 } }
    ]
  },
  {
    id: 12,
    primaryDimension: "aggression",
    title: "别人连续几次打断你说话，你更可能怎么处理？",
    options: [
      { text: "算了，让他说。", effects: { aggression: 0, wisdom: 1 } },
      { text: "会提醒一下，但比较克制。", effects: { aggression: 1, wisdom: 1 } },
      { text: "语气会明显变冲，让对方知道别再来。", effects: { aggression: 3, witness: 1 } },
      { text: "我应激了都是你的错！", effects: { aggression: 3, meaninglessness: 1 } }
    ]
  },

  // 见证程度 3题：热衷在场、推动、留痕
  {
    id: 13,
    primaryDimension: "witness",
    title: "群里突然出现一场离谱争吵，你最像哪种人？",
    options: [
      { text: "不看，直接静音。", effects: { witness: 0, wisdom: 1 } },
      { text: "看看热闹，但不说话。", effects: { witness: 1, memeHistory: 1 } },
      { text: "一边看一边截图，准备事后复盘。", effects: { witness: 3, memeHistory: 1 } },
      { text: "忍不住补一句，让这场戏更完整。", effects: { witness: 3, deconstruction: 1, aggression: 1 } }
    ]
  },
  {
    id: 14,
    primaryDimension: "witness",
    title: "朋友正在讲一件特别炸裂的现实八卦时，你的表现更可能是：",
    options: [
      { text: "听完就算，不太往心里去。", effects: { witness: 0, wisdom: 1 } },
      { text: "会认真听，但仅限当场。", effects: { witness: 1 } },
      { text: "你会很自然地把这事记下来，以后随时能调出来。", effects: { witness: 3, wisdom: 1 } },
      { text: "边听边想：这不拿来当时代样本太可惜了。", effects: { witness: 3, memeHistory: 1, abstractness: 1 } }
    ]
  },
  {
    id: 15,
    primaryDimension: "witness",
    title: "出去玩时碰上一件特别怪的事，你通常会先做什么？",
    options: [
      { text: "先处理事情本身。", effects: { witness: 0, wisdom: 1 } },
      { text: "看一眼，再决定要不要记录。", effects: { witness: 1 } },
      { text: "马上掏手机，这种必须被见证。", effects: { witness: 3 } },
      { text: "拍下来还不够，你还想给它配一句流传千古的话。", effects: { witness: 3, meaninglessness: 1, memeHistory: 1 } }
    ]
  },

  // 神史程度 3题：对好梗/烂梗/互联网神史的沉浸
  {
    id: 16,
    primaryDimension: "memeHistory",
    title: "你刷到一个很古早、很土、但又莫名震撼的梗图时，通常会：",
    options: [
      { text: "觉得有点尴尬，顺手划走。", effects: { memeHistory: 0, wisdom: 1 } },
      { text: "会多看两眼，觉得有点意思。", effects: { memeHistory: 1 } },
      { text: "立刻保存，并想找人一起品。", effects: { memeHistory: 3, witness: 1 } },
      { text: "你会自然地问：那我问你，你这梗是香的臭的？", effects: { memeHistory: 3, meaninglessness: 1, abstractness: 1 } }
    ]
  },
  {
    id: 17,
    primaryDimension: "memeHistory",
    title: "面对一个“很烂但很好笑”的梗，你的态度更像：",
    options: [
      { text: "烂就是烂，不太能接受。", effects: { memeHistory: 0, wisdom: 1 } },
      { text: "偶尔能笑，但不会主动用。", effects: { memeHistory: 1 } },
      { text: "越烂越想转，史感本身就是价值。", effects: { memeHistory: 3, witness: 1 } },
      { text: "炸蘑菇是高温杀菌，仓颉是字母，太极是巧克力。", effects: { memeHistory: 3, meaninglessness: 1, deconstruction: 1 } }
    ]
  },
  {
    id: 18,
    primaryDimension: "memeHistory",
    title: "朋友跟你讨论最近的梗圈生态时，你最像哪种人？",
    options: [
      { text: "我只看懂自己常用的那些。", effects: { memeHistory: 0, wisdom: 1 } },
      { text: "会跟，但不太在意好梗烂梗之分。", effects: { memeHistory: 1 } },
      { text: "你对不同梗的神、史、香、臭很有自己的一套评价体系。", effects: { memeHistory: 3, wisdom: 1 } },
      { text: "致天下所有孤单、彷徨、迷茫、困顿的人：我喜欢你。", effects: { memeHistory: 3, meaninglessness: 1, witness: 1 } }
    ]
  },

  // 智慧程度 3题：梗看起来聪不聪明
  {
    id: 19,
    primaryDimension: "wisdom",
    title: "朋友给你发了一个新梗，问你好不好笑。你通常会怎么判断？",
    options: [
      { text: "好笑就行，不太分析。", effects: { wisdom: 0, witness: 1 } },
      { text: "看它是不是顺口、是不是能传播。", effects: { wisdom: 1, memeHistory: 1 } },
      { text: "你会下意识评估：这梗看起来聪不聪明。", effects: { wisdom: 3 } },
      { text: "‘震撼首发，十年内没人能看懂，我已急哭。’这种就很聪明。", effects: { wisdom: 3, meaninglessness: 1, abstractness: 1 } }
    ]
  },
  {
    id: 20,
    primaryDimension: "wisdom",
    title: "几个人围着聊某个很火的话题时，你更接近哪种发言方式？",
    options: [
      { text: "想到什么说什么。", effects: { wisdom: 0 } },
      { text: "会找一个比较稳妥的角度说。", effects: { wisdom: 1 } },
      { text: "你喜欢说那种听起来很有见地、很像总结陈词的话。", effects: { wisdom: 3, witness: 1 } },
      { text: "‘文化工作者一定要有文化。’你会忍不住输出这种味道的句子。", effects: { wisdom: 3, memeHistory: 1 } }
    ]
  },
  {
    id: 21,
    primaryDimension: "wisdom",
    title: "当一个梗突然爆火，你最可能从哪个角度看它？",
    options: [
      { text: "火就火了，我只负责笑。", effects: { wisdom: 0, witness: 1 } },
      { text: "我会看看它为什么传播得这么快。", effects: { wisdom: 1, witness: 1 } },
      { text: "你会关心它到底高级不高级、聪不聪明。", effects: { wisdom: 3 } },
      { text: "‘元神牛逼！方周牛逼！明朝最牛逼！’这种看起来就很有智慧。", effects: { wisdom: 3, meaninglessness: 1, memeHistory: 1 } }
    ]
  }
];
