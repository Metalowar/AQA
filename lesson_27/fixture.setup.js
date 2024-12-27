import { test as auth } from '@playwright/test';
import { RegistrationForm } from '../pw-tests/page-object/registrationForm.js'

const userLogin = process.env.SIGN_IN_LOGIN;
const userPassword = process.env.SIGN_IN_PASSWORD;
const authFile = 'lesson_27/auth.json';

export const loginUser = auth.extend({
  Autorization: async ({ page, context }, use) => {
    const registrationForm = new RegistrationForm(page, context);
    await use(await registrationForm.userAuth(userLogin, userPassword));
    //await browserContext.cookies().storageState({ path: authFile });
  },
})