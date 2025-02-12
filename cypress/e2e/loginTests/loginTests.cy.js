describe('Testes de Login no Saucedemo', () => {
  let constants;

  before(() => {
      // Carrega as constantes antes de todos os testes
      cy.loadConstants().then((data) => {
          constants = data;
      });
  });

  beforeEach(() => {
      cy.visit(constants.BASE_URL);
  });

  it('Deve realizar login com sucesso usando credenciais válidas', () => {
      cy.typeUsername(constants.VALID_USER.username);
      cy.typePassword(constants.VALID_USER.password);
      cy.clickBtnLogin();

      cy.assertionLoginValid();
  });

  it('Deve exibir mensagem de erro ao usar credenciais inválidas', () => {
      cy.typeUsername('invalid_user');
      cy.typePassword('wrong_password');
      cy.clickBtnLogin();

      cy.assertErrorMessage(constants.ERROR_MESSAGES.INVALID_CREDENTIALS);
  });

  it('Deve exibir mensagem de erro ao deixar o campo de usuário em branco', () => {
      cy.typePassword(constants.VALID_USER.password);
      cy.clickBtnLogin();

      cy.assertErrorMessage(constants.ERROR_MESSAGES.REQUIRED_USERNAME);
  });

  it('Deve exibir mensagem de erro ao deixar o campo de senha em branco', () => {
      cy.typeUsername(constants.VALID_USER.username);
      cy.clickBtnLogin();

      cy.assertErrorMessage(constants.ERROR_MESSAGES.REQUIRED_PASSWORD);
  });

  it('Deve exibir mensagem de erro ao deixar ambos os campos em branco', () => {
      cy.clickBtnLogin();

      cy.assertErrorMessage(constants.ERROR_MESSAGES.REQUIRED_USERNAME);
  });

  it('Deve bloquear o acesso ao usuário bloqueado (locked_out_user)', () => {
      cy.typeUsername(constants.LOCKED_OUT_USER.username);
      cy.typePassword(constants.LOCKED_OUT_USER.password);
      cy.clickBtnLogin();

      cy.assertErrorMessage(constants.ERROR_MESSAGES.LOCKED_OUT_USER);
  });
});