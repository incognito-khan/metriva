import { useMutation } from "@tanstack/react-query";
import { authApi } from "../../../lib/api/auth";
import { mapBackendErrors } from "../../../lib/validation";

/**
 * Register mutation hook
 * Calls POST /auth/register
 * On success, backend automatically sends OTP
 */
export const useRegister = () => {
  return useMutation({
    mutationFn: async ({ name, email, password }) => {
      const response = await authApi.register(name, email, password);
      
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
