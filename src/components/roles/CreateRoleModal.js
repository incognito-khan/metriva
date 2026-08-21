"use client";

import { useState } from "react";

const permissionGroups = [
  {
    id: "client",
    label: "Client Management",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21V7a2 2 0 012-2h4l2-2h2l2 2h4a2 2 0 012 2v14" />
        <path d="M3 21h18" />
      </svg>
    ),
    permissions: [
      { id: "clients:read", label: "clients:read" },
      { id: "clients:write", label: "clients:write" },
      { id: "clients:delete", label: "clients:delete" },
    ],
  },
  {
    id: "leads",
    label: "Leads",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <rect x="7" y="12" width="3" height="6" />
        <rect x="12" y="8" width="3" height="10" />
        <rect x="17" y="5" width="3" height="13" />
      </svg>
    ),
    permissions: [
      { id: "leads:read", label: "leads:read" },
      { id: "leads:write", label: "leads:write" },
      { id: "leads:delete", label: "leads:delete" },
    ],
  },
  {
    id: "reports",
    label: "Reports",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 15v-4" />
        <path d="M12 15V7" />
        <path d="M17 15v-2" />
      </svg>
    ),
    permissions: [
      { id: "reports:read", label: "reports:read" },
      { id: "reports:export", label: "reports:export" },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09A1.65 1.65 0 0015 4.6a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    permissions: [
      { id: "settings:read", label: "settings:read" },
      { id: "settings:write", label: "settings:write" },
    ],
  },
];

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </svg>
);

const CheckBadgeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function CreateRoleModal({ onClose }) {
  const [roleName, setRoleName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPerms, setSelectedPerms] = useState({
    "clients:read": true,
    "clients:write": true,
    "leads:read": true,
    "leads:write": true,
    "reports:read": true,
  });

  const allPermIds = permissionGroups.flatMap((g) => g.permissions.map((p) => p.id));
  const allSelected = allPermIds.every((id) => selectedPerms[id]);

  const togglePerm = (id) => {
    setSelectedPerms((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAll = () => {
    if (allSelected) {
      setSelectedPerms({});
    } else {
      const next = {};
      allPermIds.forEach((id) => { next[id] = true; });
      setSelectedPerms(next);
    }
  };

  return (
    <div className="fixed inset-0 bg-[rgba(15,23,42,0.35)] backdrop-blur-[2px] flex items-center justify-center z-[100] px-4">
      <div className="bg-white rounded-[18px] w-full max-w-[780px] max-h-[90vh] flex flex-col shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 md:px-[34px] py-5 md:py-[26px] border-b border-[#eef0f4]">
          <h2 className="text-[18px] md:text-[21px] font-bold text-[#0f172a]">Create New Role</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#64748b] cursor-pointer hover:bg-[#f4f6fb] transition-colors bg-transparent border-none"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 md:px-[34px] py-6 md:py-[30px] overflow-y-auto flex-1">
          {/* Role Name */}
          <div className="flex flex-col gap-2.5 mb-5">
            <label className="text-[14.5px] md:text-[15.5px] font-semibold text-[#1e293b]">Role Name</label>
            <input
              type="text"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
              placeholder="e.g. Content Manager"
              className="bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-[18px] py-3.5 text-[14px] md:text-[15px] text-[#0f172a] placeholder:text-[#94a3b8] font-[inherit] w-full focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2.5 mb-4 md:mb-[18px]">
            <label className="text-[14.5px] md:text-[15.5px] font-semibold text-[#1e293b]">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Briefly describe the purpose of this role..."
              rows={3}
              className="bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-[18px] py-3.5 text-[14px] md:text-[15px] text-[#0f172a] placeholder:text-[#94a3b8] font-[inherit] w-full resize-none focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
            />
          </div>

          {/* Divider */}
          <div className="w-14 h-[3px] bg-[#e5e2fb] rounded-[3px] mb-5 md:mb-[18px]" />

          {/* Permissions Header */}
          <div className="flex items-center justify-between mb-5 md:mb-[22px]">
            <h3 className="text-[18px] md:text-[21px] font-bold text-[#0f172a]">Permissions</h3>
            <button
              onClick={toggleAll}
              className="flex items-center gap-2.5 bg-[#eef1fb] rounded-full px-4 md:px-[18px] py-[9px] text-[13px] md:text-[14px] font-semibold text-[#1e293b] cursor-pointer border-none"
            >
              <div className={`w-[18px] h-[18px] rounded-[5px] border-[1.5px] flex items-center justify-center flex-shrink-0 transition-colors ${allSelected ? "bg-[#4f46e5] border-[#4f46e5]" : "bg-white border-[#cbd2e6]"}`}>
                {allSelected && <CheckIcon />}
              </div>
              Select all permissions
            </button>
          </div>

          {/* Permissions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {permissionGroups.map((group) => (
              <div key={group.id} className="border border-[#eef0f4] rounded-xl overflow-hidden">
                {/* Group Header */}
                <div className="flex items-center gap-2.5 bg-[#eef1fb] px-4 md:px-[18px] py-3.5 text-[14px] md:text-[15px] font-bold text-[#1e293b]">
                  <span className="text-[#4f46e5] flex-shrink-0">{group.icon}</span>
                  {group.label}
                </div>
                {/* Permissions List */}
                <div className="px-4 md:px-[18px] py-1.5 pb-3.5">
                  {group.permissions.map((perm) => {
                    const checked = !!selectedPerms[perm.id];
                    return (
                      <div
                        key={perm.id}
                        className="flex items-center gap-3 py-2.5 text-[13.5px] md:text-[14px] text-[#1e293b] cursor-pointer"
                        onClick={() => togglePerm(perm.id)}
                      >
                        <div className={`w-[18px] h-[18px] rounded-[5px] border-[1.5px] flex items-center justify-center flex-shrink-0 transition-colors ${checked ? "bg-[#4f46e5] border-[#4f46e5]" : "bg-white border-[#cbd2e6]"}`}>
                          {checked && <CheckIcon />}
                        </div>
                        <span className="font-mono">{perm.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 px-5 md:px-[34px] py-4 md:py-[22px] border-t border-[#eef0f4]">
          <button
            onClick={onClose}
            className="bg-transparent border-none text-[#1e293b] font-semibold text-[14px] md:text-[15px] px-4 md:px-[22px] py-3 cursor-pointer hover:text-[#4f46e5] transition-colors"
          >
            Cancel
          </button>
          <button className="flex items-center gap-2 bg-[#4f46e5] hover:bg-[#4338ca] text-white border-none px-5 md:px-[26px] py-3 rounded-[10px] text-[14px] md:text-[15px] font-semibold cursor-pointer transition-colors">
            Create Role
            <CheckBadgeIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
