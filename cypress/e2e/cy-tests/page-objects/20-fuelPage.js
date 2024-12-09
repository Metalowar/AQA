class Fuel {
  // Selectors:

  get addFuelButton() {
    return cy.get('div[class^="panel-page_heading"]').find('button[class$="btn-primary"]');
  }

  get inputFuelMilege() {
    return cy.get('input[id="addExpenseMileage"]');
  }

  get inputFuelLiters() {
    return cy.get('input[id="addExpenseLiters"]');
  }

  get inputFuelCost() {
    return cy.get('input[id="addExpenseTotalCost"]');
  }

  get createFuelButton() {
    return cy.get('button[class$="btn-primary"]');
  }

  get deleteFuelButton() {
    return cy.get('tbody > tr').focus().find('button[class$="btn-delete"]');
  }

  get confirmDelFuelButton() {
    return cy.get('button[class$="btn-danger"]');
  }

  //Actions:
  clickAddCar() {
    this.addFuelButton.click();
  }

  typeNewMilege(newMilege) {
    this.inputFuelMilege.type(newMilege);
  }

  typeLiters(liters) {
    this.inputFuelLiters.type(liters);
  }

  typeMilege(price) {
    this.inputFuelCost.type(price);
  }

  clickCreate() {
    this.createFuelButton.click();
  }

  clickDeleteFuel() {
    this.deleteFuelButton.click();
  }

  clickConfirmDeleteFuel() {
    this.confirmDelFuelButton.click();
  }
}

export default new Fuel();