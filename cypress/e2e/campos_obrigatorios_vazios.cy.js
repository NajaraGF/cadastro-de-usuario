describe("Validar Cadastro de Usuário - Campos obrigatórios vazios", () => {
    beforeEach(() => {
      // Acessa a página inicial
      cy.visit("https://www.guiademoteis.com.br/sao-paulo");
    });
  
    it("Deve exibir mensagens de erro quando os campos obrigatórios estiverem vazios", () => {
      // Verifica se a página inicial foi carregada
      cy.contains("Encontre os melhores motéis de São Paulo").should("be.visible");
  
      // Acessa o formulário de cadastro:
      // Clica em "login" para abrir o modal de acesso
      cy.get('#showModal').click();
      cy.get('#login').click();
      cy.wait(1000); // Aguarda transição/animação
  
      // No modal, clica em "Cadastre-se grátis!"
      cy.get('#modal > p > a').click();
      cy.wait(1000);
  
      // Tenta enviar o formulário deixando os campos obrigatórios vazios
      cy.get('#cadastro > form > input.btCadastrar').click();
      cy.wait(1000);
  
      // Valida a exibição das mensagens de erro para cada campo obrigatório
      cy.contains("Nome Completo é obrigatório").should("be.visible");
      cy.contains("Sexo é obrigatório").should("be.visible");
      cy.contains("Data de Nascimento é obrigatória").should("be.visible");
      cy.contains("CEP é obrigatório").should("be.visible");
      cy.contains("E-mail é obrigatório").should("be.visible");
      cy.contains("Confirmação de e-mail é obrigatória").should("be.visible");
      cy.contains("Senha é obrigatória").should("be.visible");
      cy.contains("Aceite os termos de uso e política de privacidade").should("be.visible");
    });
  });
  