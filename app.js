// ============================================
// 物理提分助手 - 核心逻辑层 (v9)
// ============================================
console.log('[App] loaded v9');

// 合并题库
var ALL_QUESTIONS = [...UPPER_QUESTIONS, ...MECH_QUESTIONS, ...EXTRA_QUESTIONS];

// 题目标签映射（按知识点自动标注）
var TAG_MAP = {
  'motion_measurement': ['概念型', '计算型'],
  'motion_reference': ['概念型', '辨析型'],
  'motion_speed': ['计算型', '概念型'],
  'motion_avg_speed': ['实验型', '计算型'],
  'sound_production': ['概念型', '实验型'],
  'sound_characteristics': ['辨析型', '概念型'],
  'sound_utilization': ['应用型', '概念型'],
  'sound_noise': ['应用型', '概念型'],
  'temp_measurement': ['概念型'],
  'phase_melt': ['辨析型', '概念型'],
  'phase_vapor': ['辨析型', '应用型'],
  'phase_sublime': ['辨析型', '概念型'],
  'force_concept': ['概念型', '辨析型'],
  'force_effect': ['概念型', '应用型'],
  'force_interaction': ['概念型', '辨析型'],
  'elastic_concept': ['概念型'],
  'elastic_measurement': ['实验型', '概念型'],
  'elastic_hooke': ['计算型', '概念型'],
  'gravity_concept': ['概念型'],
  'gravity_calculation': ['计算型', '概念型'],
  'gravity_center': ['概念型'],
  'newton_first': ['概念型', '辨析型'],
  'inertia_concept': ['概念型'],
  'inertia_application': ['应用型', '概念型'],
  'balance_condition': ['概念型', '计算型', '辨析型'],
  'balance_friction': ['概念型', '辨析型'],
  'friction_concept': ['概念型'],
  'friction_factors': ['实验型', '概念型'],
  'friction_application': ['应用型', '概念型'],
  // 质量与密度
  'mass_concept': ['概念型', '实验型'],
  'density_concept': ['概念型', '计算型'],
  'density_measurement': ['实验型', '计算型'],
  'density_application': ['应用型', '计算型'],
  // 光现象
  'light_propagation': ['概念型'],
  'light_reflection': ['概念型', '辨析型'],
  'light_mirror': ['概念型', '实验型'],
  'light_refraction': ['概念型', '辨析型'],
  'light_lens': ['概念型', '实验型'],
  'light_eye': ['应用型', '辨析型'],
  // 压强
  'pressure_concept': ['概念型', '计算型'],
  'pressure_liquid': ['概念型', '计算型'],
  'pressure_atmosphere': ['概念型', '实验型'],
  'pressure_fluid': ['概念型', '应用型'],
  // 浮力
  'buoyancy_concept': ['概念型', '实验型'],
  'buoyancy_archimedes': ['概念型', '计算型'],
  'buoyancy_float': ['概念型', '辨析型'],
  'buoyancy_application': ['应用型', '辨析型'],
  // 功和机械能
  'work_concept': ['概念型', '计算型'],
  'power_concept': ['概念型', '计算型'],
  'energy_kinetic': ['概念型', '辨析型'],
  'energy_conservation': ['概念型', '辨析型'],
  // 简单机械
  'lever': ['概念型', '计算型'],
  'pulley': ['概念型', '计算型'],
  'mechanical_efficiency': ['概念型', '计算型'],
  // 电学
  'electric_charge': ['概念型', '实验型'],
  'electric_circuit': ['概念型', '辨析型'],
  'electric_current': ['概念型', '实验型'],
  'electric_voltage': ['概念型', '实验型'],
  'electric_resistance': ['概念型', '实验型'],
  'ohms_law': ['概念型', '计算型'],
  'electric_power': ['概念型', '计算型'],
  'joules_law': ['概念型', '计算型'],
  'home_circuit': ['应用型', '辨析型'],
  'electric_magnet': ['概念型', '应用型'],
};
ALL_QUESTIONS.forEach(q => {
  q.tags = TAG_MAP[q.knowledge_node_id] || ['概念型'];
});

// 做题过程标签列表
var ANSWER_TAG_OPTIONS = ['完全不会', '概念不清', '公式记错', '粗心大意', '似懂非懂'];

// 标签 → 优先推荐题型映射
var TAG_TO_QUESTION_TYPE = {
  '概念不清': '概念型',
  '公式记错': '计算型',
  '粗心大意': '辨析型',
  '似懂非懂': '应用型',
  '完全不会': '概念型',
};

// 今日成就定义
var ACHIEVEMENTS = {
  firstQuestion: { icon: '🎯', name: '今日首题' },
  streak3: { icon: '🔥', name: '连对3题' },
  weakBreakthrough: { icon: '🧠', name: '攻克薄弱点' },
  correctMistake: { icon: '❌', name: '知错能改' },
  newNode: { icon: '⭐', name: '新知初探' },
  dailyGoal: { icon: '🏆', name: '完成目标' },
};

