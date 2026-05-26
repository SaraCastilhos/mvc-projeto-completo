const { User, users } = require("../models/userModel");

// Criar usuário
exports.createUser = (req, res) => {
   const { name, email } = req.body;
   const newUser = new User(users.length + 1, name, email);
   users.push(newUser);
   res.status(201).json(newUser);
};

// Listar usuários
exports.getUsers = (req, res) => {
   res.json(users);
};

//Renderizar a view
exports.showUsersPage = (req, res) => {
  const { users } = require("../models/userModel");
  res.render("users", { users });
};