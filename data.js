// ============================================
// 物理提分助手 - 数据层
// ============================================

var KNOWLEDGE_NODES = [
  // 八上 第1章 机械运动
  { id: 'motion_measurement', name: '长度和时间的测量', chapter: '机械运动', semester: '上', order: 1, prerequisites: [] },
  { id: 'motion_reference', name: '参照物', chapter: '机械运动', semester: '上', order: 2, prerequisites: ['motion_measurement'] },
  { id: 'motion_speed', name: '速度', chapter: '机械运动', semester: '上', order: 3, prerequisites: ['motion_measurement', 'motion_reference'] },
  { id: 'motion_avg_speed', name: '平均速度测量', chapter: '机械运动', semester: '上', order: 4, prerequisites: ['motion_speed'] },

  // 八上 第2章 声现象
  { id: 'sound_production', name: '声音的产生与传播', chapter: '声现象', semester: '上', order: 5, prerequisites: [] },
  { id: 'sound_characteristics', name: '声音的特性', chapter: '声现象', semester: '上', order: 6, prerequisites: ['sound_production'] },
  { id: 'sound_utilization', name: '声的利用', chapter: '声现象', semester: '上', order: 7, prerequisites: ['sound_characteristics'] },
  { id: 'sound_noise', name: '噪声的控制', chapter: '声现象', semester: '上', order: 8, prerequisites: ['sound_production'] },

  // 八上 第3章 物态变化
  { id: 'temp_measurement', name: '温度', chapter: '物态变化', semester: '上', order: 9, prerequisites: [] },
  { id: 'phase_melt', name: '熔化和凝固', chapter: '物态变化', semester: '上', order: 10, prerequisites: ['temp_measurement'] },
  { id: 'phase_vapor', name: '汽化和液化', chapter: '物态变化', semester: '上', order: 11, prerequisites: ['temp_measurement'] },
  { id: 'phase_sublime', name: '升华和凝华', chapter: '物态变化', semester: '上', order: 12, prerequisites: ['phase_melt', 'phase_vapor'] },

  // 八下 力与运动
  { id: 'force_concept', name: '力的概念', chapter: '力与运动', semester: '下', order: 13, prerequisites: [] },
  { id: 'force_effect', name: '力的作用效果', chapter: '力与运动', semester: '下', order: 14, prerequisites: ['force_concept'] },
  { id: 'force_interaction', name: '力的作用是相互的', chapter: '力与运动', semester: '下', order: 15, prerequisites: ['force_concept', 'force_effect'] },
  { id: 'elastic_concept', name: '弹力', chapter: '力与运动', semester: '下', order: 16, prerequisites: ['force_concept'] },
  { id: 'elastic_measurement', name: '弹簧测力计', chapter: '力与运动', semester: '下', order: 17, prerequisites: ['elastic_concept'] },
  { id: 'elastic_hooke', name: '胡克定律', chapter: '力与运动', semester: '下', order: 18, prerequisites: ['elastic_concept', 'elastic_measurement'] },
  { id: 'gravity_concept', name: '重力', chapter: '力与运动', semester: '下', order: 19, prerequisites: ['force_concept'] },
  { id: 'gravity_calculation', name: '重力的计算', chapter: '力与运动', semester: '下', order: 20, prerequisites: ['gravity_concept'] },
  { id: 'gravity_center', name: '重心', chapter: '力与运动', semester: '下', order: 21, prerequisites: ['gravity_concept'] },
  { id: 'newton_first', name: '牛顿第一定律', chapter: '力与运动', semester: '下', order: 22, prerequisites: ['force_effect'] },
  { id: 'inertia_concept', name: '惯性', chapter: '力与运动', semester: '下', order: 23, prerequisites: ['newton_first'] },
  { id: 'inertia_application', name: '惯性的应用', chapter: '力与运动', semester: '下', order: 24, prerequisites: ['inertia_concept'] },
  { id: 'balance_condition', name: '二力平衡条件', chapter: '力与运动', semester: '下', order: 25, prerequisites: ['force_interaction'] },
  { id: 'balance_friction', name: '摩擦力与平衡', chapter: '力与运动', semester: '下', order: 26, prerequisites: ['balance_condition', 'friction_concept'] },
  { id: 'friction_concept', name: '摩擦力', chapter: '力与运动', semester: '下', order: 27, prerequisites: ['force_concept'] },
  { id: 'friction_factors', name: '影响摩擦力的因素', chapter: '力与运动', semester: '下', order: 28, prerequisites: ['friction_concept'] },
  { id: 'friction_application', name: '摩擦力的应用', chapter: '力与运动', semester: '下', order: 29, prerequisites: ['friction_factors'] },
];

var CHAPTERS = [
  { name: '机械运动', semester: '上', nodes: ['motion_measurement', 'motion_reference', 'motion_speed', 'motion_avg_speed'] },
  { name: '声现象', semester: '上', nodes: ['sound_production', 'sound_characteristics', 'sound_utilization', 'sound_noise'] },
  { name: '物态变化', semester: '上', nodes: ['temp_measurement', 'phase_melt', 'phase_vapor', 'phase_sublime'] },
  { name: '力与运动', semester: '下', nodes: ['force_concept', 'force_effect', 'force_interaction', 'elastic_concept', 'elastic_measurement', 'elastic_hooke', 'gravity_concept', 'gravity_calculation', 'gravity_center', 'newton_first', 'inertia_concept', 'inertia_application', 'balance_condition', 'balance_friction', 'friction_concept', 'friction_factors', 'friction_application'] },
];

