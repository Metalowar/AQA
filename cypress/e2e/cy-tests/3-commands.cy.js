var randomEmail = require('random-email');

describe('Registration & LogIn', () => {

  before(() => {
    cy.visit('https://qauto.forstudy.space/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });

    cy.get('button[class^="hero-descriptor_btn"]').click();
    cy.get('div[class="modal-content"]').should('be.visible');
  });

  it.only('Field "Name" ', () => {

    function invalidCheck(idName, typeValue = "") {
      cy.get(`input[id="${idName}"]`).clear().type(typeValue);
      cy.get(`input[id="${idName}"]`).should('have.class', 'is-invalid');
      cy.get('div[class="invalid-feedback"]')
      .should('be.visible');
      cy.get(`input[id="${idName}"]`).should('have.css', 'border-color', 'rgb(220, 53, 69)')
    }

    // Перевіка на те, що поле обов'язкове, без введення тексту
    cy.get(`input[id="signupName"]`).focus().blur();
    cy.get('div[class="invalid-feedback"]')
      .should('be.visible')
      .and('have.text', 'Name required');


    // Перевірка на некоректність введення (кирилиця, числа, знаки, пробіли)
    invalidCheck("signupName", "aaa+bbb");
    invalidCheck("signupName", "aaa bbb");
    invalidCheck("signupName", "!!!!!")
    invalidCheck("signupName", "ббббб")
    invalidCheck("signupName", "12345")
    invalidCheck("signupName", "Test1")
    invalidCheck("signupName", " Test") // Помилка в коді - не мало б проходити валідацію
    invalidCheck("signupName", "Test ") // Помилка в коді - не мало б проходити валідацію


    // Перевірка на довжину поля
    invalidCheck("signupName", "qqqqqwwweeerrrtttyyyy"); // 21
    invalidCheck("signupName", "q") // 1

    cy.get('input[id="signupName"]').clear().type('qw') // 2
    cy.get('div[class="invalid-feedback"]').should('not.exist');

    cy.get('input[id="signupName"]').clear().type('qqqqqwwweeerrrtttyyy') // 20
    cy.get('div[class="invalid-feedback"]').should('not.exist');
  });

  it('Select header buttons', () => {

    cy.get('button[class^="hero-descriptor_btn"]').click();
    cy.get('input[id="signupEmail"]').type(randomEmail({ domain: 'markin.com' }))
  });
});