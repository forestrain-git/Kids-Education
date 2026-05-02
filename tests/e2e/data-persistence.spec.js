import { test, expect } from '@playwright/test';

const STORAGE_KEY = 'physics_learning_state_v1';

async function clearStorage(page) {
  await page.evaluate((key) => localStorage.removeItem(key), STORAGE_KEY);
}

async function setStorage(page, data) {
  await page.evaluate(({ key, data }) => localStorage.setItem(key, JSON.stringify(data)), { key: STORAGE_KEY, data });
}

async function getStorage(page) {
  return page.evaluate((key) => {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  }, STORAGE_KEY);
}

function getDefaultState() {
  return {
    mastery: {},
    history: [],
    wrongQuestions: [],
    reviewSchedule: {},
    dailyStats: {},
    firstUse: new Date().toISOString().split('T')[0],
    totalAnswered: 0,
    totalCorrect: 0,
    dailyGoal: 30,
    answerTags: {},
    tagStats: {},
    lastStudyDate: null,
    streak: 0,
  };
}

async function initEmptyState(page) {
  await setStorage(page, getDefaultState());
}

test.describe('localStorage 核心操作', () => {
  test('首次使用 localStorage 为空', async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    await page.reload();
    const state = await getStorage(page);
    expect(state).toBeNull();
  });

  test('答题后 mastery 和 streak 被正确保存', async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    await initEmptyState(page);
    await page.reload();

    await page.locator('.btn-large').click();
    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    await page.locator('.option-btn').nth(correctIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('#next-btn').click();

    const state = await getStorage(page);
    // mastery 通过 updateMastery > saveState 保存
    const nodeId = await page.evaluate(() => UI.quizQueue[0].knowledge_node_id);
    expect(state.mastery[nodeId]).toBeDefined();
    expect(state.mastery[nodeId].score).toBeGreaterThan(0);
    // streak 通过 updateStreak (在 updateMastery 中) 保存
    expect(state.lastStudyDate).toBe(new Date().toISOString().split('T')[0]);
  });

  test('首次答题后 history/totalAnswered 正确保存', async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    await initEmptyState(page);
    await page.reload();

    await page.locator('.btn-large').click();
    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    await page.locator('.option-btn').nth(correctIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('#next-btn').click();

    const state = await getStorage(page);
    expect(state.history.length).toBe(1);
    expect(state.totalAnswered).toBe(1);
    expect(state.totalCorrect).toBe(1);
    expect(Object.keys(state.dailyStats).length).toBe(1);
  });

  test('答错题后 wrongQuestions 正确记录', async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    await initEmptyState(page);
    await page.reload();

    await page.locator('.btn-large').click();
    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    const wrongIndex = correctIndex === 0 ? 1 : 0;

    await page.locator('.option-btn').nth(wrongIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('.tag-btn').first().click();
    await page.locator('#next-btn').click();

    const state = await getStorage(page);
    expect(state.wrongQuestions.length).toBe(1);
  });

  test('错题答对后 wrongQuestions 正确移除', async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    const today = new Date().toISOString().split('T')[0];
    const qId = 'up_001';
    await setStorage(page, {
      ...getDefaultState(),
      wrongQuestions: [qId],
      dailyStats: { [today]: { questions: 0, correct: 0, time: 0 } },
    });
    await page.reload();
    await page.locator('nav button[data-page="review"]').click();
    await page.locator('.review-card').first().click();

    // 强制当前题目为 up_001，避免知识点下多题随机导致断言失败
    await page.evaluate((targetId) => {
      const q = ALL_QUESTIONS.find(q => q.id === targetId);
      if (q) { UI.quizQueue = [q]; UI.currentQuizIndex = 0; UI.showQuizPage(); }
    }, qId);

    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    await page.locator('.option-btn').nth(correctIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('#next-btn').click();

    const state = await getStorage(page);
    expect(state.wrongQuestions).not.toContain(qId);
  });

  test('mastery 分数计算 - 正确递增', async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    const today = new Date().toISOString().split('T')[0];
    const nodeId = 'motion_measurement';
    await setStorage(page, {
      ...getDefaultState(),
      mastery: {
        [nodeId]: { score: 0, answered: 0, correct: 0, lastReview: null, streak: 0 },
      },
      reviewSchedule: {
        [nodeId]: { level: -1, nextReview: today, history: [] },
      },
      dailyStats: { [today]: { questions: 0, correct: 0, time: 0 } },
    });
    await page.reload();
    await page.locator('.btn-large').click();

    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    await page.locator('.option-btn').nth(correctIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('#next-btn').click();

    const state = await getStorage(page);
    const score = state.mastery[nodeId].score;
    expect(score).toBeGreaterThan(0);
    expect(score).toBeLessThanOrEqual(100);
  });

  test('mastery 分数计算 - 错误递减', async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    const today = new Date().toISOString().split('T')[0];
    const nodeId = 'motion_measurement';
    await setStorage(page, {
      ...getDefaultState(),
      mastery: {
        [nodeId]: { score: 100, answered: 10, correct: 10, lastReview: null, streak: 10 },
      },
      reviewSchedule: {
        [nodeId]: { level: -1, nextReview: today, history: [] },
      },
      dailyStats: { [today]: { questions: 0, correct: 0, time: 0 } },
    });
    await page.reload();
    await page.locator('.btn-large').click();

    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    const wrongIndex = correctIndex === 0 ? 1 : 0;
    await page.locator('.option-btn').nth(wrongIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('.tag-btn').first().click();
    await page.locator('#next-btn').click();

    const state = await getStorage(page);
    const score = state.mastery[nodeId].score;
    expect(score).toBeLessThan(100);
    expect(score).toBeGreaterThanOrEqual(0);
  });

  test('mastery 分数边界 - 不低于0', async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    const today = new Date().toISOString().split('T')[0];
    const nodeId = 'motion_measurement';
    await setStorage(page, {
      ...getDefaultState(),
      mastery: {
        [nodeId]: { score: 0, answered: 1, correct: 0, lastReview: null, streak: 0 },
      },
      reviewSchedule: {
        [nodeId]: { level: -1, nextReview: today, history: [] },
      },
      dailyStats: { [today]: { questions: 0, correct: 0, time: 0 } },
    });
    await page.reload();
    await page.locator('.btn-large').click();

    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    const wrongIndex = correctIndex === 0 ? 1 : 0;
    await page.locator('.option-btn').nth(wrongIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('.tag-btn').first().click();
    await page.locator('#next-btn').click();

    const state = await getStorage(page);
    expect(state.mastery[nodeId].score).toBe(0);
  });

  test('mastery 分数边界 - 不超过100', async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    const today = new Date().toISOString().split('T')[0];
    const nodeId = 'motion_measurement';
    await setStorage(page, {
      ...getDefaultState(),
      mastery: {
        [nodeId]: { score: 100, answered: 20, correct: 20, lastReview: null, streak: 20 },
      },
      reviewSchedule: {
        [nodeId]: { level: -1, nextReview: today, history: [] },
      },
      dailyStats: { [today]: { questions: 0, correct: 0, time: 0 } },
    });
    await page.reload();
    await page.locator('.btn-large').click();

    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    await page.locator('.option-btn').nth(correctIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('#next-btn').click();

    const state = await getStorage(page);
    expect(state.mastery[nodeId].score).toBe(100);
  });
});

