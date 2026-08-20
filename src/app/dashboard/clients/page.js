"use client";

import ProtectedRoute from "../../../components/auth/ProtectedRoute";
import Sidebar from "../../../components/dashboard/Sidebar";
import TopBar from "../../../components/dashboard/TopBar";
import DashboardStatCards from "../../../components/dashboard/DashboardStatCards";
import ClientsTable from "../../../components/dashboard/ClientsTable";

export default function ViewAllClientsPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white">
        <Sidebar />
        <div className="lg:ml-60 flex flex-col min-h-screen bg-[#f4f6fb]">
          <TopBar breadcrumb="SEO Performance" searchPlaceholder="Search reports..." />
          <main className="px-10 py-10 flex-1 max-w-[1600px]">
            <DashboardStatCards />
            <ClientsTable />
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
