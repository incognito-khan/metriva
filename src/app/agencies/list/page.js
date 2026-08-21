"use client";

import { useState } from "react";
import ProtectedRoute from "../../../components/auth/ProtectedRoute";
import Sidebar from "../../../components/dashboard/Sidebar";
import TopBar from "../../../components/dashboard/TopBar";
import AgencyStatCards from "../../../components/agencies/AgencyStatCards";
import AgenciesTable from "../../../components/agencies/AgenciesTable";
import CreateAgencyModal from "../../../components/agencies/CreateAgencyModal";

export default function AgenciesListPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white">
        <Sidebar />
        <div className="lg:ml-60 flex flex-col min-h-screen bg-[#f4f6fb]">
          <TopBar breadcrumb="SEO Performance" searchPlaceholder="Search reports..." />
          <main className="px-5 md:px-10 py-6 md:py-10 flex-1 max-w-[1600px]">
            <AgencyStatCards />
            <AgenciesTable onOpenModal={() => setShowModal(true)} />
          </main>
        </div>
        {showModal && <CreateAgencyModal onClose={() => setShowModal(false)} />}
      </div>
    </ProtectedRoute>
  );
}
