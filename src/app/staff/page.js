"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import VideoGallery from "@/components/VideoGallery";

// This is where you map out your videos. 
// Ensure you have these files saved in your public/videos/ folder!
const staffVideos = [
  {
    title: "Requesting a Shift Trade",
    description: "Demonstrates the logic behind searching for an eligible coworker and submitting a 2-way shift trade request.",
    desktopSrc: "/videos/Sprint_3_Demo.mp4",
    mobileSrc: "/videos/Sprint_3_Demo.mp4",
    hasMobile: true,
  },
  {
    title: "Setting Weekly Availability",
    description: "How an employee interacts with the database to set recurring and specific-date availability constraints.",
    desktopSrc: "/videos/staff-avail-desktop.mp4",
    mobileSrc: "/videos/staff-avail-mobile.mp4",
    hasMobile: true,
  },
  // Add as many as you need here...
];

export default function StaffPresentation() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-brand text-white py-6 px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link href="/" className="hover:bg-white/10 p-2 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold uppercase tracking-widest">Back to Hub</h1>
        </div>
      </div>
      
      <VideoGallery title="Staff Portal" videos={staffVideos} />
    </main>
  );
}