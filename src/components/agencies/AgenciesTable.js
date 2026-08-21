"use client";

const agencies = [
  {
    name: "Skyline Digital",
    initial: "S",
    avatarBg: "#e5e2fb",
    avatarColor: "#4f46e5",
    email: "hello@skylinedigital.com",
    phone: "+1 (555) 019-2837",
    status: "Active",
    created: "Oct 12, 2023",
  },
  {
    name: "Nexus Marketing",
    initial: "N",
    avatarBg: "#dbeafe",
    avatarColor: "#2563eb",
    email: "admin@nexusmktg.com",
    phone: "+1 (555) 438-9921",
    status: "Active",
    created: "Sep 28, 2023",
  },
  {
    name: "Prism SEO",
    initial: "P",
    avatarBg: "#fde3e3",
    avatarColor: "#ef4444",
    email: "contact@prismseo.net",
    phone: "+1 (555) 882-1044",
    status: "Suspended",
    created: "Aug 15, 2023",
  },
  {
    name: "Velocity Media",
    initial: "V",
    avatarBg: "#d1fae5",
    avatarColor: "#16a34a",
    email: "sarah@velocitymedia.co",
    phone: "+44 20 7946 0958",
    status: "Active",
    created: "Jul 02, 2023",
  },
  {
    name: "Summit Agency",
    initial: "S",
    avatarBg: "#ede9fe",
    avatarColor: "#7c3aed",
    email: "info@summit-agency.com",
    phone: "+1 (555) 332-9011",
    status: "Active",
    created: "May 19, 2023",
  },
  {
    name: "Horizon Labs",
    initial: "H",
    avatarBg: "#fef3c7",
    avatarColor: "#d97706",
    email: "billing@horizonlabs.io",
    phone: "+1 (555) 778-2234",
    status: "Active",
    created: "Apr 04, 2023",
  },
];

const ThreeDots = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="5" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="12" cy="19" r="1.5" />
  </svg>
);

