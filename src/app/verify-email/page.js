"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "../../hooks/useForm";
import { useAuthApi } from "../../hooks/useAuthApi";
import Input from "../../components/Input";
import OTPInput from "../../components/OTPInput";
import FormError from "../../components/FormError";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthHeader from "../../components/auth/AuthHeader";
import SubmitButton from "../../components/auth/SubmitButton";
import SecondaryButton from "../../components/auth/SecondaryButton";
import AuthFooter from "../../components/auth/AuthFooter";
import { validateEmail, validateOTP } from "../../lib/validation";

function VerifyEmailForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { handleApiCall } = useAuthApi();

  const emailParam = searchParams.get("email");

  const {
    formData,
    setFormData,
    errors,
    touched,
    generalError,
    setGeneralError,
    isLoading,
    setIsLoading,
    handleCustomChange,
    handleBlur,
    validateForm,
    setAllTouched,
  } = useForm(
    {
      email: emailParam || "",
      otp: "",
    },
    {
      email: validateEmail,
      otp: validateOTP,
    },
  );

  const [successMessage, setSuccessMessage] = useState("");
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    if (emailParam) {
      setFormData((prev) => ({ ...prev, email: emailParam }));
    }
  }, [emailParam, setFormData]);

  const handleVerify = async (e) => {
    e.preventDefault();
    setAllTouched();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setGeneralError("");
    setSuccessMessage("");

    const { success, message } = await handleApiCall(
      "http://localhost:5000/auth/verify-otp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email.toLowerCase().trim(),
          otp: formData.otp,
        }),
      },
      (data) => {
        setSuccessMessage(
          "Email verified successfully! Redirecting to login...",
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

  const handleResendOTP = async (e) => {
    e.preventDefault();

    const emailError = validateEmail(formData.email);
    if (emailError) {
      handleBlur("email");
      return;
    }

    setIsResending(true);
    setGeneralError("");
    setSuccessMessage("");

    const { success, message } = await handleApiCall(
      "http://localhost:5000/auth/resend-otp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email.toLowerCase().trim(),
        }),
      },
      (data) => {
        setSuccessMessage("New verification code sent to your email.");
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      },
      (errorMessage, backendFieldErrors) => {
        setGeneralError(errorMessage);
      },
    );

    setIsResending(false);
  };

  return (
    <AuthLayout>
      <AuthHeader
        title="Verify your email"
        subtitle="Enter the 6-digit code sent to your email"
      />

      <FormError error={generalError} />

      {successMessage && (
        <div className="mb-6 p-3 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
          <p className="text-sm text-green-800 dark:text-green-200">
            {successMessage}
          </p>
        </div>
      )}

      <form onSubmit={handleVerify} className="space-y-6">
        <Input
          label="Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleCustomChange("email", e.target.value)}
          onBlur={() => handleBlur("email")}
          placeholder="Enter your email"
          autoComplete="email"
          error={touched.email ? errors.email : ""}
          disabled={isLoading || isResending}
        />

        <OTPInput
          label="Verification Code"
          id="otp"
          name="otp"
          value={formData.otp}
          onChange={(value) => handleCustomChange("otp", value)}
          error={touched.otp ? errors.otp : ""}
          disabled={isLoading || isResending}
          length={6}
        />

        <SubmitButton isLoading={isLoading} loadingText="Verifying...">
          Verify Email
        </SubmitButton>

        <SecondaryButton
          onClick={handleResendOTP}
          isLoading={isResending}
          loadingText="Sending..."
          disabled={isLoading}
        >
          Resend verification code
        </SecondaryButton>
      </form>

      <AuthFooter
        text="Already verified?"
        linkText="Sign in"
        linkHref="/login"
      />
    </AuthLayout>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
          Loading...
        </div>
      }
    >
      <VerifyEmailForm />
    </Suspense>
  );
}
