"use client";

export default function EditPanel({ roleName, description, permissions, onToggle, onSave, onDiscard }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] bg-white rounded-[18px] overflow-hidden border border-zinc-200">
      {/* Left side - Info */}
      <div className="bg-[#eef1fb] px-[34px] py-10 relative overflow-hidden">
        <h2 className="text-[27px] font-extrabold text-[#1e293b] mb-4 leading-tight">
          Edit &apos;{roleName}&apos; Permissions
        </h2>
        <p className="text-[14.5px] text-[#64748b] leading-relaxed">
          {description}
        </p>
        {/* Decorative blobs */}
        <div className="absolute w-[180px] h-[180px] rounded-full bg-[#dfe3f7] bottom-[-60px] left-[90px]" />
        <div className="absolute w-[110px] h-[110px] rounded-full bg-[#e6e9f5] bottom-[-30px] left-[30px]" />
      </div>

      {/* Right side - Permissions */}
      <div className="px-10 py-8 flex flex-col">
        {permissions.map((perm, index) => (
          <div
            key={perm.id}
            className={`flex justify-between items-start py-[22px] ${
              index < permissions.length - 1 ? "border-b border-[#f0f1f5]" : ""
            }`}
          >
            <div className="flex-1">
              <strong className="block text-[15.5px] font-bold text-[#1e293b] mb-1.5">
                {perm.title}
              </strong>
              <span className="text-[13.5px] text-[#64748b]">{perm.desc}</span>
            </div>

            {/* Toggle Switch */}
            <label className="relative w-[46px] h-[26px] flex-shrink-0 ml-5 cursor-pointer">
              <input
                type="checkbox"
                checked={perm.enabled}
                onChange={() => onToggle(perm.id)}
                className="sr-only"
              />
              <span
                className={`absolute inset-0 rounded-full transition-colors ${
                  perm.enabled ? "bg-[#4f46e5]" : "bg-[#d7dbe6]"
                }`}
              />
              <span
                className={`absolute left-[3px] top-[3px] w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                  perm.enabled ? "translate-x-5" : ""
                }`}
              />
            </label>
          </div>
        ))}

        {/* Footer */}
        <div className="mt-auto pt-6 flex justify-end items-center gap-5">
          <button
            onClick={onDiscard}
            className="text-sm font-semibold text-[#1e293b] cursor-pointer hover:text-[#4f46e5] transition-colors"
          >
            Discard
          </button>
          <button
            onClick={onSave}
            className="bg-[#4f46e5] hover:bg-[#4338ca] text-white text-sm font-semibold px-6 py-3 rounded-[10px] cursor-pointer transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
