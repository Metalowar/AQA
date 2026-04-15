import { test } from '../lesson_27/fixture.js';
import { expect } from '@playwright/test';

test.describe("Garage Page with API", async () => {
  test("Replace body", async ({userGaragePage}) => {
    // Підставлю тут свої значення
    await page.route('https://dog.ceo/api/breeds/list/all', async route => {
      const response = await route.fetch();
      const json = {
        user: "John Doe",
        age: 27
      }
      await route.fulfill({ response, json });
    });

  });
});