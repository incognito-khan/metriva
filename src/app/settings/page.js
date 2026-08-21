"use client";

import { useState } from "react";
import ProtectedRoute from "../../components/auth/ProtectedRoute";
import Sidebar from "../../components/dashboard/Sidebar";
import TopBar from "../../components/dashboard/TopBar";
import SettingsNav from "../../components/settings/SettingsNav";
import ProfileSettings from "../../components/settings/ProfileSettings";
import SecuritySettings from "../../components/settings/SecuritySettings";
import BillingSettings from "../../components/settings/BillingSettings";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white">
        <Sidebar />
        <div className="lg:ml-60 flex flex-col min-h-screen bg-[#f4f6fb]">
          <TopBar breadcrumb="SEO Performance" searchPlaceholder="Search reports..." />
          <main className="px-5 md:px-10 py-6 md:py-10 flex-1">
            <h1 className="text-[26px] md:text-[34px] font-extrabold text-[#0f172a] tracking-[-0.5px] mb-2.5">
              Settings
            </h1>
            <p className="text-[14px] md:text-[15.5px] text-[#64748b] mb-6 md:mb-8">
              Manage your account preferences, organization branding, and billing.
            </p>

            <div className="flex flex-col md:grid md:grid-cols-[260px_1fr] gap-5 md:gap-7 items-start">
              {/* Left Nav */}
              <div className="w-full md:w-auto overflow-x-auto md:overflow-visible">
                <SettingsNav activeTab={activeTab} onTabChange={setActiveTab} />
              </div>

              {/* Right Content */}
              <div>
                {activeTab === "profile" && (
                  <>
                    <ProfileSettings />
                    <div className="mt-7">
                      <SecuritySettings />
                    </div>
                  </>
                )}
                {activeTab === "billing" && <BillingSettings />}
                {activeTab === "organization" && (
                  <div className="bg-white border border-zinc-200 rounded-[18px] p-8">
                    <h2 className="text-2xl font-extrabold text-[#0f172a] mb-1.5">Organization & Branding</h2>
                    <p className="text-[14.5px] text-[#64748b]">Coming soon.</p>
                  </div>
                )}
                {activeTab === "notifications" && (
                  <div className="bg-white border border-zinc-200 rounded-[18px] p-8">
                    <h2 className="text-2xl font-extrabold text-[#0f172a] mb-1.5">Notifications</h2>
                    <p className="text-[14.5px] text-[#64748b]">Coming soon.</p>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
