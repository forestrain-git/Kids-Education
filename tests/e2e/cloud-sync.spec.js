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
    mastery: {}, history: [], wrongQuestions: [], reviewSchedule: {},
    dailyStats: {}, firstUse: new Date().toISOString().split('T')[0],
    totalAnswered: 0, totalCorrect: 0, dailyGoal: 30,
    answerTags: {}, tagStats: {}, lastStudyDate: null, streak: 0,
  };
}

test.describe('云端同步', () => {
  test('uid 生成与重定向', async ({ page }) => {
    let generateUidCalled = false;
    await page.route('**/*', (route) => {
      const url = route.request().url();
      if (url.includes('generateUid')) {
        generateUidCalled = true;
        route.fulfill({ status: 200, body: JSON.stringify({ uid: 'testuid123' }) });
      } else {
        route.continue();
      }
    });

    await page.goto('/index.html?cloudSyncTest=1');
    await page.waitForTimeout(500);

    await expect.poll(() => generateUidCalled).toBe(true);
    await expect.poll(() => page.url()).toContain('uid=testuid123');
  });

  test('有 uid 时加载云端数据', async ({ page }) => {
    const remoteData = {
      ...getDefaultState(),
      totalAnswered: 20,
      totalCorrect: 15,
      streak: 3,
      mastery: { motion_measurement: { score: 80, answered: 5, correct: 4, lastReview: null, streak: 2 } },
    };

    await page.route('**/*', (route) => {
      const url = route.request().url();
      if (url.includes('getState')) {
        route.fulfill({ status: 200, body: JSON.stringify({ data: remoteData }) });
      } else {
        route.continue();
      }
    });

    await page.goto('/index.html?uid=remote123');
    await page.waitForTimeout(500);

    await expect.poll(async () => {
      const state = await getStorage(page);
      return state && state.totalAnswered === 20;
    }).toBe(true);

    const state = await getStorage(page);
    expect(state.totalCorrect).toBe(15);
    expect(state.streak).toBe(3);
    expect(state.mastery.motion_measurement.score).toBe(80);

    await page.reload();
    await page.waitForTimeout(300);

    const statValues = await page.locator('.stat-value').allTextContents();
    expect(statValues[0]).toBe('80%');
  });

  test('saveState 触发云端同步', async ({ page }) => {
    let saveStateCalled = false;
    let savedPayload = null;

    await page.route('**/*', async (route) => {
      const url = route.request().url();
      if (url.includes('saveState') && route.request().method() === 'POST') {
        saveStateCalled = true;
        savedPayload = await route.request().postData();
        route.fulfill({ status: 200, body: JSON.stringify({ success: true }) });
      } else if (url.includes('getState')) {
        route.fulfill({ status: 200, body: JSON.stringify({ data: getDefaultState() }) });
      } else {
        route.continue();
      }
    });

    await page.goto('/index.html?uid=syncuser');
    await clearStorage(page);
    await page.goto('/index.html?uid=syncuser');
    await page.waitForTimeout(500);

    await page.locator('.btn-large').click();
    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex((o) => o === q.answer);
    });
    await page.locator('.option-btn').nth(correctIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('#next-btn').click();

    await expect.poll(() => saveStateCalled, { timeout: 10000 }).toBe(true);
    expect(savedPayload).toContain('syncuser');
  });

  test('网络失败降级', async ({ page }) => {
    await page.route('**/*', (route) => {
      const url = route.request().url();
      if (url.includes('generateUid') || url.includes('getState') || url.includes('saveState')) {
        route.fulfill({ status: 500, body: JSON.stringify({ error: 'server error' }) });
      } else {
        route.continue();
      }
    });

    await page.goto('/index.html?uid=failuser');
    await clearStorage(page);
    await page.reload();

    await expect(page.locator('.welcome-text')).toContainText('欢迎回来');

    await page.locator('.btn-large').click();
    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex((o) => o === q.answer);
    });
    await page.locator('.option-btn').nth(correctIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('#next-btn').click();

    const state = await getStorage(page);
    expect(state.totalAnswered).toBeGreaterThanOrEqual(1);
  });

  test('parent.html 通过 uid 加载', async ({ page }) => {
    const today = new Date().toISOString().split('T')[0];
    const remoteData = {
      ...getDefaultState(),
      totalAnswered: 42,
      totalCorrect: 35,
      streak: 5,
      dailyStats: { [today]: { questions: 10, correct: 8, time: 300 } },
      mastery: {
        motion_measurement: { score: 85, answered: 10, correct: 9, lastReview: null, streak: 3 },
        motion_reference: { score: 30, answered: 5, correct: 1, lastReview: null, streak: 0 },
      },
    };

    await page.route('**/*', (route) => {
      const url = route.request().url();
      if (url.includes('getState')) {
        route.fulfill({ status: 200, body: JSON.stringify({ data: remoteData }) });
      } else {
        route.continue();
      }
    });

    await page.goto('/parent.html?uid=test123');
    await page.waitForTimeout(800);

    // 验证页面正常渲染远程数据
    await expect(page.locator('.page-title')).toContainText('学习报告');
    await expect(page.locator('.today-value').first()).toContainText('10');
  });
});
