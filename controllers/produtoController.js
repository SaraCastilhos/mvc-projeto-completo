// Importa o array de produtos do model
// Assim o controller consegue listar, adicionar, editar e excluir
const produtos = require('../models/produtoModel');


// PÁGINAS ESTÁTICAS

// Renderiza a página inicial
exports.home = (req, res) => res.render('home');

// Renderiza a página sobre
exports.sobre = (req, res) => res.render('sobre');

// Renderiza a página contato
exports.contato = (req, res) => res.render('contato');


// LISTAR PRODUTOS

// Função responsável por mostrar a tela de produtos
exports.listar = (req, res) => {

    // Captura a mensagem enviada pela URL
    // Ex: /produtos?msg=sucesso
    const mensagem = req.query.msg;

    // Captura o índice do produto que será editado
    const editIndex = req.query.edit;

    // Captura o valor digitado na busca
    // Se estiver vazio, recebe string vazia
    const busca = req.query.busca || '';

    // Filtra os produtos pelo nome
    // toLowerCase() deixa tudo minúsculo para evitar erro
    const produtosFiltrados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(busca.toLowerCase())
    );

    // Renderiza a view produtos.ejs
    // e envia os dados para a tela
    res.render('produtos', {
        produtos: produtosFiltrados,
        mensagem,
        editIndex,
        busca
    });
};


// ADICIONAR PRODUTO

// Função responsável por cadastrar novo produto
exports.adicionar = (req, res) => {

    // Pega nome e preço enviados pelo formulário
    const { nome, preco } = req.body;

    // Validação simples para evitar campos vazios
    if (!nome || !preco) {
        return res.redirect('/produtos?msg=Preencha+todos+os+campos');
    }

    // Adiciona novo objeto dentro do array
    produtos.push({
        nome: nome.trim(), // remove espaços extras
        preco: parseFloat(preco) // converte string para número
    });

    // Redireciona de volta para a página com mensagem
    res.redirect('/produtos?msg=Produto+adicionado+com+sucesso');
};


// EXCLUIR PRODUTO

// Remove um produto pelo índice
exports.excluir = (req, res) => {

    // Converte o índice para número
    const index = parseInt(req.params.index);

    // Verifica se o índice existe
    if (isNaN(index) || index < 0 || index >= produtos.length) {
        return res.redirect('/produtos?msg=Produto+nao+encontrado');
    }

    // Remove 1 item na posição informada
    produtos.splice(index, 1);

    // Redireciona com mensagem
    res.redirect('/produtos?msg=Produto+excluido+com+sucesso');
};


// ATIVAR MODO EDIÇÃO

// Apenas envia o índice para a URL
// para que a view saiba qual item editar
exports.ativarEdicao = (req, res) => {

    // Pega índice da URL
    const index = parseInt(req.params.index);

    // Redireciona para a tela de produtos
    // ativando o formulário de edição
    res.redirect(`/produtos?edit=${index}`);
};


// SALVAR EDIÇÃO

// Atualiza um produto já existente
exports.salvarEdicao = (req, res) => {

    // Captura índice do produto
    const index = parseInt(req.params.index);

    // Captura os novos dados
    const { nome, preco } = req.body;

    // Validação do índice
    if (isNaN(index) || index < 0 || index >= produtos.length) {
        return res.redirect('/produtos?msg=Produto+nao+encontrado');
    }

    // Substitui o produto antigo pelo novo
    produtos[index] = {
        nome: nome.trim(),
        preco: parseFloat(preco)
    };

    // Retorna para listagem com mensagem
    res.redirect('/produtos?msg=Produto+editado+com+sucesso');
};