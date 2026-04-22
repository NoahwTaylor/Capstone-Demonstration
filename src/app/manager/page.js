"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import VideoGallery from "@/components/VideoGallery";

// Define your Manager videos here!
const managerVideos = [
  {
    title: "Approving Shift Trades",
    description: "Watch the backend logic map target employees to requestor shifts, and dynamically handle 1-way giveaways vs 2-way swaps.",
    desktopSrc: "/videos/Sprint_3_Demo.mp4",
    mobileSrc: "/videos/Sprint_3_Demo.mp4",
    hasMobile: true,
  },
  {
    title: "Schedule Overlap Constraints",
    description: "Demonstrating the strict O(N+M) validation checks that prevent managers from double-booking or violating availability parameters.",
    desktopSrc: "/videos/manager-schedule-desktop.mp4",
    mobileSrc: "/videos/manager-schedule-mobile.mp4",
    hasMobile: true,
  },
  {
    title: "Team Calendar Access Control",
    description: "Showing how Role-Based Access Control (RBAC) securely filters which events render based on hierarchy indexes.",
    desktopSrc: "/videos/manager-calendar-desktop.mp4",
    mobileSrc: "/videos/manager-calendar-mobile.mp4",
    hasMobile: true,
  }
];

export default function ManagerPresentation() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      
      {/* Top Navigation Bar */}
      <div className="bg-brand text-white py-6 px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link href="/" className="hover:bg-white/10 p-2 rounded-full transition-colors flex items-center gap-3">
            <ArrowLeft className="w-6 h-6" />
            <span className="text-xl font-bold uppercase tracking-widest">Back to Hub</span>
          </Link>
        </div>
      </div>
      
      {/* Renders the Reusable Grid and Modal */}
      <VideoGallery title="Manager Dashboard" videos={managerVideos} />
    </main>
  );
}