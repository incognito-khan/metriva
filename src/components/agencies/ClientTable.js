"use client";

const clients = [
  {
    name: "Acme Corp",
    type: "Direct Client",
    location: "New York, NY",
    plan: "Enterprise",
    score: 92,
    label: "Excellent",
    labelColor: "text-[#16a34a]",
    donutColor: "#16a34a",
    lastAudit: "Today, 08:30 AM",
    logoBg: "#1e293b",
    logoText: "AC",
  },
  {
    name: "Zenith Marketing",
    type: "Agency Partner",
    location: "London, UK",
    plan: "Pro",
    score: 68,
    label: "Needs Attention",
    labelColor: "text-[#1e293b]",
    donutColor: "#4f46e5",
    lastAudit: "Oct 24, 2023",
    logoBg: "#6366f1",
    logoText: "Z",
  },
  {
    name: "EcoBuild",
    type: "Direct Client",
    location: "Austin, TX",
    plan: "Basic",
    score: 45,
    label: "Critical",
    labelColor: "text-[#ef4444]",
    donutColor: "#ef4444",
    lastAudit: "Oct 20, 2023",
    logoBg: "#16a34a",
    logoText: "EB",
  },
];

function DonutChart({ score, color }) {
  const circumference = 2 * Math.PI * 19;
  const offset = circumference - (score / 100) * circumference;

  return (
    <svg width="46" height="46" viewBox="0 0 46 46" className="flex-shrink-0">
      <circle cx="23" cy="23" r="19" fill="none" stroke="#e7eaf1" strokeWidth="4" />
      <circle
        cx="23"
        cy="23"
        r="19"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 23 23)"
      />
      <text
        x="23"
        y="27"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill="#0f172a"
      >
        {score}
      </text>
    </svg>
  );
}

export default function ClientTable() {
  return (
    <div className="bg-white rounded-[18px] border border-zinc-200 overflow-x-auto">
      {/* Search row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-5 md:px-7 py-5 md:py-6">
        <div className="flex items-center gap-2.5 border border-zinc-200 rounded-[10px] px-4 py-3 w-full sm:w-[420px] text-zinc-400 text-[14.5px]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          Search clients, agencies, or locations...
        </div>
        <div className="text-[11px] md:text-xs font-bold text-zinc-400 tracking-wider">
          SHOWING 1-10 OF 142
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#f4f6fb]">
            <th className="text-left px-5 md:px-7 py-3.5 text-[13.5px] font-bold text-[#1e293b]">Client Name</th>
            <th className="text-left px-5 md:px-7 py-3.5 text-[13.5px] font-bold text-[#1e293b] hidden md:table-cell">Location</th>
            <th className="text-left px-5 md:px-7 py-3.5 text-[13.5px] font-bold text-[#1e293b] hidden lg:table-cell">Plan</th>
            <th className="text-left px-5 md:px-7 py-3.5 text-[13.5px] font-bold text-[#1e293b]">SEO Health</th>
            <th className="text-left px-5 md:px-7 py-3.5 text-[13.5px] font-bold text-[#1e293b] hidden lg:table-cell">Last Audit</th>
            <th className="text-left px-5 md:px-7 py-3.5 text-[13.5px] font-bold text-[#1e293b]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, i) => (
            <tr key={i} className="border-t border-[#f0f1f5]">
              {/* Client Name */}
              <td className="px-5 md:px-7 py-4 md:py-5">
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-[10px] flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                    style={{ backgroundColor: client.logoBg }}
                  >
                    {client.logoText}
                  </div>
                  <div>
                    <div className="font-bold text-[14px] md:text-[15px] text-[#0f172a] mb-0.5">{client.name}</div>
                    <div className="text-[12px] md:text-[13px] text-zinc-400">{client.type}</div>
                  </div>
                </div>
              </td>

              {/* Location */}
              <td className="px-5 md:px-7 py-4 md:py-5 hidden md:table-cell">
                <div className="flex items-center gap-1.5 text-[#334155] text-[14.5px]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {client.location}
                </div>
              </td>

              {/* Plan */}
              <td className="px-5 md:px-7 py-4 md:py-5 hidden lg:table-cell">
                <span
                  className={`inline-block px-3.5 py-1.5 rounded-full text-[13px] font-bold ${
                    client.plan === "Enterprise"
                      ? "bg-[#e5e2fb] text-[#4f46e5]"
                      : "bg-[#eef1fb] text-[#475569]"
                  }`}
                >
                  {client.plan}
                </span>
              </td>

              {/* SEO Health */}
              <td className="px-5 md:px-7 py-4 md:py-5">
                <div className="flex items-center gap-3.5">
                  <DonutChart score={client.score} color={client.donutColor} />
                  <span className={`font-semibold text-[13.5px] md:text-[14.5px] ${client.labelColor}`}>
                    {client.label}
                  </span>
                </div>
              </td>

              {/* Last Audit */}
              <td className="px-5 md:px-7 py-4 md:py-5 text-[#334155] text-[14.5px] hidden lg:table-cell">{client.lastAudit}</td>

              {/* Actions */}
              <td className="px-5 md:px-7 py-4 md:py-5 text-zinc-400 cursor-pointer hover:text-zinc-600">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="5" r="1.5" />
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="12" cy="19" r="1.5" />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div className="flex items-center justify-between px-7 py-5">
        <div className="text-sm text-[#64748b]">Showing 3 entries</div>
        <div className="flex items-center gap-2">
          <button className="w-[34px] h-[34px] rounded-lg border border-zinc-200 bg-white text-[#64748b] flex items-center justify-center cursor-pointer hover:bg-zinc-50">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="w-[34px] h-[34px] rounded-lg bg-[#4f46e5] border border-[#4f46e5] text-white flex items-center justify-center cursor-pointer text-sm font-semibold">
            1
          </button>
          <button className="w-[34px] h-[34px] rounded-lg border border-zinc-200 bg-white text-[#64748b] flex items-center justify-center cursor-pointer hover:bg-zinc-50 text-sm font-semibold">
            2
          </button>
          <button className="w-[34px] h-[34px] rounded-lg border border-zinc-200 bg-white text-[#64748b] flex items-center justify-center cursor-pointer hover:bg-zinc-50">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
