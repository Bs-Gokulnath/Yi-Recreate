import React from 'react';
import { Handshake, Users, Building } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-green-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-green-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-200/30 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-lg text-gray-700 leading-relaxed">
                The Confederation of Indian Industry (CII) works to create and sustain an environment conducive to the development of India, partnering with Industry, Government, and civil society, through advisory and consultative processes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                CII is a non-government, not-for-profit, industry-led and industry-managed organization, with around 9000 members from the private as well as public sectors, including SMEs and MNCs, and an indirect membership of over 300,000 enterprises from 286 national and regional sectoral industry bodies.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center group">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-gray-800">9000+</div>
                  <div className="text-sm text-gray-600">Members</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <Building className="w-8 h-8 text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-gray-800">300K+</div>
                  <div className="text-sm text-gray-600">Enterprises</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <Handshake className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-gray-800">125+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Handshake Illustration */}
          <div className="relative">
            <div className="bg-white p-12 rounded-3xl shadow-2xl relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-orange-50 opacity-50"></div>

              {/* Handshake Illustration */}
              <div className="relative z-10 text-center">
                <div className="w-48 h-48 mx-auto mb-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute inset-4 bg-white rounded-full shadow-inner flex items-center justify-center">
                    <Handshake className="w-24 h-24 text-gray-700 group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-bounce">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                    <Building className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Are you ready to be a</h3>
                  <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Yi Member
                  </div>
                </div>
              </div>

              {/* Sparkle Effects */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-8 left-8 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-12 left-12 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
