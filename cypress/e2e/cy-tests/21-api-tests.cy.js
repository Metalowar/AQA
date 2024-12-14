import { Garage } from './page-objects/20-garagePage.js';

describe("Testing with API", () => {

  let carId; // Створюю змінну, яку отримаю після створення машини

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

    cy.reload();
  });

  after('Delete testing car', () => {
    cy.request({
      method: 'DELETE',
      url: `https://qauto.forstudy.space/api/cars/${carId}`,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  })

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
      carId = interception.response.body.data.id; // Отримую значення carId, з яким потім працюватиму
    })

    cy.request({
      method: 'GET',
      url: 'https://qauto.forstudy.space/api/cars'
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data[0].id).to.equal(carId)
    });
  });


  it('Create expence', () => {
    const requestBody = {
      carId: carId,
      reportedAt: "2024-12-14T00:00:00.000Z",
      mileage: 201,
      liters: 20,
      totalCost: 50,
    };

    cy.createExpences('https://qauto.forstudy.space/api/expenses', requestBody);
  })
});