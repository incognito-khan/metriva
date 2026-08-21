"use client";

export default function RoleCard({ name, desc, icon, iconBg, iconColor, userCount, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl p-[22px] cursor-pointer transition-all border-[1.5px] ${
        selected
          ? "border-[#4f46e5] shadow-[0_0_0_3px_rgba(79,70,229,0.12)]"
          : "border-zinc-200 hover:shadow-[0_4px_14px_rgba(15,23,42,0.06)]"
      }`}
    >
      {/* Top row */}
      <div className="flex justify-between items-start mb-[18px]">
        <div
          className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center"
          style={{ backgroundColor: iconBg, color: iconColor }}
        >
          {icon}
        </div>
        <div className="bg-[#f1f4fb] text-[#475569] text-xs font-semibold px-3 py-[5px] rounded-full">
          {userCount} Users
        </div>
      </div>

      {/* Info */}
      <h3 className="text-[20px] font-bold text-zinc-900 mb-2">{name}</h3>
      <p className="text-sm text-[#64748b] leading-relaxed">{desc}</p>
    </div>
  );
}
