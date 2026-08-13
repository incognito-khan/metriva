"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

/**
 * Protected Route Component
 * Redirects unauthenticated users to /login
 * Handles loading state to prevent redirect flickering
 */
export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isUnauthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Only redirect when we know the user is unauthenticated
    // Don't redirect while still loading to avoid flickering
    if (isUnauthenticated && !isLoading) {
      router.push("/login");
    }
  }, [isUnauthenticated, isLoading, router]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
        <div className="text-zinc-600 dark:text-zinc-400">Loading...</div>
      </div>
    );
  }

  // Don't render children if user is not authenticated
  // (they will be redirected by the useEffect)
  if (isUnauthenticated) {
    return null;
  }

  // User is authenticated, render children
  return <>{children}</>;
}
