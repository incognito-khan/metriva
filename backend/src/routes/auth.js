const express = require("express");
const router = express.Router();
const {
  register,
  login,
  refresh,
  getCurrentUser,
} = require("../controllers/authController");
const { validate, registerSchema, loginSchema } = require("../validators/auth");
const authenticate = require("../middleware/auth");

// Register route
router.post("/register", validate(registerSchema), register);

// Login route
router.post("/login", validate(loginSchema), login);

// Refresh token route
router.post("/refresh", refresh);

// Get current authenticated user
router.get("/me", authenticate, getCurrentUser);

module.exports = router;
