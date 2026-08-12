"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useForm } from "../../../hooks/useForm";
import { useAuthApi } from "../../../hooks/useAuthApi";
import PasswordInput from "../../../components/PasswordInput";
import FormError from "../../../components/FormError";
import AuthLayout from "../../../components/auth/AuthLayout";
import AuthHeader from "../../../components/auth/AuthHeader";
import SubmitButton from "../../../components/auth/SubmitButton";
import AuthFooter from "../../../components/auth/AuthFooter";
import {
  validatePassword,
  validateConfirmPassword,
  getPasswordRequirements,
} from "../../../lib/validation";

export default function ResetPasswordPage() {
  const router = useRouter();
  const params = useParams();
  const token = params.token;
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
      password: "",
      confirmPassword: "",
    },
    {
      password: validatePassword,
      confirmPassword: (value, allData) =>
        validateConfirmPassword(allData.password, value),
    },
  );

  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAllTouched();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setGeneralError("");
    setSuccessMessage("");

    const { success, message } = await handleApiCall(
      "http://localhost:5000/auth/reset-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
          password: formData.password,
        }),
      },
      (data) => {
        setSuccessMessage(
          "Password reset successfully! Redirecting to login...",
        );
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      },
      (errorMessage, backendFieldErrors) => {
        setGeneralError(errorMessage);
      },
    );

    setIsLoading(false);
  };

  const passwordRequirements = getPasswordRequirements(formData.password);

  return (
    <AuthLayout>
      <AuthHeader
        title="Reset your password"
        subtitle="Create a new secure password"
      />

      <FormError error={generalError} />

      {successMessage && (
        <div className="mb-6 p-3 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
          <p className="text-sm text-green-800 dark:text-green-200">
            {successMessage}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <PasswordInput
          label="New Password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={() => handleBlur("password")}
          placeholder="Create a new password"
          autoComplete="new-password"
          error={touched.password ? errors.password : ""}
          disabled={isLoading}
          showRequirements={formData.password.length > 0}
          requirements={passwordRequirements}
        />

        <PasswordInput
          label="Confirm New Password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={() => handleBlur("confirmPassword")}
          placeholder="Confirm your new password"
          autoComplete="new-password"
          error={touched.confirmPassword ? errors.confirmPassword : ""}
          disabled={isLoading}
        />

        <SubmitButton isLoading={isLoading} loadingText="Resetting...">
          Reset password
        </SubmitButton>
      </form>

      <AuthFooter
        text="Remember your password?"
        linkText="Sign in"
        linkHref="/login"
      />
    </AuthLayout>
  );
}
