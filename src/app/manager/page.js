"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import VideoGallery from "@/components/VideoGallery";

// Define your Manager videos here!
const managerVideos = [
  {
    title: "Adding Shifts Manually",
    description: "How managers can manually add shifts to an employees schedule.",
    category: "Shift Management",
    desktopSrc: "/videos/Add_Shift_Manual.mp4",
    hasMobile: false,
  },
  {
    title: "Adding Shifts via Availability",
    description: "How managers can automatically find employees to fill a shift using availability constraints.",
    category: "Shift Management",
    desktopSrc: "/videos/Add_Shift_Availability.mp4",
    hasMobile: false,
  },
  {
    title: "Editing a Shift's Details",
    description: "How managers can quickly edit the details of an existing shift.",
    category: "Shift Management",
    desktopSrc: "/videos/Edit_Shift.mp4",
    hasMobile: false,
  },
  {
    title: "Swapping Shifts",
    description: "How managers can force swap shifts between employees seamlessly.",
    category: "Shift Management",
    desktopSrc: "/videos/Swap_Shift.mp4",
    hasMobile: false,
  },
  {
    title: "Deleting Shifts",
    description: "How managers can delete shifts from the schedule instantly.",
    category: "Shift Management",
    desktopSrc: "/videos/Delete_Shift.mp4",
    hasMobile: false,
  },
  {
    title: "Inviting Staff Members",
    description: "How managers can invite new staff members to the application.",
    category: "Team Management",
    desktopSrc: "/videos/Invite_Staff.mp4",
    mobileSrc: "/videos/Invite_Staff.mp4",
    hasMobile: false, 
  },
  {
    title: "Deactivate a Staff Members Account",
    description: "How managers can deactivate a staff members account within the application",
    category: "Team Management",
    desktopSrc: "/videos/Fire_Staff.mp4",
    mobileSrc: "/videos/Fire_Staff.mp4",
    hasMobile: false, 
  },
  {
    title: "Change a Staff Members Role",
    description: "How managers can change the role of an existing staff member in the application",
    category: "Team Management",
    desktopSrc: "/videos/Promote_Staff.mp4",
    mobileSrc: "/videos/Promote_Staff.mp4",
    hasMobile: false, 
  },
  {
    title: "Change a Staff Members Contact Information",
    description: "How managers can change the contact info of an existing staff member in the application",
    category: "Team Management",
    desktopSrc: "/videos/Edit_Contact.mp4",
    mobileSrc: "/videos/Edit_Contact.mp4",
    hasMobile: false, 
  },
  {
    title: "Create a Team Notice",
    description: "How managers can create a team notice",
    category: "Notices",
    desktopSrc: "/videos/Create_Notice.mp4",
    mobileSrc: "/videos/Create_Notice.mp4",
    hasMobile: false, 
  },
  {
    title: "Delete a Team Notice",
    description: "How managers can delete an existing team notice",
    category: "Notices",
    desktopSrc: "/videos/Delete_Notice.mp4",
    mobileSrc: "/videos/Delete_Notice.mp4",
    hasMobile: false, 
  },
  {
    title: "Create a Team Calendar Event",
    description: "How managers can create a team calendar event",
    category: "Calendar",
    desktopSrc: "/videos/Create_Event.mp4",
    mobileSrc: "/videos/Create_Event.mp4",
    hasMobile: false, 
  },
  {
    title: "Delete a Team Calendar Event",
    description: "How managers can delete an existing team calendar event",
    category: "Calendar",
    desktopSrc: "/videos/Delete_Event.mp4",
    mobileSrc: "/videos/Delete_Event.mp4",
    hasMobile: false, 
  },
  {
    title: "Creating team resources",
    description: "How managers can add new resources to the team files ",
    category: "Files",
    desktopSrc: "/videos/Add_File.mp4",
    mobileSrc: "/videos/Add_File.mp4",
    hasMobile: false, 
  },
  {
    title: "Editing team resources",
    description: "How managers can edit resources in the team files ",
    category: "Files",
    desktopSrc: "/videos/Edit_File.mp4",
    mobileSrc: "/videos/Edit_File.mp4",
    hasMobile: false, 
  },
  {
    title: "Deleting team resources",
    description: "How managers can delete resources from the team files ",
    category: "Files",
    desktopSrc: "/videos/Delete_File.mp4",
    mobileSrc: "/videos/Delete_File.mp4",
    hasMobile: false, 
  },
  {
    title: "Adding New Locations",
    description: "How managers can add new locations from the team settings",
    category: "Settings",
    desktopSrc: "/videos/Locations.mp4",
    mobileSrc: "/videos/Locations.mp4",
    hasMobile: false, 
  },
  {
    title: "Adding New Roles",
    description: "How managers can add new roles from the team settings",
    category: "Settings",
    desktopSrc: "/videos/Role.mp4",
    mobileSrc: "/videos/Role.mp4",
    hasMobile: false, 
  },
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