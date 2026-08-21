"use client";

const stats = [
  {
    title: "Total Clients",
    value: "142",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-1a4 4 0 00-3-3.87" />
        <circle cx="17" cy="7" r="3" />
      </svg>
    ),
    change: "+12%",
    changeLabel: "vs last month",
    type: "growth",
  },
  {
    title: "Avg. SEO Health",
    value: "86%",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    progress: 86,
    type: "progress",
  },
  {
    title: "Critical Issues",
    value: "14",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    ),
    sub: "Across 8 active clients",
    type: "critical",
  },
];

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-7">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-[#e5eafa] rounded-[18px] px-7 py-7 relative overflow-hidden"
        >
          {/* Decorative blob */}
          <div className="absolute -top-[30px] -right-[30px] w-[140px] h-[140px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.55),rgba(255,255,255,0))]" />

          {/* Header */}
          <div className="flex items-center gap-2 text-[14.5px] font-semibold text-[#334155] mb-5">
            {stat.icon}
            {stat.title}
          </div>

          {/* Value */}
          <div className="text-[40px] font-extrabold text-[#0f172a] mb-3 tracking-[-1px]">
            {stat.value}
          </div>

          {/* Growth */}
          {stat.type === "growth" && (
            <div className="text-[13.5px] text-[#64748b] flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 6l-9.5 9.5-5-5L1 18" />
                <path d="M17 6h6v6" />
              </svg>
              <span className="text-[#4f46e5] font-bold">{stat.change}</span> {stat.changeLabel}
            </div>
          )}

          {/* Progress */}
          {stat.type === "progress" && (
            <div className="h-[7px] bg-[#cdd4ee] rounded-md mt-1 overflow-hidden">
              <div
                className="h-full bg-[#1e293b] rounded-md"
                style={{ width: `${stat.progress}%` }}
              />
            </div>
          )}

          {/* Critical */}
          {stat.type === "critical" && (
            <div className="text-[13.5px] text-[#64748b]">{stat.sub}</div>
          )}
        </div>
      ))}
    </div>
  );
}
