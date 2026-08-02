const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Rota para exibir o formulário de login
router.get("/login", authController.showLogin);

// Rota para processar o login (POST)
router.post("/login", authController.login);

// Rota para logout
router.get("/logout", authController.logout);

module.exports = router;