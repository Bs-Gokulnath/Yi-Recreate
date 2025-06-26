import React, { useEffect, useState } from 'react';
import { Lightbulb, Users, Flag } from 'lucide-react';

const ThoughtLeadershipComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pillars = [
    {
      id: 1,
      title: "Youth Leadership",
      subtitle: "Unleashing Potential",
      description:
        "The first pillar of Yi believes that leaders aren't born; they are made. It calls upon the students of India to recognize the leader in them through various leadership skill development programs, personal development programs and nation-building activities.",
      icon: Lightbulb,
      accentColor: "text-blue-600",
      stats: { students: "1000+", programs: "50+", states: "25+" },
    },
    {
      id: 2,
      title: "Nation Building",
      subtitle: "Transforming Tomorrow",
      description:
        "The youth carry the baton of building an India that is self-sufficient, informed and on the path to development. The second pillar of Yi aims to give wings to the transformative power of India's youth through various verticals that delve into present-day issues.",
      icon: Flag,
      accentColor: "text-orange-500",
      stats: { students: "800+", programs: "40+", states: "20+" },
    },
    {
      id: 3,
      title: "Thought Leadership",
      subtitle: "Inspiring Change",
      description:
        "The third pillar of Yi aims to nudge the innate leader in today's youth to give rise to a better India of tomorrow. It informs, engages and empowers the youth of India through a contributive movement of constructive action, collaborative reasoning and collective voice.",
      icon: Users,
      accentColor: "text-emerald-600",
      stats: { students: "1200+", programs: "60+", states: "30+" },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % pillars.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [pillars.length]);

  const PillarCard = ({ pillar }) => (
    <div className="w-full md:w-1/3 px-4 flex-shrink-0 transition-transform duration-1000 ease-in-out">
      <div className="rounded-3xl p-6 h-[32rem] relative overflow-hidden group hover:scale-105 transition-all duration-500 shadow-xl border border-gray-200 bg-white">
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          <div className="mb-6">
            <div className="inline-flex p-4 bg-gray-100 rounded-2xl border border-gray-300 group-hover:scale-110 transition-transform duration-300">
              <pillar.icon className={`w-10 h-10 ${pillar.accentColor}`} />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">{pillar.title}</h3>
            <p className={`text-lg ${pillar.accentColor} font-medium`}>{pillar.subtitle}</p>
          </div>

          <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
            {pillar.description}
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 text-center">
              <div className="text-lg font-bold text-gray-800">{pillar.stats.students}</div>
              <div className="text-xs text-gray-500">Students</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 text-center">
              <div className="text-lg font-bold text-gray-800">{pillar.stats.programs}</div>
              <div className="text-xs text-gray-500">Programs</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 text-center">
              <div className="text-lg font-bold text-gray-800">{pillar.stats.states}</div>
              <div className="text-xs text-gray-500">States</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-slate-200 relative overflow-hidden">
      {/* Top fade effect to match white ending of previous section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-0"></div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-indigo-500 bg-clip-text text-transparent mb-4">
            Yi Pillars
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
            Yi’s mission to strengthen the future of India gives a stage and voice to the country’s next generation of changemakers. It aims to instill in young minds the power of leadership, enhance the youth entrepreneurial ecosystem and create youth-led changes to build the nation.
          </p>
        </div>

        {/* Sliding Cards */}
        <div className="overflow-hidden max-w-7xl mx-auto">
          <div
            className="flex transition-transform duration-1000"
            style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
          >
            {pillars.concat(pillars).map((pillar, idx) => (
              <PillarCard key={idx} pillar={pillar} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThoughtLeadershipComponent;
