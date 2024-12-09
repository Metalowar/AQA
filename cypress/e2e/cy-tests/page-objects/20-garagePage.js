export class Garage {
  // Selectors:

  get addCarButton() {
    return cy.get('div[class^="panel-page_heading"]').find('button[class$="btn-primary"]');
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
    return cy.get('div[class^="modal-footer"]').find('button[class$="btn-primary"]');
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

  selectBrand(carBrand) {
    this.brandSelect.select(carBrand);
  }

  selectModel(carModel) {
    this.modelSelect.select(carModel);
    return this;
  }

  typeMilege(milege) {
    this.inputMileage.type(milege)
    return this;
  }

  clickConfirmCreate() {
    this.createCarButton.click();
  }

  clickEditCar() {
    this.editCarButton.click();
  }

  clickDeleteCar() {
    this.deleteCarButton.click();
  }

  clickConfirmDeleteCar() {
    this.confirmDelCarButton.click();
  }
}

// export default new Garage();