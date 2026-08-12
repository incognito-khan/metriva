import { mapBackendErrors } from "../lib/validation";

export const useAuthApi = () => {
  const handleApiCall = async (url, options, onSuccess, onError) => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          const fieldErrors = mapBackendErrors(data.errors);
          if (onError) {
            onError(data.message || "Request failed", fieldErrors);
          }
          return { success: false, fieldErrors, message: data.message };
        } else {
          if (onError) {
            onError(data.message || "Request failed", {});
          }
          return { success: false, fieldErrors: {}, message: data.message };
        }
      }

      if (onSuccess) {
        onSuccess(data);
      }
      return { success: true, data };
    } catch (error) {
      const errorMessage = "Network error. Please check your connection and try again.";
      if (onError) {
        onError(errorMessage, {});
      }
      return { success: false, fieldErrors: {}, message: errorMessage };
    }
  };

  return { handleApiCall };
};
