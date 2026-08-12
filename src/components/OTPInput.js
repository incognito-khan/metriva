"use client";

import { useState, useRef, useEffect } from "react";

const OTPInput = ({
  label,
  id,
  name,
  value = "",
  onChange,
  error,
  disabled = false,
  length = 6,
  className = "",
}) => {
  const [otp, setOtp] = useState(value.split("").slice(0, length));
  const inputRefs = useRef([]);

  useEffect(() => {
    setOtp(value.split("").slice(0, length));
  }, [value, length]);

  const handleChange = (index, e) => {
    const newValue = e.target.value;
    
    // Only allow numeric input
    if (!/^\d*$/.test(newValue)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = newValue.slice(-1); // Take only the last character
    setOtp(newOtp);

    // Move to next input if value is entered
    if (newValue && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Call onChange with the full OTP string
    const fullOtp = newOtp.join("");
    onChange(fullOtp);
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    
    // Handle arrow key navigation
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    
    // Only allow numeric paste
    if (!/^\d+$/.test(pastedData)) {
      return;
    }

    const pastedOtp = pastedData.slice(0, length).split("");
    const newOtp = [...otp];
    
    pastedOtp.forEach((char, index) => {
      if (index < length) {
        newOtp[index] = char;
      }
    });

    setOtp(newOtp);
    onChange(newOtp.join(""));

    // Focus the next empty input or the last filled input
    const nextEmptyIndex = newOtp.findIndex((val) => !val);
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus();
    } else {
      inputRefs.current[length - 1]?.focus();
    }
  };

  const errorId = error ? `${id}-error` : undefined;
  const hasError = !!error;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={`${id}-0`}
          className="text-sm font-medium text-zinc-900 dark:text-zinc-50"
        >
          {label}
        </label>
      )}
      <div className="flex gap-2">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            id={`${id}-${index}`}
            name={`${name}-${index}`}
            value={otp[index] || ""}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            disabled={disabled}
            maxLength={1}
            autoComplete="one-time-code"
            aria-invalid={hasError}
            aria-describedby={errorId}
            className={`
              w-10 h-12 sm:w-12 sm:h-14
              text-center text-lg sm:text-xl
              font-medium
              px-0 py-2 rounded-lg border
              text-zinc-900 dark:text-zinc-50
              placeholder:text-zinc-400 dark:placeholder:text-zinc-500
              bg-white dark:bg-zinc-900
              border-zinc-300 dark:border-zinc-700
              focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-50 focus:border-transparent
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-colors
              ${hasError
                ? "border-red-500 dark:border-red-500 focus:ring-red-500 dark:focus:ring-red-500"
                : ""
              }
              ${className}
            `}
          />
        ))}
      </div>
      {error && (
        <p
          id={errorId}
          className="text-sm text-red-600 dark:text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default OTPInput;
