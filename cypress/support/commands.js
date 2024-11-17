
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', () => {
  cy.get('div[class^="header_right"]')
    .find('button[class$="header_signin"]')
    .click();

  cy.get('div[class="modal-content"]').should('be.visible');

  cy.get('input[id="signinEmail"]').type(payload.email, { sensitive: true });
  cy.get('input[id="signinPassword"]').type(payload.password, { sensitive: true });

  cy.get('div[class^="modal-footer"]')
    .find('button[class$="btn-primary"]')
    .click();
});

Cypress.Commands.add('checkIsInvalid', (idValue, typeValue, errorValue) => {
  cy.get(`input[id="${idValue}"]`).clear().type(typeValue);
  cy.get(`input[id="${idValue}"]`).should('have.class', 'is-invalid');
  cy.get('div[class="invalid-feedback"]')
    .should('be.visible')
    .and('have.text', `${errorValue}`)
  cy.get(`input[id="${idValue}"]`).should('have.css', 'border-color', 'rgb(220, 53, 69)')
});

Cypress.Commands.add('checkIsEmpty', (idValue, errorValue) => {
  cy.get(`input[id="${idValue}"]`).focus().blur();
  cy.get('div[class="invalid-feedback"]')
    .should('be.visible')
    .and('have.text', `${errorValue}`);
});

Cypress.Commands.add('invalidSubmit', () => {
  cy.get('div[class="modal-footer"]')
    .find('button[class*="btn-primary"]')
    .should('have.attr', 'disabled')
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    })
  }

  return originalFn(element, text, options)
})