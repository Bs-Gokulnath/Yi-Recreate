// Yi Road Safety Page - Themed Layout in Yellow
"use client";

import AnimatedLogo from "../../components/AnimatedLogo";
import {
  TrafficCone,
  AlertTriangle,
  ShieldCheck,
  HelpCircle,
  Users,
  Zap,
} from "lucide-react";
import roadSafetyLogo from "/assets/images/Yi-RoadSafety.png";
import Carousel from "../../Components/Carousel";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StatsCounterSection from "../../components/StatsCounterSection";


export default function RoadSafetyPage() {
  const imageList = [
    "/assets/images/road-1.jpg",
    "/assets/images/road-2.jpg",
    "/assets/images/road-3.jpg",
    "/assets/images/road-4.jpg",
  ];

  return (
    <>
      <Navbar centerLogo={roadSafetyLogo} />
      <div className="relative pt-36 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
        <AnimatedLogo logoSrc={roadSafetyLogo} />
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-900">
                Yi Road Safety
              </h1>
              <h2 className="text-xl md:text-2xl font-medium">
                We are the voice of Young Indians globally.
              </h2>
              <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
                <p>
                  Project Road Safety was conceived by{" "}
                  <strong>CII Young Indians</strong> under the Yi pillar of
                  Nation-Building. The importance of safety on Indian roads
                  cannot be overlooked by any organisation or individual today.
                </p>

                <p>
                  A total of <strong>4,49,002 road accidents</strong> were
                  reported in 2019, with <strong>1,51,113 casualties</strong>{" "}
                  and <strong>4,51,361 injured</strong>, according to the
                  Ministry of Road Transport and Highways. These figures are
                  alarming and have pushed Yi to build an ecosystem that
                  educates and monitors drivers, bystanders, and all
                  stakeholders.
                </p>

                <p>
                  We aim to raise awareness among young children and teenagers
                  so that road safety becomes ingrained early. Topics include
                  reducing noise pollution, traffic calming, observing speed
                  limits, motorway awareness, better driving etiquette, lane
                  discipline, and first aid training.
                </p>

                <p>
                  Our objective is to educate stakeholders on the importance of
                  following traffic rules and to instill a sense of
                  responsibility to protect fellow citizens on the road.
                </p>

                <ul className="list-disc ml-6 mt-4 text-yellow-800 text-left">
                  <li>Helmet & Seatbelt Awareness Drives</li>
                  <li>School & College Road Safety Campaigns</li>
                  <li>Collaborations with Traffic Police</li>
                  <li>First Responder & CPR Training</li>
                </ul>
              </div>
            </div>

            {/* Right: Video & Modules (Inside Left Side of Grid) */}
            <div className="space-y-8 ">
              {/* Video */}
              <div className="relative animate-fade-in-up delay-200 group -mt-0">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl ring-2 ring-yellow-200 group-hover:ring-yellow-400 transition-all duration-300">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/aT61nwd5U-s"
                    title="Yi Road Safety Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="absolute -top-5 -left-4 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-4 py-1 rounded-full text-sm shadow-lg font-semibold animate-pulse">
                  🎥 Watch Our Impact
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-700 rounded-full blur-sm opacity-80"></div>
              </div>

              {/* Modules Section Moved Here */}
              <section>
                <h2 className="text-2xl font-bold text-yellow-900 mb-6 text-center md:text-left">
                  Key Modules of Road Safety
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Module 1 */}
                  <div className="group perspective">
                    <div className="relative w-full h-52 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                      <div className="absolute inset-0 bg-white rounded-xl shadow-lg backface-hidden flex items-center justify-center">
                        <HelpCircle className="w-20 h-20 text-yellow-500" />
                      </div>
                      <div className="absolute inset-0 bg-yellow-100 text-yellow-900 rounded-xl shadow-lg px-6 py-4 backface-hidden transform rotate-y-180 flex flex-col justify-center items-center text-center">
                        <h3 className="text-xl font-bold mb-2">Farishtey</h3>
                        <p className="text-sm">
                          Spreads awareness about the Good Samaritan Law,
                          encouraging bystanders to help road accident victims
                          without fear of legal trouble.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Module 2 */}
                  <div className="group perspective">
                    <div className="relative w-full h-52 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                      <div className="absolute inset-0 bg-white rounded-xl shadow-lg backface-hidden flex items-center justify-center">
                        <ShieldCheck className="w-20 h-20 text-yellow-500" />
                      </div>
                      <div className="absolute inset-0 bg-yellow-100 text-yellow-900 rounded-xl shadow-lg px-6 py-4 backface-hidden transform rotate-y-180 flex flex-col justify-center items-center text-center">
                        <h3 className="text-xl font-bold mb-2">
                          Super Kid Cop
                        </h3>
                        <p className="text-sm">
                          Teaches young students about road safety and
                          encourages them to become proactive enforcers of road
                          rules in their communities.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Module 3 */}
                  <div className="group perspective">
                    <div className="relative w-full h-52 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                      <div className="absolute inset-0 bg-white rounded-xl shadow-lg backface-hidden flex items-center justify-center">
                        <AlertTriangle className="w-20 h-20 text-yellow-500" />
                      </div>
                      <div className="absolute inset-0 bg-yellow-100 text-yellow-900 rounded-xl shadow-lg px-6 py-4 backface-hidden transform rotate-y-180 flex flex-col justify-center items-center text-center">
                        <h3 className="text-xl font-bold mb-2">HNOP</h3>
                        <p className="text-sm">
                          Aims to reduce noise pollution in urban areas by
                          discouraging unnecessary honking and promoting calm
                          driving behavior.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Module 4 */}
                  <div className="group perspective">
                    <div className="relative w-full h-52 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                      <div className="absolute inset-0 bg-white rounded-xl shadow-lg backface-hidden flex items-center justify-center">
                        <TrafficCone className="w-20 h-20 text-yellow-500" />
                      </div>
                      <div className="absolute inset-0 bg-yellow-100 text-yellow-900 rounded-xl shadow-lg px-6 py-4 backface-hidden transform rotate-y-180 flex flex-col justify-center items-center text-center">
                        <h3 className="text-xl font-bold mb-2">
                          Animal Protection
                        </h3>
                        <p className="text-sm">
                          Protects stray cattle and animals on rural roads using
                          reflective markers and awareness to prevent
                          collisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsCounterSection
  statsData={[
    {
      id: 'accidents',
      label: 'ROAD ACCIDENTS (2019)',
      value: '4,49,002',
      numericValue: 449002,
      icon: <AlertTriangle className="w-5 h-5" />,
      color: 'text-yellow-700',
      bgGradient: 'from-yellow-500 to-yellow-600',
    },
    {
      id: 'deaths',
      label: 'LIVES LOST',
      value: '1,51,113',
      numericValue: 151113,
      icon: <ShieldCheck className="w-5 h-5" />,
      color: 'text-yellow-700',
      bgGradient: 'from-yellow-500 to-yellow-600',
    },
    {
      id: 'injured',
      label: 'PEOPLE INJURED',
      value: '4,51,361',
      numericValue: 451361,
      icon: <Zap className="w-5 h-5" />,
      color: 'text-yellow-700',
      bgGradient: 'from-yellow-500 to-yellow-600',
    },
    {
      id: 'trained',
      label: 'YOUTH TRAINED',
      value: '10,000+',
      numericValue: 10000,
      icon: <Users className="w-5 h-5" />,
      color: 'text-yellow-700',
      bgGradient: 'from-yellow-500 to-yellow-600',
    },
  ]}
  theme={{
    bgFrom: 'yellow-50',
    bgVia: 'white',
    bgTo: 'yellow-100',
    primaryGlow: 'from-yellow-400/20 to-yellow-500/20',
    borderColor: 'border-yellow-100/50',
    hoverBorderColor: 'group-hover:border-yellow-200',
    numberHover: 'group-hover:text-yellow-800',
    lineGradient: 'from-yellow-400 to-yellow-600',
  }}
