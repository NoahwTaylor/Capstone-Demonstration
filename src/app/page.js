"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center">
      
      {/* Header - Scaled tighter for mobile */}
      <header className="w-full bg-brand py-5 md:py-8 flex justify-center shadow-md px-4">
        <Image 
          src="/logos/ShiftFocus-Horizontal.png" 
          alt="Shift Focus Logo" 
          width={300} 
          height={100} 
          priority
          className="object-contain w-40 md:w-[300px]"
        />
      </header>

      <div className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col justify-center">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-2xl md:text-5xl font-extrabold text-brand tracking-tight mb-3 md:mb-4">
            Capstone Demonstration
          </h1>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Select a portal below to explore the distinct user interfaces and technical functionalities we built for Shift Focus.
          </p>
        </div>

        {/* The Two Panels - Reduced gap and padding for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 w-full max-w-5xl mx-auto">
          
          <Link href="/staff">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-lg border border-gray-100 hover:border-brand/20 transition-all cursor-pointer h-full flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 bg-brand/5 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand group-hover:text-white transition-colors text-brand">
                <Users className="w-8 h-8 md:w-12 md:h-12" />
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-brand mb-2 md:mb-4">Staff Portal</h2>
              <p className="text-sm md:text-base text-gray-600">
                Explore shift trading, schedule viewing, and availability management from the employee's perspective.
              </p>
            </motion.div>
          </Link>

          <Link href="/manager">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-lg border border-brand hover:border-brand-light transition-all cursor-pointer h-full flex flex-col items-center text-center group relative overflow-hidden"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-white group-hover:text-brand transition-colors text-white">
                <ShieldCheck className="w-8 h-8 md:w-12 md:h-12" />
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">Manager Dashboard</h2>
              <p className="text-sm md:text-base text-gray-300">
                Dive into schedule generation, notification approvals, shift constraints, and team management tools.
              </p>
            </motion.div>
          </Link>

        </div>
      </div>
    </main>
  );
}