describe('Testes de segurança no Saucedemo', () => {
  beforeEach(() => {
      cy.visitBaseUrl(); 
  });

  it('Deve mascarar a senha durante a digitação', () => {
      cy.assertPasswordFieldMasked('secret_sauce'); 
  });

  it('Deve usar HTTPS para proteger os dados do usuário', () => {
      cy.assertHttpsProtocol();
  });
});