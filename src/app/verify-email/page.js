"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "../../hooks/useForm";
import { useVerifyOtp, useResendOtp } from "../../hooks/queries/auth";
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
  const verifyOtpMutation = useVerifyOtp();
  const resendOtpMutation = useResendOtp();

  const emailParam = searchParams.get("email");

  const {
    formData,
    setFormData,
    errors,
    setErrors,
    touched,
    generalError,
    setGeneralError,
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

    setGeneralError("");
    setSuccessMessage("");

    verifyOtpMutation.mutate(
      {
        email: formData.email,
        otp: formData.otp,
      },
      {
        onSuccess: () => {
          setSuccessMessage(
            "Email verified successfully! Redirecting to login...",
          );
          setTimeout(() => {
            router.push("/login");
          }, 2000);
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

  const handleResendOTP = async (e) => {
    e.preventDefault();

    const emailError = validateEmail(formData.email);
    if (emailError) {
      handleBlur("email");
      return;
    }

    setGeneralError("");
    setSuccessMessage("");

    resendOtpMutation.mutate(
      {
        email: formData.email,
      },
      {
        onSuccess: () => {
          setSuccessMessage("New verification code sent to your email.");
          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
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
          disabled={verifyOtpMutation.isPending || resendOtpMutation.isPending}
        />

        <OTPInput
          label="Verification Code"
          id="otp"
          name="otp"
          value={formData.otp}
          onChange={(value) => handleCustomChange("otp", value)}
          error={touched.otp ? errors.otp : ""}
          disabled={verifyOtpMutation.isPending || resendOtpMutation.isPending}
          length={6}
        />

        <SubmitButton
          isLoading={verifyOtpMutation.isPending}
          loadingText="Verifying..."
        >
          Verify Email
        </SubmitButton>

        <SecondaryButton
          onClick={handleResendOTP}
          isLoading={resendOtpMutation.isPending}
          loadingText="Sending..."
          disabled={verifyOtpMutation.isPending}
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
