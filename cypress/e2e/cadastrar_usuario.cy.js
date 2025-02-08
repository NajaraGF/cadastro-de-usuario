describe('Cadastro de Usuário', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/cadastro_de_usuario.index.html');
  });

  it('Verifica o alerta após o envio do formulário', () => {
    cy.get('#name').type('Maria Souza');
    cy.get('#genderFeminino').check();
    cy.get('#birthdate').type('1984-04-28');
    cy.get('#cep').type('05011000');
    cy.get('#email').type('maria@teste.com');
    cy.get('#confirmEmail').type('maria@teste.com');
    cy.get('#password').type('Teste@123');
    cy.get('#confirmPassword').type('Teste@123');

    cy.get('#submitButton').click();

    cy.on('window:alert', (text) => {
      expect(text).to.equal('Cadastro realizado com sucesso!');
    });
  });
});
