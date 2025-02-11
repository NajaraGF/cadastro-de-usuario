
# 🚀 Testes de Performance (k6)

Esta pasta contém os testes de performance utilizando **k6**, simulando 100 usuários simultâneos acessando a API.

## 📌 Como Executar os Testes

### 🔹 **Instalar o k6**
Windows (via Chocolatey):
```sh
choco install k6

macOS/Linux:
  brew install k6

🔹 Rodar o Teste de Carga:
  k6 run performance-tests/load-test.js

🔹 Gerar um Relatório: 
  k6 run performance-tests/load-test.js --out json=performance-tests/results.json
