# 📦🔐 Sistema de Gerenciamento de Produtos com Autenticação — MVC + Express

![GitHub repo size](https://img.shields.io/github/repo-size/SaraCastilhos/mvc-projeto-completo)
![Node Version](https://img.shields.io/badge/node-%3E%3D18-blue)
![Express](https://img.shields.io/badge/Express-%23404d59.svg?logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-%23B4CA65.svg?logo=ejs&logoColor=black)

Aplicação web desenvolvida como atividade prática para a disciplina **Criação de Sites**, aplicando o padrão de arquitetura **MVC (Model-View-Controller)** com **Node.js** e **Express**. O sistema permite cadastrar, listar, editar, excluir e buscar produtos, e protege todas as páginas internas com **autenticação de usuários via sessão** (`express-session`).

Este repositório consolida em um único projeto as três etapas desenvolvidas ao longo da disciplina: CRUD de produtos, autenticação com sessão, e documentação profissional (JSDoc + README).

---

## 🛠️ Tecnologias Utilizadas

- **Runtime:** Node.js
- **Framework Web:** Express
- **Template Engine:** EJS (com partials para elementos reutilizáveis, como a navegação)
- **Sessão:** express-session
- **Front-end:** HTML5 + CSS3 modular

---

## ✨ Funcionalidades Principais

### Autenticação
- [x] Tela de login com validação de credenciais (e-mail + senha)
- [x] Persistência de sessão durante 30 minutos
- [x] Proteção de rotas — todas as páginas exigem login, exceto `/login`
- [x] Logout — destroi a sessão e impede acesso posterior
- [x] Listagem de usuários cadastrados (`/users`)

### Produtos (CRUD)
- [x] Páginas institucionais: Home, Sobre, Contato
- [x] Listagem de produtos em tabela responsiva
- [x] Cadastro de produto com validação de campos obrigatórios
- [x] Edição de produto com formulário dinâmico
- [x] Exclusão de produto
- [x] Busca por nome (case insensitive)
- [x] Feedback ao usuário via mensagens de sucesso/erro
- [x] Armazenamento em memória (dados resetam ao reiniciar o servidor)

### Documentação
- [x] JSDoc em todos os Controllers e Models (`authController`, `produtoController`, `userController`, `userModel`)
- [x] README profissional com badges, stack, guia de instalação e variáveis de ambiente

---

## 📦 Como Executar o Projeto

### Pré-requisitos
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (versão 18 ou superior)

### Passos para Instalação

1. Clone o repositório
```bash
git clone https://github.com/SaraCastilhos/mvc-projeto-completo.git
cd mvc-projeto-completo
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor
```bash
npm start
```

4. Abra o navegador e acesse:
   http://localhost:3000
   Você será redirecionado automaticamente para a tela de login.

---

## 🔑 Variáveis de Ambiente

O projeto funciona sem `.env` (usa uma chave de sessão padrão no código). Para produção, crie um `.env` na raiz:

```env
SESSION_SECRET=uma_chave_muito_segura_e_aleatoria
PORT=3000
```

> 🔒 Nunca versione o arquivo `.env`. Ele já está incluído no `.gitignore`.

---

## 🧪 Credenciais de Teste

| E-mail             | Senha    |
|--------------------|----------|
| admin@email.com    | 123456   |
| joao@email.com     | joao123  |

> As senhas estão armazenadas em texto puro, apenas para fins didáticos.

---

## 📁 Estrutura do Projeto (MVC)

         mvc-projeto-completo/
         ├── controllers/
         │ ├── produtoController.js
         │ ├── authController.js
         │ └── userController.js
         ├── middlewares/
         │ └── auth.js
         ├── models/
         │ ├── produtoModel.js
         │ └── userModel.js
         ├── public/
         │ └── CSS/
         │ ├── global.css
         │ ├── home.css
         │ ├── login.css
         │ ├── produtos.css
         │ ├── contato.css
         │ └── sobre.css
         ├── routes/
         │ ├── produtoRoutes.js
         │ ├── authRoutes.js
         │ └── userRoutes.js
         ├── views/
         │ ├── partials/
         │ │ └── nav.ejs
         │ ├── home.ejs
         │ ├── sobre.ejs
         │ ├── contato.ejs
         │ ├── produtos.ejs
         │ ├── login.ejs
         │ └── users.ejs
         ├── app.js
         ├── package.json
         ├── .gitignore
         └── README.md

---

## 📌 Observações Técnicas

- **Armazenamento em memória:** os dados de produtos e usuários são perdidos ao reiniciar o servidor.
- **Middleware de proteção:** todas as rotas registradas após o middleware de autenticação em `app.js` exigem login.
- **Arquivos estáticos:** CSS servido via `express.static`.
- **Navegação:** o menu (`nav`) é um partial EJS (`views/partials/nav.ejs`), reaproveitado em todas as páginas autenticadas para manter consistência visual.

---

## 👩‍💻 Autora

**Sara Amabili Castilhos**
- GitHub: [@SaraCastilhos](https://github.com/SaraCastilhos)
- Desenvolvido como atividade prática para a disciplina **Criação de Sites** — 2026.