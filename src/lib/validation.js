// Password complexity regex - must match backend exactly
const passwordComplexityRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;

// Email regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Name validation
export const validateName = (name) => {
  if (!name || name.trim() === "") {
    return "Name is required";
  }
  const trimmedName = name.trim();
  if (trimmedName.length < 2) {
    return "Name must be at least 2 characters";
  }
  if (trimmedName.length > 50) {
    return "Name cannot exceed 50 characters";
  }
  return null;
};

// Email validation
export const validateEmail = (email) => {
  if (!email || email.trim() === "") {
    return "Email is required";
  }
  const trimmedEmail = email.trim();
  if (!emailRegex.test(trimmedEmail)) {
    return "Invalid email format";
  }
  return null;
};

// Password validation (for registration/reset)
export const validatePassword = (password) => {
  if (!password) {
    return "Password is required";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters";
  }
  if (!passwordComplexityRegex.test(password)) {
    return "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
  }
  return null;
};

// Password requirements checker (for UI feedback)
export const getPasswordRequirements = (password) => {
  return {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[@$!%*?&]/.test(password),
  };
};

// Confirm password validation
export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) {
    return "Please confirm your password";
  }
  if (password !== confirmPassword) {
    return "Passwords do not match";
  }
  return null;
};

// Simple password validation (for login - just required)
export const validatePasswordRequired = (password) => {
  if (!password) {
    return "Password is required";
  }
  return null;
};

// OTP validation
export const validateOTP = (otp) => {
  if (!otp || otp.trim() === "") {
    return "OTP is required";
  }
  if (!/^\d{6}$/.test(otp.trim())) {
    return "OTP must be exactly 6 digits";
  }
  return null;
};

// Map backend errors to form fields
export const mapBackendErrors = (errors) => {
  const errorMap = {};
  
  if (Array.isArray(errors)) {
    errors.forEach((error) => {
      if (error.field && error.message) {
        errorMap[error.field] = error.message;
      }
    });
  }
  
  return errorMap;
};
