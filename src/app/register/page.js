"use client";

import { useRouter } from "next/navigation";
import { useForm } from "../../hooks/useForm";
import { useRegister } from "../../hooks/queries/auth";
import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";
import FormError from "../../components/FormError";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthHeader from "../../components/auth/AuthHeader";
import SubmitButton from "../../components/auth/SubmitButton";
import AuthFooter from "../../components/auth/AuthFooter";
import GuestRoute from "../../components/auth/GuestRoute";
import {
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  getPasswordRequirements,
} from "../../lib/validation";

export default function RegisterPage() {
  const router = useRouter();
  const registerMutation = useRegister();

  const {
    formData,
    errors,
    setErrors,
    touched,
    generalError,
    setGeneralError,
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

    setGeneralError("");

    registerMutation.mutate(
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      },
      {
        onSuccess: () => {
          // Success - redirect to verify email
          const emailParam = encodeURIComponent(
            formData.email.toLowerCase().trim(),
          );
          router.push(`/verify-email?email=${emailParam}`);
        },
        onError: (error) => {
          setGeneralError(error.message);
          if (error.fieldErrors) {
            setErrors(error.fieldErrors);
          }
        },
      },
    );
  };

  const passwordRequirements = getPasswordRequirements(formData.password);

  return (
    <GuestRoute>
      <AuthLayout>
        <AuthHeader
          title="Create an account"
          subtitle="Sign up to get started"
        />

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
            disabled={registerMutation.isPending}
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
            disabled={registerMutation.isPending}
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
            disabled={registerMutation.isPending}
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
            disabled={registerMutation.isPending}
          />

          <SubmitButton
            isLoading={registerMutation.isPending}
            loadingText="Registering..."
          >
            Register
          </SubmitButton>
        </form>

        <AuthFooter
          text="Already have an account?"
          linkText="Sign in"
          linkHref="/login"
        />
      </AuthLayout>
    </GuestRoute>
  );
}
