import { useMutation } from "@tanstack/react-query";
import { authApi } from "../../../lib/api/auth";
import { mapBackendErrors } from "../../../lib/validation";

/**
 * Verify OTP mutation hook
 * Calls POST /auth/verify-otp
 * On success, email is verified and user can login
 */
export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: async ({ email, otp }) => {
      const response = await authApi.verifyOtp(email, otp);
      
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
