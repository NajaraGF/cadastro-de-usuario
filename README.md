# 🚀 Cadastro de Usuário - Testes Automatizados

Este repositório contém um formulário de cadastro de usuário e testes automatizados para validação da aplicação.


## 📌 Tecnologias Utilizadas

 - **HTML/CSS** → Interface do formulário
 - **Cypress** → Testes End-to-End (E2E)
 - **Postman/Newman** → Testes de API
 - **k6** → Testes de Performance
 - **GitHub Actions** → Integração Contínua (CI) para execução automática dos testes
   

## 📌 Como Rodar o Projeto Localmente

1️⃣ Clone o repositório e acesse a pasta:

```sh
git clone https://github.com/NajaraGF/cadastro-de-usuario.git
cd cadastro-de-usuario

```

## 🚀 Como Rodar o Formulário HTML

Para visualizar e testar o formulário de cadastro, você pode abrir o arquivo index.html diretamente no navegador ou usar um servidor local.

🔹 1. Abrir Diretamente no Navegador

Navegue até a pasta do projeto.

Clique duas vezes no arquivo index.html.

🔹 2. Usar um Servidor Local

Se precisar testar requisições de API ou quiser um ambiente mais próximo da produção, use um servidor local:

✔ Opção 1: Live Server (VS Code)

Instale a extensão Live Server no VS Code.

Clique com o botão direito no index.html e escolha "Open with Live Server".

O navegador abrirá automaticamente em:
```sh
http://127.0.0.1:5500/
```

✔ Opção 2: Python HTTP Server

Se tiver Python instalado, execute este comando no terminal:
```sh
python -m http.server
```
Acesse no navegador:
```sh
http://localhost:8000
```

✔ Opção 3: HTTP Server com Node.js

Instale o http-server globalmente (se ainda não tiver):
```sh
npm install -g http-server
```

Execute o servidor:
```sh
http-server
```

Acesse no navegador:
```sh
http://localhost:8080
```

## 📌 Executando os Testes Automatizados

## 🧪 Testes End-to-End (Cypress)

- Instale as dependências:
```sh
npm install
```
- Abra o Cypress:
```sh
npx cypress open
```
- Execute os testes em:
```sh
 cypress/e2e/cadastrar_usuario.cy.js
```
🔹 Testes de API (Postman/Newman)

 - Importe o arquivo no Postman:
```sh
 api-tests/cadastro-api.postman_collection.json
```
- Execute via Postman Runner ou via linha de comando (Newman):
```sh
newman run api-tests/cadastro-api.postman_collection.json
```

## 🚀 Testes de Performance (k6)

- Instale o k6:
```sh
choco install k6  # Windows
brew install k6   # macOS/Linux
```
- Execute o teste de carga:
```sh
k6 run performance-tests/load-test.js
```
- Para gerar um relatório:
```sh
k6 run performance-tests/load-test.js --out json=performance-tests/results.json
```

##⚙️ Integração Contínua (CI) com GitHub Actions
Este projeto utiliza GitHub Actions para rodar os testes automaticamente a cada **push** ou **pull request** na branch **main**.

📌 O workflow do CI está localizado em:

```bash
.github/workflows/ci.yml
```
🔹 Execução automática dos testes Cypress:
Sempre que houver uma atualização no repositório, os testes serão executados automaticamente no GitHub Actions.

📌 Para acompanhar as execuções do pipeline:
1️⃣ Acesse a aba Actions no GitHub.
2️⃣ Clique no workflow mais recente para ver os logs e resultados dos testes.

## 📊 Relatório de Resultados dos Testes

✅ Testes End-to-End (Cypress)

 - Total de testes: 4

 - Todos os testes passaram com sucesso ✅

 - Tempo total de execução: 13s

 - Nenhum erro encontrado


✅ Testes de API (Postman/Newman)

 - Total de testes executados: 4

 - Status code esperados (200, 400, 500) validados corretamente

 - Nenhuma falha nos endpoints

 - Detalhes:

    - Validação da API de Usuários → 200 OK ✅ (Tempo: 102ms)

    - Criar Novo Usuário → 201 Created ✅ (Tempo: 367ms)

    - Requisição Inválida → 400 Bad Request ✅ (Tempo: 699ms)

    - Erro Interno do Servidor → 500 Internal Server Error ✅ (Tempo: 832ms)


✅ Testes de Performance (k6)

 - Usuários simulados: 100 concorrentes

 - Tempo médio de resposta: ~31.79ms

 - Nenhum erro encontrado ✅


# 📂 Estrutura do Repositório

```bash
cadastro-de-usuario/
├── .github/workflows/          # Arquivos do CI (GitHub Actions)
├── api-tests/                  # Testes de API (Postman)
├── cypress/                    # Testes End-to-End (Cypress)
├── performance-tests/           # Testes de Performance (k6)
├── index.html                   # Formulário HTML
├── README.md                    # Documentação geral
├── package.json                 # Dependências do projeto
└── cypress.config.js            # Configuração do Cypress
```


# 🤝 Contribuindo

Sinta-se à vontade para abrir issues e enviar pull requests com melhorias!


# 📜 Licença

Este projeto é livre para uso educacional e profissional. 😊