// 存储模块
var Storage = {
  KEY: 'physics_learning_state_v1',

  getState() {
    const raw = localStorage.getItem(this.KEY);
    if (raw) {
      try {
        const state = JSON.parse(raw);
        // 向后兼容：旧数据缺少 dailyAchievements
        if (!state.dailyAchievements) state.dailyAchievements = {};
        // 数据迁移：v1 -> v2，dailyGoal 30 -> 100
        if (!state.version || state.version < 2) {
          if (state.dailyGoal === 30) state.dailyGoal = 100;
          state.version = 2;
          this.saveState(state);
        }
        return state;
      } catch(e) { console.error('Parse error', e); }
    }
    return this.getDefaultState();
  },

  getDefaultState() {
    return {
      mastery: {},
      history: [],
      wrongQuestions: [],
      reviewSchedule: {},
      dailyStats: {},
      dailyAchievements: {}, // { "YYYY-MM-DD": { "badgeId": true } }
      firstUse: new Date().toISOString().split('T')[0],
      totalAnswered: 0,
      totalCorrect: 0,
      dailyGoal: 100,
      answerTags: {},    // { questionId: '概念不清' }
      tagStats: {},      // { nodeId: { '概念不清': 3, '粗心大意': 1 } }
      lastStudyDate: null,
      streak: 0,
      version: 2,
    };
  },

  saveState(state) {
    localStorage.setItem(this.KEY, JSON.stringify(state));
    const uid = localStorage.getItem('cloud_sync_uid') || new URLSearchParams(location.search).get('uid');
    if (uid && typeof CloudSync !== 'undefined') {
      CloudSync.saveState(uid, state).catch(function () {});
    }
  },

  exportData() {
    return JSON.stringify(this.getState(), null, 2);
  },

  importData(json) {
    const data = JSON.parse(json);
    this.saveState(data);
  },

  reset() {
    localStorage.removeItem(this.KEY);
  }
};

