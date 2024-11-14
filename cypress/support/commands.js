// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('checkIsInvalid', (idValue, typeValue, errorValue) => {
  cy.get(`input[id="${idValue}"]`).clear().type(typeValue);
  cy.get(`input[id="${idValue}"]`).should('have.class', 'is-invalid');
  cy.get('div[class="invalid-feedback"]')
    .should('be.visible')
    .and('have.text', `${errorValue}`)
  cy.get(`input[id="${idValue}"]`).should('have.css', 'border-color', 'rgb(220, 53, 69)')
})
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