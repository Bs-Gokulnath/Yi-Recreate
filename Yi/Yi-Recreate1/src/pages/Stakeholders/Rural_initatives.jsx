import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import CountUp from "react-countup";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Simple Button Component
export function Button({ children, className = "", variant = "solid", ...props }) {
  const baseStyle = variant === "outline"
    ? "border text-green-600 border-green-600 hover:bg-green-50"
    : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white";
  return (
    <button
      {...props}
      className={`px-6 py-3 rounded-full font-semibold text-lg shadow ${baseStyle} ${className}`}
    >
      {children}
    </button>
  );
}

export default function RuralInitiativesContent() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 pt-44 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          {/* Left: Text and Stats */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2 leading-tight">
              Rural
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Initiatives
              </span>
            </h1>
            <p className="text-2xl text-green-600 font-light mb-10 mt-4">Empowering communities across India</p>
            <p className="text-2xl text-black font-light mb-10 mt-4">Yi Rural Initiatives, part of the Yi stakeholders team
               (MYTRi), empowers rural communities through participatory development, fostering collaboration with 
               local communities, industries, and enterprises to drive impactful transformation.</p>


            {/* Stats */}
            <div className="flex flex-wrap gap-10 mb-10">
              <div className="text-left">
                <div className="text-4xl font-bold text-green-700">
                  <CountUp end={500} duration={3} suffix="+" />
                </div>
                <div className="text-green-500">Communities</div>
              </div>
              <div className="text-left">
                <div className="text-4xl font-bold text-green-700">
                  <CountUp end={50000} duration={3} suffix="+" />
                </div>
                <div className="text-green-500">Lives Changed</div>
              </div>
              <div className="text-left">
                <div className="text-4xl font-bold text-green-700">
                  <CountUp end={100} duration={3} suffix="+" />
                </div>
                <div className="text-green-500">Projects</div>
              </div>
            </div>

            {/* CTA - You can add your CTA button here if needed */}
          </div>

          {/* Right: Video */}
          <div className="flex justify-center items-center">
            <div className="w-full h-[240px] md:h-[220px] lg:h-[350px] rounded-2xl overflow-hidden shadow-lg bg-black flex items-center justify-center">
              <video
                className="w-full h-full object-cover"
                src="https://chotacop.in/yi-ai/final.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                poster="/assets/images/rural-woman-sewing.jpg"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
