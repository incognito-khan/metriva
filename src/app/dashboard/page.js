"use client";

import ProtectedRoute from "../../components/auth/ProtectedRoute";
import Sidebar from "../../components/dashboard/Sidebar";
import TopBar from "../../components/dashboard/TopBar";
import MetricCard from "../../components/dashboard/MetricCard";
import LineChart from "../../components/dashboard/LineChart";
import RightPanel from "../../components/dashboard/RightPanel";

const metrics = [
  {
    title: "Active Clients",
    value: "156",
    change: "+12 this month",
    changeType: "blue",
    progress: { lastMonth: "130", thisMonth: "156", percentage: 83 },
    iconBg: "#EEF2FF",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4648D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "AVG SEO SCORE",
    value: "86/100",
    change: "Top 15% industry",
    changeType: "blue",
    trendIcon: "up",
    iconBg: "#EEF2FF",
    icon: (
      <svg width="20" height="16" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.3375 8.625C6.6375 8.925 7.025 9.07188 7.5 9.06563C7.975 9.05937 8.325 8.8875 8.55 8.55L12.75 2.25L6.45 6.45C6.1125 6.675 5.93438 7.01875 5.91563 7.48125C5.89687 7.94375 6.0375 8.325 6.3375 8.625ZM7.5 0C8.2375 0 8.94688 0.103125 9.62813 0.309375C10.3094 0.515625 10.95 0.825 11.55 1.2375L10.125 2.1375C9.7125 1.925 9.28438 1.76562 8.84062 1.65937C8.39687 1.55312 7.95 1.5 7.5 1.5C5.8375 1.5 4.42188 2.08437 3.25312 3.25312C2.08437 4.42188 1.5 5.8375 1.5 7.5C1.5 8.025 1.57188 8.54375 1.71563 9.05625C1.85938 9.56875 2.0625 10.05 2.325 10.5H12.675C12.9625 10.025 13.1719 9.53125 13.3031 9.01875C13.4344 8.50625 13.5 7.975 13.5 7.425C13.5 6.975 13.4469 6.5375 13.3406 6.1125C13.2344 5.6875 13.075 5.275 12.8625 4.875L13.7625 3.45C14.1375 4.0375 14.4344 4.6625 14.6531 5.325C14.8719 5.9875 14.9875 6.675 15 7.3875C15.0125 8.1 14.9313 8.78125 14.7563 9.43125C14.5813 10.0812 14.325 10.7 13.9875 11.2875C13.85 11.5125 13.6625 11.6875 13.425 11.8125C13.1875 11.9375 12.9375 12 12.675 12H2.325C2.0625 12 1.8125 11.9375 1.575 11.8125C1.3375 11.6875 1.15 11.5125 1.0125 11.2875C0.6875 10.725 0.4375 10.1281 0.2625 9.49687C0.0875 8.86562 0 8.2 0 7.5C0 6.4625 0.196875 5.49062 0.590625 4.58437C0.984375 3.67812 1.52188 2.88438 2.20312 2.20312C2.88438 1.52188 3.68125 0.984375 4.59375 0.590625C5.50625 0.196875 6.475 0 7.5 0Z" fill="#0B1C30"/>
      </svg>
    ),
  },
  {
    title: "KEYWORD GROWTH",
    value: "3.4k",
    miniChart: [30, 45, 35, 55, 40, 65, 50],
    iconBg: "#EFF6FF",
    icon: (
      <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 13.5V12L1.5 10.5V13.5H0ZM3 13.5V9L4.5 7.5V13.5H3ZM6 13.5V7.5L7.5 9.01875V13.5H6ZM9 13.5V9.01875L10.5 7.51875V13.5H9ZM12 13.5V6L13.5 4.5V13.5H12ZM0 9.61875V7.5L5.25 2.25L8.25 5.25L13.5 0V2.11875L8.25 7.36875L5.25 4.36875L0 9.61875Z" fill="#0B1C30"/>
      </svg>
    ),
  },
  {
    title: "PENDING TASKS",
    value: "28 URGENT",
    change: "View List",
    changeType: "blue",
    trendIcon: "right",
    bgColor: "#4648D4",
    iconBg: "#FFF7ED",
    icon: (
      <svg width="20" height="16" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.6625 11.3062L0 8.64375L1.05 7.59375L2.64375 9.1875L5.83125 6L6.88125 7.06875L2.6625 11.3062ZM2.6625 5.30625L0 2.64375L1.05 1.59375L2.64375 3.1875L5.83125 0L6.88125 1.06875L2.6625 5.30625ZM8.25 9.80625V8.30625H15V9.80625H8.25ZM8.25 3.80625V2.30625H15V3.80625H8.25Z" fill="white"/>
      </svg>
    ),
  },
];

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white">
        <Sidebar />
        <div className="lg:ml-60 flex flex-col min-h-screen bg-[#f4f6fb]">
          <TopBar breadcrumb="SEO Performance" searchPlaceholder="Search reports..." />
          <main className="px-10 py-10 flex-1 max-w-[1600px]">
            {/* Row 1 - 4 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-7">
              {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>

            {/* Row 2 - Chart + Top Channels */}
            <div className="flex gap-6 items-stretch">
              <div className="flex-1">
                <LineChart />
              </div>
              <div className="w-72 hidden lg:block">
                <RightPanel />
              </div>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
