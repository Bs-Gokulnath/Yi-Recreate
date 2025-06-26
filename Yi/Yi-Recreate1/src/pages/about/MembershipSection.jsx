import React from 'react';
import { TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigation hook

const MembershipSection = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleApplyClick = () => {
    navigate('/register'); // ✅ Redirect to the registration route
  };

  const starPatternSvg =
    "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5L61.803 38.197L95 50L61.803 61.803L50 95L38.197 61.803L5 50L38.197 38.197z' fill='%23fbbf24' fill-opacity='0.1'/%3E%3C/svg%3E";

  const members = [
    {
      name: 'Rahul Saxsena',
      role: 'Student',
      avatar:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Reena Gupta',
      role: 'Student',
      avatar:
        'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Arjun Sharma',
      role: 'Professional',
      avatar:
        'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-green-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{ backgroundImage: `url(${starPatternSvg})` }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h2 className="text-5xl font-bold text-gray-800 mb-6">
                We invite you to come to join{' '}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  YI.
                </span>
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                At Young Indians, we believe that helping hands are better than praying lips.
                We are a 100% voluntary organization committed to making a difference.
              </p>

              {/* ✅ APPLY Button triggers navigate to registration */}
              <button
                onClick={handleApplyClick}
                className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center space-x-2">
                  <span>APPLY FOR MEMBERSHIP</span>
                  <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Member Cards */}
          <div className="relative">
            <div className="space-y-6">
              {members.map((member, index) => (
                <div
                  key={member.name}
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-right ${
                    index % 2 === 0 ? 'ml-0' : 'ml-12'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg">{member.name}</h3>
                      <p className="text-gray-600">{member.role}</p>
                    </div>
                    <div className="text-green-500">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-300/30 rounded-full blur-lg animate-float"></div>
            <div
              className="absolute -bottom-8 -right-8 w-24 h-24 bg-orange-300/30 rounded-full blur-xl animate-float"
              style={{ animationDelay: '1s' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
