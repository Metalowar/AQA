describe('Header & Footer buttons', () => {

  before(() => {
    cy.visit('https://qauto.forstudy.space/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    })
  });

  it('Select header buttons', () => {

    // Перевірка лого і порівняння його з home
    cy.get('a[class="header_logo"]').should('be.visible');

    cy.get('a[class="header_logo"]')
      .invoke('prop', 'href')
      .then((logoLink) => {
        cy.get('.header_left')
          .find('.-active')
          .invoke('prop', 'href')
          .should('equal', logoLink);
    });

    // Перевірка About
    cy.get('.header_left')
      .find('button')
      .eq(0)
      .should('be.visible')
      .and('contain.text', 'About');

    // Перевірка Contacts
    cy.get('.header_left')
      .find('button')
      .eq(1)
      .should('be.visible')
      .and('contain.text', 'Contacts');

    // Перевірка Guest log in
    cy.get('.header_right')
      .find('button')
      .eq(0)
      .should('be.visible')
      .and('contain.text', 'Guest log in');

    // Перевірка Sign In
    cy.get('.header_right')
      .find('button')
      .eq(1)
      .should('be.visible')
      .and('contain.text', 'Sign In');
  });

  it('Footer buttons', () => {

    // Перевіряю спільні і окремі атрибути кнопок
    cy.get('.contacts_socials').invoke('prop', 'childElementCount').should('equal', 5);
    cy.get('.contacts_socials').within(($socials) => {
      cy.get('a').should('have.attr', 'href');

      cy.get('span').eq(0).invoke('attr', 'class').should('match', /icon-facebook/);
      cy.get('span').eq(1).invoke('attr', 'class').should('match', /icon-telegram/);
      cy.get('span').eq(2).invoke('attr', 'class').should('match', /icon-youtube/);
      cy.get('span').eq(3).invoke('attr', 'class').should('match', /icon-instagram/);
      cy.get('span').eq(4).invoke('attr', 'class').should('match', /icon-linkedin/);
    })

    // Перевірка двох лінків в футері
    cy.get('a.contacts_link')
      .eq(0)
      .should('have.attr', 'href', 'https://ithillel.ua');

    cy.get('a.contacts_link')
      .eq(1)
      .should('have.attr', 'href', 'mailto:developer@ithillel.ua');
  })
});