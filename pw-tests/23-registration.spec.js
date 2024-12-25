import { test, expect } from "@playwright/test";
import { RegistrationForm} from "./page-object/registrationForm.js"

test.describe("Registration form", async () => {
  // test.use({
  //   contextOptions: {
  //     baseURL: process.env.BASE_URL,
  //     httpCredentials: {
  //       username: process.env.HTTP_CREDENTIALS_USERNAME,
  //       password: process.env.HTTP_CREDENTIALS_PASSWORD,
  //       send: 'always',
  //     },
  //   },
  // });


  test("Invalid filling all form", async ({ page }) =>{

    await page.goto('/')
    const registrForm = new RegistrationForm(page);
    await registrForm.openForm();

    // Перевірка пустої форми
    await registrForm.fillAllForm();
    await registrForm.isButtonDisabled();
    //await page.pause();

    // Перевірка чи кожне поле впливає на відправку форми
    // Заповнюю кожне поле валідними даними і по одному роблю їх некоретними
    // Кнопка не має бути активною, якщо всі поля правильні, але є одне некоректне

    // Name
    await registrForm.fillAllForm(
      'aaa bbb',
      'qqqqqwwweeerrrtttyyy',
      'aqa@markin.com',
      '333qweRty333zzz',
      '333qweRty333zzz')
    await registrForm.checkIsInvalid('nameInput');
    await registrForm.isButtonDisabled();

    // Last Name
    await registrForm.fillName('qw')
    await registrForm.fillLastName('aaa+bbb')
    await registrForm.checkIsInvalid('lastNameInput');
    await registrForm.isButtonDisabled();

    // Email
    await registrForm.fillLastName('qqqqqwwweeerrrtttyyy')
    await registrForm.fillEmail('aaa')
    await registrForm.checkIsInvalid('emailInput');
    await registrForm.isButtonDisabled();

    // Password
    await registrForm.fillEmail('aqa@markin.com')
    await registrForm.fillPassword('qwertyu')
    await registrForm.isButtonDisabled();

    // Re-Password
    await registrForm.fillPassword('333qweRty333zzz')
    await registrForm.fillRePassword('qwertyu')
    await registrForm.checkIsInvalid('rePasswordInput');
    await registrForm.isButtonDisabled();

    // Перевірка чи форма валідна при всіх правильних даних (без відправки на реєстрацію)
    await registrForm.fillAllForm(
      'qw',
      'qqqqqwwweeerrrtttyyy',
      'aqa@markin.com',
      '333qweRty333zzz',
      '333qweRty333zzz');
    await expect(registrForm.isButtonDisabled()).resolves.toBe(false);
  });

  test("Testing Name field", async ({ page }) =>{
    await page.goto('/')
    const registrForm = new RegistrationForm(page);
    await registrForm.openForm();

    // Перевірка пустої поля
    await registrForm.fillName();
    await registrForm.bluring('nameInput');
    await registrForm.checkIsInvalid('nameInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Name required');

    // Перевірка різних кейсів
    await registrForm.fillName('aaa+bbb');
    await registrForm.bluring('nameInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Name is invalid');

    await registrForm.fillName('aaa bbb');
    await registrForm.bluring('nameInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Name is invalid');

    await registrForm.fillName('!!!!!');
    await registrForm.bluring('nameInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Name is invalid');

    await registrForm.fillName('ббббб');
    await registrForm.bluring('nameInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Name is invalid');

    await registrForm.fillName('12345');
    await registrForm.bluring('nameInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Name is invalid');

    // Перевірка довжини
    await registrForm.fillName('qqqqqwwweeerrrtttyyyy');
    await registrForm.bluring('nameInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Name has to be from 2 to 20 characters long');

    await registrForm.fillName('q');
    await registrForm.bluring('nameInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Name has to be from 2 to 20 characters long');
  });

  test("Testing Last Name field", async ({ page }) =>{
    await page.goto('/')
    const registrForm = new RegistrationForm(page);
    await registrForm.openForm();

    // Перевірка пустої поля
    await registrForm.fillLastName();
    await registrForm.bluring('lastNameInput');
    await registrForm.checkIsInvalid('lastNameInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Last name required');

    // Перевірка різних кейсів
    await registrForm.fillLastName('aaa+bbb');
    await registrForm.bluring('lastNameInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Last name is invalid');

    await registrForm.fillLastName('aaa bbb');
    await registrForm.bluring('lastNameInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Last name is invalid');

    await registrForm.fillLastName('!!!!!');
    await registrForm.bluring('lastNameInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Last name is invalid');

    await registrForm.fillLastName('ббббб');
    await registrForm.bluring('lastNameInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Last name is invalid');

    await registrForm.fillLastName('12345');
    await registrForm.bluring('lastNameInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Last name is invalid');

    // Перевірка довжини
    await registrForm.fillLastName('qqqqqwwweeerrrtttyyyy');
    await registrForm.bluring('lastNameInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Last name has to be from 2 to 20 characters long');

    await registrForm.fillLastName('q');
    await registrForm.bluring('lastNameInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Last name has to be from 2 to 20 characters long');
  });

  test("Testing Email field", async ({ page }) =>{
    await page.goto('/')
    const registrForm = new RegistrationForm(page);
    await registrForm.openForm();

    // Перевірка пустого поля
    await registrForm.fillEmail();
    await registrForm.bluring('emailInput');
    await registrForm.checkIsInvalid('emailInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Email required');

    // Перевірка різних кейсів
    await registrForm.fillEmail('aaa');
    await registrForm.bluring('emailInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Email is incorrect');

    await registrForm.fillEmail('aaa@com');
    await registrForm.bluring('emailInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Email is incorrect');

    await registrForm.fillEmail('aaa.com');
    await registrForm.bluring('emailInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Email is incorrect');

    await registrForm.fillEmail('aaa@ґґґ.com');
    await registrForm.bluring('emailInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Email is incorrect');

    await registrForm.fillEmail('test@test.123');
    await registrForm.bluring('emailInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Email is incorrect');

    await registrForm.fillEmail('@mail.com');
    await registrForm.bluring('emailInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Email is incorrect');

    await registrForm.fillEmail('test@ma il.com');
    await registrForm.bluring('emailInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Email is incorrect');
  });

  test("Testing Password field", async ({ page }) =>{
    await page.goto('/')
    const registrForm = new RegistrationForm(page);
    await registrForm.openForm();

    const invalidPassword = "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter";

    // Перевірка пустого поля
    await registrForm.fillPassword();
    await registrForm.bluring('passwordInput');
    await registrForm.checkIsInvalid('passwordInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Password required');

    // Перевірка різних кейсів
    await registrForm.fillPassword('qwertyu');
    await registrForm.bluring('passwordInput');
    await expect(registrForm.locators.invalidInput).toHaveText(`${invalidPassword}`);

    await registrForm.fillPassword('qqqwwweeerrrttty');
    await registrForm.bluring('passwordInput');
    await expect(registrForm.locators.invalidInput).toHaveText(`${invalidPassword}`);

    await registrForm.fillPassword('qqqwwweeer');
    await registrForm.bluring('passwordInput');
    await expect(registrForm.locators.invalidInput).toHaveText(`${invalidPassword}`);

    await registrForm.fillPassword('qqQwwweeer');
    await registrForm.bluring('passwordInput');
    await expect(registrForm.locators.invalidInput).toHaveText(`${invalidPassword}`);

    await registrForm.fillPassword('1234567890');
    await registrForm.bluring('passwordInput');
    await expect(registrForm.locators.invalidInput).toHaveText(`${invalidPassword}`);

    await registrForm.fillPassword('QQQWWWEEE3');
    await registrForm.bluring('passwordInput');
    await expect(registrForm.locators.invalidInput).toHaveText(`${invalidPassword}`);

    await registrForm.fillPassword('QQQWWWEEER');
    await registrForm.bluring('passwordInput');
    await expect(registrForm.locators.invalidInput).toHaveText(`${invalidPassword}`);
  });

  test("Testing Repeat Password field", async ({ page }) =>{
    await page.goto('/')
    const registrForm = new RegistrationForm(page);
    await registrForm.openForm();

    const invalidPassword = "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter";

    // Перевірка пустого поля
    await registrForm.fillRePassword();
    await registrForm.bluring('rePasswordInput');
    await registrForm.checkIsInvalid('rePasswordInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Re-enter password required');

    // Перевірка різних кейсів
    await registrForm.fillRePassword('qwertyu');
    await registrForm.bluring('rePasswordInput');
    await expect(registrForm.locators.invalidInput).toHaveText(`${invalidPassword}`);

    await registrForm.fillRePassword('qqqwwweeerrrttty');
    await registrForm.bluring('rePasswordInput');
    await expect(registrForm.locators.invalidInput).toHaveText(`${invalidPassword}`);

    await registrForm.fillRePassword('qqqwwweeer');
    await registrForm.bluring('rePasswordInput');
    await expect(registrForm.locators.invalidInput).toHaveText(`${invalidPassword}`);

    await registrForm.fillPassword('333qweRty333zzz');
    await registrForm.fillRePassword('333qweRty333zzZ');
    await registrForm.bluring('rePasswordInput');
    await expect(registrForm.locators.invalidInput).toHaveText('Passwords do not match');
  });

  test("Valid Registration", async ({ page }) =>{

    await page.goto('/')
    const registrForm = new RegistrationForm(page);
    await registrForm.openForm();

    await registrForm.fillAllForm(
      'aaabbb',
      'qqqqqwwweeerrrtttyyy',
      `aqa${Date.now()}@markin.com`,
      '333qweRty333zzz',
      '333qweRty333zzz');

    await expect(registrForm.isButtonDisabled()).resolves.toBe(false);

    await registrForm.submitForm();
  });

});