test.describe('连续学习 streak 逻辑', () => {
  test('连续学习 streak 增加', async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    await setStorage(page, {
      ...getDefaultState(),
      streak: 2,
      lastStudyDate: yesterday.toISOString().split('T')[0],
      dailyStats: {},
    });
    await page.reload();
    await page.locator('.btn-large').click();

    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    await page.locator('.option-btn').nth(correctIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('#next-btn').click();

    const state = await getStorage(page);
    expect(state.streak).toBe(3);
    expect(state.lastStudyDate).toBe(new Date().toISOString().split('T')[0]);
  });

  test('streak 中断重置', async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
    await setStorage(page, {
      ...getDefaultState(),
      streak: 5,
      lastStudyDate: twoDaysAgo.toISOString().split('T')[0],
      dailyStats: {},
    });
    await page.reload();
    await page.locator('.btn-large').click();

    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    await page.locator('.option-btn').nth(correctIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('#next-btn').click();

    const state = await getStorage(page);
    expect(state.streak).toBe(1);
  });

  test('同一天多次答题 streak 不变', async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    const today = new Date().toISOString().split('T')[0];
    await setStorage(page, {
      ...getDefaultState(),
      streak: 3,
      lastStudyDate: today,
      dailyStats: { [today]: { questions: 1, correct: 1, time: 20 } },
    });
    await page.reload();
    await page.locator('.btn-large').click();

    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    await page.locator('.option-btn').nth(correctIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('#next-btn').click();

    const state = await getStorage(page);
    expect(state.streak).toBe(3);
  });
});

