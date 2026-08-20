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
        endIcon={
          <button
            type="button"
            onClick={togglePassword}
            disabled={disabled}
            className="flex items-center justify-center p-0 border-0 bg-transparent cursor-pointer disabled:opacity-50"
            tabIndex={-1}
          >
            {showPassword ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 hover:text-zinc-600">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 hover:text-zinc-600">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        }
        {...props}
      />
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
