import { faker } from '@faker-js/faker';

Cypress.Commands.add('loadConstants', () => {
    return cy.fixture('constants');
});

Cypress.Commands.add('typeUsername', (username) => {
    cy.get('#user-name').type(username);
});

Cypress.Commands.add('typePassword', (password) => {
    cy.get('#password').type(password);
});

Cypress.Commands.add('clickBtnLogin', () => {
    cy.get('#login-button').click();
});

Cypress.Commands.add('assertionLoginValid', () => {
    cy.url().should('include', '/inventory.html');
    cy.contains('Products').should('be.visible');
});

Cypress.Commands.add('assertErrorMessage', (message) => {
    cy.get('[data-test="error"]').should('contain', message);
});

Cypress.Commands.add('generateInvalidCredentials', () => {
    const invalidUsername = faker.internet.userName();
    const invalidPassword = faker.internet.password();
    return { username: invalidUsername, password: invalidPassword };
});

Cypress.Commands.add('login', () => {
    cy.loadConstants().then((constants) => {
        cy.visit(constants.BASE_URL, { timeout: 10000 });
        cy.url().then((currentUrl) => {
            cy.log('URL atual:', currentUrl);
        });
        cy.get('#user-name', { timeout: 10000 }).should('be.visible').type(constants.VALID_USER.username);
        cy.get('#password').should('be.visible').type(constants.VALID_USER.password);
        cy.get('#login-button').should('be.visible').click();
        cy.url().should('include', '/inventory.html');
    });
});