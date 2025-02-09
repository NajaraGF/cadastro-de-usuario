describe('Validação de E-mails Diferentes no Cadastro de Usuário', () => {
  beforeEach(() => {
    // Substitua pela URL do formulário no servidor local
    cy.visit('http://127.0.0.1:5500/cadastro_de_usuario.index.html');
  });

  it('Exibe mensagem de erro ao inserir e-mails diferentes nos campos "E-mail" e "Confirmação de E-mail"', () => {
    // Preenche todos os campos obrigatórios corretamente
    cy.get('#name').type('Maria Souza');
    cy.get('#genderFeminino').check();
    cy.get('#birthdate').type('1984-04-28');
    cy.get('#cep').type('05011-000');
    cy.get('#email').type('maria@teste.com'); // Primeiro e-mail
    cy.get('#confirmEmail').type('maria@outroteste.com'); // E-mail diferente
    cy.get('#password').type('Teste@123');
    cy.get('#confirmPassword').type('Teste@123');

    // Clica no botão de cadastro
    cy.get('#submitButton').click();

    // Verifica a mensagem de erro para e-mails diferentes
    cy.get('#confirmEmailError')
      .should('be.visible')
      .and('contain', 'Os e-mails não coincidem.');
  });
});
