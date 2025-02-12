import { BASE_URL, VALID_USER, LOCKED_OUT_USER, ERROR_MESSAGES } from '../../support/constans';

describe('Testes de Login no Saucedemo', () => {
    beforeEach(() => {
        cy.visit(BASE_URL);
    });

    it('Deve realizar login com sucesso usando credenciais válidas', () => {
        cy.typeUsername();
        cy.typePassword();
        cy.clickBtnLogin();

        cy.assertionLoginValid();
    });

    it('Deve exibir mensagem de erro ao usar credenciais inválidas', () => {
        cy.typeUsername('invalid_user');
        cy.typePassword('wrong_password');
        cy.clickBtnLogin();

        cy.assertErrorMessage(ERROR_MESSAGES.INVALID_CREDENTIALS);
    });

    it('Deve exibir mensagem de erro ao deixar o campo de usuário em branco', () => {
        cy.typePassword();
        cy.clickBtnLogin();

        cy.assertErrorMessage(ERROR_MESSAGES.REQUIRED_USERNAME);
    });

    it('Deve exibir mensagem de erro ao deixar o campo de senha em branco', () => {
        cy.typeUsername();
        cy.clickBtnLogin();

        cy.assertErrorMessage(ERROR_MESSAGES.REQUIRED_PASSWORD);
    });

    it('Deve exibir mensagem de erro ao deixar ambos os campos em branco', () => {
        cy.clickBtnLogin();

        cy.assertErrorMessage(ERROR_MESSAGES.REQUIRED_USERNAME);
    });

    it('Deve bloquear o acesso ao usuário bloqueado (locked_out_user)', () => {
        cy.typeUsername(LOCKED_OUT_USER.username);
        cy.typePassword(LOCKED_OUT_USER.password);
        cy.clickBtnLogin();

        cy.assertErrorMessage(ERROR_MESSAGES.LOCKED_OUT_USER);
    });
});