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

Cypress.Commands.add('addItemToCart', (index = 0) => {
    cy.get('.inventory_item')
        .eq(index)
        .find('button')
        .click();
});

Cypress.Commands.add('removeItemFromCart', (index = 0) => {
    cy.get('.cart_item')
        .eq(index)
        .find('button')
        .click();
});

Cypress.Commands.add('openCart', () => {
    cy.get('.shopping_cart_link').click();
});

Cypress.Commands.add('assertCartBadgeCount', (count) => {
    cy.get('.shopping_cart_badge').should('contain', count);
});

Cypress.Commands.add('assertCartItemCount', (count) => {
    cy.get('.cart_item').should('have.length', count);
});







Cypress.Commands.add('startCheckout', () => {
    cy.get('.btn_action.checkout_button').click(); 
});

Cypress.Commands.add('fillCheckoutForm', (firstName, lastName, zipCode) => {
    cy.get('#first-name').type(firstName); 
    cy.get('#last-name').type(lastName);   
    cy.get('#postal-code').type(zipCode);  
    cy.get('.btn_primary.cart_button').click();
});

Cypress.Commands.add('completeCheckout', () => {
    cy.get('.btn_action.cart_button').click();
});

Cypress.Commands.add('assertCheckoutSuccess', () => {
    cy.get('.complete-header').should('contain', 'Thank you for your order'.toUpperCase());
});

Cypress.Commands.add('assertCheckoutError', (errorMessage) => {
    cy.get('[data-test="error"]').should('contain', errorMessage);
});