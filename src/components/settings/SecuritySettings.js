"use client";

export default function SecuritySettings() {
  return (
    <div className="bg-white border border-zinc-200 rounded-[18px] p-5 md:p-8">
      <h2 className="text-xl md:text-2xl font-extrabold text-[#0f172a]">Security</h2>

      <div className="flex flex-col gap-2 mt-6 mb-[22px]">
        <label className="text-sm font-semibold text-[#1e293b]">Current Password</label>
        <input
          type="password"
          defaultValue="••••••••"
          className="bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[14.5px] text-[#0f172a] font-[inherit] focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-5 md:mb-[22px]">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#1e293b]">New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            className="bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[14.5px] text-[#0f172a] font-[inherit] placeholder:text-zinc-400 focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#1e293b]">Confirm New Password</label>
          <input
            type="password"
            placeholder="Confirm new password"
            className="bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[14.5px] text-[#0f172a] font-[inherit] placeholder:text-zinc-400 focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
          />
        </div>
      </div>

      <div className="border-t border-[#eef0f4] my-2 mb-6" />

      <div className="flex justify-end">
        <button className="bg-[#eef1fb] text-[#1e293b] text-[14.5px] font-semibold px-6 py-3.5 rounded-[10px] cursor-pointer hover:bg-[#dde3fb] transition-colors">
          Update Password
        </button>
      </div>
    </div>
  );
}
