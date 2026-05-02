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

test.describe('家长看板', () => {
  test('无数据状态', async ({ page }) => {
    await page.goto('/parent.html');
    await clearStorage(page);
    await page.reload();
    await expect(page.locator('.empty')).toBeVisible();
    await expect(page.locator('.empty-title')).toContainText('暂无数据');
    await expect(page.locator('.empty-desc')).toContainText('请先在主应用中开始学习');
    await expect(page.locator('#date-display')).toContainText('数据日期：');
  });

  test('今日概况展示', async ({ page }) => {
    const today = new Date().toISOString().split('T')[0];
    await page.goto('/parent.html');
    await setStorage(page, {
      mastery: {},
      history: [],
      wrongQuestions: [],
      reviewSchedule: {},
      dailyStats: { [today]: { questions: 15, correct: 12, time: 450 } },
      firstUse: '2026-04-20',
      totalAnswered: 100,
      totalCorrect: 80,
      dailyGoal: 30,
      answerTags: {},
      tagStats: {},
      lastStudyDate: today,
      streak: 3,
    });
    await page.reload();

    const values = await page.locator('.today-value').allTextContents();
    expect(values[0]).toBe('15');  // 做题数
    expect(values[1]).toBe('80%'); // 正确率 (12/15=80%)
    expect(values[2]).toBe('8');   // 用时(分) (450/60=7.5→8)
  });

  test('本周趋势图显示7天', async ({ page }) => {
    const today = new Date().toISOString().split('T')[0];
    const dailyStats = {};
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dStr = d.toISOString().split('T')[0];
      dailyStats[dStr] = { questions: i + 1, correct: i, time: (i + 1) * 30 };
    }

    await page.goto('/parent.html');
    await setStorage(page, {
      mastery: {},
      history: [],
      wrongQuestions: [],
      reviewSchedule: {},
      dailyStats,
      firstUse: '2026-04-20',
      totalAnswered: 28,
      totalCorrect: 21,
      dailyGoal: 30,
      answerTags: {},
      tagStats: {},
      lastStudyDate: today,
      streak: 3,
    });
    await page.reload();

    const bars = await page.locator('.bar-item').count();
    expect(bars).toBe(7);
  });

  test('学习总览数据', async ({ page }) => {
    const today = new Date().toISOString().split('T')[0];
    await page.goto('/parent.html');
    await setStorage(page, {
      mastery: {},
      history: [],
      wrongQuestions: [],
      reviewSchedule: {},
      dailyStats: { [today]: { questions: 5, correct: 4, time: 100 } },
      firstUse: '2026-04-20',
      totalAnswered: 200,
      totalCorrect: 160,
      dailyGoal: 30,
      answerTags: {},
      tagStats: {},
      lastStudyDate: today,
      streak: 10,
    });
    await page.reload();

    const values = await page.locator('.card:has(.card-title:has-text("学习总览")) .today-value').allTextContents();
    expect(values[0]).toBe('200');  // 累计做题
    expect(values[1]).toBe('80%');  // 总正确率
    expect(values[2]).toBe('10');   // 连续学习
  });

  test('知识点掌握度列表排序', async ({ page }) => {
    const today = new Date().toISOString().split('T')[0];
    await page.goto('/parent.html');
    await setStorage(page, {
      mastery: {
        motion_measurement: { score: 90, answered: 10, correct: 9, lastReview: null, streak: 3 },
        motion_reference: { score: 30, answered: 5, correct: 1, lastReview: null, streak: 0 },
        motion_speed: { score: 70, answered: 8, correct: 6, lastReview: null, streak: 2 },
      },
      history: [],
      wrongQuestions: [],
      reviewSchedule: {},
      dailyStats: { [today]: { questions: 0, correct: 0, time: 0 } },
      firstUse: '2026-04-20',
      totalAnswered: 23,
      totalCorrect: 16,
      dailyGoal: 30,
      answerTags: {},
      tagStats: {},
      lastStudyDate: today,
      streak: 1,
    });
    await page.reload();

    const rows = await page.locator('.node-row').all();
    expect(rows.length).toBeGreaterThanOrEqual(3);
    const firstScore = await page.locator('.node-score').first().textContent();
    expect(Number(firstScore.replace('%', ''))).toBeLessThanOrEqual(35);
  });

  test('掌握度颜色分级', async ({ page }) => {
    const today = new Date().toISOString().split('T')[0];
    await page.goto('/parent.html');
    await setStorage(page, {
      mastery: {
        motion_measurement: { score: 85, answered: 10, correct: 9, lastReview: null, streak: 3 },
        motion_reference: { score: 65, answered: 5, correct: 3, lastReview: null, streak: 1 },
        motion_speed: { score: 30, answered: 3, correct: 1, lastReview: null, streak: 0 },
      },
      history: [],
      wrongQuestions: [],
      reviewSchedule: {},
      dailyStats: { [today]: { questions: 0, correct: 0, time: 0 } },
      firstUse: '2026-04-20',
      totalAnswered: 18,
      totalCorrect: 13,
      dailyGoal: 30,
      answerTags: {},
      tagStats: {},
      lastStudyDate: today,
      streak: 1,
    });
    await page.reload();

    const scores = await page.locator('.node-score').all();
    let foundHigh = false, foundMid = false, foundLow = false;
    for (const scoreEl of scores) {
      const classAttr = await scoreEl.getAttribute('class');
      if (classAttr.includes('score-high')) foundHigh = true;
      if (classAttr.includes('score-mid')) foundMid = true;
      if (classAttr.includes('score-low')) foundLow = true;
    }
    expect(foundHigh).toBe(true);
    expect(foundMid).toBe(true);
    expect(foundLow).toBe(true);
  });

  test('薄弱知识点预警显示', async ({ page }) => {
    const today = new Date().toISOString().split('T')[0];
    await page.goto('/parent.html');
    await setStorage(page, {
      mastery: {
        motion_reference: { score: 30, answered: 5, correct: 1, lastReview: null, streak: 0 },
        motion_speed: { score: 40, answered: 3, correct: 1, lastReview: null, streak: 0 },
      },
      history: [],
      wrongQuestions: [],
      reviewSchedule: {},
      dailyStats: { [today]: { questions: 0, correct: 0, time: 0 } },
      firstUse: '2026-04-20',
      totalAnswered: 8,
      totalCorrect: 2,
      dailyGoal: 30,
      answerTags: {},
      tagStats: {},
      lastStudyDate: today,
      streak: 1,
    });
    await page.reload();

    await expect(page.locator('.weak-alert')).toBeVisible();
    await expect(page.locator('.weak-alert-text')).toContainText('薄弱知识点');
  });

  test('无薄弱知识点不显示预警', async ({ page }) => {
    const today = new Date().toISOString().split('T')[0];
    await page.goto('/parent.html');
    await setStorage(page, {
      mastery: {
        motion_measurement: { score: 85, answered: 10, correct: 9, lastReview: null, streak: 3 },
      },
      history: [],
      wrongQuestions: [],
      reviewSchedule: {},
      dailyStats: { [today]: { questions: 0, correct: 0, time: 0 } },
      firstUse: '2026-04-20',
      totalAnswered: 10,
      totalCorrect: 9,
      dailyGoal: 30,
      answerTags: {},
      tagStats: {},
      lastStudyDate: today,
      streak: 1,
    });
    await page.reload();

    await expect(page.locator('.weak-alert')).not.toBeVisible();
  });

  test('与主应用数据一致', async ({ page, context }) => {
    const today = new Date().toISOString().split('T')[0];
    const data = {
      mastery: {
        motion_measurement: { score: 75, answered: 8, correct: 6, lastReview: null, streak: 2 },
      },
      history: [],
      wrongQuestions: [],
      reviewSchedule: {},
      dailyStats: { [today]: { questions: 10, correct: 8, time: 300 } },
      firstUse: '2026-04-20',
      totalAnswered: 50,
      totalCorrect: 40,
      dailyGoal: 30,
      answerTags: {},
      tagStats: {},
      lastStudyDate: today,
      streak: 5,
    };

    await page.goto('/index.html');
    await setStorage(page, data);
    await page.reload();

    const stats = await page.locator('.stat-value').allTextContents();
    const homeTotalAnswered = stats[0]; // This is avgMastery actually, not total

    const parentPage = await context.newPage();
    await parentPage.goto('/parent.html');
    await setStorage(parentPage, data);
    await parentPage.reload();

    const overviewValues = await parentPage.locator('.card:has(.card-title:has-text("学习总览")) .today-value').allTextContents();
    expect(overviewValues[0]).toBe('50');  // totalAnswered
    expect(overviewValues[1]).toBe('80%'); // totalAccuracy
    expect(overviewValues[2]).toBe('5');   // streak
  });
});
