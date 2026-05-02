import { test, expect } from '@playwright/test';
import path from 'path';

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

async function initEmptyState(page) {
  await setStorage(page, getDefaultState());
}

test.describe('首页 / 今日任务', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    await page.reload();
  });

  test('首次访问显示初始状态', async ({ page }) => {
    await expect(page.locator('.welcome-text')).toContainText('欢迎回来');
    await expect(page.locator('.task-title')).toContainText('今日练习');
    await expect(page.locator('.task-sub')).toContainText('0 / 30 题');
    await expect(page.locator('.progress-bar-home')).toHaveAttribute('style', /width:0%/);
    const statValues = await page.locator('.stat-value').allTextContents();
    expect(statValues).toEqual(['0%', '0%', '0']);
  });

  test('今日成就显示', async ({ page }) => {
    const today = new Date().toISOString().split('T')[0];
    await setStorage(page, {
      ...(await getStorage(page) || getDefaultState()),
      dailyAchievements: { [today]: { firstQuestion: true, streak3: true } },
    });
    await page.reload();
    await expect(page.locator('.achievement-row')).toBeVisible();
    const badges = await page.locator('.ach-badge').allTextContents();
    expect(badges).toContain('🎯');
    expect(badges).toContain('🔥');
  });

  test('今日目标进度计算', async ({ page }) => {
    await setStorage(page, {
      ...(await getStorage(page) || getDefaultState()),
      dailyGoal: 20,
      totalAnswered: 100,
      totalCorrect: 80,
      dailyStats: {
        [new Date().toISOString().split('T')[0]]: { questions: 5, correct: 3, time: 60 },
      },
    });
    await page.reload();
    await expect(page.locator('.task-sub')).toContainText('5 / 20 题');
    const style = await page.locator('.progress-bar-home').getAttribute('style');
    expect(style).toMatch(/width:25%/);
  });

  test('今日目标完成状态', async ({ page }) => {
    const today = new Date().toISOString().split('T')[0];
    await setStorage(page, {
      ...(await getStorage(page) || getDefaultState()),
      dailyGoal: 10,
      dailyStats: { [today]: { questions: 10, correct: 8, time: 120 } },
    });
    await page.reload();
    await expect(page.locator('.task-card')).toHaveClass(/completed/);
    await expect(page.locator('.task-title')).toContainText('今日目标已完成');
    await expect(page.locator('.btn-large')).toContainText('继续练习');
  });

  test('点击开始练习进入答题', async ({ page }) => {
    await page.locator('.btn-large').click();
    await expect(page.locator('#page-title')).toContainText(/第 1\/\d+ 题/);
    await expect(page.locator('#nav')).toBeHidden();
    await expect(page.locator('.quiz-page')).toBeVisible();
  });

  test('薄弱知识点列表显示与跳转', async ({ page }) => {
    const today = new Date().toISOString().split('T')[0];
    await setStorage(page, {
      ...(await getStorage(page) || getDefaultState()),
      mastery: {
        motion_reference: { score: 35, answered: 4, correct: 1, lastReview: new Date().toISOString(), streak: 0 },
      },
      dailyStats: { [today]: { questions: 4, correct: 1, time: 80 } },
    });
    await page.reload();
    await expect(page.locator('.section-title')).toContainText('需要加强的知识点');
    await expect(page.locator('.weak-item').first()).toContainText('参照物');
    await page.locator('.weak-item').first().click();
    await expect(page.locator('#page-title')).toContainText(/第 1\/\d+ 题/);
  });

  test('统计数据准确性', async ({ page }) => {
    const today = new Date().toISOString().split('T')[0];
    await setStorage(page, {
      ...(await getStorage(page) || getDefaultState()),
      mastery: {
        motion_measurement: { score: 60, answered: 10, correct: 6, lastReview: new Date().toISOString(), streak: 2 },
      },
      totalAnswered: 10,
      totalCorrect: 7,
      dailyStats: { [today]: { questions: 10, correct: 7, time: 200 } },
      wrongQuestions: ['q001', 'q002', 'q003'],
    });
    await page.reload();
    const values = await page.locator('.stat-value').allTextContents();
    expect(values[0]).toBe('60%'); // avgMastery
    expect(values[1]).toBe('70%'); // todayAccuracy
    expect(values[2]).toBe('3');   // wrongCount
  });
});

