// Importa o framework Express
// Ele será usado para criar o servidor
const express = require('express');


// Cria a aplicação principal
// "app" controla todo o sistema
const app = express();


// Importa as rotas do sistema
// Aqui ele puxa o arquivo produtoRoutes.js
const produtoRoutes = require('./routes/produtoRoutes');


// CONFIGURAÇÕES

// Define o EJS como motor de visualização
// Assim podemos renderizar arquivos .ejs
app.set('view engine', 'ejs');


// Permite ler dados enviados por formulários
// Ex: nome, preço, email etc
app.use(express.urlencoded({ extended: true }));


// Define a pasta public como estática
// CSS, imagens e JS do front ficam aqui
app.use(express.static('public'));


// ROTAS

// Usa as rotas importadas
// Tudo começa a partir da raiz "/"
app.use('/', produtoRoutes);


// SERVIDOR

// Inicia o servidor na porta 3000
app.listen(3000, () => {

    // Mostra mensagem no terminal
    console.log('Servidor rodando em http://localhost:3000');
});