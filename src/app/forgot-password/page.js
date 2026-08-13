"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "../../hooks/useForm";
import { useForgotPassword } from "../../hooks/queries/auth";
import Input from "../../components/Input";
import FormError from "../../components/FormError";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthHeader from "../../components/auth/AuthHeader";
import SubmitButton from "../../components/auth/SubmitButton";
import SecondaryButton from "../../components/auth/SecondaryButton";
import AuthFooter from "../../components/auth/AuthFooter";
import SuccessState from "../../components/auth/SuccessState";
import GuestRoute from "../../components/auth/GuestRoute";
import { validateEmail } from "../../lib/validation";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const forgotPasswordMutation = useForgotPassword();

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
    resetForm,
  } = useForm(
    {
      email: "",
    },
    {
      email: validateEmail,
    },
  );

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAllTouched();

    if (!validateForm()) {
      return;
    }

    setGeneralError("");

    forgotPasswordMutation.mutate(
      {
        email: formData.email,
      },
      {
        onSuccess: () => {
          setIsSubmitted(true);
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

  const handleTryAnother = () => {
    setIsSubmitted(false);
    resetForm();
  };

  if (isSubmitted) {
    return (
      <GuestRoute>
        <AuthLayout>
          <SuccessState
            title="Check your email"
            message="If an account exists with this email, a password reset link has been sent."
            actionText="Try another email"
            onAction={handleTryAnother}
            secondaryActionText="Back to sign in"
            secondaryAction={() => router.push("/login")}
          />
        </AuthLayout>
      </GuestRoute>
    );
  }

  return (
    <GuestRoute>
      <AuthLayout>
        <AuthHeader
          title="Forgot password?"
          subtitle="Enter your email to receive a reset link"
        />

        <FormError error={generalError} />

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
            disabled={forgotPasswordMutation.isPending}
          />

          <SubmitButton
            isLoading={forgotPasswordMutation.isPending}
            loadingText="Sending..."
          >
            Send reset link
          </SubmitButton>
        </form>

        <AuthFooter
          text="Remember your password?"
          linkText="Sign in"
          linkHref="/login"
        />
      </AuthLayout>
    </GuestRoute>
  );
}
