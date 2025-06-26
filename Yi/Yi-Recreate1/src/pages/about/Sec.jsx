import React from 'react';
import { Sparkles, Building2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#020924] via-[#021e2c] to-[#004c3f]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-pink-300/15 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-300/20 rounded-full blur-lg animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="flex justify-center mb-8 animate-float">
          <div className="relative">
            <Building2 size={80} className="text-purple-400 drop-shadow-2xl" />
            <Sparkles className="absolute -top-2 -right-2 text-pink-300 animate-spin" size={24} />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent animate-fade-in-up">
          About CII
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-light mb-8 animate-fade-in-up text-purple-100" style={{ animationDelay: '0.3s' }}>
          Bolstering India & Its
        </h2>
        
        <h2 className="text-3xl md:text-5xl font-semibold mb-12 animate-fade-in-up text-pink-200" style={{ animationDelay: '0.6s' }}>
          Industrial Arena
        </h2>

        <div className="flex justify-center space-x-4 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-pink-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-indigo-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
