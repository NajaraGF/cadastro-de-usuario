# 🚀 Cadastro de Usuário - Testes Automatizados

Este repositório contém um **formulário de cadastro de usuário** e testes automatizados para validação da aplicação.

## 📌 Tecnologias Utilizadas
- **HTML/CSS** → Interface do formulário  
- **Cypress** → Testes End-to-End (E2E)  
- **Postman/Newman** → Testes de API  
- **k6** → Testes de Performance  

---

## **📌 Como Rodar o Projeto Localmente**
1️⃣ **Clone o repositório e acesse a pasta:**
```sh
git clone https://github.com/NajaraGF/cadastro-de-usuario.git
cd cadastro-de-usuario
🚀 Como Rodar o Formulário HTML
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
cpp
Copiar
Editar
http://127.0.0.1:5500/
✔ Opção 2: Python HTTP Server
Se tiver Python instalado, execute este comando no terminal:

sh
Copiar
Editar
python -m http.server
Acesse no navegador:

arduino
Copiar
Editar
http://localhost:8000
✔ Opção 3: HTTP Server com Node.js
Instale o http-server globalmente (se ainda não tiver):
sh
Copiar
Editar
npm install -g http-server
Execute o servidor:
sh
Copiar
Editar
http-server
Acesse no navegador:
arduino
Copiar
Editar
http://localhost:8080
📌 Executando os Testes Automatizados
🧪 Testes End-to-End (Cypress)
Instale as dependências:
sh
Copiar
Editar
npm install
Abra o Cypress:
sh
Copiar
Editar
npx cypress open
Execute os testes em:
bash
Copiar
Editar
cypress/e2e/cadastrar_usuario.cy.js
🔹 Testes de API (Postman/Newman)
Importe o arquivo no Postman:
bash
Copiar
Editar
api-tests/cadastro-api.postman_collection.json
Execute via Postman Runner ou via linha de comando (Newman):
sh
Copiar
Editar
newman run api-tests/cadastro-api.postman_collection.json
🚀 Testes de Performance (k6)
Instale o k6:
sh
Copiar
Editar
choco install k6  # Windows
brew install k6   # macOS/Linux
Execute o teste de carga:
sh
Copiar
Editar
k6 run performance-tests/load-test.js
Para gerar um relatório:
sh
Copiar
Editar
k6 run performance-tests/load-test.js --out json=performance-tests/results.json
📂 Estrutura do Repositório
bash
Copiar
Editar
cadastro-de-usuario/
├── api-tests/               # Testes de API (Postman)
├── cypress/                 # Testes End-to-End (Cypress)
├── performance-tests/        # Testes de Performance (k6)
├── index.html                # Formulário HTML
├── README.md                 # Documentação geral
└── package.json              # Dependências do projeto
🤝 Contribuindo
Sinta-se à vontade para abrir issues e enviar pull requests com melhorias!

📜 Licença
Este projeto é livre para uso educacional e profissional. 😊
