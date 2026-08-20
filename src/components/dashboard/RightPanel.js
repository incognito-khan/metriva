"use client";

const entries = [
  { id: 1, name: "Google Business", icon: "G", color: "#4285F4", value: "+125", change: "+18%" },
  { id: 2, name: "Organic Search", icon: "O", color: "#34A853", value: "+89", change: "+12%" },
  { id: 3, name: "Local Pack", icon: "L", color: "#FBBC05", value: "+67", change: "+8%" },
  { id: 4, name: "Maps", icon: "M", color: "#EA4335", value: "+45", change: "+5%" },
  { id: 5, name: "Reviews", icon: "R", color: "#9C27B0", value: "+32", change: "+15%" },
  { id: 6, name: "Citations", icon: "C", color: "#FF5722", value: "+28", change: "+10%" },
];

export default function RightPanel() {
  return (
    <div className="w-72 bg-white border border-zinc-200 flex flex-col h-full rounded-2xl">
      {/* Header */}
      <div className="p-4">
        <p className="text-sm text-zinc-500">Top Performing</p>
      </div>

      {/* Entries List */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3">
          {entries.slice(0, 4).map((entry) => (
            <div
              key={entry.id}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-50 transition-colors cursor-pointer"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-semibold text-sm"
                style={{ backgroundColor: entry.color }}
              >
                {entry.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-zinc-900 truncate">{entry.name}</p>
                <p className="text-xs text-zinc-500">{entry.change} this month</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-[#4648D4] flex items-center justify-end gap-1">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.08333 9.33333V2.23125L0.816667 5.49792L0 4.66667L4.66667 0L9.33333 4.66667L8.51667 5.49792L5.25 2.23125V9.33333H4.08333Z" fill="#4648D4"/>
                  </svg>
                  {entry.value.replace('+', '')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4">
        <button className="w-full py-2 px-4 bg-zinc-100 hover:bg-zinc-200 text-[#4648D4] text-sm font-medium rounded-lg transition-colors cursor-pointer">
          View All Channels
        </button>
      </div>
    </div>
  );
}
