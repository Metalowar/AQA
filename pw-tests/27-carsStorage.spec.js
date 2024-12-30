import { test } from '../lesson_27/fixture.js';
import { expect } from '@playwright/test';

test.describe("Garage Page", async () => {
  test("Add car", async ({userGaragePage}) => {
    await expect(userGaragePage.page).toHaveURL('/panel/garage');

    await userGaragePage.clickAddCar();
    await userGaragePage.selectBrand('BMW');
    await userGaragePage.selectModel('X5');
    await userGaragePage.typeMilege('200');
    await userGaragePage.clickConfirmCreate();
  })

  test("Delete car", async ({userGaragePage}) => {

    await userGaragePage.clickEditCar();
    await userGaragePage.clickDeleteCar();
    await userGaragePage.clickConfirmDeleteCar();
  })
});