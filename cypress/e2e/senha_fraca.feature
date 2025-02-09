Feature: Validar o Cadastro de Usuário
  Como um usuário,
  Eu quero validar o cadastro de usuário,
  Para que eu possa cadastrar um novo usuário no site Guia de Motéis

  Scenario: Digitar uma senha fraca e exibir mensagem de erro
    Given que o usuário acessa a página inicial
    When o usuário clica em "Cadastre-se grátis!" para acessar o formulário de cadastro
    And o usuário preenche todos os campos obrigatórios corretamente
      | Campo              | Valor                |
      | Nome Completo      | Maria Souza          |
      | Sexo               | Feminino             |
      | Data de Nascimento | 1984-04-28           |
      | CEP                | 05011-000            |
      | E-mail             | maria@teste.com      |
      | Confirmação E-mail | maria@teste.com      |
      | Senha              | 12345               |
      | Confirmação Senha  | 12345               |
    And o usuário clica no botão "Confirmar cadastro"
    Then o usuário visualiza a mensagem de erro:
      | Campo  | Mensagem de Erro                                                                          |
      | Senha  | A senha deve ter no mínimo 8 caracteres, incluindo uma letra maiúscula e um número.       |

