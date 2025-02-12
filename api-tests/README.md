# 🧪 Testes de API (Postman)

Esta pasta contém os testes automatizados de API utilizando Postman e Newman.

### 📌 Como Executar os Testes

🔹 Executar via Postman

Abra o Postman

**Importe o arquivo de testes:** api-tests/cadastro-api.postman_collection.json

Rode os testes manualmente via Postman Runner.

🔹 Executar via Linha de Comando (Newman)

Caso tenha o Newman instalado, rode:
```sh
newman run api-tests/cadastro-api.postman_collection.json
```

### 📊 Relatório de Resultados dos Testes

✅ Status Codes Validados:

- 200 OK → Requisição bem-sucedida

- 201 Created → Usuário criado com sucesso

- 400 Bad Request → Requisição inválida (erro do cliente)

- 500 Internal Server Error → Erro interno no servidor

Esses testes garantem a confiabilidade e robustez da API, validando diferentes cenários de resposta. 🚀


📌 Os resultados dos testes automatizados podem ser encontrados no seguinte arquivo:

[GET Users.postman_test_run.json](https://github.com/user-attachments/files/18743144/GET.Users.postman_test_run.json)
