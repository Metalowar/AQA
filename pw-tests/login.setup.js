import { test as setup, expect } from '@playwright/test';
import { RegistrationForm } from './page-object/registrationForm.js'

const userLogin = process.env.SIGN_IN_LOGIN;
const userPassword = process.env.SIGN_IN_PASSWORD;

const authFile = 'lesson_27/auth.json';

setup('authenticate', async ({ page }) => {
  await page.goto('/')
  const registrForm = new RegistrationForm(page);

  await registrForm.locators.loginFormButton.click();
  await registrForm.locators.loginInput.fill(userLogin);
  await registrForm.locators.userPasswordInput.fill(userPassword);
  await registrForm.locators.loginButton.click();

  // Очікуємо, що буде перенаправлення на сторінку гаража
  await page.waitForURL('**/panel/garage', { timeout: 1000 });

  // Зберігаю дані до файлу
  await page.context().storageState({ path: authFile });
});