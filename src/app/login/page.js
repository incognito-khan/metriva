"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "../../hooks/useForm";
import { useLogin } from "../../hooks/queries/auth";
import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";
import FormError from "../../components/FormError";
import SubmitButton from "../../components/auth/SubmitButton";
import AuthFooter from "../../components/auth/AuthFooter";
import VerificationAlert from "../../components/auth/VerificationAlert";
import GuestRoute from "../../components/auth/GuestRoute";
import { validateEmail, validatePasswordRequired } from "../../lib/validation";

export default function LoginPage() {
  const router = useRouter();
  const loginMutation = useLogin();

  const {
    formData,
    errors,
    touched,
    generalError,
    setGeneralError,
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

    setGeneralError("");
    setShowVerificationMessage(false);

    loginMutation.mutate(
      {
        email: formData.email,
        password: formData.password,
      },
      {
        onSuccess: () => {
          router.push("/dashboard");
        },
        onError: (error) => {
          if (error.message && error.message.includes("verify your email")) {
            setShowVerificationMessage(true);
            setGeneralError(error.message);
          } else {
            setGeneralError(error.message);
          }
        },
      },
    );
  };

  return (
    <GuestRoute>
      <div className="flex min-h-screen">
        <div className="hidden md:flex md:w-1/2 items-center justify-center relative overflow-hidden" style={{ backgroundColor: "#1E1B4B" }}>
          <svg className="absolute left-0 w-full" style={{ height: "70%", top: "20%" }} viewBox="0 0 640 549" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 36.9504C192 164.95 448 -91.0496 640 36.9504V548.95H0V36.9504Z" fill="#20225A" />
          </svg>
          <div className="absolute top-6 left-6 z-10 flex items-center gap-4">
            <Image src="/image.png" alt="Metriva Logo" width={40} height={40} />
            <span className="text-xl font-bold text-white tracking-tight">Metriva</span>
          </div>
          <div className="relative z-10 px-12">
            <h2 className="text-3xl font-bold text-white mb-1">Local SEO Revenue</h2>
            <h3 className="text-3xl font-bold text-white mb-4">Attribution for Agencies</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Uncover the true impact of your local search efforts with enterprise-grade attribution and geographic insights.
            </p>
          </div>
          <div className="absolute bottom-4 left-0 z-10 px-6">
            <p className="text-white/40 text-xs">&copy; {new Date().getFullYear()} Metriva Inc. All rights reserved.</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6 py-12">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-zinc-900 mb-1">Welcome Back</h2>
            <p className="text-sm text-zinc-500 mb-8">
              Enter your credentials to access your agency dashboard
            </p>

            <FormError error={generalError} />

            {showVerificationMessage && (
              <VerificationAlert message={generalError} email={formData.email} />
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
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
                disabled={loginMutation.isPending}
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                }
              />

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-zinc-900">Password</label>
                  <a href="/forgot-password" className="text-sm text-[#4648D4] hover:text-[#3a3cb8]">Forgot password?</a>
                </div>
                <PasswordInput
                  label=""
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={() => handleBlur("password")}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  error={touched.password ? errors.password : ""}
                  disabled={loginMutation.isPending}
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  }
                />
              </div>

              <SubmitButton
                isLoading={loginMutation.isPending}
                loadingText="Logging in..."
                className="!bg-[#4648D4] hover:!bg-[#3a3cb8] !cursor-pointer"
              >
                Sign in
              </SubmitButton>
            </form>

            <AuthFooter
              text="Don't have an account?"
              linkText="Sign up"
              linkHref="/register"
              linkClassName="!text-[#4648D4] hover:!text-[#3a3cb8]"
            />
          </div>
        </div>
      </div>
    </GuestRoute>
  );
}
