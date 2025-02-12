describe('Testes de Login no Saucedemo com Faker', () => {
    let constants;

    before(() => {
        cy.loadConstants().then((data) => {
            constants = data;
        });
    });

    beforeEach(() => {
        cy.visit(constants.BASE_URL);
    });

    it('Deve exibir mensagem de erro ao usar credenciais inválidas geradas dinamicamente', () => {
        cy.generateInvalidCredentials().then((credentials) => {
            cy.typeUsername(credentials.username);
            cy.typePassword(credentials.password);
            cy.clickBtnLogin();

            cy.assertErrorMessage(constants.ERROR_MESSAGES.INVALID_CREDENTIALS);
        });
    });

    it('Deve bloquear o acesso ao usuário bloqueado (locked_out_user)', () => {
        cy.typeUsername(constants.LOCKED_OUT_USER.username);
        cy.typePassword(constants.LOCKED_OUT_USER.password);
        cy.clickBtnLogin();
    
        cy.assertErrorMessage(constants.ERROR_MESSAGES.LOCKED_OUT_USER);
    });
    
    it('Deve exibir mensagem de erro ao tentar login com usuário bloqueado e senha inválida', () => {
        cy.generateInvalidCredentials().then((credentials) => {
            cy.typeUsername(constants.LOCKED_OUT_USER.username);
            cy.typePassword(credentials.password);
            cy.clickBtnLogin();
    
            cy.assertErrorMessage(constants.ERROR_MESSAGES.LOCKED_OUT_USER);
        });
    });
});