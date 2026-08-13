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
export const useCurrentUser = () => {
  const query = useQuery({
    queryKey: authQueryKeys.currentUser,
    queryFn: async () => {
      const response = await authApi.getCurrentUser();
      
      if (!response.success) {
        // Treat 401/unauthorized as unauthenticated state
        if (response.status === 401 || response.unauthorized) {
          return null;
        }
        // Other errors should throw
        throw new Error(response.message || "Failed to fetch current user");
      }
      
      return response.data?.user || null;
    },
    retry: false, // Don't retry auth checks
    staleTime: 5 * 60 * 1000, // 5 minutes - consider data fresh for this duration
    refetchOnWindowFocus: false, // Don't refetch on window focus to avoid unnecessary requests
  });

  const user = query.data;
  const isLoading = query.isLoading;
  const isError = query.isError;
  const error = query.error;

  // Derived authentication states
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
