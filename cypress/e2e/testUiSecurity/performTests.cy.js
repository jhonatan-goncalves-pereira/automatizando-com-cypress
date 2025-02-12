describe('Testes de carregamento no Saucedemo', () => {
  beforeEach(() => {
      cy.visitBaseUrl(); 
  });

  it('Deve carregar a página de login em menos de 3 segundos', () => {
      cy.fixture('constants').then((constants) => {
          cy.assertPageLoadTime(constants.BASE_URL, 3000);
      });
  });

  it('Deve funcionar mesmo em redes lentas', () => {
    cy.simulateSlowNetwork('**/inventory.html', 5000);
    cy.visitBaseUrl();
    cy.wait('@slowNetwork', { timeout: 10000 });
  });
});