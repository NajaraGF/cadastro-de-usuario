Feature: Validar o Cadastro de Usuário
  Como um usuário,
  Eu quero validar o cadastro de usuário,
  Para que eu possa cadastrar um novo usuário no site Guia de Motéis

  Scenario: Digitar uma senha fraca e exibir erro de validação
    Given que o usuário acessa a página inicial
    When o usuário clica em "login" para acessar o formulário de cadastro
    And no modal, o usuário clica em "Cadastre-se grátis!"
    And o usuário preenche o campo "Nome Completo" com "Maria Souza"
    And o usuário seleciona a opção "Feminino" em "Sexo"
    And o usuário preenche o campo "Data de Nascimento" com "28/04/1984"
    And o usuário preenche o campo "CEP" com "05011-000"
    And o usuário preenche o campo "E-mail" com "maria@teste.com"
    And o usuário preenche o campo "Confirme e-mail" com "maria@teste.com"
    And o usuário preenche o campo "Senha" com "12345"
    And o usuário seleciona os checkboxs de descontos, promoções e publicidade
    And o usuário seleciona o checkbox de termos de uso e política de privacidade
    And o usuário clica no botão "Confirmar cadastro"
    Then o usuário visualiza a mensagem de erro "A senha deve ter mínimo 8 caracteres, 1 letra maiúscula e 1 número"
