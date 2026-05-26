const { users } = require("../models/userModel");
const bcrypt = require("bcrypt");

// Exibir formulário de login
exports.showLogin = (req, res) => {
  res.render("login", { error: null });
};

// Processar login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Buscar usuário pelo e-mail
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.render("login", { error: "E-mail ou senha inválidos" });
  }

  // Comparar senha (se estiver usando bcrypt, descomente a linha apropriada)
  // const senhaValida = await bcrypt.compare(password, user.password);
  const senhaValida = (password === user.password);   // comparação em texto puro

  if (!senhaValida) {
    return res.render("login", { error: "E-mail ou senha inválidos" });
  }

  // Salvar dados do usuário na sessão (sem a senha)
  req.session.user = {
    id: user.id,
    name: user.name,
    email: user.email
  };

  res.redirect("/");
};

// Logout
exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.redirect("/");
    }
    res.redirect("/login");
  });
};