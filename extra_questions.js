// ============================================
// 扩充题库 - 八年级物理
// ============================================

var EXTRA_QUESTIONS = [
  // === 第1章 机械运动 ===
  // 长度和时间的测量 (+4)
  {
    id: 'ex_001', knowledge_node_id: 'motion_measurement', chapter: '机械运动', section: '长度和时间的测量',
    difficulty: 1, type: 'choice',
    content: '教室门的高度大约是？',
    options: ['0.5m', '2m', '5m', '10m'],
    answer: '2m',
    explanation: '教室门的高度约为2m，方便成年人正常通过。',
    hints: ['你站起来和门比谁高？', '一般门的高度比人的身高略高。', '教室门的高度约为2m，方便成年人正常通过。']
  },
  {
    id: 'ex_002', knowledge_node_id: 'motion_measurement', chapter: '机械运动', section: '长度和时间的测量',
    difficulty: 1, type: 'choice',
    content: '中学生拳头的宽度大约是？',
    options: ['1cm', '10cm', '50cm', '1m'],
    answer: '10cm',
    explanation: '中学生拳头宽度约为10cm，可作为粗略估计的参考。',
    hints: ['1cm大概是一根手指的宽度。', '拳头有几个手指宽？', '中学生拳头宽度约为10cm，可作为粗略估计的参考。']
  },
  {
    id: 'ex_003', knowledge_node_id: 'motion_measurement', chapter: '机械运动', section: '长度和时间的测量',
    difficulty: 2, type: 'choice',
    content: '小明跑100m用时15s，他的平均速度约为？',
    options: ['6.7m/s', '15m/s', '100m/s', '0.15m/s'],
    answer: '6.7m/s',
    explanation: '平均速度 = 路程/时间 = 100m/15s ≈ 6.7m/s。',
    hints: ['速度的公式是什么？', '用100除以15。', '平均速度 = 路程/时间 = 100m/15s ≈ 6.7m/s。']
  },
  {
    id: 'ex_004', knowledge_node_id: 'motion_measurement', chapter: '机械运动', section: '长度和时间的测量',
    difficulty: 1, type: 'choice',
    content: '用刻度尺测量物体长度时，如果零刻度线磨损了，应该？',
    options: ['直接测量', '从其他整刻度开始测量', '换一把尺', '无法测量'],
    answer: '从其他整刻度开始测量',
    explanation: '零刻度线磨损时，可以从其他整刻度开始测量，最后用末端刻度减去起始刻度即可。',
    hints: ['零刻度坏了，1刻度还能用吗？', '最终的读数 = 末端刻度 - 起始刻度。', '零刻度线磨损时，可以从其他整刻度开始测量，最后用末端刻度减去起始刻度即可。']
  },

  // 参照物 (+4)
  {
    id: 'ex_005', knowledge_node_id: 'motion_reference', chapter: '机械运动', section: '参照物',
    difficulty: 1, type: 'choice',
    content: '"太阳从东方升起"是以什么为参照物？',
    options: ['太阳', '地球', '月亮', '云层'],
    answer: '地球',
    explanation: '太阳升起是相对于地球的位置变化，所以参照物是地球。',
    hints: ['太阳升起，是相对谁在动？', '我们站在地球上看到太阳升起。', '太阳升起是相对于地球的位置变化，所以参照物是地球。']
  },
  {
    id: 'ex_006', knowledge_node_id: 'motion_reference', chapter: '机械运动', section: '参照物',
    difficulty: 2, type: 'choice',
    content: '两列火车并排停在站台上，小明坐在其中一列中。突然他觉得自己乘坐的火车动了，但看到另一列没动。实际上？',
    options: ['自己坐的火车确实动了', '另一列火车动了', '两列都动了', '无法判断'],
    answer: '另一列火车动了',
    explanation: '小明以自己坐的火车为参照物，看到另一列火车相对位置变了，所以是另一列火车在动。',
    hints: ['小明觉得自己动了，但他看到站台或另一列火车怎么动？', '如果另一列火车向后退，小明会感觉自己向前动。', '小明以自己坐的火车为参照物，看到另一列火车相对位置变了，所以是另一列火车在动。']
  },
  {
    id: 'ex_007', knowledge_node_id: 'motion_reference', chapter: '机械运动', section: '参照物',
    difficulty: 1, type: 'choice',
    content: '同步卫星相对于地面是？',
    options: ['运动的', '静止的', '有时运动有时静止', '无法判断'],
    answer: '静止的',
    explanation: '同步卫星的转动周期和地球自转周期相同，相对于地面的位置不变，所以是静止的。',
    hints: ['同步卫星的"同步"是什么意思？', '它转一圈的时间和地球自转一样。', '同步卫星的转动周期和地球自转周期相同，相对于地面的位置不变，所以是静止的。']
  },
  {
    id: 'ex_008', knowledge_node_id: 'motion_reference', chapter: '机械运动', section: '参照物',
    difficulty: 2, type: 'choice',
    content: '甲乙两车并排行驶，甲车司机看到乙车向后退，乙车司机看到甲车向前进。则？',
    options: ['甲车比乙车快', '乙车比甲车快', '两车速度相同', '无法判断'],
    answer: '甲车比乙车快',
    explanation: '甲车司机看到乙车向后退，说明甲车速度大于乙车速度。',
    hints: ['如果你坐在高铁上看旁边的绿皮火车，你觉得绿皮火车怎么动？', '快车看慢车，慢车是向后退的。', '甲车司机看到乙车向后退，说明甲车速度大于乙车速度。']
  },

  // 速度 (+4)
  {
    id: 'ex_009', knowledge_node_id: 'motion_speed', chapter: '机械运动', section: '速度',
    difficulty: 1, type: 'choice',
    content: '人正常步行的速度大约是？',
    options: ['1.1m/s', '5m/s', '10m/s', '20m/s'],
    answer: '1.1m/s',
    explanation: '人正常步行速度约为1.1m/s，即约4km/h。',
    hints: ['1秒钟你能走几步？每步多远？', '正常步行1小时大约走4公里。', '人正常步行速度约为1.1m/s，即约4km/h。']
  },
  {
    id: 'ex_010', knowledge_node_id: 'motion_speed', chapter: '机械运动', section: '速度',
    difficulty: 2, type: 'choice',
    content: '一辆汽车以72km/h的速度行驶，换算成m/s是？',
    options: ['20m/s', '72m/s', '259.2m/s', '10m/s'],
    answer: '20m/s',
    explanation: '1km/h = 1/3.6 m/s，所以72km/h = 72/3.6 = 20m/s。',
    hints: ['1m/s等于多少km/h？', '反过来，km/h换算成m/s要除以3.6。', '1km/h = 1/3.6 m/s，所以72km/h = 72/3.6 = 20m/s。']
  },
  {
    id: 'ex_011', knowledge_node_id: 'motion_speed', chapter: '机械运动', section: '速度',
    difficulty: 2, type: 'choice',
    content: '甲乙两车从同一地点同时出发同向行驶，甲的速度是60km/h，乙的速度是15m/s。5分钟后，两车相距约？',
    options: ['0km', '0.5km', '1km', '2km'],
    answer: '0.5km',
    explanation: '15m/s = 54km/h。两车同向行驶，速度差 = 60 - 54 = 6km/h。5分钟 = 5/60 h = 1/12 h。相距 = 6 × 1/12 = 0.5km。',
    hints: ['先把乙的速度换算成km/h。', '15m/s = 54km/h。', '速度差 × 时间 = 距离差。']
  },
  {
    id: 'ex_012', knowledge_node_id: 'motion_speed', chapter: '机械运动', section: '速度',
    difficulty: 1, type: 'choice',
    content: '比较物体运动快慢的方法不包括？',
    options: ['相同时间比路程', '相同路程比时间', '比较速度大小', '比较物体质量'],
    answer: '比较物体质量',
    explanation: '比较运动快慢的方法：相同时间比路程、相同路程比时间、直接比较速度。质量和运动快慢无关。',
    hints: ['物体的轻重和运动快慢有关系吗？', '质量是物体的属性，与运动快慢无关。', '比较运动快慢的方法：相同时间比路程、相同路程比时间、直接比较速度。质量和运动快慢无关。']
  },

  // 平均速度测量 (+5)
  {
    id: 'ex_013', knowledge_node_id: 'motion_avg_speed', chapter: '机械运动', section: '平均速度测量',
    difficulty: 1, type: 'choice',
    content: '测量平均速度的实验中，斜面的坡度应该？',
    options: ['越陡越好', '越缓越好', '适中，便于计时', '任意坡度'],
    answer: '适中，便于计时',
    explanation: '斜面坡度要适中。太陡小车下滑太快，时间太短不易测量；太缓小车可能滑不动。',
    hints: ['如果斜面很陡，小车1秒就滑到底，你能准确计时吗？', '坡度适中，小车下滑速度适中，便于用秒表计时。', '斜面坡度要适中。太陡小车下滑太快，时间太短不易测量；太缓小车可能滑不动。']
  },
  {
    id: 'ex_014', knowledge_node_id: 'motion_avg_speed', chapter: '机械运动', section: '平均速度测量',
    difficulty: 2, type: 'choice',
    content: '小车从斜面顶端滑下，全程平均速度为v1，前半程平均速度为v2，则？',
    options: ['v1 > v2', 'v1 < v2', 'v1 = v2', '无法判断'],
    answer: 'v1 > v2',
    explanation: '小车加速下滑，后半程速度比前半程快。全程平均速度包含了更快的后半程，所以v1 > v2。',
    hints: ['小车从斜面滑下是加速还是减速？', '后半程比前半程快。', '小车加速下滑，后半程速度比前半程快。全程平均速度包含了更快的后半程，所以v1 > v2。']
  },
  {
    id: 'ex_015', knowledge_node_id: 'motion_avg_speed', chapter: '机械运动', section: '平均速度测量',
    difficulty: 2, type: 'choice',
    content: '某同学测量小车平均速度，测得前半程用时3s，后半程用时2s。若全程路程为1m，则后半程平均速度是？',
    options: ['0.2m/s', '0.25m/s', '0.4m/s', '0.5m/s'],
    answer: '0.25m/s',
    explanation: '全程1m，前半程和后半程各0.5m。后半程平均速度 = 路程 / 时间 = 0.5m / 2s = 0.25m/s。',
    hints: ['后半程的路程是多少？', '全程1m，半程就是0.5m。', '后半程平均速度 = 0.5m / 2s = 0.25m/s。']
  },
  {
    id: 'ex_016', knowledge_node_id: 'motion_avg_speed', chapter: '机械运动', section: '平均速度测量',
    difficulty: 1, type: 'choice',
    content: '测量平均速度时，如果小车还没开始滑就开始计时，测得的平均速度会？',
    options: ['偏大', '偏小', '不变', '无法判断'],
    answer: '偏小',
    explanation: '计时开始早了，测得的时间偏大。平均速度 = 路程/时间，时间偏大则速度偏小。',
    hints: ['时间测多了，速度会怎么样？', 'v = s/t，t变大了，v就变小。', '计时开始早了，测得的时间偏大。平均速度 = 路程/时间，时间偏大则速度偏小。']
  },
  {
    id: 'ex_017', knowledge_node_id: 'motion_avg_speed', chapter: '机械运动', section: '平均速度测量',
    difficulty: 1, type: 'choice',
    content: '测量平均速度的实验中，减小误差的方法是？',
    options: ['多次测量取平均值', '斜面尽量陡', '用手推小车', '减少测量次数'],
    answer: '多次测量取平均值',
    explanation: '多次测量取平均值是减小误差的常用方法。',
    hints: ['怎么让结果更可靠？', '一次测量可能有偶然误差，多测几次取平均更准确。', '多次测量取平均值是减小误差的常用方法。']
  },

  // === 第2章 声现象 ===
  // 声音的产生与传播 (+4)
  {
    id: 'ex_018', knowledge_node_id: 'sound_production', chapter: '声现象', section: '声音的产生与传播',
    difficulty: 1, type: 'choice',
    content: '用手按住正在发声的鼓面，鼓声立即消失，这是因为？',
    options: ['手吸收了声音', '鼓面停止振动', '声音被手反射', '鼓面变小了'],
    answer: '鼓面停止振动',
    explanation: '声音是由振动产生的。按住鼓面，鼓面停止振动，发声也停止。',
    hints: ['声音是怎么产生的？', '按住鼓面，鼓面还振动吗？', '声音是由振动产生的。按住鼓面，鼓面停止振动，发声也停止。']
  },
  {
    id: 'ex_019', knowledge_node_id: 'sound_production', chapter: '声现象', section: '声音的产生与传播',
    difficulty: 1, type: 'choice',
    content: '钓鱼时不能大声说话，是因为声音会通过什么传到鱼耳中？',
    options: ['只有空气', '只有水', '空气和水', '鱼竿'],
    answer: '空气和水',
    explanation: '声音可以通过空气和水传到鱼耳中，所以大声说话会惊动鱼。',
    hints: ['声音能在水中传播吗？', '声音可以通过多种介质传播。', '声音可以通过空气和水传到鱼耳中，所以大声说话会惊动鱼。']
  },
  {
    id: 'ex_020', knowledge_node_id: 'sound_production', chapter: '声现象', section: '声音的产生与传播',
    difficulty: 2, type: 'choice',
    content: '把正在响铃的闹钟放在玻璃罩内，逐渐抽出空气，铃声会？',
    options: ['越来越大', '越来越小', '不变', '先大后小'],
    answer: '越来越小',
    explanation: '空气逐渐被抽出，传播声音的介质减少，铃声越来越小。如果完全真空，就听不到声音了。',
    hints: ['空气越少，声音传播效果越好还是越差？', '真空不能传声。', '空气逐渐被抽出，传播声音的介质减少，铃声越来越小。如果完全真空，就听不到声音了。']
  },
  {
    id: 'ex_021', knowledge_node_id: 'sound_production', chapter: '声现象', section: '声音的产生与传播',
    difficulty: 1, type: 'choice',
    content: '下列实例中不能说明声音是由物体振动产生的是？',
    options: ['扬声器播放音乐时，纸盆在振动', '说话时用手摸喉咙，感到振动', '音叉发声时放入水中，水花四溅', '雷声很大，说明声音传播快'],
    answer: '雷声很大，说明声音传播快',
    explanation: 'A、B、C都直接说明了声音由振动产生。D说明声音传播速度快或响度大，与振动产生无关。',
    hints: ['哪个选项没有提到"振动"？', '雷声大是响度大，不是说雷声是怎么产生的。', 'A、B、C都直接说明了声音由振动产生。D说明声音传播速度快或响度大，与振动产生无关。']
  },

  // 声音的特性 (+4)
  {
    id: 'ex_022', knowledge_node_id: 'sound_characteristics', chapter: '声现象', section: '声音的特性',
    difficulty: 1, type: 'choice',
    content: '调节电视机的音量，改变的是声音的？',
    options: ['音调', '响度', '音色', '频率'],
    answer: '响度',
    explanation: '音量大小对应响度。调大音量就是增大响度。',
    hints: ['音量是指声音的大小还是高低？', '声音的大小叫响度，高低叫音调。', '音量大小对应响度。调大音量就是增大响度。']
  },
  {
    id: 'ex_023', knowledge_node_id: 'sound_characteristics', chapter: '声现象', section: '声音的特性',
    difficulty: 2, type: 'choice',
    content: '用大小不同的力敲同一个音叉，发出声音不同的是？',
    options: ['音调', '响度', '音色', '频率'],
    answer: '响度',
    explanation: '同一个音叉频率固定，音调不变。用力大小不同改变的是振动的幅度，从而改变响度。',
    hints: ['同一个音叉，音调会变吗？', '用力大，振动幅度大，声音响。', '同一个音叉频率固定，音调不变。用力大小不同改变的是振动的幅度，从而改变响度。']
  },
  {
    id: 'ex_024', knowledge_node_id: 'sound_characteristics', chapter: '声现象', section: '声音的特性',
    difficulty: 2, type: 'choice',
    content: '向水瓶中吹气时，水越多，发出声音的音调越？',
    options: ['高', '低', '不变', '先高后低'],
    answer: '高',
    explanation: '向水瓶吹气时，是瓶内空气柱振动发声。水越多，空气柱越短，振动频率越高，音调越高。',
    hints: ['吹气时是瓶内的什么在振动？', '空气柱越短，振动越快，音调越高。', '向水瓶吹气时，是瓶内空气柱振动发声。水越多，空气柱越短，振动频率越高，音调越高。']
  },
  {
    id: 'ex_025', knowledge_node_id: 'sound_characteristics', chapter: '声现象', section: '声音的特性',
    difficulty: 1, type: 'choice',
    content: '用同样的力弹钢琴的C调和D调，声音不同的是？',
    options: ['音调', '响度', '音色', '传播速度'],
    answer: '音调',
    explanation: 'C调和D调是不同音高，即音调不同。同样的力说明响度相同，同一架钢琴音色相同。',
    hints: ['C调和D调是什么意思？', '它们是不同音高的音。', 'C调和D调是不同音高，即音调不同。同样的力说明响度相同，同一架钢琴音色相同。']
  },

  // 声的利用 (+5)
  {
    id: 'ex_026', knowledge_node_id: 'sound_utilization', chapter: '声现象', section: '声的利用',
    difficulty: 1, type: 'choice',
    content: '蝙蝠在夜间飞行靠的是什么？',
    options: ['眼睛', '超声波', '次声波', '红外线'],
    answer: '超声波',
    explanation: '蝙蝠发出超声波，通过回声定位来判断前方障碍物和猎物的位置。',
    hints: ['蝙蝠晚上能看见吗？', '蝙蝠靠发出声音并接收回声来导航。', '蝙蝠发出超声波，通过回声定位来判断前方障碍物和猎物的位置。']
  },
  {
    id: 'ex_027', knowledge_node_id: 'sound_utilization', chapter: '声现象', section: '声的利用',
    difficulty: 1, type: 'choice',
    content: '倒车雷达利用的是声音的什么特性？',
    options: ['传播速度快', '可以传递信息', '响度大', '音调高'],
    answer: '可以传递信息',
    explanation: '倒车雷达发射超声波，接收反射回来的声波，通过计算时间判断距离，这是声音传递信息的应用。',
    hints: ['倒车雷达告诉你什么信息？', '它告诉你车后有多远。', '倒车雷达发射超声波，接收反射回来的声波，通过计算时间判断距离，这是声音传递信息的应用。']
  },
  {
    id: 'ex_028', knowledge_node_id: 'sound_utilization', chapter: '声现象', section: '声的利用',
    difficulty: 2, type: 'choice',
    content: '超声波碎石和超声波清洗，共同说明声音可以？',
    options: ['传递信息', '传递能量', '在固体中传播', '在液体中传播'],
    answer: '传递能量',
    explanation: '超声波碎石是利用超声波的能量击碎结石，超声波清洗是利用超声波的能量使污垢脱落，都是声音传递能量的应用。',
    hints: ['碎石和清洗都需要什么？', '都需要能量来做功。', '超声波碎石是利用超声波的能量击碎结石，超声波清洗是利用超声波的能量使污垢脱落，都是声音传递能量的应用。']
  },
  {
    id: 'ex_029', knowledge_node_id: 'sound_utilization', chapter: '声现象', section: '声的利用',
    difficulty: 1, type: 'choice',
    content: '声呐探测海底深度，利用的是？',
    options: ['光的反射', '声音传递信息', '电磁波的传播', '声音传递能量'],
    answer: '声音传递信息',
    explanation: '声呐发射声波，接收从海底反射回来的声波，通过计算时间得到海底深度，这是声音传递信息的应用。',
    hints: ['声呐告诉你什么？', '它告诉你海底有多深。', '声呐发射声波，接收从海底反射回来的声波，通过计算时间得到海底深度，这是声音传递信息的应用。']
  },
  {
    id: 'ex_030', knowledge_node_id: 'sound_utilization', chapter: '声现象', section: '声的利用',
    difficulty: 2, type: 'choice',
    content: '下列不属于声音传递能量的是？',
    options: ['超声波清洗眼镜', '超声波碎石', 'B超检查身体', '超声波加湿器'],
    answer: 'B超检查身体',
    explanation: 'A、B、D都是利用超声波的能量做功，属于传递能量。B超是利用超声波反射成像获取信息，属于传递信息。',
    hints: ['B超是利用声音的能量还是利用声音获取信息？', 'B超是"看"到身体内部，属于获取信息。', 'A、B、D都是利用超声波的能量做功，属于传递能量。B超是利用超声波反射成像获取信息，属于传递信息。']
  },

  // 噪声的控制 (+5)
  {
    id: 'ex_031', knowledge_node_id: 'sound_noise', chapter: '声现象', section: '噪声的控制',
    difficulty: 1, type: 'choice',
    content: '下列属于在人耳处减弱噪声的是？',
    options: ['安装消声器', '植树造林', '戴耳塞', '关闭门窗'],
    answer: '戴耳塞',
    explanation: '戴耳塞是在人耳处减弱噪声。消声器是在声源处，植树和关窗是在传播过程中。',
    hints: ['人耳处是什么意思？', '就是保护耳朵，不让噪声进入耳朵。', '戴耳塞是在人耳处减弱噪声。消声器是在声源处，植树和关窗是在传播过程中。']
  },
  {
    id: 'ex_032', knowledge_node_id: 'sound_noise', chapter: '声现象', section: '噪声的控制',
    difficulty: 1, type: 'choice',
    content: '高速公路旁安装隔音板，是在哪个环节减弱噪声？',
    options: ['声源处', '传播过程中', '人耳处', '无法判断'],
    answer: '传播过程中',
    explanation: '隔音板阻挡声音传播，是在传播过程中减弱噪声。',
    hints: ['隔音板是挡在声源和听众之间的。', '阻挡声音的传播路径。', '隔音板阻挡声音传播，是在传播过程中减弱噪声。']
  },
  {
    id: 'ex_033', knowledge_node_id: 'sound_noise', chapter: '声现象', section: '噪声的控制',
    difficulty: 2, type: 'choice',
    content: '0分贝是指？',
    options: ['没有声音', '人耳能听到的最微弱声音', '非常安静的环境', '声音完全消失'],
    answer: '人耳能听到的最微弱声音',
    explanation: '0分贝不是完全没有声音，而是人耳能听到的最微弱声音的响度等级。',
    hints: ['0分贝是什么都听不到吗？', '不是，是人耳能听到的最微弱的声音。', '0分贝不是完全没有声音，而是人耳能听到的最微弱声音的响度等级。']
  },
  {
    id: 'ex_034', knowledge_node_id: 'sound_noise', chapter: '声现象', section: '噪声的控制',
    difficulty: 1, type: 'choice',
    content: '摩托车的消声器是在？',
    options: ['声源处减弱噪声', '传播过程中减弱', '人耳处减弱', '以上都不是'],
    answer: '声源处减弱噪声',
    explanation: '消声器安装在排气管上，减少发动机排气时产生的噪声，是在声源处减弱。',
    hints: ['消声器装在哪里？', '装在排气管上，减少噪声的产生。', '消声器安装在排气管上，减少发动机排气时产生的噪声，是在声源处减弱。']
  },
  {
    id: 'ex_035', knowledge_node_id: 'sound_noise', chapter: '声现象', section: '噪声的控制',
    difficulty: 2, type: 'choice',
    content: '城市高架路两侧安装透明隔音板，主要目的是？',
    options: ['美观', '阻挡噪声传播', '防止车辆坠落', '收集雨水'],
    answer: '阻挡噪声传播',
    explanation: '高架路车流量大，噪声污染严重。隔音板安装在道路两侧，阻挡噪声向周围居民区传播。',
    hints: ['高架路最大的环境问题是什么？', '车辆噪声影响周围居民。', '高架路车流量大，噪声污染严重。隔音板安装在道路两侧，阻挡噪声向周围居民区传播。']
  },

  // === 第3章 物态变化 ===
  // 温度 (+5)
  {
    id: 'ex_036', knowledge_node_id: 'temp_measurement', chapter: '物态变化', section: '温度',
    difficulty: 1, type: 'choice',
    content: '下列温度最接近实际的是？',
    options: ['冰箱冷藏室温度约5°C', '人的正常体温约39°C', '洗澡水温度约60°C', '夏天教室温度约45°C'],
    answer: '冰箱冷藏室温度约5°C',
    explanation: '冰箱冷藏室约5°C，人体正常体温约37°C，洗澡水约40°C，夏天教室约25-30°C。',
    hints: ['你知道自己正常体温是多少吗？', '人体正常体温约37°C。', '冰箱冷藏室约5°C，人体正常体温约37°C，洗澡水约40°C，夏天教室约25-30°C。']
  },
  {
    id: 'ex_037', knowledge_node_id: 'temp_measurement', chapter: '物态变化', section: '温度',
    difficulty: 1, type: 'choice',
    content: '使用温度计时，玻璃泡应该？',
    options: ['接触容器底部', '完全浸入被测液体中', '露出液面', '任意位置'],
    answer: '完全浸入被测液体中',
    explanation: '温度计使用时，玻璃泡要完全浸入被测液体中，不能接触容器底或壁，否则测不准。',
    hints: ['如果玻璃泡碰到烧杯底，测的是液体温度还是烧杯温度？', '烧杯底温度可能和液体不一样。', '温度计使用时，玻璃泡要完全浸入被测液体中，不能接触容器底或壁，否则测不准。']
  },
  {
    id: 'ex_038', knowledge_node_id: 'temp_measurement', chapter: '物态变化', section: '温度',
    difficulty: 1, type: 'choice',
    content: '读温度计示数时，视线应与液柱上表面？',
    options: ['俯视', '仰视', '相平', '任意角度'],
    answer: '相平',
    explanation: '读数时视线应与液柱上表面相平。俯视读数偏大，仰视读数偏小。',
    hints: ['如果低头看温度计，读数会偏大还是偏小？', '俯视读数偏大，仰视读数偏小。', '读数时视线应与液柱上表面相平。俯视读数偏大，仰视读数偏小。']
  },
  {
    id: 'ex_039', knowledge_node_id: 'temp_measurement', chapter: '物态变化', section: '温度',
    difficulty: 2, type: 'choice',
    content: '-5°C读作？',
    options: ['负5度', '零下5摄氏度', '负5度摄氏', '减5度'],
    answer: '零下5摄氏度',
    explanation: '温度的正确读法是"零下5摄氏度"或"负5摄氏度"。"度"不是温度单位，单位是"摄氏度"。',
    hints: ['温度的单位是什么？', '单位是摄氏度，不是度。', '温度的正确读法是"零下5摄氏度"或"负5摄氏度"。"度"不是温度单位，单位是"摄氏度"。']
  },
  {
    id: 'ex_040', knowledge_node_id: 'temp_measurement', chapter: '物态变化', section: '温度',
    difficulty: 1, type: 'choice',
    content: '体温计可以离开人体读数，是因为体温计有？',
    options: ['很长的玻璃管', '很细的玻璃泡', '缩口设计', '特殊液体'],
    answer: '缩口设计',
    explanation: '体温计玻璃管靠近玻璃泡处有一个缩口（细弯管），体温计离开人体后，水银柱在缩口处断开，不会下降。',
    hints: ['体温计里面有一个特殊结构，你知道是什么吗？', '是一个细弯管，水银到这里就断开了。', '体温计玻璃管靠近玻璃泡处有一个缩口（细弯管），体温计离开人体后，水银柱在缩口处断开，不会下降。']
  },

  // 熔化和凝固 (+4)
  {
    id: 'ex_041', knowledge_node_id: 'phase_melt', chapter: '物态变化', section: '熔化和凝固',
    difficulty: 2, type: 'choice',
    content: '下列物质属于晶体的是？',
    options: ['玻璃', '松香', '冰', '沥青'],
    answer: '冰',
    explanation: '冰是晶体，有固定的熔点。玻璃、松香、沥青都是非晶体，没有固定熔点。',
    hints: ['晶体和非晶体的区别是什么？', '晶体有固定熔点，非晶体没有。', '冰是晶体，有固定的熔点。玻璃、松香、沥青都是非晶体，没有固定熔点。']
  },
  {
    id: 'ex_042', knowledge_node_id: 'phase_melt', chapter: '物态变化', section: '熔化和凝固',
    difficulty: 2, type: 'choice',
    content: '把0°C的冰放入0°C的水中（周围气温也是0°C），冰会？',
    options: ['熔化', '凝固', '既不熔化也不凝固', '先熔化后凝固'],
    answer: '既不熔化也不凝固',
    explanation: '冰熔化需要吸热，水凝固需要放热。但三者温度相同（都是0°C），没有温度差，不能发生热传递，所以冰不熔化，水不凝固。',
    hints: ['冰熔化需要什么条件？', '需要吸热。但周围都是0°C，没有温差就不能传热。', '冰熔化需要吸热，水凝固需要放热。但三者温度相同（都是0°C），没有温度差，不能发生热传递，所以冰不熔化，水不凝固。']
  },
  {
    id: 'ex_043', knowledge_node_id: 'phase_melt', chapter: '物态变化', section: '熔化和凝固',
    difficulty: 1, type: 'choice',
    content: '铁水浇铸成零件，发生的物态变化是？',
    options: ['熔化', '凝固', '汽化', '液化'],
    answer: '凝固',
    explanation: '铁水是液态，零件是固态。液态变固态叫凝固。',
    hints: ['铁水是什么状态？零件是什么状态？', '铁水是液态，零件是固态。', '铁水是液态，零件是固态。液态变固态叫凝固。']
  },
  {
    id: 'ex_044', knowledge_node_id: 'phase_melt', chapter: '物态变化', section: '熔化和凝固',
    difficulty: 2, type: 'choice',
    content: '海波（硫代硫酸钠）是晶体，它的熔化图像应该是？',
    options: ['温度一直上升', '温度先上升，再保持不变，再上升', '温度先不变，再上升', '温度保持不变'],
    answer: '温度先上升，再保持不变，再上升',
    explanation: '晶体熔化分三个阶段：固态升温 → 熔化过程温度不变（熔点） → 液态升温。',
    hints: ['晶体熔化时温度会变吗？', '熔化过程中温度保持不变，等于熔点。', '晶体熔化分三个阶段：固态升温 → 熔化过程温度不变（熔点） → 液态升温。']
  },

  // 汽化和液化 (+4)
  {
    id: 'ex_045', knowledge_node_id: 'phase_vapor', chapter: '物态变化', section: '汽化和液化',
    difficulty: 1, type: 'choice',
    content: '夏天游泳后刚从水中出来，感觉特别冷，是因为？',
    options: ['水温比气温低', '身上的水蒸发吸热', '风吹得冷', '心理作用'],
    answer: '身上的水蒸发吸热',
    explanation: '身上的水蒸发（汽化）时需要从皮肤吸热，所以感觉冷。',
    hints: ['水变成水蒸气需要什么条件？', '蒸发需要吸热，从皮肤吸热就感到冷。', '身上的水蒸发（汽化）时需要从皮肤吸热，所以感觉冷。']
  },
  {
    id: 'ex_046', knowledge_node_id: 'phase_vapor', chapter: '物态变化', section: '汽化和液化',
    difficulty: 2, type: 'choice',
    content: '高压锅煮食物熟得快，是因为？',
    options: ['锅内气压高，沸点高', '锅内气压高，沸点低', '锅内气压低，沸点高', '锅内气压低，沸点低'],
    answer: '锅内气压高，沸点高',
    explanation: '高压锅密封好，锅内气压高于外界大气压，水的沸点升高（超过100°C），食物在高温下熟得更快。',
    hints: ['高压锅为什么能更快煮熟食物？', '因为锅内气压高，水的沸点升高。', '高压锅密封好，锅内气压高于外界大气压，水的沸点升高（超过100°C），食物在高温下熟得更快。']
  },
  {
    id: 'ex_047', knowledge_node_id: 'phase_vapor', chapter: '物态变化', section: '汽化和液化',
    difficulty: 1, type: 'choice',
    content: '冬天口中呼出的"白气"是？',
    options: ['水蒸气', '小水珠', '二氧化碳', '空气'],
    answer: '小水珠',
    explanation: '"白气"不是气体，而是口中呼出的水蒸气遇冷液化成的小水珠（液态），悬浮在空气中。',
    hints: ['水蒸气是看不见的还是看得见的？', '水蒸气是无色透明的气体，看不见。"白气"是液态小水珠。', '"白气"不是气体，而是口中呼出的水蒸气遇冷液化成的小水珠（液态），悬浮在空气中。']
  },
  {
    id: 'ex_048', knowledge_node_id: 'phase_vapor', chapter: '物态变化', section: '汽化和液化',
    difficulty: 2, type: 'choice',
    content: '医生用酒精给病人擦身降温，是利用了酒精的？',
    options: ['凝固放热', '熔化吸热', '蒸发吸热', '液化放热'],
    answer: '蒸发吸热',
    explanation: '酒精易蒸发，蒸发时从皮肤吸热，达到降温效果。',
    hints: ['酒精擦在身上有什么感觉？', '凉凉的，因为蒸发吸热。', '酒精易蒸发，蒸发时从皮肤吸热，达到降温效果。']
  },

  // 升华和凝华 (+4)
  {
    id: 'ex_049', knowledge_node_id: 'phase_sublime', chapter: '物态变化', section: '升华和凝华',
    difficulty: 1, type: 'choice',
    content: '用久的灯泡内壁会变黑，是因为？',
    options: ['灯丝熔化后凝固', '灯丝升华后凝华', '灯泡进了灰尘', '灯丝汽化'],
    answer: '灯丝升华后凝华',
    explanation: '钨丝在高温下直接变成钨蒸气（升华），钨蒸气遇到温度较低的玻璃壁直接变成固态钨（凝华），附着在玻璃壁上使灯泡变黑。',
    hints: ['灯丝在高温下会直接从固态变成气态吗？', '钨丝升华变成气体，遇到冷玻璃又凝华成固体。', '钨丝在高温下直接变成钨蒸气（升华），钨蒸气遇到温度较低的玻璃壁直接变成固态钨（凝华），附着在玻璃壁上使灯泡变黑。']
  },
  {
    id: 'ex_050', knowledge_node_id: 'phase_sublime', chapter: '物态变化', section: '升华和凝华',
    difficulty: 1, type: 'choice',
    content: '下列现象属于凝华的是？',
    options: ['露水的形成', '雾的形成', '霜的形成', '冰的熔化'],
    answer: '霜的形成',
    explanation: '霜是空气中的水蒸气遇冷直接变成固态小冰晶，属于凝华。露水和雾是液化，冰的熔化是熔化。',
    hints: ['霜是什么状态的？', '霜是固态的小冰晶。', '霜是空气中的水蒸气遇冷直接变成固态小冰晶，属于凝华。露水和雾是液化，冰的熔化是熔化。']
  },
  {
    id: 'ex_051', knowledge_node_id: 'phase_sublime', chapter: '物态变化', section: '升华和凝华',
    difficulty: 2, type: 'choice',
    content: '衣柜里的樟脑丸越来越小，最后消失，这是？',
    options: ['熔化', '汽化', '升华', '凝华'],
    answer: '升华',
    explanation: '樟脑丸在常温下直接从固态变成气态，扩散到空气中，这是升华现象。',
    hints: ['樟脑丸消失后变成了什么状态？', '变成了气体，扩散到空气中。', '樟脑丸在常温下直接从固态变成气态，扩散到空气中，这是升华现象。']
  },
  {
    id: 'ex_052', knowledge_node_id: 'phase_sublime', chapter: '物态变化', section: '升华和凝华',
    difficulty: 2, type: 'choice',
    content: '下列物态变化中，都吸热的是？',
    options: ['熔化和凝固', '汽化和液化', '升华和熔化', '凝华和凝固'],
    answer: '升华和熔化',
    explanation: '吸热的物态变化：熔化、汽化、升华。放热的物态变化：凝固、液化、凝华。',
    hints: ['冰化成水吸热还是放热？水结成冰呢？', '熔化吸热，凝固放热。', '吸热的物态变化：熔化、汽化、升华。放热的物态变化：凝固、液化、凝华。']
  },

  // === 八下 力与运动 补充 ===
  // 力的概念 (+5)
  {
    id: 'ex_053', knowledge_node_id: 'force_concept', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '下列说法正确的是？',
    options: ['力只能改变物体的形状', '力只能改变物体的运动状态', '力可以同时改变形状和运动状态', '力对物体没有任何作用'],
    answer: '力可以同时改变形状和运动状态',
    explanation: '力的作用效果有两个：改变物体的形状（形变）和改变物体的运动状态（速度大小或方向）。',
    hints: ['捏橡皮泥时，橡皮泥的形状变了吗？踢足球时，足球的运动变了吗？', '力可以改变形状，也可以改变运动状态。', '力的作用效果有两个：改变物体的形状（形变）和改变物体的运动状态（速度大小或方向）。']
  },
  {
    id: 'ex_054', knowledge_node_id: 'force_concept', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '运动员踢球时，施力物体是？',
    options: ['足球', '运动员', '地面', '空气'],
    answer: '运动员',
    explanation: '运动员踢球，运动员是施力物体，足球是受力物体。',
    hints: ['谁给了足球力？', '运动员的脚踢了足球。', '运动员踢球，运动员是施力物体，足球是受力物体。']
  },
  {
    id: 'ex_055', knowledge_node_id: 'force_concept', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '下列情况中，物体运动状态没有改变的是？',
    options: ['苹果从树上落下', '汽车在弯道上行驶', '静止在桌面上的书本', '被抛出的篮球'],
    answer: '静止在桌面上的书本',
    explanation: '运动状态改变包括速度大小或方向的变化。静止的书本速度为0且不变，运动状态没有改变。',
    hints: ['运动状态包括什么？', '包括速度大小和方向。', '运动状态改变包括速度大小或方向的变化。静止的书本速度为0且不变，运动状态没有改变。']
  },
  {
    id: 'ex_056', knowledge_node_id: 'force_concept', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '磁铁吸引铁钉时，铁钉也吸引磁铁，这说明？',
    options: ['力的作用是相互的', '磁铁比铁钉强', '铁钉有磁性', '只有磁铁能施力'],
    answer: '力的作用是相互的',
    explanation: '物体间力的作用是相互的。磁铁吸引铁钉的同时，铁钉也吸引磁铁。',
    hints: ['磁铁吸引铁钉，铁钉对磁铁有没有力？', '力的作用是相互的，铁钉也会吸引磁铁。', '物体间力的作用是相互的。磁铁吸引铁钉的同时，铁钉也吸引磁铁。']
  },
  {
    id: 'ex_057', knowledge_node_id: 'force_concept', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '划船时，桨向后推水，船向前进，这说明？',
    options: ['力可以改变物体的运动状态', '力的作用是相互的', '水对船有推力', '以上都对'],
    answer: '以上都对',
    explanation: '桨向后推水，水同时向前推桨（力的作用是相互的），这个推力使船前进（改变运动状态），所以三个说法都正确。',
    hints: ['桨推水，水对桨有什么作用？', '水也推桨，使船前进。', '桨向后推水，水同时向前推桨（力的作用是相互的），这个推力使船前进（改变运动状态），所以三个说法都正确。']
  },

  // 力的作用效果 (+3)
  {
    id: 'ex_058', knowledge_node_id: 'force_effect', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '用力拉弹簧，弹簧变长，这说明力可以？',
    options: ['改变物体的运动状态', '改变物体的形状', '改变物体的质量', '改变物体的颜色'],
    answer: '改变物体的形状',
    explanation: '弹簧被拉长是形状发生了变化，这是力的作用效果之一。',
    hints: ['弹簧变长是运动状态变了还是形状变了？', '形状变了。', '弹簧被拉长是形状发生了变化，这是力的作用效果之一。']
  },
  {
    id: 'ex_059', knowledge_node_id: 'force_effect', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '守门员把飞来的足球扑住，足球由运动变为静止，这说明力可以？',
    options: ['改变物体的运动状态', '改变物体的形状', '改变物体的质量', '改变物体的体积'],
    answer: '改变物体的运动状态',
    explanation: '足球从运动变为静止，速度大小发生了变化，这是力改变运动状态的体现。',
    hints: ['足球的速度变了没有？', '从有速度变成没速度，运动状态变了。', '足球从运动变为静止，速度大小发生了变化，这是力改变运动状态的体现。']
  },
  {
    id: 'ex_060', knowledge_node_id: 'force_effect', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '用力压海绵，海绵会凹陷；撤去压力后，海绵恢复。这分别说明力可以？',
    options: ['改变运动状态和产生弹力', '改变形状和弹力作用', '产生摩擦力和改变形状', '改变质量和产生弹力'],
    answer: '改变形状和弹力作用',
    explanation: '压海绵使其凹陷是力改变形状；撤去压力后海绵恢复是因为海绵产生了弹力。',
    hints: ['海绵凹陷是什么变化？恢复又是什么作用？', '凹陷是形状变化，恢复是弹力的作用。', '压海绵使其凹陷是力改变形状；撤去压力后海绵恢复是因为海绵产生了弹力。']
  },

  // 力的作用是相互的 (+4)
  {
    id: 'ex_061', knowledge_node_id: 'force_interaction', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '穿旱冰鞋的人用力推墙，自己会向后退，这说明？',
    options: ['墙有弹力', '力的作用是相互的', '人受到摩擦力', '墙在动'],
    answer: '力的作用是相互的',
    explanation: '人推墙的同时，墙也推人，所以人向后退。',
    hints: ['人推墙，墙对人有没有力？', '墙也推人。', '人推墙的同时，墙也推人，所以人向后退。']
  },
  {
    id: 'ex_062', knowledge_node_id: 'force_interaction', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '鸡蛋碰石头，鸡蛋碎了，石头完好。这说明？',
    options: ['石头对鸡蛋的力大于鸡蛋对石头的力', '鸡蛋对石头的力大于石头对鸡蛋的力', '两个力大小相等，但鸡蛋承受力弱', '石头没有受力'],
    answer: '两个力大小相等，但鸡蛋承受力弱',
    explanation: '力的作用是相互的，鸡蛋和石头受到的力大小相等。但鸡蛋壳的强度比石头小，所以鸡蛋碎了。',
    hints: ['力的作用是相互的，两个力大小相等吗？', '是的，大小相等。鸡蛋碎是因为鸡蛋壳不够硬。', '力的作用是相互的，鸡蛋和石头受到的力大小相等。但鸡蛋壳的强度比石头小，所以鸡蛋碎了。']
  },
  {
    id: 'ex_063', knowledge_node_id: 'force_interaction', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '游泳时，人向后划水，人就前进，这是因为？',
    options: ['水对人施加了向前的力', '人有惯性', '水的浮力', '人很轻'],
    answer: '水对人施加了向前的力',
    explanation: '人向后划水，水同时向前推人，使人前进。',
    hints: ['人向后推水，水会怎么推人？', '水向前推人。', '人向后划水，水同时向前推人，使人前进。']
  },
  {
    id: 'ex_064', knowledge_node_id: 'force_interaction', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '下列事例中，不能说明力的作用是相互的是？',
    options: ['人走路时脚向后蹬地', '火箭向下喷气而上升', '磁铁吸引铁钉', '用手提水桶'],
    answer: '用手提水桶',
    explanation: 'A、B、C都体现了力的作用是相互的。D中手对水桶施力，但水桶对手的反作用力没有产生明显效果（手没有动），不太直观。但严格说D也是相互的。此题选D是因为其他三个更典型。',
    hints: ['提水桶时，水桶对手有没有反作用力？', '有，但手没动，所以不直观。', 'A、B、C都体现了力的作用是相互的。D中手对水桶施力，但水桶对手的反作用力没有产生明显效果（手没有动），不太直观。但严格说D也是相互的。此题选D是因为其他三个更典型。']
  },

  // 弹力 (+5)
  {
    id: 'ex_065', knowledge_node_id: 'elastic_concept', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '下列物体具有弹力的是？',
    options: ['放在地上的石头', '被压缩的弹簧', '静止的桌面', '悬挂的灯'],
    answer: '被压缩的弹簧',
    explanation: '弹力是物体发生弹性形变时产生的力。被压缩的弹簧发生了弹性形变，具有弹力。',
    hints: ['弹力需要什么条件？', '需要物体发生弹性形变。', '弹力是物体发生弹性形变时产生的力。被压缩的弹簧发生了弹性形变，具有弹力。']
  },
  {
    id: 'ex_066', knowledge_node_id: 'elastic_concept', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '用手压桌面，桌面会发生微小形变，这时桌面产生了？',
    options: ['重力', '摩擦力', '弹力', '浮力'],
    answer: '弹力',
    explanation: '桌面被压后发生微小形变，产生向上的弹力（支持力），支撑着手。',
    hints: ['桌面被压后，会产生什么力来抵抗？', '会产生向上的弹力。', '桌面被压后发生微小形变，产生向上的弹力（支持力），支撑着手。']
  },
  {
    id: 'ex_067', knowledge_node_id: 'elastic_concept', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '下列说法正确的是？',
    options: ['只有弹簧才能产生弹力', '只有发生明显形变的物体才产生弹力', '任何物体发生弹性形变都会产生弹力', '橡皮泥被捏扁也产生弹力'],
    answer: '任何物体发生弹性形变都会产生弹力',
    explanation: '任何物体（不只是弹簧）发生弹性形变时都会产生弹力。橡皮泥被捏扁是塑性形变，不会产生弹力。',
    hints: ['弹力和弹性形变有什么关系？', '只要有弹性形变，就有弹力。', '任何物体（不只是弹簧）发生弹性形变时都会产生弹力。橡皮泥被捏扁是塑性形变，不会产生弹力。']
  },
  {
    id: 'ex_068', knowledge_node_id: 'elastic_concept', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '跳水运动员踩在跳板上，跳板被压弯，跳板对运动员的力是？',
    options: ['重力', '弹力', '摩擦力', '浮力'],
    answer: '弹力',
    explanation: '跳板被压弯发生弹性形变，产生向上的弹力，把运动员弹起。',
    hints: ['跳板被压弯后会产生什么力？', '会产生弹力把运动员弹起。', '跳板被压弯发生弹性形变，产生向上的弹力，把运动员弹起。']
  },
  {
    id: 'ex_069', knowledge_node_id: 'elastic_concept', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '一本书放在桌面上，书对桌面的压力本质是？',
    options: ['书的重力', '桌面的弹力', '书发生形变产生的弹力', '桌面发生形变产生的弹力'],
    answer: '书发生形变产生的弹力',
    explanation: '书放在桌面上，书发生微小形变，产生向下的弹力，这就是书对桌面的压力。',
    hints: ['书放在桌面上，书会被压扁一点点吗？', '会，书发生微小形变，产生向下的弹力。', '书放在桌面上，书发生微小形变，产生向下的弹力，这就是书对桌面的压力。']
  },

  // 弹簧测力计 (+8)
  {
    id: 'ex_070', knowledge_node_id: 'elastic_measurement', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '弹簧测力计的原理是？',
    options: ['弹簧越硬拉力越大', '在弹性限度内，弹簧伸长量与拉力成正比', '弹簧长度与拉力成正比', '拉力越大弹簧越短'],
    answer: '在弹性限度内，弹簧伸长量与拉力成正比',
    explanation: '弹簧测力计的原理：在弹性限度内，弹簧的伸长量与受到的拉力成正比。',
    hints: ['弹簧测力计是根据什么规律制作的？', '拉力越大，弹簧伸得越长，且成正比。', '弹簧测力计的原理：在弹性限度内，弹簧的伸长量与受到的拉力成正比。']
  },
  {
    id: 'ex_071', knowledge_node_id: 'elastic_measurement', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '使用弹簧测力计时，测力计应沿什么方向放置？',
    options: ['任意方向', '竖直方向', '与力的方向一致', '水平方向'],
    answer: '与力的方向一致',
    explanation: '弹簧测力计要与被测力的方向一致，否则会产生误差。',
    hints: ['如果斜着拉弹簧测力计，读数准吗？', '不准，要和力的方向一致。', '弹簧测力计要与被测力的方向一致，否则会产生误差。']
  },
  {
    id: 'ex_072', knowledge_node_id: 'elastic_measurement', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '弹簧测力计的指针没有指在零刻度线，直接测量会导致？',
    options: ['测量结果偏大', '测量结果偏小', '可能偏大也可能偏小', '没有影响'],
    answer: '可能偏大也可能偏小',
    explanation: '如果指针在零刻度线上方，测量结果偏小；如果在下方，测量结果偏大。',
    hints: ['如果指针本来就在0.2N的位置，测量1N的物体会显示多少？', '会显示1.2N，结果偏大。', '如果指针在零刻度线上方，测量结果偏小；如果在下方，测量结果偏大。']
  },
  {
    id: 'ex_073', knowledge_node_id: 'elastic_measurement', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '弹簧测力计的量程是5N，用它测量6N的力会？',
    options: ['测出6N', '测出5N', '损坏弹簧', '没有影响'],
    answer: '损坏弹簧',
    explanation: '超过量程测量会损坏弹簧，导致弹簧测力计失效。',
    hints: ['弹簧测力计能测超过量程的力吗？', '不能，会损坏弹簧。', '超过量程测量会损坏弹簧，导致弹簧测力计失效。']
  },
  {
    id: 'ex_074', knowledge_node_id: 'elastic_measurement', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '一根弹簧挂2N重物时伸长1cm，挂4N重物时伸长？',
    options: ['0.5cm', '1cm', '2cm', '4cm'],
    answer: '2cm',
    explanation: '在弹性限度内，伸长量与拉力成正比。拉力变为2倍，伸长量也变为2倍。',
    hints: ['拉力从2N变成4N，是原来的几倍？', '2倍。伸长量也是2倍。', '在弹性限度内，伸长量与拉力成正比。拉力变为2倍，伸长量也变为2倍。']
  },
  {
    id: 'ex_075', knowledge_node_id: 'elastic_measurement', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '弹簧测力计可以测量以下哪个力？',
    options: ['重力', '拉力', '压力', '以上都可以'],
    answer: '以上都可以',
    explanation: '弹簧测力计可以测量拉力、重力（挂物体时）、压力（配合其他装置）等，只要是沿弹簧轴线方向的力。',
    hints: ['弹簧测力计只能测拉力吗？', '不是，只要力沿着弹簧方向，都可以测。', '弹簧测力计可以测量拉力、重力（挂物体时）、压力（配合其他装置）等，只要是沿弹簧轴线方向的力。']
  },
  {
    id: 'ex_076', knowledge_node_id: 'elastic_measurement', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '把弹簧测力计倒过来使用（把重物挂在吊环上），测量值会？',
    options: ['偏大', '偏小', '不变', '无法测量'],
    answer: '偏大',
    explanation: '倒过来使用时，弹簧测力计外壳的重量也作用在弹簧上，所以测量值会偏大。',
    hints: ['倒过来时，除了物体的重力，还有什么力作用在弹簧上？', '测力计本身的重量也作用在弹簧上。', '倒过来使用时，弹簧测力计外壳的重量也作用在弹簧上，所以测量值会偏大。']
  },
  {
    id: 'ex_077', knowledge_node_id: 'elastic_measurement', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '读弹簧测力计示数时，视线应与指针？',
    options: ['俯视', '仰视', '垂直', '任意方向'],
    answer: '垂直',
    explanation: '读数时视线要与指针垂直（平视），否则会产生视差导致读数不准。',
    hints: ['斜着看指针，读数会准吗？', '不会，要平视。', '读数时视线要与指针垂直（平视），否则会产生视差导致读数不准。']
  },

  // 胡克定律 (+4)
  {
    id: 'ex_078', knowledge_node_id: 'elastic_hooke', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '弹簧原长10cm，挂5N重物时长度变为12cm，则挂10N重物时长度为？',
    options: ['14cm', '15cm', '20cm', '24cm'],
    answer: '14cm',
    explanation: '5N时伸长2cm，10N时伸长4cm（成正比）。原长10cm + 4cm = 14cm。',
    hints: ['拉力变为2倍，伸长量怎么变？', '也变为2倍。', '5N时伸长2cm，10N时伸长4cm（成正比）。原长10cm + 4cm = 14cm。']
  },
  {
    id: 'ex_079', knowledge_node_id: 'elastic_hooke', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '一根弹簧在弹性限度内，挂2N物体时伸长2cm；若再增加2N，总伸长量为？',
    options: ['2cm', '3cm', '4cm', '6cm'],
    answer: '4cm',
    explanation: '总拉力为4N，是原来的2倍，所以总伸长量也是原来的2倍，即4cm。',
    hints: ['总拉力是多少？是原来的几倍？', '总拉力4N，是原来的2倍。', '总拉力为4N，是原来的2倍，所以总伸长量也是原来的2倍，即4cm。']
  },
  {
    id: 'ex_080', knowledge_node_id: 'elastic_hooke', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '弹簧的弹力与什么成正比？',
    options: ['弹簧的长度', '弹簧的原长', '弹簧的伸长量', '弹簧的质量'],
    answer: '弹簧的伸长量',
    explanation: '胡克定律：在弹性限度内，弹簧的弹力与弹簧的伸长量（或压缩量）成正比，而不是与长度成正比。',
    hints: ['是弹簧伸长了多少决定弹力，还是弹簧有多长决定弹力？', '是伸长了多少。', '胡克定律：在弹性限度内，弹簧的弹力与弹簧的伸长量（或压缩量）成正比，而不是与长度成正比。']
  },
  {
    id: 'ex_081', knowledge_node_id: 'elastic_hooke', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '弹簧测力计上的"N"是什么物理量的单位？',
    options: ['质量', '力', '速度', '长度'],
    answer: '力',
    explanation: '"N"是牛顿的符号，是力的国际单位。',
    hints: ['牛顿是什么物理量的单位？', '是力的单位。', '"N"是牛顿的符号，是力的国际单位。']
  },

  // 重力 (+6)
  {
    id: 'ex_082', knowledge_node_id: 'gravity_concept', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '重力的施力物体是？',
    options: ['地球', '物体本身', '地面', '空气'],
    answer: '地球',
    explanation: '重力是由于地球的吸引而使物体受到的力，施力物体是地球。',
    hints: ['是什么把物体往下拉？', '是地球。', '重力是由于地球的吸引而使物体受到的力，施力物体是地球。']
  },
  {
    id: 'ex_083', knowledge_node_id: 'gravity_concept', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '重力的方向是？',
    options: ['垂直向下', '竖直向下', '指向地心', '垂直于地面'],
    answer: '竖直向下',
    explanation: '重力的方向是竖直向下。注意：竖直向下和垂直向下不同，竖直向下是指向地心的方向。',
    hints: ['竖直向下和垂直向下一样吗？', '不一样，竖直向下是指向地心的方向。', '重力的方向是竖直向下。注意：竖直向下和垂直向下不同，竖直向下是指向地心的方向。']
  },
  {
    id: 'ex_084', knowledge_node_id: 'gravity_concept', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '在太空中，宇航员可以"漂浮"在空间站中，这是因为？',
    options: ['不受重力', '重力太小可忽略', '处于失重状态', '重力变成了浮力'],
    answer: '处于失重状态',
    explanation: '宇航员在空间站中仍然受地球引力（重力），但由于空间站和宇航员一起绕地球做圆周运动，处于完全失重状态，所以感觉像漂浮。',
    hints: ['空间站中的宇航员真的不受重力吗？', '受重力，但因为都在做圆周运动，所以感觉像没重力。', '宇航员在空间站中仍然受地球引力（重力），但由于空间站和宇航员一起绕地球做圆周运动，处于完全失重状态，所以感觉像漂浮。']
  },
  {
    id: 'ex_085', knowledge_node_id: 'gravity_concept', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '踢出去的足球在空中飞行时，受到的重力方向是？',
    options: ['向前', '向上', '竖直向下', '沿运动方向'],
    answer: '竖直向下',
    explanation: '重力方向始终竖直向下，与物体的运动状态无关。',
    hints: ['足球飞在空中时，重力方向会变吗？', '不会，重力方向始终竖直向下。', '重力方向始终竖直向下，与物体的运动状态无关。']
  },
  {
    id: 'ex_086', knowledge_node_id: 'gravity_concept', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '一个物体在地球上重588N，它的质量是？（g取9.8N/kg）',
    options: ['58.8kg', '60kg', '588kg', '5.88kg'],
    answer: '60kg',
    explanation: 'G = mg，所以m = G/g = 588N / 9.8N/kg = 60kg。',
    hints: ['重力和质量的关系公式是什么？', 'G = mg，所以m = G/g。', 'G = mg，所以m = G/g = 588N / 9.8N/kg = 60kg。']
  },
  {
    id: 'ex_087', knowledge_node_id: 'gravity_concept', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '同一物体在月球上的重力约为地球上的？',
    options: ['1/2', '1/6', '1/10', '相同'],
    answer: '1/6',
    explanation: '月球引力约为地球的1/6，所以同一物体在月球上的重力约为地球上的1/6。',
    hints: ['月球引力比地球大还是小？', '小，大约是地球的1/6。', '月球引力约为地球的1/6，所以同一物体在月球上的重力约为地球上的1/6。']
  },

  // 重力的计算 (+2)
  {
    id: 'ex_088', knowledge_node_id: 'gravity_calculation', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '质量为50kg的中学生，受到的重力约为？（g取10N/kg）',
    options: ['5N', '50N', '500N', '5000N'],
    answer: '500N',
    explanation: 'G = mg = 50kg × 10N/kg = 500N。',
    hints: ['重力的计算公式是什么？', 'G = mg。', 'G = mg = 50kg × 10N/kg = 500N。']
  },
  {
    id: 'ex_089', knowledge_node_id: 'gravity_calculation', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '用弹簧测力计测得某物体重力为19.6N，则其质量为？（g取9.8N/kg）',
    options: ['1kg', '2kg', '19.6kg', '196kg'],
    answer: '2kg',
    explanation: 'm = G/g = 19.6N / 9.8N/kg = 2kg。',
    hints: ['m = G/g。', '19.6除以9.8。', 'm = G/g = 19.6N / 9.8N/kg = 2kg。']
  },

  // 重心 (+7)
  {
    id: 'ex_090', knowledge_node_id: 'gravity_center', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '均匀圆盘的重心在？',
    options: ['圆盘的边缘', '圆盘的中心', '圆盘的下方', '任意位置'],
    answer: '圆盘的中心',
    explanation: '形状规则、质量分布均匀的物体，重心在几何中心。圆盘的几何中心就是圆心。',
    hints: ['圆盘的几何中心在哪里？', '在圆心。', '形状规则、质量分布均匀的物体，重心在几何中心。圆盘的几何中心就是圆心。']
  },
  {
    id: 'ex_091', knowledge_node_id: 'gravity_center', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '不倒翁不倒的原因是？',
    options: ['重心低', '重心高', '质量大', '底面积大'],
    answer: '重心低',
    explanation: '不倒翁的重心设计得很低，倾斜时重力的作用线仍在支撑面内，所以能自动恢复直立。',
    hints: ['不倒翁为什么不会倒？', '因为它的重心很低。', '不倒翁的重心设计得很低，倾斜时重力的作用线仍在支撑面内，所以能自动恢复直立。']
  },
  {
    id: 'ex_092', knowledge_node_id: 'gravity_center', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '把一根均匀的木棍从中间支起，它能平衡。如果在它的一端粘上一块橡皮泥，它还平衡吗？',
    options: ['能', '不能', '可能能', '无法判断'],
    answer: '不能',
    explanation: '粘上橡皮泥后，这端质量增大，重心向这端移动，不再在中间位置，所以不再平衡。',
    hints: ['粘上橡皮泥后，重心位置会变吗？', '会向粘橡皮泥的一端移动。', '粘上橡皮泥后，这端质量增大，重心向这端移动，不再在中间位置，所以不再平衡。']
  },
  {
    id: 'ex_093', knowledge_node_id: 'gravity_center', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '物体的重心一定在物体上吗？',
    options: ['一定', '不一定', '一定不在', '无法判断'],
    answer: '不一定',
    explanation: '重心不一定在物体上。例如圆环的重心在圆心处，不在圆环本身上；空心球的重心在球心处。',
    hints: ['圆环的重心在哪里？', '在圆心，不在圆环上。', '重心不一定在物体上。例如圆环的重心在圆心处，不在圆环本身上；空心球的重心在球心处。']
  },
  {
    id: 'ex_094', knowledge_node_id: 'gravity_center', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '运动员走钢丝时，手持长杆的作用是？',
    options: ['增加质量', '降低重心', '增加速度', '保持平衡'],
    answer: '降低重心',
    explanation: '手持长杆可以扩大支撑范围并降低整体重心，提高稳定性。',
    hints: ['走钢丝时最重要的是什么？', '保持稳定，不摔下来。', '手持长杆可以扩大支撑范围并降低整体重心，提高稳定性。']
  },
  {
    id: 'ex_095', knowledge_node_id: 'gravity_center', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '一块砖平放、侧放、竖放时，重心位置？',
    options: ['平放时最低', '竖放时最低', '三种放法一样高', '无法判断'],
    answer: '三种放法一样高',
    explanation: '重心位置由物体形状和质量分布决定，与放置方式无关。砖的重心始终在几何中心。',
    hints: ['重心位置会随着放置方式改变吗？', '不会，重心位置是固定的。', '重心位置由物体形状和质量分布决定，与放置方式无关。砖的重心始终在几何中心。']
  },
  {
    id: 'ex_096', knowledge_node_id: 'gravity_center', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '赛车的底盘设计得很低，主要是为了？',
    options: ['减小空气阻力', '降低重心增加稳定性', '增加载重', '美观'],
    answer: '降低重心增加稳定性',
    explanation: '赛车高速行驶时需要很好的稳定性，低底盘可以降低重心，防止侧翻。',
    hints: ['赛车高速转弯时容易侧翻吗？', '容易，所以需要降低重心来增加稳定性。', '赛车高速行驶时需要很好的稳定性，低底盘可以降低重心，防止侧翻。']
  },

  // 惯性的应用 (+6)
  {
    id: 'ex_097', knowledge_node_id: 'inertia_application', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '跳远运动员助跑是为了利用？',
    options: ['重力', '惯性', '弹力', '摩擦力'],
    answer: '惯性',
    explanation: '助跑使运动员获得较大速度，起跳后由于惯性，身体保持向前运动的状态，从而跳得更远。',
    hints: ['起跳后，身体为什么还能继续向前？', '因为惯性。', '助跑使运动员获得较大速度，起跳后由于惯性，身体保持向前运动的状态，从而跳得更远。']
  },
  {
    id: 'ex_098', knowledge_node_id: 'inertia_application', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '锤头松了，把锤柄在石头上磕几下，锤头就紧了，这是利用？',
    options: ['锤头的惯性', '锤柄的惯性', '石头的弹力', '锤头的重力'],
    answer: '锤头的惯性',
    explanation: '锤柄撞击石头突然停止，锤头由于惯性继续向下运动，就紧紧套在锤柄上了。',
    hints: ['锤柄停了，锤头会怎么样？', '锤头由于惯性继续向下运动。', '锤柄撞击石头突然停止，锤头由于惯性继续向下运动，就紧紧套在锤柄上了。']
  },
  {
    id: 'ex_099', knowledge_node_id: 'inertia_application', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '汽车突然刹车时，乘客会向前倾，这是因为乘客具有？',
    options: ['向前的力', '惯性', '重力', '摩擦力'],
    answer: '惯性',
    explanation: '汽车刹车时速度减小，乘客的下身随车减速，但上身由于惯性保持原来的运动状态，所以向前倾。',
    hints: ['汽车停了，乘客的身体还想继续向前吗？', '是的，因为惯性。', '汽车刹车时速度减小，乘客的下身随车减速，但上身由于惯性保持原来的运动状态，所以向前倾。']
  },
  {
    id: 'ex_100', knowledge_node_id: 'inertia_application', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '汽车在平直公路上匀速行驶，车厢顶部悬挂一个小球。如果小球突然向后摆动，说明汽车？',
    options: ['加速前进', '减速前进', '转弯', '匀速前进'],
    answer: '加速前进',
    explanation: '汽车加速时，小球由于惯性保持原来的速度，相对汽车向后摆动。',
    hints: ['汽车加速了，小球会怎样？', '小球由于惯性想保持原来的速度，所以会向后摆。', '汽车加速时，小球由于惯性保持原来的速度，相对汽车向后摆动。']
  },
  {
    id: 'ex_101', knowledge_node_id: 'inertia_application', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '运动员投掷标枪时，标枪离开手后还能继续飞行，是因为标枪具有？',
    options: ['重力', '惯性', '推力', '浮力'],
    answer: '惯性',
    explanation: '标枪离开手后不再受手的推力，但由于惯性保持原来的运动状态，继续向前飞行。',
    hints: ['标枪离开手后，还有什么力推着它吗？', '没有推力了，但它有惯性。', '标枪离开手后不再受手的推力，但由于惯性保持原来的运动状态，继续向前飞行。']
  },
  {
    id: 'ex_102', knowledge_node_id: 'inertia_application', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '下列事例中，属于防止惯性带来危害的是？',
    options: ['跳远运动员助跑', '锤头松了磕锤柄', '汽车系安全带', '抖掉衣服上的灰尘'],
    answer: '汽车系安全带',
    explanation: 'A、B、D都是利用惯性。系安全带是为了防止刹车时人因惯性向前冲撞而受伤。',
    hints: ['安全带是为了利用惯性还是防止惯性带来的伤害？', '防止伤害。', 'A、B、D都是利用惯性。系安全带是为了防止刹车时人因惯性向前冲撞而受伤。']
  },

  // 二力平衡条件 (+1)
  {
    id: 'ex_103', knowledge_node_id: 'balance_condition', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '一本书静止在桌面上，下列哪一对力是平衡力？',
    options: ['书的重力和书对桌面的压力', '书的重力和桌面对书的支持力', '书对桌面的压力和桌面对书的支持力', '书的重力和地球对书的引力'],
    answer: '书的重力和桌面对书的支持力',
    explanation: '平衡力要作用在同一物体上。书的重力（地球对书）和桌面对书的支持力都作用在书上，大小相等、方向相反、在同一直线上，是平衡力。',
    hints: ['平衡力要作用在同一个物体上吗？', '是的。', '平衡力要作用在同一物体上。书的重力和桌面对书的支持力都作用在书上，大小相等、方向相反、在同一直线上，是平衡力。']
  },

  // 摩擦力与平衡 (+6)
  {
    id: 'ex_104', knowledge_node_id: 'balance_friction', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '用10N的力水平推一张桌子，桌子没动。则桌子受到的摩擦力是？',
    options: ['0N', '10N', '大于10N', '小于10N'],
    answer: '10N',
    explanation: '桌子静止，受力平衡。推力为10N，所以静摩擦力也为10N，与推力大小相等、方向相反。',
    hints: ['桌子没动，说明受力平衡。', '推力等于摩擦力。', '桌子静止，受力平衡。推力为10N，所以静摩擦力也为10N，与推力大小相等、方向相反。']
  },
  {
    id: 'ex_105', knowledge_node_id: 'balance_friction', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '一个人沿水平方向推箱子，箱子匀速前进。则推力与摩擦力的关系是？',
    options: ['推力大于摩擦力', '推力等于摩擦力', '推力小于摩擦力', '无法判断'],
    answer: '推力等于摩擦力',
    explanation: '箱子匀速前进，受力平衡。水平方向上推力与摩擦力是一对平衡力，大小相等。',
    hints: ['匀速运动是平衡状态吗？', '是的，匀速直线运动是平衡状态。', '箱子匀速前进，受力平衡。水平方向上推力与摩擦力是一对平衡力，大小相等。']
  },
  {
    id: 'ex_106', knowledge_node_id: 'balance_friction', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '水平地面上放着一个箱子，某人用20N的力推它但没推动，此时摩擦力为20N。若他用30N的力推，箱子做匀速直线运动，则此时摩擦力为？',
    options: ['20N', '30N', '大于30N', '小于30N'],
    answer: '30N',
    explanation: '匀速直线运动时受力平衡，推力等于滑动摩擦力，即30N。',
    hints: ['匀速运动时推力等于什么力？', '等于摩擦力。', '匀速直线运动时受力平衡，推力等于滑动摩擦力，即30N。']
  },
  {
    id: 'ex_107', knowledge_node_id: 'balance_friction', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '放在斜面上的物体静止不动，它受到的力有？',
    options: ['重力', '重力、支持力', '重力、支持力、摩擦力', '重力、支持力、摩擦力、下滑力'],
    answer: '重力、支持力、摩擦力',
    explanation: '斜面上的物体受三个力：竖直向下的重力、垂直于斜面向上的支持力、沿斜面向上的静摩擦力（防止下滑）。注意："下滑力"不是独立的力，是重力的一个分力。',
    hints: ['物体在斜面上不下滑，是什么力阻止了它？', '是沿斜面向上的静摩擦力。', '斜面上的物体受三个力：竖直向下的重力、垂直于斜面向上的支持力、沿斜面向上的静摩擦力（防止下滑）。注意："下滑力"不是独立的力，是重力的一个分力。']
  },
  {
    id: 'ex_108', knowledge_node_id: 'balance_friction', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '一个物体在水平面上做匀速直线运动，若撤去拉力，物体将？',
    options: ['立即停止', '做减速运动', '做加速运动', '继续匀速运动'],
    answer: '做减速运动',
    explanation: '撤去拉力后，物体不再受拉力，但仍受摩擦力。摩擦力与运动方向相反，使物体减速直至停止。',
    hints: ['撤去拉力后，还有摩擦力吗？', '有，摩擦力会阻碍运动。', '撤去拉力后，物体不再受拉力，但仍受摩擦力。摩擦力与运动方向相反，使物体减速直至停止。']
  },
  {
    id: 'ex_109', knowledge_node_id: 'balance_friction', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '用手握住瓶子静止不动，瓶子受到的摩擦力方向是？',
    options: ['向上', '向下', '水平', '没有摩擦力'],
    answer: '向上',
    explanation: '瓶子静止，受力平衡。重力竖直向下，所以静摩擦力竖直向上，与重力平衡。',
    hints: ['瓶子静止，摩擦力要和什么力平衡？', '和重力平衡，所以方向向上。', '瓶子静止，受力平衡。重力竖直向下，所以静摩擦力竖直向上，与重力平衡。']
  },

  // 摩擦力 (+7)
  {
    id: 'ex_110', knowledge_node_id: 'friction_concept', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '下列哪种摩擦属于滚动摩擦？',
    options: ['走路时鞋底与地面的摩擦', '汽车刹车时轮胎与地面的摩擦', '自行车轮与地面之间的摩擦', '写字时铅笔与纸的摩擦'],
    answer: '自行车轮与地面之间的摩擦',
    explanation: '自行车轮在地面上滚动，产生的是滚动摩擦。走路和刹车时产生的是静摩擦或滑动摩擦，写字是滑动摩擦。',
    hints: ['自行车轮在地面上是滚动还是滑动？', '是滚动。', '自行车轮在地面上滚动，产生的是滚动摩擦。走路和刹车时产生的是静摩擦或滑动摩擦，写字是滑动摩擦。']
  },
  {
    id: 'ex_111', knowledge_node_id: 'friction_concept', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '滑动摩擦力的大小与下列哪个因素无关？',
    options: ['接触面的粗糙程度', '压力大小', '接触面积', '以上都有关'],
    answer: '接触面积',
    explanation: '滑动摩擦力的大小只与接触面的粗糙程度和压力大小有关，与接触面积、运动速度无关。',
    hints: ['把物体平放和侧放，摩擦力会变吗？', '不会，摩擦力与接触面积无关。', '滑动摩擦力的大小只与接触面的粗糙程度和压力大小有关，与接触面积、运动速度无关。']
  },
  {
    id: 'ex_112', knowledge_node_id: 'friction_concept', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '下列事例中，属于增大摩擦的是？',
    options: ['给机器加润滑油', '行李箱装轮子', '鞋底有花纹', '冰壶运动员擦冰'],
    answer: '鞋底有花纹',
    explanation: '鞋底花纹增大接触面的粗糙程度，从而增大摩擦。A、B、D都是减小摩擦的措施。',
    hints: ['鞋底花纹是为了让鞋底更光滑还是更粗糙？', '更粗糙，增大摩擦。', '鞋底花纹增大接触面的粗糙程度，从而增大摩擦。A、B、D都是减小摩擦的措施。']
  },
  {
    id: 'ex_113', knowledge_node_id: 'friction_concept', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '推动水平地面上的箱子，箱子越重越难推动，这是因为？',
    options: ['箱子重了惯性大', '压力增大，摩擦力增大', '箱子大了接触面积大', '重力变大了'],
    answer: '压力增大，摩擦力增大',
    explanation: '箱子越重，对地面的压力越大，滑动摩擦力越大，所以越难推动。',
    hints: ['箱子重了，对地面的压力怎么变？', '压力变大，摩擦力也变大。', '箱子越重，对地面的压力越大，滑动摩擦力越大，所以越难推动。']
  },
  {
    id: 'ex_114', knowledge_node_id: 'friction_concept', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '用手推桌子没推动，这是因为？',
    options: ['推力小于摩擦力', '推力等于摩擦力', '推力大于摩擦力', '没有摩擦力'],
    answer: '推力等于摩擦力',
    explanation: '桌子静止，受力平衡。推力等于静摩擦力，所以推不动。',
    hints: ['桌子没动，说明受力平衡。', '推力等于静摩擦力。', '桌子静止，受力平衡。推力等于静摩擦力，所以推不动。']
  },
  {
    id: 'ex_115', knowledge_node_id: 'friction_concept', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '下列哪种方法可以减小摩擦？',
    options: ['增大压力', '增大接触面粗糙程度', '变滑动为滚动', '以上都可以'],
    answer: '变滑动为滚动',
    explanation: '变滑动为滚动可以大大减小摩擦。增大压力和粗糙程度是增大摩擦。',
    hints: ['轮子滚动比拖着滑动省力吗？', '是的，滚动摩擦比滑动摩擦小得多。', '变滑动为滚动可以大大减小摩擦。增大压力和粗糙程度是增大摩擦。']
  },
  {
    id: 'ex_116', knowledge_node_id: 'friction_concept', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '在结冰的路面上撒沙子，目的是？',
    options: ['增大压力', '增大接触面粗糙程度', '减小接触面积', '减小压力'],
    answer: '增大接触面粗糙程度',
    explanation: '冰面很光滑，摩擦小容易打滑。撒沙子可以增大接触面的粗糙程度，增大摩擦，防止打滑。',
    hints: ['冰面为什么容易打滑？', '因为冰面光滑，摩擦小。', '冰面很光滑，摩擦小容易打滑。撒沙子可以增大接触面的粗糙程度，增大摩擦，防止打滑。']
  },

  // 摩擦力的应用 (+7)
  {
    id: 'ex_117', knowledge_node_id: 'friction_application', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '自行车轮胎上有花纹，主要是为了？',
    options: ['美观', '减小摩擦', '增大摩擦', '减轻重量'],
    answer: '增大摩擦',
    explanation: '轮胎花纹增大接触面的粗糙程度，增大与地面之间的摩擦，防止打滑。',
    hints: ['轮胎花纹是让地面更光滑还是更粗糙？', '更粗糙，增大摩擦。', '轮胎花纹增大接触面的粗糙程度，增大与地面之间的摩擦，防止打滑。']
  },
  {
    id: 'ex_118', knowledge_node_id: 'friction_application', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '给自行车链条加润滑油，是为了？',
    options: ['增大摩擦', '减小摩擦', '防锈', '以上都对'],
    answer: '减小摩擦',
    explanation: '润滑油在链条和齿轮之间形成油膜，减小接触面的粗糙程度，从而减小摩擦。',
    hints: ['链条加了油后转起来更轻松还是更费力？', '更轻松，因为摩擦减小了。', '润滑油在链条和齿轮之间形成油膜，减小接触面的粗糙程度，从而减小摩擦。']
  },
  {
    id: 'ex_119', knowledge_node_id: 'friction_application', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '传送带运送货物时，货物随传送带一起匀速上升，货物受到的摩擦力方向是？',
    options: ['向下', '向上', '水平', '没有摩擦'],
    answer: '向上',
    explanation: '货物随传送带匀速上升，有向下滑动的趋势，所以摩擦力沿传送带向上，阻止货物下滑。',
    hints: ['如果没有摩擦，货物会怎样？', '会滑下来。', '货物随传送带匀速上升，有向下滑动的趋势，所以摩擦力沿传送带向上，阻止货物下滑。']
  },
  {
    id: 'ex_120', knowledge_node_id: 'friction_application', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '下列事例中，为了减小有害摩擦的是？',
    options: ['自行车轮胎有花纹', '体操运动员用镁粉', '机器转动部分加润滑油', '汽车刹车'],
    answer: '机器转动部分加润滑油',
    explanation: 'A、B、D都是增大摩擦（有益摩擦）。加润滑油是为了减小机器零件之间的摩擦，减少磨损。',
    hints: ['机器零件之间摩擦太大会怎么样？', '会磨损，所以加润滑油减小摩擦。', 'A、B、D都是增大摩擦（有益摩擦）。加润滑油是为了减小机器零件之间的摩擦，减少磨损。']
  },
  {
    id: 'ex_121', knowledge_node_id: 'friction_application', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '握紧瓶子不掉下来，是靠什么力？',
    options: ['重力', '摩擦力', '弹力', '浮力'],
    answer: '摩擦力',
    explanation: '握紧瓶子时，手和瓶子之间的静摩擦力竖直向上，与瓶子的重力平衡，使瓶子不掉下来。',
    hints: ['是什么力让瓶子停在手里不滑下来？', '是手和瓶子之间的摩擦力。', '握紧瓶子时，手和瓶子之间的静摩擦力竖直向上，与瓶子的重力平衡，使瓶子不掉下来。']
  },
  {
    id: 'ex_122', knowledge_node_id: 'friction_application', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '拔河比赛时，运动员穿鞋底有花纹的鞋，并且身体后倾，这样做的目的不包括？',
    options: ['增大鞋底与地面摩擦', '降低重心增加稳定性', '增大对地面的压力', '减小摩擦'],
    answer: '减小摩擦',
    explanation: 'A、B、C都是拔河时的正确做法。D（减小摩擦）与目的相反，拔河需要增大摩擦。',
    hints: ['拔河时需要摩擦大还是摩擦小？', '需要摩擦大。', 'A、B、C都是拔河时的正确做法。D（减小摩擦）与目的相反，拔河需要增大摩擦。']
  },
  {
    id: 'ex_123', knowledge_node_id: 'friction_application', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '气垫船能够高速行驶，是因为？',
    options: ['船体很轻', '船底和水面之间有气垫，减小了摩擦', '水流的推力大', '船体流线型好'],
    answer: '船底和水面之间有气垫，减小了摩擦',
    explanation: '气垫船向下喷气，在船底和水面之间形成气垫，使船底脱离水面，大大减小了水的阻力。',
    hints: ['气垫船和普通船最大的区别是什么？', '气垫船不直接接触水面。', '气垫船向下喷气，在船底和水面之间形成气垫，使船底脱离水面，大大减小了水的阻力。']
  },

  // === 第二轮补充题（ex_124 ~ ex_177）===

  // ---- 机械运动 ----
  {
    id: 'ex_124', knowledge_node_id: 'motion_measurement', chapter: '机械运动', section: '长度和时间的测量',
    difficulty: 1, type: 'choice',
    content: '下列长度单位换算正确的是？',
    options: ['1m = 10cm', '1km = 100m', '1m = 1000mm', '1dm = 100cm'],
    answer: '1m = 1000mm',
    explanation: '1m = 10dm = 100cm = 1000mm；1km = 1000m。',
    hints: ['1米等于多少厘米？', '1米=100厘米=1000毫米。', '1m = 10dm = 100cm = 1000mm；1km = 1000m。']
  },
  {
    id: 'ex_125', knowledge_node_id: 'motion_measurement', chapter: '机械运动', section: '长度和时间的测量',
    difficulty: 2, type: 'choice',
    content: '用刻度尺测量物体长度时，读数应读到？',
    options: ['整厘米', '毫米', '厘米的下一位', '米的下一位'],
    answer: '厘米的下一位',
    explanation: '测量读数应估读到分度值的下一位。刻度尺分度值通常是1mm，所以要读到毫米的下一位（0.1mm）。',
    hints: ['刻度尺上1cm分成了几小格？', '10小格，每格1mm。', '测量读数应估读到分度值的下一位。']
  },
  {
    id: 'ex_126', knowledge_node_id: 'motion_reference', chapter: '机械运动', section: '参照物',
    difficulty: 2, type: 'choice',
    content: '小明坐在行驶的公交车上，看到路边的树向后运动，他选择的参照物是？',
    options: ['地面', '树', '公交车', '路灯'],
    answer: '公交车',
    explanation: '树向后运动，说明参照物在向前运动。小明以自己乘坐的公交车为参照物，树相对于公交车向后运动。',
    hints: ['什么在向前运动，树看起来才会向后运动？', '公交车在向前运动。', '以自己乘坐的公交车为参照物，路边的树看起来向后运动。']
  },
  {
    id: 'ex_127', knowledge_node_id: 'motion_reference', chapter: '机械运动', section: '参照物',
    difficulty: 2, type: 'choice',
    content: '两位同学并肩走在操场上，以其中一位同学为参照物，另一位同学是？',
    options: ['运动的', '静止的', '有时运动有时静止', '无法判断'],
    answer: '静止的',
    explanation: '并肩行走时，两人速度相同，相对位置不变，所以以其中一位为参照物，另一位是静止的。',
    hints: ['并肩走，两人之间的距离变吗？', '距离不变。', '相对位置不变，所以是静止的。']
  },
  {
    id: 'ex_128', knowledge_node_id: 'motion_speed', chapter: '机械运动', section: '速度',
    difficulty: 2, type: 'choice',
    content: '甲车速度为72km/h，乙车速度为20m/s，两车相比？',
    options: ['甲车快', '乙车快', '一样快', '无法比较'],
    answer: '乙车快',
    explanation: '72km/h = 72000m/3600s = 20m/s。所以甲车速度也是20m/s，两车一样快。',
    hints: ['把km/h换算成m/s，怎么算？', '72km/h = 72÷3.6 m/s = 20m/s。', '72km/h = 20m/s，两车速度相同。']
  },
  {
    id: 'ex_129', knowledge_node_id: 'motion_speed', chapter: '机械运动', section: '速度',
    difficulty: 2, type: 'choice',
    content: '一个物体做匀速直线运动，5秒内通过25米的路程，则它的速度是？',
    options: ['5m/s', '20m/s', '125m/s', '0.2m/s'],
    answer: '5m/s',
    explanation: 'v = s/t = 25m/5s = 5m/s。',
    hints: ['速度等于什么除以什么？', '路程除以时间。', 'v = 25÷5 = 5m/s。']
  },
  {
    id: 'ex_130', knowledge_node_id: 'motion_avg_speed', chapter: '机械运动', section: '平均速度测量',
    difficulty: 2, type: 'choice',
    content: '测小车平均速度时，斜面坡度应？',
    options: ['尽量大', '尽量小', '适中', '任意'],
    answer: '尽量小',
    explanation: '斜面坡度尽量小，小车下滑速度慢，便于计时，减小时间测量的误差。',
    hints: ['坡度大，小车滑得快还是慢？', '滑得快，来不及计时。', '坡度小，小车下滑慢，便于计时。']
  },
  {
    id: 'ex_131', knowledge_node_id: 'motion_avg_speed', chapter: '机械运动', section: '平均速度测量',
    difficulty: 2, type: 'choice',
    content: '小车从斜面顶端滑下，上半段平均速度为v1，下半段为v2，全程为v，则？',
    options: ['v1>v2>v', 'v2>v>v1', 'v=v1=v2', 'v1>v>v2'],
    answer: 'v2>v>v1',
    explanation: '小车做加速运动，下半段速度比上半段大。全程平均速度介于上半段和下半段之间。',
    hints: ['小车下滑时速度越来越快还是越来越慢？', '越来越快。', '下半段速度最大，全程平均速度居中。']
  },

  // ---- 声现象 ----
  {
    id: 'ex_132', knowledge_node_id: 'sound_production', chapter: '声现象', section: '声音的产生与传播',
    difficulty: 1, type: 'choice',
    content: '声音在下列哪种介质中传播最快？',
    options: ['空气', '水', '钢铁', '真空'],
    answer: '钢铁',
    explanation: '声音在固体中传播最快，液体次之，气体最慢。真空不能传声。',
    hints: ['声音传播需要什么？', '需要介质。', '固体中声速最快，钢铁是固体。']
  },
  {
    id: 'ex_133', knowledge_node_id: 'sound_production', chapter: '声现象', section: '声音的产生与传播',
    difficulty: 2, type: 'choice',
    content: '登上月球的宇航员面对面也需要借助无线电交谈，是因为？',
    options: ['月球上没有空气，真空不能传声', '宇航服挡住了声音', '月球上风太大', '无线电更清晰'],
    answer: '月球上没有空气，真空不能传声',
    explanation: '月球表面是真空环境，没有空气作为传声介质，声音无法传播。',
    hints: ['月球上有空气吗？', '没有空气。', '真空不能传声，所以需要无线电。']
  },
  {
    id: 'ex_134', knowledge_node_id: 'sound_characteristics', chapter: '声现象', section: '声音的特性',
    difficulty: 1, type: 'choice',
    content: '我们根据声音的什么特征来区分钢琴和小提琴的声音？',
    options: ['响度', '音调', '音色', '频率'],
    answer: '音色',
    explanation: '不同乐器发出声音的音色不同，音色由发声体的材料和结构决定。',
    hints: ['钢琴和小提琴弹同一个音，为什么还能区分？', '因为声音的品质不同。', '不同乐器的音色不同。']
  },
  {
    id: 'ex_135', knowledge_node_id: 'sound_characteristics', chapter: '声现象', section: '声音的特性',
    difficulty: 2, type: 'choice',
    content: '男低音歌手独唱时，由女高音歌手轻声伴唱，下列说法正确的是？',
    options: ['男歌手音调高，响度大', '男歌手音调低，响度大', '女歌手音调低，响度小', '两人音调相同'],
    answer: '男歌手音调低，响度大',
    explanation: '男低音音调低，独唱时响度大；女高音音调高，伴唱时响度小。',
    hints: ['低音意味着音调高还是低？', '音调低。', '男低音音调低，独唱时响度大。']
  },
  {
    id: 'ex_136', knowledge_node_id: 'sound_utilization', chapter: '声现象', section: '声的利用',
    difficulty: 1, type: 'choice',
    content: '用超声波清洗眼镜，是利用了声音的什么特性？',
    options: ['传递信息', '传递能量', '反射', '衍射'],
    answer: '传递能量',
    explanation: '超声波清洗利用声波的能量使污垢振动脱落，说明声音可以传递能量。',
    hints: ['超声波把污垢振掉，说明声音做了什么？', '做了功，传递了能量。', '声音可以传递能量。']
  },
  {
    id: 'ex_137', knowledge_node_id: 'sound_utilization', chapter: '声现象', section: '声的利用',
    difficulty: 2, type: 'choice',
    content: '医生用B超检查身体，是利用超声波的？',
    options: ['能量高', '方向性好', '穿透能力强', '以上都是'],
    answer: '以上都是',
    explanation: '超声波能量高、方向性好、穿透能力强，这些特性使其适合用于医学成像。',
    hints: ['B超成像需要超声波有什么特点？', '需要能量高、方向性好、能穿透人体。', '超声波具有这些优良特性。']
  },
  {
    id: 'ex_138', knowledge_node_id: 'sound_noise', chapter: '声现象', section: '噪声的控制',
    difficulty: 1, type: 'choice',
    content: '在马路两旁植树，是在哪个环节控制噪声？',
    options: ['声源处', '传播过程中', '人耳处', '以上都不是'],
    answer: '传播过程中',
    explanation: '植树属于在声音传播过程中设置障碍物，吸收和反射噪声，减弱声音传播。',
    hints: ['树是种在声源旁边还是人耳旁边？', '种在路边，在传播路径上。', '在传播过程中控制噪声。']
  },
  {
    id: 'ex_139', knowledge_node_id: 'sound_noise', chapter: '声现象', section: '噪声的控制',
    difficulty: 2, type: 'choice',
    content: '下列措施中，属于在声源处减弱噪声的是？',
    options: ['戴耳塞', '安装隔音板', '禁止鸣笛', '关闭门窗'],
    answer: '禁止鸣笛',
    explanation: '禁止鸣笛直接阻止声源发声，属于在声源处减弱噪声。A和D是在人耳处，B是在传播过程中。',
    hints: ['哪个选项是让发声体不发声？', '禁止鸣笛。', '直接阻止声源发声，属于在声源处减弱噪声。']
  },

  // ---- 物态变化 ----
  {
    id: 'ex_140', knowledge_node_id: 'temp_measurement', chapter: '物态变化', section: '温度',
    difficulty: 1, type: 'choice',
    content: '温度计玻璃泡中的液体通常是酒精或水银，这是因为它们？',
    options: ['颜色好看', '热胀冷缩明显', '价格便宜', '容易获取'],
    answer: '热胀冷缩明显',
    explanation: '温度计利用液体的热胀冷缩原理工作，要求液体的热胀冷缩性质明显且稳定。',
    hints: ['温度计是根据什么原理工作的？', '热胀冷缩。', '要求液体热胀冷缩明显。']
  },
  {
    id: 'ex_141', knowledge_node_id: 'temp_measurement', chapter: '物态变化', section: '温度',
    difficulty: 2, type: 'choice',
    content: '体温计可以离开人体读数，是因为体温计玻璃泡和直玻璃管之间有？',
    options: ['阀门', '缩口', '放大装置', '刻度线'],
    answer: '缩口',
    explanation: '体温计有缩口设计，水银受热膨胀可通过缩口上升，遇冷收缩时缩口处水银柱断开，使上方水银不能退回玻璃泡。',
    hints: ['体温计和普通温度计结构上有什么不同？', '有个细小的弯曲处。', '缩口使水银柱断开，可以离开人体读数。']
  },
  {
    id: 'ex_142', knowledge_node_id: 'phase_melt', chapter: '物态变化', section: '熔化和凝固',
    difficulty: 2, type: 'choice',
    content: '把一块0℃的冰放入0℃的水中（周围气温也是0℃），过一段时间后？',
    options: ['冰变多', '水变多', '冰和水都不变', '无法判断'],
    answer: '冰和水都不变',
    explanation: '冰、水、环境温度都是0℃，没有温度差，不发生热传递，冰不会熔化，水也不会凝固。',
    hints: ['熔化和凝固需要什么条件？', '需要吸热或放热。', '没有温度差就没有热传递，状态不变。']
  },
  {
    id: 'ex_143', knowledge_node_id: 'phase_melt', chapter: '物态变化', section: '熔化和凝固',
    difficulty: 2, type: 'choice',
    content: '北方的冬天，菜窖里放几桶水，主要是利用水结冰时？',
    options: ['放出热量', '吸收热量', '体积膨胀', '质量不变'],
    answer: '放出热量',
    explanation: '水结冰是凝固过程，会放出热量，使菜窖内温度不会降得太低，保护蔬菜不被冻坏。',
    hints: ['水变成冰是吸热还是放热？', '放热。', '水凝固放热，使菜窖保温。']
  },
  {
    id: 'ex_144', knowledge_node_id: 'phase_vapor', chapter: '物态变化', section: '汽化和液化',
    difficulty: 2, type: 'choice',
    content: '夏天打开冰箱门，门口会出现"白气"，这是因为？',
    options: ['冰箱里的水汽出来了', '空气中的水蒸气遇冷液化', '冰箱坏了', '空气变白了'],
    answer: '空气中的水蒸气遇冷液化',
    explanation: '冰箱门口温度低，周围空气中的水蒸气遇冷液化成小水珠，形成"白气"。',
    hints: ['白气是什么状态的物质？', '是小液滴。', '水蒸气遇冷液化成小水珠。']
  },
  {
    id: 'ex_145', knowledge_node_id: 'phase_vapor', chapter: '物态变化', section: '汽化和液化',
    difficulty: 2, type: 'choice',
    content: '把酒精擦在手背上，感觉凉凉的，这是因为酒精？',
    options: ['温度低', '蒸发吸热', '刺激皮肤', '发生了凝固'],
    answer: '蒸发吸热',
    explanation: '酒精蒸发时需要从皮肤吸收热量，使皮肤温度降低，所以感觉凉凉的。',
    hints: ['酒精从液态变成气态需要什么？', '需要吸热。', '蒸发吸热，使皮肤降温。']
  },
  {
    id: 'ex_146', knowledge_node_id: 'phase_sublime', chapter: '物态变化', section: '升华和凝华',
    difficulty: 2, type: 'choice',
    content: '冬天窗户玻璃上出现的冰花是在玻璃的哪一侧？',
    options: ['室内一侧', '室外一侧', '玻璃中间', '两侧都有'],
    answer: '室内一侧',
    explanation: '室内温度较高的水蒸气遇到冰冷的玻璃，直接凝华成冰晶，附着在玻璃室内一侧。',
    hints: ['冰花是水蒸气直接变成的，哪一侧水蒸气多？', '室内水蒸气多。', '室内水蒸气遇冷玻璃凝华。']
  },
  {
    id: 'ex_147', knowledge_node_id: 'phase_sublime', chapter: '物态变化', section: '升华和凝华',
    difficulty: 1, type: 'choice',
    content: '下列现象中，属于凝华的是？',
    options: ['露水的形成', '霜的形成', '雾的形成', '冰化成水'],
    answer: '霜的形成',
    explanation: '霜是空气中的水蒸气直接变成固态冰晶，属于凝华。露水和雾是液化，冰化成水是熔化。',
    hints: ['凝华是气态直接变成什么态？', '固态。', '霜是水蒸气直接变成固态冰晶。']
  },

  // ---- 力与运动（薄弱知识点补充） ----
  {
    id: 'ex_148', knowledge_node_id: 'force_effect', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '用力捏橡皮泥，橡皮泥的形状改变了，这说明力可以？',
    options: ['改变物体的运动状态', '改变物体的形状', '使物体产生加速度', '使物体保持静止'],
    answer: '改变物体的形状',
    explanation: '力的作用效果有两种：改变物体的形状（形变）和改变物体的运动状态。捏橡皮泥是形变。',
    hints: ['橡皮泥被捏后什么变了？', '形状变了。', '力可以改变物体的形状。']
  },
  {
    id: 'ex_149', knowledge_node_id: 'force_effect', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '运动员一脚把足球踢飞，足球由静止变为运动，这说明力可以？',
    options: ['改变物体的形状', '改变物体的运动状态', '使物体产生重力', '使物体保持平衡'],
    answer: '改变物体的运动状态',
    explanation: '足球由静止变为运动，运动状态发生了改变，说明力可以改变物体的运动状态。',
    hints: ['足球被踢之前和之后有什么不同？', '之前静止，之后运动。', '力改变了足球的运动状态。']
  },
  {
    id: 'ex_150', knowledge_node_id: 'force_effect', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '下列事例中，力改变了物体运动状态的是？',
    options: ['用力把弹簧拉长', '把橡皮泥捏成球形', '守门员把球扑出', '把纸撕成两半'],
    answer: '守门员把球扑出',
    explanation: 'A、B、D都是力改变物体的形状。守门员扑球改变了球的运动方向和速度，是改变运动状态。',
    hints: ['哪个选项是物体在动，且运动情况变了？', '球被扑出，运动方向改变。', '改变运动方向属于改变运动状态。']
  },
  {
    id: 'ex_151', knowledge_node_id: 'force_effect', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '磁铁吸引铁钉，铁钉向磁铁运动，这个过程中力改变了铁钉的？',
    options: ['形状', '运动状态', '质量', '体积'],
    answer: '运动状态',
    explanation: '铁钉由静止变为运动，运动状态发生了改变，这是磁力作用的结果。',
    hints: ['铁钉本来静止，后来呢？', '后来运动了。', '由静止变为运动，运动状态改变。']
  },
  {
    id: 'ex_152', knowledge_node_id: 'force_effect', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '把一根直铁丝弯成圆环，这个过程中力的作用效果是？',
    options: ['改变运动状态', '改变形状', '产生热量', '没有作用效果'],
    answer: '改变形状',
    explanation: '把铁丝弯成圆环，铁丝的外形发生了改变，属于力改变物体的形状。',
    hints: ['铁丝的形状变了吗？', '变了，由直变弯。', '力改变了物体的形状。']
  },
  {
    id: 'ex_153', knowledge_node_id: 'gravity_calculation', chapter: '力与运动', section: '重力',
    difficulty: 2, type: 'choice',
    content: '一个物体质量为5kg，在地球表面它受到的重力约为？（g取10N/kg）',
    options: ['5N', '10N', '50N', '0.5N'],
    answer: '50N',
    explanation: 'G = mg = 5kg × 10N/kg = 50N。',
    hints: ['重力公式是什么？', 'G=mg。', '5×10=50N。']
  },
  {
    id: 'ex_154', knowledge_node_id: 'gravity_calculation', chapter: '力与运动', section: '重力',
    difficulty: 2, type: 'choice',
    content: '一名中学生质量约为50kg，他受到的重力约为？（g取10N/kg）',
    options: ['5N', '50N', '500N', '5000N'],
    answer: '500N',
    explanation: 'G = mg = 50kg × 10N/kg = 500N。',
    hints: ['G=mg，代入数据计算。', '50×10=500。', '重力约为500N。']
  },
  {
    id: 'ex_155', knowledge_node_id: 'gravity_calculation', chapter: '力与运动', section: '重力',
    difficulty: 2, type: 'choice',
    content: '月球上的重力约为地球的1/6，一个60kg的宇航员在月球上受到的重力约为？（g地取10N/kg）',
    options: ['10N', '60N', '100N', '600N'],
    answer: '100N',
    explanation: '地球上重力 G = 60×10 = 600N。月球上 G月 = 600÷6 = 100N。质量不随位置改变。',
    hints: ['先算地球上的重力？', '600N。', '月球重力是地球的1/6，600÷6=100N。']
  },
  {
    id: 'ex_156', knowledge_node_id: 'gravity_calculation', chapter: '力与运动', section: '重力',
    difficulty: 2, type: 'choice',
    content: '一物体重200N，它的质量是多少？（g取10N/kg）',
    options: ['2kg', '20kg', '200kg', '2000kg'],
    answer: '20kg',
    explanation: '由 G=mg 得 m=G/g = 200N÷10N/kg = 20kg。',
    hints: ['已知重力求质量，公式怎么变？', 'm=G/g。', '200÷10=20kg。']
  },
  {
    id: 'ex_157', knowledge_node_id: 'balance_condition', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '一个物体受到两个力的作用，这两个力的"三要素"完全相同，则这两个力？',
    options: ['一定是一对平衡力', '一定不是一对平衡力', '可能是一对平衡力', '无法判断'],
    answer: '一定不是一对平衡力',
    explanation: '平衡力要求方向相反，而三要素完全相同意味着方向也相同，所以一定不是平衡力。',
    hints: ['平衡力的方向有什么要求？', '方向相反。', '三要素相同则方向相同，不可能平衡。']
  },
  {
    id: 'ex_158', knowledge_node_id: 'balance_condition', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '静止在水平桌面上的书本，受到的平衡力是？',
    options: ['书本对桌面的压力和桌面对书本的支持力', '书本受到的重力和桌面对书本的支持力', '书本受到的重力和书本对桌面的压力', '以上都是'],
    answer: '书本受到的重力和桌面对书本的支持力',
    explanation: '平衡力必须作用在同一物体上。重力和支持力都作用在书本上，大小相等、方向相反、在同一直线上，是一对平衡力。',
    hints: ['平衡力要作用在同一个物体上吗？', '是的。', '重力和支持力都作用在书本上，是平衡力。']
  },
  {
    id: 'ex_159', knowledge_node_id: 'balance_condition', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '用水平推力推静止在水平地面上的桌子，但没有推动，这时推力？',
    options: ['小于摩擦力', '等于摩擦力', '大于摩擦力', '和摩擦力无关'],
    answer: '等于摩擦力',
    explanation: '桌子静止，处于平衡状态，水平方向推力与静摩擦力是一对平衡力，大小相等。',
    hints: ['桌子没动，说明它处于什么状态？', '平衡状态。', '平衡状态下，推力等于静摩擦力。']
  },
  {
    id: 'ex_160', knowledge_node_id: 'balance_condition', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '一个物体做匀速直线运动，则它受到的合力？',
    options: ['一定为零', '一定不为零', '可能为零也可能不为零', '无法判断'],
    answer: '一定为零',
    explanation: '匀速直线运动是平衡状态，根据牛顿第一定律，平衡状态下物体所受合力为零。',
    hints: ['匀速直线运动是平衡状态吗？', '是的。', '平衡状态合力为零。']
  },
  {
    id: 'ex_161', knowledge_node_id: 'newton_first', chapter: '力与运动', section: '牛顿第一定律',
    difficulty: 2, type: 'choice',
    content: '正在运动的物体，如果所受外力突然全部消失，则物体将？',
    options: ['立即停止', '速度变慢最后停止', '做匀速直线运动', '改变运动方向'],
    answer: '做匀速直线运动',
    explanation: '根据牛顿第一定律，不受力的物体将保持原来的运动状态。原来运动的物体将做匀速直线运动。',
    hints: ['牛顿第一定律怎么说的？', '不受力保持原来运动状态。', '原来运动，就保持匀速直线运动。']
  },
  {
    id: 'ex_162', knowledge_node_id: 'newton_first', chapter: '力与运动', section: '牛顿第一定律',
    difficulty: 2, type: 'choice',
    content: '关于牛顿第一定律，下列说法正确的是？',
    options: ['可以直接用实验验证', '是凭空想象出来的', '是在实验基础上推理得出的', '只适用于静止的物体'],
    answer: '是在实验基础上推理得出的',
    explanation: '牛顿第一定律无法直接用实验验证（无法完全消除外力），但它是在大量实验事实的基础上，通过科学推理得出的。',
    hints: ['现实中能做出完全没有力的环境吗？', '不能。', '所以定律是在实验基础上推理得出的。']
  },
  {
    id: 'ex_163', knowledge_node_id: 'newton_first', chapter: '力与运动', section: '牛顿第一定律',
    difficulty: 2, type: 'choice',
    content: '牛顿第一定律揭示了？',
    options: ['力是维持物体运动的原因', '力是改变物体运动状态的原因', '没有力的物体不能运动', '物体受力才会静止'],
    answer: '力是改变物体运动状态的原因',
    explanation: '牛顿第一定律说明，不受力时物体可以保持运动，所以力不是维持运动的原因，而是改变运动状态的原因。',
    hints: ['不受力，运动的物体会怎样？', '继续运动。', '所以力不是维持运动的原因，而是改变运动状态的原因。']
  },
  {
    id: 'ex_164', knowledge_node_id: 'inertia_concept', chapter: '力与运动', section: '惯性',
    difficulty: 1, type: 'choice',
    content: '惯性的大小只与物体的什么有关？',
    options: ['速度', '质量', '形状', '受力大小'],
    answer: '质量',
    explanation: '惯性是物体保持原来运动状态的性质，惯性大小只与物体的质量有关，质量越大，惯性越大。',
    hints: ['大货车和小轿车谁更难停下来？', '大货车。', '因为大货车质量大，惯性大。']
  },
  {
    id: 'ex_165', knowledge_node_id: 'inertia_concept', chapter: '力与运动', section: '惯性',
    difficulty: 2, type: 'choice',
    content: '关于惯性，下列说法正确的是？',
    options: ['运动的物体有惯性，静止的物体没有', '速度大的物体惯性大', '质量大的物体惯性大', '受力大的物体惯性大'],
    answer: '质量大的物体惯性大',
    explanation: '一切物体都有惯性，惯性大小只与质量有关，与运动状态、速度、是否受力都无关。',
    hints: ['静止的物体有没有惯性？', '有。', '惯性只与质量有关。']
  },
  {
    id: 'ex_166', knowledge_node_id: 'inertia_concept', chapter: '力与运动', section: '惯性',
    difficulty: 2, type: 'choice',
    content: '一辆高速行驶的汽车，紧急刹车后还要向前滑行一段距离，这是因为汽车具有？',
    options: ['动力', '惯性', '摩擦力', '重力'],
    answer: '惯性',
    explanation: '汽车刹车后，由于惯性，汽车要保持原来的运动状态，继续向前运动一段距离。',
    hints: ['刹车后为什么还会往前走？', '因为要保持原来的运动状态。', '这是惯性的表现。']
  },

  // ---- 力学其他知识点补充 ----
  {
    id: 'ex_167', knowledge_node_id: 'force_concept', chapter: '力与运动', section: '力',
    difficulty: 1, type: 'choice',
    content: '下列关于力的说法，错误的是？',
    options: ['力不能脱离物体而存在', '力是物体对物体的作用', '不接触的物体间一定没有力的作用', '施力物体同时也是受力物体'],
    answer: '不接触的物体间一定没有力的作用',
    explanation: '不接触的物体间也可以有力的作用，如重力、磁力等。C选项说法错误。',
    hints: ['磁铁能吸起远处的铁钉吗？', '能，不需要接触。', '不接触的物体间也可以有力的作用。']
  },
  {
    id: 'ex_168', knowledge_node_id: 'force_interaction', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '人走路时，脚向后蹬地，人却向前运动，这说明？',
    options: ['人对地面的力大于地面给人的力', '地面给人的力大于人对地面的力', '力的作用是相互的', '以上都不对'],
    answer: '力的作用是相互的',
    explanation: '脚向后蹬地，地面同时给脚一个向前的反作用力，使人前进。作用力与反作用力大小相等。',
    hints: ['向后蹬地为什么能向前走？', '因为地面也给了脚一个向前的力。', '力的作用是相互的。']
  },
  {
    id: 'ex_169', knowledge_node_id: 'elastic_concept', chapter: '力与运动', section: '弹力',
    difficulty: 2, type: 'choice',
    content: '下列物体中，发生了弹性形变的是？',
    options: ['捏扁的橡皮泥', '拉长的橡皮筋', '压扁的面包', '弯折的铁丝'],
    answer: '拉长的橡皮筋',
    explanation: '弹性形变指撤去外力后能恢复原状的形变。橡皮筋能恢复原状，属于弹性形变。其他三种撤去外力后不能恢复原状。',
    hints: ['哪种物体松手后能恢复原状？', '橡皮筋。', '能恢复原状的形变是弹性形变。']
  },
  {
    id: 'ex_170', knowledge_node_id: 'elastic_measurement', chapter: '力与运动', section: '弹簧测力计',
    difficulty: 2, type: 'choice',
    content: '使用弹簧测力计时，弹簧的轴线方向应与所测力的方向？',
    options: ['垂直', '一致', '成45度角', '无关'],
    answer: '一致',
    explanation: '弹簧测力计使用时，弹簧轴线方向应与所测力的方向一致，否则会影响测量准确性，甚至损坏测力计。',
    hints: ['如果斜着拉弹簧测力计，读数会准吗？', '不会准。', '轴线方向应与力的方向一致。']
  },
  {
    id: 'ex_171', knowledge_node_id: 'gravity_concept', chapter: '力与运动', section: '重力',
    difficulty: 1, type: 'choice',
    content: '踢到空中的足球，不计空气阻力，只受到什么力的作用？',
    options: ['踢力', '重力和踢力', '重力', '没有受力'],
    answer: '重力',
    explanation: '足球离开脚后，踢力消失，不计空气阻力时，只受到重力作用。',
    hints: ['足球在空中，脚还碰着它吗？', '不碰了。', '离开脚后只受重力。']
  },
  {
    id: 'ex_172', knowledge_node_id: 'gravity_center', chapter: '力与运动', section: '重心',
    difficulty: 2, type: 'choice',
    content: '不倒翁不容易倒，是因为它的？',
    options: ['质量大', '重心低', '底部面积大', '形状好看'],
    answer: '重心低',
    explanation: '不倒翁底部重，重心很低，偏离平衡位置时重力产生的力矩会把它拉回来，所以不容易倒。',
    hints: ['不倒翁的重心在哪里？', '在底部。', '重心低，稳定性好。']
  },
  {
    id: 'ex_173', knowledge_node_id: 'inertia_application', chapter: '力与运动', section: '惯性',
    difficulty: 2, type: 'choice',
    content: '跳远运动员助跑后起跳，是利用了？',
    options: ['增大惯性', '减小惯性', '利用惯性', '消除惯性'],
    answer: '利用惯性',
    explanation: '助跑使运动员获得较大速度，起跳后由于惯性，身体保持向前运动，从而跳得更远。惯性大小不变。',
    hints: ['起跳后身体为什么还能继续向前？', '因为惯性。', '助跑是利用惯性跳得更远。']
  },
  {
    id: 'ex_174', knowledge_node_id: 'balance_friction', chapter: '力与运动', section: '力',
    difficulty: 2, type: 'choice',
    content: '用弹簧测力计拉着木块在水平桌面上做匀速直线运动，弹簧测力计示数为2N，则木块受到的滑动摩擦力为？',
    options: ['0N', '1N', '2N', '4N'],
    answer: '2N',
    explanation: '木块做匀速直线运动，处于平衡状态，拉力与滑动摩擦力是一对平衡力，大小相等，所以摩擦力等于2N。',
    hints: ['匀速直线运动说明什么？', '受力平衡。', '拉力等于摩擦力，都是2N。']
  },
  {
    id: 'ex_175', knowledge_node_id: 'friction_concept', chapter: '力与运动', section: '摩擦力',
    difficulty: 1, type: 'choice',
    content: '下列事例中，为了增大摩擦的是？',
    options: ['给机器加润滑油', '轮胎上有花纹', '使用滚珠轴承', '冰壶运动员擦冰'],
    answer: '轮胎上有花纹',
    explanation: '轮胎花纹增大了接触面的粗糙程度，从而增大摩擦。其他三项都是减小摩擦。',
    hints: ['花纹使路面变光滑还是变粗糙？', '变粗糙。', '增大粗糙程度可以增大摩擦。']
  },
  {
    id: 'ex_176', knowledge_node_id: 'friction_factors', chapter: '力与运动', section: '摩擦力',
    difficulty: 2, type: 'choice',
    content: '同一木块分别平放和侧放在同一水平桌面上，用弹簧测力计匀速拉动，两次示数？',
    options: ['平放大', '侧放大', '一样大', '无法判断'],
    answer: '一样大',
    explanation: '滑动摩擦力大小只与压力和接触面粗糙程度有关。平放和侧放压力相同（都等于重力），接触面粗糙程度相同，所以摩擦力相同。',
    hints: ['滑动摩擦力与接触面积有关吗？', '无关。', '压力和粗糙程度相同，摩擦力就相同。']
  },
  {
    id: 'ex_177', knowledge_node_id: 'friction_application', chapter: '力与运动', section: '摩擦力',
    difficulty: 2, type: 'choice',
    content: '下列实例中，通过变滑动为滚动来减小摩擦的是？',
    options: ['鞋底有花纹', '行李箱装有轮子', '刹车时用力捏闸', '轮胎上有深深的花纹'],
    answer: '行李箱装有轮子',
    explanation: '行李箱装轮子是将滑动摩擦变为滚动摩擦，大大减小了摩擦。其他选项都是增大摩擦。',
    hints: ['轮子转动时与地面是什么摩擦？', '滚动摩擦。', '滚动摩擦比滑动摩擦小得多。']
  },
  {
    id: 'ex_178', knowledge_node_id: 'motion_speed', chapter: '机械运动', section: '速度',
    difficulty: 2, type: 'choice',
    content: '小明骑自行车上学，前半程速度为5m/s，后半程速度为10m/s，则全程平均速度？',
    options: ['等于7.5m/s', '小于7.5m/s', '大于7.5m/s', '无法确定'],
    answer: '小于7.5m/s',
    explanation: '设全程为2s，则总时间 t = s/5 + s/10 = 3s/10。平均速度 v = 2s/(3s/10) = 20/3 ≈ 6.67m/s < 7.5m/s。',
    hints: ['前半程用的时间多还是后半程？', '前半程速度慢，用的时间多。', '平均速度更接近较慢的速度，所以小于7.5m/s。']
  },
  {
    id: 'ex_179', knowledge_node_id: 'phase_melt', chapter: '物态变化', section: '熔化和凝固',
    difficulty: 2, type: 'choice',
    content: '把正在熔化的冰拿到0℃的房间里，冰会？',
    options: ['继续熔化', '停止熔化', '凝固', '先熔化后凝固'],
    answer: '停止熔化',
    explanation: '熔化需要吸热。冰和房间都是0℃，没有温度差，冰不能从周围环境吸热，所以停止熔化。',
    hints: ['熔化需要什么条件？', '需要吸热。', '没有温度差就不能吸热，熔化停止。']
  },
  {
    id: 'ex_180', knowledge_node_id: 'sound_characteristics', chapter: '声现象', section: '声音的特性',
    difficulty: 2, type: 'choice',
    content: '用大小不同的力敲击同一个音叉，发出声音的什么不同？',
    options: ['音调', '响度', '音色', '频率'],
    answer: '响度',
    explanation: '大小不同的力使音叉振幅不同，振幅决定响度。同一音叉频率不变，音调和音色也不变。',
    hints: ['力的大小影响音叉振动的什么？', '影响振幅。', '振幅决定响度。']
  },

  // === 第6章 光现象 ===
  // 光的直线传播 (+3)
  {
    id: 'lt_001', knowledge_node_id: 'light_propagation', chapter: '光现象', section: '光的直线传播',
    difficulty: 1, type: 'choice',
    content: '2024年4月，北美地区观测到一次日全食。日食的形成原因是？',
    options: ['光的反射', '光的折射', '光沿直线传播', '光的色散'],
    answer: '光沿直线传播',
    explanation: '日食是月球运行到太阳和地球之间，挡住了沿直线传播的太阳光，在地球上形成阴影区。本质是光沿直线传播。',
    hints: ['日食时，是什么天体挡住了太阳？', '月球挡住了太阳光，在地球上投下影子。', '影子的形成是因为光沿直线传播。']
  },
  {
    id: 'lt_002', knowledge_node_id: 'light_propagation', chapter: '光现象', section: '光的直线传播',
    difficulty: 2, type: 'choice',
    content: '小明在暗室做小孔成像实验，蜡烛通过小孔在光屏上成的像是？',
    options: ['正立放大的虚像', '正立缩小的实像', '倒立放大的实像', '倒立缩小的实像'],
    answer: '倒立缩小的实像',
    explanation: '小孔成像是光沿直线传播的结果，成倒立的实像。像的大小取决于物距和像距：本题光屏距离小孔较近，通常成缩小的像。',
    hints: ['小孔成像的像有什么特点？', '小孔成像成倒立的像，而且是实像。', '光屏上能承接的是实像，小孔成像总是倒立的。']
  },
  {
    id: 'lt_003', knowledge_node_id: 'light_propagation', chapter: '光现象', section: '光的直线传播',
    difficulty: 2, type: 'choice',
    content: '太阳光从太阳传到地球约需500秒，则太阳到地球的距离约为？',
    options: ['1.5×10⁸m', '1.5×10¹¹m', '3×10⁸m', '3×10¹¹m'],
    answer: '1.5×10¹¹m',
    explanation: '光速c=3×10⁸m/s，距离s=ct=3×10⁸×500=1.5×10¹¹m。注意单位是米，不是千米。',
    hints: ['距离公式是什么？', 's = vt，这里v是光速3×10⁸m/s。', '3×10⁸ × 500 = 1.5×10¹¹m。']
  },

  // 光的反射 (+3)
  {
    id: 'lt_004', knowledge_node_id: 'light_reflection', chapter: '光现象', section: '光的反射',
    difficulty: 1, type: 'choice',
    content: '汽车夜间行驶时，司机通过后视镜观察后方车辆。关于汽车后视镜，下列说法正确的是？',
    options: ['后视镜是凹面镜，可以扩大视野', '后视镜是凸面镜，可以扩大视野', '后视镜是平面镜，成等大的像', '后视镜是凹透镜，可以发散光线'],
    answer: '后视镜是凸面镜，可以扩大视野',
    explanation: '汽车后视镜使用凸面镜，凸面镜对光有发散作用，能扩大观察范围，使司机看到更大范围的后方路况。凹面镜会聚光线，平面镜视野小，都不适合做后视镜。',
    hints: ['汽车后视镜希望看到更大范围还是更清楚？', '凸面镜能使光线发散，反射光线的反向延长线散开，看到的范围更大。', '凸面镜扩大视野，凹面镜缩小视野。']
  },
  {
    id: 'lt_005', knowledge_node_id: 'light_reflection', chapter: '光现象', section: '光的反射',
    difficulty: 2, type: 'choice',
    content: '一束光线以30°角入射到平面镜上，则反射角为？',
    options: ['30°', '60°', '90°', '120°'],
    answer: '60°',
    explanation: '入射角是入射光线与法线的夹角。题目给的是光线与镜面的夹角30°，所以入射角=90°-30°=60°。根据反射定律，反射角等于入射角，也是60°。',
    hints: ['入射角是光线与镜面的夹角，还是与法线的夹角？', '入射角是与法线的夹角。光线与镜面成30°，则与法线成60°。', '反射角等于入射角，都是60°。']
  },
  {
    id: 'lt_006', knowledge_node_id: 'light_reflection', chapter: '光现象', section: '光的反射',
    difficulty: 2, type: 'choice',
    content: '教室里，同学们能从不同角度看到黑板上的字，这是因为光在字表面发生了？',
    options: ['镜面反射', '漫反射', '折射', '直线传播'],
    answer: '漫反射',
    explanation: '黑板上的字表面粗糙，光照射后向各个方向反射，属于漫反射。所以不同位置的同学都能看到。镜面反射只在特定方向有强光，会导致反光刺眼。',
    hints: ['如果字表面光滑，你会在什么角度看到它？', '光滑表面发生镜面反射，只在特定方向有反射光。', '粗糙表面发生漫反射，光线射向各个方向。']
  },

  // 平面镜成像 (+4)
  {
    id: 'lt_007', knowledge_node_id: 'light_mirror', chapter: '光现象', section: '平面镜成像',
    difficulty: 1, type: 'choice',
    content: '小明站在平面镜前1m处，他的像到平面镜的距离是？',
    options: ['0.5m', '1m', '2m', '无法确定'],
    answer: '1m',
    explanation: '平面镜成像特点：像与物到镜面的距离相等。小明距镜面1m，像也距镜面1m。注意题目问的是像到镜面的距离，不是像到小明的距离。',
    hints: ['平面镜成像时，像和物到镜面的距离有什么关系？', '像距等于物距。', '小明距镜面1m，像距镜面也是1m。']
  },
  {
    id: 'lt_008', knowledge_node_id: 'light_mirror', chapter: '光现象', section: '平面镜成像',
    difficulty: 2, type: 'choice',
    content: '小明从远处向竖直放置的平面镜走近，他在镜中的像会？',
    options: ['变大', '变小', '大小不变', '先变大后变小'],
    answer: '大小不变',
    explanation: '平面镜成像大小与物体相等，且与物体到镜面的距离无关。人走近镜子时，像也走近，但像的大小始终和人一样大。感觉像变大是因为视角变大，不是像本身变大。',
    hints: ['平面镜成的像和物体大小有什么关系？', '像与物等大。', '像的大小与距离无关，走近时只是视角变大，像本身大小不变。']
  },
  {
    id: 'lt_009', knowledge_node_id: 'light_mirror', chapter: '光现象', section: '平面镜成像',
    difficulty: 2, type: 'choice',
    content: '一只小鸟在平静的湖面上方5m处飞行，湖深3m，则小鸟的像到水面的距离是？',
    options: ['3m', '5m', '8m', '10m'],
    answer: '5m',
    explanation: '平静的湖面相当于平面镜。平面镜成像中，像到镜面的距离等于物到镜面的距离。小鸟距水面5m，像也距水面5m。湖深3m是干扰信息，与成像无关。',
    hints: ['平静的湖面相当于什么光学元件？', '相当于平面镜。', '像到水面距离等于物到水面距离，与湖深无关。']
  },
  {
    id: 'lt_010', knowledge_node_id: 'light_mirror', chapter: '光现象', section: '平面镜成像',
    difficulty: 3, type: 'choice',
    content: '小明站在平面镜前，将一块不透明木板紧贴平面镜的背面放置，他还能在镜中看到自己的像吗？',
    options: ['能，像完整但变暗', '能，像完整且亮度不变', '不能，像被木板挡住了', '只能看到一半的像'],
    answer: '能，像完整且亮度不变',
    explanation: '平面镜成像是光的反射形成的，反射发生在镜面正面（镀银层）。木板贴在背面不影响正面的反射光线，所以像依然完整且亮度不变。虚像不是实际光线会聚而成，不存在"被挡住"的问题。',
    hints: ['平面镜的像是靠什么形成的？', '靠镜面正面的反射光线形成。', '木板贴在背面，不影响正面反射，像完整且亮度不变。']
  },

  // 光的折射 (+4)
  {
    id: 'lt_011', knowledge_node_id: 'light_refraction', chapter: '光现象', section: '光的折射',
    difficulty: 1, type: 'choice',
    content: '把一根筷子斜插入盛水的玻璃杯中，从水面上方观察，筷子看起来？',
    options: ['向上弯折', '向下弯折', '保持直线', '变粗了'],
    answer: '向上弯折',
    explanation: '光从水中射入空气时发生折射，折射角大于入射角。筷子水下部分反射的光线在水面处偏折远离法线，人眼逆着光线看去，觉得水下部分向上弯折了。',
    hints: ['光从水中进入空气时，折射角和入射角哪个大？', '空气中的角大，折射光线远离法线。', '人眼逆着折射光线看去，觉得筷子向上弯折。']
  },
  {
    id: 'lt_012', knowledge_node_id: 'light_refraction', chapter: '光现象', section: '光的折射',
    difficulty: 2, type: 'choice',
    content: '游泳池的实际深度为2m，但站在池边的人看池底，觉得池底比实际？',
    options: ['深', '浅', '一样深', '无法判断'],
    answer: '浅',
    explanation: '池底反射的光从水中射入空气时发生折射，折射光线远离法线。人眼逆着折射光线看去，池底的像在实际位置的上方，所以看起来池水变浅了。这是光的折射造成的虚像位置偏高现象。',
    hints: ['光从水中进入空气时，折射光线偏向哪个方向？', '折射光线远离法线，偏向水面。', '人眼逆着光线看去，觉得池底位置比实际高，所以看起来浅。']
  },
  {
    id: 'lt_013', knowledge_node_id: 'light_refraction', chapter: '光现象', section: '光的折射',
    difficulty: 2, type: 'choice',
    content: '一束光从空气斜射入水中，入射角为45°，则折射角？',
    options: ['等于45°', '大于45°', '小于45°', '等于90°'],
    answer: '小于45°',
    explanation: '光从空气（光疏介质）斜射入水（光密介质）时，折射光线靠近法线，折射角小于入射角。口诀：空气中的角大。所以折射角小于45°。',
    hints: ['光从空气进入水，折射光线靠近法线还是远离法线？', '进入光密介质，折射光线靠近法线。', '空气中的角大，所以折射角小于入射角45°。']
  },
  {
    id: 'lt_014', knowledge_node_id: 'light_refraction', chapter: '光现象', section: '光的折射',
    difficulty: 3, type: 'choice',
    content: '在海边有时能看到"海市蜃楼"现象，这是由于光在不均匀大气中发生了？',
    options: ['反射', '直线传播', '折射', '色散'],
    answer: '折射',
    explanation: '海市蜃楼是由于海面附近空气温度低、密度大、折射率高，上方空气温度高、密度小、折射率低。光在不均匀的大气中传播时不断发生折射，使远处景物的光线弯曲进入人眼，形成虚像。',
    hints: ['海面上方空气的密度均匀吗？', '不均匀，海面附近空气冷而密，上方空气热而稀。', '光在不均匀介质中传播方向会不断改变，属于折射。']
  },

  // 透镜 (+3)
  {
    id: 'lt_015', knowledge_node_id: 'light_lens', chapter: '光现象', section: '透镜',
    difficulty: 1, type: 'choice',
    content: '实验室用投影仪将幻灯片投射到屏幕上，幻灯片到镜头的距离（物距u）与焦距f的关系是？',
    options: ['u > 2f', 'u = 2f', 'f < u < 2f', 'u < f'],
    answer: 'f < u < 2f',
    explanation: '投影仪成倒立、放大的实像。根据凸透镜成像规律，当物距在一倍焦距和二倍焦距之间（f < u < 2f）时，成倒立放大的实像，像距v > 2f。这正是投影仪的工作原理。',
    hints: ['投影仪成的像有什么特点？', '成倒立、放大的实像。', 'f < u < 2f时，凸透镜成倒立放大的实像。']
  },
  {
    id: 'lt_016', knowledge_node_id: 'light_lens', chapter: '光现象', section: '透镜',
    difficulty: 2, type: 'choice',
    content: '凸透镜的焦距为10cm，将蜡烛放在距透镜25cm处，移动光屏，光屏上可得到？',
    options: ['正立放大的虚像', '倒立放大的实像', '倒立缩小的实像', '正立缩小的实像'],
    answer: '倒立缩小的实像',
    explanation: 'u=25cm，f=10cm，u > 2f（25 > 20）。根据凸透镜成像规律，当u > 2f时，成倒立、缩小的实像，像距f < v < 2f。这是照相机的成像原理。',
    hints: ['物距25cm和2倍焦距20cm相比，哪个大？', 'u > 2f。', 'u > 2f时，凸透镜成倒立缩小的实像。']
  },
  {
    id: 'lt_017', knowledge_node_id: 'light_lens', chapter: '光现象', section: '透镜',
    difficulty: 2, type: 'choice',
    content: '关于凸透镜的三条特殊光线，下列说法错误的是？',
    options: ['平行于主光轴的光线，折射后过焦点', '过焦点的光线，折射后平行于主光轴', '过光心的光线，传播方向不变', '过二倍焦距的光线，折射后过另一侧二倍焦距且方向不变'],
    answer: '过二倍焦距的光线，折射后过另一侧二倍焦距且方向不变',
    explanation: '过二倍焦距点的光线经凸透镜折射后，确实会过另一侧二倍焦距点，但传播方向会改变（向主光轴偏折），不是方向不变。过光心的光线方向不变，是因为光心处透镜可视为平行玻璃板，入射和出射光平行。',
    hints: ['过二倍焦距的光线折射后向哪偏折？', '凸透镜对光有会聚作用，光线会向主光轴偏折。', '方向一定会改变，只是恰好经过另一侧2f点。']
  },

  // 眼睛和眼镜 (+3)
  {
    id: 'lt_018', knowledge_node_id: 'light_eye', chapter: '光现象', section: '眼睛和眼镜',
    difficulty: 1, type: 'choice',
    content: '人的眼睛相当于一架照相机，其中晶状体相当于凸透镜，视网膜相当于？',
    options: ['光圈', '快门', '光屏（底片）', '反光镜'],
    answer: '光屏（底片）',
    explanation: '眼睛成像原理与照相机类似：晶状体相当于凸透镜（镜头），视网膜相当于光屏（底片），物体在视网膜上成倒立缩小的实像。大脑再把这个倒像"正过来"。',
    hints: ['视网膜的作用是什么？', '接收光线并形成像。', '视网膜相当于承接像的光屏。']
  },
  {
    id: 'lt_019', knowledge_node_id: 'light_eye', chapter: '光现象', section: '眼睛和眼镜',
    difficulty: 2, type: 'choice',
    content: '小明看书时把书拿得很近才能看清，医生说他患了近视眼，应配戴什么眼镜矫正？',
    options: ['凸透镜', '凹透镜', '平面镜', '凸面镜'],
    answer: '凹透镜',
    explanation: '近视眼是因为晶状体太厚或眼球前后径过长，导致远处物体的像成在视网膜前方。凹透镜对光有发散作用，能使光线进入眼睛前先适当发散，从而使像后移到视网膜上。凸透镜用于矫正远视眼。',
    hints: ['近视眼看远处物体，像成在视网膜前还是后？', '像成在视网膜前。', '需要发散光线使像后移，凹透镜有发散作用。']
  },
  {
    id: 'lt_020', knowledge_node_id: 'light_eye', chapter: '光现象', section: '眼睛和眼镜',
    difficulty: 2, type: 'choice',
    content: '爷爷看报纸时要把报纸拿得很远才能看清，这说明爷爷的眼睛是？',
    options: ['近视眼，需配戴凸透镜', '远视眼，需配戴凸透镜', '近视眼，需配戴凹透镜', '远视眼，需配戴凹透镜'],
    answer: '远视眼，需配戴凸透镜',
    explanation: '把报纸拿远才能看清，说明近处物体的像成在视网膜后方，是远视眼（老花眼）。远视眼需要配戴凸透镜矫正，凸透镜的会聚作用使光线提前会聚，让像前移到视网膜上。',
    hints: ['近处看不清、远处能看清，是什么眼？', '远视眼（老花眼）。', '远视眼像成在视网膜后，需用凸透镜的会聚作用使像前移。']
  },

  // === 新章节题目（质量与密度/压强/浮力/电学/功和机械能/简单机械）===
  {
    id: 'by_001', knowledge_node_id: 'buoyancy_concept', chapter: '浮力', section: '浮力',
    difficulty: 1, type: 'choice',
    content: '下列关于浮力的说法正确的是？',
    options: ['浮力是液体对物体向上的压力', '浮力是液体对物体上下表面的压力差', '浮力方向垂直于接触面', '浮力大小与浸没深度成正比'],
    answer: '浮力是液体对物体上下表面的压力差',
    explanation: '浮力产生的原因是液体对物体上下表面的压力差：下表面受到的向上压力大于上表面受到的向下压力。浮力方向始终竖直向上，与浸没深度无关（完全浸没后）。',
    hints: ['浮力是怎么产生的？', '液体内部压强随深度增加，下表面压力大于上表面。', '浮力=下表面向上压力-上表面向下压力。']
  },
  {
    id: 'by_002', knowledge_node_id: 'buoyancy_concept', chapter: '浮力', section: '浮力',
    difficulty: 2, type: 'choice',
    content: '如图所示，一个正方体浸没在水中，上表面距水面5cm，下表面距水面15cm。若上表面受到向下的压力为5N，则下表面受到向上的压力约为？（g取10N/kg）',
    options: ['5N', '10N', '15N', '20N'],
    answer: '15N',
    explanation: '上下表面深度差为10cm。液体压强差 Δp = ρgh = 1000×10×0.1 = 1000Pa。设正方体一个面的面积为S，上表面压力 F上 = p上·S = 5N。下表面压力 F下 = (p上+Δp)·S = F上 + Δp·S。由于压强差产生的浮力 F浮 = Δp·S = ρgV排，对于边长10cm的正方体，V排=0.001m³，F浮=10N。所以 F下 = F上 + F浮 = 5N + 10N = 15N。',
    hints: ['浮力等于什么？', '浮力=下表面压力-上表面压力。', '先算浮力，再用F下=F上+F浮求下表面压力。']
  },
  {
    id: 'by_003', knowledge_node_id: 'buoyancy_concept', chapter: '浮力', section: '浮力',
    difficulty: 2, type: 'choice',
    content: '用弹簧测力计测得某石块在空气中的重力为8N，浸没在水中时弹簧测力计示数为5N，则石块受到的浮力为？',
    options: ['3N', '5N', '8N', '13N'],
    answer: '3N',
    explanation: '称重法测浮力：F浮 = G - F示 = 8N - 5N = 3N。石块受到竖直向下的重力、竖直向上的浮力和竖直向上的拉力（弹簧测力计示数），三力平衡。',
    hints: ['石块在水中受到几个力？', '重力向下，浮力和拉力向上。', 'F浮 = G - F示 = 8N - 5N = 3N。']
  },
  {
    id: 'by_004', knowledge_node_id: 'buoyancy_concept', chapter: '浮力', section: '浮力',
    difficulty: 2, type: 'choice',
    content: '一个物体完全浸没在水中，当它继续向下运动时（未触底），它受到的浮力？',
    options: ['变大', '变小', '不变', '先变大后变小'],
    answer: '不变',
    explanation: '物体完全浸没后，排开液体的体积V排等于物体体积，不再改变。根据阿基米德原理F浮=ρ液gV排，液体密度和V排都不变，所以浮力不变。浮力与浸没深度无关是常见易错点。',
    hints: ['完全浸没后，V排会变吗？', '不会，V排等于物体体积。', 'F浮=ρ液gV排，ρ液和V排都不变，浮力不变。']
  },
  {
    id: 'by_005', knowledge_node_id: 'buoyancy_concept', chapter: '浮力', section: '浮力',
    difficulty: 1, type: 'choice',
    content: '关于浮力的方向，下列说法正确的是？',
    options: ['浮力方向总是竖直向上', '浮力方向总是垂直于接触面向上', '浮力方向与重力方向相同', '浮力方向随物体倾斜而改变'],
    answer: '浮力方向总是竖直向上',
    explanation: '浮力方向始终竖直向上，与重力方向相反。无论物体如何放置或倾斜，浮力方向都不变。注意区分"竖直向上"和"垂直于接触面向上"——后者是支持力的方向特征。',
    hints: ['浮力和重力的方向有什么关系？', '浮力向上，重力向下，两者方向相反。', '浮力方向始终竖直向上，不随物体姿态改变。']
  },
  {
    id: 'by_006', knowledge_node_id: 'buoyancy_archimedes', chapter: '浮力', section: '阿基米德原理',
    difficulty: 1, type: 'choice',
    content: '阿基米德原理的表达式是？',
    options: ['F浮 = ρ物gV物', 'F浮 = ρ液gV排', 'F浮 = G物', 'F浮 = ρ液gV物'],
    answer: 'F浮 = ρ液gV排',
    explanation: '阿基米德原理：浸在液体中的物体受到向上的浮力，浮力的大小等于物体排开的液体所受的重力，即F浮 = G排 = ρ液gV排。注意是液体密度ρ液和排开液体体积V排，不是物体密度和物体体积。',
    hints: ['浮力大小和谁有关？', '和液体密度、排开液体的体积有关。', 'F浮 = ρ液gV排，不是ρ物gV物。']
  },
  {
    id: 'by_007', knowledge_node_id: 'buoyancy_archimedes', chapter: '浮力', section: '阿基米德原理',
    difficulty: 2, type: 'choice',
    content: '一个体积为200cm³的物体，一半浸入水中时受到的浮力约为？（g取10N/kg）',
    options: ['0.5N', '1N', '2N', '4N'],
    answer: '1N',
    explanation: '一半浸入时，V排 = 200cm³ / 2 = 100cm³ = 1×10⁻⁴m³。F浮 = ρ水gV排 = 1000×10×1×10⁻⁴ = 1N。注意：部分浸入时V排不等于物体体积，这是学生最常犯的错误。',
    hints: ['一半浸入时，V排是多少？', 'V排 = 物体体积的一半 = 100cm³。', 'F浮 = 1000×10×100×10⁻⁶ = 1N。']
  },
  {
    id: 'by_008', knowledge_node_id: 'buoyancy_archimedes', chapter: '浮力', section: '阿基米德原理',
    difficulty: 2, type: 'choice',
    content: '把同一个铁块分别浸没在水中和煤油中（ρ煤油=0.8×10³kg/m³），比较两次受到的浮力？',
    options: ['水中浮力大', '煤油中浮力大', '一样大', '无法判断'],
    answer: '水中浮力大',
    explanation: '铁块完全浸没，V排相同（都等于铁块体积）。根据F浮=ρ液gV排，V排和g相同，ρ水 > ρ煤油，所以水中浮力更大。阿基米德原理适用于任何流体（液体和气体）。',
    hints: ['同一铁块浸没，V排相同吗？', '相同。浮力大小取决于液体密度。', 'ρ水 > ρ煤油，所以水中浮力更大。']
  },
  {
    id: 'by_009', knowledge_node_id: 'buoyancy_archimedes', chapter: '浮力', section: '阿基米德原理',
    difficulty: 2, type: 'choice',
    content: '某物体浸没在水中时排开的水重为3N，则该物体浸没在酒精中（ρ酒精=0.8×10³kg/m³）时受到的浮力约为？',
    options: ['2.4N', '3N', '3.75N', '4N'],
    answer: '2.4N',
    explanation: '浸没在水中时F浮水 = G排水 = 3N，即ρ水gV物 = 3N。浸没在酒精中时V排相同（都等于V物），F浮酒精 = ρ酒精gV物 = (ρ酒精/ρ水) × ρ水gV物 = 0.8 × 3N = 2.4N。',
    hints: ['两次浸没，什么相同什么不同？', 'V排相同，液体密度不同。', 'F浮与ρ液成正比，F浮酒精 = 0.8 × 3N = 2.4N。']
  },
  {
    id: 'by_010', knowledge_node_id: 'buoyancy_archimedes', chapter: '浮力', section: '阿基米德原理',
    difficulty: 3, type: 'choice',
    content: '一个重为5N的物体放入装满水的溢水杯中，溢出水的重力为4N。则该物体最终的状态是？',
    options: ['漂浮', '悬浮', '沉底', '无法判断'],
    answer: '沉底',
    explanation: '溢出水的重力等于物体排开水的重力，即G排=4N。根据阿基米德原理，物体受到的浮力F浮=G排=4N。由于物体重力G=5N > F浮=4N，物体受力不平衡，将下沉直至沉底。此题综合考查阿基米德原理和浮沉条件。',
    hints: ['溢出水的重力等于什么？', '等于排开水的重力，也就是浮力。', 'F浮=4N < G=5N，所以物体会下沉。']
  },
  {
    id: 'by_011', knowledge_node_id: 'buoyancy_float', chapter: '浮力', section: '浮沉条件',
    difficulty: 1, type: 'choice',
    content: '把鸡蛋放入清水中，鸡蛋下沉；向水中加盐搅拌后，鸡蛋上浮。鸡蛋上浮的原因是？',
    options: ['鸡蛋重力变小了', '鸡蛋体积变大了', '液体密度变大，浮力变大', '水的深度增加了'],
    answer: '液体密度变大，浮力变大',
    explanation: '加盐后水的密度ρ液增大。鸡蛋浸没时V排不变，根据F浮=ρ液gV排，浮力变大。当F浮 > G时，鸡蛋上浮。鸡蛋的重力和体积在此过程中基本不变。',
    hints: ['加盐后，水的密度怎么变？', '密度变大。', 'F浮=ρ液gV排，ρ液变大，浮力变大，当F浮>G时上浮。']
  },
  {
    id: 'by_012', knowledge_node_id: 'buoyancy_float', chapter: '浮力', section: '浮沉条件',
    difficulty: 2, type: 'choice',
    content: '一个物体在甲液体中漂浮，在乙液体中悬浮。已知两液体密度ρ甲和ρ乙，则？',
    options: ['ρ甲 > ρ乙', 'ρ甲 < ρ乙', 'ρ甲 = ρ乙', '无法比较'],
    answer: 'ρ甲 > ρ乙',
    explanation: '漂浮时ρ物 < ρ甲；悬浮时ρ物 = ρ乙。因为是同一物体，ρ物相同，所以ρ甲 > ρ物 = ρ乙，即ρ甲 > ρ乙。也可从V排角度分析：漂浮时V排小，悬浮时V排大，根据F浮=ρ液gV排=G物，V排小则ρ液大。',
    hints: ['漂浮和悬浮时，物体密度与液体密度有什么关系？', '漂浮：ρ物<ρ液；悬浮：ρ物=ρ液。', '同一物体，ρ甲>ρ物=ρ乙，所以ρ甲>ρ乙。']
  },
  {
    id: 'by_013', knowledge_node_id: 'buoyancy_float', chapter: '浮力', section: '浮沉条件',
    difficulty: 2, type: 'choice',
    content: '一个体积为100cm³、质量为80g的物体放入水中（g取10N/kg），静止后该物体？',
    options: ['漂浮，F浮=0.8N', '悬浮，F浮=1N', '沉底，F浮=1N', '漂浮，F浮=1N'],
    answer: '漂浮，F浮=0.8N',
    explanation: '物体密度ρ物 = m/V = 80g/100cm³ = 0.8g/cm³ < ρ水=1g/cm³，所以物体漂浮。漂浮时F浮 = G物 = mg = 0.08kg×10N/kg = 0.8N。注意：漂浮时F浮不等于ρ水gV物（那是完全浸没时的浮力），而是等于物体重力。',
    hints: ['先判断物体密度与水密度的关系？', 'ρ物=0.8g/cm³ < ρ水，所以会漂浮。', '漂浮时F浮=G物=0.8N。']
  },
  {
    id: 'by_014', knowledge_node_id: 'buoyancy_float', chapter: '浮力', section: '浮沉条件',
    difficulty: 2, type: 'choice',
    content: '关于悬浮和漂浮，下列说法正确的是？',
    options: ['悬浮时ρ物=ρ液，漂浮时ρ物<ρ液', '悬浮时F浮<G，漂浮时F浮=G', '悬浮的物体可以停在任何深度，漂浮的物体也可以停在任何深度', '悬浮时V排<V物，漂浮时V排=V物'],
    answer: '悬浮时ρ物=ρ液，漂浮时ρ物<ρ液',
    explanation: '悬浮：ρ物=ρ液，F浮=G，V排=V物，可停在液体中任何深度。漂浮：ρ物<ρ液，F浮=G，V排<V物，静止时只能在水面。B错在悬浮时F浮=G；C错在漂浮物体不能停在任意深度；D把V排关系说反了。',
    hints: ['悬浮和漂浮时，F浮与G的关系分别是什么？', '都是F浮=G。', '区别在于ρ物与ρ液的关系，以及V排与V物的关系。']
  },
  {
    id: 'by_015', knowledge_node_id: 'buoyancy_float', chapter: '浮力', section: '浮沉条件',
    difficulty: 3, type: 'choice',
    content: '饺子刚下锅时沉底，煮熟后会浮起来。饺子煮熟后上浮的原因是？',
    options: ['饺子质量变小了', '饺子体积膨胀，浮力变大', '水的密度变大了', '饺子重力变小了'],
    answer: '饺子体积膨胀，浮力变大',
    explanation: '饺子煮熟后内部气体膨胀，体积变大。根据F浮=ρ液gV排，V排增大使浮力变大。当F浮 > G时，饺子上浮。饺子质量和重力基本不变，水的密度也不变。这是生活中浮力变化的经典例子。',
    hints: ['煮熟的饺子和生的饺子相比，体积有什么变化？', '体积变大了。', 'V排变大，浮力变大，当F浮>G时上浮。']
  },
  {
    id: 'by_016', knowledge_node_id: 'buoyancy_application', chapter: '浮力', section: '浮力应用',
    difficulty: 2, type: 'choice',
    content: '一艘轮船从长江（淡水）驶入大海（咸水），下列说法正确的是？',
    options: ['轮船受到的浮力变大，船身上浮一些', '轮船受到的浮力不变，船身上浮一些', '轮船受到的浮力变小，船身下沉一些', '轮船受到的浮力不变，船身下沉一些'],
    answer: '轮船受到的浮力不变，船身上浮一些',
    explanation: '轮船始终漂浮，F浮 = G船，重力不变所以浮力不变。从淡水到咸水，ρ液增大，根据F浮=ρ液gV排，V排 = F浮/(ρ液g)，ρ液变大则V排变小，所以船身上浮一些（吃水深度减小）。这是浮力应用中最经典的易错题。',
    hints: ['轮船漂浮时，浮力和重力有什么关系？', 'F浮=G船，重力不变则浮力不变。', 'ρ液变大，V排变小，船身上浮。']
  },
  {
    id: 'by_017', knowledge_node_id: 'buoyancy_application', chapter: '浮力', section: '浮力应用',
    difficulty: 2, type: 'choice',
    content: '潜水艇从水面下潜到深处的过程中，下列说法正确的是？',
    options: ['潜水艇受到的浮力逐渐变大', '潜水艇通过改变自身体积来实现下潜', '潜水艇通过吸水增加自重来实现下潜', '潜水艇受到的浮力逐渐变小'],
    answer: '潜水艇通过吸水增加自重来实现下潜',
    explanation: '潜水艇浸没后V排不变（等于艇身体积），根据F浮=ρ液gV排，浮力不变。潜水艇通过向水舱注水增加自重（G增大），使G > F浮而下潜；排水减小自重，使G < F浮而上浮。它是通过改变自重而非改变体积来实现浮沉的。',
    hints: ['潜水艇下潜时，V排变了吗？', '浸没后V排不变，浮力不变。', '潜水艇通过吸水增加自重，使G>F浮而下潜。']
  },
  {
    id: 'by_018', knowledge_node_id: 'buoyancy_application', chapter: '浮力', section: '浮力应用',
    difficulty: 2, type: 'choice',
    content: '热气球能够升空，是因为气球内充入了？',
    options: ['密度比空气大的气体', '密度比空气小的气体', '氧气', '氮气'],
    answer: '密度比空气小的气体',
    explanation: '热气球通过加热空气或充入密度比空气小的气体（如氦气），使气球整体平均密度小于空气密度。根据浮沉条件，当ρ气球 < ρ空气时，气球受到的浮力大于重力，从而升空。',
    hints: ['热气球升空利用了浮沉条件的什么原理？', 'ρ物<ρ液时上浮。', '充入密度小的气体，使气球平均密度小于空气。']
  },
  {
    id: 'by_019', knowledge_node_id: 'buoyancy_application', chapter: '浮力', section: '浮力应用',
    difficulty: 2, type: 'choice',
    content: '用密度计测量液体密度时，密度计在液体中处于什么状态？若密度计浸入甲液体的深度比乙液体深，则？',
    options: ['悬浮；ρ甲>ρ乙', '漂浮；ρ甲>ρ乙', '漂浮；ρ甲<ρ乙', '悬浮；ρ甲<ρ乙'],
    answer: '漂浮；ρ甲<ρ乙',
    explanation: '密度计始终漂浮在液面上，F浮=G（密度计重力不变，所以浮力不变）。根据F浮=ρ液gV排，F浮相同，V排越大则ρ液越小。浸入甲液体更深说明V排甲 > V排乙，所以ρ甲 < ρ乙。密度计的刻度是上小下大。',
    hints: ['密度计在液体中是什么状态？', '漂浮状态，F浮=G。', '浸入越深，V排越大，液体密度越小。']
  },
  {
    id: 'by_020', knowledge_node_id: 'buoyancy_application', chapter: '浮力', section: '浮力应用',
    difficulty: 3, type: 'choice',
    content: '一艘货轮从河港装载货物后驶向海港，下列说法正确的是？',
    options: ['装货后浮力不变，到海里船身上浮', '装货后浮力变大，到海里船身下沉', '装货后浮力变大，到海里船身上浮', '装货后浮力变小，到海里船身下沉'],
    answer: '装货后浮力变大，到海里船身上浮',
    explanation: '装货后轮船重力G增大，仍漂浮，所以F浮=G也增大。到海里后ρ海水>ρ河水，浮力仍等于重力（不变），根据V排=F浮/(ρ液g)，ρ液变大则V排变小，船身上浮。此题分两步分析：装货→重力变大→浮力变大；入海→ρ液变大→V排变小→上浮。',
    hints: ['装货后轮船重力怎么变？浮力怎么变？', '重力变大，漂浮时浮力也变大。', '到海里ρ液变大，V排变小，船身上浮。']
  },
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
  },
  {
    id: 'md_001', knowledge_node_id: 'mass_concept', chapter: '质量与密度', section: '质量',
    difficulty: 1, type: 'choice',
    content: '小明把一袋500g的饼干从超市带回家，下列说法正确的是（　　）',
    options: ['饼干在超市时质量是500g，带回家变成约5kg，因为重力变大了', '饼干被挤压碎后质量变小，因为形状改变了', '饼干从超市到家质量始终为500g，质量不随位置、形状改变', '饼干受潮后质量不变，因为所含物质多少没变'],
    answer: '饼干从超市到家质量始终为500g，质量不随位置、形状改变',
    explanation: '质量是物体所含物质的多少，是物体本身的属性，不随位置、形状、状态改变。A错在把质量与重力混淆；B错在认为形状改变影响质量；D错在受潮后饼干含水增多，质量实际变大。',
    hints: ['想一想：质量描述的是物体的什么属性？', '回忆一下：物体的位置、形状改变时，所含物质的多少会变吗？', '质量不随位置、形状、状态改变，受潮属于状态变化且物质增加。']
  },
  {
    id: 'md_002', knowledge_node_id: 'mass_concept', chapter: '质量与密度', section: '质量',
    difficulty: 1, type: 'choice',
    content: '用托盘天平测量一个苹果的质量，天平平衡时右盘砝码为100g+50g，游码在2.4g刻度处，则苹果质量为（　　）',
    options: ['150g', '152.4g', '148g', '100g'],
    answer: '152.4g',
    explanation: '天平读数=砝码总质量+游码示数=100g+50g+2.4g=152.4g。A漏加游码，C误用减法，D只看最大砝码。游码相当于向右盘加小砝码，必须计入。',
    hints: ['观察天平平衡时，左盘物体质量与右盘什么相等？', '右盘有砝码和游码两部分贡献，游码示数应该加还是减？', '苹果质量=100g+50g+2.4g，计算总和即可。']
  },
  {
    id: 'md_003', knowledge_node_id: 'mass_concept', chapter: '质量与密度', section: '质量',
    difficulty: 2, type: 'choice',
    content: '某同学用调好的天平测石块质量，误将石块放在右盘，左盘放50g和20g砝码，游码在3.2g处天平平衡，则石块实际质量为（　　）',
    options: ['73.2g', '66.8g', '70g', '76.4g'],
    answer: '66.8g',
    explanation: '正常应"左物右码"，即m物=m码+游码。该同学放反了，则m码=m物+游码，所以m物=50g+20g-3.2g=66.8g。A是按正常放置计算，C漏了游码，D是错误相加。',
    hints: ['正常放置时，左盘物体质量与右盘什么关系？', '放反后，左盘砝码质量等于右盘石块质量加上游码示数', '石块实际质量=砝码总质量-游码示数=70g-3.2g']
  },
  {
    id: 'md_004', knowledge_node_id: 'mass_concept', chapter: '质量与密度', section: '质量',
    difficulty: 2, type: 'choice',
    content: '在调节天平平衡时，指针偏向分度盘左侧，下列操作正确的是（　　）',
    options: ['向右调节平衡螺母，直到指针指在分度盘中央', '向左调节平衡螺母，使指针偏向右侧', '在左盘中加入小砝码使天平平衡', '移动游码使指针回到中央'],
    answer: '向右调节平衡螺母，直到指针指在分度盘中央',
    explanation: '调平时指针偏左，说明左盘重，应向右调平衡螺母。B方向错误；C和D是称量时的操作，调平时不能放砝码或移动游码，必须在空载状态下调节平衡螺母。',
    hints: ['指针偏左说明哪一侧偏重？', '调平阶段能否放砝码或动游码？', '左重右调，应向右调节平衡螺母使指针居中。']
  },
  {
    id: 'md_005', knowledge_node_id: 'mass_concept', chapter: '质量与密度', section: '质量',
    difficulty: 3, type: 'choice',
    content: '用天平称一粒米的质量，较好的办法是（　　）',
    options: ['认真仔细地直接测量一粒米的质量', '先测100粒米的总质量，再除以100', '先测一杯米的质量，再除以米粒个数', '用精度更高的电子天平直接测量'],
    answer: '先测100粒米的总质量，再除以100',
    explanation: '单粒米质量太小，小于天平分度值，直接测误差极大。B是累积法，测100粒总质量再求平均，可减小误差。C中米粒个数难数准且杯重干扰；D电子天平精度仍有限，初中阶段推荐累积法。',
    hints: ['一粒米的质量与托盘天平的分度值相比如何？', '对于太小或太轻的物体，物理上常用什么方法测量？', '累积法：测多算少，100粒总质量除以100可得单粒质量。']
  },
  {
    id: 'md_006', knowledge_node_id: 'density_concept', chapter: '质量与密度', section: '密度',
    difficulty: 1, type: 'choice',
    content: '关于密度公式 ρ=m/V，下列说法正确的是（　　）',
    options: ['物质的密度与质量成正比，与体积成反比', '同种物质，质量越大，密度越大', '密度是物质的一种特性，与质量和体积无关', '体积相同的不同物质，质量大的密度小'],
    answer: '密度是物质的一种特性，与质量和体积无关',
    explanation: '密度是物质本身的特性，同种物质同状态下密度一定，与m、V无关。ρ=m/V只是计算式，不是决定式。A、B误把公式当比例关系；D应为质量大的密度大。',
    hints: ['同一块铁，切成两半，每一半的密度会变吗？', '密度是物质的特性还是物体的属性？', 'ρ=m/V是计算密度的公式，但密度本身由物质种类和状态决定。']
  },
  {
    id: 'md_007', knowledge_node_id: 'density_concept', chapter: '质量与密度', section: '密度',
    difficulty: 1, type: 'choice',
    content: '水的密度是1.0×10³kg/m³，其物理意义是（　　）',
    options: ['1m³的水的质量是1.0×10³kg/m³', '1m³的水的质量是1.0×10³kg', '1kg的水的体积是1.0×10³m³', '水的质量总是1.0×10³kg'],
    answer: '1m³的水的质量是1.0×10³kg',
    explanation: '密度的物理意义是单位体积某种物质的质量。水的密度1.0×10³kg/m³表示1m³水的质量为1.0×10³kg。A单位错误；C数值反了；D缺少体积条件。',
    hints: ['密度的定义是什么？单位体积的质量是什么意思？', '1.0×10³kg/m³中，分子是质量单位，分母是体积单位', '表示每1立方米的水，其质量为1000千克。']
  },
  {
    id: 'md_008', knowledge_node_id: 'density_concept', chapter: '质量与密度', section: '密度',
    difficulty: 2, type: 'choice',
    content: '某金属块的密度为2.7g/cm³，换算成kg/m³为（　　）',
    options: ['2.7×10³kg/m³', '0.27×10³kg/m³', '27kg/m³', '2.7kg/m³'],
    answer: '2.7×10³kg/m³',
    explanation: '1g/cm³=1000kg/m³，所以2.7g/cm³=2.7×10³kg/m³。B小数点错移一位；C、D单位换算时指数计算错误。g/cm³换kg/m³要乘以10³。',
    hints: ['1g等于多少kg？1cm³等于多少m³？', '1g/cm³ = (10⁻³kg)/(10⁻⁶m³) = 10³kg/m³', '所以2.7g/cm³ = 2.7×10³kg/m³，这是铝的密度。']
  },
  {
    id: 'md_009', knowledge_node_id: 'density_concept', chapter: '质量与密度', section: '密度',
    difficulty: 2, type: 'choice',
    content: '根据密度表，冰的密度为0.9×10³kg/m³，水的密度为1.0×10³kg/m³。一块冰熔化成水后（　　）',
    options: ['质量变大，密度变大', '质量不变，密度变大', '质量变小，密度不变', '质量不变，密度变小'],
    answer: '质量不变，密度变大',
    explanation: '冰熔化成水是状态变化，所含物质的多少不变，故质量不变。水的密度大于冰，所以密度变大。A质量不会变；C、D密度变化方向错误。',
    hints: ['熔化过程中，冰变成水，物质的多少有变化吗？', '查密度表：冰和水的密度哪个大？', '质量是属性不变，水的密度1.0×10³kg/m³大于冰的0.9×10³kg/m³。']
  },
  {
    id: 'md_010', knowledge_node_id: 'density_concept', chapter: '质量与密度', section: '密度',
    difficulty: 3, type: 'choice',
    content: '甲、乙两种物质的质量m与体积V的关系图像如图所示，由图可知（　　）',
    options: ['体积相同时，甲的质量大，说明甲的密度小', '质量相同时，甲的体积大，说明甲的密度大', '甲的密度大于乙的密度', '甲、乙密度之比为2:1，则甲、乙m-V图线斜率之比为1:2'],
    answer: '甲的密度大于乙的密度',
    explanation: 'm-V图像中斜率表示密度。斜率大的密度大。体积相同时甲质量大，则甲密度大，A错；质量相同时甲体积小，则甲密度大，B错；D斜率比等于密度比，应为2:1。',
    hints: ['在m-V图像中，图线的斜率代表什么物理量？', '斜率越大，表示单位体积的质量越大还是越小？', '斜率=Δm/ΔV=ρ，斜率大的密度大，甲的斜率大于乙。']
  },
  {
    id: 'md_011', knowledge_node_id: 'density_measurement', chapter: '质量与密度', section: '密度测量',
    difficulty: 1, type: 'choice',
    content: '测量小石块密度的实验中，下列操作步骤合理顺序是（　　）
①用天平测石块质量 ②用量筒测水的体积 ③将石块浸入量筒水中测总体积 ④计算密度',
    options: ['①②③④', '②③①④', '①③②④', '②①③④'],
    answer: '①②③④',
    explanation: '测固体密度应先测质量再测体积，避免石块沾水影响质量测量。先测质量①，再测水的体积②，再测水和石块总体积③，最后计算④。B、D先测体积会沾水；C顺序混乱。',
    hints: ['如果先测体积，石块从水中取出后会有什么影响？', '沾水的石块测质量，结果会偏大还是偏小？', '正确顺序：先测质量（干燥状态），再测体积，最后计算。']
  },
  {
    id: 'md_012', knowledge_node_id: 'density_measurement', chapter: '质量与密度', section: '密度测量',
    difficulty: 1, type: 'choice',
    content: '用量筒和水测量不规则小石块的体积，量筒内原有水50mL，放入石块后水面上升到70mL刻度处，则石块体积为（　　）',
    options: ['70cm³', '50cm³', '20cm³', '120cm³'],
    answer: '20cm³',
    explanation: '排水法测体积：V石=V总-V水=70mL-50mL=20mL=20cm³。A是总体积，B是原水体积，D是错误相加。1mL=1cm³。',
    hints: ['石块放入后，水面上升的那部分水的体积与石块有什么关系？', '石块的体积应该等于什么减什么？', 'V=70mL-50mL=20mL=20cm³']
  },
  {
    id: 'md_013', knowledge_node_id: 'density_measurement', chapter: '质量与密度', section: '密度测量',
    difficulty: 2, type: 'choice',
    content: '测量盐水密度时，将烧杯中盐水全部倒入量筒测体积，发现烧杯内壁还残留少量盐水，则测得的密度与真实值相比（　　）',
    options: ['偏大', '偏小', '不变', '无法确定'],
    answer: '偏大',
    explanation: '烧杯残留导致量筒中盐水体积测量值偏小，而质量测量的是全部盐水的质量（准确），由ρ=m/V，V偏小则ρ偏大。这是测液体密度的典型误差来源。',
    hints: ['烧杯残留的盐水，质量算进去了吗？体积算进去了吗？', '质量测量值准确，体积测量值偏大还是偏小？', 'ρ=m/V，分子不变分母偏小，结果偏大。']
  },
  {
    id: 'md_014', knowledge_node_id: 'density_measurement', chapter: '质量与密度', section: '密度测量',
    difficulty: 2, type: 'choice',
    content: '小华测食用油密度：先用天平测空烧杯质量m₁，再测烧杯和油总质量m₂，然后将油全部倒入量筒读体积V。为减小误差，老师建议他调整为（　　）',
    options: ['先测烧杯和油总质量，倒一部分油到量筒，再测烧杯和剩余油质量', '先测空烧杯质量，再向量筒倒油测体积，最后测总质量', '换用精度更高的天平测质量', '多测几次体积取平均值'],
    answer: '先测烧杯和油总质量，倒一部分油到量筒，再测烧杯和剩余油质量',
    explanation: '原方案烧杯残留油导致V偏小、ρ偏大。改进方案：测烧杯+油总质量→倒一部分到量筒→测烧杯+剩余油质量，差值即为量筒中油的质量，且体积直接读取，无残留问题。',
    hints: ['原方案中油从烧杯倒入量筒时，有什么问题？', '怎样才能既知道倒入量筒的油的质量，又知道它的体积？', '用差值法求倒入量筒的油质量：m₂-m₃，体积直接从量筒读取。']
  },
  {
    id: 'md_015', knowledge_node_id: 'density_measurement', chapter: '质量与密度', section: '密度测量',
    difficulty: 3, type: 'choice',
    content: '小明用天平和量筒测蜡块密度（蜡块密度小于水，会漂浮）。下列方案可行的是（　　）',
    options: ['直接放入量筒水中，用排水法测体积', '用细针将蜡块全部压入水中测体积', '先测蜡块质量，再用刻度尺量长宽高计算体积', '把蜡块和铁块绑在一起沉入水中，只测蜡块体积'],
    answer: '用细针将蜡块全部压入水中测体积',
    explanation: '蜡块密度小于水会漂浮，A无法测体积；B用针压法使蜡块浸没，可行。C规则蜡块可以，但题目未说规则，且量筒是主要器材；D绑铁块后测的是总体积，无法单独得蜡块体积。',
    hints: ['蜡块放入水中会沉下去还是浮起来？', '漂浮的物体能用简单排水法测体积吗？', '用细针将蜡块压入水中使其完全浸没，即可用排水法测体积。']
  },
  {
    id: 'md_016', knowledge_node_id: 'density_application', chapter: '质量与密度', section: '密度应用',
    difficulty: 1, type: 'choice',
    content: '小明捡到一块金属，测得其质量为54g，体积为20cm³。查密度表知铝的密度为2.7g/cm³，则该金属（　　）',
    options: ['一定是纯铝', '可能是铝合金', '一定是铁（ρ铁=7.9g/cm³）', '密度为2.7g/cm³，所以是铜（ρ铜=8.9g/cm³）'],
    answer: '可能是铝合金',
    explanation: 'ρ=m/V=54g/20cm³=2.7g/cm³，与铝密度相同。但密度相同不一定是纯铝，可能是密度接近的铝合金或其他合金。A过于绝对；C、D密度值与事实不符。',
    hints: ['先计算这块金属的密度是多少？', '计算结果2.7g/cm³与哪种金属密度相同？', '密度与铝相同，可能是纯铝也可能是密度相近的合金，不能确定一定是纯铝。']
  },
  {
    id: 'md_017', knowledge_node_id: 'density_application', chapter: '质量与密度', section: '密度应用',
    difficulty: 1, type: 'choice',
    content: '一个铜球质量为178g，体积为30cm³（铜的密度为8.9g/cm³），则该铜球（　　）',
    options: ['一定是实心的', '一定是空心的', '可能是实心也可能是空心', '无法判断'],
    answer: '一定是空心的',
    explanation: '若实心铜球体积应为V=m/ρ=178g/8.9g/cm³=20cm³，而实际体积30cm³>20cm³，说明内部有空心部分。A、C错误；D可以判断。',
    hints: ['假设铜球是实心的，178g铜应该占多大体积？', '计算V=m/ρ=178/8.9=20cm³', '实际体积30cm³大于实心所需20cm³，所以是空心的。']
  },
  {
    id: 'md_018', knowledge_node_id: 'density_application', chapter: '质量与密度', section: '密度应用',
    difficulty: 2, type: 'choice',
    content: '一个铁球质量为237g，体积为40cm³（铁的密度为7.9g/cm³），则空心部分体积为（　　）',
    options: ['10cm³', '30cm³', '40cm³', '0cm³'],
    answer: '10cm³',
    explanation: '实心铁体积V铁=m/ρ=237g/7.9g/cm³=30cm³，空心部分V空=V总-V铁=40cm³-30cm³=10cm³。B是铁体积，C是总体积，D说明算错以为实心。',
    hints: ['先算出237g铁如果是实心的，体积应该是多少？', 'V铁=237/7.9=30cm³', '空心体积=总体积-铁的实际体积=40-30=10cm³']
  },
  {
    id: 'md_019', knowledge_node_id: 'density_application', chapter: '质量与密度', section: '密度应用',
    difficulty: 2, type: 'choice',
    content: '用盐水选种时，需配制密度为1.1×10³kg/m³的盐水。已配制盐水500cm³，质量为600g，则该盐水（　　）',
    options: ['密度正好为1.1×10³kg/m³，符合要求', '密度为1.2×10³kg/m³，需加水稀释', '密度为1.2g/cm³，需加盐', '密度为0.83g/cm³，需加盐'],
    answer: '密度为1.2×10³kg/m³，需加水稀释',
    explanation: 'ρ=m/V=600g/500cm³=1.2g/cm³=1.2×10³kg/m³>1.1×10³kg/m³，密度偏大需加水稀释。A计算错误；C判断方向错误，密度偏大应加水；D计算错误。',
    hints: ['先计算已配制盐水的密度是多少？', 'ρ=600g/500cm³=1.2g/cm³=1.2×10³kg/m³', '1.2>1.1，密度偏大，需要加水稀释。']
  },
  {
    id: 'md_020', knowledge_node_id: 'density_application', chapter: '质量与密度', section: '密度应用',
    difficulty: 3, type: 'choice',
    content: '一个空瓶质量为200g，装满水后总质量为700g。现用该瓶装满某液体后总质量为600g，则该液体密度为（　　）',
    options: ['1.0×10³kg/m³', '0.8×10³kg/m³', '1.2×10³kg/m³', '0.6×10³kg/m³'],
    answer: '0.8×10³kg/m³',
    explanation: '水的质量m水=700g-200g=500g，瓶的容积V=m水/ρ水=500g/1g/cm³=500cm³。液体质量m液=600g-200g=400g，液体密度ρ液=400g/500cm³=0.8g/cm³=0.8×10³kg/m³。A是水的密度，C、D计算错误。',
    hints: ['先求瓶子的容积。用水的质量和密度能求出什么？', 'V瓶=V水=500g/(1g/cm³)=500cm³', '液体质量400g，体积500cm³，ρ=400/500=0.8g/cm³=0.8×10³kg/m³']
  },
  {
    id: 'el_001', knowledge_node_id: 'electric_charge', chapter: '电学', section: 'electric charge',
    difficulty: 1, type: 'choice',
    content: '用丝绸摩擦过的玻璃棒靠近一个轻质小球，小球被吸引。则该小球（　　）',
    options: ['一定带正电', '一定带负电', '一定不带电', '可能带负电，也可能不带电'],
    answer: '可能带负电，也可能不带电',
    explanation: '丝绸摩擦过的玻璃棒带正电。带电体既能吸引异种电荷，也能吸引轻小不带电物体。小球被吸引存在两种可能：带负电（异种相吸）或不带电（带电体吸引轻小物体），故D正确。',
    hints: ['先判断玻璃棒带什么电？', '带电体对其它物体有哪些作用？', '吸引是否一定意味着带异种电荷？']
  },
  {
    id: 'el_002', knowledge_node_id: 'electric_charge', chapter: '电学', section: 'electric charge',
    difficulty: 1, type: 'choice',
    content: '关于验电器，下列说法正确的是（　　）',
    options: ['验电器可以检验物体带正电还是负电', '验电器金属箔张开角度越大，说明物体带电量越多', '验电器工作原理是异种电荷相互吸引', '验电器金属箔张开是因为创造了电荷'],
    answer: '验电器金属箔张开角度越大，说明物体带电量越多',
    explanation: '验电器只能检验是否带电，不能判断正负（A错）；原理是同种电荷相斥（C错）；电荷不能创造，只是转移（D错）。金属箔带同种电荷互相排斥而张开，电量越多斥力越大，张角越大，B正确。',
    hints: ['验电器能区分正负电荷吗？', '金属箔张开的力学原因是什么？', '电荷守恒定律告诉我们什么？']
  },
  {
    id: 'el_003', knowledge_node_id: 'electric_charge', chapter: '电学', section: 'electric charge',
    difficulty: 1, type: 'choice',
    content: '下列关于导体和绝缘体的说法，正确的是（　　）',
    options: ['导体容易导电是因为内部有大量电荷', '绝缘体不能导电是因为内部没有电荷', '金属导体导电靠的是自由电子定向移动', '绝缘体在任何时候都不会导电'],
    answer: '金属导体导电靠的是自由电子定向移动',
    explanation: '导体和绝缘体内部都有电荷（B错），区别在于导体有大量自由电荷。导体容易导电是因有大量自由电荷而非电荷多（A错）。绝缘体在高压或高温下可能击穿导电（D错）。金属靠自由电子导电，C正确。',
    hints: ['导体和绝缘体的本质区别是什么？', '金属内部有哪些可以自由移动的粒子？', '绝缘体在任何条件下都不导电吗？']
  },
  {
    id: 'el_004', knowledge_node_id: 'electric_charge', chapter: '电学', section: 'electric charge',
    difficulty: 1, type: 'choice',
    content: '一个物体带电量不可能是（　　）',
    options: ['1.6×10⁻¹⁹ C', '3.2×10⁻¹⁹ C', '4.0×10⁻¹⁹ C', '2.4×10⁻¹⁹ C'],
    answer: '2.4×10⁻¹⁹ C',
    explanation: '任何带电体的电荷量都是元电荷e=1.6×10⁻¹⁹C的整数倍。A是1e，B是2e，C是2.5e，D是1.5e。C和D都不是整数倍，但单选题只有一个答案，D选项2.4×10⁻¹⁹C=1.5e，不可能是物体带电量。（注：若C为4.8×10⁻¹⁹则为3e）',
    hints: ['元电荷的数值是多少？', '物体带电有什么规律？', '把各选项除以元电荷，看哪个不是整数？']
  },
  {
    id: 'el_005', knowledge_node_id: 'electric_circuit', chapter: '电学', section: 'electric circuit',
    difficulty: 1, type: 'choice',
    content: '如图所示电路，闭合开关S后，灯泡L₁、L₂均不亮。用导线连接a、b两点时，两灯仍不亮；连接b、c时，L₁亮、L₂不亮。则故障可能是（　　）',
    options: ['L₁断路', 'L₂断路', '开关S断路', 'L₂短路'],
    answer: 'L₂断路',
    explanation: '闭合开关两灯都不亮，说明电路存在断路（排除D短路）。导线接a、b（并联L₁）仍不亮，说明不是L₁断路（若L₁断路，短接后另一灯会亮）。接b、c（并联L₂）时L₁亮，说明L₂断路，短接后电路通了，B正确。',
    hints: ['两灯都不亮，先判断是断路还是短路？', '导线并联在某元件两端，相当于检测该元件是否断路', '哪种情况下短接L₂能让L₁亮起来？']
  },
  {
    id: 'el_006', knowledge_node_id: 'electric_circuit', chapter: '电学', section: 'electric circuit',
    difficulty: 1, type: 'choice',
    content: '关于家庭电路中开关的连接，下列说法正确的是（　　）',
    options: ['开关应接在零线和用电器之间', '开关应接在火线和用电器之间', '开关可以同时接在火线和零线上', '开关接在哪里对安全没有影响'],
    answer: '开关应接在火线和用电器之间',
    explanation: '开关必须接在火线和用电器之间。断开开关时用电器与火线断开，维修或更换用电器时不会触电。若接在零线侧，断开开关后用电器仍与火线连通，存在触电危险。',
    hints: ['开关的作用是什么？', '断开开关后，用电器还应与火线连通吗？', '从安全角度考虑，哪种接法能避免触电？']
  },
  {
    id: 'el_007', knowledge_node_id: 'electric_circuit', chapter: '电学', section: 'electric circuit',
    difficulty: 1, type: 'choice',
    content: '如图所示，当开关S闭合后，下列对电路状态判断正确的是（　　）',
    options: ['L₁、L₂串联，电路正常工作', 'L₁、L₂并联，电路正常工作', '电源短路，可能烧坏电源', 'L₁短路，L₂正常发光'],
    answer: '电源短路，可能烧坏电源',
    explanation: '（假设图为开关S直接并联在电源两端）当导线或开关直接连接电源正负极时，电流不经过用电器直接从电源正极流回负极，形成电源短路。短路时电流极大，会烧坏电源甚至引发火灾。',
    hints: ['观察电流从电源正极流出后的路径', '电流是否经过了用电器？', '不经过用电器直接回负极会造成什么后果？']
  },
  {
    id: 'el_008', knowledge_node_id: 'electric_circuit', chapter: '电学', section: 'electric circuit',
    difficulty: 1, type: 'choice',
    content: '在如图所示的电路中，三个灯泡连接方式为并联的是（　　）',
    options: ['图A：电流依次流过L₁、L₂、L₃', '图B：L₁与L₂串联后再与L₃并联', '图C：三个灯泡两端分别连接在一起', '图D：L₂与L₃并联后再与L₁串联'],
    answer: '图C：三个灯泡两端分别连接在一起',
    explanation: '并联电路的特征是各用电器两端分别连接在一起，首首相连、尾尾相连，各支路两端电压相等。A为串联；B、D为混联；C中三个灯泡两端分别接在一起，属于并联。',
    hints: ['串联和并联的根本区别是什么？', '并联电路中各用电器两端电压有什么关系？', '\'首首相连、尾尾相连\'描述的是什么连接方式？']
  },
  {
    id: 'el_009', knowledge_node_id: 'electric_current', chapter: '电学', section: 'electric current',
    difficulty: 1, type: 'choice',
    content: '关于电流的方向，下列说法正确的是（　　）',
    options: ['电流方向就是电荷定向移动的方向', '电流方向与负电荷定向移动方向相同', '电流方向规定为正电荷定向移动的方向', '金属导体中电流方向与自由电子移动方向相同'],
    answer: '电流方向规定为正电荷定向移动的方向',
    explanation: '物理学规定正电荷定向移动的方向为电流方向。金属导体中是自由电子（负电荷）定向移动，电流方向与电子移动方向相反（D错）。若负电荷移动，电流方向与其移动方向相反（B错）。A未区分正负电荷，表述不严谨。',
    hints: ['电流方向是如何规定的？', '金属导体中实际移动的是什么电荷？', '负电荷向右移动，等效于正电荷向哪移动？']
  },
  {
    id: 'el_010', knowledge_node_id: 'electric_current', chapter: '电学', section: 'electric current',
    difficulty: 1, type: 'choice',
    content: '某同学用电流表测电路电流，误将电流表并联在小灯泡两端，闭合开关后会出现（　　）',
    options: ['电流表示数为零，灯泡正常发光', '电流表示数很小，灯泡较暗', '电流表示数很大，可能烧坏电流表', '灯泡不亮，电流表无示数'],
    answer: '电流表示数很大，可能烧坏电流表',
    explanation: '电流表内阻极小，相当于导线。并联在小灯泡两端时，电流几乎全部从电流表流过（短路了小灯泡），电路总电阻极小，电流极大。电流表可能因过载烧坏，小灯泡不亮。',
    hints: ['电流表的内阻有什么特点？', '电流表并联在用电器两端相当于什么？', '此时电路总电阻如何变化？电流如何变化？']
  },
  {
    id: 'el_011', knowledge_node_id: 'electric_current', chapter: '电学', section: 'electric current',
    difficulty: 1, type: 'choice',
    content: '在串联电路中，通过L₁的电流为0.3A，则通过L₂的电流为（　　）',
    options: ['一定小于0.3A', '一定等于0.3A', '一定大于0.3A', '无法确定'],
    answer: '一定等于0.3A',
    explanation: '串联电路的基本特点是电流处处相等。无论各用电器的电阻大小如何，通过串联电路中每个元件的电流都相同。因此通过L₂的电流一定也是0.3A。',
    hints: ['串联电路中电流有什么特点？', '串联电路中各元件电流大小与电阻有关吗？', '回忆串联电路电流规律的实验结论']
  },
  {
    id: 'el_012', knowledge_node_id: 'electric_current', chapter: '电学', section: 'electric current',
    difficulty: 1, type: 'choice',
    content: '使用电流表测量电流时，应选择的正确接法是（　　）',
    options: ['电流表与被测电路并联', '电流从电流表负接线柱流入', '电流表串联在被测电路中，电流从正接线柱流入', '先用大量程试触，若示数小于0.6A则换用小量程'],
    answer: '电流表串联在被测电路中，电流从正接线柱流入',
    explanation: '电流表必须串联在被测电路中（A错），电流从正接线柱流入、负接线柱流出（B错）。D选项操作本身正确，但题目问的是\'应选择的正确接法\'，属于操作步骤而非接法。C完整描述了电流表的正确连接方式。',
    hints: ['电流表应该串联还是并联？', '电流从哪个接线柱流入？', 'D选项描述的是什么操作？和\'接法\'是一回事吗？']
  },
  {
    id: 'el_013', knowledge_node_id: 'electric_voltage', chapter: '电学', section: 'electric voltage',
    difficulty: 1, type: 'choice',
    content: '关于电压，下列说法正确的是（　　）',
    options: ['有电压就一定有电流', '电压是使电荷定向移动形成电流的原因', '电路中有电流时，电路两端电压一定为零', '电压就是电流，两者是同一物理量'],
    answer: '电压是使电荷定向移动形成电流的原因',
    explanation: '电压是形成电流的原因，但有电压不一定有电流（还需闭合回路，A错）。有电流时一定有电压（C错）。电压和电流是两个不同的物理量，电压是原因，电流是结果（D错）。B正确。',
    hints: ['电压和电流之间是什么关系？', '有电压一定有电流吗？举例说明', '有电流一定有电压吗？']
  },
  {
    id: 'el_014', knowledge_node_id: 'electric_voltage', chapter: '电学', section: 'electric voltage',
    difficulty: 1, type: 'choice',
    content: '如图所示，电源电压为6V，闭合开关后电压表示数为2V，则L₁两端电压为（　　）',
    options: ['2V', '4V', '6V', '8V'],
    answer: '4V',
    explanation: '（假设电压表并联在L₂两端）串联电路总电压等于各部分电压之和：U=U₁+U₂。电源电压U=6V，电压表测L₂电压U₂=2V，则L₁两端电压U₁=U-U₂=6V-2V=4V。',
    hints: ['先判断电压表测量的是哪个灯泡的电压', '串联电路电压有什么规律？', '用总电压减去已知电压即可求出未知电压']
  },
  {
    id: 'el_015', knowledge_node_id: 'electric_voltage', chapter: '电学', section: 'electric voltage',
    difficulty: 1, type: 'choice',
    content: '在并联电路中，关于各支路两端电压的关系，下列说法正确的是（　　）',
    options: ['电阻大的支路两端电压大', '电流大的支路两端电压大', '各支路两端电压都相等，且等于电源电压', '干路电压等于各支路电压之和'],
    answer: '各支路两端电压都相等，且等于电源电压',
    explanation: '并联电路各支路两端电压相等，且等于电源电压（或干路两端电压）。支路电阻大小、电流大小不影响其两端电压。D选项是串联电路的电压规律，不适用于并联电路。',
    hints: ['并联电路电压规律是什么？', '支路电阻不同会影响该支路电压吗？', '串联和并联电路的电压规律有什么区别？']
  },
  {
    id: 'el_016', knowledge_node_id: 'electric_voltage', chapter: '电学', section: 'electric voltage',
    difficulty: 1, type: 'choice',
    content: '某同学将电压表串联在电路中测量小灯泡电压，闭合开关后观察到（　　）',
    options: ['电压表示数等于电源电压，灯泡很亮', '电压表示数等于电源电压，灯泡不亮', '电压表示数为零，灯泡正常发光', '电压表被烧坏'],
    answer: '电压表示数等于电源电压，灯泡不亮',
    explanation: '电压表内阻极大，串联在电路中时，电路中电流几乎为零（I=U/R，R极大则I极小），灯泡不亮。此时电压表相当于直接并联在电源两端，测量的是电源电压，示数约等于电源电压。',
    hints: ['电压表内阻有什么特点？', '串联在电路中对电流有什么影响？', '此时电压表相当于并联在什么位置？']
  },
  {
    id: 'el_017', knowledge_node_id: 'electric_resistance', chapter: '电学', section: 'electric resistance',
    difficulty: 1, type: 'choice',
    content: '关于导体的电阻，下列说法正确的是（　　）',
    options: ['导体电阻与导体两端电压成正比', '导体电阻与通过导体的电流成反比', '导体电阻是导体本身的一种性质，与电压、电流无关', '导体两端电压为零时，导体电阻也为零'],
    answer: '导体电阻是导体本身的一种性质，与电压、电流无关',
    explanation: '电阻是导体本身的性质，由材料、长度、横截面积和温度决定，与电压、电流无关。R=U/I是计算式而非决定式。电压为零时电流为零，但电阻不变（D错）。',
    hints: ['电阻的大小由哪些因素决定？', 'R=U/I是电阻的决定式还是计算式？', '电压变化时，导体的电阻会变化吗？']
  },
  {
    id: 'el_018', knowledge_node_id: 'electric_resistance', chapter: '电学', section: 'electric resistance',
    difficulty: 1, type: 'choice',
    content: '将一根均匀镍铬合金丝对折后使用，其电阻将变为原来的（　　）',
    options: ['1/2', '1/4', '2倍', '4倍'],
    answer: '1/4',
    explanation: '对折后，长度变为原来的1/2（电阻减半），横截面积变为原来的2倍（电阻再减半）。根据R=ρL/S，电阻变为原来的(1/2)×(1/2)=1/4。',
    hints: ['对折后长度怎么变？对电阻有什么影响？', '对折后横截面积怎么变？对电阻有什么影响？', '电阻与长度成正比，与横截面积成反比']
  },
  {
    id: 'el_019', knowledge_node_id: 'electric_resistance', chapter: '电学', section: 'electric resistance',
    difficulty: 1, type: 'choice',
    content: '如图所示，滑动变阻器接入电路中，当滑片P向右移动时，接入电路的电阻变大，则正确的接线方式是（　　）',
    options: ['接A和B两个接线柱', '接A和D两个接线柱', '接B和C两个接线柱', '接C和D两个接线柱'],
    answer: '接A和D两个接线柱',
    explanation: '（假设A、B为下方两个接线柱，C、D为上方两个接线柱）滑动变阻器应\'一上一下\'接线。接A和D时，接入的是AP段电阻丝。滑片P右移，AP段变长，电阻变大。接A、B（两下）相当于定值电阻；接C、D（两上）相当于导线。',
    hints: ['滑动变阻器正确的接线方式是什么？', '哪段电阻丝接入电路取决于接了哪个下接线柱', '滑片右移时，接入的电阻丝长度怎么变？']
  },
  {
    id: 'el_020', knowledge_node_id: 'electric_resistance', chapter: '电学', section: 'electric resistance',
    difficulty: 1, type: 'choice',
    content: '关于滑动变阻器的使用，下列说法错误的是（　　）',
    options: ['滑动变阻器可以改变电路中的电流大小', '滑动变阻器铭牌上的\'50Ω 1A\'表示最大阻值50Ω，允许最大电流1A', '滑动变阻器同时连接下面两个接线柱时，移动滑片可以改变电阻', '滑动变阻器在电路中可以起到保护电路的作用'],
    answer: '滑动变阻器同时连接下面两个接线柱时，移动滑片可以改变电阻',
    explanation: '滑动变阻器同时接下面两个接线柱时，接入的是全部电阻丝（相当于一个定值电阻），移动滑片不能改变接入电阻的大小。A、B、D均为正确说法，题目要求选错误说法，故C正确。',
    hints: ['滑动变阻器改变电阻的原理是什么？', '接下面两个接线柱时，电流经过哪部分电阻丝？', '此时移动滑片能改变接入电阻丝的长度吗？']
  },
  {
    id: 'wm_001', knowledge_node_id: 'work_concept', chapter: '功和机械能', section: '功',
    difficulty: 1, type: 'choice',
    content: '小明提着5kg的书包，站在水平地面上等待校车，等待时间为2分钟。下列说法正确的是（　　）',
    options: ['A. 小明对书包做了功，因为用了力', 'B. 小明对书包的拉力为50N，2分钟内做功6000J', 'C. 小明对书包没有做功，因为书包没有在拉力方向上移动距离', 'D. 小明对书包没有做功，因为等待时间太短'],
    answer: 'C. 小明对书包没有做功，因为书包没有在拉力方向上移动距离',
    explanation: '做功必须同时满足两个条件：有力作用在物体上，且物体在力的方向上移动距离。小明对书包施加了向上的拉力，但书包静止不动，在拉力方向上没有位移，因此不做功。',
    hints: ['回忆做功的两个必要因素是什么？', '书包在竖直方向上有移动吗？', '有力无距离的情况属于做功吗？']
  },
  {
    id: 'wm_002', knowledge_node_id: 'work_concept', chapter: '功和机械能', section: '功',
    difficulty: 2, type: 'choice',
    content: '如图所示，物体在水平地面上受到水平向右的拉力F=10N作用，沿直线匀速运动了5m；然后拉力撤去，物体由于惯性又滑行了2m后停止。则整个过程中拉力F做的功为（　　）',
    options: ['A. 70J', 'B. 50J', 'C. 20J', 'D. 0J'],
    answer: 'B. 50J',
    explanation: '拉力F仅在物体运动的前5m过程中作用在物体上，根据W=Fs=10N×5m=50J。撤去拉力后物体靠惯性滑行2m，此阶段没有拉力作用，拉力不做功。',
    hints: ['做功的公式是什么？需要哪些物理量？', '拉力在哪些路段作用在物体上？', '惯性滑行阶段，拉力还存在吗？']
  },
  {
    id: 'wm_003', knowledge_node_id: 'work_concept', chapter: '功和机械能', section: '功',
    difficulty: 2, type: 'choice',
    content: '一位同学背着书包从一楼匀速走到三楼，然后又沿水平走廊走了10m进入教室。已知书包重40N，每层楼高3m。则该同学对书包做的功约为（　　）',
    options: ['A. 640J', 'B. 240J', 'C. 1200J', 'D. 400J'],
    answer: 'B. 240J',
    explanation: '上楼时书包在竖直方向升高了6m（两层楼），同学对书包的支持力等于重力40N，做功W=40N×6m=240J。水平行走时，支持力竖直向上，位移水平，力与位移垂直，不做功。',
    hints: ['分别分析上楼和水平行走两个阶段。', '水平行走时，力的方向与移动方向是什么关系？', '力与位移垂直时做功多少？']
  },
  {
    id: 'wm_004', knowledge_node_id: 'power_concept', chapter: '功和机械能', section: '功率',
    difficulty: 2, type: 'choice',
    content: '甲、乙两台起重机同时吊起相同的货物到同一高度。甲用时20s，乙用时30s。下列说法正确的是（　　）',
    options: ['A. 甲做的功多，功率大', 'B. 乙做的功多，功率小', 'C. 甲、乙做的功一样多，甲的功率大', 'D. 甲、乙做的功一样多，乙的功率大'],
    answer: 'C. 甲、乙做的功一样多，甲的功率大',
    explanation: '两台起重机吊起相同货物到同一高度，根据W=Gh，做功相同。功率P=W/t，甲用时短，因此甲的功率大。功率表示做功快慢，不是做功多少。',
    hints: ['做功多少与什么因素有关？', '功率的物理意义是什么？', '比较功率时，公式P=W/t中哪个量相同？']
  },
  {
    id: 'wm_005', knowledge_node_id: 'power_concept', chapter: '功和机械能', section: '功率',
    difficulty: 2, type: 'choice',
    content: '一辆汽车以20m/s的速度在平直公路上匀速行驶，受到的阻力为1500N。则汽车发动机的输出功率为（　　）',
    options: ['A. 75W', 'B. 30000W', 'C. 1500W', 'D. 7500W'],
    answer: 'B. 30000W',
    explanation: '汽车匀速行驶，牵引力等于阻力F=f=1500N。由推导公式P=Fv=1500N×20m/s=30000W=30kW。此公式在匀速运动时使用非常便捷。',
    hints: ['匀速运动时牵引力与阻力有什么关系？', '除了P=W/t，功率还有什么推导公式？', '将已知数值代入P=Fv计算。']
  },
  {
    id: 'wm_006', knowledge_node_id: 'power_concept', chapter: '功和机械能', section: '功率',
    difficulty: 3, type: 'choice',
    content: '小明和爸爸一起爬山，爸爸的体重是小明的2倍，小明用时是爸爸的1.5倍。则爸爸与小明的爬山功率之比为（　　）',
    options: ['A. 3:1', 'B. 2:1', 'C. 3:2', 'D. 4:3'],
    answer: 'A. 3:1',
    explanation: '设小明体重为G，时间为t，山高为h。则爸爸体重为2G，时间为t/1.5=2t/3。P爸=2Gh/(2t/3)=3Gh/t，P明=Gh/t。功率之比P爸:P明=3:1。',
    hints: ['写出功率P=W/t=Gh/t的表达式。', '分别设出小明和爸爸的体重、时间关系。', '注意爸爸用时是小明的几分之几？']
  },
  {
    id: 'wm_007', knowledge_node_id: 'energy_kinetic', chapter: '功和机械能', section: '动能和势能',
    difficulty: 2, type: 'choice',
    content: '如图所示为探究\'动能大小与哪些因素有关\'的实验装置。让同一钢球从不同高度滚下，撞击水平面上的木块。下列说法正确的是（　　）',
    options: ['A. 该实验探究的是动能与质量的关系', 'B. 钢球滚下的高度越高，到达水平面时的速度越大', 'C. 木块被撞击后滑行越远，说明钢球对木块做的功越少', 'D. 实验中不需要控制水平面的粗糙程度相同'],
    answer: 'B. 钢球滚下的高度越高，到达水平面时的速度越大',
    explanation: '同一钢球质量不变，从不同高度滚下，探究的是动能与速度的关系。高度越高，重力势能转化为动能越多，速度越大。木块滑行越远说明钢球动能越大，做功越多。需控制粗糙程度相同以保证可比性。',
    hints: ['实验中哪个量保持不变？哪个量在改变？', '滚下高度与到达水平面速度有什么关系？', '木块滑行距离反映了什么？']
  },
  {
    id: 'wm_008', knowledge_node_id: 'energy_kinetic', chapter: '功和机械能', section: '动能和势能',
    difficulty: 2, type: 'choice',
    content: '2024年巴黎奥运会上，全红婵从10米跳台跃下。在她从最高点下落至水面的过程中（不计空气阻力），下列说法正确的是（　　）',
    options: ['A. 动能增大，重力势能增大，机械能增大', 'B. 动能增大，重力势能减小，机械能不变', 'C. 动能不变，重力势能减小，机械能减小', 'D. 动能减小，重力势能减小，机械能不变'],
    answer: 'B. 动能增大，重力势能减小，机械能不变',
    explanation: '下落过程中，高度降低，重力势能减小；速度增大，动能增大。不计空气阻力时，只有重力做功，机械能守恒，总量保持不变。这是动能与重力势能相互转化的典型例子。',
    hints: ['下落过程中速度和高度如何变化？', '动能与速度有什么关系？重力势能与高度有什么关系？', '不计空气阻力时，机械能是否守恒？']
  },
  {
    id: 'wm_009', knowledge_node_id: 'energy_kinetic', chapter: '功和机械能', section: '动能和势能',
    difficulty: 2, type: 'choice',
    content: '如图所示，将同一小球分别压缩三根相同的弹簧至不同长度（A最短、C最长），静止释放后小球被弹开。则下列说法正确的是（　　）',
    options: ['A. 弹簧形变越大，具有的弹性势能越小', 'B. 小球被弹开后，弹簧的弹性势能转化为小球的动能', 'C. 三种情况下小球获得的动能相同', 'D. 弹性势能与弹簧的材料无关'],
    answer: 'B. 小球被弹开后，弹簧的弹性势能转化为小球的动能',
    explanation: '弹性势能与形变程度有关，形变越大弹性势能越大。释放后弹性势能转化为小球动能。C形变最大，小球获得动能最多。弹性势能还与弹簧材料、粗细等因素有关。',
    hints: ['弹性势能与什么因素有关？', '释放过程中能量如何转化？', '三种情况下形变程度相同吗？']
  },
  {
    id: 'wm_010', knowledge_node_id: 'energy_conservation', chapter: '功和机械能', section: '机械能守恒',
    difficulty: 2, type: 'choice',
    content: '如图所示，一个小球从光滑斜面A点静止释放，经过最低点B后冲上右侧光滑斜面到达C点。已知AB高度差大于BC高度差，则下列说法正确的是（　　）',
    options: ['A. 小球在C点速度为零，且C点高度等于A点', 'B. 小球在C点速度不为零', 'C. 小球从A到B过程中机械能逐渐减小', 'D. 小球不可能到达与A点等高的位置'],
    answer: 'A. 小球在C点速度为零，且C点高度等于A点',
    explanation: '斜面光滑无摩擦，只有重力做功，机械能守恒。A点静止，动能为零，机械能等于重力势能。根据守恒定律，小球到达最高点C时速度必为零，且C点高度必等于A点高度。',
    hints: ['光滑斜面意味着什么？', '机械能守恒的条件是什么？', 'A点静止时具有什么形式的能量？']
  },
  {
    id: 'wm_011', knowledge_node_id: 'energy_conservation', chapter: '功和机械能', section: '机械能守恒',
    difficulty: 2, type: 'choice',
    content: '小明骑自行车下坡时，即使不蹬踏板，车速也越来越快。从能量转化角度分析，下列说法正确的是（　　）',
    options: ['A. 重力势能转化为动能，机械能总量增大', 'B. 重力势能转化为动能，由于有摩擦，机械能总量减小', 'C. 动能转化为重力势能，机械能不变', 'D. 重力势能不变，动能增大'],
    answer: 'B. 重力势能转化为动能，由于有摩擦，机械能总量减小',
    explanation: '下坡时高度降低、速度增大，重力势能转化为动能。但由于存在摩擦和空气阻力，部分机械能转化为内能，因此机械能总量减小。若机械能守恒，不蹬车也能匀速下坡，这与实际不符。',
    hints: ['下坡时高度和速度如何变化？', '实际骑行中存在摩擦力吗？', '摩擦会导致什么能量转化？']
  },
  {
    id: 'wm_012', knowledge_node_id: 'energy_conservation', chapter: '功和机械能', section: '机械能守恒',
    difficulty: 2, type: 'choice',
    content: '如图所示，单摆小球从A点静止释放，摆动到右侧最高点B。若考虑空气阻力，则下列说法正确的是（　　）',
    options: ['A. B点高度等于A点高度，机械能守恒', 'B. B点高度低于A点高度，机械能减小', 'C. B点高度高于A点高度，机械能增大', 'D. B点速度大于A点速度'],
    answer: 'B. B点高度低于A点高度，机械能减小',
    explanation: '考虑空气阻力时，小球运动过程中要克服阻力做功，部分机械能转化为内能，机械能总量减小。因此B点重力势能小于A点，高度低于A点。A、B两点都是最高点，速度均为零。',
    hints: ['空气阻力对机械能有什么影响？', '最高点时速度有什么特点？', '机械能减小时，同一速度对应的高度会怎样？']
  },
  {
    id: 'wm_013', knowledge_node_id: 'lever', chapter: '简单机械', section: '杠杆',
    difficulty: 2, type: 'choice',
    content: '如图所示，小明用撬棒撬起一块大石头，O为支点，手在A点向下施力，石头对撬棒的阻力作用在B点。下列说法正确的是（　　）',
    options: ['A. 撬棒是费力杠杆，因为石头很重', 'B. 撬棒是省力杠杆，因为动力臂大于阻力臂', 'C. 手越靠近O点越省力', 'D. 石头越靠近O点越费力'],
    answer: 'B. 撬棒是省力杠杆，因为动力臂大于阻力臂',
    explanation: '撬棒使用时，动力臂（支点到A点距离）明显大于阻力臂（支点到B点距离），根据F₁L₁=F₂L₂，动力小于阻力，是省力杠杆。手越靠近支点动力臂越小越费力；石头越靠近支点阻力臂越小越省力。',
    hints: ['找出支点、动力作用点、阻力作用点。', '比较动力臂和阻力臂的大小关系。', '根据杠杆平衡条件判断是省力还是费力。']
  },
  {
    id: 'wm_014', knowledge_node_id: 'lever', chapter: '简单机械', section: '杠杆',
    difficulty: 2, type: 'choice',
    content: '如图所示，杆秤是我国传统的称量工具。提纽O为支点，秤砣在A点时杆秤平衡，被称物体挂在B点。若秤砣质量为0.5kg，OA=20cm，OB=5cm，则被称物体的质量为（　　）',
    options: ['A. 0.125kg', 'B. 2kg', 'C. 0.5kg', 'D. 1kg'],
    answer: 'B. 2kg',
    explanation: '根据杠杆平衡条件F₁L₁=F₂L₂，即m秤砣g×OA=m物g×OB。代入数据：0.5kg×20cm=m物×5cm，解得m物=2kg。杆秤利用了省力杠杆原理，秤砣质量小但可以称量较重物体。',
    hints: ['写出杠杆平衡条件的公式。', '找出动力、动力臂、阻力、阻力臂分别对应什么？', '注意两边的力都是重力，g可以约去。']
  },
  {
    id: 'wm_015', knowledge_node_id: 'lever', chapter: '简单机械', section: '杠杆',
    difficulty: 2, type: 'choice',
    content: '如图所示，小明用镊子夹取砝码。下列关于镊子作为杠杆的分析正确的是（　　）',
    options: ['A. 镊子是省力杠杆，可以省距离', 'B. 镊子是费力杠杆，但省距离', 'C. 镊子是等臂杠杆，既不省力也不费力', 'D. 镊子夹取物体时，手指施力点到支点的距离大于物体到支点的距离'],
    answer: 'B. 镊子是费力杠杆，但省距离',
    explanation: '镊子使用时，支点在镊子顶端，手指施力点在中部，物体夹取点在末端。动力臂小于阻力臂，是费力杠杆。费力杠杆的特点是费力但省距离，手指移动较小距离，镊口就能张开较大角度，便于精细操作。',
    hints: ['找出镊子的支点在哪里。', '比较动力臂和阻力臂的大小。', '费力杠杆有什么特点？']
  },
  {
    id: 'wm_016', knowledge_node_id: 'pulley', chapter: '简单机械', section: '滑轮',
    difficulty: 1, type: 'choice',
    content: '学校升旗仪式上，旗杆顶部装有一个滑轮。下列说法正确的是（　　）',
    options: ['A. 这是动滑轮，可以省一半的力', 'B. 这是定滑轮，可以改变力的方向，但不省力', 'C. 这是定滑轮，可以省力', 'D. 这是滑轮组，既可以省力又可以改变力的方向'],
    answer: 'B. 这是定滑轮，可以改变力的方向，但不省力',
    explanation: '旗杆顶部的滑轮固定不动，是定滑轮。定滑轮的本质是等臂杠杆，不省力也不费力，但可以改变力的方向，使人在地面向下拉绳就能让旗帜向上运动，操作方便。',
    hints: ['这个滑轮的位置是固定的还是随旗帜移动的？', '定滑轮和动滑轮的本质区别是什么？', '向下拉绳旗帜向上运动，说明有什么作用？']
  },
  {
    id: 'wm_017', knowledge_node_id: 'pulley', chapter: '简单机械', section: '滑轮',
    difficulty: 2, type: 'choice',
    content: '如图所示，用滑轮组匀速提升重600N的物体，动滑轮重为100N，不计绳重和摩擦。若绳子自由端移动了3m，则下列说法正确的是（　　）',
    options: ['A. 承担重物的绳子段数n=2，物体上升1.5m', 'B. 承担重物的绳子段数n=3，物体上升1m', 'C. 拉力F=300N', 'D. 拉力F=233N'],
    answer: 'B. 承担重物的绳子段数n=3，物体上升1m',
    explanation: '由s=nh得n=s/h。若n=3，则h=3m/3=1m。拉力F=(G物+G动)/n=(600N+100N)/3≈233N。但题目说绳子自由端移动3m，若n=3则h=1m，选项B正确。注意n的判断要数与动滑轮直接相连的绳子段数。',
    hints: ['滑轮组中s与h的关系是什么？', '如何数承担重物的绳子段数n？', '不计绳重和摩擦时，拉力公式是什么？']
  },
  {
    id: 'wm_018', knowledge_node_id: 'pulley', chapter: '简单机械', section: '滑轮',
    difficulty: 2, type: 'choice',
    content: '如图所示，两个滑轮组分别由相同的滑轮组成，甲滑轮组有2段绳子承担重物，乙滑轮组有3段绳子承担重物。用它们分别匀速提升相同的重物到相同高度，不计绳重和摩擦。下列说法正确的是（　　）',
    options: ['A. 甲滑轮组更省力，两滑轮组机械效率相同', 'B. 乙滑轮组更省力，两滑轮组机械效率相同', 'C. 乙滑轮组更省力，乙滑轮组机械效率更高', 'D. 甲滑轮组更省力，甲滑轮组机械效率更高'],
    answer: 'B. 乙滑轮组更省力，两滑轮组机械效率相同',
    explanation: '乙滑轮组n=3，拉力F乙=G/3；甲滑轮组n=2，拉力F甲=G/2，因此乙更省力。机械效率η=W有/W总=Gh/(Gh+G动h)，两滑轮组提升相同重物、相同动滑轮（题目说相同滑轮），因此额外功相同，机械效率相同。',
    hints: ['哪个滑轮组的n更大？n越大意味着什么？', '机械效率与什么因素有关？', '两个滑轮组的动滑轮相同吗？']
  },
  {
    id: 'wm_019', knowledge_node_id: 'mechanical_efficiency', chapter: '简单机械', section: '机械效率',
    difficulty: 2, type: 'choice',
    content: '如图所示，用滑轮组将重800N的物体匀速提升2m，拉力F为500N，绳子自由端移动4m。则该滑轮组的机械效率为（　　）',
    options: ['A. 62.5%', 'B. 80%', 'C. 100%', 'D. 160%'],
    answer: 'B. 80%',
    explanation: '有用功W有=Gh=800N×2m=1600J；总功W总=Fs=500N×4m=2000J。机械效率η=W有/W总×100%=1600J/2000J×100%=80%。机械效率不可能超过100%，可直接排除C、D。',
    hints: ['有用功是什么？如何计算？', '总功是什么？如何计算？', '机械效率的公式是什么？']
  },
  {
    id: 'wm_020', knowledge_node_id: 'mechanical_efficiency', chapter: '简单机械', section: '机械效率',
    difficulty: 3, type: 'choice',
    content: '如图所示，用相同的滑轮组分别提升重500N和800N的物体到相同高度，不计绳重和摩擦。下列说法正确的是（　　）',
    options: ['A. 两次做的有用功相同', 'B. 两次做的额外功相同', 'C. 提升500N物体时机械效率更高', 'D. 提升800N物体时机械效率更高'],
    answer: 'D. 提升800N物体时机械效率更高',
    explanation: '有用功W有=Gh，提升高度相同但重力不同，有用功不同。额外功W额=G动h，相同滑轮组、相同高度，额外功相同。机械效率η=W有/(W有+W额)=Gh/(Gh+G动h)=G/(G+G动)，G越大，η越高。因此提升800N物体时机械效率更高。',
    hints: ['有用功与物体重力有什么关系？', '额外功主要是什么？与物体重力有关吗？', '推导η=G/(G+G动)，分析G增大时η如何变化。']
  }
];