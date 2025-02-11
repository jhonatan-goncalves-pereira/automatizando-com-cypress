const BASE_URL = 'https://www.saucedemo.com/v1/';
const VALID_USER = { username: 'standard_user', password: 'secret_sauce' };
const LOCKED_OUT_USER = { username: 'locked_out_user', password: 'secret_sauce' };
const ERROR_MESSAGES = {
  REQUIRED_USERNAME: 'Username is required',
  REQUIRED_PASSWORD: 'Password is required',
  INVALID_CREDENTIALS: 'Username and password do not match',
  LOCKED_OUT_USER: 'Sorry, this user has been locked out.',
};

describe('Testes de Login no Saucedemo', () => {
    beforeEach(() => {
      cy.visit(BASE_URL);
    });
  
    it('Deve realizar login com sucesso usando credenciais válidas', () => {
      cy.get('#user-name').type(VALID_USER.username);
      cy.get('#password').type(VALID_USER.password);
      cy.get('#login-button').click();
  
      cy.url().should('include', '/inventory.html');
      cy.contains('Products').should('be.visible');
    });
  
    it('Deve exibir mensagem de erro ao usar credenciais inválidas', () => {
      cy.get('#user-name').type('invalid_user');
      cy.get('#password').type('wrong_password');
      cy.get('#login-button').click();
  
      cy.get('[data-test="error"]').should('contain', ERROR_MESSAGES.INVALID_CREDENTIALS);
    });
  
    it('Deve exibir mensagem de erro ao deixar o campo de usuário em branco', () => {
      cy.get('#password').type(VALID_USER.password);
      cy.get('#login-button').click();
  
      cy.get('[data-test="error"]').should('contain', ERROR_MESSAGES.REQUIRED_USERNAME);
    });
  
    it('Deve exibir mensagem de erro ao deixar o campo de senha em branco', () => {
      cy.get('#user-name').type(VALID_USER.username);
      cy.get('#login-button').click();
  
      cy.get('[data-test="error"]').should('contain', ERROR_MESSAGES.REQUIRED_PASSWORD);
    });
  
    it('Deve exibir mensagem de erro ao deixar ambos os campos em branco', () => {
      cy.get('#login-button').click();
  
      cy.get('[data-test="error"]').should('contain', ERROR_MESSAGES.REQUIRED_USERNAME);
    });
  
    it('Deve bloquear o acesso ao usuário bloqueado (locked_out_user)', () => {
      cy.get('#user-name').type(LOCKED_OUT_USER.username);
      cy.get('#password').type(LOCKED_OUT_USER.password);
      cy.get('#login-button').click();
  
      cy.get('[data-test="error"]').should('contain', ERROR_MESSAGES.LOCKED_OUT_USER);
    });
  });