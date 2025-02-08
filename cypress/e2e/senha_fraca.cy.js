describe("Validar Cadastro de Usuário - Senha Fraca", () => {
    beforeEach(() => {
        cy.visit("https://www.guiademoteis.com.br/sao-paulo");
    });

    it("Deve exibir erro de validação para senha fraca", () => {
        cy.get('#showModal')
        .should('exist') // Verifica que o botão existe no DOM
        .and('be.visible') // Verifica que o botão está visível
        .click({ force: true }); // Força o clique no botão
 
        
         

        // Preenche os campos obrigatórios com dados válidos
        cy.get('#nome').type('Maria Souza');
        cy.get('#sexo-Feminino').click();
        cy.get('#DataNascimento').type('28/04/1984');
        cy.get('#Cep').type('05011-000');
        cy.get('#email').type('maria@teste.com');
        cy.get('#ConfEmail').type('maria@teste.com');

        // Preenche o campo 'Senha' com uma senha fraca "12345"
        cy.get('#Senha').type('12345');

        // Aceita os termos e preferências de email
        cy.get('#checkbox-descontos-email').check();
        cy.get('#checkbox-publicidade-email').check();
        cy.get('#checkbox-privacy').check();

        // Tenta enviar o formulário
        cy.get('#cadastro input.btCadastrar').click();
        cy.wait(1000);

        // Valida a mensagem de erro para senha fraca
        cy.contains("A senha deve ter mínimo 8 caracteres, 1 letra maiúscula e 1 número").should("be.visible");
    });
});
