describe('Testes de Carrinho no SauceDemo', () => {
    beforeEach(() => {
        cy.login();
    });

    it('Deve adicionar um item ao carrinho', () => {
        cy.addItemToCart(); 
        cy.assertCartBadgeCount('1');
    });

    it('Deve remover um item do carrinho', () => {
        cy.addItemToCart(); 
        cy.assertCartBadgeCount('1');

        cy.openCart(); 
        cy.assertCartItemCount(1);

        cy.removeItemFromCart();
        cy.assertCartItemCount(0);
    });

    it('Deve acessar o carrinho e verificar os itens adicionados', () => {
        cy.addItemToCart(0); 
        cy.addItemToCart(1);
        cy.assertCartBadgeCount('2');

        cy.openCart(); 
        cy.assertCartItemCount(2); 
    });
});