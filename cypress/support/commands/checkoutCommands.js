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