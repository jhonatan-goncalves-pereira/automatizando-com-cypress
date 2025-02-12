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