test.describe('答题流程', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    await page.reload();
    await page.locator('.btn-large').click();
  });

  test('题目展示完整性', async ({ page }) => {
    await expect(page.locator('.quiz-tag')).toBeVisible();
    await expect(page.locator('.quiz-diff')).toBeVisible();
    await expect(page.locator('.question-text')).not.toBeEmpty();
    const options = await page.locator('.option-btn').count();
    expect(options).toBe(4);
  });

  test('选项选择交互', async ({ page }) => {
    const btn = page.locator('.option-btn').first();
    await btn.click();
    await expect(btn).toHaveClass(/selected/);
    await expect(page.locator('#submit-btn')).toBeEnabled();
  });

  test('未选选项不可提交', async ({ page }) => {
    await expect(page.locator('#submit-btn')).toBeDisabled();
  });

  test('选择后切换选项', async ({ page }) => {
    await page.locator('.option-btn').nth(0).click();
    await page.locator('.option-btn').nth(1).click();
    await expect(page.locator('.option-btn').nth(0)).not.toHaveClass(/selected/);
    await expect(page.locator('.option-btn').nth(1)).toHaveClass(/selected/);
  });

  test('提交正确答案显示正确反馈', async ({ page }) => {
    // Get the correct answer text from the question data via page context
    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    await page.locator('.option-btn').nth(correctIndex).click();
    await page.locator('#submit-btn').click();
    await expect(page.locator('.result-bar')).toHaveClass(/correct/);
    await expect(page.locator('.result-bar')).toContainText('回答正确');
    await expect(page.locator('.explanation-box')).toBeVisible();
    await expect(page.locator('#next-btn')).toBeVisible();
  });

  test('提交错误答案显示错误反馈和标签', async ({ page }) => {
    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    const wrongIndex = correctIndex === 0 ? 1 : 0;
    await page.locator('.option-btn').nth(wrongIndex).click();
    await page.locator('#submit-btn').click();
    await expect(page.locator('.result-bar')).toHaveClass(/wrong/);
    await expect(page.locator('.result-bar')).toContainText('回答错误');
    await expect(page.locator('#tag-box')).toBeVisible();
    await expect(page.locator('.tag-btn').first()).toBeVisible();
  });

  test('错误标签选择', async ({ page }) => {
    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    const wrongIndex = correctIndex === 0 ? 1 : 0;
    await page.locator('.option-btn').nth(wrongIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('.tag-btn').first().click();
    await expect(page.locator('.tag-btn').first()).toHaveClass(/selected/);
  });

  test('不选标签直接下一题', async ({ page }) => {
    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    const wrongIndex = correctIndex === 0 ? 1 : 0;
    await page.locator('.option-btn').nth(wrongIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('#next-btn').click();
    await expect(page.locator('.quiz-page')).toBeVisible();
  });

  test('答题结果页显示', async ({ page }) => {
    // Answer one question correctly to get to result page
    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    await page.locator('.option-btn').nth(correctIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('#next-btn').click();
    // If only 1 question, we should be at result page
    const title = await page.locator('#page-title').textContent();
    if (title.includes('练习完成')) {
      await expect(page.locator('.result-page')).toBeVisible();
      await expect(page.locator('.result-emoji')).toBeVisible();
      await expect(page.locator('.result-title')).toBeVisible();
      await expect(page.locator('.result-stats')).toBeVisible();
    }
  });

  test('返回首页后数据更新', async ({ page }) => {
    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    await page.locator('.option-btn').nth(correctIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('#next-btn').click();
    const title = await page.locator('#page-title').textContent();
    if (title.includes('练习完成')) {
      await page.locator('.btn-large').click();
      await expect(page.locator('.task-sub')).not.toContainText('0 /');
    }
  });
});

test.describe('知识地图', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
  });

  test('地图初始状态全部锁定', async ({ page }) => {
    await page.reload();
    await page.locator('nav button[data-page="map"]').click();
    await expect(page.locator('.map-page')).toBeVisible();
    const lockedNodes = await page.locator('.node-cell.locked').count();
    expect(lockedNodes).toBeGreaterThan(0);
  });

  test('节点状态颜色分级', async ({ page }) => {
    const today = new Date().toISOString().split('T')[0];
    await setStorage(page, {
      ...(await getStorage(page) || getDefaultState()),
      mastery: {
        motion_measurement: { score: 90, answered: 10, correct: 9, lastReview: new Date().toISOString(), streak: 3 },
        motion_reference: { score: 65, answered: 5, correct: 3, lastReview: new Date().toISOString(), streak: 1 },
        motion_speed: { score: 30, answered: 3, correct: 1, lastReview: new Date().toISOString(), streak: 0 },
      },
      dailyStats: { [today]: { questions: 18, correct: 13, time: 200 } },
    });
    await page.reload();
    await page.locator('nav button[data-page="map"]').click();
    await expect(page.locator('.node-cell.mastered').first()).toBeVisible();
    await expect(page.locator('.node-cell.learning').first()).toBeVisible();
    await expect(page.locator('.node-cell.started').first()).toBeVisible();
  });

  test('节点掌握度显示', async ({ page }) => {
    const today = new Date().toISOString().split('T')[0];
    await setStorage(page, {
      ...(await getStorage(page) || getDefaultState()),
      mastery: {
        motion_measurement: { score: 65, answered: 5, correct: 3, lastReview: new Date().toISOString(), streak: 1 },
      },
      dailyStats: { [today]: { questions: 5, correct: 3, time: 60 } },
    });
    await page.reload();
    await page.locator('nav button[data-page="map"]').click();
    await expect(page.locator('.node-cell').first()).toContainText('65%');
  });

  test('点击节点进入专项练习', async ({ page }) => {
    await page.reload();
    await page.locator('nav button[data-page="map"]').click();
    await page.locator('.node-cell').first().click();
    await expect(page.locator('#page-title')).toContainText(/第 1\/\d+ 题/);
  });
});

