export class Garage {
  // Selectors:

  get addCarButton() {
    return cy.get('div[class^="panel-page_heading"]').find('div[class$="btn-primary"]');
  }

  get editCarButton() {
    return cy.get('button[class^="car_edit"]');
  }

  get brandSelect() {
    return cy.get('select[id="addCarBrand"]');
  }

  get modelSelect() {
    return cy.get('select[id="addCarModel"]');
  }

  get inputMileage() {
    return cy.get('input[id="addCarMileage"]');
  }

  get createCarButton() {
    return cy.get('button[class$="btn-primary"]');
  }

  get deleteCarButton() {
    return cy.get('button[class$="btn-outline-danger"]');
  }

  get confirmDelCarButton() {
    return cy.get('button[class$="btn-danger"]');
  }

  //Actions:
  clickAddCar() {
    this.addCarButton.click();
  }

  brandSelect(carBrand) {
    this.brandSelect.select(carBrand);
  }

  modelSelect(carModel) {
    this.modelSelect.select(carModel);
  }

  enterMilage(milege) {
    this.inputMileage.type(milege);
  }

  confirmCreate() {
    this.createCarButton.click();
  }

  editCarClick() {
    this.editCarButton.click();
  }

  deleteCarClick() {
    this.deleteCarButton.click();
  }

  confirmDeleteCarClick() {
    this.confirmDelCarButton.click();
  }
}