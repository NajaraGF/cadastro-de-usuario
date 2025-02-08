describe('Cadastro de Usuário', () => {
  beforeEach(() => {

    cy.visit('http://127.0.0.1:8080/cadastro_de_usuario.html');
  });

  it('Cadastro bem-sucedido do usuário', () => {
    // Preenche os campos do formulário
    cy.get('#name').type('Maria Souza');
    cy.get('#genderFeminino').check();
    cy.get('#birthdate').type('1984-04-28');
    cy.get('#cep').type('05011000'); // CEP sem hífen
    cy.get('#email').type('maria@teste.com');
    cy.get('#confirmEmail').type('maria@teste.com');
    cy.get('#password').type('Teste@123');
    cy.get('#confirmPassword').type('Teste@123');

    // Submete o formulário e verifica o popup
    cy.get('#submitButton').click();
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Cadastro realizado com sucesso!');
    });
  });
});
