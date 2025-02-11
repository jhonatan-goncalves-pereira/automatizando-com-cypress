const BASE_URL = 'https://www.saucedemo.com/v1/';
const VALID_USER = { username: 'standard_user', password: 'secret_sauce' };

describe('Testes de Carrinho no SauceDemo', () => {
    beforeEach(() => {
        cy.visit(BASE_URL, { timeout: 10000 });
    
        cy.url().then((currentUrl) => {
            cy.log('URL atual:', currentUrl); // Verifica a URL real carregada
        });
    
        cy.get('#user-name', { timeout: 10000 }).should('be.visible').type(VALID_USER.username);
        cy.get('#password').should('be.visible').type(VALID_USER.password);
        cy.get('#login-button').should('be.visible').click();
        cy.url().should('include', '/inventory.html');
    });
    

    it('Deve adicionar um item ao carrinho', () => {
        cy.get('.inventory_item').first().find('button').click();
        cy.get('.shopping_cart_badge').should('contain', '1');
    });

    it('Deve remover um item do carrinho', () => {
        cy.get('.inventory_item').first().find('button').click();
        cy.get('.shopping_cart_badge').should('contain', '1');

        cy.get('.shopping_cart_link').click(); 
        cy.get('.cart_item').should('have.length', 1);
        
        cy.get('.cart_item').first().find('button').click();
        cy.get('.cart_list').should('not.contain', '.cart_item');
    });

    it('Deve acessar o carrinho e verificar os itens adicionados', () => {
        cy.get('.inventory_item').eq(0).find('button').click();
        cy.get('.inventory_item').eq(1).find('button').click();

        cy.get('.shopping_cart_badge').should('contain', '2');

        cy.get('.shopping_cart_link').click();
        cy.get('.cart_item').should('have.length', 2);
    });
});
