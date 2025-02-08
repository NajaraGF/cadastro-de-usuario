describe("Validar Cadastro de Usuário - E-mails Divergentes", () => {
    beforeEach(() => {
      // Acessa a página inicial
      cy.visit("https://www.guiademoteis.com.br/sao-paulo");
    });
  
    it("Deve exibir erro de validação quando os e-mails forem diferentes", () => {
      // Verifica se a página inicial foi carregada
      cy.contains("Encontre os melhores motéis de São Paulo").should("be.visible");
  
      // Acessa o formulário de cadastro:
      // Clica em "login" para abrir o modal
      cy.get('#showModal').click();
      cy.get('#login').click();
      cy.wait(1000); // Aguarda transição/animação
  
      // No modal, clica em "Cadastre-se grátis!"
      cy.get('#modal > p > a').click();
      cy.wait(1000);
  
      // Preenche os campos obrigatórios com dados válidos, exceto para os e-mails
      cy.get('#nome').type('Maria Souza');
      cy.get('#sexo-Feminino').click();
      cy.get('#DataNascimento').type('28/04/1984');
      cy.get('#Cep').type('05011-000');
  
      // Preenche os campos de e-mail com valores diferentes
      cy.get('#email').type('maria@teste.com');
      cy.get('#ConfEmail').type('maria.diferente@teste.com');
  
      // Preenche o campo de senha com um valor válido
      cy.get('#Senha').type('Teste@123');
  
      // Seleciona os checkboxs (descontos, promoções e publicidade)
      cy.get('#checkbox-descontos-email').click();
      cy.get('#checkbox-publicidade-email').click();
  
      // Seleciona o checkbox de termos de uso e política de privacidade
      cy.get('#checkbox-privacy').click();
  
      // Envia o formulário
      cy.get('#cadastro > form > input.btCadastrar').click();
      cy.wait(1000);
  
      // Valida a exibição da mensagem de erro para e-mails divergentes
      cy.contains("Os e-mails informados não coincidem").should("be.visible");
    });
  });
  