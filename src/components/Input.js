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
      icon = null,
      endIcon = null,
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
        <div className="relative">
          {icon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
              {icon}
            </span>
          )}
          {endIcon && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
              {endIcon}
            </span>
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
              w-full px-3 py-2 rounded-lg border
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
              ${icon ? "pl-10" : ""}
              ${endIcon ? "pr-10" : ""}
              ${className}
            `}
            {...props}
          />
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
  }
);

Input.displayName = "Input";

export default Input;
