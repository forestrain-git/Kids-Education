const fs = require('fs');

const buoyancyQuestions = [
  {
    id: 'by_021', knowledge_node_id: 'buoyancy_concept', chapter: '浮力', section: '浮力',
    difficulty: 1, type: 'choice',
    content: '小明在游泳池中练习潜水，当他从水面慢慢下潜到2米深的过程中（身体始终完全浸没在水中），下列说法正确的是（　　）',
    options: ['他受到的浮力逐渐变大', '他受到的浮力逐渐变小', '他受到的浮力大小不变', '他受到的浮力先变大后不变'],
    answer: '他受到的浮力大小不变',
    explanation: '根据阿基米德原理F浮=ρ液gV排，当小明身体完全浸没在水中后，排开水的体积V排等于他自身的体积，不再变化；水的密度ρ液也不变。因此从完全浸没开始，无论下潜多深，浮力大小保持不变。注意：下潜过程中压强会增大，但浮力与深度无关（在液体密度均匀的前提下）。',
    hints: ['浮力大小取决于液体密度和排开液体的体积。', '完全浸没后，V排不变。', '浮力与深度无关。']
  },
  {
    id: 'by_022', knowledge_node_id: 'buoyancy_concept', chapter: '浮力', section: '浮力',
    difficulty: 1, type: 'choice',
    content: '将一质量为180g的苹果轻轻放入装满水的盆中，苹果漂浮在水面上，溢出的水被收集后测得质量为180g。则苹果受到的浮力大小为（g取10N/kg）（　　）',
    options: ['2N', '1.8N', '0.2N', '3.8N'],
    answer: '1.8N',
    explanation: '根据阿基米德原理，苹果受到的浮力等于它排开的水所受的重力。苹果漂浮，浮力等于苹果重力。苹果质量为180g=0.18kg，重力G=mg=0.18kg×10N/kg=1.8N，所以浮力F浮=1.8N。溢出的水质量为180g也验证了这一点。',
    hints: ['漂浮时浮力等于重力。', '苹果重力G=mg。', '也可通过排开水的重力计算浮力。']
  },
  {
    id: 'by_023', knowledge_node_id: 'buoyancy_archimedes', chapter: '浮力', section: '阿基米德原理',
    difficulty: 1, type: 'choice',
    content: '小红用弹簧测力计测量一个铁块的重量，在空气中测得示数为7.9N。然后将铁块完全浸没在水中，测力计示数变为6.9N。已知水的密度为1.0×10³kg/m³，g取10N/kg，则该铁块的体积约为（　　）',
    options: ['7.9×10⁻⁵m³', '6.9×10⁻⁵m³', '1.0×10⁻⁴m³', '1.9×10⁻⁴m³'],
    answer: '1.0×10⁻⁴m³',
    explanation: '铁块在水中受到的浮力F浮=G-F拉=7.9N-6.9N=1.0N。根据阿基米德原理F浮=ρ水gV排，因铁块完全浸没，V铁=V排=F浮/(ρ水g)=1.0N/(1.0×10³kg/m³×10N/kg)=1.0×10⁻⁴m³。验算：V排=1.0×10⁻⁴m³=100cm³，铁块质量m=G/g=7.9N/10N/kg=0.79kg=790g，铁块密度ρ=m/V=790g/100cm³=7.9g/cm³，与铁的密度一致，答案正确。',
    hints: ['弹簧测力计示数差就是浮力。', 'F浮=G-F拉=1.0N。', '用阿基米德原理求V排。']
  },
  {
    id: 'by_024', knowledge_node_id: 'buoyancy_float', chapter: '浮力', section: '浮沉条件',
    difficulty: 1, type: 'choice',
    content: '煮饺子时，生饺子刚下锅会沉到锅底，煮熟后会浮到水面上。下列对这一现象的解释正确的是（　　）',
    options: ['煮熟后饺子质量变小了', '煮熟后饺子体积膨胀，排开水的体积增大，浮力增大', '煮熟后水的密度变大了', '煮熟后饺子受到的重力减小了'],
    answer: '煮熟后饺子体积膨胀，排开水的体积增大，浮力增大',
    explanation: '生饺子密度大于水，所以下沉。煮熟过程中，饺子内部空气和蒸汽使饺子体积膨胀，排开水的体积V排增大。根据F浮=ρ水gV排，浮力增大。当浮力大于饺子重力时，饺子上浮最终漂浮。饺子质量基本不变（忽略少量水分蒸发），水的密度也不变，重力几乎不变。关键是体积膨胀导致浮力增大。',
    hints: ['生饺子下沉说明密度大于水。', '煮熟后体积膨胀，V排增大。', '浮力增大后大于重力，饺子上浮。']
  },
  {
    id: 'by_025', knowledge_node_id: 'buoyancy_application', chapter: '浮力', section: '浮力的应用',
    difficulty: 1, type: 'choice',
    content: '一艘轮船从长江驶入东海，已知海水密度大于江水密度。关于轮船浮力及吃水深度的变化，下列说法正确的是（　　）',
    options: ['浮力变大，吃水深度变浅', '浮力不变，吃水深度变浅', '浮力变小，吃水深度变深', '浮力不变，吃水深度变深'],
    answer: '浮力不变，吃水深度变浅',
    explanation: '轮船始终漂浮，浮力等于重力。轮船重力不变，所以浮力不变。根据F浮=ρ液gV排，浮力不变时，液体密度越大，排开液体的体积越小。海水密度大于江水密度，所以在海水中排开水的体积更小，轮船吃水深度变浅。',
    hints: ['漂浮时浮力等于重力。', '重力不变，浮力不变。', '液体密度越大，V排越小，吃水越浅。']
  },
  {
    id: 'by_026', knowledge_node_id: 'buoyancy_concept', chapter: '浮力', section: '浮力',
    difficulty: 1, type: 'choice',
    content: '把一块橡皮泥捏成球形放入水中会下沉，但把它捏成小船的形状却能漂浮在水面上。下列说法正确的是（　　）',
    options: ['捏成小船后橡皮泥的质量变小了', '捏成小船后橡皮泥的密度变小了', '捏成小船后排开水的体积变大了，浮力增大', '捏成小船后受到的重力变小了'],
    answer: '捏成小船后排开水的体积变大了，浮力增大',
    explanation: '橡皮泥的形状改变不影响其质量和重力，密度是物质特性也不变。捏成小船后，中间空心，整体排开水的体积显著增大。根据F浮=ρ水gV排，浮力增大。当浮力等于重力时，橡皮泥就能漂浮。这是"空心法"增大浮力的典型应用，轮船就是根据这个原理制造的。',
    hints: ['质量和重力与形状无关。', '捏成小船后排开水的体积变大。', '浮力增大到等于重力时就能漂浮。']
  },
  {
    id: 'by_027', knowledge_node_id: 'buoyancy_archimedes', chapter: '浮力', section: '阿基米德原理',
    difficulty: 1, type: 'choice',
    content: '一个体积为500cm³的物体浸没在水中，已知水的密度为1.0g/cm³，g取10N/kg。则物体受到的浮力为（　　）',
    options: ['500N', '50N', '5N', '0.5N'],
    answer: '5N',
    explanation: '物体浸没在水中，V排=V物=500cm³=500×10⁻⁶m³=5×10⁻⁴m³。根据阿基米德原理，F浮=ρ水gV排=1.0×10³kg/m³×10N/kg×5×10⁻⁴m³=5N。验算：500cm³水的质量为500g=0.5kg，重力为0.5kg×10N/kg=5N，浮力等于排开水的重力，答案正确。',
    hints: ['浸没时V排=V物。', '注意单位换算：1cm³=10⁻⁶m³。', 'F浮=ρ水gV排。']
  },
  {
    id: 'by_028', knowledge_node_id: 'buoyancy_archimedes', chapter: '浮力', section: '阿基米德原理',
    difficulty: 2, type: 'choice',
    content: '小华在实验室做实验，将一重为8N的物体浸没在某种液体中，弹簧测力计示数为5N。若将该物体一半浸入同种液体中（不接触容器底），则物体受到的浮力为（　　）',
    options: ['3N', '1.5N', '6N', '4N'],
    answer: '1.5N',
    explanation: '物体完全浸没时受到的浮力F浮全=G-F拉=8N-5N=3N。根据阿基米德原理，浮力与排开液体的体积成正比。当物体一半浸入液体中时，V排减半，所以浮力也减半，F浮半=3N/2=1.5N。验算：完全浸没时F浮=ρ液gV=3N，一半浸入时F浮=ρ液g(V/2)=1.5N，答案正确。',
    hints: ['先求完全浸没时的浮力。', '浮力与V排成正比。', '一半浸入，浮力减半。']
  },
  {
    id: 'by_029', knowledge_node_id: 'buoyancy_float', chapter: '浮力', section: '浮沉条件',
    difficulty: 2, type: 'choice',
    content: '将质量相同的实心木块、实心铝块和实心铁块同时放入水中（已知ρ铁>ρ铝>ρ水>ρ木），静止后三者所受浮力大小关系为（　　）',
    options: ['F木>F铝>F铁', 'F木=F铝=F铁', 'F木>F铝=F铁', 'F木<F铝<F铁'],
    answer: 'F木>F铝>F铁',
    explanation: '设三者质量都为m。木块密度小于水，漂浮，F木=G=mg。铝块和铁块密度都大于水，都沉底，完全浸没。因ρ铝<ρ铁，质量相同时V铝=m/ρ铝>m/ρ铁=V铁。两者都完全浸没，V排=V物，所以V排铝>V排铁。根据F浮=ρ水gV排，F铝>F铁。比较F木和F铝：F铝=ρ水gV铝=ρ水gm/ρ铝=(ρ水/ρ铝)mg，因ρ铝≈2.7g/cm³>ρ水=1g/cm³，所以ρ水/ρ铝<1，F铝<mg=F木。因此F木>F铝>F铁。',
    hints: ['木块漂浮，浮力等于重力。', '铝块、铁块沉底，V排=V物。', '质量相同，密度小的体积大，浮力也大。']
  },
  {
    id: 'by_030', knowledge_node_id: 'buoyancy_application', chapter: '浮力', section: '浮力的应用',
    difficulty: 2, type: 'choice',
    content: '潜水艇在海面下匀速下潜的过程中（未到达极限深度），下列说法正确的是（　　）',
    options: ['受到的浮力变大，压强变大', '受到的浮力不变，压强变大', '受到的浮力不变，压强不变', '受到的浮力变小，压强变大'],
    answer: '受到的浮力不变，压强变大',
    explanation: '潜水艇通过水舱充放水来改变自身重力实现下潜和上浮。在海面下匀速下潜时，潜水艇体积不变（外壳刚性），排开水的体积V排不变，根据F浮=ρ海水gV排，浮力不变。但深度增加，根据液体压强公式p=ρgh，受到的压强变大。匀速下潜说明重力等于浮力（受力平衡），是通过向水舱注水增大重力实现的。',
    hints: ['潜水艇体积不变，V排不变。', '浮力与深度无关。', '压强p=ρgh，深度增大，压强增大。']
  },
  {
    id: 'by_031', knowledge_node_id: 'buoyancy_archimedes', chapter: '浮力', section: '阿基米德原理',
    difficulty: 2, type: 'choice',
    content: '弹簧测力计下挂一实心金属球，在空气中示数为12N，浸没在水中示数为10N，浸没在某种未知液体中示数为10.4N。则该未知液体的密度为（ρ水=1.0×10³kg/m³，g取10N/kg）（　　）',
    options: ['0.6×10³kg/m³', '0.8×10³kg/m³', '1.2×10³kg/m³', '1.5×10³kg/m³'],
    answer: '0.8×10³kg/m³',
    explanation: '在水中受到的浮力F浮水=12N-10N=2N。在未知液体中受到的浮力F浮液=12N-10.4N=1.6N。因金属球都完全浸没，V排相同。F浮水=ρ水gV排=2N，F浮液=ρ液gV排=1.6N。两式相除得：ρ液/ρ水=F浮液/F浮水=1.6/2=0.8，所以ρ液=0.8ρ水=0.8×10³kg/m³。验算：V排=F浮水/(ρ水g)=2N/(1.0×10³kg/m³×10N/kg)=2×10⁻⁴m³，F浮液=0.8×10³×10×2×10⁻⁴=1.6N，测力计示数=12N-1.6N=10.4N，与题意相符。',
    hints: ['先求在水中和未知液体中的浮力。', '同一物体完全浸没，V排相同。', '浮力之比等于液体密度之比。']
  },
  {
    id: 'by_032', knowledge_node_id: 'buoyancy_float', chapter: '浮力', section: '浮沉条件',
    difficulty: 2, type: 'choice',
    content: '把一实心小球放入盛满酒精的溢水杯中，静止后溢出酒精的质量为8g；若把该小球放入盛满水的溢水杯中，静止后溢出水的质量为10g。已知酒精密度为0.8g/cm³，水的密度为1.0g/cm³，则下列判断正确的是（　　）',
    options: ['小球在酒精中漂浮，在水中漂浮', '小球在酒精中沉底，在水中漂浮', '小球在酒精中沉底，在水中悬浮', '小球在酒精中悬浮，在水中漂浮'],
    answer: '小球在酒精中沉底，在水中悬浮',
    explanation: '假设小球在水中悬浮，则V物=V排水=m排水/ρ水=10g/1.0g/cm³=10cm³，m球=10g。在酒精中，ρ球=m球/V物=10g/10cm³=1.0g/cm³>ρ酒精=0.8g/cm³，所以小球在酒精中沉底，V排酒精=V物=10cm³，m排酒精=ρ酒精V物=0.8×10=8g，与题意相符。若小球在酒精中悬浮，则m排酒精=m球=8g，但在水中m排水应为8g≠10g，矛盾。若小球在酒精中漂浮，m排酒精=m球=8g，在水中m排水也应为8g≠10g，矛盾。因此答案为小球在酒精中沉底，在水中悬浮。',
    hints: ['从水中状态入手分析。', '若悬浮，V物=V排水=10cm³，m球=10g。', '验证在酒精中的状态是否一致。']
  },
  {
    id: 'by_033', knowledge_node_id: 'buoyancy_application', chapter: '浮力', section: '浮力的应用',
    difficulty: 2, type: 'choice',
    content: '同一支密度计分别放入甲、乙两种液体中，静止后如图所示（密度计在甲液体中浸入较深，在乙液体中浸入较浅）。则两种液体的密度关系及密度计受到的浮力关系为（　　）',
    options: ['ρ甲>ρ乙，F甲=F乙', 'ρ甲<ρ乙，F甲=F乙', 'ρ甲<ρ乙，F甲<F乙', 'ρ甲>ρ乙，F甲>F乙'],
    answer: 'ρ甲<ρ乙，F甲=F乙',
    explanation: '密度计在两种液体中都漂浮，浮力等于重力。同一支密度计重力不变，所以F甲=F乙。根据F浮=ρ液gV排，浮力相等时，排开液体体积越大，液体密度越小。密度计在甲液体中浸入较深，说明V排甲>V排乙，因此ρ甲<ρ乙。这是密度计的工作原理：刻度上小下大，密度越大的液体中，密度计浮得越高。',
    hints: ['密度计漂浮，浮力等于重力。', '浸入越深，V排越大。', 'F浮相等时，V排大的液体密度小。']
  },
  {
    id: 'by_034', knowledge_node_id: 'buoyancy_concept', chapter: '浮力', section: '浮力',
    difficulty: 2, type: 'choice',
    content: '如图所示，将一冰块放入盛有盐水的烧杯中，冰块漂浮且有部分露出液面。当冰块完全熔化后（不考虑蒸发），烧杯中液面的高度将（　　）',
    options: ['上升', '下降', '不变', '无法判断'],
    answer: '上升',
    explanation: '冰块漂浮在盐水中，F浮=G冰，即ρ盐水gV排=G冰。冰块熔化后变成水，质量不变，G水=G冰。这些水的体积V水=G冰/(ρ水g)。比较V排和V水：V排=G冰/(ρ盐水g)，V水=G冰/(ρ水g)。因ρ盐水>ρ水，所以V排<V水。即冰块熔化产生的水的体积大于原来冰块排开盐水的体积，因此液面上升。注意：若冰块漂浮在纯水中，熔化后液面不变；但在密度更大的盐水中，液面会上升。',
    hints: ['冰块漂浮，浮力等于重力。', '熔化后质量不变，重力不变。', '比较V排和熔化后水的体积。']
  },
  {
    id: 'by_035', knowledge_node_id: 'buoyancy_float', chapter: '浮力', section: '浮沉条件',
    difficulty: 2, type: 'choice',
    content: '将一实心物块轻轻放入盛满水的大烧杯中，静止后有72g水溢出；将其取出擦干后，轻轻放入盛满酒精的大烧杯中，静止后有64g酒精溢出。已知酒精密度为0.8g/cm³，则物块的密度为（　　）',
    options: ['0.8×10³kg/m³', '0.9×10³kg/m³', '1.0×10³kg/m³', '1.2×10³kg/m³'],
    answer: '0.9×10³kg/m³',
    explanation: '若物块在水中漂浮，则m物=m排水=72g。在酒精中，若漂浮则m排酒精=72g≠64g；若悬浮则m排酒精=ρ酒精V物，需V物=72cm³，ρ物=1.0g/cm³=ρ水，在水中应悬浮而非漂浮。所以物块在水中漂浮，在酒精中沉底。在酒精中沉底时V物=V排酒精=64g/0.8g/cm³=80cm³。物块密度ρ物=m物/V物=72g/80cm³=0.9g/cm³=0.9×10³kg/m³。验算：ρ物=0.9g/cm³<ρ水，在水中漂浮，F浮水=G物，m排水=m物=72g，符合。ρ物=0.9g/cm³>ρ酒精=0.8g/cm³，在酒精中沉底，V排酒精=V物=80cm³，m排酒精=0.8×80=64g，符合。',
    hints: ['先判断物块在水和酒精中的浮沉状态。', '在水中漂浮→m物=72g。', '在酒精中沉底→V物=80cm³，ρ物=72/80=0.9g/cm³。']
  },
  {
    id: 'by_036', knowledge_node_id: 'buoyancy_application', chapter: '浮力', section: '浮力的应用',
    difficulty: 2, type: 'choice',
    content: '热气球在空中匀速上升的过程中（不考虑燃料消耗导致的热气球总质量变化），下列说法正确的是（　　）',
    options: ['浮力大于重力，浮力大小不变', '浮力等于重力，浮力大小不变', '浮力大于重力，浮力逐渐变小', '浮力等于重力，浮力逐渐变小'],
    answer: '浮力等于重力，浮力逐渐变小',
    explanation: '热气球匀速上升，处于平衡状态，受力平衡，浮力等于重力。但随着高度增加，空气密度逐渐减小。根据F浮=ρ空气gV排，热气球体积基本不变（气囊膨胀到最大后），空气密度减小，所以浮力逐渐变小。实际上热气球上升过程中会不断加热空气以维持浮力，但若从原理分析，高空空气稀薄，浮力会减小。',
    hints: ['匀速运动，受力平衡。', '浮力等于重力。', '高度增加，空气密度减小，浮力减小。']
  },
  {
    id: 'by_037', knowledge_node_id: 'buoyancy_concept', chapter: '浮力', section: '浮力',
    difficulty: 2, type: 'choice',
    content: '如图所示，一个底面积为100cm²的圆柱形容器中装有适量水，水面高度为10cm。将一底面积为50cm²、高为8cm的实心圆柱体A轻轻放入容器中，A竖直静止后，水对容器底的压强增大了200Pa。已知水的密度为1.0×10³kg/m³，g取10N/kg，则圆柱体A的密度为（　　）',
    options: ['0.5×10³kg/m³', '0.6×10³kg/m³', '0.75×10³kg/m³', '1.0×10³kg/m³'],
    answer: '0.5×10³kg/m³',
    explanation: '水对容器底压强增大200Pa，根据Δp=ρ水gΔh，水面上升高度Δh=200Pa/(1.0×10³kg/m³×10N/kg)=0.02m=2cm。A的体积V_A=50cm²×8cm=400cm³。若A完全浸没，水面应上升400/100=4cm，但实际只上升2cm，说明A漂浮。排开水的体积V排=S容器×Δh=100cm²×2cm=200cm³。A漂浮，F浮=G_A，即ρ水gV排=ρ_AgV_A，ρ_A=ρ水×V排/V_A=1.0×10³kg/m³×200cm³/400cm³=0.5×10³kg/m³。验算：F浮=ρ水gV排=1000×10×200×10⁻⁶=2N，G_A=ρ_AgV_A=500×10×400×10⁻⁶=2N，相等，答案正确。',
    hints: ['由压强增量求水面上升高度。', '实际上升高度小于完全浸没时的上升高度，说明A漂浮。', '漂浮时F浮=G，ρ_A=ρ水×V排/V_A。']
  },
  {
    id: 'by_038', knowledge_node_id: 'buoyancy_float', chapter: '浮力', section: '浮沉条件',
    difficulty: 2, type: 'choice',
    content: '一正方体木块边长为10cm，放入水中静止时有1/4的体积露出水面。若将该木块放入另一种液体中，静止时有2/5的体积露出液面，则这种液体的密度为（　　）',
    options: ['0.75×10³kg/m³', '0.8×10³kg/m³', '1.0×10³kg/m³', '1.25×10³kg/m³'],
    answer: '1.25×10³kg/m³',
    explanation: '木块在水中漂浮，F浮水=G木，ρ水gV排水=ρ木gV木，ρ水(3/4)V木=ρ木V木，ρ木=(3/4)ρ水=0.75×10³kg/m³。在另一种液体中漂浮，F浮液=G木，ρ液gV排液=ρ木gV木，ρ液(3/5)V木=ρ木V木（因露出2/5，浸入3/5），ρ液=(5/3)ρ木=(5/3)×0.75×10³kg/m³=1.25×10³kg/m³。验算：ρ木=0.75g/cm³，在液体中浸入比例=ρ木/ρ液=0.75/1.25=3/5，即浸入3/5、露出2/5，与题意相符。',
    hints: ['先由水中漂浮求木块密度。', '木块密度ρ木=(3/4)ρ水=0.75g/cm³。', '在液体中漂浮，ρ液=ρ木/(浸入比例)=0.75/(3/5)=1.25g/cm³。']
  },
  {
    id: 'by_039', knowledge_node_id: 'buoyancy_application', chapter: '浮力', section: '浮力的应用',
    difficulty: 3, type: 'choice',
    content: '一个空心铜球重4.45N，体积为0.5dm³，把它浸没在水中后放手，已知铜的密度为8.9×10³kg/m³，水的密度为1.0×10³kg/m³，g取10N/kg。则铜球静止后所处的状态及受到的浮力大小为（　　）',
    options: ['漂浮，F浮=4.45N', '悬浮，F浮=4.45N', '沉底，F浮=5N', '沉底，F浮=4.45N'],
    answer: '漂浮，F浮=4.45N',
    explanation: '铜球质量m=G/g=4.45N/10N/kg=0.445kg=445g。体积V=0.5dm³=500cm³=5×10⁻⁴m³。平均密度ρ球=m/V=0.445kg/5×10⁻⁴m³=0.89×10³kg/m³<ρ水=1.0×10³kg/m³。所以铜球在水中漂浮。漂浮时F浮=G=4.45N。验算：若铜球实心，同质量铜的体积V铜=m/ρ铜=0.445kg/8.9×10³kg/m³=5×10⁻⁵m³=50cm³。空心部分体积=500-50=450cm³，确实空心。若完全浸没，F浮最大=ρ水gV=1.0×10³×10×5×10⁻⁴=5N>4.45N，所以会上浮最终漂浮。',
    hints: ['先求铜球的平均密度。', '平均密度=质量/总体积。', '平均密度小于水，漂浮，浮力等于重力。']
  },
  {
    id: 'by_040', knowledge_node_id: 'buoyancy_archimedes', chapter: '浮力', section: '阿基米德原理',
    difficulty: 3, type: 'choice',
    content: '如图所示，水平桌面上有一底面积为200cm²、重为4N的薄壁圆柱形容器，容器中装有深度为15cm的水。将一底面积为50cm²、高为20cm、重为9N的实心圆柱体A用细线系住，使其缓慢浸入水中。当圆柱体A刚好完全浸没时（水未溢出），细线对A的拉力为多大？（ρ水=1.0×10³kg/m³，g取10N/kg）（　　）',
    options: ['1N', '3N', '5N', '7N'],
    answer: '1N',
    explanation: '圆柱体A完全浸没在水中，V排=V_A=S_A×h_A=50cm²×20cm=1000cm³=1×10⁻³m³。受到的浮力F浮=ρ水gV排=1.0×10³kg/m³×10N/kg×1×10⁻³m³=10N。对A受力分析：A受重力G=9N（向下）、浮力F浮=10N（向上）、细线拉力F拉（向下，因浮力大于重力，需要细线拉住）。根据平衡条件：F浮=G+F拉，F拉=F浮-G=10N-9N=1N。验算：水面上升高度Δh=V排/S容器=1000cm³/200cm²=5cm。新水面高度=15+5=20cm=0.2m。水对容器底压强p=ρgh=1000×10×0.2=2000Pa。水对容器底压力F=pS=2000×200×10⁻⁴=40N。水的重力G水=ρ水V水g=1000×(200×15×10⁻⁶)×10=30N。容器重4N，总重34N。水对底压力40N>34N，这是因为A对水有向下的反作用力（浮力的反作用力）10N，30N+10N=40N，吻合。',
    hints: ['先求A完全浸没时的浮力。', 'F浮=ρ水gV排=10N。', '受力分析：F浮=G+F拉，F拉=10N-9N=1N。']
  }
];

