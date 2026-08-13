import { apiClient } from "./client";

/**
 * Authentication API functions
 * These functions make HTTP requests to the backend authentication endpoints
 */

export const authApi = {
  /**
   * Register a new user
   * POST /auth/register
   */
  register: async (name, email, password) => {
    return apiClient("/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: name.trim(),
        email: email.toLowerCase().trim(),
        password,
      }),
    });
  },

  /**
   * Verify OTP for email verification
   * POST /auth/verify-otp
   */
  verifyOtp: async (email, otp) => {
    return apiClient("/auth/verify-otp", {
      method: "POST",
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
        otp,
      }),
    });
  },

  /**
   * Resend OTP for email verification
   * POST /auth/resend-otp
   */
  resendOtp: async (email) => {
    return apiClient("/auth/resend-otp", {
      method: "POST",
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
      }),
    });
  },

  /**
   * Login user
   * POST /auth/login
   */
  login: async (email, password) => {
    return apiClient("/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
        password,
      }),
    });
  },

  /**
   * Logout user
   * POST /auth/logout
   */
  logout: async () => {
    return apiClient("/auth/logout", {
      method: "POST",
    });
  },

  /**
   * Request password reset
   * POST /auth/forgot-password
   */
  forgotPassword: async (email) => {
    return apiClient("/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
      }),
    });
  },

  /**
   * Reset password with token
   * POST /auth/reset-password
   */
  resetPassword: async (token, password) => {
    return apiClient("/auth/reset-password", {
      method: "POST",
      body: JSON.stringify({
        token,
        password,
      }),
    });
  },

  /**
   * Get current authenticated user
   * GET /auth/me
   */
  getCurrentUser: async () => {
    return apiClient("/auth/me", {
      method: "GET",
    });
  },
};
