# 物理提分助手 — 产品需求文档 (PRD)

## 1. 项目概述

| 属性 | 说明 |
|------|------|
| 目标用户 | 八年级物理薄弱学生及其家长 |
| 产品形态 | 纯前端静态网页应用（零运行时依赖） |
| 部署方式 | 腾讯云 CloudBase Hosting |
| 当前域名 | `https://kids-education-d8gak4uog7d6f09fa-1419212374.tcloudbaseapp.com` |
| 题库规模 | 302 题，覆盖 29 个知识点 |
| 数据存储 | **localStorage（当前）** → 计划迁移至云端 |

---

## 2. 用户角色与场景

### 2.1 学生端（index.html）

**核心场景**：每天打开应用 → 获得今日推荐题目 → 答题 → 查看解析 → 持续积累

| 场景 | 需求描述 |
|------|----------|
| S1-首次使用 | 清除数据后进入，显示欢迎语和初始状态，推荐从全新知识点开始 |
| S2-日常练习 | 根据掌握度、错题、艾宾浩斯复习计划动态生成今日题目列表 |
| S3-答题反馈 | 选择答案后即时反馈正误，展示三步引导式解析，错误时要求选择原因标签 |
| S4-知识地图 | 可视化 29 个知识点的掌握进度，颜色区分未学/初学/掌握/精通 |
| S5-错题复习 | 自动收录错题，支持全部重练，答对后自动移出错题本 |
| S6-数据管理 | 导出 JSON 备份、导入恢复、清除数据、切换每日目标 |

### 2.2 家长看板（parent.html）

**核心场景**：家长独立打开链接 → 查看孩子学习数据 → 了解薄弱点

| 场景 | 需求描述 |
|------|----------|
| P1-今日概况 | 显示今日做题数、正确率、用时 |
| P2-本周趋势 | 柱状图展示近 7 天学习量 |
| P3-学习总览 | 累计做题、总正确率、连续学习天数 |
| P4-薄弱预警 | 掌握度 < 50% 且已答题的知识点红色预警 |
| P5-知识点列表 | 按掌握度从低到高排序，分数颜色分级 |

---

## 3. 功能需求（按模块）

### 3.1 推荐引擎

```
输入: 用户状态 state, 目标题数 count（默认 dailyGoal）
输出: 推荐题目列表（每题带 reason 标签）

优先级队列（按顺序）：
1. 艾宾浩斯到期复习 → reason: '复习'
2. 有错题的知识点（按错题数倒序）→ reason: '错题'
3. ZPD 知识点（掌握度 20-80，按掌握度升序）→ reason: '挑战'
4. 全新知识点（未学过）→ reason: '新题'
5. 兜底随机 → reason: '新题'

每个知识点出题上限: 10 题
题型优先级: 根据学生错误标签统计，优先推荐对应题型
  - 概念不清 → 概念型
  - 公式记错 → 计算型
  - 粗心大意 → 辨析型
  - 似懂非懂 → 应用型
  - 完全不会 → 概念型（同时降低难度）
```

### 3.2 掌握度计算引擎

```
初始状态: score=0, answered=0, correct=0, streak=0

答对:
  increment = max(5, (100 - score) * 0.15)
  score = min(100, score + increment)
  streak++

答错:
  decrement = max(5, score * 0.12)
  score = max(0, score - decrement)
  streak = 0
```

**节点状态分级**：
- `< 50%`: started（蓝色边框）
- `50-79%`: learning（橙色边框）
- `>= 80%`: mastered（绿色边框）
- 未答题: locked（灰色）

### 3.3 艾宾浩斯复习计划

```
间隔序列: [1, 3, 7, 14, 30] 天

答对: level = min(level + 1, 4), nextReview = today + intervals[level]
答错: level = -1, nextReview = tomorrow
历史记录上限: 20 条（FIFO）
```

### 3.4 连续学习 streak

```
今日首次答题:
  if lastStudyDate == yesterday → streak++
  else if lastStudyDate != today → streak = 1
  lastStudyDate = today

同日多次答题: streak 不变
```

