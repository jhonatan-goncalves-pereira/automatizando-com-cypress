describe('Testes de Login no Saucedemo', () => {
  beforeEach(() => {
      cy.visitBaseUrl(); 
  });

  it('Deve focar automaticamente no campo de usuário ao carregar a página', () => {
      cy.focusOnUsernameField();
  });

  it('Deve exibir mensagem de erro ao tentar fazer login com campos vazios', () => {
      cy.clickLoginButton(); 
      cy.assertErrorMessage('Username is required'); 
  });

  it('Não desabilita clicar no botão de login mesmo com campos vazios', () => {
      cy.assertLoginButtonNotDisabled();
  });
});