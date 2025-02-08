describe('Validação de Campos Obrigatórios', () => {
  beforeEach(() => {
    // Substitua pela URL correta do servidor local
    cy.visit('http://127.0.0.1:5500/cadastro_de_usuario.index.html');
  });

  it('Exibe mensagens de erro ao deixar campos obrigatórios vazios', () => {
    // Clique diretamente no botão de envio sem preencher os campos
    cy.get('#submitButton').click();

    // Verifica se as mensagens de erro são exibidas
    cy.get('#nameError').should('be.visible').and('contain', 'O campo Nome Completo é obrigatório.');
    // Adicione verificações similares para outros campos obrigatórios
    cy.get('#birthdate').then(($input) => {
      if ($input.prop('validationMessage')) {
        expect($input.prop('validationMessage')).to.contain('Preencha este campo.');
      }
    });

    cy.get('#cep').then(($input) => {
      if ($input.prop('validationMessage')) {
        expect($input.prop('validationMessage')).to.contain('Preencha este campo.');
      }
    });
  });
});
