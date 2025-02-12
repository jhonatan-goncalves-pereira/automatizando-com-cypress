import { faker } from '@faker-js/faker';
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
    const invalidUsername = faker.internet.userName();
    const invalidPassword = faker.internet.password();

    cy.typeUsername(invalidUsername);
    cy.typePassword(invalidPassword);
    cy.clickBtnLogin();

    cy.assertErrorMessage(constants.ERROR_MESSAGES.INVALID_CREDENTIALS);
});

});
    