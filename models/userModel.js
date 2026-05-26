class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;   // em produção, armazene o hash
  }
}

// Lista de usuários "cadastrados" (simulando um banco)
const users = [
  new User(1, 'Admin', 'admin@email.com', '123456'),
  new User(2, 'João Silva', 'joao@email.com', 'joao123')
];

module.exports = { User, users };