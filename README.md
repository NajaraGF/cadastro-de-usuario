# Cadastro de Usuário

Este repositório contém um formulário de cadastro de usuário para testes automatizados e desenvolvimento local.

## Pré-requisitos
- **Navegador**: Qualquer navegador moderno (Chrome, Firefox, Edge, etc.).
- **Editor de Código**: Recomenda-se o Visual Studio Code.
- **Servidor Local**: Python, Node.js ou a extensão Live Server no VS Code.

## Como Executar o Projeto Localmente

### 1. Clonar o Repositório
Primeiro, clone este repositório no seu computador:
```bash
git clone https://github.com/seu-usuario/cadastro-usuario.git
cd cadastro-usuario
```

### 2. Abrir o Arquivo HTML Diretamente
Você pode abrir o arquivo `index.html` diretamente no navegador:
- Navegue até a pasta onde o arquivo está localizado.
- Clique duas vezes no arquivo `index.html`.

### 3. Usar um Servidor Local
Para testar o projeto em um servidor local (necessário para alguns testes):

#### Opção 1: Live Server (VS Code)
1. Instale a extensão **Live Server** no VS Code.
2. Clique com o botão direito no arquivo `index.html` e escolha **Open with Live Server**.
3. O navegador abrirá automaticamente o site em um endereço como `http://127.0.0.1:5500/`.

#### Opção 2: Python HTTP Server
1. Abra o terminal na pasta do projeto.
2. Execute o comando:
   ```bash
   python -m http.server
   ```
3. Acesse `http://localhost:8000` no navegador.

#### Opção 3: HTTP Server com Node.js
1. Instale o pacote `http-server` globalmente, se ainda não tiver:
   ```bash
   npm install -g http-server
   ```
2. Inicie o servidor:
   ```bash
   http-server
   ```
3. Acesse `http://localhost:8080` no navegador.

## Executando os Testes com Cypress

### 1. Instalar as Dependências
Certifique-se de que o Node.js está instalado. No terminal, dentro do diretório do projeto, execute:
```bash
npm install
```

### 2. Abrir o Cypress
Após instalar as dependências, execute:
```bash
npx cypress open
```

### 3. Rodar os Testes
No painel do Cypress, escolha o arquivo de teste desejado (ex.: `cypress/e2e/cadastrar_usuario.cy.js`) e execute-o.

## Estrutura do Projeto
```
.
├── cypress/                # Testes automatizados
│   └── e2e/               # Casos de teste Cypress
├── index.html              # Formulário HTML principal
├── README.md               # Instruções do projeto
└── package.json            # Dependências do Cypress
```

## Contribuindo
Sinta-se à vontade para abrir issues e enviar pull requests com melhorias ou sugestões!
