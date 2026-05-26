# 🔐 MVC com Autenticação (Express + Session)

Projeto de exemplo implementando autenticação de usuários com `express-session`, seguindo o padrão MVC (Model-View-Controller). O sistema protege todas as rotas internas, exigindo login para qualquer acesso.

## 📦 Tecnologias utilizadas

- Node.js
- Express
- express-session
- EJS (templates)
- bcrypt (instalado, mas usando comparação simples para testes)

## 🚀 Como executar

1. Clone o repositório:
   
   ```bash
   git clone https://github.com/SaraCastilhos/mvc-autenticacao.git

Acesse a pasta:

    cd mvc-autenticacao

Instale as dependências:

    npm install

Inicie o servidor:

    node server.js


Abra o navegador em:
http://localhost:3000


## 🔑 Credenciais de teste

E-mail                Senha

admin@email.com	      123456

joao@email.com	      joao123

## 📁 Estrutura do projeto

      ├── controllers/       # Lógica de login, logout e usuários
      ├── middlewares/       # Middleware de autenticação
      ├── models/            # Modelo User e dados em memória
      ├── routes/            # Rotas públicas (auth) e protegidas (users)
      ├── views/             # Templates EJS (login, dashboard, lista)
      ├── server.js          # Configuração principal
      ├── package.json
      └── .gitignore

## 🧪 Critérios de aceite atendidos

✅ Acesso negado para rotas internas sem login (redireciona para /login)

✅ Login funcional com credenciais válidas

✅ Persistência da sessão entre páginas

✅ Logout destrói a sessão e impede acesso posterior

## 📌 Observações

Os usuários estão armazenados em um array na memória (simulando um banco). Ao reiniciar o servidor, os dados são perdidos.

Para produção, recomenda-se usar um banco de dados real e variáveis de ambiente para o secret da sessão.


Desenvolvido como atividade prática da disciplina Criação de Sites 2026.