export default function AgenciesTable({ onOpenModal }) {
  return (
    <div className="bg-white rounded-[18px] border border-zinc-200 overflow-x-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-5 px-5 md:px-8 py-6 md:py-7">
        <div>
          <h2 className="text-[18px] md:text-[22px] font-extrabold text-[#0f172a] mb-2">Agencies</h2>
          <p className="text-[13.5px] md:text-[14.5px] text-[#64748b] max-w-[420px] leading-relaxed">
            Manage and monitor all agency accounts across the platform.
          </p>
        </div>
        <div className="flex flex-col items-start lg:items-end gap-3 w-full lg:w-auto">
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            {/* Search */}
            <div className="flex items-center gap-2 border border-zinc-200 rounded-[10px] px-4 py-[11px] w-full sm:w-[260px] text-zinc-400 text-sm">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              Search agencies...
            </div>

            {/* Status Filter */}
            <button className="flex items-center justify-between sm:justify-center gap-2 border border-zinc-200 rounded-[10px] px-4 py-[11px] text-[#334155] text-sm font-semibold cursor-pointer hover:bg-zinc-50 transition-colors whitespace-nowrap">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
              </svg>
              Status: All
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>

          {/* Create Button */}
          <button onClick={onOpenModal} className="flex items-center justify-center gap-2 bg-[#4f46e5] hover:bg-[#4338ca] text-white px-5 py-3 rounded-[10px] text-[14.5px] font-semibold cursor-pointer transition-colors whitespace-nowrap w-full sm:w-auto">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round">
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
            Create Agency
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#eef1fb]">
            <th className="text-left px-5 md:px-8 py-4 text-xs font-bold text-[#334155] tracking-wider uppercase">Agency Name</th>
            <th className="text-left px-5 md:px-8 py-4 text-xs font-bold text-[#334155] tracking-wider uppercase hidden md:table-cell">Admin Email</th>
            <th className="text-left px-5 md:px-8 py-4 text-xs font-bold text-[#334155] tracking-wider uppercase hidden lg:table-cell">Phone</th>
            <th className="text-left px-5 md:px-8 py-4 text-xs font-bold text-[#334155] tracking-wider uppercase">Status</th>
            <th className="text-left px-5 md:px-8 py-4 text-xs font-bold text-[#334155] tracking-wider uppercase hidden lg:table-cell">Created At</th>
            <th className="text-left px-5 md:px-8 py-4 text-xs font-bold text-[#334155] tracking-wider uppercase">Actions</th>
          </tr>
        </thead>
        <tbody>
          {agencies.map((agency, i) => (
            <tr
              key={i}
              className={`border-t border-[#f0f1f5] ${agency.status === "Suspended" ? "bg-[#fdf2f2]" : ""}`}
            >
              {/* Agency Name */}
              <td className="px-5 md:px-8 py-4 md:py-[22px]">
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-[14px] md:text-[15px] flex-shrink-0"
                    style={{ backgroundColor: agency.avatarBg, color: agency.avatarColor }}
                  >
                    {agency.initial}
                  </div>
                  <div className="font-bold text-[14px] md:text-[15.5px] text-[#0f172a]">{agency.name}</div>
                </div>
              </td>

              {/* Email */}
              <td className="px-5 md:px-8 py-4 md:py-[22px] text-[#334155] hidden md:table-cell">{agency.email}</td>

              {/* Phone */}
              <td className="px-5 md:px-8 py-4 md:py-[22px] text-[#334155] hidden lg:table-cell">{agency.phone}</td>

              {/* Status */}
              <td className="px-5 md:px-8 py-4 md:py-[22px]">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-[6px] md:px-3.5 md:py-[7px] rounded-full text-[12.5px] md:text-[13.5px] font-bold ${
                    agency.status === "Active"
                      ? "bg-[#e5e2fb] text-[#4f46e5]"
                      : "bg-[#fbdada] text-[#ef4444]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      agency.status === "Active" ? "bg-[#4f46e5]" : "bg-[#ef4444]"
                    }`}
                  />
                  {agency.status}
                </span>
              </td>

              {/* Created */}
              <td className="px-5 md:px-8 py-4 md:py-[22px] text-[#334155] hidden lg:table-cell">{agency.created}</td>

              {/* Actions */}
              <td className="px-5 md:px-8 py-4 md:py-[22px] text-zinc-400 cursor-pointer hover:text-zinc-600">
                <ThreeDots />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 md:px-8 py-4 md:py-5">
        <div className="text-[14.5px] text-[#475569]">
          Showing <span className="font-bold text-[#0f172a]">1</span> to <span className="font-bold text-[#0f172a]">6</span> of <span className="font-bold text-[#0f172a]">124</span> results
        </div>
        <div className="flex items-center gap-2">
          <button className="min-w-[38px] h-[38px] rounded-[9px] border border-zinc-200 bg-white text-zinc-300 flex items-center justify-center cursor-pointer text-sm font-semibold px-3">
            ‹ Prev
          </button>
          <button className="min-w-[38px] h-[38px] rounded-[9px] bg-[#4f46e5] border border-[#4f46e5] text-white flex items-center justify-center cursor-pointer text-sm font-semibold px-3">
            1
          </button>
          <button className="min-w-[38px] h-[38px] rounded-[9px] border border-zinc-200 bg-white text-[#475569] flex items-center justify-center cursor-pointer text-sm font-semibold px-3 hover:bg-zinc-50">
            2
          </button>
          <button className="min-w-[38px] h-[38px] rounded-[9px] border border-zinc-200 bg-white text-[#475569] flex items-center justify-center cursor-pointer text-sm font-semibold px-3 hover:bg-zinc-50">
            3
          </button>
          <span className="text-zinc-400 px-1">…</span>
          <button className="min-w-[38px] h-[38px] rounded-[9px] border border-zinc-200 bg-white text-[#475569] flex items-center justify-center cursor-pointer text-sm font-semibold px-3 hover:bg-zinc-50">
            21
          </button>
          <button className="min-w-[38px] h-[38px] rounded-[9px] border border-zinc-200 bg-white text-[#475569] flex items-center justify-center cursor-pointer text-sm font-semibold px-3 hover:bg-zinc-50">
            Next ›
          </button>
        </div>
      </div>
    </div>
  );
}
