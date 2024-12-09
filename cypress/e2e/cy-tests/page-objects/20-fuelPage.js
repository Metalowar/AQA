export class Fuel {
  // Selectors:

  get visitPage() {
    return cy.get('nav[class^="sidebar"]').find('a[href="/panel/expenses"]')
  }

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
    return cy.get('div[class^="modal-footer"]').find('button[class$="btn-primary"]');
  }

  get deleteFuelButton() {
    return cy.get('tbody > tr').focus().find('button[class$="btn-delete"]');
  }

  get confirmDelFuelButton() {
    return cy.get('button[class$="btn-danger"]');
  }

  //Actions:

  clickFuelPage() {
    this.visitPage.click();
  }

  clickAddFuel() {
    this.addFuelButton.click();
  }

  typeNewMilege(newMilege) {
    this.inputFuelMilege.clear().type(newMilege);
    return this;
  }

  typeLiters(liters) {
    this.inputFuelLiters.type(liters);
    return this;
  }

  typePrice(price) {
    this.inputFuelCost.type(price);
    return this;
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

// export default new Fuel();