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

  it('Field "Name" ', () => {

    // Перевіка на те, що поле обов'язкове, без введення тексту
    cy.get(`input[id="signupName"]`).focus().blur();
    cy.get('div[class="invalid-feedback"]')
      .should('be.visible')
      .and('have.text', 'Name required');


    // Перевірка на некоректність введення (кирилиця, числа, знаки, пробіли)
    cy.checkIsInvalid("signupName", "aaa+bbb", "Name is invalid");
    cy.checkIsInvalid("signupName", "aaa bbb", "Name is invalid");
    cy.checkIsInvalid("signupName", "!!!!!", "Name is invalid")
    cy.checkIsInvalid("signupName", "ббббб", "Name is invalid")
    cy.checkIsInvalid("signupName", "12345", "Name is invalid")
    cy.checkIsInvalid("signupName", "Test1", "Name is invalid")
    cy.checkIsInvalid("signupName", " Test", "Name is invalid") // Помилка в коді - не мало б проходити валідацію
    cy.checkIsInvalid("signupName", "Test ", "Name is invalid") // Помилка в коді - не мало б проходити валідацію


    // Перевірка на довжину поля
    cy.checkIsInvalid("signupName", "qqqqqwwweeerrrtttyyyy", "Name has to be from 2 to 20 characters long"); // 21
    cy.checkIsInvalid("signupName", "q", "Name has to be from 2 to 20 characters long") // 1

    cy.get('input[id="signupName"]').clear().type('qw') // 2
    cy.get('div[class="invalid-feedback"]').should('not.exist');

    cy.get('input[id="signupName"]').clear().type('qqqqqwwweeerrrtttyyy') // 20
    cy.get('div[class="invalid-feedback"]').should('not.exist');
  });

  it('Field "Last Name" ', () => {

    // Перевіка на те, що поле обов'язкове, без введення тексту
    cy.get(`input[id="signupLastName"]`).focus().blur();
    cy.get('div[class="invalid-feedback"]')
      .should('be.visible')
      .and('have.text', 'Last name required');


    // Перевірка на некоректність введення (кирилиця, числа, знаки, пробіли)
    cy.checkIsInvalid("signupLastName", "aaa+bbb", "Last name is invalid");
    cy.checkIsInvalid("signupLastName", "aaa bbb", "Last name is invalid");
    cy.checkIsInvalid("signupLastName", "!!!!!", "Last name is invalid")
    cy.checkIsInvalid("signupLastName", "ббббб", "Last name is invalid")
    cy.checkIsInvalid("signupLastName", "12345", "Last name is invalid")
    cy.checkIsInvalid("signupLastName", "Test1", "Last name is invalid")
    cy.checkIsInvalid("signupLastName", " Test", "Last name is invalid") // Помилка в коді - не мало б проходити валідацію
    cy.checkIsInvalid("signupLastName", "Test ", "Last name is invalid") // Помилка в коді - не мало б проходити валідацію


    // Перевірка на довжину поля
    cy.checkIsInvalid("signupLastName", "qqqqqwwweeerrrtttyyyy", "Last name has to be from 2 to 20 characters long"); // 21
    cy.checkIsInvalid("signupLastName", "q", "Last name has to be from 2 to 20 characters long") // 1

    cy.get('input[id="signupLastName"]').clear().type('qw') // 2
    cy.get('div[class="invalid-feedback"]').should('not.exist');

    cy.get('input[id="signupLastName"]').clear().type('qqqqqwwweeerrrtttyyy') // 20
    cy.get('div[class="invalid-feedback"]').should('not.exist');
  });

  it('Field "Email"', () => {

    //cy.get('input[id="signupEmail"]').type(randomEmail({ domain: 'markin.com' }))
    // Перевіка на те, що поле обов'язкове, без введення тексту
    cy.get(`input[id="signupEmail"]`).focus().blur();
    cy.get('div[class="invalid-feedback"]')
      .should('be.visible')
      .and('have.text', 'Email required');

    // Перевірка на некоректність введення (паттерн, знаки, пробіли)
    cy.checkIsInvalid("signupEmail", "aaa", "Email is incorrect");
    cy.checkIsInvalid("signupEmail", "aaa@com", "Email is incorrect");
    cy.checkIsInvalid("signupEmail", "aaa.com", "Email is incorrect");
    cy.checkIsInvalid("signupEmail", "aaa@ґґґ.com", "Email is incorrect");
    cy.checkIsInvalid("signupEmail", "test@test.123", "Email is incorrect");
    cy.checkIsInvalid("signupEmail", "test@test.g", "Email is incorrect");
    cy.checkIsInvalid("signupEmail", "te st@mail.com", "Email is incorrect");
    cy.checkIsInvalid("signupEmail", "t()st@mail.com", "Email is incorrect");
    cy.checkIsInvalid("signupEmail", "test@ma il.com", "Email is incorrect");
    cy.checkIsInvalid("signupEmail", "@mail.com", "Email is incorrect");
    // Список можна продовжувати ще на дуууже багато кейсів...

    cy.get('input[id="signupEmail"]').clear().type("~!`#$%^&*-=+?|'₴@1234.co") //valid
    cy.get('div[class="invalid-feedback"]').should('not.exist');
  });

  it('Password" ', () => {

    const invalidPassword = "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter";

    // Перевіка на те, що поле обов'язкове, без введення тексту
    cy.get(`input[id="signupPassword"]`).focus().blur();
    cy.get('div[class="invalid-feedback"]')
      .should('be.visible')
      .and('have.text', 'Password required');


    // Перевірка на довжину поля і паттерн (вел/мал буква, число)
    cy.checkIsInvalid("signupPassword", "qwertyu", `${invalidPassword}`); // 7
    cy.checkIsInvalid("signupPassword", "qqqwwweeerrrttty", `${invalidPassword}`); // 16
    cy.checkIsInvalid("signupPassword", "qqqwwweeer", `${invalidPassword}`); // 10
    cy.checkIsInvalid("signupPassword", "qqQwwweeer", `${invalidPassword}`); // 10
    cy.checkIsInvalid("signupPassword", "1234567890", `${invalidPassword}`); // 10
    cy.checkIsInvalid("signupPassword", "QQQWWWEEE3", `${invalidPassword}`); // 10
    cy.checkIsInvalid("signupPassword", "QQQWWWEEER", `${invalidPassword}`) // 10
    cy.checkIsInvalid("signupPassword", "qqqwwweee3", `${invalidPassword}`) // 10
    cy.checkIsInvalid("signupPassword", "Йцуке22222", `${invalidPassword}`) // 10

    cy.get('input[id="signupPassword"]').clear().type('qweRty33') // 8
    cy.get('div[class="invalid-feedback"]').should('not.exist');

    cy.get('input[id="signupPassword"]').clear().type('333qweRty333zzz') // 15
    cy.get('div[class="invalid-feedback"]').should('not.exist');
  });

  it.only('Re-enter password" ', () => {

    const invalidPassword = "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter";

    // Перевіка на те, що поле обов'язкове, без введення тексту
    cy.get(`input[id="signupRepeatPassword"]`).focus().blur();
    cy.get('div[class="invalid-feedback"]')
      .should('be.visible')
      .and('have.text', 'Re-enter password required');


    // Перевірка на відповідність
    cy.checkIsInvalid("signupRepeatPassword", "qwertyu", `${invalidPassword}`); // 7
    cy.checkIsInvalid("signupRepeatPassword", "qqqwwweeerrrttty", `${invalidPassword}`); // 16
    cy.checkIsInvalid("signupRepeatPassword", "qqqwwweeer", `${invalidPassword}`); // 10
    cy.checkIsInvalid("signupRepeatPassword", "qweRty33", 'Passwords do not match'); // 8
    cy.checkIsInvalid("signupRepeatPassword", "333qweRty333zzs", 'Passwords do not match'); // 15

    cy.get('input[id="signupPassword"]').clear().type('333qweRty333zzz') // 15
    cy.get('div[class="invalid-feedback"]').should('not.exist');
  });
});