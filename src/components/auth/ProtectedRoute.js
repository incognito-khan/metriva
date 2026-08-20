"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

/**
 * Protected Route Component
 * Redirects unauthenticated users to /login
 * Handles loading state to prevent redirect flickering
 */

// TEMP BYPASS - Dev mode (original code commented below)
// TODO: Restore before production
export default function ProtectedRoute({ children }) {
  return <>{children}</>;
}

/*
export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isUnauthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isUnauthenticated && !isLoading) {
      router.push("/login");
    }
  }, [isUnauthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
        <div className="text-zinc-600 dark:text-zinc-400">Loading...</div>
      </div>
    );
  }

  if (isUnauthenticated) {
    return null;
  }

  return <>{children}</>;
}
*/
