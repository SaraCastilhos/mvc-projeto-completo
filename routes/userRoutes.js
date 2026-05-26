const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users", userController.showUsersPage);  // em vez de userController.getUsers
router.post("/users", userController.createUser);

module.exports = router;