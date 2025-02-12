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