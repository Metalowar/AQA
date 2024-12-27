import { BasePage } from "./basePage.js";

export class GaragePage extends BasePage {
  constructor(page, context) {
    super(page, context)
    this.url = 'panel/garage'
  }

  locators = {
    addCarButton: this.page.locator('div[class^="panel-page_heading"]', {has: this.page.locator('button[class$="btn-primary"]')}),
    editCarButton: this.page.locator('button[class^="car_edit"]'),
    brandSelect: this.page.locator('select[id="addCarBrand"]'),
    modelSelect: this.page.locator('select[id="addCarModel"]'),
    inputMileage: this.page.locator('input[id="addCarMileage"]'),
    createCarButton: this.page.locator('div[class^="modal-footer"]', {has: this.page.locator('button[class$="btn-primary"]')}),
    deleteCarButton: this.page.locator('button[class$="btn-outline-danger"]'),
    confirmDelCarButton: this.page.locator('button[class$="btn-danger"]')
  }

  async clickAddCar() {
    await this.locators.addCarButton.click();
  }

  async selectBrand(carBrand='') {
    await this.locators.brandSelect.selectOption(carBrand);
  }

  async selectModel(carModel='') {
    await this.locators.brandSelect.selectOption(carModel);
  }

  async typeMilege(milege='') {
    await this.locators.inputMileage.fill(milege);
  }

  async clickConfirmCreate() {
    await this.locators.createCarButton.click();
  }

  async clickEditCar() {
    await this.locators.editCarButton.click();
  }

  async clickDeleteCar() {
    await this.locators.deleteCarButton.click();
  }

  async clickConfirmDeleteCar() {
    await this.locators.confirmDelCarButton.click();
  }
}