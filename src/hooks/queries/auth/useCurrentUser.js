import { useQuery } from "@tanstack/react-query";
import { authApi } from "../../../lib/api/auth";
import { authQueryKeys } from "../../../lib/api/queryKeys";

/**
 * Current user query hook
 * Queries GET /auth/me to determine authentication status
 * 
 * Returns:
 * - data: current user object if authenticated
 * - isLoading: true while checking authentication status
 * - isAuthenticated: true if user exists and is authenticated
 * - isUnauthenticated: true if user is not authenticated
 * - error: any error that occurred
 */

// TEMP BYPASS - Dev mode (original code commented below)
// TODO: Restore before production
export const useCurrentUser = () => {
  return {
    user: {
      name: "Test User",
      email: "test@metriva.com",
      emailVerified: true,
    },
    isLoading: false,
    isAuthenticated: true,
    isUnauthenticated: false,
    isError: false,
    error: null,
    refetch: () => {},
  };
};

/*
export const useCurrentUser = () => {
  const query = useQuery({
    queryKey: authQueryKeys.currentUser,
    queryFn: async () => {
      const response = await authApi.getCurrentUser();
      
      if (!response.success) {
        if (response.status === 401 || response.unauthorized) {
          return null;
        }
        throw new Error(response.message || "Failed to fetch current user");
      }
      
      return response.data?.user || null;
    },
    retry: false,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const user = query.data;
  const isLoading = query.isLoading;
  const isError = query.isError;
  const error = query.error;

  const isAuthenticated = !isLoading && !isError && user !== null;
  const isUnauthenticated = !isLoading && (isError || user === null);

  return {
    user,
    isLoading,
    isAuthenticated,
    isUnauthenticated,
    isError,
    error,
    refetch: query.refetch,
  };
};
*/