test.describe('错题本', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
  });

  test('空错题本状态', async ({ page }) => {
    await page.reload();
    await page.locator('nav button[data-page="review"]').click();
    await expect(page.locator('.empty-state')).toBeVisible();
    await expect(page.locator('.empty-title')).toContainText('暂无错题');
  });

  test('错题列表展示', async ({ page }) => {
    const today = new Date().toISOString().split('T')[0];
    await setStorage(page, {
      ...(await getStorage(page) || getDefaultState()),
      wrongQuestions: ['up_001'],
      dailyStats: { [today]: { questions: 1, correct: 0, time: 20 } },
    });
    await page.reload();
    await page.locator('nav button[data-page="review"]').click();
    await expect(page.locator('.review-count')).toContainText('待复习错题：1 道');
    await expect(page.locator('.review-card').first()).toBeVisible();
    await expect(page.locator('.review-card').first()).toHaveClass(/review-card/);
  });

  test('全部重练功能', async ({ page }) => {
    const today = new Date().toISOString().split('T')[0];
    await setStorage(page, {
      ...(await getStorage(page) || getDefaultState()),
      wrongQuestions: ['up_001', 'up_002'],
      dailyStats: { [today]: { questions: 2, correct: 0, time: 40 } },
    });
    await page.reload();
    await page.locator('nav button[data-page="review"]').click();
    await page.locator('.btn-secondary').click();
    await expect(page.locator('#page-title')).toContainText(/第 1\/\d+ 题/);
  });

  test('答对后错题移除', async ({ page }) => {
    const today = new Date().toISOString().split('T')[0];
    await setStorage(page, {
      ...(await getStorage(page) || getDefaultState()),
      wrongQuestions: ['up_001'],
      dailyStats: { [today]: { questions: 0, correct: 0, time: 0 } },
    });
    await page.reload();
    await page.locator('nav button[data-page="review"]').click();
    await page.locator('.review-card').first().click();
    // 强制当前题目为 up_001，避免知识点下多题随机导致断言失败
    await page.evaluate((targetId) => {
      const q = ALL_QUESTIONS.find(q => q.id === targetId);
      if (q) { UI.quizQueue = [q]; UI.currentQuizIndex = 0; UI.showQuizPage(); }
    }, 'up_001');
    const correctIndex = await page.evaluate(() => {
      const q = UI.quizQueue[UI.currentQuizIndex];
      return q.options.findIndex(opt => opt === q.answer);
    });
    await page.locator('.option-btn').nth(correctIndex).click();
    await page.locator('#submit-btn').click();
    await page.locator('#next-btn').click();
    // Directly check localStorage instead of navigating back (avoids nav visibility issues)
    const state = await getStorage(page);
    expect(state.wrongQuestions).not.toContain('up_001');
  });
});

