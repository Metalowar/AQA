import { Garage } from './page-objects/20-garagePage.js';
import { Fuel } from './page-objects/20-fuelPage.js';

describe("Testing with API", () => {
  let carId;
  before("Auth on site",() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
  });

  beforeEach("Sign in",() => {
    cy.request({
      method: 'POST',
      url: 'https://qauto.forstudy.space/api/auth/signin',
      body: {
        "email": "validtest@mail.com",
        "password": "333qweRty333zzz",
        "remember": true
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
    // cy.visit('https://qauto.forstudy.space/panel/garage');
    cy.reload();
  });

  it("Create car", () => {

    cy.intercept('POST','https://qauto.forstudy.space/api/cars').as('createCar')

    const garage = new Garage();

    garage.clickAddCar();
    garage.selectBrand('BMW');
    garage.selectModel('X5');
    garage.typeMilege(200);
    garage.clickConfirmCreate();

    cy.wait('@createCar').then((interception) => {
      expect(interception.response.statusCode).to.equal(201);
      expect(interception.response.body.data).to.have.property('id');
      carId = interception.response.body.data.id;
    })
  });
});