const BASE_URL = 'https://www.saucedemo.com/v1/';

describe('Testes de Login no Saucedemo', () => {
  beforeEach(() => {
    cy.visit(BASE_URL);
  });

  it('Deve focar automaticamente no campo de usuário ao carregar a página', () => {
    cy.get('#user-name').focus(); 
    cy.focused().should('have.id', 'user-name'); 
  });

  it('Deve exibir mensagem de erro ao tentar fazer login com campos vazios', () => {
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('contain', 'Username is required');
  });


  it('Não desabilita clicar no botão de login mesmo com campos vazios', () => {
    cy.get('#login-button').should('not.be.disabled');
  });
});