"use client";

const stats = [
  {
    label: "TOTAL\nAGENCIES",
    value: "124",
    change: "8%",
    changeType: "up",
    iconBg: "bg-[#e5e2fb]",
    iconColor: "text-[#4f46e5]",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    label: "ACTIVE\nAGENCIES",
    value: "118",
    change: "5%",
    changeType: "up",
    iconBg: "bg-[#dcfce7]",
    iconColor: "text-[#16a34a]",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
  },
  {
    label: "SUSPENDED\nAGENCIES",
    value: "6",
    change: "2%",
    changeType: "down",
    iconBg: "bg-[#fde3e3]",
    iconColor: "text-[#ef4444]",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M4.9 4.9l14.2 14.2" />
      </svg>
    ),
  },
  {
    label: "TOTAL\nCLIENTS",
    value: "842",
    change: "15%",
    changeType: "up",
    iconBg: "bg-[#e5e2fb]",
    iconColor: "text-[#4f46e5]",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-1a4 4 0 00-3-3.87" />
        <circle cx="17" cy="7" r="3" />
      </svg>
    ),
  },
];

const UpArrow = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 6l-9.5 9.5-5-5L1 18" />
    <path d="M17 6h6v6" />
  </svg>
);

const DownArrow = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 18l-9.5-9.5-5 5L1 6" />
    <path d="M17 18h6v-6" />
  </svg>
);

export default function AgencyStatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-7">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white border border-zinc-200 rounded-2xl px-6 py-6">
          <div className="flex justify-between items-start mb-[22px]">
            <div className="text-[12.5px] font-bold tracking-[.06em] text-[#334155] uppercase leading-[1.4] whitespace-pre-line">
              {stat.label}
            </div>
            <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${stat.iconBg} ${stat.iconColor}`}>
              {stat.icon}
            </div>
          </div>
          <div className="text-[32px] font-extrabold text-[#0f172a] mb-3 tracking-[-0.5px]">
            {stat.value}
          </div>
          <div className="inline-flex items-center gap-1.5 text-sm text-[#64748b]">
            <span className={`inline-flex items-center gap-1 bg-[#eef1fb] text-[#334155] text-xs font-bold px-2.5 py-1 rounded-full ${stat.changeType === "up" ? "text-[#4f46e5]" : "text-[#ef4444]"}`}>
              {stat.changeType === "up" ? <UpArrow /> : <DownArrow />}
              {stat.change}
            </span>
            vs last month
          </div>
        </div>
      ))}
    </div>
  );
}