let content = fs.readFileSync('extra_questions.js', 'utf-8');
// Remove trailing ]; and whitespace
content = content.replace(/\}\s*\];?\s*$/, '');
// Add comma after last }
content = content.trimEnd();
if (!content.endsWith(',')) content += ',';

// Format and append new questions
const lines = buoyancyQuestions.map((q, i) => {
  const opts = q.options.map(o => `    '${o}'`).join(',\n');
  const hints = q.hints.map(h => `    '${h}'`).join(',\n');
  const isLast = i === buoyancyQuestions.length - 1;
  return `  {\n    id: '${q.id}', knowledge_node_id: '${q.knowledge_node_id}', chapter: '${q.chapter}', section: '${q.section}',\n    difficulty: ${q.difficulty}, type: '${q.type}',\n    content: '${q.content.replace(/'/g, "\\'")}',\n    options: [\n${opts}\n    ],\n    answer: '${q.answer.replace(/'/g, "\\'")}',\n    explanation: '${q.explanation.replace(/'/g, "\\'")}',\n    hints: [\n${hints}\n    ]\n  }${isLast ? '' : ','}`;
}).join('\n');

content += '\n' + lines + '\n];\n';
fs.writeFileSync('extra_questions.js', content);
console.log('Appended', buoyancyQuestions.length, 'buoyancy questions.');