// 引擎模块
var Engine = {
  getMastery(nodeId) {
    const state = Storage.getState();
    return state.mastery[nodeId] || { score: 0, answered: 0, correct: 0, lastReview: null, streak: 0 };
  },

  getDecayLambda(nodeId, state) {
    const m = (state || Storage.getState()).mastery[nodeId];
    if (!m || m.answered === 0) return 0.05;
    const wrongRate = (m.totalWrong || 0) / m.answered;
    return 0.03 + wrongRate * 0.14;
  },

  getEffectiveMastery(nodeId, state) {
    const s = state || Storage.getState();
    const m = s.mastery[nodeId];
    if (!m || !m.lastReview) return m ? m.score : 0;

    const daysSince = Math.floor((Date.now() - new Date(m.lastReview).getTime()) / (1000 * 60 * 60 * 24));
    if (daysSince <= 0) return m.score;

    const lambda = this.getDecayLambda(nodeId, s);
    const decayed = m.score * Math.exp(-lambda * daysSince);
    return Math.max(0, Math.round(decayed));
  },

  arePrerequisitesMet(nodeId, state) {
    const node = KNOWLEDGE_NODES.find(n => n.id === nodeId);
    if (!node || !node.prerequisites || node.prerequisites.length === 0) return true;
    const s = state || Storage.getState();
    return node.prerequisites.every(preId => this.getEffectiveMastery(preId, s) >= 50);
  },

  getUnmetPrerequisites(nodeId, state, visited) {
    visited = visited || new Set();
    if (visited.has(nodeId)) return [];
    visited.add(nodeId);

    const node = KNOWLEDGE_NODES.find(n => n.id === nodeId);
    if (!node || !node.prerequisites || node.prerequisites.length === 0) return [];

    const s = state || Storage.getState();
    const unmet = [];
    for (const preId of node.prerequisites) {
      if (this.getEffectiveMastery(preId, s) < 50) {
        unmet.push(...this.getUnmetPrerequisites(preId, s, visited));
        unmet.push(preId);
      }
    }
    return [...new Set(unmet)];
  },

  checkAchievements(state, questionId, correct, nodeId, isReview, sessionCorrectStreak, oldEffectiveScore) {
    const today = new Date().toISOString().split('T')[0];
    if (!state.dailyAchievements) state.dailyAchievements = {};
    if (!state.dailyAchievements[today]) state.dailyAchievements[today] = {};
    const earned = state.dailyAchievements[today];
    const newlyEarned = [];

    // 1. 今日首题
    if (!earned.firstQuestion) {
      const ts = state.dailyStats[today];
      if (ts && ts.questions >= 1) {
        earned.firstQuestion = true;
        newlyEarned.push('firstQuestion');
      }
    }

    // 2. 连对3题
    if (!earned.streak3 && correct && sessionCorrectStreak >= 3) {
      earned.streak3 = true;
      newlyEarned.push('streak3');
    }

    // 3. 攻克薄弱点
    if (!earned.weakBreakthrough && correct) {
      const newEff = this.getEffectiveMastery(nodeId, state);
      if (oldEffectiveScore < 50 && newEff >= 50) {
        earned.weakBreakthrough = true;
        newlyEarned.push('weakBreakthrough');
      }
    }

    // 4. 知错能改
    if (!earned.correctMistake && correct) {
      const wasWrong = state.history.some(h => h.questionId === questionId && !h.correct);
      if (wasWrong) {
        earned.correctMistake = true;
        newlyEarned.push('correctMistake');
      }
    }

    // 5. 新知初探
    if (!earned.newNode && correct) {
      const m = state.mastery[nodeId];
      if (m && m.answered === 1) {
        earned.newNode = true;
        newlyEarned.push('newNode');
      }
    }

    // 6. 完成目标
    if (!earned.dailyGoal) {
      const ts = state.dailyStats[today];
      if (ts && ts.questions >= state.dailyGoal) {
        earned.dailyGoal = true;
        newlyEarned.push('dailyGoal');
      }
    }

    return newlyEarned;
  },

  updateMastery(state, nodeId, correct) {
    let m = state.mastery[nodeId] || { score: 0, answered: 0, correct: 0, lastReview: null, streak: 0 };
    const baseScore = this.getEffectiveMastery(nodeId, state);

    m.answered++;
    if (correct) {
      m.correct++;
      m.streak++;
      const increment = Math.max(5, (100 - baseScore) * 0.15);
      m.score = Math.min(100, Math.round(baseScore + increment));
    } else {
      m.streak = 0;
      m.totalWrong = (m.totalWrong || 0) + 1;
      const decrement = Math.max(5, baseScore * 0.12);
      m.score = Math.max(0, Math.round(baseScore - decrement));
    }

    m.lastReview = new Date().toISOString();
    state.mastery[nodeId] = m;

    this.updateReviewSchedule(state, nodeId, correct);
    this.updateStreak(state);
    Storage.saveState(state);
    return m;
  },

  updateStreak(state) {
    const today = new Date().toISOString().split('T')[0];
    if (state.lastStudyDate === today) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yStr = yesterday.toISOString().split('T')[0];

    if (state.lastStudyDate === yStr) {
      state.streak++;
    } else {
      state.streak = 1;
    }
    state.lastStudyDate = today;
  },

  updateReviewSchedule(state, nodeId, correct) {
    const intervals = [1, 3, 7, 14, 30];
    let schedule = state.reviewSchedule[nodeId];

    if (!schedule || typeof schedule !== 'object') {
      schedule = { level: -1, nextReview: null, history: [] };
    }

    const today = new Date().toISOString().split('T')[0];

    if (correct) {
      schedule.level = Math.min(schedule.level + 1, intervals.length - 1);
      const nextDate = new Date();
      nextDate.setDate(nextDate.getDate() + intervals[schedule.level]);
      schedule.nextReview = nextDate.toISOString().split('T')[0];
    } else {
      schedule.level = -1;
      const nextDate = new Date();
      nextDate.setDate(nextDate.getDate() + 1);
      schedule.nextReview = nextDate.toISOString().split('T')[0];
    }

    if (!schedule.history) schedule.history = [];
    schedule.history.push({ date: today, result: correct ? 'correct' : 'wrong' });
    if (schedule.history.length > 20) schedule.history = schedule.history.slice(-20);

    state.reviewSchedule[nodeId] = schedule;
  },

  getDueReviews() {
    const state = Storage.getState();
    const today = new Date().toISOString().split('T')[0];
    const dueNodes = [];

    for (const [nodeId, schedule] of Object.entries(state.reviewSchedule)) {
      if (schedule && schedule.nextReview && schedule.nextReview <= today) {
        dueNodes.push(nodeId);
      }
    }
    return dueNodes;
  },

  getRecommendedQuestions(count) {
    count = count || Storage.getState().dailyGoal;
    const state = Storage.getState();
    const recommended = [];
    const usedIds = new Set();
    const NODE_LIMIT = 10; // 每个知识点最多出10题

    // 今日已答过的题不再重复推荐（避免刷新后立刻重出）
    const today = new Date().toISOString().split('T')[0];
    state.history.forEach(h => {
      if (h.timestamp && h.timestamp.startsWith(today)) usedIds.add(h.questionId);
    });

    // 收集各知识点的错题
    const wrongByNode = {};
    state.wrongQuestions.forEach(id => {
      const q = ALL_QUESTIONS.find(q => q.id === id);
      if (q && !usedIds.has(q.id)) {
        if (!wrongByNode[q.knowledge_node_id]) wrongByNode[q.knowledge_node_id] = [];
        wrongByNode[q.knowledge_node_id].push(q);
      }
    });

    // 确定知识点优先级队列（专项顺序）
    const nodeQueue = [];
    const added = new Set();

    // 1) 艾宾浩斯到期
    const dueNodes = this.getDueReviews();
    for (const nodeId of dueNodes) {
      if (!added.has(nodeId)) { nodeQueue.push(nodeId); added.add(nodeId); }
    }

    // 2) 有错题的知识点（按错题数量倒序）
    const wrongNodeIds = Object.entries(wrongByNode)
      .sort((a, b) => b[1].length - a[1].length)
      .map(([id]) => id);
    for (const nodeId of wrongNodeIds) {
      if (!added.has(nodeId)) { nodeQueue.push(nodeId); added.add(nodeId); }
    }

    // 3) ZPD 知识点（有效掌握度20-80，前置条件需满足）
    const zpdNodes = Object.keys(state.mastery)
      .filter(id => {
        const eff = this.getEffectiveMastery(id, state);
        return eff >= 20 && eff <= 80;
      })
      .sort((a, b) => this.getEffectiveMastery(a, state) - this.getEffectiveMastery(b, state));
    for (const nodeId of zpdNodes) {
      if (added.has(nodeId)) continue;
      const unmet = this.getUnmetPrerequisites(nodeId, state);
      for (const preId of unmet) {
        if (!added.has(preId)) { nodeQueue.push(preId); added.add(preId); }
      }
      if (this.arePrerequisitesMet(nodeId, state)) {
        nodeQueue.push(nodeId); added.add(nodeId);
      }
    }

    // 4) 全新知识点（未学过的，前置条件需满足）
    const learnedNodes = new Set(Object.keys(state.mastery));
    const newNodes = KNOWLEDGE_NODES.map(n => n.id).filter(id => !learnedNodes.has(id));
    for (const nodeId of newNodes) {
      if (added.has(nodeId)) continue;
      const unmet = this.getUnmetPrerequisites(nodeId, state);
      for (const preId of unmet) {
        if (!added.has(preId)) { nodeQueue.push(preId); added.add(preId); }
      }
      if (this.arePrerequisitesMet(nodeId, state)) {
        nodeQueue.push(nodeId); added.add(nodeId);
      }
    }

    // 获取每个知识点的优先题型（根据做题标签统计）
    const nodePriority = {};
    const easyNodes = new Set();
    nodeQueue.forEach(nodeId => {
      const stats = state.tagStats[nodeId] || {};
      const entries = Object.entries(stats).filter(([tag]) => TAG_TO_QUESTION_TYPE[tag]);
      if (entries.length > 0) {
        entries.sort((a, b) => b[1] - a[1]);
        nodePriority[nodeId] = TAG_TO_QUESTION_TYPE[entries[0][0]];
        if (entries[0][0] === '完全不会') easyNodes.add(nodeId);
      }
    });

    // 按知识点集中出题
    for (const nodeId of nodeQueue) {
      if (recommended.length >= count) break;
      const block = [];
      const nodeUsed = new Set();

      // a) 复习题（艾宾浩斯）
      if (dueNodes.includes(nodeId)) {
        const qs = ALL_QUESTIONS.filter(q => q.knowledge_node_id === nodeId && !usedIds.has(q.id));
        if (qs.length > 0) {
          const q = qs[Math.floor(Math.random() * qs.length)];
          block.push({ ...q, reason: '复习' });
          nodeUsed.add(q.id);
        }
      }

      // b) 错题
      const wrongQs = (wrongByNode[nodeId] || []).filter(q => !nodeUsed.has(q.id));
      wrongQs.sort(() => Math.random() - 0.5);
      for (const q of wrongQs) {
        if (block.length >= NODE_LIMIT) break;
        block.push({ ...q, reason: '错题' });
        nodeUsed.add(q.id);
      }

      // c) 新题（ZPD 或 新知识点）
      if (block.length < NODE_LIMIT) {
        const qs = ALL_QUESTIONS.filter(q =>
          q.knowledge_node_id === nodeId && !usedIds.has(q.id) && !nodeUsed.has(q.id)
        );
        // 排序：优先题型匹配 > 非完全不会知识点按难度升序
        qs.sort((a, b) => {
          const pa = nodePriority[a.knowledge_node_id];
          const pb = nodePriority[b.knowledge_node_id];
          const ha = pa && a.tags && a.tags.includes(pa) ? 2 : 0;
          const hb = pb && b.tags && b.tags.includes(pb) ? 2 : 0;
          const ea = easyNodes.has(a.knowledge_node_id) ? a.difficulty : 0;
          const eb = easyNodes.has(b.knowledge_node_id) ? b.difficulty : 0;
          return (hb + (3 - eb)) - (ha + (3 - ea));
        });
        for (const q of qs) {
          if (block.length >= NODE_LIMIT) break;
          block.push({ ...q, reason: learnedNodes.has(nodeId) ? '挑战' : '新题' });
          nodeUsed.add(q.id);
        }
      }

      // 将本知识点题目加入总列表
      for (const q of block) {
        if (recommended.length >= count) break;
        recommended.push(q);
        usedIds.add(q.id);
      }
    }

    // 兜底：如果还不够，随机补充
    if (recommended.length < count) {
      const remaining = ALL_QUESTIONS.filter(q => !usedIds.has(q.id));
      remaining.sort(() => Math.random() - 0.5);
      for (const q of remaining.slice(0, count - recommended.length)) {
        recommended.push({ ...q, reason: '新题' });
        usedIds.add(q.id);
      }
    }

    return recommended.slice(0, count);
  },

  recordAnswer(questionId, correct, timeSpent, answerTag, sessionCorrectStreak) {
    const state = Storage.getState();
    const q = ALL_QUESTIONS.find(q => q.id === questionId);
    const timestamp = new Date().toISOString();
    const nodeId = q ? q.knowledge_node_id : null;
    const oldEffectiveScore = nodeId ? this.getEffectiveMastery(nodeId, state) : 0;

    state.history.push({ questionId, correct, timestamp, timeSpent, answerTag });

    // 更新标签统计
    if (answerTag && q) {
      if (!state.tagStats[nodeId]) state.tagStats[nodeId] = {};
      state.tagStats[nodeId][answerTag] = (state.tagStats[nodeId][answerTag] || 0) + 1;
      state.answerTags[questionId] = answerTag;
    }

    if (correct) {
      state.wrongQuestions = state.wrongQuestions.filter(id => id !== questionId);
    } else {
      if (!state.wrongQuestions.includes(questionId)) {
        state.wrongQuestions.push(questionId);
      }
    }

    state.totalAnswered++;
    if (correct) state.totalCorrect++;

    const today = timestamp.split('T')[0];
    if (!state.dailyStats[today]) {
      state.dailyStats[today] = { questions: 0, correct: 0, time: 0 };
    }
    state.dailyStats[today].questions++;
    if (correct) state.dailyStats[today].correct++;
    state.dailyStats[today].time += timeSpent;

    let newlyEarned = [];
    if (q) {
      this.updateMastery(state, nodeId, correct);
      const isReview = state.reviewSchedule[nodeId] && state.reviewSchedule[nodeId].nextReview && state.reviewSchedule[nodeId].nextReview <= today;
      newlyEarned = this.checkAchievements(state, questionId, correct, nodeId, isReview, sessionCorrectStreak || 0, oldEffectiveScore);
      Storage.saveState(state);
    } else {
      Storage.saveState(state);
    }

    return newlyEarned;
  },

  getStats() {
    const state = Storage.getState();
    const today = new Date().toISOString().split('T')[0];
    const todayStat = state.dailyStats[today] || { questions: 0, correct: 0, time: 0 };

    const masteryIds = Object.keys(state.mastery);
    const avgMastery = masteryIds.length > 0
      ? masteryIds.reduce((sum, id) => sum + this.getEffectiveMastery(id, state), 0) / masteryIds.length
      : 0;

    const weakNodes = masteryIds
      .map(id => ({ id, score: this.getEffectiveMastery(id, state) }))
      .sort((a, b) => a.score - b.score)
      .slice(0, 5)
      .map(m => {
        const node = KNOWLEDGE_NODES.find(n => n.id === m.id);
        return { name: node ? node.name : m.id, score: Math.round(m.score) };
      });

    const todayAchievements = state.dailyAchievements[today]
      ? Object.keys(state.dailyAchievements[today]).filter(k => state.dailyAchievements[today][k])
      : [];

    return {
      totalAnswered: state.totalAnswered,
      totalCorrect: state.totalCorrect,
      accuracy: state.totalAnswered > 0 ? Math.round(state.totalCorrect / state.totalAnswered * 100) : 0,
      todayQuestions: todayStat.questions,
      todayCorrect: todayStat.correct,
      todayAccuracy: todayStat.questions > 0 ? Math.round(todayStat.correct / todayStat.questions * 100) : 0,
      avgMastery: Math.round(avgMastery),
      weakNodes,
      streak: state.streak,
      wrongCount: state.wrongQuestions.length,
      dailyGoal: state.dailyGoal,
      todayAchievements,
    };
  },

  getNodeQuestions(nodeId) {
    return ALL_QUESTIONS.filter(q => q.knowledge_node_id === nodeId);
  },

  getWrongQuestions() {
    const state = Storage.getState();
    return state.wrongQuestions
      .map(id => ALL_QUESTIONS.find(q => q.id === id))
      .filter(q => q);
  },

  getParentStats() {
    const state = Storage.getState();
    const today = new Date().toISOString().split('T')[0];
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const weekAgoStr = weekAgo.toISOString().split('T')[0];

    // 最近7天数据
    const weekStats = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dStr = d.toISOString().split('T')[0];
      const stat = state.dailyStats[dStr] || { questions: 0, correct: 0 };
      weekStats.push({ date: dStr, ...stat });
    }

    // 知识点掌握度详情
    const nodeDetails = KNOWLEDGE_NODES.map(node => {
      const eff = this.getEffectiveMastery(node.id, state);
      const m = state.mastery[node.id] || { answered: 0 };
      return {
        name: node.name,
        chapter: node.chapter,
        score: Math.round(eff),
        answered: m.answered,
      };
    }).sort((a, b) => a.score - b.score);

    return {
      weekStats,
      nodeDetails,
      totalAnswered: state.totalAnswered,
      totalCorrect: state.totalCorrect,
      streak: state.streak,
      wrongCount: state.wrongQuestions.length,
      todayStat: state.dailyStats[today] || { questions: 0, correct: 0 },
    };
  }
};

