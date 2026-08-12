import { useMutation } from "@tanstack/react-query";
import { authApi } from "../../../lib/api/auth";

/**
 * Logout mutation hook
 * Calls POST /auth/logout
 * On success, backend clears HttpOnly cookies
 */
export const useLogout = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await authApi.logout();
      
      if (!response.success) {
        throw {
          message: response.message || "Logout failed",
        };
      }
      
      return response;
    },
  });
};
