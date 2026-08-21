"use client";

import Link from "next/link";

const clients = [
  {
    name: "Dallas HVAC Pros",
    website: "dallashvac.com",
    category: "HVAC",
    location: "Dallas, TX",
    status: "Active",
  },
  {
    name: "Austin Dental Care",
    website: "austindental.com",
    category: "Dental",
    location: "Austin, TX",
    status: "Active",
  },
  {
    name: "Seattle Legal Group",
    website: "seattlelegal.com",
    category: "Legal",
    location: "Seattle, WA",
    status: "Active",
  },
  {
    name: "Portland Plumbing Solutions",
    website: "pdxplumbing.com",
    category: "Plumbing",
    location: "Portland, OR",
    status: "Inactive",
  },
  {
    name: "Miami Smile Clinic",
    website: "miamismile.com",
    category: "Dental",
    location: "Miami, FL",
    status: "Active",
  },
  {
    name: "Chicago Defense Attorneys",
    website: "chicagodefense.com",
    category: "Legal",
    location: "Chicago, IL",
    status: "Active",
  },
];

const ThreeDots = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="5" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="12" cy="19" r="1.5" />
  </svg>
);

const BuildingIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 21v-6h6v6" />
    <path d="M9 10h.01" />
    <path d="M9 14h.01" />
    <path d="M15 10h.01" />
    <path d="M15 14h.01" />
  </svg>
);

const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const ChevronDown = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round">
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

const PrevIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const NextIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export default function ClientsTable() {
  return (
    <div className="bg-white rounded-[18px] border border-zinc-200 overflow-x-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-5 md:px-8 py-5 md:py-[26px]">
        <h2 className="text-[18px] md:text-[22px] font-extrabold text-[#0f172a]">Clients</h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-2 border border-zinc-200 rounded-[10px] px-4 py-[11px] w-full sm:w-[260px] text-zinc-400 text-sm">
            <SearchIcon />
            Search clients...
          </div>
          <button className="flex items-center justify-between gap-5 border border-zinc-200 rounded-[10px] px-4 py-[11px] text-[#334155] text-sm font-semibold cursor-pointer hover:bg-zinc-50 transition-colors whitespace-nowrap">
            Category
            <ChevronDown />
          </button>
          <Link href="/agencies/clients/add" className="flex items-center justify-center gap-2 bg-[#4f46e5] hover:bg-[#4338ca] text-white px-5 py-3 rounded-[10px] text-[14.5px] font-semibold cursor-pointer transition-colors whitespace-nowrap no-underline">
            <PlusIcon />
            Add Client
          </Link>
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#eef1fb]">
            <th className="text-left px-5 md:px-8 py-4 text-xs font-bold text-[#334155] tracking-wider uppercase">Business Name</th>
            <th className="text-left px-5 md:px-8 py-4 text-xs font-bold text-[#334155] tracking-wider uppercase hidden md:table-cell">Website</th>
            <th className="text-left px-5 md:px-8 py-4 text-xs font-bold text-[#334155] tracking-wider uppercase hidden lg:table-cell">Category</th>
            <th className="text-left px-5 md:px-8 py-4 text-xs font-bold text-[#334155] tracking-wider uppercase hidden lg:table-cell">Location</th>
            <th className="text-left px-5 md:px-8 py-4 text-xs font-bold text-[#334155] tracking-wider uppercase">Status</th>
            <th className="text-left px-5 md:px-8 py-4 text-xs font-bold text-[#334155] tracking-wider uppercase">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, i) => (
            <tr key={i} className="border-t border-[#f0f1f5]">
              {/* Business Name */}
              <td className="px-5 md:px-8 py-4 md:py-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-[9px] bg-[#e5e2fb] text-[#4f46e5] flex items-center justify-center flex-shrink-0">
                    <BuildingIcon />
                  </div>
                  <div className="font-bold text-[14px] md:text-[15px] text-[#0f172a]">{client.name}</div>
                </div>
              </td>

              {/* Website */}
              <td className="px-5 md:px-8 py-4 md:py-5 hidden md:table-cell">
                <a href="#" className="text-[#4f46e5] font-medium hover:underline">{client.website}</a>
              </td>

              {/* Category */}
              <td className="px-5 md:px-8 py-4 md:py-5 text-[#334155] hidden lg:table-cell">{client.category}</td>

              {/* Location */}
              <td className="px-5 md:px-8 py-4 md:py-5 text-[#334155] hidden lg:table-cell">{client.location}</td>

              {/* Status */}
              <td className="px-5 md:px-8 py-4 md:py-5">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-[5px] rounded-full text-[12.5px] md:text-[13.5px] font-bold ${
                    client.status === "Active"
                      ? "bg-[#dcfce7] text-[#16a34a]"
                      : "bg-[#eef1fb] text-[#64748b]"
                  }`}
                >
                  {client.status}
                </span>
              </td>

              {/* Actions */}
              <td className="px-5 md:px-8 py-4 md:py-5 text-zinc-400 cursor-pointer hover:text-zinc-600">
                <ThreeDots />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 md:px-8 py-4 md:py-5">
        <div className="text-[13px] md:text-[14.5px] text-[#475569]">
          Showing 1 to 6 of 148 results
        </div>
        <div className="flex items-center gap-2">
          <button className="min-w-[36px] h-[36px] rounded-[9px] border border-zinc-200 bg-white text-zinc-400 flex items-center justify-center cursor-pointer px-2.5">
            <PrevIcon />
          </button>
          <button className="min-w-[36px] h-[36px] rounded-[9px] bg-[#4f46e5] border border-[#4f46e5] text-white flex items-center justify-center cursor-pointer text-sm font-semibold px-2.5">
            1
          </button>
          <button className="min-w-[36px] h-[36px] rounded-[9px] border border-zinc-200 bg-white text-[#475569] flex items-center justify-center cursor-pointer text-sm font-semibold px-2.5 hover:bg-zinc-50">
            2
          </button>
          <button className="min-w-[36px] h-[36px] rounded-[9px] border border-zinc-200 bg-white text-[#475569] flex items-center justify-center cursor-pointer text-sm font-semibold px-2.5 hover:bg-zinc-50">
            3
          </button>
          <span className="text-zinc-400 px-1">…</span>
          <button className="min-w-[36px] h-[36px] rounded-[9px] border border-zinc-200 bg-white text-[#475569] flex items-center justify-center cursor-pointer text-sm font-semibold px-2.5 hover:bg-zinc-50">
            25
          </button>
          <button className="min-w-[36px] h-[36px] rounded-[9px] border border-zinc-200 bg-white text-zinc-400 flex items-center justify-center cursor-pointer px-2.5">
            <NextIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
