# 🚀 Projeto de Automação com Cypress

Este é um projeto de automação de testes **end-to-end (E2E)** desenvolvido com **[Cypress](https://www.cypress.io/)** para testar o site [SauceDemo](https://www.saucedemo.com/v1/). Ele inclui testes de login, validações de campos e cenários de uso do carrinho de compras.

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Cypress.png" alt="Cypress Logo" width="200"/>
</p>

---

## 📋 Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando os Testes](#executando-os-testes)
- [Estrutura do Projeto](#estrutura-do-projeto)

- [Contribuição](#contribuição)
- [Licença](#licença)

---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de que você possui as seguintes ferramentas instaladas no seu ambiente:

- **Node.js**: [Download aqui](https://nodejs.org/) 👈
- **npm ou yarn**: Incluído no Node.js ou disponível separadamente.
- **Git**: [Download aqui](https://git-scm.com/) 🛠️

---

## 🚀 Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/jhonatan-goncalves-pereira/automatizando-com-cypress.git
   cd automatizando-com-cypress
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

3. Verifique se o Cypress foi instalado corretamente:
   ```bash
   npx cypress --version
   ```

---

## ▶️ Executando os Testes

### Modo Interativo 🖥️
Para abrir a interface gráfica do Cypress e executar os testes manualmente:
```bash
npx cypress open
```

### Modo Headless 🤖
Para executar os testes sem a interface gráfica (modo headless):
```bash
npx cypress run
```

### Executar Testes Específicos 🔍
Você pode executar um arquivo de teste específico:
Exemplo login:
```bash
npx cypress run --spec "cypress/e2e/loginTests.spec.js"
```

---

## 📂 Estrutura do Projeto

O projeto segue a estrutura padrão do Cypress:

```
.
├── cypress/
│   ├── e2e/                # 📄 Arquivos de teste E2E
│   │   └── loginTests.spec.js  # 🔐 Testes de login
│   ├── fixtures/          # 📊 Dados estáticos para testes
│   ├── support/           # 🛠️ Comandos personalizados e configurações
│   └── plugins/           # 🌟 Plugins do Cypress
├── node_modules/          # 📦 Dependências do projeto (ignoradas no .gitignore)
├── cypress.config.js      # ⚙️ Configuração do Cypress
├── package.json           # 📦 Dependências e scripts do projeto
├── README.md              # 📖 Este arquivo
└── .gitignore             # 🚫 Arquivos ignorados pelo Git
```

## 🤝 Contribuição

Se desejar contribuir para este projeto:

1. Faça um fork do repositório. 🍴
2. Crie uma branch para suas alterações:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Envie suas alterações:
   ```bash
   git commit -m "Adiciona nova funcionalidade ✨"
   git push origin feature/nova-funcionalidade
   ```
4. Abra um Pull Request explicando suas mudanças. 📝

---

## 📜 Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 📄

---
