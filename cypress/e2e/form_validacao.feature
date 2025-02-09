Feature: Validar o Cadastro de Usuário
  Como um usuário,
  Eu quero validar o cadastro de usuário,
  Para que eu possa cadastrar um novo usuário no site Guia de Motéis

  Scenario: Deixar campos obrigatórios vazios e exibir mensagens de erro
    Given que o usuário acessa a página inicial
    When o usuário clica em "Cadastre-se grátis!" para acessar o formulário de cadastro
    And o usuário deixa todos os campos obrigatórios vazios
    And o usuário clica no botão "Confirmar cadastro"
    Then o usuário visualiza as mensagens de erro para cada campo obrigatório:
      | Campo              | Mensagem de Erro                                       |
      | Nome Completo      | O campo Nome Completo é obrigatório.                   |
      | Sexo               | Selecione uma opção de sexo.                           |
      | Data de Nascimento | O campo Data de Nascimento é obrigatório.              |
      | CEP                | O campo CEP é obrigatório.                             |
      | E-mail             | O campo E-mail é obrigatório.                          |
      | Senha              | A senha deve ter no mínimo 8 caracteres, incluindo uma letra maiúscula e um número. |
      
