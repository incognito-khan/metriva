"use client";

const stats = [
  {
    label: "TOTAL CLIENTS",
    value: "148",
    iconBg: "#e5e2fb",
    iconColor: "#4f46e5",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
        <path d="M9 10h.01" />
        <path d="M9 14h.01" />
        <path d="M15 10h.01" />
        <path d="M15 14h.01" />
      </svg>
    ),
  },
  {
    label: "ACTIVE CLIENTS",
    value: "132",
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
  },
  {
    label: "INACTIVE CLIENTS",
    value: "16",
    iconBg: "#dbeafe",
    iconColor: "#2563eb",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="9" y1="12" x2="15" y2="12" />
      </svg>
    ),
  },
];

export default function DashboardStatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-7">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white border border-zinc-200 rounded-2xl px-6 py-6 flex justify-between items-center"
        >
          <div>
            <div className="text-xs font-bold tracking-[.06em] text-[#334155] uppercase mb-3.5">
              {stat.label}
            </div>
            <div className="text-[26px] font-extrabold text-[#0f172a] tracking-[-0.5px]">
              {stat.value}
            </div>
          </div>
          <div
            className="w-[42px] h-[42px] rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: stat.iconBg, color: stat.iconColor }}
          >
            {stat.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
