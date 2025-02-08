describe('Cadastro de Usuário', () => {
  // Executa antes de cada teste: visita a página do formulário
  beforeEach(() => {
    cy.visit('https://demo.automationtesting.in/Register.html')
  });

  it('Deve cadastrar o usuário quando o formulário for preenchido corretamente', () => {
    cy.get('#nome').type('João Silva');
    cy.get('#email').type('joao@teste.com');
    cy.get('#confirmEmail').type('joao@teste.com');
    cy.get('#senha').type('SenhaForte1'); // atende aos requisitos de senha forte
    // Preencher outros campos obrigatórios, se houver
    cy.get('#submit').click();

    // Validação da mensagem de sucesso
    cy.contains('Cadastro realizado com sucesso').should('be.visible');
  });

  it('Não deve permitir envio se campos obrigatórios estiverem vazios', () => {
    cy.get('#submit').click();

    // Validação das mensagens de erro para campos vazios
    cy.contains('Campo obrigatório').should('be.visible');
  });

  it('Deve exibir erro para senha fraca', () => {
    cy.get('#nome').type('Maria Souza');
    cy.get('#email').type('maria@teste.com');
    cy.get('#confirmEmail').type('maria@teste.com');
    cy.get('#senha').type('12345'); // senha fraca
    // Se houver confirmação de senha, preencha também
    cy.get('#submit').click();

    // Validação da mensagem de erro para senha fraca
    cy.contains('A senha deve ter mínimo 8 caracteres, 1 letra maiúscula e 1 número').should('be.visible');
  });

  it('Deve exibir erro quando os e-mails não coincidirem', () => {
    cy.get('#nome').type('Carlos Pereira');
    cy.get('#email').type('carlos@teste.com');
    cy.get('#confirmEmail').type('carlos.diferente@teste.com'); // e-mails diferentes
    cy.get('#senha').type('SenhaForte1');
    cy.get('#submit').click();

    // Validação da mensagem de erro para e-mails divergentes
    cy.contains('Os e-mails informados não coincidem').should('be.visible');
  });
});
