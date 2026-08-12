import { useMutation } from "@tanstack/react-query";
import { authApi } from "../../../lib/api/auth";
import { mapBackendErrors } from "../../../lib/validation";

/**
 * Forgot password mutation hook
 * Calls POST /auth/forgot-password
 * Backend returns generic success message for security
 */
export const useForgotPassword = () => {
  return useMutation({
    mutationFn: async ({ email }) => {
      const response = await authApi.forgotPassword(email);
      
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
