Feature: Validar o Cadastro de Usuário
  Como um usuário,
  Eu quero validar o cadastro de usuário,
  Para que eu possa cadastrar um novo usuário no site Guia de Motéis

  Scenario: Cadastro bem-sucedido do usuário
    Given que o usuário acessa o formulário de cadastro
    When o usuário preenche o campo "Nome Completo" com "Maria Souza"
    And o usuário seleciona a opção "Feminino" em "Sexo"
    And o usuário preenche o campo "Data de Nascimento" com "28/04/1984"
    And o usuário preenche o campo "CEP" com "05011-000"
    And o usuário preenche o campo "E-mail" com "maria@teste.com"
    And o usuário preenche o campo "Confirme e-mail" com "maria@teste.com"
    And o usuário preenche o campo "Senha" com "Teste@123"
    And o usuário clica no botão "Confirmar cadastro"
    Then o usuário visualiza a mensagem "Cadastro realizado com sucesso"


