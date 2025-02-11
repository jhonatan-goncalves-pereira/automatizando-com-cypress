const BASE_URL = 'https://www.saucedemo.com/v1/';
describe('Testes de segurança no Saucedemo', () => {
  beforeEach(() => {
    cy.visit(BASE_URL);
  });
  
  it('Deve mascarar a senha durante a digitação', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#password').type('secret_sauce');
    cy.get('#password').should('have.attr', 'type', 'password');
  });

  it('Deve usar HTTPS para proteger os dados do usuário', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.location('protocol').should('eq', 'https:');
  });

});