"use client";

import { useCurrentUser } from "../hooks/queries/auth";

/**
 * Authentication Context Provider
 * Provides authentication state to the application
 * Uses useCurrentUser as the single source of truth
 */
export function AuthProvider({ children }) {
  const auth = useCurrentUser();

  return <>{children}</>;
}

/**
 * Hook to access authentication state
 * Simply re-exports useCurrentUser for convenience
 */
export const useAuth = useCurrentUser;
