const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/auth-check');
const UserController = require('../controllers/user');

// GET all orders from DB
router.post("/signup", UserController.user_signup);

router.post("/login", UserController.user_login);

// DELETE a user
router.delete("/:userId", checkAuth, UserController.user_delete);

module.exports = router;