"use client";

export default function BillingSettings() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-extrabold text-[#0f172a] mb-1.5">Billing & Subscription</h2>
      <p className="text-[13.5px] md:text-[14.5px] text-[#64748b] mb-4 md:mb-5">Manage your current plan and payment methods.</p>

      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-4 md:gap-5">
        {/* Plan Card */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-7">
          <div className="inline-block bg-[#4f46e5] text-white text-xs font-bold px-3.5 py-1.5 rounded-full mb-5">
            Enterprise Plan
          </div>
          <div className="text-[30px] font-extrabold text-[#0f172a] mb-1">
            $299<span className="text-[15px] font-medium text-[#64748b]">/month</span>
          </div>
          <p className="text-sm text-[#64748b] mb-5 pb-5 border-b border-[#eef0f4]">
            Next billing date: Oct 15, 2024
          </p>
          <div className="flex gap-3">
            <button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white text-sm font-semibold px-5 py-3 rounded-[9px] cursor-pointer transition-colors">
              Upgrade Plan
            </button>
            <button className="bg-[#eef1fb] text-[#1e293b] text-sm font-semibold px-5 py-3 rounded-[9px] cursor-pointer hover:bg-[#dde3fb] transition-colors">
              View Invoices
            </button>
          </div>
        </div>

        {/* Payment Method Card */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-7">
          <div className="text-xs font-bold text-zinc-400 tracking-widest mb-4 uppercase">
            Payment Method
          </div>
          <div className="flex items-center gap-3.5 bg-[#eef1fb] rounded-xl px-4 py-3.5 mb-4">
            <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#4f46e5] flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </div>
            <div>
              <strong className="block text-[14.5px] font-bold text-[#0f172a]">Visa ending in 4242</strong>
              <span className="text-[13px] text-[#64748b]">Expires 12/25</span>
            </div>
          </div>
          <button className="w-full bg-[#eef1fb] text-[#1e293b] text-sm font-semibold px-5 py-3 rounded-[9px] cursor-pointer hover:bg-[#dde3fb] transition-colors">
            Update Payment Method
          </button>
        </div>
      </div>
    </div>
  );
}
