import React from 'react';

export default function LandingPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full object-cover z-0"
        src="/assets/videos/landing_page.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay (Optional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-200 z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-5xl font-bold mb-4" style={{ color: '#FF9933' }}>DEVELOPMENT OF THE</h1>
        <h1 className="text-5xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
          YOUTH <span style={{ color: '#054187' }}>&</span> NATION
        </h1>
        <h1 className="text-5xl font-bold mb-4" style={{ color: '#138808' }}>BY THE YOUTH</h1>
      </div>
    </div>
  );
}
