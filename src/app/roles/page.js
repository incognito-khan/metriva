"use client";

import { useState } from "react";
import ProtectedRoute from "../../components/auth/ProtectedRoute";
import Sidebar from "../../components/dashboard/Sidebar";
import TopBar from "../../components/dashboard/TopBar";
import CreateRoleModal from "../../components/roles/CreateRoleModal";

const roles = [
  {
    name: "SEO Manager",
    description: "Can view SEO data and manage leads",
    permissions: 8,
    type: "system",
    iconBg: "#e5e2fb",
    iconColor: "#4f46e5",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
      </svg>
    ),
  },
  {
    name: "Lead Generator",
    description: "Can create and edit leads",
    permissions: 4,
    type: "custom",
    iconBg: "#eef1fb",
    iconColor: "#475569",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <circle cx="19" cy="14" r="2.5" />
        <path d="M19 11v.5M19 16.5v.5M16.7 12.6l.4.3M21 15l.4.3M16.7 15.4l.4-.3M21 12.6l.4-.3" />
      </svg>
    ),
  },
  {
    name: "Viewer",
    description: "Read-only access to reports",
    permissions: 2,
    type: "custom",
    iconBg: "#eef1fb",
    iconColor: "#475569",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

const ViewIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EditIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.85 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>
);

const DeleteIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18" />
    <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" />
    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
  </svg>
);

const LockIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const KeyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
  </svg>
);

export default function RolesPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white">
        <Sidebar />
        <div className="lg:ml-60 flex flex-col min-h-screen bg-[#f4f6fb]">
          <TopBar breadcrumb="SEO Performance" searchPlaceholder="Search reports..." />
          <main className="px-5 md:px-10 py-6 md:py-10 flex-1 max-w-[1600px]">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-7">
              <div>
                <h1 className="text-[24px] font-bold text-[#0f172a] mb-2">Roles & Permissions</h1>
                <p className="text-[15px] text-[#64748b]">Manage custom roles and permissions for your agency users.</p>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 bg-[#4f46e5] hover:bg-[#4338ca] text-white px-[22px] py-3 rounded-[10px] text-[14.5px] font-semibold cursor-pointer transition-colors whitespace-nowrap"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
                Create Role
              </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-[18px] border border-zinc-200 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left px-5 md:px-8 pt-[26px] pb-5 text-[13px] font-bold text-[#64748b] tracking-wider uppercase">Role Name</th>
                    <th className="text-left px-5 md:px-8 pt-[26px] pb-5 text-[13px] font-bold text-[#64748b] tracking-wider uppercase hidden md:table-cell">Description</th>
                    <th className="text-left px-5 md:px-8 pt-[26px] pb-5 text-[13px] font-bold text-[#64748b] tracking-wider uppercase hidden lg:table-cell">Permissions</th>
                    <th className="text-left px-5 md:px-8 pt-[26px] pb-5 text-[13px] font-bold text-[#64748b] tracking-wider uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((role, i) => (
                    <tr key={i} className="border-t border-[#f0f1f5]">
                      {/* Role Name */}
                      <td className="px-5 md:px-8 py-5 md:py-6">
                        <div className="flex items-center gap-3 md:gap-4">
                          <div
                            className="w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: role.iconBg, color: role.iconColor }}
                          >
                            {role.icon}
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="text-[17px] font-bold text-[#0f172a]">{role.name}</div>
                            <span
                              className={`inline-flex items-center gap-1.5 w-fit px-3 py-[5px] rounded-full text-xs font-bold ${
                                role.type === "system"
                                  ? "bg-[#4f46e5] text-white"
                                  : "bg-[#eef1fb] text-[#475569]"
                              }`}
                            >
                              {role.type === "system" && <LockIcon />}
                              {role.type === "system" ? "System" : "Custom"}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Description */}
                      <td className="px-5 md:px-8 py-5 md:py-6 text-[#334155] text-[14px] md:text-[15.5px] hidden md:table-cell">
                        {role.description}
                      </td>

                      {/* Permissions */}
                      <td className="px-5 md:px-8 py-5 md:py-6 hidden lg:table-cell">
                        <div className="flex items-center gap-2 text-[#334155] text-[14px] md:text-[15.5px]">
                          <KeyIcon />
                          {role.permissions} permissions
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="px-5 md:px-8 py-5 md:py-6">
                        <div className="flex items-center gap-[18px] text-zinc-400">
                          <button className="hover:text-[#4f46e5] transition-colors cursor-pointer bg-transparent border-none p-0">
                            <ViewIcon />
                          </button>
                          <button className="hover:text-[#4f46e5] transition-colors cursor-pointer bg-transparent border-none p-0">
                            <EditIcon />
                          </button>
                          <button className="hover:text-[#4f46e5] transition-colors cursor-pointer bg-transparent border-none p-0">
                            <DeleteIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
      {showModal && <CreateRoleModal onClose={() => setShowModal(false)} />}
    </ProtectedRoute>
  );
}