test.describe('艾宾浩斯复习计划', () => {
  test('答对后复习等级提升', async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    const today = new Date().toISOString().split('T')[0];
    const nodeId = 'motion_measurement';
    await setStorage(page, {
      ...getDefaultState(),
      mastery: {
        [nodeId]: { score: 50, answered: 5, correct: 3, lastReview: null, streak: 0 },
      },
      reviewSchedule: {
        [nodeId]: { level: -1, nextReview: today, history: [] },
      },
      dailyStats: { [today]: { questions: 0, correct: 0, time: 0 } },
    });
    await page.reload();
    await page.locator('.btn-large').click();

    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    await page.locator('.option-btn').nth(correctIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('#next-btn').click();

    const state = await getStorage(page);
    expect(state.reviewSchedule[nodeId].level).toBe(0);
  });

  test('答错后复习等级重置', async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    const today = new Date().toISOString().split('T')[0];
    const nodeId = 'motion_measurement';
    await setStorage(page, {
      ...getDefaultState(),
      mastery: {
        [nodeId]: { score: 80, answered: 10, correct: 8, lastReview: null, streak: 3 },
      },
      reviewSchedule: {
        [nodeId]: { level: 3, nextReview: today, history: [{ date: '2026-04-20', result: 'correct' }] },
      },
      dailyStats: { [today]: { questions: 0, correct: 0, time: 0 } },
    });
    await page.reload();
    await page.locator('.btn-large').click();

    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    const wrongIndex = correctIndex === 0 ? 1 : 0;
    await page.locator('.option-btn').nth(wrongIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('.tag-btn').first().click();
    await page.locator('#next-btn').click();

    const state = await getStorage(page);
    expect(state.reviewSchedule[nodeId].level).toBe(-1);
  });

  test('复习历史记录上限20条', async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    const today = new Date().toISOString().split('T')[0];
    const nodeId = 'motion_measurement';
    const history = Array.from({ length: 20 }, (_, i) => ({
      date: `2026-04-${String(i + 1).padStart(2, '0')}`,
      result: 'correct',
    }));
    await setStorage(page, {
      ...getDefaultState(),
      mastery: {
        [nodeId]: { score: 50, answered: 5, correct: 3, lastReview: null, streak: 0 },
      },
      reviewSchedule: {
        [nodeId]: { level: 0, nextReview: today, history },
      },
      dailyStats: { [today]: { questions: 0, correct: 0, time: 0 } },
    });
    await page.reload();
    await page.locator('.btn-large').click();

    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    await page.locator('.option-btn').nth(correctIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('#next-btn').click();

    const state = await getStorage(page);
    expect(state.reviewSchedule[nodeId].history.length).toBe(20);
  });
});

