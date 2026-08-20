"use client";

export default function MetricCard({ title, value, change, changeType = "up", icon, iconBg, bgColor, progress, trendIcon, miniChart }) {
  const isPositive = changeType === "up";
  const isBlueBg = !!bgColor;

  const maxVal = miniChart ? Math.max(...miniChart) : 0;

  return (
    <div
      className="rounded-xl border p-5 hover:shadow-md transition-shadow"
      style={{
        backgroundColor: bgColor || "#ffffff",
        borderColor: isBlueBg ? "transparent" : "#e4e4e7",
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className={`text-sm font-medium uppercase tracking-wide ${isBlueBg ? "text-white/80" : "text-zinc-500"}`}>{title}</p>

          {/* Value + inline change */}
          <div className="flex items-center gap-2 mt-1">
            <p className={`text-sm font-bold ${isBlueBg ? "text-white" : "text-zinc-900"}`}>{value}</p>
            {change && changeType === "blue" && !trendIcon && (
              <span className={`text-sm font-medium ${isBlueBg ? "text-white" : "text-[#4648D4]"}`}>
                {change}
              </span>
            )}
          </div>

          {/* Up arrow + text on next line */}
          {change && changeType === "blue" && trendIcon === "up" && (
            <span className={`text-sm font-medium flex items-center gap-1 mt-1 ${isBlueBg ? "text-white" : "text-[#4648D4]"}`}>
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.933333 8L0 7.06667L4.93333 2.1L7.6 4.76667L11.0667 1.33333H9.33333V0H13.3333V4H12V2.26667L7.6 6.66667L4.93333 4L0.933333 8Z" fill="#4648D4"/>
              </svg>
              Top 15% industry
            </span>
          )}

          {/* Right arrow button */}
          {change && changeType === "blue" && trendIcon === "right" && (
            <button className={`text-sm font-medium inline-flex items-center gap-1.5 mt-1 px-2 py-1 rounded-md cursor-pointer hover:opacity-80 transition-opacity ${isBlueBg ? "text-white bg-white/15" : "text-[#4648D4] bg-[#4648D4]/10"}`}>
              {change}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
        {icon && (
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: isBlueBg ? "rgba(255,255,255,0.2)" : (iconBg || "#EEF2FF") }}
          >
            {icon}
          </div>
        )}
      </div>
      {change && changeType !== "blue" && (
        <div className="mt-3 flex items-center gap-1.5">
          <span className={`text-sm font-medium ${isBlueBg ? "text-white" : (isPositive ? "text-emerald-600" : "text-red-600")}`}>
            {isPositive ? "↑" : "↓"} {change}
          </span>
          <span className={`text-xs ${isBlueBg ? "text-white/70" : "text-zinc-500"}`}>vs last month</span>
        </div>
      )}
      {progress && (
        <div className="mt-4">
          <div className={`w-full h-2 rounded-full ${isBlueBg ? "bg-white/20" : "bg-zinc-100"}`}>
            <div
              className="h-full rounded-full bg-[#4648D4]"
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
        </div>
      )}
      {miniChart && (
        <div className="mt-3 flex items-end gap-1 h-10">
          {miniChart.map((val, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-[#4648D4]"
              style={{ height: `${(val / maxVal) * 100}%` }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
