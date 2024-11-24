describe("Different env for test", () => {
  beforeEach(() => {
    const mainUrl = Cypress.config('baseUrl'); // Записати в конфіг

    cy.visit(`${mainUrl}`, { // https://qauto.forstudy.space/ or https://qauto2.forstudy.space/
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
  });

  it("Add car", () => {
    cy.get('button[class^="hero-descriptor_btn"]').click();
  });

  it.skip("Add fuel expenses", () => {
    cy.visit("https://jetbrains.com");
  });
});