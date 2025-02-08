describe('Validação de Campos Obrigatórios', () => {
  beforeEach(() => {
    // Substitua pela URL correta do servidor local
    cy.visit('http://127.0.0.1:5500/cadastro_de_usuario.index.html');
  });

  it('Exibe mensagens de erro ao deixar campos obrigatórios vazios', () => {
    // Clica no botão de envio sem preencher os campos
    cy.get('#submitButton').click();

    // Verifica se as mensagens de erro são exibidas corretamente
    cy.get('#name')
      .should('be.visible')
      .and('contain', 'O campo Nome Completo é obrigatório.');

    cy.get('#genderError')
      .should('be.visible')
      .and('contain', 'Selecione uma opção de sexo.');

    cy.get('#birthdateError')
      //.should('be.visible')
      .and('contain', 'O campo Data de Nascimento é obrigatório.');

    cy.get('#cepError')
      //.should('be.visible')
      .and('contain', 'O campo CEP é obrigatório.');

    cy.get('#emailError')
     // .should('be.visible')
      .and('contain', 'O campo E-mail é obrigatório.');
  });
});
