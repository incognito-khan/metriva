import { useMutation } from "@tanstack/react-query";
import { authApi } from "../../../lib/api/auth";
import { mapBackendErrors } from "../../../lib/validation";

/**
 * Reset password mutation hook
 * Calls POST /auth/reset-password
 * On success, password is changed and user can login
 */
export const useResetPassword = () => {
  return useMutation({
    mutationFn: async ({ token, password }) => {
      const response = await authApi.resetPassword(token, password);
      
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
  });
};