// ============================================
// 八年级上册 题库（手写）
// ============================================
var UPPER_QUESTIONS = [
  // === 第1章 机械运动 ===
  // 长度和时间的测量
  {
    id: 'up_001', knowledge_node_id: 'motion_measurement', chapter: '机械运动', section: '长度和时间的测量',
    difficulty: 1, type: 'choice',
    content: '下列长度单位换算正确的是？',
    options: ['1m = 10cm', '1km = 1000m', '1mm = 0.1cm', '1dm = 100cm'],
    answer: '1km = 1000m',
    explanation: '长度单位换算：1km = 1000m，1m = 10dm = 100cm = 1000mm。只有B选项正确。',
    hints: ['1米等于多少厘米？', '回忆一下各长度单位之间的进率关系。', '长度单位换算：1km = 1000m，1m = 10dm = 100cm = 1000mm。只有B选项正确。']
  },
  {
    id: 'up_002', knowledge_node_id: 'motion_measurement', chapter: '机械运动', section: '长度和时间的测量',
    difficulty: 1, type: 'choice',
    content: '使用刻度尺测量时，视线应与尺面？',
    options: ['平行', '垂直', '倾斜', '任意方向'],
    answer: '垂直',
    explanation: '使用刻度尺测量长度时，视线应与尺面垂直，正对刻度线读数，否则会因视角偏差导致读数不准。',
    hints: ['如果斜着眼睛看刻度尺，读数会偏大还是偏小？', '正确的读数姿势是正视刻度线。', '使用刻度尺测量长度时，视线应与尺面垂直，正对刻度线读数，否则会因视角偏差导致读数不准。']
  },
  {
    id: 'up_003', knowledge_node_id: 'motion_measurement', chapter: '机械运动', section: '长度和时间的测量',
    difficulty: 2, type: 'choice',
    content: '测量某物体长度，读数为3.25cm，这个结果的准确值是？',
    options: ['3cm', '3.2cm', '3.25cm', '0.25cm'],
    answer: '3.2cm',
    explanation: '刻度尺读数要估读到分度值的下一位。3.25cm中，3.2cm是准确值（由刻度线直接读出），0.05cm是估读值。',
    hints: ['刻度尺读数时，哪一位是估计出来的？', '准确值是指可以直接从刻度上读出的部分。', '刻度尺读数要估读到分度值的下一位。3.25cm中，3.2cm是准确值（由刻度线直接读出），0.05cm是估读值。']
  },

  // 参照物
  {
    id: 'up_004', knowledge_node_id: 'motion_reference', chapter: '机械运动', section: '参照物',
    difficulty: 1, type: 'choice',
    content: '"月亮在云中穿行"选择的参照物是？',
    options: ['月亮', '云', '地面', '观察者'],
    answer: '云',
    explanation: '月亮在云中穿行，意思是月亮相对于云的位置在变化，所以参照物是云。',
    hints: ['说月亮在"穿行"，是相对于什么在动？', '参照物就是被假定为不动的物体。', '月亮在云中穿行，意思是月亮相对于云的位置在变化，所以参照物是云。']
  },
  {
    id: 'up_005', knowledge_node_id: 'motion_reference', chapter: '机械运动', section: '参照物',
    difficulty: 1, type: 'choice',
    content: '坐在行驶汽车中的乘客，说自己是静止的，他选择的参照物是？',
    options: ['路边树木', '对面来车', '汽车座椅', '地面'],
    answer: '汽车座椅',
    explanation: '乘客相对于汽车座椅的位置没有变化，所以以座椅为参照物，乘客是静止的。相对于树木、地面、对面来车，乘客都在运动。',
    hints: ['静止的意思是相对于某个物体位置不变。乘客相对于哪个物体位置不变？', '参照物不同，对运动状态的描述就不同。', '乘客相对于汽车座椅的位置没有变化，所以以座椅为参照物，乘客是静止的。相对于树木、地面、对面来车，乘客都在运动。']
  },
  {
    id: 'up_006', knowledge_node_id: 'motion_reference', chapter: '机械运动', section: '参照物',
    difficulty: 2, type: 'choice',
    content: '下列说法正确的是？',
    options: ['运动是绝对的，静止是相对的', '静止是绝对的', '运动和静止都是绝对的', '运动和静止都是相对的'],
    answer: '运动是绝对的，静止是相对的',
    explanation: '宇宙中一切物体都在不停地运动，运动是绝对的。而静止是相对的，取决于所选的参照物。',
    hints: ['地球上的房子看起来不动，但如果以太阳为参照物呢？', '世界上没有绝对不动的物体。', '宇宙中一切物体都在不停地运动，运动是绝对的。而静止是相对的，取决于所选的参照物。']
  },

  // 速度
  {
    id: 'up_007', knowledge_node_id: 'motion_speed', chapter: '机械运动', section: '速度',
    difficulty: 1, type: 'choice',
    content: '下列关于速度的说法正确的是？',
    options: ['速度是表示物体运动快慢的物理量', '速度大的物体通过的路程一定长', '时间短的物体速度一定大', '速度等于路程'],
    answer: '速度是表示物体运动快慢的物理量',
    explanation: '速度表示物体运动的快慢，定义为单位时间内通过的路程（v = s/t）。速度大不一定路程长（还要看时间），时间短也不一定速度大（还要看路程）。',
    hints: ['速度的公式是什么？', '速度由路程和时间两个因素共同决定。', '速度表示物体运动的快慢，定义为单位时间内通过的路程（v = s/t）。速度大不一定路程长（还要看时间），时间短也不一定速度大（还要看路程）。']
  },
  {
    id: 'up_008', knowledge_node_id: 'motion_speed', chapter: '机械运动', section: '速度',
    difficulty: 1, type: 'choice',
    content: '一辆汽车2小时行驶120km，它的平均速度是？',
    options: ['240km/h', '60km/h', '120km/h', '30km/h'],
    answer: '60km/h',
    explanation: '平均速度 = 总路程 / 总时间 = 120km / 2h = 60km/h。',
    hints: ['平均速度的计算公式是什么？', '用路程除以时间。', '平均速度 = 总路程 / 总时间 = 120km / 2h = 60km/h。']
  },
  {
    id: 'up_009', knowledge_node_id: 'motion_speed', chapter: '机械运动', section: '速度',
    difficulty: 2, type: 'choice',
    content: '甲的速度是5m/s，乙的速度是18km/h，则？',
    options: ['甲快', '乙快', '一样快', '无法比较'],
    answer: '一样快',
    explanation: '统一单位比较：5m/s = 5 × 3.6 km/h = 18km/h。所以甲乙速度相等。',
    hints: ['1m/s等于多少km/h？', '把两个速度换算成相同单位再比较。', '统一单位比较：5m/s = 5 × 3.6 km/h = 18km/h。所以甲乙速度相等。']
  },

  // 平均速度测量
  {
    id: 'up_010', knowledge_node_id: 'motion_avg_speed', chapter: '机械运动', section: '平均速度测量',
    difficulty: 1, type: 'choice',
    content: '测量小车平均速度的实验中，需要的器材不包括？',
    options: ['斜面', '小车', '秒表', '天平'],
    answer: '天平',
    explanation: '测量平均速度需要测量路程（刻度尺）和时间（秒表），不需要测量质量，所以不需要天平。',
    hints: ['平均速度的公式是什么？需要测量哪些物理量？', '路程用刻度尺测，时间用秒表测。', '测量平均速度需要测量路程（刻度尺）和时间（秒表），不需要测量质量，所以不需要天平。']
  },
  {
    id: 'up_011', knowledge_node_id: 'motion_avg_speed', chapter: '机械运动', section: '平均速度测量',
    difficulty: 2, type: 'choice',
    content: '小车从斜面顶端滑下，前半程用时2s，后半程用时1s，则？',
    options: ['前半程平均速度大', '后半程平均速度大', '一样大', '无法判断'],
    answer: '后半程平均速度大',
    explanation: '前后半程路程相同，后半程用时更少，根据 v = s/t，后半程平均速度更大。说明小车在加速下滑。',
    hints: ['平均速度相同时，用时短的会怎么样？', '路程相同，时间与速度成反比。', '前后半程路程相同，后半程用时更少，根据 v = s/t，后半程平均速度更大。说明小车在加速下滑。']
  },

  // === 第2章 声现象 ===
  // 声音的产生与传播
  {
    id: 'up_012', knowledge_node_id: 'sound_production', chapter: '声现象', section: '声音的产生与传播',
    difficulty: 1, type: 'choice',
    content: '声音是由物体的____产生的。',
    options: ['运动', '振动', '温度变化', '发光'],
    answer: '振动',
    explanation: '声音是由物体的振动产生的。振动停止，发声也停止。',
    hints: ['敲鼓时鼓面在动吗？摸一下正在发声的喉咙，有什么感觉？', '一切发声的物体都在振动。', '声音是由物体的振动产生的。振动停止，发声也停止。']
  },
  {
    id: 'up_013', knowledge_node_id: 'sound_production', chapter: '声现象', section: '声音的产生与传播',
    difficulty: 1, type: 'choice',
    content: '声音在下列哪种介质中传播最快？',
    options: ['空气', '水', '钢铁', '真空'],
    answer: '钢铁',
    explanation: '声音在固体中传播最快，液体次之，气体最慢。真空不能传声。',
   hints: ['把耳朵贴在桌子上，轻轻敲桌子另一端，声音清楚吗？', '固体分子排列紧密，传声效果更好。', '声音在固体中传播最快，液体次之，气体最慢。真空不能传声。']
  },
  {
    id: 'up_014', knowledge_node_id: 'sound_production', chapter: '声现象', section: '声音的产生与传播',
    difficulty: 1, type: 'choice',
    content: '宇航员在太空中面对面也要用无线电交谈，是因为？',
    options: ['太空太吵', '真空不能传声', '无线电方便', '太空中声音传播太快'],
    answer: '真空不能传声',
    explanation: '声音的传播需要介质（固体、液体、气体）。太空中是真空，没有介质，声音无法传播。',
    hints: ['太空中有什么物质可以传递声音吗？', '声音传播需要介质，真空中没有介质。', '声音的传播需要介质（固体、液体、气体）。太空中是真空，没有介质，声音无法传播。']
  },

  // 声音的特性
  {
    id: 'up_015', knowledge_node_id: 'sound_characteristics', chapter: '声现象', section: '声音的特性',
    difficulty: 1, type: 'choice',
    content: '"引吭高歌"中的"高"指的是声音的？',
    options: ['音调高', '响度大', '音色好', '频率高'],
    answer: '响度大',
    explanation: '"引吭高歌"指大声唱歌，"高"描述的是声音的强弱（响度），不是音调的高低。',
    hints: ['"高歌"是大声唱还是高音唱？', '响度表示声音的强弱（大小），音调表示声音的高低。', '"引吭高歌"指大声唱歌，"高"描述的是声音的强弱（响度），不是音调的高低。']
  },
  {
    id: 'up_016', knowledge_node_id: 'sound_characteristics', chapter: '声现象', section: '声音的特性',
    difficulty: 1, type: 'choice',
    content: '我们能分辨出钢琴和小提琴的声音，是因为它们的？',
    options: ['音调不同', '响度不同', '音色不同', '频率不同'],
    answer: '音色不同',
    explanation: '音色是由发声体的材料、结构等决定的，不同乐器发出声音的音色不同，所以我们能分辨。',
    hints: ['即使钢琴和小提琴弹同一个音（音调相同），你还能分清吗？', '音色是声音的特色，由发声体本身决定。', '音色是由发声体的材料、结构等决定的，不同乐器发出声音的音色不同，所以我们能分辨。']
  },
  {
    id: 'up_017', knowledge_node_id: 'sound_characteristics', chapter: '声现象', section: '声音的特性',
    difficulty: 2, type: 'choice',
    content: '男同学的声音通常比女同学"低沉"，这是因为男同学声音的？',
    options: ['音调低', '响度小', '音调高', '振幅小'],
    answer: '音调低',
    explanation: '"低沉"指声音的音调低。男同学声带较长较厚，振动频率低，所以音调低。',
    hints: ['"低沉"是指声音高还是低？', '音调由频率决定，频率低则音调低。', '"低沉"指声音的音调低。男同学声带较长较厚，振动频率低，所以音调低。']
  },

  // 声的利用
  {
    id: 'up_018', knowledge_node_id: 'sound_utilization', chapter: '声现象', section: '声的利用',
    difficulty: 1, type: 'choice',
    content: '医生用B超检查身体，是利用了声音的？',
    options: ['传递信息', '传递能量', '产生振动', '改变音调'],
    answer: '传递信息',
    explanation: 'B超利用超声波反射成像，通过图像了解人体内部情况，这是声音传递信息的应用。',
    hints: ['B超能看到肚子里的宝宝，这是知道了什么？', '声音可以传递信息和能量。B超属于前者。', 'B超利用超声波反射成像，通过图像了解人体内部情况，这是声音传递信息的应用。']
  },
  {
    id: 'up_019', knowledge_node_id: 'sound_utilization', chapter: '声现象', section: '声的利用',
    difficulty: 1, type: 'choice',
    content: '超声波清洗眼镜，是利用了声音的？',
    options: ['传递信息', '传递能量', '音调高', '频率高'],
    answer: '传递能量',
    explanation: '超声波清洗是利用超声波的能量使污垢振动脱落，这是声音传递能量的应用。',
    hints: ['超声波能把污垢"震"下来，这说明声音有什么作用？', '声音能传递能量，使物体振动或运动。', '超声波清洗是利用超声波的能量使污垢振动脱落，这是声音传递能量的应用。']
  },

  // 噪声的控制
  {
    id: 'up_020', knowledge_node_id: 'sound_noise', chapter: '声现象', section: '噪声的控制',
    difficulty: 1, type: 'choice',
    content: '下列措施中，属于在声源处减弱噪声的是？',
    options: ['关上窗户', '戴耳塞', '禁止鸣笛', '植树造林'],
    answer: '禁止鸣笛',
    explanation: '减弱噪声有三种途径：声源处（禁止鸣笛）、传播过程中（关窗、植树）、人耳处（戴耳塞）。禁止鸣笛是在声源处减弱。',
    hints: ['"声源处"是什么意思？是让发声体不发声或少发声。', '关窗和植树是在传播过程中减弱，耳塞是在人耳处减弱。', '减弱噪声有三种途径：声源处（禁止鸣笛）、传播过程中（关窗、植树）、人耳处（戴耳塞）。禁止鸣笛是在声源处减弱。']
  },
  {
    id: 'up_021', knowledge_node_id: 'sound_noise', chapter: '声现象', section: '噪声的控制',
    difficulty: 1, type: 'choice',
    content: '下列属于噪声的是？',
    options: ['优美的钢琴曲', '影响人们正常休息的声音', '上课铃声', '国歌'],
    answer: '影响人们正常休息的声音',
    explanation: '从环境保护角度看，凡是妨碍人们正常休息、学习和工作的声音，都属于噪声。即使是优美的音乐，在不该出现的时候出现也是噪声。',
    hints: ['优美的钢琴曲如果在深夜放，还是不是噪声？', '噪声的定义取决于声音是否影响了人们的正常活动。', '从环境保护角度看，凡是妨碍人们正常休息、学习和工作的声音，都属于噪声。即使是优美的音乐，在不该出现的时候出现也是噪声。']
  },

  // === 第3章 物态变化 ===
  // 温度
  {
    id: 'up_022', knowledge_node_id: 'temp_measurement', chapter: '物态变化', section: '温度',
    difficulty: 1, type: 'choice',
    content: '冰水混合物的温度是？',
    options: ['-1°C', '0°C', '1°C', '4°C'],
    answer: '0°C',
    explanation: '在标准大气压下，冰水混合物的温度定义为0°C，沸水的温度定义为100°C。',
    hints: ['温度计是怎么标定0度的？', '标准大气压下，冰水混合物是0°C，沸水是100°C。', '在标准大气压下，冰水混合物的温度定义为0°C，沸水的温度定义为100°C。']
  },
  {
    id: 'up_023', knowledge_node_id: 'temp_measurement', chapter: '物态变化', section: '温度',
    difficulty: 1, type: 'choice',
    content: '下列温度最接近实际的是？',
    options: ['人体正常体温约37°C', '冰箱冷冻室温度约10°C', '洗澡水温度约80°C', '夏天室温约50°C'],
    answer: '人体正常体温约37°C',
    explanation: '人体正常体温约37°C；冰箱冷冻室约-18°C；洗澡水约40°C；夏天室温约25-35°C。',
    hints: ['你能记得自己发烧时体温多少度吗？', '人体正常体温约37°C，发烧会到38°C以上。', '人体正常体温约37°C；冰箱冷冻室约-18°C；洗澡水约40°C；夏天室温约25-35°C。']
  },

  // 熔化和凝固
  {
    id: 'up_024', knowledge_node_id: 'phase_melt', chapter: '物态变化', section: '熔化和凝固',
    difficulty: 1, type: 'choice',
    content: '下列现象中属于熔化的是？',
    options: ['冰雪消融', '湿衣服晾干', '霜的形成', '水结冰'],
    answer: '冰雪消融',
    explanation: '熔化是固态变为液态的过程。冰雪消融是冰（固态）变成水（液态），属于熔化。',
    hints: ['熔化是固体变成什么状态？', '冰雪消融后变成了什么？', '熔化是固态变为液态的过程。冰雪消融是冰（固态）变成水（液态），属于熔化。']
  },
  {
    id: 'up_025', knowledge_node_id: 'phase_melt', chapter: '物态变化', section: '熔化和凝固',
    difficulty: 2, type: 'choice',
    content: '晶体熔化时的特点是？',
    options: ['温度不断升高', '温度保持不变', '不需要吸热', '先升温后降温'],
    answer: '温度保持不变',
    explanation: '晶体有固定的熔点，熔化时不断吸热，但温度保持不变（等于熔点）。非晶体熔化时温度持续上升。',
    hints: ['冰在熔化成水的过程中，温度会变吗？', '晶体有固定的熔点，熔化时温度不变但需要吸热。', '晶体有固定的熔点，熔化时不断吸热，但温度保持不变（等于熔点）。非晶体熔化时温度持续上升。']
  },
  {
    id: 'up_026', knowledge_node_id: 'phase_melt', chapter: '物态变化', section: '熔化和凝固',
    difficulty: 1, type: 'choice',
    content: '水的凝固点是？',
    options: ['-10°C', '0°C', '10°C', '100°C'],
    answer: '0°C',
    explanation: '在标准大气压下，水的凝固点是0°C，也是冰的熔点。',
    hints: ['水在多少度时开始结冰？', '凝固点和熔点是同一个温度。', '在标准大气压下，水的凝固点是0°C，也是冰的熔点。']
  },

  // 汽化和液化
  {
    id: 'up_027', knowledge_node_id: 'phase_vapor', chapter: '物态变化', section: '汽化和液化',
    difficulty: 1, type: 'choice',
    content: '下列现象属于汽化的是？',
    options: ['露水的形成', '湿衣服晾干', '雾的形成', '霜的形成'],
    answer: '湿衣服晾干',
    explanation: '汽化是液态变为气态的过程。湿衣服晾干是水（液态）变成水蒸气（气态），属于汽化。',
    hints: ['汽化是液体变成什么状态？', '湿衣服里的水去哪了？', '汽化是液态变为气态的过程。湿衣服晾干是水（液态）变成水蒸气（气态），属于汽化。']
  },
  {
    id: 'up_028', knowledge_node_id: 'phase_vapor', chapter: '物态变化', section: '汽化和液化',
    difficulty: 2, type: 'choice',
    content: '夏天从冰箱拿出的饮料瓶外壁会"出汗"，这是？',
    options: ['熔化', '凝固', '液化', '汽化'],
    answer: '液化',
    explanation: '饮料瓶温度低，周围空气中的水蒸气遇到冷的瓶壁，放热液化成小水珠，看起来像"出汗"。这是液化现象。',
    hints: ['"汗"是什么状态的？是从瓶子里渗出来的吗？', '水蒸气遇冷会变成液态的小水珠。', '饮料瓶温度低，周围空气中的水蒸气遇到冷的瓶壁，放热液化成小水珠，看起来像"出汗"。这是液化现象。']
  },
  {
    id: 'up_029', knowledge_node_id: 'phase_vapor', chapter: '物态变化', section: '汽化和液化',
    difficulty: 2, type: 'choice',
    content: '下列措施能加快蒸发的是？',
    options: ['把蔬菜用保鲜膜包好', '把湿衣服晾在通风处', '把水果放入冰箱', '把墨水瓶盖拧紧'],
    answer: '把湿衣服晾在通风处',
    explanation: '加快蒸发的方法：提高温度、增大液体表面积、加快液体表面空气流动。通风处空气流动快，蒸发加快。其他选项都是减慢蒸发。',
    hints: ['湿衣服晾在哪里干得快？风吹还是密闭？', '蒸发快慢与温度、表面积、空气流动速度有关。', '加快蒸发的方法：提高温度、增大液体表面积、加快液体表面空气流动。通风处空气流动快，蒸发加快。其他选项都是减慢蒸发。']
  },

  // 升华和凝华
  {
    id: 'up_030', knowledge_node_id: 'phase_sublime', chapter: '物态变化', section: '升华和凝华',
    difficulty: 1, type: 'choice',
    content: '冬天冰冻的衣服也会慢慢变干，这是？',
    options: ['熔化', '汽化', '升华', '凝固'],
    answer: '升华',
    explanation: '升华是固态直接变为气态的过程。冬天冰冻的衣服变干，是冰直接变成水蒸气，没有经过液态，属于升华。',
    hints: ['冰冻的衣服低于0°C，冰能熔化成水吗？', '如果冰没有变成水就直接消失了，那是什么物态变化？', '升华是固态直接变为气态的过程。冬天冰冻的衣服变干，是冰直接变成水蒸气，没有经过液态，属于升华。']
  },
  {
    id: 'up_031', knowledge_node_id: 'phase_sublime', chapter: '物态变化', section: '升华和凝华',
    difficulty: 1, type: 'choice',
    content: '霜的形成属于？',
    options: ['熔化', '凝固', '液化', '凝华'],
    answer: '凝华',
    explanation: '凝华是气态直接变为固态的过程。霜是空气中的水蒸气遇冷直接变成固态的小冰晶，属于凝华。',
    hints: ['霜是什么状态的？是液态还是固态？', '水蒸气直接变成固态小冰晶，是什么物态变化？', '凝华是气态直接变为固态的过程。霜是空气中的水蒸气遇冷直接变成固态的小冰晶，属于凝华。']
  },
  {
    id: 'up_032', knowledge_node_id: 'phase_sublime', chapter: '物态变化', section: '升华和凝华',
    difficulty: 2, type: 'choice',
    content: '舞台上用干冰制造白雾，干冰发生的物态变化是？',
    options: ['熔化', '汽化', '升华', '液化'],
    answer: '升华',
    explanation: '干冰是固态二氧化碳，在常温下直接变成气态二氧化碳，这是升华。升华吸热使周围温度降低，空气中的水蒸气液化成小水珠，形成"白雾"。',
    hints: ['干冰变成什么了？是液体还是气体？', '干冰（固态CO₂）在常温下直接变成气体。', '干冰是固态二氧化碳，在常温下直接变成气态二氧化碳，这是升华。升华吸热使周围温度降低，空气中的水蒸气液化成小水珠，形成"白雾"。']
  },
];

