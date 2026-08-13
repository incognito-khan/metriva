import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authApi } from "../../../lib/api/auth";
import { authQueryKeys } from "../../../lib/api/queryKeys";
import { mapBackendErrors } from "../../../lib/validation";

/**
 * Login mutation hook
 * Calls POST /auth/login
 * On success, backend sets HttpOnly cookies and establishes session
 */
export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ email, password }) => {
      const response = await authApi.login(email, password);

      if (!response.success) {
        // Handle field-specific errors
        if (response.errors && response.errors.length > 0) {
          const fieldErrors = mapBackendErrors(response.errors);
          throw {
            message: response.message,
            fieldErrors,
          };
        }
        // Handle general error
        throw {
          message: response.message,
          fieldErrors: {},
        };
      }

      return response;
    },
    onSuccess: () => {
      // Invalidate and refetch current user after successful login
      queryClient.invalidateQueries({ queryKey: authQueryKeys.currentUser });
    },
  });
};
