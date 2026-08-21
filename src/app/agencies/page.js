"use client";

import { useState } from "react";
import ProtectedRoute from "../../components/auth/ProtectedRoute";
import Sidebar from "../../components/dashboard/Sidebar";
import TopBar from "../../components/dashboard/TopBar";
import HeroBanner from "../../components/agencies/HeroBanner";
import StatCards from "../../components/agencies/StatCards";
import ClientTable from "../../components/agencies/ClientTable";
import AssignRoleModal from "../../components/agencies/AssignRoleModal";

export default function AgenciesPage() {
  const [showAssignModal, setShowAssignModal] = useState(false);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white">
        <Sidebar />
        <div className="lg:ml-60 flex flex-col min-h-screen bg-[#f4f6fb]">
          <TopBar breadcrumb="SEO Performance" searchPlaceholder="Search reports..." />
          <main className="px-5 md:px-10 py-6 md:py-10 flex-1 max-w-[1600px]">
            <HeroBanner onAssignRole={() => setShowAssignModal(true)} />
            <StatCards />
            <ClientTable />
          </main>
        </div>
      </div>
      {showAssignModal && <AssignRoleModal onClose={() => setShowAssignModal(false)} />}
    </ProtectedRoute>
  );
}
