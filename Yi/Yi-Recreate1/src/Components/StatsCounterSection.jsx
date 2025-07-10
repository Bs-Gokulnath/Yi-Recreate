import React, { useState, useEffect, useRef } from 'react';

const CounterAnimation = ({ target, suffix = '', isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      setCount((prev) => {
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
    if (num >= 1000000) return Math.floor(num / 1000000) + 'M';
    if (num >= 1000) return Math.floor(num / 1000) + 'K';
    return Math.floor(num).toString();
  };

  return (
    <span className="tabular-nums">
      {target >= 1000 ? formatNumber(count) : Math.floor(count)}
      {suffix}
    </span>
  );
};

const StatsCounterSection = ({ statsData = [], theme = {} }) => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const {
    bgFrom = 'slate-50',
    bgVia = 'white',
    bgTo = 'green-50',
    primaryGlow = 'from-green-400/20 to-emerald-400/20',
    borderColor = 'border-green-100/50',
    hoverBorderColor = 'group-hover:border-green-200',
    numberHover = 'group-hover:text-green-700',
    lineGradient = 'from-green-400 to-emerald-400',
  } = theme;

  return (
    <section
      ref={sectionRef}
      className={`py-20 bg-gradient-to-br from-${bgFrom} via-${bgVia} to-${bgTo} overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 justify-center">

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
              <div
                className={`absolute inset-0 bg-gradient-to-r ${primaryGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
              />
              <div
                className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border ${borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 ${hoverBorderColor}`}
              >
                <div className="flex items-center justify-center mb-4">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${stat.bgGradient} text-white text-xs font-semibold tracking-wider shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                    <span>{stat.label}</span>
                  </div>
                </div>

                <div className="text-center">
                  <div
                    className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2 transition-colors duration-300 ${numberHover}`}
                  >
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
                  <div
                    className={`w-12 h-1 bg-gradient-to-r ${lineGradient} rounded-full mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-green-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounterSection;