// ============================================
// 八年级下册 力学题库（从现有项目转换）
// ============================================
var MECH_QUESTIONS = [
  {
    "id": "mech_1",
    "knowledge_node_id": "force_concept",
    "chapter": "力与运动",
    "section": "力",
    "difficulty": 1,
    "type": "choice",
    "content": "下列关于力的说法，正确的是？",
    "options": [
      "力可以脱离物体而存在",
      "一个物体也能产生力的作用",
      "力是物体对物体的作用",
      "不接触的物体之间不可能有力的作用"
    ],
    "answer": "力是物体对物体的作用",
    "explanation": "力是物体对物体的作用，不能脱离物体而存在。产生力的作用至少需要两个物体。不接触的物体之间也可以有力的作用，如重力、磁力等。",
    "hints": [
      "如果你一个人站在空房间里，能跟自己拔河吗？",
      "你觉得力可以'飘在空中'，其实力就像握手，必须两只手才能握起来。",
      "力是物体对物体的作用，不能脱离物体而存在。产生力的作用至少需要两个物体。不接触的物体之间也可以有力的作用，如重力、磁力等。"
    ]
  },
  {
    "id": "mech_2",
    "knowledge_node_id": "force_interaction",
    "chapter": "力与运动",
    "section": "力",
    "difficulty": 1,
    "type": "choice",
    "content": "用手拍桌子，手会感到疼，这是因为？",
    "options": [
      "桌子对手有力的作用",
      "手对桌子有力的作用",
      "桌子发生了形变",
      "手发生了形变"
    ],
    "answer": "桌子对手有力的作用",
    "explanation": "物体间力的作用是相互的。手拍桌子时，手对桌子施加了力，同时桌子也对手施加了力，所以手会感到疼。",
    "hints": [
      "你打别人一拳，你的拳头会疼吗？疼的是被打的还是打人的？",
      "你选的是手对桌子的力，但手疼是因为桌子也在'还手'。",
      "物体间力的作用是相互的。手拍桌子时，手对桌子施加了力，同时桌子也对手施加了力，所以手会感到疼。"
    ]
  },
  {
    "id": "mech_3",
    "knowledge_node_id": "force_effect",
    "chapter": "力与运动",
    "section": "力",
    "difficulty": 2,
    "type": "choice",
    "content": "下列哪个因素不会影响力的作用效果？",
    "options": [
      "力的大小",
      "力的方向",
      "力的作用点",
      "力的单位"
    ],
    "answer": "力的单位",
    "explanation": "力的三要素是大小、方向、作用点，它们共同决定力的作用效果。力的单位（如牛顿）只是度量标准，不影响作用效果。",
    "hints": [
      "轻轻推一本书和用力推一本书，结果一样吗？",
      "力的大小确实会影响效果，比如轻轻推和用力推结果不同。",
      "力的三要素是大小、方向、作用点，它们共同决定力的作用效果。力的单位（如牛顿）只是度量标准，不影响作用效果。"
    ]
  },
  {
    "id": "mech_4",
    "knowledge_node_id": "force_concept",
    "chapter": "力与运动",
    "section": "力",
    "difficulty": 1,
    "type": "choice",
    "content": "在国际单位制中，力的单位是？",
    "options": [
      "千克",
      "牛顿",
      "帕斯卡",
      "焦耳"
    ],
    "answer": "牛顿",
    "explanation": "在国际单位制中，力的单位是牛顿（N），以英国科学家艾萨克·牛顿的名字命名。",
    "hints": [
      "你能'推'50千克吗？推的是什么——是质量本身，还是推的力？",
      "千克是质量的单位，就像说一个人'重50千克'，但力是推或拉的作用，要用牛顿。",
      "在国际单位制中，力的单位是牛顿（N），以英国科学家艾萨克·牛顿的名字命名。"
    ]
  },
  {
    "id": "mech_5",
    "knowledge_node_id": "force_effect",
    "chapter": "力与运动",
    "section": "力",
    "difficulty": 1,
    "type": "truefalse",
    "content": "力可以改变物体的运动状态。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "正确",
    "explanation": "力的作用效果之一就是改变物体的运动状态，包括改变速度大小和运动方向。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "力的作用效果之一就是改变物体的运动状态，包括改变速度大小和运动方向。"
    ]
  },
  {
    "id": "mech_6",
    "knowledge_node_id": "force_concept",
    "chapter": "力与运动",
    "section": "力",
    "difficulty": 1,
    "type": "truefalse",
    "content": "只有一个物体也能产生力的作用。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误",
    "explanation": "力是物体对物体的作用，至少需要两个物体才能产生力的作用。一个物体无法独立产生力。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "力是物体对物体的作用，至少需要两个物体才能产生力的作用。一个物体无法独立产生力。"
    ]
  },
  {
    "id": "mech_7",
    "knowledge_node_id": "force_interaction",
    "chapter": "力与运动",
    "section": "力",
    "difficulty": 2,
    "type": "truefalse",
    "content": "两个不接触的物体之间一定没有力的作用。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误",
    "explanation": "不接触的物体之间也可以有力的作用，例如地球对物体的重力、磁铁对铁钉的磁力等。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "不接触的物体之间也可以有力的作用，例如地球对物体的重力、磁铁对铁钉的磁力等。"
    ]
  },
  {
    "id": "mech_8",
    "knowledge_node_id": "force_effect",
    "chapter": "力与运动",
    "section": "力",
    "difficulty": 3,
    "type": "truefalse",
    "content": "力的作用效果只与力的大小有关。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误",
    "explanation": "力的作用效果由力的三要素共同决定：大小、方向、作用点。只改变其中一个因素，作用效果就可能不同。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "力的作用效果由力的三要素共同决定：大小、方向、作用点。只改变其中一个因素，作用效果就可能不同。"
    ]
  },
  {
    "id": "mech_101",
    "knowledge_node_id": "force_effect",
    "chapter": "力与运动",
    "section": "力",
    "difficulty": 1,
    "type": "choice",
    "content": "推门时，在门把手上推门和在门轴附近推门，感觉明显不同，这说明力的什么要素影响力的作用效果？",
    "options": [
      "力的大小",
      "力的方向",
      "力的作用点",
      "力的单位"
    ],
    "answer": "力的作用点",
    "explanation": "在门把手上推门轻松省力，在门轴附近推门费力，这说明力的作用点影响力的作用效果。",
    "hints": [
      "题目已经说了用同样大小的力，为什么效果还是不同？",
      "题目说的是'同样大小的力'，只是推的位置不同。",
      "在门把手上推门轻松省力，在门轴附近推门费力，这说明力的作用点影响力的作用效果。"
    ]
  },
  {
    "id": "mech_102",
    "knowledge_node_id": "force_effect",
    "chapter": "力与运动",
    "section": "力",
    "difficulty": 2,
    "type": "choice",
    "content": "下列事例中，能说明力可以改变物体运动状态的是？",
    "options": [
      "用力拉弹簧，弹簧变长了",
      "用力捏橡皮泥，橡皮泥变形了",
      "足球被踢飞后在空中运动",
      "用手压气球，气球变扁了"
    ],
    "answer": "足球被踢飞后在空中运动",
    "explanation": "足球被踢飞后，运动方向和速度都发生了变化，说明力改变了物体的运动状态。其他选项都是力使物体发生形变。",
    "hints": [
      "弹簧变长后，它还在原来的位置吗？它的运动速度和方向改变了吗？",
      "弹簧变长是形状改变（形变），不是运动状态改变。运动状态改变指的是速度或方向的变化。",
      "足球被踢飞后，运动方向和速度都发生了变化，说明力改变了物体的运动状态。其他选项都是力使物体发生形变。"
    ]
  },
  {
    "id": "mech_103",
    "knowledge_node_id": "force_interaction",
    "chapter": "力与运动",
    "section": "力",
    "difficulty": 2,
    "type": "choice",
    "content": "下列现象中，不能说明'物体间力的作用是相互的'的是？",
    "options": [
      "游泳时向后划水，人向前进",
      "火箭向下喷气，向上飞行",
      "用手提水桶，手感到累",
      "手压桌面，桌面发生微小形变"
    ],
    "answer": "手压桌面，桌面发生微小形变",
    "explanation": "手压桌面使桌面形变，只说明了力能使物体形变，没有体现力的相互性。其他选项都体现了A对B施力的同时B也对A施力。",
    "hints": [
      "你向后推水，为什么你会向前？是谁在推你？",
      "这个现象确实体现了力的相互性——人对水施力，水对人反作用。",
      "手压桌面使桌面形变，只说明了力能使物体形变，没有体现力的相互性。其他选项都体现了A对B施力的同时B也对A施力。"
    ]
  },
  {
    "id": "mech_104",
    "knowledge_node_id": "force_interaction",
    "chapter": "力与运动",
    "section": "力",
    "difficulty": 3,
    "type": "choice",
    "content": "如图所示，一个球静止在水平地面上，下列说法正确的是？",
    "options": [
      "球对地面的压力就是球的重力",
      "球对地面的压力和地面对球的支持力是一对平衡力",
      "球受到的重力和地面对球的支持力是一对平衡力",
      "球对地面的压力和球受到的重力是一对相互作用力"
    ],
    "answer": "球受到的重力和地面对球的支持力是一对平衡力",
    "explanation": "球静止在地面上，受力平衡。重力和支持力都作用在球上，大小相等、方向相反、在同一直线上，是一对平衡力。",
    "hints": [
      "如果球放在斜面上，压力还等于重力吗？",
      "压力和重力是不同性质的力。重力是地球拉球，压力是球压地面。",
      "球静止在地面上，受力平衡。重力和支持力都作用在球上，大小相等、方向相反、在同一直线上，是一对平衡力。"
    ]
  },
  {
    "id": "mech_105",
    "knowledge_node_id": "force_interaction",
    "chapter": "力与运动",
    "section": "力",
    "difficulty": 2,
    "type": "truefalse",
    "content": "磁铁吸引铁钉时，只有磁铁对铁钉有力的作用。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误",
    "explanation": "力的作用是相互的。磁铁吸引铁钉的同时，铁钉也以同样大小的力吸引磁铁。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "力的作用是相互的。磁铁吸引铁钉的同时，铁钉也以同样大小的力吸引磁铁。"
    ]
  },
  {
    "id": "mech_106",
    "knowledge_node_id": "force_concept",
    "chapter": "力与运动",
    "section": "力",
    "difficulty": 2,
    "type": "truefalse",
    "content": "力的示意图中，线段的长度表示力的大小。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "正确",
    "explanation": "在力的示意图中，线段的长度（按比例）表示力的大小，箭头方向表示力的方向，线段的起点表示力的作用点。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "在力的示意图中，线段的长度（按比例）表示力的大小，箭头方向表示力的方向，线段的起点表示力的作用点。"
    ]
  },
  {
    "id": "mech_107",
    "knowledge_node_id": "force_effect",
    "chapter": "力与运动",
    "section": "力",
    "difficulty": 2,
    "type": "choice",
    "content": "用同样大小的力分别拉弹簧和压弹簧，效果不同，这说明力的什么要素影响力的作用效果？",
    "options": [
      "力的大小",
      "力的方向",
      "力的作用点",
      "力的性质"
    ],
    "answer": "力的方向",
    "explanation": "同样大小的力，拉弹簧使弹簧伸长，压弹簧使弹簧缩短，效果完全不同，说明力的方向影响力的作用效果。",
    "hints": [
      "题目说'同样大小'，那还有什么不同？",
      "题目明确说了'同样大小的力'。",
      "同样大小的力，拉弹簧使弹簧伸长，压弹簧使弹簧缩短，效果完全不同，说明力的方向影响力的作用效果。"
    ]
  },
  {
    "id": "mech_108",
    "knowledge_node_id": "force_concept",
    "chapter": "力与运动",
    "section": "力",
    "difficulty": 3,
    "type": "choice",
    "content": "下列关于力的说法中，错误的是？",
    "options": [
      "力不能脱离物体而存在",
      "力可以没有受力物体",
      "施力物体同时也是受力物体",
      "不接触的物体间也可能有力的作用"
    ],
    "answer": "力可以没有受力物体",
    "explanation": "力是物体对物体的作用，必须有施力物体和受力物体，缺一不可。",
    "hints": [
      "题目问的是'错误的说法'，这个选项是对的还是错的？",
      "这是正确的说法，不是错误选项。",
      "力是物体对物体的作用，必须有施力物体和受力物体，缺一不可。"
    ]
  },
  {
    "id": "mech_109",
    "knowledge_node_id": "force_effect",
    "chapter": "力与运动",
    "section": "力",
    "difficulty": 1,
    "type": "truefalse",
    "content": "用力挤压海绵，海绵体积变小，说明力可以改变物体的形状。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "正确",
    "explanation": "力有两个作用效果：改变物体的运动状态和使物体发生形变。挤压海绵是力使物体发生形变的例子。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "力有两个作用效果：改变物体的运动状态和使物体发生形变。挤压海绵是力使物体发生形变的例子。"
    ]
  },
  {
    "id": "mech_110",
    "knowledge_node_id": "force_interaction",
    "chapter": "力与运动",
    "section": "力",
    "difficulty": 2,
    "type": "choice",
    "content": "划船时，桨向后划水，船向前行驶。这个现象说明？",
    "options": [
      "力可以改变物体的形状",
      "力可以改变物体的运动状态",
      "物体间力的作用是相互的",
      "以上说法都正确"
    ],
    "answer": "物体间力的作用是相互的",
    "explanation": "桨向后推水，水同时向前推桨，使船前进。这直接体现了力的相互性。",
    "hints": [
      "划船时，你观察到桨或水变形了吗？",
      "划船时桨和水都没有明显变形，这个现象主要体现的不是形状改变。",
      "桨向后推水，水同时向前推桨，使船前进。这直接体现了力的相互性。"
    ]
  },
  {
    "id": "mech_9",
    "knowledge_node_id": "elastic_concept",
    "chapter": "力与运动",
    "section": "弹力",
    "difficulty": 1,
    "type": "choice",
    "content": "下列关于弹力的说法，正确的是？",
    "options": [
      "任何物体发生形变都会产生弹力",
      "弹力的方向与形变方向相同",
      "弹力是物体发生弹性形变时产生的力",
      "弹力的大小与形变程度无关"
    ],
    "answer": "弹力是物体发生弹性形变时产生的力",
    "explanation": "弹力是物体发生弹性形变后，要恢复原状时产生的力。只有弹性形变才能产生弹力，塑性形变不会。",
    "hints": [
      "捏扁橡皮泥和拉长弹簧，松手后有什么不同？",
      "只有弹性形变才能产生弹力。橡皮泥捏扁后不会弹回来，就没有弹力。",
      "弹力是物体发生弹性形变后，要恢复原状时产生的力。只有弹性形变才能产生弹力，塑性形变不会。"
    ]
  },
  {
    "id": "mech_10",
    "knowledge_node_id": "elastic_hooke",
    "chapter": "力与运动",
    "section": "弹力",
    "difficulty": 2,
    "type": "choice",
    "content": "弹簧测力计的原理是？",
    "options": [
      "在弹性限度内，弹簧的伸长量与所受拉力成正比",
      "弹簧的伸长量与所受拉力成反比",
      "弹簧的长度与所受拉力成正比",
      "弹簧的弹力保持不变"
    ],
    "answer": "在弹性限度内，弹簧的伸长量与所受拉力成正比",
    "explanation": "胡克定律：在弹性限度内，弹簧的伸长量与所受拉力成正比。这是弹簧测力计的工作原理。",
    "hints": [
      "你拉弹簧，拉得越用力，弹簧是伸得更长还是更短？",
      "伸长量与拉力成正比，不是反比。拉力越大，伸长量越大。",
      "胡克定律：在弹性限度内，弹簧的伸长量与所受拉力成正比。这是弹簧测力计的工作原理。"
    ]
  },
  {
    "id": "mech_11",
    "knowledge_node_id": "elastic_hooke",
    "chapter": "力与运动",
    "section": "弹力",
    "difficulty": 2,
    "type": "choice",
    "content": "一个弹簧原长10cm，挂上2N的重物后伸长到14cm。若挂上4N的重物，弹簧长度为？",
    "options": [
      "16cm",
      "18cm",
      "20cm",
      "22cm"
    ],
    "answer": "18cm",
    "explanation": "2N使弹簧伸长4cm，则4N使弹簧伸长8cm。原长10cm + 伸长8cm = 18cm。",
    "hints": [
      "伸长到14cm，伸长量是多少？是14cm还是14-10=4cm？",
      "计算有误。2N伸长4cm（不是伸长到4cm），4N伸长8cm，总长=10+8=18cm。",
      "2N使弹簧伸长4cm，则4N使弹簧伸长8cm。原长10cm + 伸长8cm = 18cm。"
    ]
  },
  {
    "id": "mech_12",
    "knowledge_node_id": "elastic_concept",
    "chapter": "力与运动",
    "section": "弹力",
    "difficulty": 1,
    "type": "truefalse",
    "content": "弹力的方向总是与物体形变的方向相反。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "正确",
    "explanation": "弹力是物体要恢复原状时产生的力，所以方向与形变方向相反。例如弹簧被拉伸时，弹力向内收缩。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "弹力是物体要恢复原状时产生的力，所以方向与形变方向相反。例如弹簧被拉伸时，弹力向内收缩。"
    ]
  },
  {
    "id": "mech_13",
    "knowledge_node_id": "elastic_concept",
    "chapter": "力与运动",
    "section": "弹力",
    "difficulty": 1,
    "type": "truefalse",
    "content": "橡皮泥发生形变后能产生弹力。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误",
    "explanation": "橡皮泥发生的是塑性形变（不能恢复原状），不是弹性形变，所以不会产生弹力。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "橡皮泥发生的是塑性形变（不能恢复原状），不是弹性形变，所以不会产生弹力。"
    ]
  },
  {
    "id": "mech_14",
    "knowledge_node_id": "elastic_measurement",
    "chapter": "力与运动",
    "section": "弹力",
    "difficulty": 2,
    "type": "truefalse",
    "content": "弹簧测力计可以测量任何大小的力。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误",
    "explanation": "弹簧测力计只能在弹性限度内使用。超过弹性限度，弹簧会发生塑性形变，无法恢复，测量就不准确了。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "弹簧测力计只能在弹性限度内使用。超过弹性限度，弹簧会发生塑性形变，无法恢复，测量就不准确了。"
    ]
  },
  {
    "id": "mech_201",
    "knowledge_node_id": "elastic_concept",
    "chapter": "力与运动",
    "section": "弹力",
    "difficulty": 1,
    "type": "choice",
    "content": "下列物体中，发生形变后能产生弹力的是？",
    "options": [
      "橡皮泥",
      "面团",
      "被压缩的弹簧",
      "被捏扁的易拉罐"
    ],
    "answer": "被压缩的弹簧",
    "explanation": "被压缩的弹簧发生的是弹性形变，松手后能恢复原状，能产生弹力。其他选项都是塑性形变。",
    "hints": [
      "捏扁橡皮泥后松手，它会变回原来的形状吗？",
      "橡皮泥是塑性形变，不能恢复原状，没有弹力。",
      "被压缩的弹簧发生的是弹性形变，松手后能恢复原状，能产生弹力。其他选项都是塑性形变。"
    ]
  },
  {
    "id": "mech_202",
    "knowledge_node_id": "elastic_measurement",
    "chapter": "力与运动",
    "section": "弹力",
    "difficulty": 2,
    "type": "choice",
    "content": "使用弹簧测力计前，发现指针指在0.2N处，没有调零就去测量，测量结果为3.5N。物体的实际重力为？",
    "options": [
      "3.3N",
      "3.5N",
      "3.7N",
      "无法确定"
    ],
    "answer": "3.3N",
    "explanation": "指针初始在0.2N处，相当于读数偏大0.2N。实际重力 = 3.5N - 0.2N = 3.3N。",
    "hints": [
      "指针本来就在0.2N，没挂东西就显示0.2N，挂东西后的读数比实际大还是小？",
      "没有考虑初始偏移，直接用了读数。",
      "指针初始在0.2N处，相当于读数偏大0.2N。实际重力 = 3.5N - 0.2N = 3.3N。"
    ]
  },
  {
    "id": "mech_203",
    "knowledge_node_id": "elastic_hooke",
    "chapter": "力与运动",
    "section": "弹力",
    "difficulty": 2,
    "type": "choice",
    "content": "一根弹簧在弹性限度内，受到10N拉力时伸长2cm，受到20N拉力时伸长？",
    "options": [
      "2cm",
      "4cm",
      "6cm",
      "8cm"
    ],
    "answer": "4cm",
    "explanation": "根据胡克定律，在弹性限度内，伸长量与拉力成正比。拉力变为2倍，伸长量也变为2倍，2cm×2=4cm。",
    "hints": [
      "10N拉2cm，20N是10N的几倍？伸长量应该也是几倍？",
      "拉力变了，伸长量也会变。2倍拉力对应2倍伸长量。",
      "根据胡克定律，在弹性限度内，伸长量与拉力成正比。拉力变为2倍，伸长量也变为2倍，2cm×2=4cm。"
    ]
  },
  {
    "id": "mech_204",
    "knowledge_node_id": "elastic_hooke",
    "chapter": "力与运动",
    "section": "弹力",
    "difficulty": 3,
    "type": "choice",
    "content": "甲、乙两根弹簧，在相同拉力作用下，甲伸长了3cm，乙伸长了5cm。则？",
    "options": [
      "甲弹簧更硬",
      "乙弹簧更硬",
      "两根弹簧一样硬",
      "无法比较"
    ],
    "answer": "甲弹簧更硬",
    "explanation": "相同拉力下，伸长量越小的弹簧越'硬'（劲度系数越大）。甲伸长3cm，乙伸长5cm，所以甲更硬。",
    "hints": [
      "同样用力拉，伸得更长的弹簧是更硬还是更软？",
      "伸长量越大说明弹簧越软，不是越硬。",
      "相同拉力下，伸长量越小的弹簧越'硬'（劲度系数越大）。甲伸长3cm，乙伸长5cm，所以甲更硬。"
    ]
  },
  {
    "id": "mech_205",
    "knowledge_node_id": "elastic_concept",
    "chapter": "力与运动",
    "section": "弹力",
    "difficulty": 1,
    "type": "truefalse",
    "content": "弹簧被拉长后产生的弹力方向是向外的。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误",
    "explanation": "弹簧被拉长后，产生的弹力方向是向内的（收缩方向），即与形变方向相反。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "弹簧被拉长后，产生的弹力方向是向内的（收缩方向），即与形变方向相反。"
    ]
  },
  {
    "id": "mech_206",
    "knowledge_node_id": "elastic_hooke",
    "chapter": "力与运动",
    "section": "弹力",
    "difficulty": 2,
    "type": "truefalse",
    "content": "在弹性限度内，弹簧受到的拉力越大，弹簧的伸长量就越大。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "正确",
    "explanation": "根据胡克定律，在弹性限度内，弹簧的伸长量与所受拉力成正比。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "根据胡克定律，在弹性限度内，弹簧的伸长量与所受拉力成正比。"
    ]
  },
  {
    "id": "mech_207",
    "knowledge_node_id": "elastic_hooke",
    "chapter": "力与运动",
    "section": "弹力",
    "difficulty": 3,
    "type": "choice",
    "content": "一根弹簧挂10N重物时伸长2cm。若把它剪成等长的两段，每段挂10N重物时伸长？",
    "options": [
      "1cm",
      "2cm",
      "4cm",
      "无法确定"
    ],
    "answer": "1cm",
    "explanation": "弹簧剪成两段后，每段的劲度系数变为原来的2倍。同样的力，伸长量变为原来的一半，即1cm。",
    "hints": [
      "一根长橡皮筋和一根短橡皮筋，同样用力拉，哪个伸得更长？",
      "剪短后弹簧变'硬'了，劲度系数变大，同样的力伸长量会变小。",
      "弹簧剪成两段后，每段的劲度系数变为原来的2倍。同样的力，伸长量变为原来的一半，即1cm。"
    ]
  },
  {
    "id": "mech_15",
    "knowledge_node_id": "gravity_concept",
    "chapter": "力与运动",
    "section": "重力",
    "difficulty": 1,
    "type": "choice",
    "content": "关于重力，下列说法正确的是？",
    "options": [
      "重力的方向垂直向下",
      "重力的施力物体是地球",
      "物体的质量越大，重力越小",
      "重力的作用点在物体的边缘"
    ],
    "answer": "重力的施力物体是地球",
    "explanation": "重力是由于地球的吸引而使物体受到的力，施力物体是地球。重力的方向是竖直向下（不是垂直向下），作用点在重心。",
    "hints": [
      "在斜面上，'竖直向下'和'垂直于斜面向下'是同一个方向吗？",
      "应该是'竖直向下'（指向地心），不是'垂直向下'（垂直于接触面）。",
      "重力是由于地球的吸引而使物体受到的力，施力物体是地球。重力的方向是竖直向下（不是垂直向下），作用点在重心。"
    ]
  },
  {
    "id": "mech_16",
    "knowledge_node_id": "gravity_calculation",
    "chapter": "力与运动",
    "section": "重力",
    "difficulty": 1,
    "type": "choice",
    "content": "g = 9.8 N/kg 的物理意义是？",
    "options": [
      "1kg = 9.8N",
      "质量为1kg的物体受到的重力是9.8N",
      "1N的力能产生9.8kg的质量",
      "重力加速度是9.8"
    ],
    "answer": "质量为1kg的物体受到的重力是9.8N",
    "explanation": "g = 9.8 N/kg 表示质量为1千克的物体所受的重力为9.8牛顿。这是重力与质量的比值。",
    "hints": [
      "你能说'1米等于1千克'吗？为什么不能？",
      "kg是质量单位，N是力的单位，两种物理量不能直接相等。",
      "g = 9.8 N/kg 表示质量为1千克的物体所受的重力为9.8牛顿。这是重力与质量的比值。"
    ]
  },
  {
    "id": "mech_17",
    "knowledge_node_id": "gravity_calculation",
    "chapter": "力与运动",
    "section": "重力",
    "difficulty": 2,
    "type": "choice",
    "content": "一个物体的质量为5kg，它受到的重力是多少？（g=10N/kg）",
    "options": [
      "0.5N",
      "5N",
      "50N",
      "500N"
    ],
    "answer": "50N",
    "explanation": "根据公式 G = mg，G = 5kg × 10N/kg = 50N。",
    "hints": [
      "G=mg，是m乘以g还是m除以g？",
      "把除法算反了，应该是乘法不是除法。",
      "根据公式 G = mg，G = 5kg × 10N/kg = 50N。"
    ]
  },
  {
    "id": "mech_18",
    "knowledge_node_id": "gravity_calculation",
    "chapter": "力与运动",
    "section": "重力",
    "difficulty": 3,
    "type": "choice",
    "content": "月球上的重力加速度约为地球的1/6。一个在地球上质量为60kg的人，到月球上后？",
    "options": [
      "质量变为10kg，重力变为100N",
      "质量不变，重力变为100N",
      "质量和重力都不变",
      "质量不变，重力变为600N"
    ],
    "answer": "质量不变，重力变为100N",
    "explanation": "质量是物体本身属性，不随位置变化。月球上重力 = 60kg × (10/6)N/kg ≈ 100N。",
    "hints": [
      "你到月球上，身体里的物质变少了吗？",
      "质量是物体本身属性，不随位置变化。到月球上质量还是60kg。",
      "质量是物体本身属性，不随位置变化。月球上重力 = 60kg × (10/6)N/kg ≈ 100N。"
    ]
  },
  {
    "id": "mech_19",
    "knowledge_node_id": "gravity_concept",
    "chapter": "力与运动",
    "section": "重力",
    "difficulty": 1,
    "type": "truefalse",
    "content": "重力的方向总是竖直向下的。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "正确",
    "explanation": "重力的方向总是竖直向下，指向地心。注意是'竖直向下'而不是'垂直向下'。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "重力的方向总是竖直向下，指向地心。注意是'竖直向下'而不是'垂直向下'。"
    ]
  },
  {
    "id": "mech_20",
    "knowledge_node_id": "gravity_center",
    "chapter": "力与运动",
    "section": "重力",
    "difficulty": 1,
    "type": "truefalse",
    "content": "物体的重心一定在物体上。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误",
    "explanation": "重心不一定在物体上。例如空心球的重心在球心，但球心处没有物体。均匀圆环的重心在圆心，也不在环上。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "重心不一定在物体上。例如空心球的重心在球心，但球心处没有物体。均匀圆环的重心在圆心，也不在环上。"
    ]
  },
  {
    "id": "mech_21",
    "knowledge_node_id": "gravity_calculation",
    "chapter": "力与运动",
    "section": "重力",
    "difficulty": 2,
    "type": "truefalse",
    "content": "在同一地点，物体所受重力与质量成正比。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "正确",
    "explanation": "根据 G = mg，在同一地点 g 是定值，所以重力 G 与质量 m 成正比。质量越大，重力越大。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "根据 G = mg，在同一地点 g 是定值，所以重力 G 与质量 m 成正比。质量越大，重力越大。"
    ]
  },
  {
    "id": "mech_22",
    "knowledge_node_id": "gravity_calculation",
    "chapter": "力与运动",
    "section": "重力",
    "difficulty": 2,
    "type": "truefalse",
    "content": "1kg的物体在任何地方受到的重力都是9.8N。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误",
    "explanation": "g值随地理位置变化。赤道处g≈9.78N/kg，两极处g≈9.83N/kg。所以1kg物体在不同地方重力略有不同。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "g值随地理位置变化。赤道处g≈9.78N/kg，两极处g≈9.83N/kg。所以1kg物体在不同地方重力略有不同。"
    ]
  },
  {
    "id": "mech_301",
    "knowledge_node_id": "gravity_calculation",
    "chapter": "力与运动",
    "section": "重力",
    "difficulty": 1,
    "type": "choice",
    "content": "一个中学生的质量约为50kg，那么他受到的重力约为？",
    "options": [
      "5N",
      "50N",
      "500N",
      "5000N"
    ],
    "answer": "500N",
    "explanation": "G = mg = 50kg × 10N/kg = 500N。",
    "hints": [
      "G=mg，50×10等于多少？",
      "计算严重错误，可能把除法算反了。",
      "G = mg = 50kg × 10N/kg = 500N。"
    ]
  },
  {
    "id": "mech_302",
    "knowledge_node_id": "gravity_concept",
    "chapter": "力与运动",
    "section": "重力",
    "difficulty": 2,
    "type": "choice",
    "content": "关于质量和重力，下列说法正确的是？",
    "options": [
      "质量相同的物体，重力一定相同",
      "重力相同的物体，质量一定相同",
      "质量不随位置改变，重力随位置改变",
      "质量和重力都不随位置改变"
    ],
    "answer": "质量不随位置改变，重力随位置改变",
    "explanation": "质量是物体本身的属性，不随位置改变。但重力G=mg，g随位置改变，所以重力会改变。",
    "hints": [
      "同样50kg的人，在地球上和月球上重力一样吗？",
      "质量相同但在不同星球上，g不同，重力也不同。",
      "质量是物体本身的属性，不随位置改变。但重力G=mg，g随位置改变，所以重力会改变。"
    ]
  },
  {
    "id": "mech_303",
    "knowledge_node_id": "gravity_concept",
    "chapter": "力与运动",
    "section": "重力",
    "difficulty": 2,
    "type": "choice",
    "content": "建筑工人常用重垂线来检查墙壁是否竖直，这是利用了？",
    "options": [
      "重力的大小",
      "重力的方向",
      "重力的作用点",
      "重力的施力物体"
    ],
    "answer": "重力的方向",
    "explanation": "重垂线利用了重力方向总是竖直向下的特性。如果墙壁与重垂线平行，说明墙壁是竖直的。",
    "hints": [
      "重垂线为什么总是指向下方？是因为重力大还是方向固定？",
      "重垂线不是利用重力的大小，而是利用其方向。",
      "重垂线利用了重力方向总是竖直向下的特性。如果墙壁与重垂线平行，说明墙壁是竖直的。"
    ]
  },
  {
    "id": "mech_304",
    "knowledge_node_id": "gravity_calculation",
    "chapter": "力与运动",
    "section": "重力",
    "difficulty": 3,
    "type": "choice",
    "content": "一个物体在地球上重力为G，如果把它带到月球上，它的质量和重力分别变为？",
    "options": [
      "质量不变，重力不变",
      "质量不变，重力变为G/6",
      "质量变为M/6，重力不变",
      "质量变为M/6，重力变为G/6"
    ],
    "answer": "质量不变，重力变为G/6",
    "explanation": "质量是物体本身的属性，不随位置变化。月球重力加速度约为地球的1/6，所以重力变为G/6。",
    "hints": [
      "月球拉你的力比地球小，你感受到的重力会变吗？",
      "重力会随位置改变，月球上的重力与地球不同。",
      "质量是物体本身的属性，不随位置变化。月球重力加速度约为地球的1/6，所以重力变为G/6。"
    ]
  },
  {
    "id": "mech_305",
    "knowledge_node_id": "gravity_center",
    "chapter": "力与运动",
    "section": "重力",
    "difficulty": 2,
    "type": "truefalse",
    "content": "物体的重心位置与物体的质量分布有关。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "正确",
    "explanation": "重心位置取决于物体的形状和质量分布。质量分布不均匀时，重心偏向质量大的一侧。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "重心位置取决于物体的形状和质量分布。质量分布不均匀时，重心偏向质量大的一侧。"
    ]
  },
  {
    "id": "mech_306",
    "knowledge_node_id": "gravity_calculation",
    "chapter": "力与运动",
    "section": "重力",
    "difficulty": 2,
    "type": "truefalse",
    "content": "物体从赤道移到两极，重力大小不变。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误",
    "explanation": "两极的g值大于赤道，所以同一物体在两极受到的重力比在赤道大。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "两极的g值大于赤道，所以同一物体在两极受到的重力比在赤道大。"
    ]
  },
  {
    "id": "mech_307",
    "knowledge_node_id": "gravity_center",
    "chapter": "力与运动",
    "section": "重力",
    "difficulty": 3,
    "type": "choice",
    "content": "下列关于重心的说法，正确的是？",
    "options": [
      "重心一定在物体的几何中心",
      "重心是物体内最重的一点",
      "重心是重力的等效作用点",
      "不规则物体的重心无法确定"
    ],
    "answer": "重心是重力的等效作用点",
    "explanation": "重心是物体各部分所受重力的合力的等效作用点。它不是最重的点，而是等效作用点。",
    "hints": [
      "一个L形物体，重心还在几何中心吗？",
      "只有形状规则、质量分布均匀的物体，重心才在几何中心。",
      "重心是物体各部分所受重力的合力的等效作用点。它不是最重的点，而是等效作用点。"
    ]
  },
  {
    "id": "mech_23",
    "knowledge_node_id": "inertia_concept",
    "chapter": "力与运动",
    "section": "牛顿第一定律",
    "difficulty": 1,
    "type": "choice",
    "content": "牛顿第一定律又称为？",
    "options": [
      "万有引力定律",
      "惯性定律",
      "加速度定律",
      "作用力与反作用力定律"
    ],
    "answer": "惯性定律",
    "explanation": "牛顿第一定律指出：一切物体在没有受到外力作用时，总保持静止状态或匀速直线运动状态。也叫惯性定律。",
    "hints": [
      "万有引力定律说的是什么？是苹果落地还是物体保持运动状态？",
      "万有引力定律描述的是物体间的引力，不是牛顿第一定律。",
      "牛顿第一定律指出：一切物体在没有受到外力作用时，总保持静止状态或匀速直线运动状态。也叫惯性定律。"
    ]
  },
  {
    "id": "mech_24",
    "knowledge_node_id": "inertia_application",
    "chapter": "力与运动",
    "section": "牛顿第一定律",
    "difficulty": 1,
    "type": "choice",
    "content": "下列现象中，属于利用惯性的是？",
    "options": [
      "汽车刹车时乘客向前倾",
      "跳远运动员助跑后起跳",
      "拍打衣服上的灰尘",
      "紧急刹车时安全带起保护作用"
    ],
    "answer": "跳远运动员助跑后起跳",
    "explanation": "跳远助跑是利用惯性——起跳前身体已具有向前的速度，起跳后由于惯性保持向前运动，跳得更远。其他选项是防止惯性带来的危害。",
    "hints": [
      "乘客向前倾是好事还是坏事？利用惯性是为了达到好的效果还是防止危害？",
      "这是惯性的表现，但会带来危险，不是利用惯性。",
      "跳远助跑是利用惯性——起跳前身体已具有向前的速度，起跳后由于惯性保持向前运动，跳得更远。其他选项是防止惯性带来的危害。"
    ]
  },
  {
    "id": "mech_25",
    "knowledge_node_id": "inertia_concept",
    "chapter": "力与运动",
    "section": "牛顿第一定律",
    "difficulty": 2,
    "type": "choice",
    "content": "正在运动的物体，如果所受外力同时消失，它将？",
    "options": [
      "立即停下来",
      "慢慢停下来",
      "做匀速直线运动",
      "做加速运动"
    ],
    "answer": "做匀速直线运动",
    "explanation": "根据牛顿第一定律，运动的物体在不受外力时，将保持原来的速度做匀速直线运动。",
    "hints": [
      "你骑自行车时，不蹬了为什么会慢慢停下来？是因为没有力了吗？",
      "力不是维持运动的原因，没有力时物体会保持原来的运动状态。",
      "根据牛顿第一定律，运动的物体在不受外力时，将保持原来的速度做匀速直线运动。"
    ]
  },
  {
    "id": "mech_26",
    "knowledge_node_id": "inertia_application",
    "chapter": "力与运动",
    "section": "牛顿第一定律",
    "difficulty": 3,
    "type": "choice",
    "content": "一辆匀速行驶的汽车上，乘客竖直向上抛出一个球，球将？",
    "options": [
      "落在乘客后面",
      "落在乘客前面",
      "落在乘客手中",
      "无法确定"
    ],
    "answer": "落在乘客手中",
    "explanation": "球和乘客具有相同的水平速度。球被抛出后，由于惯性，水平方向保持与车相同的速度，所以会落回乘客手中。",
    "hints": [
      "球被抛起前，它和车的水平速度一样吗？抛起后水平速度会变吗？",
      "球具有和车相同的水平速度，不会落在后面。",
      "球和乘客具有相同的水平速度。球被抛出后，由于惯性，水平方向保持与车相同的速度，所以会落回乘客手中。"
    ]
  },
  {
    "id": "mech_27",
    "knowledge_node_id": "inertia_concept",
    "chapter": "力与运动",
    "section": "牛顿第一定律",
    "difficulty": 1,
    "type": "truefalse",
    "content": "静止的物体没有惯性。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误",
    "explanation": "一切物体都有惯性，无论是运动的还是静止的。惯性是物体的固有属性，只与质量有关。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "一切物体都有惯性，无论是运动的还是静止的。惯性是物体的固有属性，只与质量有关。"
    ]
  },
  {
    "id": "mech_28",
    "knowledge_node_id": "inertia_concept",
    "chapter": "力与运动",
    "section": "牛顿第一定律",
    "difficulty": 1,
    "type": "truefalse",
    "content": "力是维持物体运动的原因。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误",
    "explanation": "力不是维持运动的原因，而是改变运动状态的原因。物体不受力时可以保持匀速直线运动。这是亚里士多德的错误观点。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "力不是维持运动的原因，而是改变运动状态的原因。物体不受力时可以保持匀速直线运动。这是亚里士多德的错误观点。"
    ]
  },
  {
    "id": "mech_29",
    "knowledge_node_id": "inertia_concept",
    "chapter": "力与运动",
    "section": "牛顿第一定律",
    "difficulty": 2,
    "type": "truefalse",
    "content": "速度越大的物体，惯性越大。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误",
    "explanation": "惯性只与物体的质量有关，与速度无关。质量越大，惯性越大。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "惯性只与物体的质量有关，与速度无关。质量越大，惯性越大。"
    ]
  },
  {
    "id": "mech_30",
    "knowledge_node_id": "inertia_concept",
    "chapter": "力与运动",
    "section": "牛顿第一定律",
    "difficulty": 3,
    "type": "truefalse",
    "content": "牛顿第一定律可以通过实验直接验证。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误",
    "explanation": "牛顿第一定律描述的是物体不受力的情况，而现实中无法完全消除所有外力，所以不能直接验证。它是通过推理和理想实验得出的。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "牛顿第一定律描述的是物体不受力的情况，而现实中无法完全消除所有外力，所以不能直接验证。它是通过推理和理想实验得出的。"
    ]
  },
  {
    "id": "mech_401",
    "knowledge_node_id": "inertia_concept",
    "chapter": "力与运动",
    "section": "牛顿第一定律",
    "difficulty": 1,
    "type": "choice",
    "content": "下列说法中，正确的是？",
    "options": [
      "物体的速度越大，惯性越大",
      "静止的物体没有惯性",
      "物体的惯性只与质量有关",
      "物体的惯性可以被克服"
    ],
    "answer": "物体的惯性只与质量有关",
    "explanation": "惯性是物体的固有属性，只与质量有关，与速度、运动状态等无关。",
    "hints": [
      "高速行驶的自行车和静止的卡车，哪个更难推动？",
      "惯性与速度无关，只与质量有关。",
      "惯性是物体的固有属性，只与质量有关，与速度、运动状态等无关。"
    ]
  },
  {
    "id": "mech_402",
    "knowledge_node_id": "inertia_application",
    "chapter": "力与运动",
    "section": "牛顿第一定律",
    "difficulty": 2,
    "type": "choice",
    "content": "公交车突然刹车时，站着的乘客会向前倾倒，这是因为？",
    "options": [
      "乘客受到向前的力",
      "乘客的脚停止了，上身由于惯性继续向前",
      "刹车时产生了惯性",
      "乘客被惯性推动"
    ],
    "answer": "乘客的脚停止了，上身由于惯性继续向前",
    "explanation": "刹车时脚随车停止，但上身由于惯性保持原来的运动状态继续向前运动，所以会向前倾倒。",
    "hints": [
      "是什么在推乘客向前？能找到这个'力'的施力物体吗？",
      "没有受到向前的力，是惯性使上身继续向前运动。",
      "刹车时脚随车停止，但上身由于惯性保持原来的运动状态继续向前运动，所以会向前倾倒。"
    ]
  },
  {
    "id": "mech_403",
    "knowledge_node_id": "inertia_application",
    "chapter": "力与运动",
    "section": "牛顿第一定律",
    "difficulty": 2,
    "type": "choice",
    "content": "锤子的锤头松了，把锤柄在地面上撞击几下，锤头就套紧了。这是利用？",
    "options": [
      "锤头的惯性",
      "锤柄的惯性",
      "地面的弹力",
      "锤头的重力"
    ],
    "answer": "锤头的惯性",
    "explanation": "锤柄撞击地面后停止运动，锤头由于惯性继续向下运动，所以套紧在锤柄上。",
    "hints": [
      "撞击后，锤柄和锤头哪个停止了？哪个还在运动？",
      "锤柄已经停止运动了，不是利用锤柄的惯性。",
      "锤柄撞击地面后停止运动，锤头由于惯性继续向下运动，所以套紧在锤柄上。"
    ]
  },
  {
    "id": "mech_404",
    "knowledge_node_id": "inertia_concept",
    "chapter": "力与运动",
    "section": "牛顿第一定律",
    "difficulty": 3,
    "type": "choice",
    "content": "在水平面上做匀速直线运动的小车，突然撤去所有外力，小车将？",
    "options": [
      "立即停止",
      "慢慢减速",
      "保持匀速直线运动",
      "做加速运动"
    ],
    "answer": "保持匀速直线运动",
    "explanation": "根据牛顿第一定律，物体不受外力时将保持原来的运动状态。小车原来做匀速直线运动，撤去外力后仍保持匀速直线运动。",
    "hints": [
      "是什么让物体停止的？如果没有这个力，物体会停吗？",
      "没有外力使小车停止。",
      "根据牛顿第一定律，物体不受外力时将保持原来的运动状态。小车原来做匀速直线运动，撤去外力后仍保持匀速直线运动。"
    ]
  },
  {
    "id": "mech_405",
    "knowledge_node_id": "inertia_concept",
    "chapter": "力与运动",
    "section": "牛顿第一定律",
    "difficulty": 2,
    "type": "truefalse",
    "content": "物体运动状态改变时，一定受到了力的作用。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "正确",
    "explanation": "力是改变物体运动状态的原因。运动状态改变（速度大小或方向改变）一定是因为受到了非平衡力的作用。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "力是改变物体运动状态的原因。运动状态改变（速度大小或方向改变）一定是因为受到了非平衡力的作用。"
    ]
  },
  {
    "id": "mech_406",
    "knowledge_node_id": "inertia_concept",
    "chapter": "力与运动",
    "section": "牛顿第一定律",
    "difficulty": 2,
    "type": "truefalse",
    "content": "物体不受力时，一定处于静止状态。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误",
    "explanation": "物体不受力时可能静止，也可能做匀速直线运动。两种情况都符合牛顿第一定律。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "物体不受力时可能静止，也可能做匀速直线运动。两种情况都符合牛顿第一定律。"
    ]
  },
  {
    "id": "mech_407",
    "knowledge_node_id": "inertia_concept",
    "chapter": "力与运动",
    "section": "牛顿第一定律",
    "difficulty": 3,
    "type": "choice",
    "content": "关于惯性的说法，正确的是？",
    "options": [
      "惯性是一种力",
      "惯性可以被消除",
      "惯性大小只与质量有关",
      "运动的物体有惯性，静止的物体没有惯性"
    ],
    "answer": "惯性大小只与质量有关",
    "explanation": "惯性是物体的固有属性，不是力；不能被消除；一切物体都有惯性，只与质量有关。",
    "hints": [
      "惯性有施力物体吗？能找到'惯性'这个力的来源吗？",
      "惯性是属性，不是力。不能说'受到惯性'。",
      "惯性是物体的固有属性，不是力；不能被消除；一切物体都有惯性，只与质量有关。"
    ]
  },
  {
    "id": "mech_31",
    "knowledge_node_id": "balance_condition",
    "chapter": "力与运动",
    "section": "二力平衡",
    "difficulty": 1,
    "type": "choice",
    "content": "二力平衡的条件是？",
    "options": [
      "大小相等、方向相反",
      "大小相等、方向相反、作用在同一直线上",
      "大小相等、方向相反、作用在同一物体上、在同一直线上",
      "只要大小相等即可"
    ],
    "answer": "大小相等、方向相反、作用在同一物体上、在同一直线上",
    "explanation": "二力平衡的四个条件：大小相等、方向相反、作用在同一物体上、作用在同一直线上。四个条件缺一不可。",
    "hints": [
      "两个大小相等、方向相反的力，如果作用在不同物体上，是平衡力吗？",
      "缺少'作用在同一物体上'和'在同一直线上'两个条件。",
      "二力平衡的四个条件：大小相等、方向相反、作用在同一物体上、作用在同一直线上。四个条件缺一不可。"
    ]
  },
  {
    "id": "mech_32",
    "knowledge_node_id": "balance_condition",
    "chapter": "力与运动",
    "section": "二力平衡",
    "difficulty": 2,
    "type": "choice",
    "content": "一本书放在水平桌面上，下列说法正确的是？",
    "options": [
      "书的重力和桌面对书的支持力是一对平衡力",
      "书的重力和书对桌面的压力是一对平衡力",
      "书对桌面的压力和桌面对书的支持力是一对平衡力",
      "书的重力和书对桌面的压力是一对相互作用力"
    ],
    "answer": "书的重力和桌面对书的支持力是一对平衡力",
    "explanation": "书静止在桌面上，受力平衡。重力（地球对书）和桌面对书的支持力作用在同一物体（书）上，大小相等、方向相反、在同一直线上，是一对平衡力。",
    "hints": [
      "平衡力需要方向相反。重力和压力方向相同还是相反？",
      "这两个力方向相同（都向下），不是平衡力。而且作用在不同物体上。",
      "书静止在桌面上，受力平衡。重力（地球对书）和桌面对书的支持力作用在同一物体（书）上，大小相等、方向相反、在同一直线上，是一对平衡力。"
    ]
  },
  {
    "id": "mech_33",
    "knowledge_node_id": "balance_friction",
    "chapter": "力与运动",
    "section": "二力平衡",
    "difficulty": 3,
    "type": "choice",
    "content": "一个人用100N的力沿水平方向推一个箱子，箱子做匀速直线运动。箱子受到的摩擦力是？",
    "options": [
      "0N",
      "50N",
      "100N",
      "200N"
    ],
    "answer": "100N",
    "explanation": "箱子做匀速直线运动，说明受力平衡。推力和摩擦力是一对平衡力，所以摩擦力 = 推力 = 100N。",
    "hints": [
      "如果摩擦力为0，100N的推力会让箱子怎样运动？",
      "如果有摩擦力为0，箱子会做加速运动，不是匀速运动。",
      "箱子做匀速直线运动，说明受力平衡。推力和摩擦力是一对平衡力，所以摩擦力 = 推力 = 100N。"
    ]
  },
  {
    "id": "mech_34",
    "knowledge_node_id": "balance_condition",
    "chapter": "力与运动",
    "section": "二力平衡",
    "difficulty": 1,
    "type": "truefalse",
    "content": "物体处于静止状态时一定受力平衡。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "正确",
    "explanation": "物体处于静止状态或匀速直线运动状态时，一定受力平衡（合力为零）。这是牛顿第一定律的直接推论。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "物体处于静止状态或匀速直线运动状态时，一定受力平衡（合力为零）。这是牛顿第一定律的直接推论。"
    ]
  },
  {
    "id": "mech_35",
    "knowledge_node_id": "balance_condition",
    "chapter": "力与运动",
    "section": "二力平衡",
    "difficulty": 2,
    "type": "truefalse",
    "content": "大小相等、方向相反的两个力一定是一对平衡力。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误",
    "explanation": "平衡力还需要满足：作用在同一物体上、在同一直线上。如果两个力作用在不同物体上，就是相互作用力而非平衡力。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "平衡力还需要满足：作用在同一物体上、在同一直线上。如果两个力作用在不同物体上，就是相互作用力而非平衡力。"
    ]
  },
  {
    "id": "mech_36",
    "knowledge_node_id": "balance_condition",
    "chapter": "力与运动",
    "section": "二力平衡",
    "difficulty": 2,
    "type": "truefalse",
    "content": "一个物体受到的合力为零，它一定处于静止状态。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误",
    "explanation": "合力为零时，物体可能静止，也可能做匀速直线运动。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "合力为零时，物体可能静止，也可能做匀速直线运动。"
    ]
  },
  {
    "id": "mech_501",
    "knowledge_node_id": "balance_condition",
    "chapter": "力与运动",
    "section": "二力平衡",
    "difficulty": 2,
    "type": "choice",
    "content": "起重机吊着重物静止在空中，重物受到的拉力和重力？",
    "options": [
      "是一对平衡力",
      "是一对相互作用力",
      "大小不相等",
      "方向相同"
    ],
    "answer": "是一对平衡力",
    "explanation": "重物静止，受力平衡。拉力和重力都作用在重物上，大小相等、方向相反、在同一直线上，是一对平衡力。",
    "hints": [
      "拉力和重力分别作用在什么物体上？",
      "相互作用力作用在不同物体上。拉力和重力都作用在重物上。",
      "重物静止，受力平衡。拉力和重力都作用在重物上，大小相等、方向相反、在同一直线上，是一对平衡力。"
    ]
  },
  {
    "id": "mech_502",
    "knowledge_node_id": "balance_friction",
    "chapter": "力与运动",
    "section": "二力平衡",
    "difficulty": 2,
    "type": "choice",
    "content": "放在水平地面上的箱子受到20N水平推力没有推动，此时箱子受到的摩擦力为？",
    "options": [
      "0N",
      "小于20N",
      "等于20N",
      "大于20N"
    ],
    "answer": "等于20N",
    "explanation": "箱子没有动，说明受力平衡。推力与静摩擦力是一对平衡力，大小相等，所以摩擦力为20N。",
    "hints": [
      "如果摩擦力为0，20N的推力会让箱子怎样？",
      "如果有摩擦力为0，箱子会在20N推力下运动。",
      "箱子没有动，说明受力平衡。推力与静摩擦力是一对平衡力，大小相等，所以摩擦力为20N。"
    ]
  },
  {
    "id": "mech_503",
    "knowledge_node_id": "balance_friction",
    "chapter": "力与运动",
    "section": "二力平衡",
    "difficulty": 3,
    "type": "choice",
    "content": "用20N的力推一个放在水平地面上的木箱，木箱匀速运动。若改用30N的力推，木箱将？",
    "options": [
      "仍然匀速运动",
      "加速运动",
      "减速运动",
      "静止不动"
    ],
    "answer": "加速运动",
    "explanation": "20N时匀速运动，说明滑动摩擦力为20N。30N > 20N，合力不为零且向前，所以木箱加速运动。",
    "hints": [
      "30N和20N哪个大？合力是多少？",
      "30N大于摩擦力，受力不平衡，不会做匀速运动。",
      "20N时匀速运动，说明滑动摩擦力为20N。30N > 20N，合力不为零且向前，所以木箱加速运动。"
    ]
  },
  {
    "id": "mech_504",
    "knowledge_node_id": "balance_condition",
    "chapter": "力与运动",
    "section": "二力平衡",
    "difficulty": 1,
    "type": "truefalse",
    "content": "静止在桌面上的苹果受到的支持力和苹果的重力是一对平衡力。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "正确",
    "explanation": "苹果静止，受力平衡。支持力和重力都作用在苹果上，大小相等、方向相反、在同一直线上，是一对平衡力。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "苹果静止，受力平衡。支持力和重力都作用在苹果上，大小相等、方向相反、在同一直线上，是一对平衡力。"
    ]
  },
  {
    "id": "mech_505",
    "knowledge_node_id": "balance_condition",
    "chapter": "力与运动",
    "section": "二力平衡",
    "difficulty": 2,
    "type": "truefalse",
    "content": "平衡力和相互作用力都需要满足大小相等、方向相反、作用在同一直线上。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "正确",
    "explanation": "平衡力和相互作用力都需要满足大小相等、方向相反、作用在同一直线上。区别在于：平衡力作用在同一物体上，相互作用力作用在不同物体上。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "平衡力和相互作用力都需要满足大小相等、方向相反、作用在同一直线上。区别在于：平衡力作用在同一物体上，相互作用力作用在不同物体上。"
    ]
  },
  {
    "id": "mech_506",
    "knowledge_node_id": "balance_condition",
    "chapter": "力与运动",
    "section": "二力平衡",
    "difficulty": 3,
    "type": "choice",
    "content": "关于平衡力和相互作用力，下列说法正确的是？",
    "options": [
      "平衡力作用在不同物体上",
      "相互作用力作用在同一物体上",
      "平衡力可以是不同性质的力",
      "相互作用力可以是不同性质的力"
    ],
    "answer": "平衡力可以是不同性质的力",
    "explanation": "平衡力可以是不同性质的力（如重力是引力，支持力是弹力）。相互作用力一定是同种性质的力。",
    "hints": [
      "作用在不同物体上的力，能让其中一个物体平衡吗？",
      "平衡力必须作用在同一物体上。",
      "平衡力可以是不同性质的力（如重力是引力，支持力是弹力）。相互作用力一定是同种性质的力。"
    ]
  },
  {
    "id": "mech_507",
    "knowledge_node_id": "balance_friction",
    "chapter": "力与运动",
    "section": "二力平衡",
    "difficulty": 2,
    "type": "choice",
    "content": "一个物体在水平面上做匀速直线运动，它受到的拉力为15N，则摩擦力？",
    "options": [
      "大于15N",
      "等于15N",
      "小于15N",
      "无法确定"
    ],
    "answer": "等于15N",
    "explanation": "匀速直线运动时受力平衡，拉力与摩擦力大小相等，所以摩擦力等于15N。",
    "hints": [
      "如果摩擦力大于拉力，物体会加速还是减速？",
      "如果摩擦力大于拉力，物体会减速。",
      "匀速直线运动时受力平衡，拉力与摩擦力大小相等，所以摩擦力等于15N。"
    ]
  },
  {
    "id": "mech_37",
    "knowledge_node_id": "friction_factors",
    "chapter": "力与运动",
    "section": "摩擦力",
    "difficulty": 1,
    "type": "choice",
    "content": "下列做法中，属于增大摩擦力的是？",
    "options": [
      "给自行车轴加润滑油",
      "鞋底有凹凸不平的花纹",
      "在冰面上撒沙子",
      "磁悬浮列车悬浮行驶"
    ],
    "answer": "鞋底有凹凸不平的花纹",
    "explanation": "鞋底花纹是通过增大接触面的粗糙程度来增大摩擦力，防止走路时滑倒。",
    "hints": [
      "加润滑油后，自行车骑起来更轻松还是更费力？",
      "加润滑油是减小摩擦，不是增大。",
      "鞋底花纹是通过增大接触面的粗糙程度来增大摩擦力，防止走路时滑倒。"
    ]
  },
  {
    "id": "mech_38",
    "knowledge_node_id": "friction_application",
    "chapter": "力与运动",
    "section": "摩擦力",
    "difficulty": 1,
    "type": "choice",
    "content": "下列哪种情况摩擦力是有益的？",
    "options": [
      "机器零件之间的摩擦",
      "车轴与轴承之间的摩擦",
      "走路时脚与地面的摩擦",
      "钢笔尖与纸的摩擦"
    ],
    "answer": "走路时脚与地面的摩擦",
    "explanation": "走路时脚向后蹬地，地面给脚向前的摩擦力，使人前进。这个摩擦力是有益的。",
    "hints": [
      "机器零件摩擦会产生什么后果？是好事还是坏事？",
      "机器零件之间的摩擦会磨损零件、发热，是有害的。",
      "走路时脚向后蹬地，地面给脚向前的摩擦力，使人前进。这个摩擦力是有益的。"
    ]
  },
  {
    "id": "mech_39",
    "knowledge_node_id": "friction_factors",
    "chapter": "力与运动",
    "section": "摩擦力",
    "difficulty": 2,
    "type": "choice",
    "content": "影响滑动摩擦力大小的因素是？",
    "options": [
      "物体的重力和接触面积",
      "压力大小和接触面的粗糙程度",
      "物体的速度和压力",
      "接触面积和物体的速度"
    ],
    "answer": "压力大小和接触面的粗糙程度",
    "explanation": "滑动摩擦力的大小与压力大小和接触面的粗糙程度有关。压力越大、接触面越粗糙，摩擦力越大。与接触面积和速度无关。",
    "hints": [
      "在斜面上，物体对斜面的压力等于重力吗？",
      "摩擦力与压力有关，但压力不一定等于重力。且摩擦力与接触面积无关。",
      "滑动摩擦力的大小与压力大小和接触面的粗糙程度有关。压力越大、接触面越粗糙，摩擦力越大。与接触面积和速度无关。"
    ]
  },
  {
    "id": "mech_40",
    "knowledge_node_id": "friction_factors",
    "chapter": "力与运动",
    "section": "摩擦力",
    "difficulty": 3,
    "type": "choice",
    "content": "一个重20N的物体放在水平面上，用8N的水平力推它，物体没动。此时物体受到的摩擦力是？",
    "options": [
      "0N",
      "8N",
      "12N",
      "20N"
    ],
    "answer": "8N",
    "explanation": "物体静止，受力平衡。推力为8N，所以静摩擦力也为8N，方向与推力相反。静摩擦力随外力增大而增大，直到达到最大值。",
    "hints": [
      "如果摩擦力为0，8N的推力会让物体怎样？",
      "如果摩擦力为0，物体会被8N的力推动。",
      "物体静止，受力平衡。推力为8N，所以静摩擦力也为8N，方向与推力相反。静摩擦力随外力增大而增大，直到达到最大值。"
    ]
  },
  {
    "id": "mech_41",
    "knowledge_node_id": "friction_concept",
    "chapter": "力与运动",
    "section": "摩擦力",
    "difficulty": 1,
    "type": "truefalse",
    "content": "摩擦力总是阻碍物体运动的。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误",
    "explanation": "摩擦力总是阻碍物体的相对运动（或相对运动趋势），但不一定阻碍运动。例如人走路时，地面的摩擦力是使人前进的动力。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "摩擦力总是阻碍物体的相对运动（或相对运动趋势），但不一定阻碍运动。例如人走路时，地面的摩擦力是使人前进的动力。"
    ]
  },
  {
    "id": "mech_42",
    "knowledge_node_id": "friction_factors",
    "chapter": "力与运动",
    "section": "摩擦力",
    "difficulty": 1,
    "type": "truefalse",
    "content": "压力越大，滑动摩擦力越大。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "正确",
    "explanation": "在接触面粗糙程度不变的情况下，压力越大，滑动摩擦力越大。这是摩擦力的基本规律。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "在接触面粗糙程度不变的情况下，压力越大，滑动摩擦力越大。这是摩擦力的基本规律。"
    ]
  },
  {
    "id": "mech_43",
    "knowledge_node_id": "friction_factors",
    "chapter": "力与运动",
    "section": "摩擦力",
    "difficulty": 2,
    "type": "truefalse",
    "content": "滚动摩擦力比滑动摩擦力小。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "正确",
    "explanation": "相同条件下，滚动摩擦比滑动摩擦小得多。这就是为什么使用轮子、轴承可以省力。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "相同条件下，滚动摩擦比滑动摩擦小得多。这就是为什么使用轮子、轴承可以省力。"
    ]
  },
  {
    "id": "mech_44",
    "knowledge_node_id": "friction_concept",
    "chapter": "力与运动",
    "section": "摩擦力",
    "difficulty": 3,
    "type": "truefalse",
    "content": "物体之间只要接触就一定有摩擦力。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误",
    "explanation": "产生摩擦力需要三个条件：接触、有压力、有相对运动或相对运动趋势。如果两个物体接触但没有相对运动趋势，就没有摩擦力。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "产生摩擦力需要三个条件：接触、有压力、有相对运动或相对运动趋势。如果两个物体接触但没有相对运动趋势，就没有摩擦力。"
    ]
  },
  {
    "id": "mech_601",
    "knowledge_node_id": "friction_application",
    "chapter": "力与运动",
    "section": "摩擦力",
    "difficulty": 1,
    "type": "choice",
    "content": "下列实例中，属于减小摩擦的是？",
    "options": [
      "轮胎上有花纹",
      "刹车时用力捏闸",
      "给机器加润滑油",
      "鞋底有凹凸花纹"
    ],
    "answer": "给机器加润滑油",
    "explanation": "加润滑油可以使接触面分离，从而减小摩擦。其他选项都是增大摩擦。",
    "hints": [
      "轮胎花纹让车更容易打滑还是更不容易打滑？",
      "轮胎花纹是增大摩擦。",
      "加润滑油可以使接触面分离，从而减小摩擦。其他选项都是增大摩擦。"
    ]
  },
  {
    "id": "mech_602",
    "knowledge_node_id": "friction_factors",
    "chapter": "力与运动",
    "section": "摩擦力",
    "difficulty": 2,
    "type": "choice",
    "content": "用弹簧测力计拉着木块在水平桌面上做匀速直线运动，弹簧测力计示数为3N。若把木块侧放，仍做匀速直线运动，弹簧测力计示数为？",
    "options": [
      "大于3N",
      "等于3N",
      "小于3N",
      "无法确定"
    ],
    "answer": "等于3N",
    "explanation": "滑动摩擦力与接触面积无关，只与压力和接触面粗糙程度有关。侧放后压力和粗糙程度不变，所以摩擦力不变，仍为3N。",
    "hints": [
      "你觉得接触面积越大摩擦越大？试试把书平放和侧放拖动，感觉一样吗？",
      "接触面积改变不影响滑动摩擦力大小。",
      "滑动摩擦力与接触面积无关，只与压力和接触面粗糙程度有关。侧放后压力和粗糙程度不变，所以摩擦力不变，仍为3N。"
    ]
  },
  {
    "id": "mech_603",
    "knowledge_node_id": "friction_application",
    "chapter": "力与运动",
    "section": "摩擦力",
    "difficulty": 2,
    "type": "choice",
    "content": "在同样的路面上，一辆空车和一辆装满货物的车，以相同速度行驶时，刹车距离？",
    "options": [
      "空车刹车距离长",
      "装满货物的车刹车距离长",
      "一样长",
      "无法确定"
    ],
    "answer": "装满货物的车刹车距离长",
    "explanation": "装满货物的车压力大，摩擦力大。但车的质量也大，惯性大，更难停下来。实际上质量大的车刹车距离更长，因为惯性的影响更大。",
    "hints": [
      "空车和重车，哪个更容易改变运动状态？",
      "空车质量小，惯性小，更容易停下来。",
      "装满货物的车压力大，摩擦力大。但车的质量也大，惯性大，更难停下来。实际上质量大的车刹车距离更长，因为惯性的影响更大。"
    ]
  },
  {
    "id": "mech_604",
    "knowledge_node_id": "friction_factors",
    "chapter": "力与运动",
    "section": "摩擦力",
    "difficulty": 3,
    "type": "choice",
    "content": "一个木块在水平桌面上做匀速直线运动，此时拉力为5N。若在木块上放一块重物，仍做匀速直线运动，拉力应？",
    "options": [
      "仍为5N",
      "大于5N",
      "小于5N",
      "先大后小"
    ],
    "answer": "大于5N",
    "explanation": "放上重物后压力增大，滑动摩擦力增大。要做匀速直线运动，拉力必须等于摩擦力，所以拉力要大于5N。",
    "hints": [
      "放上重物后，木块对桌面的压力变了吗？摩擦力会变吗？",
      "压力增大后摩擦力增大，5N不够。",
      "放上重物后压力增大，滑动摩擦力增大。要做匀速直线运动，拉力必须等于摩擦力，所以拉力要大于5N。"
    ]
  },
  {
    "id": "mech_605",
    "knowledge_node_id": "friction_factors",
    "chapter": "力与运动",
    "section": "摩擦力",
    "difficulty": 2,
    "type": "truefalse",
    "content": "增大摩擦力的方法可以是增大压力或增大接触面的粗糙程度。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "正确",
    "explanation": "增大压力和增大接触面的粗糙程度都是增大滑动摩擦力的有效方法。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "增大压力和增大接触面的粗糙程度都是增大滑动摩擦力的有效方法。"
    ]
  },
  {
    "id": "mech_606",
    "knowledge_node_id": "friction_factors",
    "chapter": "力与运动",
    "section": "摩擦力",
    "difficulty": 1,
    "type": "truefalse",
    "content": "用滚动代替滑动可以减小摩擦。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "正确",
    "explanation": "相同条件下，滚动摩擦远小于滑动摩擦。这就是使用轮子和轴承的原理。",
    "hints": [
      "想一想这道题考查的是什么知识点？",
      "回顾一下相关概念的定义。",
      "相同条件下，滚动摩擦远小于滑动摩擦。这就是使用轮子和轴承的原理。"
    ]
  },
  {
    "id": "mech_607",
    "knowledge_node_id": "friction_factors",
    "chapter": "力与运动",
    "section": "摩擦力",
    "difficulty": 2,
    "type": "choice",
    "content": "下列措施中，通过增大接触面粗糙程度来增大摩擦的是？",
    "options": [
      "给机器加润滑油",
      "轮胎上刻花纹",
      "使用气垫船",
      "安装滚动轴承"
    ],
    "answer": "轮胎上刻花纹",
    "explanation": "轮胎花纹增大了接触面的粗糙程度，从而增大摩擦。其他选项都是减小摩擦的方法。",
    "hints": [
      "加润滑油后摩擦变大还是变小？",
      "加润滑油是减小摩擦。",
      "轮胎花纹增大了接触面的粗糙程度，从而增大摩擦。其他选项都是减小摩擦的方法。"
    ]
  },
  {
    "id": "mech_608",
    "knowledge_node_id": "friction_concept",
    "chapter": "力与运动",
    "section": "摩擦力",
    "difficulty": 3,
    "type": "choice",
    "content": "关于摩擦力的说法，正确的是？",
    "options": [
      "摩擦力总是有害的",
      "摩擦力的大小只与压力有关",
      "静摩擦力的大小可以变化",
      "没有压力也可能有摩擦力"
    ],
    "answer": "静摩擦力的大小可以变化",
    "explanation": "静摩擦力的大小不是固定的，它随外力的变化而变化，范围在0到最大静摩擦力之间。",
    "hints": [
      "没有摩擦，你能走路吗？能握住东西吗？",
      "摩擦力也有有益的一面，如走路、刹车都需要摩擦。",
      "静摩擦力的大小不是固定的，它随外力的变化而变化，范围在0到最大静摩擦力之间。"
    ]
  }
];
