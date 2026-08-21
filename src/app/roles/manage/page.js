"use client";

import { useState } from "react";
import ProtectedRoute from "../../../components/auth/ProtectedRoute";
import Sidebar from "../../../components/dashboard/Sidebar";
import TopBar from "../../../components/dashboard/TopBar";
import RoleCard from "../../../components/roles/RoleCard";
import EditPanel from "../../../components/roles/EditPanel";

const roles = [
  {
    id: "admin",
    name: "Admin",
    desc: "Full system access, including billing and user management.",
    userCount: 3,
    iconBg: "#fde3e3",
    iconColor: "#ef4444",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
      </svg>
    ),
  },
  {
    id: "manager",
    name: "Manager",
    desc: "Can edit clients, manage campaigns, and view all reports.",
    userCount: 12,
    iconBg: "#4f46e5",
    iconColor: "#fff",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-1a4 4 0 00-3-3.87" />
        <circle cx="17" cy="7" r="3" />
      </svg>
    ),
  },
  {
    id: "analyst",
    name: "Analyst",
    desc: "Focuses on data. Can view analytics and generate reports.",
    userCount: 28,
    iconBg: "#e7eaf3",
    iconColor: "#475569",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 17V11" />
        <path d="M12 17V7" />
        <path d="M16 17v-4" />
      </svg>
    ),
  },
  {
    id: "viewer",
    name: "Viewer",
    desc: "Read-only access to dashboards and specific client data.",
    userCount: 45,
    iconBg: "#dbeafe",
    iconColor: "#2563eb",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

const defaultPermissions = [
  { id: "view-analytics", title: "View Analytics", desc: "Access to performance dashboards and reporting tools.", enabled: true },
  { id: "edit-clients", title: "Edit Clients", desc: "Add, modify, or remove client profiles and locations.", enabled: false },
  { id: "access-billing", title: "Access Billing", desc: "View invoices, payment methods, and subscription details.", enabled: false },
  { id: "export-data", title: "Export Data", desc: "Download reports in CSV, PDF, or Excel formats.", enabled: true },
];

export default function RolesManagePage() {
  const [selectedRole, setSelectedRole] = useState("analyst");
  const [permissions, setPermissions] = useState(defaultPermissions);

  const selected = roles.find((r) => r.id === selectedRole);

  const handleToggle = (permId) => {
    setPermissions((prev) =>
      prev.map((p) => (p.id === permId ? { ...p, enabled: !p.enabled } : p))
    );
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white">
        <Sidebar />
        <div className="lg:ml-60 flex flex-col min-h-screen bg-[#f4f6fb]">
          <TopBar breadcrumb="SEO Performance" searchPlaceholder="Search reports..." />
          <main className="px-5 md:px-10 py-6 md:py-10 flex-1 max-w-[1600px]">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
              <div>
                <h1 className="text-[34px] font-extrabold text-[#0f172a] mb-3 tracking-[-0.5px]">
                  Roles & Permissions
                </h1>
                <p className="text-[15.5px] text-[#64748b] max-w-[620px] leading-relaxed">
                  Manage access control across your organization. Assign roles to team members to ensure they have the exact permissions needed for their daily tasks.
                </p>
              </div>
              <button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white text-[14.5px] font-semibold px-5 py-3 rounded-[10px] flex items-center gap-2 cursor-pointer transition-colors whitespace-nowrap">
                + New Role
              </button>
            </div>

            {/* Role Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {roles.map((role) => (
                <RoleCard
                  key={role.id}
                  {...role}
                  selected={selectedRole === role.id}
                  onClick={() => setSelectedRole(role.id)}
                />
              ))}
            </div>

            {/* Edit Panel */}
            {selected && (
              <EditPanel
                roleName={selected.name}
                description={`Fine-tune the capabilities available to users with the ${selected.name} role.`}
                permissions={permissions}
                onToggle={handleToggle}
                onSave={() => console.log("Saved:", permissions)}
                onDiscard={() => setPermissions(defaultPermissions)}
              />
            )}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
