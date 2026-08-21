"use client";

import { useState } from "react";

const settingsTabs = [
  {
    id: "profile",
    label: "Profile Settings",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: "organization",
    label: "Organization & Branding",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
        <path d="M9 10h.01" />
        <path d="M9 14h.01" />
        <path d="M15 10h.01" />
        <path d="M15 14h.01" />
      </svg>
    ),
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
  },
  {
    id: "billing",
    label: "Billing & Subscription",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
];

export default function SettingsNav({ activeTab, onTabChange }) {
  return (
    <div className="flex md:flex-col gap-2 md:gap-1.5 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
      {settingsTabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex items-center gap-2 md:justify-between px-4 md:px-[18px] py-3 md:py-3.5 rounded-xl text-[14px] md:text-[15px] font-semibold cursor-pointer transition-colors border whitespace-nowrap flex-shrink-0 ${
            activeTab === tab.id
              ? "bg-[#4f46e5] text-white border-[#4f46e5]"
              : "bg-white text-[#334155] border-zinc-200 hover:bg-zinc-50"
          }`}
        >
          {tab.label}
          <span className={`hidden md:inline ${activeTab === tab.id ? "opacity-100" : "opacity-60"}`}>
            {tab.icon}
          </span>
        </button>
      ))}
    </div>
  );
}
