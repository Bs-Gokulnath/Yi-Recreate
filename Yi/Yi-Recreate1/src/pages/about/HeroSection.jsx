import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = ({ onExploreClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse move effect for interactive background
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

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStats = () => {
    const statsSection = document.querySelector('[data-stats-section]');
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-emerald-900"
    >
      {/* Animated Background Pattern */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)`,
          transition: 'background-image 0.3s ease',
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-green-900/20" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative Element */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 backdrop-blur-sm mb-8 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-emerald-300 text-sm font-medium tracking-wider">EMPOWERING THE FUTURE</span>
        </div>

        {/* Main Heading */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <span className="block bg-gradient-to-r from-white via-emerald-100 to-green-200 bg-clip-text text-transparent leading-tight">
            The 3 Pillars
          </span>
          <span className="block bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent leading-tight mt-2">
            of Yi
          </span>
        </h1>

        {/* Description */}
        <div className={`max-w-4xl mx-auto mb-12 transform transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
            Yi's mission to strengthen the future of India gives a stage and voice to the country's next generation of changemakers. 
            It aims to instill in young minds the power of leadership, enhance the youth entrepreneurial ecosystem and create youth-led changes to build the nation.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            The robust framework of Yi and its vision is built on three significant pillars:
          </p>
        </div>

        {/* CTA Buttons Placeholder (optional) */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Buttons can go here if needed */}
        </div>

        {/* Scroll Indicator Placeholder (optional) */}
        <div className={`transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Scroll indicator or arrow can go here */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
