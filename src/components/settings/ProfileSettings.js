"use client";

export default function ProfileSettings() {
  return (
    <div className="bg-white border border-zinc-200 rounded-[18px] p-5 md:p-8">
      <h2 className="text-xl md:text-2xl font-extrabold text-[#0f172a] mb-1.5">Profile Settings</h2>
      <p className="text-[13.5px] md:text-[14.5px] text-[#64748b] mb-5 md:mb-6">
        Update your personal information and security credentials.
      </p>

      {/* Photo Row */}
      <div className="flex items-center gap-5 mb-8">
        <img
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces"
          alt="Profile photo"
          className="w-[76px] h-[76px] rounded-full object-cover border border-zinc-200 flex-shrink-0"
        />
        <div className="flex flex-col gap-2">
          <button className="bg-[#eef1fb] text-[#1e293b] text-sm font-semibold px-[18px] py-2.5 rounded-[9px] cursor-pointer hover:bg-[#dde3fb] transition-colors w-fit">
            Change Photo
          </button>
          <div className="text-sm font-semibold text-red-500 cursor-pointer hover:text-red-600">
            Remove
          </div>
        </div>
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-5 md:mb-[22px]">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#1e293b]">First Name</label>
          <input
            type="text"
            defaultValue="Alex"
            className="bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[14.5px] text-[#0f172a] font-[inherit] focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#1e293b]">Last Name</label>
          <input
            type="text"
            defaultValue="Miller"
            className="bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[14.5px] text-[#0f172a] font-[inherit] focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2 mb-6">
        <label className="text-sm font-semibold text-[#1e293b]">Email Address</label>
        <input
          type="email"
          defaultValue="alex.miller@metriva.com"
          className="bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[14.5px] text-[#0f172a] font-[inherit] focus:outline-2 focus:outline-[#4f46e5] focus:outline-offset-1"
        />
      </div>

      <div className="border-t border-[#eef0f4] my-2 mb-6" />

      {/* Footer */}
      <div className="flex justify-end">
        <button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white text-[14.5px] font-semibold px-6 py-3.5 rounded-[10px] cursor-pointer transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}
