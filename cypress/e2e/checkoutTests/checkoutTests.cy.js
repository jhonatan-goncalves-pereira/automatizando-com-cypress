describe('Testes de Checkout no SauceDemo', () => {
    beforeEach(() => {
        cy.login(); 
        cy.addItemToCart(); 
        cy.openCart(); 
    });

    it('Deve concluir o checkout com sucesso', () => {
        cy.startCheckout(); 
        cy.fillCheckoutForm('John', 'Doe', '12345'); // Preenche o formulário
        cy.completeCheckout(); 
        cy.assertCheckoutSuccess(); 
    });

    it('Deve exibir mensagem de erro ao deixar campos obrigatórios em branco', () => {
        cy.startCheckout(); // Inicia o checkout
        cy.get('.btn_primary.cart_button').click(); // Tenta continuar sem preencher o formulário
        cy.assertCheckoutError('Error: First Name is required'); // Verifica a mensagem de erro
    });

    it('Deve exibir mensagem de erro ao preencher apenas o nome', () => {
        cy.startCheckout(); // Inicia o checkout
        cy.get('#first-name').type('John'); // Preenche apenas o nome
        cy.get('.btn_primary.cart_button').click(); // Tenta continuar
        cy.assertCheckoutError('Error: Last Name is required'); // Verifica a mensagem de erro
    });

    it('Deve exibir mensagem de erro ao preencher apenas nome e sobrenome', () => {
        cy.startCheckout(); // Inicia o checkout
        cy.get('#first-name').type('John');
        cy.get('#last-name').type('Doe');
        cy.get('.btn_primary.cart_button').click(); // Tenta continuar
        cy.assertCheckoutError('Error: Postal Code is required'); // Verifica a mensagem de erro
    });
});