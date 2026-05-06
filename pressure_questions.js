// ============================================
// 压强章节题库 - 20道高质量选择题
// ============================================

var PRESSURE_QUESTIONS = [
  // === pressure_concept: 压强 (pr_001 ~ pr_005) ===
  {
    id: 'pr_001', knowledge_node_id: 'pressure_concept', chapter: '压强', section: '压强',
    difficulty: 1, type: 'choice',
    content: '下列实例中，属于增大压强的是？',
    options: ['坦克装有宽大的履带', '书包背带做得较宽', '刀刃磨得很锋利', '滑雪板做得又长又宽'],
    answer: '刀刃磨得很锋利',
    explanation: '压强 p=F/S。刀刃磨锋利是通过减小受力面积S来增大压强。A、B、D都是通过增大受力面积来减小压强。',
    hints: ['压强与受力面积有什么关系？', '受力面积越小，压强越大。', '刀刃磨锋利是减小受力面积，从而增大压强。']
  },
  {
    id: 'pr_002', knowledge_node_id: 'pressure_concept', chapter: '压强', section: '压强',
    difficulty: 2, type: 'choice',
    content: '一个重600N的人，双脚站立时与地面的接触面积约为0.04m²，则他对地面的压强约为？',
    options: ['1.5×10⁴Pa', '2.4×10⁴Pa', '1.5×10³Pa', '2.4×10³Pa'],
    answer: '1.5×10⁴Pa',
    explanation: 'p = F/S = 600N / 0.04m² = 15000Pa = 1.5×10⁴Pa。注意：水平地面上，压力F等于重力G。',
    hints: ['压强的计算公式是什么？', 'p = F/S。水平地面上F=G。', 'p = 600N / 0.04m² = 1.5×10⁴Pa。']
  },
  {
    id: 'pr_003', knowledge_node_id: 'pressure_concept', chapter: '压强', section: '压强',
    difficulty: 2, type: 'choice',
    content: '如图所示，同一块砖分别平放、侧放、竖放在水平地面上，对地面的压强最大的是？',
    options: ['平放', '侧放', '竖放', '三种放法一样大'],
    answer: '竖放',
    explanation: '同一块砖重力不变，对地面压力F相同。竖放时受力面积最小，根据p=F/S，压强最大。',
    hints: ['三种放法中，什么量是相同的？', '压力相同（都等于重力）。', '受力面积越小，压强越大。竖放受力面积最小。']
  },
  {
    id: 'pr_004', knowledge_node_id: 'pressure_concept', chapter: '压强', section: '压强',
    difficulty: 2, type: 'choice',
    content: '关于压力和压强，下列说法正确的是？',
    options: ['压力的方向总是竖直向下的', '压力的大小总是等于重力', '压强是表示压力作用效果的物理量', '受力面积越大，压强一定越大'],
    answer: '压强是表示压力作用效果的物理量',
    explanation: '压力方向垂直于接触面，不一定是竖直向下；压力只有在水平面上且无其他力时才等于重力；压强才是表示压力作用效果的物理量；p=F/S，压强与压力和受力面积都有关。',
    hints: ['压力的方向由什么决定？', '由接触面决定，垂直于接触面。', '压强p=F/S，是表示压力作用效果的物理量。']
  },
  {
    id: 'pr_005', knowledge_node_id: 'pressure_concept', chapter: '压强', section: '压强',
    difficulty: 3, type: 'choice',
    content: '质量分布均匀的长方体铁块，沿虚线切去一半后（如图所示），剩余部分对桌面的压力和压强如何变化？',
    options: ['压力减半，压强不变', '压力减半，压强减半', '压力不变，压强减半', '压力和压强都不变'],
    answer: '压力减半，压强不变',
    explanation: '切去一半后，重力减半，压力F减半。但受力面积S也减半，根据p=F/S，压强不变。',
    hints: ['切去一半后，重力怎么变？受力面积怎么变？', '重力减半，受力面积也减半。', 'p = (F/2)/(S/2) = F/S，压强不变。']
  },

  // === pressure_liquid: 液体压强 (pr_006 ~ pr_010) ===
  {
    id: 'pr_006', knowledge_node_id: 'pressure_liquid', chapter: '压强', section: '液体压强',
    difficulty: 1, type: 'choice',
    content: '潜水员潜入海面下10m深处，受到海水的压强约为？（ρ海水≈1.0×10³kg/m³，g取10N/kg）',
    options: ['10Pa', '100Pa', '1×10⁵Pa', '1×10⁴Pa'],
    answer: '1×10⁵Pa',
    explanation: 'p = ρgh = 1.0×10³kg/m³ × 10N/kg × 10m = 1×10⁵Pa。',
    hints: ['液体压强公式是什么？', 'p = ρgh。', '代入数据：10³ × 10 × 10 = 10⁵Pa。']
  },
  {
    id: 'pr_007', knowledge_node_id: 'pressure_liquid', chapter: '压强', section: '液体压强',
    difficulty: 2, type: 'choice',
    content: '如图所示，容器中装有水，A、B、C三点位置如图，则三点受到水的压强大小关系是？',
    options: ['pA > pB > pC', 'pC > pB > pA', 'pB > pA > pC', 'pA = pB = pC'],
    answer: 'pC > pB > pA',
    explanation: '液体压强p=ρgh，h是深度（该点到液面的竖直距离）。深度越大，压强越大。C点最深，A点最浅。',
    hints: ['液体压强与什么因素有关？', '与深度有关，深度越大压强越大。', '注意h是深度，不是高度。C点深度最大。']
  },
  {
    id: 'pr_008', knowledge_node_id: 'pressure_liquid', chapter: '压强', section: '液体压强',
    difficulty: 2, type: 'choice',
    content: '如图所示，甲、乙两个容器底面积相同，装有相同深度的水，则容器底部受到水的压强和压力？',
    options: ['压强相等，压力相等', '压强相等，甲容器压力大', '压强相等，乙容器压力大', '压强不相等，压力不相等'],
    answer: '压强相等，压力相等',
    explanation: '液体压强p=ρgh，两容器液体密度相同、深度相同，所以底部压强相等。压力F=pS，底面积S相同，所以压力也相等。注意：液体对容器底的压力与容器形状无关。',
    hints: ['液体压强只与什么有关？', '与液体密度和深度有关。', 'p=ρgh，两容器ρ和h都相同，所以压强相等；F=pS，S也相同，所以压力相等。']
  },
  {
    id: 'pr_009', knowledge_node_id: 'pressure_liquid', chapter: '压强', section: '液体压强',
    difficulty: 2, type: 'choice',
    content: '关于连通器，下列说法正确的是？',
    options: ['连通器里只有一种液体时，各容器液面高度一定相同', '连通器里液体静止时，各容器底部压强一定相等', '茶壶的壶嘴和壶身构成了连通器', '以上说法都正确'],
    answer: '以上说法都正确',
    explanation: '连通器原理：连通器里装同种液体且液体不流动时，各容器中的液面总保持相平。液面高度相同、液体密度相同，根据p=ρgh，底部压强相等。茶壶的壶嘴和壶身就是连通器的典型应用。',
    hints: ['连通器的原理是什么？', '同种液体静止时，液面相平。', '茶壶、锅炉水位计都是连通器的应用。']
  },
  {
    id: 'pr_010', knowledge_node_id: 'pressure_liquid', chapter: '压强', section: '液体压强',
    difficulty: 3, type: 'choice',
    content: '如图所示，将压强计的金属盒放入水中同一深度，改变橡皮膜的朝向，U形管两侧液面高度差？',
    options: ['朝上时最大', '朝下时最大', '朝侧面时最大', '始终不变'],
    answer: '始终不变',
    explanation: '液体内部同一深度处，向各个方向的压强都相等。所以改变橡皮膜朝向，压强不变，U形管液面高度差不变。',
    hints: ['液体内部同一深度，各方向压强有什么关系？', '各个方向的压强相等。', 'p=ρgh，同一深度h相同，压强相同，与方向无关。']
  },

  // === pressure_atmosphere: 大气压强 (pr_011 ~ pr_015) ===
  {
    id: 'pr_011', knowledge_node_id: 'pressure_atmosphere', chapter: '压强', section: '大气压强',
    difficulty: 1, type: 'choice',
    content: '下列实例中，不能说明大气压存在的是？',
    options: ['用吸管吸饮料', '吸盘挂钩能挂在墙上', '医生用注射器把药液注入肌肉', '覆杯实验中纸片托住水'],
    answer: '医生用注射器把药液注入肌肉',
    explanation: 'A、B、D都是利用大气压的作用。医生用注射器推药液是靠活塞的推力，不是利用大气压。',
    hints: ['注射器推药液时，是靠什么力把药推进去的？', '是靠活塞的推力，不是大气压。', '吸饮料、吸盘挂钩、覆杯实验都是大气压的应用。']
  },
  {
    id: 'pr_012', knowledge_node_id: 'pressure_atmosphere', chapter: '压强', section: '大气压强',
    difficulty: 2, type: 'choice',
    content: '在托里拆利实验中，若将玻璃管稍微倾斜（管口不离开水银面），则管内水银柱的竖直高度？',
    options: ['变大', '变小', '不变', '无法确定'],
    answer: '不变',
    explanation: '托里拆利实验中，水银柱竖直高度由外界大气压决定，与玻璃管是否倾斜无关。倾斜后水银柱长度变长，但竖直高度不变。',
    hints: ['水银柱的高度由什么决定？', '由外界大气压决定。', '玻璃管倾斜不改变大气压，所以竖直高度不变，只是长度变长。']
  },
  {
    id: 'pr_013', knowledge_node_id: 'pressure_atmosphere', chapter: '压强', section: '大气压强',
    difficulty: 2, type: 'choice',
    content: '把装满水的量筒倒置在水槽中，将量筒慢慢向上提（管口不离开水面），量筒中水柱的高度？',
    options: ['逐渐降低', '始终保持满筒', '先不变后降低', '无法确定'],
    answer: '始终保持满筒',
    explanation: '大气压能支持约10.3m高的水柱，而量筒长度远小于10m，所以大气压足以将量筒中的水完全托住，水柱不会下降。',
    hints: ['1标准大气压能支持多高的水柱？', '约10.3m。', '量筒长度远小于10m，大气压足以托住全部水。']
  },
  {
    id: 'pr_014', knowledge_node_id: 'pressure_atmosphere', chapter: '压强', section: '大气压强',
    difficulty: 2, type: 'choice',
    content: '高山上煮饭不容易煮熟，这是因为高山上的大气压？',
    options: ['较大，水的沸点较高', '较小，水的沸点较低', '较大，水的沸点较低', '较小，水的沸点较高'],
    answer: '较小，水的沸点较低',
    explanation: '大气压随高度增加而减小。高山上气压小，水的沸点低于100°C，所以饭不容易煮熟。高压锅通过增大气压来提高沸点。',
    hints: ['气压和沸点有什么关系？', '气压越大，沸点越高；气压越小，沸点越低。', '高山上气压小，沸点低，所以要用高压锅。']
  },
  {
    id: 'pr_015', knowledge_node_id: 'pressure_atmosphere', chapter: '压强', section: '大气压强',
    difficulty: 3, type: 'choice',
    content: '一个标准大气压的数值最接近？',
    options: ['1.01×10³Pa', '1.01×10⁴Pa', '1.01×10⁵Pa', '1.01×10⁶Pa'],
    answer: '1.01×10⁵Pa',
    explanation: '1标准大气压 = 760mmHg = 1.013×10⁵Pa，通常取1.01×10⁵Pa。这个数值是托里拆利实验测得的。',
    hints: ['托里拆利实验中，水银柱高度是多少？', '760mm。', '1标准大气压≈1.01×10⁵Pa。']
  },

  // === pressure_fluid: 流体压强与流速 (pr_016 ~ pr_020) ===
  {
    id: 'pr_016', knowledge_node_id: 'pressure_fluid', chapter: '压强', section: '流体压强与流速',
    difficulty: 1, type: 'choice',
    content: '火车站站台上都设有安全线，乘客必须站在安全线以外候车，这是因为列车高速通过时？',
    options: ['列车周围的空气流速大，压强大', '列车周围的空气流速大，压强小', '列车周围的空气流速小，压强大', '列车周围的空气流速小，压强小'],
    answer: '列车周围的空气流速大，压强小',
    explanation: '流体流速大的位置压强小。列车高速通过时，人与列车之间的空气流速大、压强小，人身后的大气压会把人推向列车，造成危险。',
    hints: ['流体压强与流速有什么关系？', '流速越大，压强越小。', '列车旁空气流速大压强小，人身后压强大，会把人推向列车。']
  },
  {
    id: 'pr_017', knowledge_node_id: 'pressure_fluid', chapter: '压强', section: '流体压强与流速',
    difficulty: 2, type: 'choice',
    content: '飞机机翼的横截面形状如图所示（上凸下平），飞机飞行时能获得升力，是因为？',
    options: ['机翼上方空气流速大，压强大', '机翼上方空气流速大，压强小', '机翼下方空气流速大，压强大', '机翼下方空气流速大，压强小'],
    answer: '机翼上方空气流速大，压强小',
    explanation: '机翼上凸下平，上方空气流过的路程长，流速大，压强小；下方空气流速小，压强大。上下表面的压强差产生向上的升力。',
    hints: ['机翼上方和下方，哪边空气流速快？', '上方凸，空气流过的路程长，流速快。', '流速大压强小，所以上方压强小，产生向上的升力。']
  },
  {
    id: 'pr_018', knowledge_node_id: 'pressure_fluid', chapter: '压强', section: '流体压强与流速',
    difficulty: 2, type: 'choice',
    content: '如图所示，向两张平行下垂的纸中间吹气，两张纸会？',
    options: ['向两边分开', '向中间靠拢', '保持不动', '先分开后靠拢'],
    answer: '向中间靠拢',
    explanation: '向两张纸中间吹气，中间空气流速增大，压强减小；纸外侧的大气压不变，大于内侧压强，所以两张纸被压向中间。',
    hints: ['吹气后，纸中间的空气流速怎么变？', '流速变大，压强变小。', '外侧压强大于内侧压强，把纸压向中间。']
  },
  {
    id: 'pr_019', knowledge_node_id: 'pressure_fluid', chapter: '压强', section: '流体压强与流速',
    difficulty: 2, type: 'choice',
    content: '喷雾器的工作原理如图所示，快速推动活塞时，管口处空气流速增大，压强？',
    options: ['增大，药液被压上去', '减小，药液被大气压压上去', '不变，药液靠重力流出', '减小，药液靠重力流出'],
    answer: '减小，药液被大气压压上去',
    explanation: '快速推动活塞，管口处空气流速大、压强小。容器内液面上方受大气压作用，大于管口处的压强，药液被大气压压上去，随气流喷出。',
    hints: ['管口流速大时，压强怎么变？', '压强变小。', '容器内大气压大于管口压强，把药液压上去喷出。']
  },
  {
    id: 'pr_020', knowledge_node_id: 'pressure_fluid', chapter: '压强', section: '流体压强与流速',
    difficulty: 3, type: 'choice',
    content: '如图所示，将一根玻璃管插入水中，从管上端吹气，则管中水面会？',
    options: ['下降', '上升', '不变', '先升后降'],
    answer: '上升',
    explanation: '从管上端吹气，管口处空气流速增大，压强减小。管外水面受大气压作用，大于管内压强，水被压入管中，所以水面上升。',
    hints: ['吹气后，管口处压强怎么变？', '流速增大，压强减小。', '管外大气压大于管内压强，把水压入管中，水面上升。']
  }
];
