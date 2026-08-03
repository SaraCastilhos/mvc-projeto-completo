const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();

// VIEW ENGINE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// PARSING DE DADOS DE FORMULÁRIOS E JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ARQUIVOS ESTÁTICOS — precisa vir antes da sessão/autenticação,
// para que o CSS carregue até na tela de login
app.use(express.static(path.join(__dirname, 'public')));

// SESSÃO
app.use(session({
    secret: process.env.SESSION_SECRET || 'chaveSuperSecreta123',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 30 * 60 * 1000, // 30 minutos
        httpOnly: true,
        secure: false // altere para true em produção com HTTPS
    }
}));

// Disponibiliza o usuário logado (ou null) em todas as views
app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

// ROTAS PÚBLICAS (login/logout) — antes do middleware de proteção
const authRoutes = require('./routes/authRoutes');
app.use(authRoutes);

// A PARTIR DAQUI, TUDO EXIGE LOGIN
const isAuthenticated = require('./middlewares/auth');
app.use(isAuthenticated);

// ROTAS PROTEGIDAS
const produtoRoutes = require('./routes/produtoRoutes');
const userRoutes = require('./routes/userRoutes');
app.use('/', produtoRoutes);
app.use(userRoutes);

// SERVIDOR
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});