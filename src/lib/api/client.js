const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

const fetchOptions = {
  credentials: "include", // Ye bhi hona chahiye
};

let isRefreshing = false;
let refreshSubscribers = [];

/**
 * Add subscriber to be notified when refresh completes
 */
function subscribeToRefresh(callback) {
  refreshSubscribers.push(callback);
}

/**
 * Notify all subscribers that refresh completed
 */
function onRefreshCompleted(error) {
  refreshSubscribers.forEach((callback) => callback(error));
  refreshSubscribers = [];
}

/**
 * API client for making HTTP requests to the Metriva backend
 * Handles base URL, credentials, headers, error extraction, and token refresh
 */
export const apiClient = async (endpoint, options = {}) => {
  const url = `${API_URL}${endpoint}`;

  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    credentials: "include", // Important for HttpOnly cookies
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);
    const data = await response.json();

    // Handle 401 Unauthorized - attempt token refresh
    if (response.status === 401 && !endpoint.includes("/auth/refresh")) {
      // If we're already refreshing, queue this request
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          subscribeToRefresh((error) => {
            if (error) {
              reject(error);
            } else {
              // Retry the original request after refresh
              apiClient(endpoint, options).then(resolve).catch(reject);
            }
          });
        });
      }

      // Start refresh process
      isRefreshing = true;

      try {
        const refreshResponse = await fetch(`${API_URL}/auth/refresh`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        const refreshData = await refreshResponse.json();

        isRefreshing = false;

        if (refreshResponse.ok) {
          // Refresh succeeded, retry original request
          onRefreshCompleted(null);
          return apiClient(endpoint, options);
        } else {
          // Refresh failed, session is invalid
          onRefreshCompleted(new Error("Session expired"));
          return {
            success: false,
            message: "Session expired. Please log in again.",
            errors: [],
            status: 401,
            unauthorized: true,
          };
        }
      } catch (refreshError) {
        isRefreshing = false;
        onRefreshCompleted(refreshError);
        return {
          success: false,
          message: "Session expired. Please log in again.",
          errors: [],
          status: 401,
          unauthorized: true,
        };
      }
    }

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Request failed",
        errors: data.errors || [],
        status: response.status,
      };
    }

    return {
      success: true,
      data,
      message: data.message,
    };
  } catch (error) {
    return {
      success: false,
      message: "Network error. Please check your connection and try again.",
      errors: [],
    };
  }
};
