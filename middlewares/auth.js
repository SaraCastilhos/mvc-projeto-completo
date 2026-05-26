// middlewares/auth.js
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    return next();   // usuário logado → segue para a rota solicitada
  }
  // não logado → redireciona para a tela de login
  res.redirect("/login");
}

module.exports = isAuthenticated;