/>


        {/* Carousel & Highlights */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Carousel */}
            <div className="w-full">
              <h2 className="text-3xl font-bold text-yellow-900 mb-6 text-center md:text-left">
                Road Safety in Action
              </h2>
              <div className="p-4 rounded-xl shadow-md">
                <Carousel images={imageList} interval={4000} height="400px" />
              </div>
            </div>

            {/* Right: Highlights */}
            <div className="space-y-8">
              <div className="bg-yellow-100 hover:bg-yellow-200 transition-all duration-300 rounded-xl p-6 shadow hover:shadow-xl transform hover:scale-[1.02]">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="text-yellow-600 w-6 h-6" />
                  <h3 className="text-xl font-semibold text-yellow-800">
                    Road Safety Week
                  </h3>
                </div>
                <p className="text-gray-700">
                  Yi observed National Road Safety Week with rallies, human
                  chains, and awareness sessions across the country.
                </p>
              </div>

              <div className="bg-yellow-100 hover:bg-yellow-200 transition-all duration-300 rounded-xl p-6 shadow hover:shadow-xl transform hover:scale-[1.02]">
                <div className="flex items-center space-x-3 mb-4">
                  <ShieldCheck className="text-yellow-600 w-6 h-6" />
                  <h3 className="text-xl font-semibold text-yellow-800">
                    Youth Ambassador Program
                  </h3>
                </div>
                <p className="text-gray-700">
                  Yi trained over 10,000 youth as Road Safety Ambassadors to
                  spread awareness in their communities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
