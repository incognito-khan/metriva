"use client";

import { useState } from "react";

export default function CreateAgencyModal({ onClose }) {
  const [form, setForm] = useState({
    agencyName: "",
    agencyEmail: "",
    phone: "",
    website: "",
    address: "",
    adminName: "",
    adminEmail: "",
    adminPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const passwordStrength = form.adminPassword.length > 0
    ? Math.min(form.adminPassword.length / 8, 1) * 100
    : 0;

  const strengthColor = passwordStrength < 33
    ? "#ef4444"
    : passwordStrength < 66
      ? "#f59e0b"
      : "#16a34a";

  return (
    <div className="fixed inset-0 bg-[rgba(15,23,42,0.35)] backdrop-blur-[2px] flex items-center justify-center z-[100]">
      <div className="bg-white rounded-[18px] w-[95%] md:w-[830px] max-h-[88vh] flex flex-col shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 md:px-[34px] py-5 md:py-[26px] border-b border-[#eef0f4]">
          <h2 className="text-[21px] font-bold text-[#0f172a]">Create New Agency</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#64748b] cursor-pointer hover:bg-[#f4f6fb] transition-colors bg-transparent border-none"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-5 md:px-[34px] py-6 md:py-[30px] overflow-y-auto flex-1">
          {/* Section: Agency Details */}
          <div className="text-xs font-bold tracking-[.06em] text-[#4f46e5] uppercase mb-5">
            Agency Details
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[22px] mb-5">
            <div className="flex flex-col gap-2">
              <label className="text-[14.5px] font-semibold text-[#1e293b]">Agency Name</label>
              <input
                name="agencyName"
                value={form.agencyName}
                onChange={handleChange}
                placeholder="e.g. Skyline Digital"
                className="bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[14.5px] text-[#0f172a] placeholder:text-zinc-400 font-[inherit] focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14.5px] font-semibold text-[#1e293b]">Agency Email</label>
              <input
                name="agencyEmail"
                type="email"
                value={form.agencyEmail}
                onChange={handleChange}
                placeholder="agency@example.com"
                className="bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[14.5px] text-[#0f172a] placeholder:text-zinc-400 font-[inherit] focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[22px] mb-5">
            <div className="flex flex-col gap-2">
              <label className="text-[14.5px] font-semibold text-[#1e293b]">Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[14.5px] text-[#0f172a] placeholder:text-zinc-400 font-[inherit] focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14.5px] font-semibold text-[#1e293b]">Website</label>
              <input
                name="website"
                value={form.website}
                onChange={handleChange}
                placeholder="https://example.com"
                className="bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[14.5px] text-[#0f172a] placeholder:text-zinc-400 font-[inherit] focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-5">
            <label className="text-[14.5px] font-semibold text-[#1e293b]">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter full address..."
              rows={3}
              className="bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[14.5px] text-[#0f172a] placeholder:text-zinc-400 font-[inherit] resize-none focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
            />
          </div>

          {/* Section: Admin Account */}
          <div className="text-xs font-bold tracking-[.06em] text-[#4f46e5] uppercase mt-9 mb-5">
            Admin Account
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[22px] mb-5">
            <div className="flex flex-col gap-2">
              <label className="text-[14.5px] font-semibold text-[#1e293b]">Admin Name</label>
              <input
                name="adminName"
                value={form.adminName}
                onChange={handleChange}
                placeholder="Full Name"
                className="bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[14.5px] text-[#0f172a] placeholder:text-zinc-400 font-[inherit] focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14.5px] font-semibold text-[#1e293b]">Admin Email</label>
              <input
                name="adminEmail"
                type="email"
                value={form.adminEmail}
                onChange={handleChange}
                placeholder="admin@example.com"
                className="bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[14.5px] text-[#0f172a] placeholder:text-zinc-400 font-[inherit] focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14.5px] font-semibold text-[#1e293b]">Admin Password</label>
            <input
              name="adminPassword"
              type="password"
              value={form.adminPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[14.5px] text-[#0f172a] placeholder:text-zinc-400 font-[inherit] focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
            />
            {form.adminPassword.length > 0 && (
              <div className="h-[5px] bg-[#e2e6f5] rounded mt-2 overflow-hidden">
                <div
                  className="h-full rounded transition-all"
                  style={{ width: `${passwordStrength}%`, backgroundColor: strengthColor }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3.5 px-5 md:px-[34px] py-4 md:py-[22px] border-t border-[#eef0f4]">
          <button
            onClick={onClose}
            className="bg-transparent border-none text-[#1e293b] font-semibold text-[14.5px] px-[22px] py-3 cursor-pointer hover:text-[#4f46e5] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="bg-[#4f46e5] hover:bg-[#4338ca] text-white border-none px-[26px] py-3 rounded-[10px] text-[14.5px] font-semibold cursor-pointer transition-colors"
          >
            Create Agency
          </button>
        </div>
      </div>
    </div>
  );
}
