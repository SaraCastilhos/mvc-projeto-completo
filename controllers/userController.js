const { User, users } = require("../models/userModel");

/**
 * Cria um novo usuário (via API JSON).
 * @param {import('express').Request} req - Corpo com { name, email }.
 * @param {import('express').Response} res - Resposta JSON com o usuário criado.
 */
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = new User(users.length + 1, name, email, null);
  users.push(newUser);
  res.status(201).json(newUser);
};

/**
 * Retorna a lista de usuários em formato JSON.
 * @param {import('express').Request} req - Requisição.
 * @param {import('express').Response} res - Lista de usuários.
 */
exports.getUsers = (req, res) => {
  res.json(users);
};

/**
 * Renderiza a página HTML com a lista de usuários.
 * @param {import('express').Request} req - Requisição.
 * @param {import('express').Response} res - View 'users' com os dados.
 */
exports.showUsersPage = (req, res) => {
  res.render("users", { users });
};