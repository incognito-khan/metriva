"use client";

import { useAuth } from "../../contexts/AuthContext";

export default function TopBar({ breadcrumb, title, searchPlaceholder = "Search reports..." }) {
  const { user } = useAuth();

  return (
    <header className="h-[82px] bg-[#eef1fb] flex items-center justify-between px-10">
      {/* Left - Breadcrumb */}
      <div className="flex items-center gap-2 text-[15px] font-semibold text-[#1e293b]">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12l9-9 9 9" />
          <path d="M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10" />
        </svg>
        <span className="text-zinc-400 font-normal">/</span>
        <span>{breadcrumb || title}</span>
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-5">
        {/* Search */}
        <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-[10px] px-4 py-2.5 w-[260px] text-zinc-400 text-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          {searchPlaceholder}
        </div>

        {/* Notification */}
        <button className="w-[38px] h-[38px] rounded-full bg-white border border-zinc-200 flex items-center justify-center relative">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
          <span className="absolute top-2 right-2 w-[7px] h-[7px] bg-red-500 rounded-full" />
        </button>

        {/* User Avatar */}
        <div className="w-[38px] h-[38px] rounded-full bg-[#4f46e5] flex items-center justify-center text-white">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>
    </header>
  );
}
