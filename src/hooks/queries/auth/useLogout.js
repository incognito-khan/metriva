import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authApi } from "../../../lib/api/auth";
import { authQueryKeys } from "../../../lib/api/queryKeys";

/**
 * Logout mutation hook
 * Calls POST /auth/logout
 * On success, backend clears HttpOnly cookies
 */
export const useLogout = () => {
  const queryClient = useQueryClient();

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
    onSuccess: () => {
      // Clear current user cache after successful logout
      queryClient.setQueryData(authQueryKeys.currentUser, null);
    },
  });
};
