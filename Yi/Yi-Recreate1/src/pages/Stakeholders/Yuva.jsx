"use client";

import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import {
  Sparkles,
  Users,
  Target,
  ArrowRight,
  BookOpen,
  Star,
  Zap,
  TrendingUp,
  Lightbulb,
  Award,
  Globe,
  ChevronDown,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// ✅ Custom Button Component
const Button = ({ children, className = "", variant = "default", ...props }) => {
  const baseStyle =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default:
      "bg-gradient-to-r from-orange-500 to-green-500 text-white hover:from-orange-600 hover:to-green-600",
    outline: "border-2 border-blue-500 text-blue-600 hover:bg-blue-50 bg-transparent",
    ghost: "text-gray-700 hover:text-gray-900 hover:bg-white/50",
  };
  const style = `${baseStyle} ${variants[variant] || variants.default} ${className}`;

  return (
    <button className={style} {...props}>
      {children}
    </button>
  );
};

// ✅ Carousel Images
const carouselImages = [
  "/assets/images/carousel1.jpg",
  "/assets/images/carousel2.jpg",
  "/assets/images/carousel3.jpg",
];

export default function YuvaPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    setTimeout(() => setIsVisible(true), 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  const stats = [
    { number: 500, suffix: "+", label: "College Students", color: "text-orange-500" },
    { number: 50, suffix: "+", label: "Leadership Projects", color: "text-green-500" },
    { number: 25, suffix: "+", label: "Cities Covered", color: "text-blue-500" },
    { number: 100, suffix: "%", label: "Future Leaders", color: "text-purple-500" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 pt-46 pb-16">
        <section className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <div className="flex items-center space-x-6 mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 via-green-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-2xl">YUVA</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full shadow-lg animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-500 rounded-full shadow-lg animate-pulse delay-300"></div>
                <div className="absolute top-1/2 -right-4 w-4 h-4 bg-blue-500 rounded-full shadow-md animate-pulse delay-700"></div>
              </div>
            </div>

            <h1 className="text-6xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
              Harnessing India's
              <span className="block text-gray-800">Massive</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-green-500 to-blue-500">
                Youth Power
              </span>
            </h1>

            <div className="flex items-center space-x-3 text-orange-600 text-xl font-medium mb-6">
              <Zap className="w-6 h-6" />
              <span>Empowering Tomorrow's Leaders Today</span>
            </div>
            <div className="w-40 h-2 bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 rounded-full mb-8"></div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed max-w-2xl mb-8">
              <p>
                Yi believes youth is the strongest vehicle for India's present and future development. Its vertical YUVA empowers passionate college students from across the country to take the lead and shape the growth of India.
              </p>
              <p>
                The numerous leadership projects and initiatives of the vertical shape and refine today's young students into tomorrow's influential leaders.
              </p>
            </div>
          </div>

          {/* Right: Video Section */}
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
        </section>

        {/* Counts Section */}
        <section className="mt-16 flex flex-wrap justify-center gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center w-40">
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                <CountUp end={stat.number} duration={3} suffix={stat.suffix} />
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Carousel Section */}
        <section className="mt-20 bg-gray-100 py-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Explore More</h2>
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