---

## 4. 数据模型

### 4.1 状态结构（localStorage key: `physics_learning_state_v1`）

```typescript
interface State {
  mastery: {
    [nodeId: string]: {
      score: number;      // 0-100
      answered: number;
      correct: number;
      lastReview: string; // ISO timestamp
      streak: number;     // 连续答对该知识点次数
    }
  };
  history: Array<{
    questionId: string;
    correct: boolean;
    timestamp: string;    // ISO timestamp
    timeSpent: number;    // 秒
    answerTag: string | null;
  }>;
  wrongQuestions: string[];  // 错题 ID 列表
  reviewSchedule: {
    [nodeId: string]: {
      level: number;      // -1 to 4
      nextReview: string; // YYYY-MM-DD
      history: Array<{ date: string; result: 'correct' | 'wrong' }>;
    }
  };
  dailyStats: {
    [date: string]: { questions: number; correct: number; time: number }
  };
  firstUse: string;       // YYYY-MM-DD
  totalAnswered: number;
  totalCorrect: number;
  dailyGoal: number;      // 10/20/30
  answerTags: { [questionId: string]: string };
  tagStats: { [nodeId: string]: { [tag: string]: number } };
  lastStudyDate: string | null;  // YYYY-MM-DD
  streak: number;
}
```

### 4.2 题目结构

```typescript
interface Question {
  id: string;
  chapter: string;        // 章节名
  section: string;        // 小节名
  knowledge_node_id: string;
  difficulty: number;     // 1-3
  content: string;        // 题目文本
  options: string[];      // 4 个选项
  answer: string;         // 正确选项文本
  explanation: string[];  // [启发问题, 关键提示, 完整解答]
  tags?: string[];        // ['概念型', '计算型', ...]
}
```

---

## 5. 非功能需求

| 维度 | 要求 |
|------|------|
| 性能 | 首屏加载 < 3s（腾讯云 CDN）；答题切换无感知延迟 |
| 兼容性 | Chrome/Edge/Firefox/微信内置浏览器；移动端优先 |
| 响应式 | iPhone SE(375×667) 到桌面 1366+ 无布局错位 |
| 离线 | 不依赖网络即可答题（纯前端）；家长看板同理 |
| 数据安全 | 本地存储，用户自主导出备份 |

---

## 6. 已知限制与待决策项

### 6.1 当前限制（localStorage 方案）

| 限制 | 影响 | 状态 |
|------|------|------|
| 数据绑定单一浏览器 | 换设备/清缓存/隐私模式 = 数据丢失 | 待解决 |
| 家长看板需同设备 | 家长无法独立查看孩子学习数据 | 待解决 |
| 无用户身份体系 | 无法区分多个学生 | 已知，暂不考虑 |

### 6.2 待决策：跨设备数据方案

已讨论三个方案，用户倾向 **方案2（URL 分享链接）**：

- **方案1**: 微信登录 + CloudBase 数据库（需微信生态，有登录门槛）
- **方案2**: URL 分享链接（`?uid=xxx`）+ CloudBase 数据库 + 云函数（无登录门槛，数据跟随链接）
- **方案3**: 保持现状，用户手动导出/导入（零改造成本，体验差）

**方案2 实施前提需确认**：
1. 是否愿意引入 CloudBase 数据库 + 云函数（产生少量费用）？
2. URL 中的 uid 是否可接受明文可见？
3. 数据安全级别：同一 uid 任何人可访问，是否需要简单密码保护？

---

## 7. 发布验收标准

| 检查项 | 标准 |
|--------|------|
| 功能完整性 | 手动清单 P0 项 100% 通过 |
| 自动化测试 | Playwright 全部通过（Chromium + Mobile Safari） |
| 数据正确性 | 模拟 3 天学习后，首页/地图/错题本/家长看板数据一致 |
| 部署验证 | 腾讯云环境截图与本地一致 |
| 性能 | Lighthouse 性能评分 >= 80 |
