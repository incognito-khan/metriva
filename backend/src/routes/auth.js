const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const { validate, registerSchema, loginSchema } = require("../validators/auth");

// Register route
router.post("/register", validate(registerSchema), register);

// Login route
router.post("/login", validate(loginSchema), login);

module.exports = router;
