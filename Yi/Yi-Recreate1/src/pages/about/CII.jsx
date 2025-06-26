import React, { useEffect, useState, useRef } from 'react';

const AboutCIIComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mouse effect for subtle glow background
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const el = heroRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
      return () => el.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Top purple gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-900 to-transparent z-10 pointer-events-none" />

      {/* Glowing background light following mouse */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)`,
          transition: 'background-image 0.3s ease',
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-purple-900/10 z-0 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-7xl font-bold bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent mb-8">
              About CII
            </h1>
            <h2 className="text-4xl font-semibold text-white leading-tight mb-4">
              Bolstering India & Its<br />
              Industrial Arena
            </h2>
            <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
              The Confederation of Indian Industry (CII) works to create and sustain an environment 
              conducive to India's growth by engaging industry, government, and society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCIIComponent;
