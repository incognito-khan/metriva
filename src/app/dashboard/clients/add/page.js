"use client";

import { useState } from "react";
import ProtectedRoute from "../../../../components/auth/ProtectedRoute";
import Sidebar from "../../../../components/dashboard/Sidebar";
import TopBar from "../../../../components/dashboard/TopBar";
import Link from "next/link";

export default function AddClientPage() {
  const [status, setStatus] = useState("active");

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white">
        <Sidebar />
        <div className="lg:ml-60 flex flex-col min-h-screen bg-[#f4f6fb]">
          <TopBar breadcrumb="SEO Performance" searchPlaceholder="Search reports..." />
          <main className="px-10 py-10 flex-1 max-w-[1200px]">
            {/* Page Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-[34px] font-extrabold text-[#0f172a] mb-2.5 tracking-[-0.5px]">
                  Add New Client
                </h1>
                <p className="text-[15.5px] text-[#64748b]">
                  Register a new client profile and set up their business details.
                </p>
              </div>
              <div className="w-[52px] h-[52px] rounded-full bg-[#4f46e5] text-white flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h12" />
                  <path d="M5 21V7l6-4 6 4v6" />
                  <path d="M8 21v-4h4v4" />
                  <path d="M9 10h.01" />
                  <path d="M9 14h.01" />
                  <path d="M18 15v6" />
                  <path d="M15 18h6" />
                </svg>
              </div>
            </div>

            {/* Form Panel */}
            <div className="bg-white rounded-[20px] border border-zinc-200 px-11 py-10">
              {/* Section: Business Information */}
              <div className="flex items-center gap-3 text-[22px] font-extrabold text-[#0f172a] mb-7">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
                Business Information
              </div>

              <div className="mb-6">
                <label className="text-[15px] font-semibold text-[#1e293b] mb-2 block">
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Corp"
                  className="w-full bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[15px] text-[#0f172a] placeholder:text-zinc-400 font-[inherit] focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-[15px] font-semibold text-[#1e293b] mb-2 block">Business Category</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[15px] text-[#0f172a] font-[inherit] cursor-pointer focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1">
                      <option>Select category...</option>
                      <option>HVAC</option>
                      <option>Dental</option>
                      <option>Legal</option>
                      <option>Plumbing</option>
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#64748b]" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="text-[15px] font-semibold text-[#1e293b] mb-2 block">Website</label>
                  <input
                    type="text"
                    placeholder="https://example.com"
                    className="w-full bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[15px] text-[#0f172a] placeholder:text-zinc-400 font-[inherit] focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
                  />
                </div>
              </div>

              <hr className="border-none border-t border-[#eef0f4] my-1.5 mb-8" />

              {/* Section: Contact & Location */}
              <div className="flex items-center gap-3 text-[22px] font-extrabold text-[#0f172a] mb-7">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <circle cx="9" cy="10" r="2" />
                  <path d="M15 8h4" />
                  <path d="M15 12h4" />
                  <path d="M5 18c0-2 2-3 4-3s4 1 4 3" />
                </svg>
                Contact & Location
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-[15px] font-semibold text-[#1e293b] mb-2 block">
                    Primary Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748b] pointer-events-none" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                    <input
                      type="email"
                      placeholder="contact@business.com"
                      className="w-full bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] pl-12 pr-4 py-3.5 text-[15px] text-[#0f172a] placeholder:text-zinc-400 font-[inherit] focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[15px] font-semibold text-[#1e293b] mb-2 block">Phone Number</label>
                  <div className="relative">
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748b] pointer-events-none" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="(555) 123-4567"
                      className="w-full bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] pl-12 pr-4 py-3.5 text-[15px] text-[#0f172a] placeholder:text-zinc-400 font-[inherit] focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-[15px] font-semibold text-[#1e293b] mb-2 block">Location / Address</label>
                <textarea
                  placeholder="Enter full business address..."
                  rows={4}
                  className="w-full bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[15px] text-[#0f172a] placeholder:text-zinc-400 font-[inherit] resize-none focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
                />
              </div>

              <div className="mb-6">
                <label className="text-[15px] font-semibold text-[#1e293b] mb-2 block">Timezone</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[15px] text-[#0f172a] font-[inherit] cursor-pointer focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1">
                    <option>UTC (Coordinated Universal Time)</option>
                    <option>EST (Eastern Standard Time)</option>
                    <option>CST (Central Standard Time)</option>
                    <option>PST (Pacific Standard Time)</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#64748b]" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>

              <hr className="border-none border-t border-[#eef0f4] my-2 mb-8" />

              {/* Section: Account Status */}
              <div className="flex items-center gap-3 text-[22px] font-extrabold text-[#0f172a] mb-7">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="6" width="22" height="12" rx="6" />
                  <circle cx="7" cy="12" r="4" />
                </svg>
                Account Status
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div
                  className="flex items-start gap-3.5 cursor-pointer"
                  onClick={() => setStatus("active")}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${status === "active" ? "border-[#4f46e5]" : "border-[#cbd2e6]"}`}>
                    {status === "active" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#4f46e5]" />
                    )}
                  </div>
                  <div>
                    <strong className="block text-[15.5px] font-bold text-[#0f172a] mb-0.5">Active</strong>
                    <span className="text-[13.5px] text-[#64748b]">Client will be tracked immediately</span>
                  </div>
                </div>
                <div
                  className="flex items-start gap-3.5 cursor-pointer"
                  onClick={() => setStatus("inactive")}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${status === "inactive" ? "border-[#4f46e5]" : "border-[#cbd2e6]"}`}>
                    {status === "inactive" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#4f46e5]" />
                    )}
                  </div>
                  <div>
                    <strong className="block text-[15.5px] font-bold text-[#0f172a] mb-0.5">Inactive</strong>
                    <span className="text-[13.5px] text-[#64748b]">Create profile without tracking</span>
                  </div>
                </div>
              </div>

              <hr className="border-none border-t border-dashed border-[#dfe3ee] my-2.5 mb-8" />

              {/* Footer */}
              <div className="flex justify-end items-center gap-5">
                <Link href="/dashboard/clients" className="text-[15px] font-semibold text-[#1e293b] cursor-pointer hover:text-[#4f46e5] transition-colors no-underline">
                  Cancel
                </Link>
                <button className="flex items-center gap-2 bg-[#4f46e5] hover:bg-[#4338ca] text-white px-7 py-3.5 rounded-[10px] text-[15px] font-semibold cursor-pointer transition-colors">
                  Save Client
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
