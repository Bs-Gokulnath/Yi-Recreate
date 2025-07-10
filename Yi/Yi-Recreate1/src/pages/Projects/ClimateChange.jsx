// Yi Climate Change Page - Themed Layout in Orange, Blue, Navy, Green, Black
"use client";

import AnimatedLogo from "../../components/AnimatedLogo";
import {
  Leaf,
  Recycle,
  TreePine,
  Droplets,
  Users,
  Shield,
} from "lucide-react";
import climateLogo from "/assets/images/Yi-ClimateChange.png";
import Carousel from "../../Components/Carousel";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StatsCounterSection from "../../components/StatsCounterSection";

export default function ClimateChangePage() {
  const imageList = [
    "/assets/images/road-1.jpg",
    "/assets/images/road-2.jpg",
    "/assets/images/road-3.jpg",
    "/assets/images/road-4.jpg",
  ];

  return (
    <>
      <Navbar centerLogo={climateLogo} />
      <div className="relative pt-36 min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-green-50">
        <AnimatedLogo logoSrc={climateLogo} />
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 via-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-black">
                Yi Climate Change
              </h1>
              <h2 className="text-xl md:text-2xl font-medium">
                Empowering Youth for Positive Climate Action
              </h2>
              <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
                <p>
                  Yi's Climate Change Initiative aims to unite the nation's youth through awareness,
                  education and action on global climate impacts, adaptation, and mitigation.
                </p>

                <p>
                  A total of <strong>4,49,002 road accidents</strong> were reported in 2019, with
                  <strong>1,51,113 casualties</strong> and <strong>4,51,361 injured</strong>, according
                  to the Ministry of Road Transport and Highways. These figures are alarming and have
                  pushed Yi to build an ecosystem that educates and monitors drivers, bystanders, and
                  all stakeholders.
                </p>

                <p>
                  We aim to raise awareness among young children and teenagers so that road safety
                  becomes ingrained early. Topics include reducing noise pollution, traffic calming,
                  observing speed limits, motorway awareness, better driving etiquette, lane discipline,
                  and first aid training.
                </p>

                <p>
                  Our objective is to educate stakeholders on the importance of following traffic rules
                  and to instill a sense of responsibility to protect fellow citizens on the road.
                </p>

                <ul className="list-disc ml-6 mt-4 text-green-800 text-left">
                  <li>Afforestation & Miyawaki Forests</li>
                  <li>Water Body Rejuvenation</li>
                  <li>Youth-led Climate Action</li>
                  <li>Composting and Sustainability Challenges</li>
                </ul>
              </div>
            </div>

            {/* Right: Video & Modules (Inside Left Side of Grid) */}
            <div className="space-y-8">
              {/* Video */}
              <div className="relative animate-fade-in-up delay-200 group">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl ring-2 ring-green-300 group-hover:ring-green-400 transition-all duration-300">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/aT61nwd5U-s"
                    title="Yi Climate Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="absolute -top-5 -left-4 bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-1 rounded-full text-sm shadow-lg font-semibold animate-pulse">
                  🎥 Watch Our Impact
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-orange-400 via-green-500 to-blue-700 rounded-full blur-sm opacity-80"></div>
              </div>

              {/* Modules Section */}
              <section className="py-20">
  <h2 className="text-2xl font-bold text-black mb-6 text-center">
    Climate Change Modules
  </h2>

  <div className="flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl place-items-center">
      {[
        {
          title: "Miyawaki Model",
          icon: <TreePine className="w-12 h-12 text-green-600" />,
          desc: "Rapid native-species afforestation",
        },
        {
          title: "Water Rejuvenation",
          icon: <Droplets className="w-12 h-12 text-blue-600" />,
          desc: "Conserve and restore water bodies",
        },
        {
          title: "Compost Challenge",
          icon: <Recycle className="w-12 h-12 text-orange-500" />,
          desc: "Promote composting for sustainability",
        },
        {
          title: "One Student One Tree",
          icon: <Leaf className="w-12 h-12 text-green-700" />,
          desc: "Engage students in plantation",
        },
        {
          title: "Water Warriors",
          icon: <Shield className="w-12 h-12 text-[#001f3f]" />, // Navy blue
          desc: "Train youth in water conservation",
        },
      ].map((mod) => (
        <div
          key={mod.title}
          className="group perspective flex justify-center w-full animate-fade-in-up animate-duration-[700ms] animate-delay-[100ms] animate-ease-out"
        >
          <div className="relative w-64 h-40 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
            <div className="absolute inset-0 bg-white rounded-xl shadow-lg backface-hidden flex items-center justify-center">
              {mod.icon}
            </div>
            <div className="absolute inset-0 bg-green-100 text-black rounded-xl shadow-lg px-4 py-4 backface-hidden transform rotate-y-180 flex flex-col justify-center items-center text-center">
              <h3 className="text-md font-bold mb-1">{mod.title}</h3>
              <p className="text-xs">{mod.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

            </div>
          </div>
        </section>

        <StatsCounterSection
          statsData={[
            {
              id: 'forests',
              label: 'TREES PLANTED',
              value: '12,000+',
              numericValue: 12000,
              icon: <TreePine className="w-5 h-5" />,
              color: 'text-green-700',
              bgGradient: 'from-green-500 to-emerald-500',
            },
            {
              id: 'youth',
              label: 'YOUTH ENGAGED',
              value: '8,500+',
              numericValue: 8500,
              icon: <Users className="w-5 h-5" />,
              color: 'text-green-700',
              bgGradient: 'from-green-500 to-emerald-500',
            },
            {
              id: 'bodies',
              label: 'WATER BODIES SAVED',
              value: '150+',
              numericValue: 150,
              icon: <Droplets className="w-5 h-5" />,
              color: 'text-green-700',
              bgGradient: 'from-green-500 to-emerald-500',
            },
            {
              id: 'projects',
              label: 'SUSTAINABLE PROJECTS',
              value: '50+',
              numericValue: 50,
              icon: <Recycle className="w-5 h-5" />,
              color: 'text-green-700',
              bgGradient: 'from-green-500 to-emerald-500',
            },
          ]}
          theme={{
            bgFrom: 'orange-50',
            bgVia: 'white',
            bgTo: 'green-100',
            primaryGlow: 'from-orange-400/20 to-green-400/20',
            borderColor: 'border-green-100/50',
            hoverBorderColor: 'group-hover:border-green-200',
            numberHover: 'group-hover:text-green-700',
            lineGradient: 'from-orange-400 to-green-400',
          }}
        />

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full">
              <h2 className="text-3xl font-bold text-black mb-6 text-center md:text-left">
                Climate Action in Motion
              </h2>
              <div className="p-4 rounded-xl shadow-md">
                <Carousel images={imageList} interval={4000} height="400px" />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-orange-100 hover:bg-orange-200 transition-all duration-300 rounded-xl p-6 shadow hover:shadow-xl transform hover:scale-[1.02]">
                <div className="flex items-center space-x-3 mb-4">
                  <TreePine className="text-orange-600 w-6 h-6" />
                  <h3 className="text-xl font-semibold text-orange-800">
                    National Tree Plantation Drive
                  </h3>
                </div>
                <p className="text-gray-700">
                  Yi conducted plantation drives using the Miyawaki technique across cities, empowering youth and promoting biodiversity.
                </p>
              </div>
              <div className="bg-blue-100 hover:bg-blue-200 transition-all duration-300 rounded-xl p-6 shadow hover:shadow-xl transform hover:scale-[1.02]">
                <div className="flex items-center space-x-3 mb-4">
                  <Droplets className="text-blue-600 w-6 h-6" />
                  <h3 className="text-xl font-semibold text-blue-800">
                    Water Body Rejuvenation
                  </h3>
                </div>
                <p className="text-gray-700">
                  Local youth took part in desilting, awareness, and fencing initiatives to restore lakes and ponds in rural areas.
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
