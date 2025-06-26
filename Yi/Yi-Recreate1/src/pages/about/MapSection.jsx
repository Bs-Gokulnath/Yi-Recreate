import React from 'react';
import { MapPin, Mail, Globe } from 'lucide-react';

const MapSection = () => {
  const patternSvg =
    "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-gray-300"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Container */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-orange-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
              {/* Embedded Google Map */}
              <div className="h-96 relative">
                <iframe
                  title="CII Map"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="rounded-2xl shadow-inner border border-gray-200"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.383340163849!2d77.07725861508027!3d28.617066982421825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18fc02d634ab%3A0x715dc6276e18665!2sCII%20-%20Confederation%20of%20Indian%20Industry!5e0!3m2!1sen!2sin!4v1719393840175!5m2!1sen!2sin"
                ></iframe>

                {/* View larger map button */}
                <div className="absolute top-4 right-4">
                  <a
                    href="https://www.google.com/maps?q=Plot+No:+249-F,+Udyog+Vihar+Phase+IV,+Sector+18+Gurgaon+–+122+015"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-sm text-blue-600 hover:bg-white transition-colors shadow-lg"
                  >
                    View larger map
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">
                Confederation of
              </h2>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent mb-6 animate-fade-in-up">
                Indian Industry (CII)
              </h2>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-green-500">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-green-600 w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Plot No: 249-F, Udyog Vihar Phase IV,<br />
                      Sector 18 Gurgaon – 122 015
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-orange-500">
                <div className="flex items-start space-x-4">
                  <Mail className="text-orange-600 w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <a href="mailto:yi.national@cii.in" className="text-orange-600 hover:text-orange-700 transition-colors">
                      yi.national@cii.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500">
                <div className="flex items-start space-x-4">
                  <Globe className="text-green-600 w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Website</h3>
                    <a href="https://www.youngindians.net" className="text-green-600 hover:text-green-700 transition-colors">
                      www.youngindians.net
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
