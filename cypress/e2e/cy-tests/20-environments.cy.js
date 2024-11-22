describe("Different env for test", () => {
  beforeEach(() => {
    const mainUrl = Cypress.config('apiUrl'); // Записати в конфіг

    cy.visit('BASE_URL_MAIN', { // https://qauto.forstudy.space/ or https://qauto2.forstudy.space/
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
  });

  it("Add car", () => {
    cy.visit("https://jetbrains.com");
  });

  it("Add fuel expenses", () => {
    cy.visit("https://jetbrains.com");
  });
});