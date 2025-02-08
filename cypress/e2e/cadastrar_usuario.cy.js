describe('Cadastro de Usuário', () => {
  beforeEach(() => {
    // Substitua pelo caminho correto do formulário HTML
    cy.visit('http://127.0.0.1:5500/cadastro_de_usuario.index.html');
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

    // Submete o formulário
    cy.get('#submitButton').click();

    // Verifica a mensagem de sucesso
    cy.get('#successMessage')
      .should('be.visible')
      .and('contain', 'Cadastro realizado com sucesso');
  });
});
