import { useMutation } from "@tanstack/react-query";
import { authApi } from "../../../lib/api/auth";
import { mapBackendErrors } from "../../../lib/validation";

/**
 * Resend OTP mutation hook
 * Calls POST /auth/resend-otp
 * Sends a new verification code to the user's email
 */
export const useResendOtp = () => {
  return useMutation({
    mutationFn: async ({ email }) => {
      const response = await authApi.resendOtp(email);
      
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
