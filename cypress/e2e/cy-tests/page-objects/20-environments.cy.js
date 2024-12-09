import { Garage } from './20-garagePage.js';
import { Fuel } from './20-fuelPage.js';

describe("Different env for test", () => {
  beforeEach(() => {
    const mainUrl = Cypress.config('baseUrl');
    const userMail = Cypress.config('userLogin');
    const userPassword = Cypress.config('userPass');

    cy.visit(`${mainUrl}`, {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });

    cy.get('div[class^="header_right"]')
      .find('button[class$="header_signin"]')
      .click();

    cy.get('input[id="signinEmail"]').type(`${userMail}`);
    cy.get('input[id="signinPassword"]').type(`${userPassword}`);

    cy.get('div[class^="modal-footer"]')
      .find('button[class$="btn-primary"]')
      .click();
  });

  it("Add car", () => {
    const garage = new Garage();

    garage.clickAddCar();
    garage.selectBrand('BMW');
    garage.selectModel('X5');
    cy.get('div[class^="modal-footer"]').find('button[class$="btn-primary"]').should('be.disabled');
    garage.typeMilege(200);
    garage.clickConfirmCreate();
  });

  it("Add fuel expenses", () => {
    const fuel = new Fuel();

    fuel.clickFuelPage();
    fuel.clickAddFuel();
    fuel.typeNewMilege(200); // invalid value
    fuel.typeLiters(20);
    fuel.typePrice(35);
    fuel.clickCreate();

    cy.get('p[class$="alert-danger"]').should('be.visible');
    fuel.typeNewMilege(205);
    fuel.clickCreate();
  });

  it("Clean up Fuel and Car", () => {
    const garage = new Garage();

    garage.clickEditCar();
    garage.clickDeleteCar();
    garage.clickConfirmDeleteCar();

    cy.get('div[class^="panel-page_empty"]').should('be.visible');
  });
});