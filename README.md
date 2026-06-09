# 🔐 MVC com Autenticação – Express + Session

![GitHub repo size](https://img.shields.io/github/repo-size/SaraCastilhos/mvc-autenticacao)
![GitHub language count](https://img.shields.io/github/languages/count/SaraCastilhos/mvc-autenticacao)
![Node Version](https://img.shields.io/badge/node-%3E%3D18-blue)
![Express](https://img.shields.io/badge/Express-%23404d59.svg?logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-%23B4CA65.svg?logo=ejs&logoColor=black)

Aplicação web de exemplo que implementa **autenticação de usuários** com `express-session`, seguindo o padrão **MVC (Model-View-Controller)**. O sistema protege rotas internas, exige login para acessar o dashboard e a lista de usuários, e gerencia sessões de forma simples – ideal para entender os fundamentos de autenticação em Node.js.

---

## 🛠️ Tecnologias Utilizadas

| Categoria         | Tecnologias                                      |
|-------------------|--------------------------------------------------|
| **Runtime**       | Node.js                                          |
| **Framework**     | Express                                          |
| **Sessão**        | express-session (armazenamento em memória)       |
| **Template Engine**| EJS                                             |
| **Criptografia**  | bcrypt (instalado, mas utilizado comparação simples para testes) |
| **Armazenamento** | Array em memória (simulando banco de dados)      |

---

## ✨ Funcionalidades Principais

- [x] **Tela de login** com validação de credenciais (e-mail + senha)
- [x] **Persistência de sessão** durante 30 minutos (configurável)
- [x] **Proteção de rotas** – redireciona para `/login` se o usuário não estiver autenticado
- [x] **Dashboard pessoal** exibindo nome e e-mail do usuário logado
- [x] **Listagem de todos os usuários** (página `/users`)
- [x] **Logout** – destroi a sessão e impede acesso posterior
- [x] **Armazenamento em memória** – dados resetam ao reiniciar o servidor

---

## 🖼️ Demonstração Visual (Telas)

O projeto possui três telas principais, todas renderizadas via EJS:

| Tela         | Descrição                                                                 |
|--------------|---------------------------------------------------------------------------|
| `/login`     | Formulário com campos de e-mail e senha. Exibe mensagem de erro se as credenciais forem inválidas. |
| `/` (dashboard) | Página de boas‑vindas com o nome do usuário, e-mail, link para listar usuários e botão de sair. |
| `/users`     | Lista simples de todos os usuários cadastrados (id, nome, e-mail).        |

> 💡 *Execute o projeto localmente para navegar pelas telas. As views são minimalistas e responsivas.*

---

## 📦 Como Executar o Projeto

### 📋 Pré‑requisitos

Antes de começar, certifique‑se de ter instalado em sua máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (versão 18 ou superior)

### 🔧 Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/SaraCastilhos/mvc-autenticacao.git
   cd mvc-autenticacao
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor**
   ```bash
   node server.js
   ```
   O servidor será iniciado na porta `3000`.

4. **Abra o navegador** e acesse:
   ```
   http://localhost:3000
   ```
   Você será redirecionado automaticamente para a tela de login.

---

## 🔑 Variáveis de Ambiente e Configuração

Atualmente o projeto **não utiliza arquivo `.env`**. A chave secreta da sessão (`secret`) está fixa no código (`chaveSuperSecreta123`) e a porta é `3000`.

### 🔧 Recomendação para produção (ou melhoria do projeto)

Crie um arquivo `.env` na raiz com o seguinte conteúdo:

```env
SESSION_SECRET=uma_chave_muito_segura_e_aleatoria
PORT=3000
```

Instale o pacote `dotenv`:
```bash
npm install dotenv
```

E modifique o `server.js` para carregar as variáveis:
```javascript
require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.use(session({
  secret: process.env.SESSION_SECRET,
  // ... outras configurações
}));
```

> ⚠️ **Nunca versione o arquivo `.env`.** Ele já está incluído no `.gitignore`.

---

## 🧪 Credenciais de Teste

O sistema possui dois usuários pré‑cadastrados no array em memória (`models/userModel.js`):

| E-mail             | Senha    |
|--------------------|----------|
| admin@email.com    | 123456   |
| joao@email.com     | joao123  |

> As senhas estão armazenadas **em texto puro** (por simplicidade). Em produção, utilize `bcrypt` para hashing.

---

## 📁 Estrutura do Projeto (MVC)

```
mvc-autenticacao/
├── controllers/
│   ├── authController.js     # Lógica de login, logout e exibição da tela de login
│   └── userController.js     # Lógica para listar/criar usuários (rota /users)
├── middlewares/
│   └── auth.js               # Middleware que verifica se o usuário está autenticado
├── models/
│   └── userModel.js          # Classe User e array de usuários em memória
├── routes/
│   ├── authRoutes.js         # Rotas públicas: /login (GET e POST), /logout
│   └── userRoutes.js         # Rotas protegidas: /users (GET e POST)
├── views/
│   ├── login.ejs             # Formulário de login
│   ├── dashboard.ejs         # Página inicial após login
│   └── users.ejs             # Listagem de todos os usuários
├── server.js                 # Configuração principal (session, middlewares, rotas)
├── package.json
├── .gitignore
└── README.md                 # Este arquivo
```

---

## 🧪 Critérios de Aceite (Atendidos)

| Requisito                                                      | Status |
|----------------------------------------------------------------|--------|
| Acesso negado para rotas internas sem login (redireciona para `/login`) | ✅      |
| Login funcional com credenciais válidas                         | ✅      |
| Persistência da sessão entre páginas (dentro do tempo de expiração) | ✅      |
| Logout destrói a sessão e impede acesso posterior               | ✅      |
| Interface com EJS e separação clara entre rotas públicas e protegidas | ✅      |

---

## 📌 Observações Técnicas

- **Armazenamento em memória:** Os dados são perdidos ao reiniciar o servidor. Para persistência real, substitua o array por um banco de dados (MongoDB, PostgreSQL, etc.).
- **Senhas em texto puro:** O projeto usa comparação direta (`password === user.password`) para facilitar testes. Em um ambiente real, sempre utilize `bcrypt.compare()`.
- **Configuração da sessão:** O `cookie.secure` está `false` (funciona apenas com HTTP). Em produção com HTTPS, altere para `true`.
- **Middleware de proteção:** Todas as rotas definidas após `app.use(isAuthenticated)` exigem login – uma forma elegante de proteger múltiplas rotas de uma só vez.

---

## 👩‍💻 Autora

**Sara Amabili Castilhos**  
- GitHub: [@SaraCastilhos](https://github.com/SaraCastilhos)  
- Desenvolvido como atividade prática da disciplina **Criação de Sites** – 2026.
