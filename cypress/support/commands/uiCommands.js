Cypress.Commands.add('visitBaseUrl', () => {
    cy.fixture('constants').then((constants) => {
        cy.visit(constants.BASE_URL);
    });
});

Cypress.Commands.add('focusOnUsernameField', () => {
    cy.get('#user-name').focus();
    cy.focused().should('have.id', 'user-name');
});

Cypress.Commands.add('assertErrorMessage', (message) => {
    cy.get('[data-test="error"]').should('contain', message);
});

Cypress.Commands.add('clickLoginButton', () => {
    cy.get('#login-button').click();
});

Cypress.Commands.add('assertLoginButtonNotDisabled', () => {
    cy.get('#login-button').should('not.be.disabled');
});



Cypress.Commands.add('assertPageLoadTime', (url, timeout) => {
    cy.visit(url, { timeout: timeout });
});

Cypress.Commands.add('simulateSlowNetwork', (route, delay) => {
    cy.intercept('GET', route, {
        delay: delay,
    }).as('slowNetwork');
});



Cypress.Commands.add('assertPasswordFieldMasked', (password) => {
    cy.get('#password').type(password);
    cy.get('#password').should('have.attr', 'type', 'password'); 
});

Cypress.Commands.add('assertHttpsProtocol', () => {
    cy.location('protocol').should('eq', 'https:');
});