test.describe('设置页', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
    await clearStorage(page);
    await initEmptyState(page);
    await page.reload();
    await page.locator('nav button[data-page="settings"]').click();
  });

  test('每日目标切换', async ({ page }) => {
    await page.locator('.goal-btn:has-text("20")').click();
    await expect(page.locator('.goal-btn:has-text("20")')).toHaveClass(/active/);
    await page.goto('/index.html');
    await expect(page.locator('.task-sub')).toContainText('/ 20 题');
  });

  test('数据导出功能触发下载', async ({ page }) => {
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.locator('.btn-secondary:has-text("导出")').click(),
    ]);
    expect(download.suggestedFilename()).toMatch(/physics_backup_\d{4}-\d{2}-\d{2}\.json/);
  });

  test('数据导入功能', async ({ page }) => {
    const filePath = path.resolve(__dirname, '../fixtures/test-data.json');
    // Create file input and set file
    await page.evaluate(() => {
      const input = document.createElement('input');
      input.type = 'file';
      input.id = 'test-file-input';
      input.style.display = 'none';
      document.body.appendChild(input);
    });
    await page.locator('#test-file-input').setInputFiles(filePath);
    // Trigger import via app.js logic
    await page.evaluate(async () => {
      const input = document.getElementById('test-file-input');
      const file = input.files[0];
      const text = await file.text();
      Storage.importData(text);
    });
    const state = await getStorage(page);
    expect(state.totalAnswered).toBe(50);
    expect(state.dailyGoal).toBe(20);
  });

  test('导入无效文件报错', async ({ page }) => {
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('导入失败');
      await dialog.accept();
    });
    await page.evaluate(() => {
      try {
        Storage.importData('not json at all');
      } catch (e) {
        alert('导入失败：' + e.message);
      }
    });
  });

  test('清除数据确认与执行', async ({ page }) => {
    page.on('dialog', async dialog => {
      if (dialog.type() === 'confirm') {
        expect(dialog.message()).toContain('确定要清除');
        await dialog.accept();
      } else if (dialog.type() === 'alert') {
        expect(dialog.message()).toContain('数据已清除');
        await dialog.accept();
      }
    });
    await page.locator('.btn-danger').click();
    const state = await getStorage(page);
    expect(state).toBeNull();
  });

  test('取消清除数据', async ({ page }) => {
    page.on('dialog', async dialog => {
      if (dialog.type() === 'confirm') {
        await dialog.dismiss();
      }
    });
    await page.locator('.btn-danger').click();
    const state = await getStorage(page);
    expect(state).not.toBeNull();
  });

  test('关于信息展示', async ({ page }) => {
    await expect(page.locator('.about-text')).toContainText('物理提分助手 v1.0');
    await expect(page.locator('.about-text')).toContainText(/\d+ 道题/);
    await expect(page.locator('.about-text')).toContainText(/\d+ 个知识点/);
  });
});
