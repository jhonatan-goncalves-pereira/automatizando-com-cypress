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
import { BASE_URL, VALID_USER, LOCKED_OUT_USER, ERROR_MESSAGES } from '../support/constans';

Cypress.Commands.add('typeUsername', (username = VALID_USER.username) => {
    cy.get('#user-name').type(username);
});

Cypress.Commands.add('typePassword', (password = VALID_USER.password) => {
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