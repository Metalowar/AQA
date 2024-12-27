import { BasePage } from "./basePage.js";
import { expect } from "@playwright/test";
import { GaragePage } from "./garagePage.js";

export class RegistrationForm extends BasePage {
  constructor(page, context) {
    super(page, context)
    this.url = '/'
  }

  locators = {
    signUpButton: this.page.locator('button[class^="hero-descriptor_btn"]'),
    nameInput: this.page.locator('input[id="signupName"]'),
    lastNameInput: this.page.locator('input[id="signupLastName"]'),
    emailInput: this.page.locator('input[id="signupEmail"]'),
    passwordInput: this.page.locator('input[id="signupPassword"]'),
    rePasswordInput: this.page.locator('input[id="signupRepeatPassword"]'),
    invalidInput: this.page.locator('div[class="invalid-feedback"]'),
    submitFormButton: this.page.locator('div[class="modal-footer"]', {has: this.page.locator('button[class*="btn-primary"]')}),

    //Авторизація
    loginFormButton: this.page.locator('div[class^="header_right"]', {has: this.page.locator('button[class$="header_signin"]')}),
    loginInput: this.page.locator('input[id="signinEmail"]'),
    userPasswordInput: this.page.locator('input[id="signinPassword"]'),
    loginButton: this.page.locator('div[class^="modal-footer"]', {has: this.page.locator('button[class$="btn-primary"]')})
  }

  async openForm() {
    await this.locators.signUpButton.click();
  }

  async fillAllForm(name="", lastName="", email="", password="", rePassword="") {
    await this.locators.nameInput.fill(name);
    await this.locators.lastNameInput.fill(lastName);
    await this.locators.emailInput.fill(email);
    await this.locators.passwordInput.fill(password);
    await this.locators.rePasswordInput.fill(rePassword);
  }

  async fillName(name='') {
    await this.locators.nameInput.fill(name);
  }

  async fillLastName(lastName='') {
    await this.locators.lastNameInput.fill(lastName);
  }

  async fillEmail(email='') {
    await this.locators.emailInput.fill(email);
  }

  async fillPassword(password='') {
    await this.locators.passwordInput.fill(password);
  }

  async fillRePassword(rePassword='') {
    await this.locators.rePasswordInput.fill(rePassword);
  }

  async bluring(blurElement) {
    await this.locators[blurElement].blur();
  }

  async checkIsInvalid(inputId) {
    const inputLocator = this.locators[inputId];
    await expect(this.locators.invalidInput).toBeVisible();
    await expect(inputLocator).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  }

  async isButtonDisabled() {
    const isDisabled = await this.locators.submitFormButton.getAttribute('disabled');
    return isDisabled !== null;
  }

  async submitForm() {
    await this.locators.submitFormButton.click();
  }

  // Авторизація
  async userAuth(email, password){
    await this.locators.loginFormButton.click();
    await this.locators.loginInput.fill(email);
    await this.locators.userPasswordInput.fill(password);
    await this.locators.loginButton.click();
    return new GaragePage(this.page, this.context);
  }
}