"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

/**
 * Guest Route Component
 * Redirects authenticated users to /dashboard
 * Handles loading state to prevent redirect flickering
 */
export default function GuestRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Only redirect when we know the user is authenticated
    // Don't redirect while still loading to avoid flickering
    if (isAuthenticated && !isLoading) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, isLoading, router]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
        <div className="text-zinc-600 dark:text-zinc-400">Loading...</div>
      </div>
    );
  }

  // Don't render children if user is authenticated
  // (they will be redirected by the useEffect)
  if (isAuthenticated) {
    return null;
  }

  // User is not authenticated, render children
  return <>{children}</>;
}
