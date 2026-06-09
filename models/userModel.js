/**
 * Representa um usuário do sistema.
 * @class
 */
class User {
  /**
   * Cria uma instância de User.
   * @param {number} id - Identificador único do usuário.
   * @param {string} name - Nome completo do usuário.
   * @param {string} email - Endereço de e-mail (único).
   * @param {string} password - Senha do usuário (em texto puro, apenas para demonstração).
   */
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

/**
 * Lista de usuários pré‑cadastrados (simula um banco de dados em memória).
 * @type {User[]}
 */
const users = [
  new User(1, 'Admin', 'admin@email.com', '123456'),
  new User(2, 'João Silva', 'joao@email.com', 'joao123')
];

module.exports = { User, users };