"use client";

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const InfoIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

export default function AssignRoleModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-[rgba(71,85,105,0.55)] flex items-center justify-center z-[100] px-4">
      <div className="bg-white rounded-[18px] w-full max-w-[560px] shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 md:px-[30px] py-5 md:py-6 border-b border-[#eef0f4]">
          <h2 className="text-[20px] md:text-[24px] font-extrabold text-[#0f172a]">Assign Role</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#64748b] cursor-pointer hover:bg-[#f4f6fb] transition-colors bg-transparent border-none"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 md:px-[30px] pt-6 md:pt-7 pb-2">
          {/* Select User */}
          <div className="flex flex-col gap-2.5 mb-6">
            <label className="text-[15px] md:text-[15.5px] font-bold text-[#1e293b]">Select User</label>
            <div className="flex items-center gap-2.5 bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[15px] text-[#94a3b8]">
              <SearchIcon />
              <span className="flex-1">Search by name or email...</span>
              <ChevronIcon />
            </div>
          </div>

          {/* Select Role */}
          <div className="flex flex-col gap-2.5 mb-6">
            <label className="text-[15px] md:text-[15.5px] font-bold text-[#1e293b]">Select Role</label>
            <div className="flex items-center justify-between bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[15px] text-[#0f172a] cursor-pointer">
              Choose a role...
              <ChevronIcon />
            </div>
          </div>

          {/* Scope to Client */}
          <div className="flex flex-col gap-2.5 mb-5">
            <label className="text-[15px] md:text-[15.5px] font-bold text-[#1e293b]">Scope to Client <span className="font-normal text-[#64748b]">(Optional)</span></label>
            <div className="flex items-center justify-between bg-[#eef1fb] border border-[#e2e6f5] rounded-[10px] px-4 py-3.5 text-[15px] text-[#0f172a] cursor-pointer">
              None (Agency-wide access)
              <ChevronIcon />
            </div>
          </div>

          {/* Help text */}
          <div className="flex items-start gap-2 text-[13.5px] text-[#64748b] leading-[1.5] mb-2">
            <span className="text-[#94a3b8] flex-shrink-0 mt-0.5"><InfoIcon /></span>
            Leave empty for agency-wide access, or select a specific client to restrict access.
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3.5 px-6 md:px-[30px] py-5 border-t border-[#eef0f4]">
          <button
            onClick={onClose}
            className="bg-transparent border-none text-[#1e293b] font-semibold text-[15px] px-5 py-3 cursor-pointer hover:text-[#4f46e5] transition-colors"
          >
            Cancel
          </button>
          <button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white border-none px-6 py-3 rounded-[10px] text-[15px] font-semibold cursor-pointer transition-colors">
            Assign Role
          </button>
        </div>
      </div>
    </div>
  );
}