// ============================================
// UI 模块
// ============================================
var UI = {
  currentPage: 'home',
  quizQueue: [],
  currentQuizIndex: 0,
  quizStartTime: 0,
  selectedOption: null,
  submitted: false,
  sessionCorrectStreak: 0,

  init() {
    this.bindNavEvents();
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => this.showPage('home'));
    }
    this.showPage('home');
  },

  bindNavEvents() {
    document.querySelectorAll('#nav button').forEach(btn => {
      btn.addEventListener('click', () => {
        this.showPage(btn.dataset.page);
      });
    });
  },

  showPage(page) {
    this.currentPage = page;
    this.submitted = false;

    document.querySelectorAll('#nav button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.page === page);
    });

    const titles = { home: '今日任务', map: '知识地图', review: '错题本', settings: '设置' };
    document.getElementById('page-title').textContent = titles[page] || '';
    document.getElementById('nav').style.display = 'flex';
    const backBtn = document.getElementById('back-btn');
    if (backBtn) backBtn.style.display = 'none';

    const main = document.getElementById('main-content');
    main.innerHTML = '';
    main.className = '';

    switch (page) {
      case 'home': this.renderHome(main); break;
      case 'map': this.renderMap(main); break;
      case 'review': this.renderReview(main); break;
      case 'settings': this.renderSettings(main); break;
    }
  },

  // -------- 首页 --------
  renderHome(container) {
    const stats = Engine.getStats();
    const remaining = Math.max(0, stats.dailyGoal - stats.todayQuestions);
    const progress = Math.min(100, Math.round(stats.todayQuestions / stats.dailyGoal * 100));

    container.innerHTML = `
      <div class="home-page">
        <div class="welcome-bar">
          <div class="welcome-text">欢迎回来，开始今天的学习吧</div>
          ${stats.todayAchievements.length > 0 ? `
            <div class="achievement-row">
              ${stats.todayAchievements.map(id => ACHIEVEMENTS[id] ? `<span class="ach-badge" title="${ACHIEVEMENTS[id].name}">${ACHIEVEMENTS[id].icon}</span>` : '').join('')}
            </div>
          ` : ''}
        </div>

        <div class="task-card ${remaining === 0 ? 'completed' : ''}">
          <div class="task-header">
            <div class="task-title">${remaining === 0 ? '今日目标已完成' : '今日练习'}</div>
            <div class="task-sub">${stats.todayQuestions} / ${stats.dailyGoal} 题</div>
          </div>
          <div class="progress-track">
            <div class="progress-bar-home" style="width:${progress}%"></div>
          </div>
          <div class="task-desc">
            ${remaining === 0
              ? '太棒了！已完成今日目标，可以继续加油'
              : remaining > 0
                ? `还有 ${remaining} 道题即可完成今日目标`
                : '开始今天的物理学习吧'}
          </div>
          <button class="btn-primary btn-large" onclick="UI.startQuiz()">
            ${remaining === 0 ? '继续练习' : '开始练习'}
          </button>
        </div>

        <div class="stats-row">
          <div class="stat-card">
            <div class="stat-value">${stats.avgMastery}%</div>
            <div class="stat-label">平均掌握度</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${stats.todayAccuracy}%</div>
            <div class="stat-label">今日正确率</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${stats.wrongCount}</div>
            <div class="stat-label">待复习错题</div>
          </div>
        </div>

        ${stats.weakNodes.length > 0 ? `
          <div class="section-box">
            <div class="section-title">需要加强的知识点</div>
            <div class="weak-list">
              ${stats.weakNodes.map(n => `
                <div class="weak-item" onclick="UI.startNodeQuiz('${this.getNodeIdByName(n.name)}')">
                  <span class="weak-name">${n.name}</span>
                  <span class="weak-score">${n.score}%</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  },

  getNodeIdByName(name) {
    const node = KNOWLEDGE_NODES.find(n => n.name === name);
    return node ? node.id : '';
  },

  // -------- 答题 --------
  startQuiz() {
    const stats = Engine.getStats();
    const remaining = stats.dailyGoal - stats.todayQuestions;
    const count = remaining > 0 ? remaining : stats.dailyGoal;
    this.quizQueue = Engine.getRecommendedQuestions(count);
    this.currentQuizIndex = 0;
    this.showQuizPage();
  },

  showQuizPage() {
    const main = document.getElementById('main-content');
    const total = this.quizQueue.length;

    if (this.currentQuizIndex >= total) {
      this.showQuizResult();
      return;
    }

    const q = this.quizQueue[this.currentQuizIndex];
    this.selectedOption = null;
    this.submitted = false;
    this.quizStartTime = Date.now();

    const reasonLabel = { '复习': '🔁', '错题': '❌', '挑战': '⚡', '新题': '📖' };
    const reasonText = { '复习': '艾宾浩斯复习', '错题': '错题重练', '挑战': '能力提升', '新题': '新知识' };

    document.getElementById('page-title').textContent = `第 ${this.currentQuizIndex + 1}/${total} 题`;
    document.getElementById('nav').style.display = 'none';
    const backBtn = document.getElementById('back-btn');
    if (backBtn) backBtn.style.display = 'block';

    main.innerHTML = `
      <div class="quiz-page">
        <div class="quiz-meta">
          <span class="quiz-tag">${q.chapter}</span>
          ${q.reason ? `<span class="quiz-reason-tag ${q.reason}">${reasonLabel[q.reason] || ''} ${reasonText[q.reason] || ''}</span>` : ''}
          <span class="quiz-diff">难度 ${'★'.repeat(q.difficulty)}${'☆'.repeat(3 - q.difficulty)}</span>
        </div>

        <div class="question-box">
          <div class="question-text">${q.content}</div>
        </div>

        <div class="options-list">
          ${q.options.map((opt, i) => `
            <button class="option-btn" data-index="${i}" onclick="UI.selectOption(${i})">
              <span class="option-letter">${String.fromCharCode(65 + i)}</span>
              <span class="option-text">${opt}</span>
            </button>
          `).join('')}
        </div>

        <button class="btn-primary btn-large" id="submit-btn" onclick="UI.submitAnswer()" disabled>提交答案</button>
      </div>
    `;
  },

  selectOption(index) {
    if (this.submitted) return;
    this.selectedOption = index;
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
      btn.classList.toggle('selected', i === index);
    });
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) submitBtn.disabled = false;
  },

  submitAnswer() {
    if (this.submitted || this.selectedOption === null) return;
    this.submitted = true;

    const q = this.quizQueue[this.currentQuizIndex];
    const selectedText = q.options[this.selectedOption];
    const correct = selectedText === q.answer;
    const timeSpent = Math.round((Date.now() - this.quizStartTime) / 1000);

    if (correct) this.sessionCorrectStreak++;
    else this.sessionCorrectStreak = 0;

    // 立即持久化进度（tag 稍后由 selectTag 修补，避免提交后退出导致整题白做）
    Engine.recordAnswer(q.id, correct, timeSpent, null, this.sessionCorrectStreak);
    this.currentAnswer = { questionId: q.id, correct, selectedText, timeSpent };

    // 更新选项样式
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
      const opt = q.options[i];
      btn.disabled = true;
      if (opt === q.answer) {
        btn.classList.add('correct');
      } else if (i === this.selectedOption) {
        btn.classList.add('wrong');
      }
    });

    // 直接显示解析
    this.showExplanation(q, correct, selectedText);
  },

  showExplanation(q, correct, selectedText) {
    const main = document.getElementById('main-content');
    const isLast = this.currentQuizIndex >= this.quizQueue.length - 1;

    main.innerHTML = `
      <div class="quiz-page">
        <div class="result-bar ${correct ? 'correct' : 'wrong'}">
          <span class="result-icon">${correct ? '✓' : '✗'}</span>
          <span class="result-text">${correct ? '回答正确' : '回答错误'}</span>
        </div>

        <div class="question-box faded">
          <div class="question-text">${q.content}</div>
        </div>

        <div class="options-list">
          ${q.options.map((opt, i) => `
            <div class="option-btn static ${opt === q.answer ? 'correct' : (opt === selectedText && !correct) ? 'wrong' : 'neutral'}">
              <span class="option-letter">${String.fromCharCode(65 + i)}</span>
              <span class="option-text">${opt}</span>
            </div>
          `).join('')}
        </div>

        <div class="explanation-box">
          <div class="exp-step">
            <div class="exp-label">💡 先想想</div>
            <div class="exp-text">${q.hints[0]}</div>
          </div>
          <div class="exp-step">
            <div class="exp-label">🔑 关键提示</div>
            <div class="exp-text">${q.hints[1]}</div>
          </div>
          <div class="exp-step">
            <div class="exp-label">📖 完整解析</div>
            <div class="exp-text">${q.explanation}</div>
          </div>
        </div>

        ${!correct ? `
          <div class="tag-box" id="tag-box">
            <div class="tag-title">这道题为什么做错了？（选一个）</div>
            <div class="tag-options">
              <button class="tag-btn" data-tag="完全不会" onclick="UI.selectTag(this)">完全不会</button>
              <button class="tag-btn" data-tag="概念不清" onclick="UI.selectTag(this)">概念不清</button>
              <button class="tag-btn" data-tag="公式记错" onclick="UI.selectTag(this)">公式记错</button>
              <button class="tag-btn" data-tag="粗心大意" onclick="UI.selectTag(this)">粗心大意</button>
              <button class="tag-btn" data-tag="似懂非懂" onclick="UI.selectTag(this)">似懂非懂</button>
            </div>
          </div>
        ` : ''}

        <button class="btn-primary btn-large" id="next-btn" onclick="UI.nextQuestion()">
          ${isLast ? '完成练习' : '下一题'}
        </button>
      </div>
    `;
  },

  selectedTag: null,

  selectTag(btn) {
    const newTag = btn.dataset.tag;
    document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');

    // 修补已记录的最后一条 history（submitAnswer 时已落盘，但 tag 当时为 null）
    if (this.currentAnswer) {
      const state = Storage.getState();
      const last = state.history[state.history.length - 1];
      if (last && last.questionId === this.currentAnswer.questionId) {
        const q = ALL_QUESTIONS.find(qq => qq.id === last.questionId);
        const nodeId = q ? q.knowledge_node_id : null;
        // 撤销旧 tag 的统计（用户可能切换 tag）
        if (last.answerTag && nodeId && state.tagStats[nodeId] && state.tagStats[nodeId][last.answerTag]) {
          state.tagStats[nodeId][last.answerTag]--;
          if (state.tagStats[nodeId][last.answerTag] <= 0) delete state.tagStats[nodeId][last.answerTag];
        }
        last.answerTag = newTag;
        if (nodeId) {
          if (!state.tagStats[nodeId]) state.tagStats[nodeId] = {};
          state.tagStats[nodeId][newTag] = (state.tagStats[nodeId][newTag] || 0) + 1;
          state.answerTags[last.questionId] = newTag;
        }
        Storage.saveState(state);
      }
    }
    this.selectedTag = newTag;
  },

  nextQuestion() {
    // 进度已在 submitAnswer / selectTag 持久化，此处仅切题
    this.currentAnswer = null;
    this.selectedTag = null;

    this.currentQuizIndex++;
    this.showQuizPage();
  },

  showQuizResult() {
    const main = document.getElementById('main-content');
    const stats = Engine.getStats();
    const accuracy = stats.todayAccuracy;

    document.getElementById('page-title').textContent = '练习完成';
    document.getElementById('nav').style.display = 'flex';

    let emoji, title, msg;
    if (accuracy >= 90) { emoji = '🏆'; title = '完美！'; msg = '今天的表现太出色了！'; }
    else if (accuracy >= 75) { emoji = '🎉'; title = '很棒！'; msg = '掌握得不错，继续保持！'; }
    else if (accuracy >= 60) { emoji = '👍'; title = '不错！'; msg = '有进步，错题记得复习哦'; }
    else { emoji = '💪'; title = '加油！'; msg = '基础需要巩固，继续努力'; }

    main.innerHTML = `
      <div class="result-page">
        <div class="result-emoji">${emoji}</div>
        <div class="result-title">${title}</div>
        <div class="result-msg">${msg}</div>

        <div class="result-stats">
          <div class="result-stat">
            <div class="result-value">${stats.todayQuestions}</div>
            <div class="result-label">今日做题</div>
          </div>
          <div class="result-stat">
            <div class="result-value">${stats.todayCorrect}</div>
            <div class="result-label">答对</div>
          </div>
          <div class="result-stat">
            <div class="result-value">${accuracy}%</div>
            <div class="result-label">正确率</div>
          </div>
        </div>

        <button class="btn-primary btn-large" onclick="UI.showPage('home')">返回首页</button>
      </div>
    `;
  },

  // -------- 知识地图 --------
  renderMap(container) {
    const state = Storage.getState();

    container.innerHTML = `
      <div class="map-page">
        ${CHAPTERS.map(ch => {
          const nodesHtml = ch.nodes.map(nodeId => {
            const node = KNOWLEDGE_NODES.find(n => n.id === nodeId);
            const eff = Engine.getEffectiveMastery(nodeId, state);
            const m = state.mastery[nodeId] || { answered: 0 };
            const preMet = Engine.arePrerequisitesMet(nodeId, state);
            let level = 'locked';
            if (preMet) {
              if (eff >= 80) level = 'mastered';
              else if (eff >= 50) level = 'learning';
              else if (eff > 0 || m.answered > 0) level = 'started';
            }
            const pct = Math.round(eff);
            const clickAttr = preMet ? `onclick="UI.startNodeQuiz('${nodeId}')"` : '';

            return `
              <div class="node-cell ${level}" ${clickAttr}>
                <div class="node-status"></div>
                <div class="node-name">${node.name}</div>
                <div class="node-bar"><div class="node-fill" style="width:${pct}%"></div></div>
                <div class="node-pct">${pct}%</div>
              </div>
            `;
          }).join('');

          return `
            <div class="chapter-block">
              <div class="chapter-title">八${ch.semester} · ${ch.name}</div>
              <div class="nodes-grid">${nodesHtml}</div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  startNodeQuiz(nodeId) {
    const questions = Engine.getNodeQuestions(nodeId);
    if (questions.length === 0) {
      alert('该知识点暂无题目');
      return;
    }
    this.quizQueue = questions.sort(() => Math.random() - 0.5).slice(0, Math.min(5, questions.length));
    this.currentQuizIndex = 0;
    this.showQuizPage();
  },

  // -------- 错题本 --------
  renderReview(container) {
    const wrongQs = Engine.getWrongQuestions();

    if (wrongQs.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🎉</div>
          <div class="empty-title">暂无错题</div>
          <div class="empty-desc">太棒了，继续保持！</div>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="review-page">
        <div class="review-header">
          <span class="review-count">待复习错题：${wrongQs.length} 道</span>
          <button class="btn-secondary" onclick="UI.startWrongQuiz()">全部重练</button>
        </div>
        <div class="review-list">
          ${wrongQs.map(q => {
            const node = KNOWLEDGE_NODES.find(n => n.id === q.knowledge_node_id);
            return `
              <div class="review-card" onclick="UI.startNodeQuiz('${q.knowledge_node_id}')">
                <div class="review-q">${q.content}</div>
                <div class="review-meta">
                  <span>${q.chapter}</span>
                  <span>${node ? node.name : ''}</span>
                  <span class="diff-tag">难度${q.difficulty}</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  startWrongQuiz() {
    const wrongQs = Engine.getWrongQuestions();
    if (wrongQs.length === 0) return;
    this.quizQueue = wrongQs.sort(() => Math.random() - 0.5);
    this.currentQuizIndex = 0;
    this.showQuizPage();
  },

  // -------- 设置 --------
  renderSettings(container) {
    const state = Storage.getState();

    container.innerHTML = `
      <div class="settings-page">
        <div class="setting-group">
          <div class="setting-label">每日目标</div>
          <div class="setting-desc">每天推荐的练习题目数量</div>
          <div class="goal-btns">
            ${[30, 50, 100, 150].map(n => `
              <button class="goal-btn ${state.dailyGoal === n ? 'active' : ''}" onclick="UI.setDailyGoal(${n})">${n} 题</button>
            `).join('')}
          </div>
        </div>

        <div class="setting-group">
          <div class="setting-label">数据备份</div>
          <div class="setting-desc">防止学习记录丢失</div>
          <button class="btn-secondary btn-block" onclick="UI.exportData()">导出数据到文件</button>
          <button class="btn-secondary btn-block" onclick="UI.importData()">从文件导入数据</button>
        </div>

        <div class="setting-group">
          <div class="setting-label">危险操作</div>
          <button class="btn-danger btn-block" onclick="UI.resetData()">清除所有学习数据</button>
        </div>

        <div class="setting-group">
          <div class="setting-label">关于</div>
          <div class="about-text">
            物理提分助手 v1.0<br>
            八年级物理自适应学习<br>
            共 ${ALL_QUESTIONS.length} 道题 · ${KNOWLEDGE_NODES.length} 个知识点
          </div>
        </div>
      </div>
    `;
  },

  setDailyGoal(n) {
    const state = Storage.getState();
    state.dailyGoal = n;
    Storage.saveState(state);
    this.renderSettings(document.getElementById('main-content'));
  },

  exportData() {
    const data = Storage.exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `physics_backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          Storage.importData(event.target.result);
          alert('数据导入成功！');
          this.showPage('home');
        } catch (err) {
          alert('导入失败：' + err.message);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  },

  resetData() {
    if (confirm('确定要清除所有学习数据吗？此操作不可恢复！')) {
      Storage.reset();
      alert('数据已清除');
      this.showPage('home');
    }
  }
};

// 启动
document.addEventListener('DOMContentLoaded', () => {
  UI.init();
});
