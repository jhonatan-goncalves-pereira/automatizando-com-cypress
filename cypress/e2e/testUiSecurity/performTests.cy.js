describe('Testes de carregamento no Saucedemo', () => {
  beforeEach(() => {
    cy.visit(BASE_URL);
  });

  it('Deve carregar a página de login em menos de 3 segundos', () => {
    cy.visit('https://www.saucedemo.com/v1/', { timeout: 3000 });
  });

  it('Deve funcionar mesmo em redes lentas', () => {
    cy.intercept('GET', '**/inventory.html', {
      delay: 5000, 
    }).as('slowNetwork');
  
    cy.visit('https://www.saucedemo.com/v1/');
    cy.wait('@slowNetwork');
  });

});