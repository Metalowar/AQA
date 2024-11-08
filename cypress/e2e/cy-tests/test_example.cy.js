describe('Main page testing', () => {

  before(() => {
    cy.visit('/');
  });

  afterEach(() => {
    cy.url().should('contain', 'rozetka.com.ua/');
  });

  it('Search input testing', () => {
    cy.get("div[class='search-form__input-wrapper'] input").should('be.visible');
    cy.get('button[class="search-form__clear"]').should('be.hidden');
    cy.get("input[name='search']")
      .click()
      .wait(5000) // мусив таймінг поставити, бо не вспівало спрацьовувати
      .type('apple');


    cy.get('button[class="search-form__clear"]').should('be.visible')

    cy.get('button[class="search-form__clear"]').click().wait(5000);
    cy.get("div[class='search-form__input-wrapper'] input").should('be.empty');

    cy.get("input[name='search']")
      .click()
      .type('apple');


    cy.get("button[class$='submit']").should('be.visible').click();
  });
});