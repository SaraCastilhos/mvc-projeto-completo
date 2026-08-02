const { users } = require("../models/userModel");
const bcrypt = require("bcrypt");

/**
 * Exibe o formulário de login.
 * @param {import('express').Request} req - Objeto da requisição (não usado diretamente).
 * @param {import('express').Response} res - Objeto da resposta.
 */
exports.showLogin = (req, res) => {
  res.render("login", { error: null });
};

/**
 * Processa a tentativa de login.
 * @param {import('express').Request} req - Requisição contendo `email` e `password` no corpo.
 * @param {import('express').Response} res - Resposta que renderiza o dashboard ou redireciona.
 * @returns {Promise<void>} - Renderiza a view ou redireciona.
 */
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.render("login", { error: "E-mail ou senha inválidos" });
  }
  const senhaValida = (password === user.password);
  if (!senhaValida) {
    return res.render("login", { error: "E-mail ou senha inválidos" });
  }
  req.session.user = {
    id: user.id,
    name: user.name,
    email: user.email
  };
  res.redirect("/");
};

/**
 * Encerra a sessão do usuário.
 * @param {import('express').Request} req - Requisição.
 * @param {import('express').Response} res - Resposta que redireciona para /login.
 * @returns {void}
 */
exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.redirect("/");
    }
    res.redirect("/login");
  });
};