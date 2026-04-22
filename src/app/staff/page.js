"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import VideoGallery from "@/components/VideoGallery";

// Define your Staff videos here
const staffVideos = [
  {
    title: "Home Page",
    description: "How staff can interact with the home page",
    category: "Home",
    desktopSrc: "/videos/StaffHome.mp4",
    mobileSrc: "/videos/StaffHome.mp4",
    hasMobile: false,
  },
  {
    title: "Submitting a Trade Request",
    description: "How staff can request shift trades amongst themselves",
    category: "Trade Requests",
    desktopSrc: "/videos/Trade.mp4",
    mobileSrc: "/videos/Trade.mp4",
    hasMobile: false,
  },
  {
    title: "Submitting an Availability Request",
    description: "How staff can request changes to their availability",
    category: "Availability Requests",
    desktopSrc: "/videos/Avail_Request.mp4",
    mobileSrc: "/videos/Avail_Request.mp4",
    hasMobile: false,
  },
  {
    title: "Viewing Trade & Avaialabilty Request Status",
    description: "How staff can view the status of their trade and availability requests",
    category: "Notifications",
    desktopSrc: "/videos/Notifications.mp4",
    mobileSrc: "/videos/Notifications.mp4",
    hasMobile: false,
  },
];

export default function StaffPresentation() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      
      <div className="bg-brand text-white py-6 px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link href="/" className="hover:bg-white/10 p-2 rounded-full transition-colors flex items-center gap-3">
            <ArrowLeft className="w-6 h-6" />
            <span className="text-xl font-bold uppercase tracking-widest">Back to Hub</span>
          </Link>
        </div>
      </div>
      
      {/* ADDED layout="list" HERE */}
      <VideoGallery title="Staff Portal" videos={staffVideos} layout="list" />
    </main>
  );
}