describe('Validação de Senha Fraca no Cadastro de Usuário', () => {
    beforeEach(() => {
      // Substitua pela URL do formulário no servidor local
      cy.visit('http://127.0.0.1:5500/cadastro_de_usuario.index.html');
    });
  
    it('Exibe mensagem de erro ao inserir uma senha fraca', () => {
      // Preenche todos os campos obrigatórios corretamente
      cy.get('#name').type('Maria Souza');
      cy.get('#genderFeminino').check();
      cy.get('#birthdate').type('1984-04-28');
      cy.get('#cep').type('05011-000');
      cy.get('#email').type('maria@teste.com');
      cy.get('#confirmEmail').type('maria@teste.com');
      cy.get('#password').type('12345'); // Senha fraca
      cy.get('#confirmPassword').type('12345');
  
      // Clica no botão de cadastro
      cy.get('#submitButton').click();
  
      // Verifica a mensagem de erro para senha fraca
      cy.get('#passwordError')
        .should('be.visible')
        .and(
          'contain',
          'A senha deve ter no mínimo 8 caracteres, incluindo uma letra maiúscula e um número.'
        );
    });
  });
  