test.describe('标签统计', () => {
  test('标签统计正确累积', async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    const today = new Date().toISOString().split('T')[0];
    const nodeId = 'motion_measurement';
    await setStorage(page, {
      ...getDefaultState(),
      tagStats: {
        [nodeId]: { '概念不清': 2 },
      },
      dailyStats: { [today]: { questions: 0, correct: 0, time: 0 } },
    });
    await page.reload();
    await page.locator('.btn-large').click();

    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    const wrongIndex = correctIndex === 0 ? 1 : 0;
    await page.locator('.option-btn').nth(wrongIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('.tag-btn[data-tag="概念不清"]').click();
    await page.locator('#next-btn').click();

    const state = await getStorage(page);
    expect(state.tagStats[nodeId]['概念不清']).toBe(3);
  });

  test('answerTags 正确记录', async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    const today = new Date().toISOString().split('T')[0];
    await setStorage(page, {
      ...getDefaultState(),
      dailyStats: { [today]: { questions: 0, correct: 0, time: 0 } },
    });
    await page.reload();
    await page.locator('.btn-large').click();

    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    const wrongIndex = correctIndex === 0 ? 1 : 0;
    await page.locator('.option-btn').nth(wrongIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('.tag-btn[data-tag="粗心大意"]').click();
    await page.locator('#next-btn').click();

    const state = await getStorage(page);
    expect(Object.keys(state.answerTags).length).toBe(1);
  });
});

test.describe('导入导出完整性', () => {
  test('完整数据导出再导入一致', async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    const fixture = {
      mastery: { motion_measurement: { score: 75, answered: 8, correct: 6, lastReview: '2026-05-01T10:00:00.000Z', streak: 2 } },
      history: [{ questionId: 'q001', correct: true, timestamp: '2026-05-02T08:00:00.000Z', timeSpent: 15, answerTag: null }],
      wrongQuestions: ['q002'],
      reviewSchedule: { motion_measurement: { level: 1, nextReview: '2026-05-05', history: [{ date: '2026-05-01', result: 'correct' }] } },
      dailyStats: { '2026-05-02': { questions: 3, correct: 2, time: 47 } },
      firstUse: '2026-04-20',
      totalAnswered: 50,
      totalCorrect: 38,
      dailyGoal: 20,
      answerTags: { q002: '概念不清' },
      tagStats: { motion_measurement: { '概念不清': 1 } },
      lastStudyDate: '2026-05-02',
      streak: 5,
    };

    await setStorage(page, fixture);
    await page.reload();

    // Export
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.goto('/index.html'),
      page.locator('nav button[data-page="settings"]').click(),
      page.locator('.btn-secondary:has-text("导出")').click(),
    ]);
    const downloadPath = await download.path();
    const exportedData = JSON.parse(require('fs').readFileSync(downloadPath, 'utf-8'));
    expect(exportedData.totalAnswered).toBe(50);
    expect(exportedData.dailyGoal).toBe(20);

    // Clear and import
    await clearStorage(page);
    await page.reload();
    await page.evaluate((data) => Storage.importData(JSON.stringify(data)), fixture);

    const state = await getStorage(page);
    expect(state.totalAnswered).toBe(50);
    expect(state.dailyGoal).toBe(20);
    expect(state.mastery.motion_measurement.score).toBe(75);
  });

  test('导入后 parent.html 数据同步', async ({ page, context }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    const fixture = {
      ...getDefaultState(),
      totalAnswered: 42,
      totalCorrect: 35,
      streak: 7,
      dailyStats: { [new Date().toISOString().split('T')[0]]: { questions: 5, correct: 4, time: 120 } },
    };

    await setStorage(page, fixture);
    await page.reload();

    const parentPage = await context.newPage();
    await parentPage.goto('/parent.html');
    await expect(parentPage.locator('.today-value').first()).toContainText('5');
    await expect(parentPage.locator('.today-value').nth(1)).toContainText('80');
  });
});
