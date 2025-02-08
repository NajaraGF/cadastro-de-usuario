Feature: Validar o Cadastro de Usuário
  Como um usuário,
  Eu quero validar o cadastro de usuário,
  Para que eu possa cadastrar um novo usuário no site Guia de Motéis

  Scenario: Deixar campos obrigatórios vazios e exibir mensagens de erro
    Given que o usuário acessa a página inicial
    When o usuário clica em "login" para acessar o formulário de cadastro
    And no modal, o usuário clica em "Cadastre-se grátis!"
    And o usuário deixa todos os campos obrigatórios vazios
    And o usuário clica no botão "Confirmar cadastro"
    Then o usuário visualiza as mensagens de erro para cada campo obrigatório
