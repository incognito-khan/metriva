"use client";

import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      type = "text",
      id,
      name,
      value,
      onChange,
      onBlur,
      placeholder,
      autoComplete,
      error,
      disabled = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const errorId = error ? `${id}-error` : undefined;
    const hasError = !!error;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-zinc-900 dark:text-zinc-50"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={errorId}
          className={`
            px-3 py-2 rounded-lg border
            text-sm text-zinc-900 dark:text-zinc-50
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
          {...props}
        />
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
  }
);

Input.displayName = "Input";

export default Input;
