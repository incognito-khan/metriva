const express = require("express");
const router = express.Router();
const { register, login, refresh } = require("../controllers/authController");
const { validate, registerSchema, loginSchema } = require("../validators/auth");

// Register route
router.post("/register", validate(registerSchema), register);

// Login route
router.post("/login", validate(loginSchema), login);

// Refresh token route
router.post("/refresh", refresh);

module.exports = router;
