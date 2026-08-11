const User = require("../models/User");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/tokens");
const config = require("../config/env");

// Register a new user
const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Normalize email for consistency
    const normalizedEmail = email.toLowerCase().trim();

    // Check if user already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists",
      });
    }

    // Create new user (password will be hashed by User model pre-save middleware)
    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password,
    });

    // Return safe user data (password is excluded by toJSON method)
    res.status(201).json({
      success: true,
      message: "Account created successfully",
      data: {
        user: user.toJSON(),
      },
    });
  } catch (error) {
    // Handle MongoDB duplicate key error (race condition)
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists",
      });
    }

    // Pass other errors to the error handling middleware
    next(error);
  }
};

// Login user
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Normalize email for consistency
    const normalizedEmail = email.toLowerCase().trim();

    // Find user by email and explicitly select password field
    // Password is normally excluded by select: false in the User model
    const user = await User.findOne({ email: normalizedEmail }).select(
      "+password",
    );

    // If user doesn't exist or password doesn't match, return generic error
    // This prevents account enumeration
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare password using the User model's comparePassword method
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate access and refresh tokens
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    // Determine cookie settings based on environment
    const isProduction = config.nodeEnv === "production";
    const baseCookieOptions = {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "strict" : "lax",
    };

    // Set access token cookie (15 minutes)
    res.cookie("accessToken", accessToken, {
      ...baseCookieOptions,
      maxAge: 15 * 60 * 1000, // 15 minutes in milliseconds
    });

    // Set refresh token cookie (7 days)
    res.cookie("refreshToken", refreshToken, {
      ...baseCookieOptions,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    });

    // Return safe user data (password is excluded by toJSON method)
    // Tokens are NOT included in the JSON response - they're in HttpOnly cookies
    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        user: user.toJSON(),
      },
    });
  } catch (error) {
    // Pass errors to the error handling middleware
    next(error);
  }
};

module.exports = {
  register,
  login,
};
