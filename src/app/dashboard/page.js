"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";
import { useLogout } from "../../hooks/queries/auth";
import ProtectedRoute from "../../components/auth/ProtectedRoute";

export default function DashboardPage() {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();
  const logoutMutation = useLogout();

  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        router.push("/login");
      },
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
        <div className="text-zinc-600 dark:text-zinc-400">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will be handled by ProtectedRoute
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-zinc-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                Dashboard
              </h1>
              <button
                onClick={handleLogout}
                disabled={logoutMutation.isPending}
                className="px-4 py-2 bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50 rounded hover:bg-zinc-300 dark:hover:bg-zinc-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {logoutMutation.isPending ? "Logging out..." : "Logout"}
              </button>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              Welcome, {user?.name || "User"}!
            </p>
            <div className="mt-6 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Your Information
              </h2>
              <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <p>
                  <strong>Name:</strong> {user?.name}
                </p>
                <p>
                  <strong>Email:</strong> {user?.email}
                </p>
                <p>
                  <strong>Email Verified:</strong>{" "}
                  {user?.emailVerified ? "Yes" : "No"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
