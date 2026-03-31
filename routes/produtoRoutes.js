// Mostra no terminal que o arquivo de rotas foi carregado
console.log("ROTAS CARREGADAS");


// Importa o framework Express
const express = require('express');

// Cria um objeto de rotas do Express
// Ele permite organizar as URLs separadamente do app.js
const router = express.Router();


// Importa o controller de produtos
// Esse controller contém toda a lógica do sistema
const controller = require('../controllers/produtoController');


// ROTAS DAS PÁGINAS

// Quando acessar a rota principal "/"
// chama a função home do controller
router.get('/', controller.home);

// Quando acessar "/sobre"
// chama a função sobre
router.get('/sobre', controller.sobre);

// Quando acessar "/contato"
// chama a função contato
router.get('/contato', controller.contato);


// ROTAS DE PRODUTOS

// Adiciona novo produto
// Método POST porque envia dados do formulário
router.post('/produtos', controller.adicionar);


// Lista todos os produtos
// Método GET porque apenas mostra dados
router.get('/produtos', controller.listar);


// FLUXO DE EDIÇÃO

// Ativa o modo de edição
// Redireciona para a tela com o produto selecionado
router.get('/produtos/editar/:index', controller.ativarEdicao);

// Salva as alterações feitas no produto
router.post('/produtos/salvar/:index', controller.salvarEdicao);


// EXCLUIR PRODUTO

// Exclui um produto pelo índice
// :index é um parâmetro dinâmico da URL
router.post('/produtos/excluir/:index', controller.excluir);


// Exporta as rotas para serem usadas no app.js
module.exports = router;