/**
 * @typedef {Object} Produto
 * @property {string} nome - Nome do produto.
 * @property {number} preco - Preço do produto.
 */

/**
 * Lista de produtos cadastrados (simula um banco de dados em memória).
 * @type {Produto[]}
 */
let produtos = [
  { nome: "Produto 1", preco: 10 },
  { nome: "Produto 2", preco: 20 }
];

// Exporta o array para que outros arquivos possam usar
module.exports = produtos;