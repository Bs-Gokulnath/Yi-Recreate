import React from "react";
import { Briefcase, Users, TrendingUp } from "lucide-react";

const Entrepreneurship = () => {
  const features = [
    {
      title: "Knowledge Delivery",
      desc: "Workshops, sessions, and real-world insights to help youth understand entrepreneurship fundamentals.",
      icon: <Briefcase className="w-6 h-6 text-white" />,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Mentorship",
      desc: "Connecting aspiring entrepreneurs with experienced mentors across industries.",
      icon: <Users className="w-6 h-6 text-white" />,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Market Access",
      desc: "Creating opportunities for entrepreneurs to connect, collaborate, and scale.",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      color: "from-teal-500 to-green-500",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Yi Entrepreneurship
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Igniting the spirit of enterprise in India’s youth — from mentorship to market access.
          </p>
        </div>

        {/* Description */}
        <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-8 space-y-6 text-gray-700 leading-relaxed text-justify">
          <p>
            India, with the largest youth population in the world, houses several young
            entrepreneurial minds. <strong>Yi Entrepreneurship</strong> creates a platform for
            <strong> knowledge delivery, mentorship, and market access</strong> to enable entrepreneurs
            to scale and inspire the youth on their path of entrepreneurship.
          </p>

          <p>
            Yi recognizes entrepreneurship as a key element of transformation for India heading into the
            next decade of growth. It creates not only <strong>economic value</strong> but also
            <strong> job opportunities</strong>, solving challenges that hinder India’s full potential.
          </p>

          <p>
            Yi envisions an environment that promotes entrepreneurship as a tool to develop India. This
            is achieved through <strong>structured mentorship, workshops, and internships</strong> for
            college students, and also by fostering an entrepreneurial mindset from an early age
            in schools.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-md bg-gradient-to-br ${item.color} text-white hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Entrepreneurship;
