import { BasePage } from "./basePage.js";
import { expect } from "@playwright/test";

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
    submitFormButton: this.page.locator('div[class="modal-footer"]', {has: this.page.locator('button[class*="btn-primary"]')})
  }

  async openForm() {
    await this.locators.signUpButton.click();
  }

  async fillForm(name="", lastName="", email="", password="", rePassword="") {
    await this.locators.nameInput.type(name);
    await this.locators.lastNameInput.type(lastName);
    await this.locators.emailInput.type(email);
    await this.locators.passwordInput.type(password);
    await this.locators.rePasswordInput.type(rePassword);
    
  }

  async checkIsInvalid(inputId) {
    const inputLocator = this.locators(`#${inputId}`);
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
}