import { BasePage } from "./basePage.js";

export class GaragePage extends BasePage {
  constructor(page, context) {
    super(page, context)
  }

  locators = {
    addCarButton: this.page.getByRole('button', { name: 'Add car' }),
    editCarButton: this.page.locator('button[class^="car_edit"]'),
    brandSelect: this.page.locator('select[id="addCarBrand"]'),
    modelSelect: this.page.locator('select[id="addCarModel"]'),
    inputMileage: this.page.locator('input[id="addCarMileage"]'),
    createCarButton: this.page.getByRole('button', { name: 'Add' }),
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
    await this.locators.modelSelect.selectOption(carModel);
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