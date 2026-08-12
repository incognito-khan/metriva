"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "../../hooks/useForm";
import { useAuthApi } from "../../hooks/useAuthApi";
import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";
import FormError from "../../components/FormError";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthHeader from "../../components/auth/AuthHeader";
import SubmitButton from "../../components/auth/SubmitButton";
import AuthFooter from "../../components/auth/AuthFooter";
import VerificationAlert from "../../components/auth/VerificationAlert";
import { validateEmail, validatePasswordRequired } from "../../lib/validation";

export default function LoginPage() {
  const router = useRouter();
  const { handleApiCall } = useAuthApi();

  const {
    formData,
    errors,
    touched,
    generalError,
    setGeneralError,
    isLoading,
    setIsLoading,
    handleChange,
    handleBlur,
    validateForm,
    setAllTouched,
  } = useForm(
    {
      email: "",
      password: "",
    },
    {
      email: validateEmail,
      password: validatePasswordRequired,
    },
  );

  const [showVerificationMessage, setShowVerificationMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAllTouched();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setGeneralError("");
    setShowVerificationMessage(false);

    const { success, message } = await handleApiCall(
      "http://localhost:5000/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email.toLowerCase().trim(),
          password: formData.password,
        }),
      },
      (data) => {
        router.push("/");
      },
      (errorMessage, backendFieldErrors) => {
        if (errorMessage && errorMessage.includes("verify your email")) {
          setShowVerificationMessage(true);
          setGeneralError(errorMessage);
        } else {
          setGeneralError(errorMessage);
        }
      },
    );

    setIsLoading(false);
  };

  return (
    <AuthLayout>
      <AuthHeader title="Sign in" subtitle="Welcome back" />

      <FormError error={generalError} />

      {showVerificationMessage && (
        <VerificationAlert message={generalError} email={formData.email} />
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur("email")}
          placeholder="Enter your email"
          autoComplete="email"
          error={touched.email ? errors.email : ""}
          disabled={isLoading}
        />

        <PasswordInput
          label="Password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={() => handleBlur("password")}
          placeholder="Enter your password"
          autoComplete="current-password"
          error={touched.password ? errors.password : ""}
          disabled={isLoading}
        />

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <a
              href="/forgot-password"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <SubmitButton isLoading={isLoading} loadingText="Logging in...">
          Sign in
        </SubmitButton>
      </form>

      <AuthFooter
        text="Don't have an account?"
        linkText="Sign up"
        linkHref="/register"
      />
    </AuthLayout>
  );
}
