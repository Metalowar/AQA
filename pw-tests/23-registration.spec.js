import { test } from "@playwright/test";
import { RegistrationForm} from "./page-object/registrationForm.js"

test.describe("Registration form", async () => {
  test.use({
    contextOptions: {
      httpCredentials: {
        username: 'guest',
        password: 'welcome2qauto',
        send: 'always',
      },
    },
  });

  test("Invalid filling form", async ({ page }) =>{

    await page.goto('/')
    const registrForm = new RegistrationForm(page);
    await registrForm.openForm();

    // Перевірка пустої форми
    await registrForm.fillForm();
    await registrForm.isButtonDisabled();
    //await page.pause();

    // Перевірка чи кожне поле впливає на відправку форми
    // Заповнюю кожне поле валідними даними і по одному роблю їх некоретними
    // Кнопка не має бути активною, якщо всі поля правильні, але є одне некоректне

    // Name
    await registrForm.fillForm(
      'aaa bbb',
      'qqqqqwwweeerrrtttyyy',
      'aqa@markin.com',
      '333qweRty333zzz',
      '333qweRty333zzz')
    await registrForm.checkIsInvalid('nameInput');
    await registrForm.isButtonDisabled();

    // Last Name
    await registrForm.fillForm(
      'qw',
      'aaa+bbb',
      'aqa@markin.com',
      '333qweRty333zzz',
      '333qweRty333zzz')
    await registrForm.checkIsInvalid('lastNameInput');
    await registrForm.isButtonDisabled();

    // Email
    await registrForm.fillForm(
      'qw',
      'qqqqqwwweeerrrtttyyy',
      'aaa',
      '333qweRty333zzz',
      '333qweRty333zzz')
    await registrForm.checkIsInvalid('emailInput');
    await registrForm.isButtonDisabled();

    // Password
    await registrForm.fillForm(
      'qw',
      'qqqqqwwweeerrrtttyyy',
      'aqa@markin.com',
      'qwertyu',
      '333qweRty333zzz')
    await registrForm.checkIsInvalid('passwordInput');
    await registrForm.isButtonDisabled();

    // Re-Password
    await registrForm.fillForm(
      'qw',
      'qqqqqwwweeerrrtttyyy',
      'aqa@markin.com',
      '333qweRty333zzz',
      'qwertyu')
    await registrForm.checkIsInvalid('rePasswordInput');
    await registrForm.isButtonDisabled();

    // Перевірка чи форма валідна при всіх правильних даних (без відправки на реєстрацію)
    await registrForm.fillForm(
      'qw',
      'qqqqqwwweeerrrtttyyy',
      'aqa@markin.com',
      '333qweRty333zzz',
      '333qweRty333zzz');
    await registrForm.isButtonDisabled().resolves.toBe(false);
  });

});