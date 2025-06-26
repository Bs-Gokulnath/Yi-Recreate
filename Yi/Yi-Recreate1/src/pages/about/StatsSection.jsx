import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, MapPin, Zap, Star } from 'lucide-react';

const statsData = [
  {
    id: 'direct-members',
    label: 'DIRECT MEMBERS',
    value: '7000+',
    numericValue: 7000,
    icon: <Users className="w-5 h-5" />,
    color: 'text-emerald-600',
    bgGradient: 'from-emerald-500 to-green-600'
  },
  {
    id: 'chapter',
    label: 'CHAPTER',
    value: '72',
    numericValue: 72,
    icon: <TrendingUp className="w-5 h-5" />,
    color: 'text-green-600',
    bgGradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 'states',
    label: 'STATES & UT',
    value: '28+',
    numericValue: 28,
    icon: <MapPin className="w-5 h-5" />,
    color: 'text-teal-600',
    bgGradient: 'from-teal-500 to-green-600'
  },
  {
    id: 'yuva',
    label: 'YUVA',
    value: '250000+',
    numericValue: 250000,
    icon: <Zap className="w-5 h-5" />,
    color: 'text-green-600',
    bgGradient: 'from-green-500 to-teal-600'
  },
  {
    id: 'thalir',
    label: 'THALIR',
    value: '230000+',
    numericValue: 230000,
    icon: <Star className="w-5 h-5" />,
    color: 'text-emerald-600',
    bgGradient: 'from-emerald-500 to-green-600'
  }
];

const CounterAnimation = ({ target, suffix = '', isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      setCount(prev => {
        const next = prev + increment;
        if (next >= target) {
          clearInterval(timer);
          return target;
        }
        return next;
      });
    }, 16);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return Math.floor(num / 1000000) + 'M';
    } else if (num >= 1000) {
      return Math.floor(num / 1000) + 'K';
    }
    return Math.floor(num).toString();
  };

  return (
    <span className="tabular-nums">
      {target >= 1000 ? formatNumber(count) : Math.floor(count)}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-green-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
       

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className={`group relative transform transition-all duration-700 hover:scale-105 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              {/* Main Card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-green-200">
                {/* Icon and Badge */}
                <div className="flex items-center justify-center mb-4">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${stat.bgGradient} text-white text-xs font-semibold tracking-wider shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                    <span>{stat.label}</span>
                  </div>
                </div>

                {/* Number Display */}
                <div className="text-center">
                  <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2 transition-colors duration-300 group-hover:text-green-700`}>
                    {stat.value.includes('+') ? (
                      <>
                        <CounterAnimation 
                          target={stat.numericValue} 
                          isVisible={isVisible}
                        />
                        <span className="text-3xl">+</span>
                      </>
                    ) : (
                      <CounterAnimation 
                        target={stat.numericValue} 
                        isVisible={isVisible}
                      />
                    )}
                  </div>
                  
                  {/* Decorative Line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;