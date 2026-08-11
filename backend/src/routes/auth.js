const express = require('express');
const router = express.Router();
const { register } = require('../controllers/authController');
const { validate, registerSchema } = require('../validators/auth');

// Register route
router.post('/register', validate(registerSchema), register);

module.exports = router;