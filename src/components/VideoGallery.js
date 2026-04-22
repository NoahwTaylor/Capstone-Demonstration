"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Smartphone, X, PlayCircle } from "lucide-react";

export default function VideoGallery({ title, videos }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [viewMode, setViewMode] = useState("desktop");

  // Group videos by category
  const groupedVideos = videos.reduce((acc, video) => {
    const category = video.category || "General";
    if (!acc[category]) acc[category] = [];
    acc[category].push(video);
    return acc;
  }, {});

  const openVideo = (video) => {
    setSelectedVideo(video);
    setViewMode("desktop"); 
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="w-full px-4 md:px-12 lg:px-20 py-8 md:py-12 mx-auto max-w-[1920px]">
      
      <h2 className="text-2xl md:text-4xl font-bold text-brand mb-6 md:mb-12 border-b-4 border-brand/20 pb-3 inline-block">
        {title} Features
      </h2>

      {/* Render each category section */}
      {Object.entries(groupedVideos).map(([category, categoryVideos]) => (
        <div key={category} className="mb-16">
          
          {/* Category Header */}
          <h3 className="text-xl md:text-2xl font-bold text-brand mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-brand rounded-full inline-block"></span>
            {category}
          </h3>

          {/* Grid for Video Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {categoryVideos.map((vid, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                onClick={() => openVideo(vid)}
                className="group cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden flex flex-col transition-all"
              >
                <div className="aspect-video bg-brand/5 relative flex items-center justify-center group-hover:bg-brand/10 transition-colors">
                  <PlayCircle className="w-16 h-16 md:w-20 md:h-20 text-brand opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
                <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-brand mb-2">{vid.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">{vid.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* FIXED MOBILE SCROLLING MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-brand/95 backdrop-blur-md"
          >
            <div className="min-h-full flex flex-col items-center justify-start md:justify-center p-4 py-12 md:p-8 relative">
              
              <button 
                onClick={closeVideo}
                className="absolute top-4 right-4 md:fixed md:top-10 md:right-10 text-white hover:text-gray-300 z-50 p-2 bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6 md:w-10 md:h-10" />
              </button>

              <div className="text-center mb-6 mt-8 md:mt-0 px-2 w-full max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
                  {selectedVideo.title}
                </h2>
                <p className="text-sm md:text-lg text-gray-300">
                  {selectedVideo.description}
                </p>
              </div>

              {/* Toggles - Always shows the wrapper and Desktop button, Mobile button is conditional */}
              <div className="flex bg-white/10 rounded-full p-1 mb-8 backdrop-blur-md max-w-full overflow-hidden">
                <button
                  onClick={() => setViewMode("desktop")}
                  className={`flex items-center justify-center gap-2 px-5 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-base font-bold transition-all ${
                    viewMode === "desktop" ? "bg-white text-brand shadow-lg" : "text-white hover:bg-white/10"
                  }`}
                >
                  <Monitor className="w-4 h-4 md:w-5 md:h-5" /> Desktop
                </button>
                
                {/* Only show the Mobile toggle button if hasMobile is true */}
                {selectedVideo.hasMobile && (
                  <button
                    onClick={() => setViewMode("mobile")}
                    className={`flex items-center justify-center gap-2 px-5 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-base font-bold transition-all ${
                      viewMode === "mobile" ? "bg-white text-brand shadow-lg" : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Smartphone className="w-4 h-4 md:w-5 md:h-5" /> Mobile
                  </button>
                )}
              </div>

              {/* Responsive Video Player */}
              <motion.div
                layout
                className={`relative bg-black overflow-hidden shadow-2xl transition-all duration-300 ease-in-out mx-auto ${
                  viewMode === "desktop" 
                    ? "w-full max-w-5xl aspect-video rounded-xl ring-2 md:ring-4 ring-white/20" 
                    : "w-full max-w-[280px] md:max-w-[350px] aspect-[9/16] rounded-[2rem] md:rounded-[3rem] ring-4 md:ring-8 ring-white/20" 
                }`}
              >
                <video
                  key={`${selectedVideo.title}-${viewMode}`}
                  src={viewMode === "desktop" ? selectedVideo.desktopSrc : selectedVideo.mobileSrc}
                  controls
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full object-contain bg-black"
                />
              </motion.div>

              {/* Spacer to ensure scrolling hits the bottom safely on mobile */}
              <div className="h-12 w-full md:hidden" />

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}