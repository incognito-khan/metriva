"use client";

import Link from "next/link";

export default function HeroBanner({ onAssignRole }) {
  return (
    <div className="bg-[#e9edfb] rounded-[20px] px-6 md:px-10 py-6 md:py-8 flex flex-col md:flex-row justify-between items-start gap-5 mb-6">
      <div>
        <h1 className="text-[24px] md:text-[32px] font-extrabold text-[#0f172a] mb-3 tracking-[-0.5px]">
          Agencies & Clients
        </h1>
        <p className="text-[14px] md:text-[15px] text-[#64748b] max-w-[640px] leading-relaxed">
          Manage your agency partners and direct client accounts. Monitor their overall SEO health and subscription status.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 w-full md:w-auto">
        <button
          onClick={onAssignRole}
          className="flex-1 min-w-[140px] md:flex-none flex items-center justify-center gap-2 bg-[#1e293b] hover:bg-[#334155] text-white px-5 py-3 rounded-[10px] text-[14.5px] font-semibold cursor-pointer transition-colors whitespace-nowrap"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87" />
            <path d="M16 3.13a4 4 0 010 7.75" />
          </svg>
          Assign Role
        </button>
        <button className="flex-1 min-w-[120px] md:flex-none flex items-center justify-center gap-2 bg-white text-[#334155] border border-[#d8dcec] px-5 py-3 rounded-[10px] text-[14.5px] font-semibold cursor-pointer hover:bg-zinc-50 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
          </svg>
          Filters
        </button>
        <Link href="/agencies/clients/add" className="flex-1 min-w-[160px] md:flex-none flex items-center justify-center gap-2 bg-[#4f46e5] hover:bg-[#4338ca] text-white px-5 py-3 rounded-[10px] text-[14.5px] font-semibold cursor-pointer transition-colors whitespace-nowrap no-underline">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
            <path d="M12 5v14" />
            <path d="M5 12h14" />
          </svg>
          Add New Client
        </Link>
      </div>
    </div>
  );
}
