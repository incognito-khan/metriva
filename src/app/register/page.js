"use client";

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
import {
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  getPasswordRequirements,
} from "../../lib/validation";

export default function RegisterPage() {
  const router = useRouter();
  const { handleApiCall } = useAuthApi();

  const {
    formData,
    errors,
    setErrors,
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
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    {
      name: validateName,
      email: validateEmail,
      password: validatePassword,
      confirmPassword: (value, allData) =>
        validateConfirmPassword(allData.password, value),
    },
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAllTouched();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setGeneralError("");

    const { success, fieldErrors, message } = await handleApiCall(
      "http://localhost:5000/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.toLowerCase().trim(),
          password: formData.password,
        }),
      },
      (data) => {
        // Success - redirect to verify email
        const emailParam = encodeURIComponent(
          formData.email.toLowerCase().trim(),
        );
        router.push(`/verify-email?email=${emailParam}`);
      },
      (errorMessage, backendFieldErrors) => {
        setGeneralError(errorMessage);
        setErrors(backendFieldErrors);
      },
    );

    setIsLoading(false);
  };

  const passwordRequirements = getPasswordRequirements(formData.password);

  return (
    <AuthLayout>
      <AuthHeader title="Create an account" subtitle="Sign up to get started" />

      <FormError error={generalError} />

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={() => handleBlur("name")}
          placeholder="Enter your name"
          autoComplete="name"
          error={touched.name ? errors.name : ""}
          disabled={isLoading}
        />

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
          placeholder="Create a password"
          autoComplete="new-password"
          error={touched.password ? errors.password : ""}
          disabled={isLoading}
          showRequirements={formData.password.length > 0}
          requirements={passwordRequirements}
        />

        <PasswordInput
          label="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={() => handleBlur("confirmPassword")}
          placeholder="Confirm your password"
          autoComplete="new-password"
          error={touched.confirmPassword ? errors.confirmPassword : ""}
          disabled={isLoading}
        />

        <SubmitButton isLoading={isLoading} loadingText="Registering...">
          Register
        </SubmitButton>
      </form>

      <AuthFooter
        text="Already have an account?"
        linkText="Sign in"
        linkHref="/login"
      />
    </AuthLayout>
  );
}
