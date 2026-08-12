"use client";

import { useState } from "react";
import Input from "./Input";

const PasswordInput = ({
  label,
  id,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  autoComplete,
  error,
  disabled = false,
  showRequirements = false,
  requirements = {},
  className = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <Input
        label={label}
        type={showPassword ? "text" : "password"}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        error={error}
        disabled={disabled}
        className={className}
        {...props}
      />
      <button
        type="button"
        onClick={togglePassword}
        disabled={disabled}
        className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed self-end"
        tabIndex={-1}
      >
        {showPassword ? "Hide" : "Show"} password
      </button>
      {showRequirements && (
        <div className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1">
          <p className="font-medium">Password must contain:</p>
          <ul className="space-y-0.5 ml-4">
            <li className={requirements.minLength ? "text-green-600 dark:text-green-400" : ""}>
              {requirements.minLength ? "✓" : "○"} At least 8 characters
            </li>
            <li className={requirements.hasUppercase ? "text-green-600 dark:text-green-400" : ""}>
              {requirements.hasUppercase ? "✓" : "○"} One uppercase letter
            </li>
            <li className={requirements.hasLowercase ? "text-green-600 dark:text-green-400" : ""}>
              {requirements.hasLowercase ? "✓" : "○"} One lowercase letter
            </li>
            <li className={requirements.hasNumber ? "text-green-600 dark:text-green-400" : ""}>
              {requirements.hasNumber ? "✓" : "○"} One number
            </li>
            <li className={requirements.hasSpecialChar ? "text-green-600 dark:text-green-400" : ""}>
              {requirements.hasSpecialChar ? "✓" : "○"} One special character (@ $ ! % * ? &)
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
