const express = require("express");
const session = require("express-session");
const app = express();

// Configuração da sessão (antes das rotas)
app.use(session({
  secret: 'chaveSuperSecreta123',  // em produção, use variável de ambiente
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 30 * 60 * 1000,        // 30 minutos
    httpOnly: true,
    secure: false                  // true apenas em produção com HTTPS
  }
}));

// Configurações do Express
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // para processar formulários
app.set('view engine', 'ejs');                   // usando EJS como view engine
app.set('views', './views');                     // pasta onde estão os templates

// Importação das rotas
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");  // criaremos em breve

// Middleware global para disponibilizar o usuário da sessão em todas as views
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// Rotas públicas (login, logout) – devem vir antes do middleware de proteção
app.use(authRoutes);

// Aplicar middleware de autenticação em todas as rotas seguintes
const isAuthenticated = require("./middlewares/auth");
app.use(isAuthenticated);   // a partir daqui, todas as rotas exigem login

// Rotas protegidas (que exigem autenticação)
app.use(userRoutes);

// Rota para a página inicial (dashboard) – pode ser uma view simples
app.get("/", (req, res) => {
  res.render("dashboard", { user: req.session.user });
});

// Inicialização do servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));