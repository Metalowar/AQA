import { test as auth } from '@playwright/test';
import { GaragePage } from '../pw-tests/page-object/garagePage.js'

export const test = auth.extend({
  userGaragePage: async ({ browser }, use) => {

    const context = await browser.newContext({ storageState: 'lesson_27/auth.json' });
    const page = await context.newPage();
    await page.goto('/');
    const garagePage = new GaragePage(page, context);
    await use(garagePage);
    await context.close();
  },
})