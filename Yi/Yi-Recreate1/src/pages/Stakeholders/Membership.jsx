"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Sparkles, Globe, Target, Heart } from "lucide-react";

// Carousel Images
const carouselImages = [
  "/assets/images/carousel1.jpg",
  "/assets/images/carousel2.jpg",
  "/assets/images/carousel3.jpg",
];

export default function MembershipPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    setTimeout(() => setIsVisible(true), 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Carousel Auto Slide
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 pt-44 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Membership Info */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">MEMBERSHIP</h1>
            <div className="flex items-center space-x-3 text-orange-600 text-xl font-medium mb-4">
              <Sparkles className="w-6 h-6" />
              <span>Join A Pathbreaking Journey</span>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mb-8"></div>
            <p className="text-gray-700 text-lg mb-6">
              Yi is open to any person of Indian descent aged between 21 and 40. An existing member can continue until the age of 45.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              The membership welcomes people from all walks of life and all professions. A committed Indian, whether a lawyer, doctor, farmer, entrepreneur or NGO worker, can become a member and contribute to pathbreaking nation-building activities and chapter initiatives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center bg-orange-50 rounded-xl p-4">
                <Globe className="w-8 h-8 text-orange-500 mb-2" />
                <div className="font-semibold">GROW</div>
                <div className="text-sm text-gray-600">Personal Development</div>
              </div>
              <div className="flex flex-col items-center bg-gray-50 rounded-xl p-4">
                <Heart className="w-8 h-8 text-green-500 mb-2" />
                <div className="font-semibold">BOND</div>
                <div className="text-sm text-gray-600">Community Building</div>
              </div>
              <div className="flex flex-col items-center bg-green-50 rounded-xl p-4">
                <Target className="w-8 h-8 text-emerald-500 mb-2" />
                <div className="font-semibold">ENGAGE</div>
                <div className="text-sm text-gray-600">Active Participation</div>
              </div>
            </div>
          </div>

          {/* Right: Video Box */}
          <div className="flex justify-center items-center mt-10">
            <div className="w-full h-[240px] md:h-[300px] lg:h-[350px] rounded-2xl overflow-hidden shadow-lg bg-black flex items-center justify-center">
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
      </div>

      {/* Carousel Section */}
      <div className="bg-gray-100 py-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Gallery</h2>
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselImages.map((image, index) => (
              <div key={index} className="min-w-full h-[400px]">
                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          {/* Carousel Dots */}
          <div className="flex justify-center mt-4 space-x-3">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full ${currentSlide === index ? 'bg-orange-500' : 'bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
