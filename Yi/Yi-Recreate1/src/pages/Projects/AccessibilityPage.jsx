// Yi Accessibility Page - Themed Layout with New Structure
"use client";

import {
  HelpingHand,
  EyeOff,
  Ear,
  Brain,
  Ruler,
  Bus,
  Wifi,
} from "lucide-react";
import yiaccessibility from "/assets/images/Yi-Accessibility.png";
import Carousel from "../../Components/Carousel";
import AnimatedLogo from "../../components/AnimatedLogo";
export default function AccessibilityPage() {

  const imageLsit = [
    "/assets/images/Yi-accessibility-1.png",
    "/assets/images/Yi-accessibility-2.png",
    "/assets/images/Yi-accessibility-3.png",
    "/assets/images/Yi-accessibility-4.png",
  ]
  return (
    <div className="relative">
      <AnimatedLogo logoSrc={yiaccessibility} />
     <section className="py-20 bg-gradient-to-br from-orange-50 via-green-50 to-white">
  {/* Centered Logo */}
  <div className="flex justify-center mb-10">
    <img
      src={yiaccessibility}
      alt="Yi Accessibility Logo"
      className="w-34 h-34 object-contain"
    />
  </div>

  {/* Two Column Grid */}
  <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
    {/* Left: Text Content */}
    <div className="space-y-6 animate-fade-in-up text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A2647] leading-snug">
        Yi Accessibility
      </h1>
        <h2 className="text-l md:text-2xl  leading-snug">VERTICAL HIGHLIGHTS AND YEAR SYNOPSIS</h2>

      <p className="text-gray-800 text-lg leading-relaxed mt-4">
        <strong className="text-orange-700">There are 4 major types of disabilities:</strong> Visual, Hearing, Motor, and Cognitive. 
        India is home to over <strong className="text-orange-700">80 million differently abled individuals</strong>. Unfortunately, low literacy rates,
        limited job opportunities, and social stigma often isolate them from society.
      </p>

      <p className="text-gray-800 text-lg leading-relaxed">
        At <strong className="text-orange-700">Young Indians (Yi)</strong>, we're bridging this gap through our 
        <strong className="text-orange-700"> Accessibility initiative</strong>. We are committed to ensuring <em>equal access and opportunities</em> 
        while raising awareness and developing inclusive solutions that lead to greater employability and a better quality of life.
      </p>

      <p className="text-gray-800 text-lg leading-relaxed">
  With increasing disabilities due to aging and accidents, we focus on three pillars:
</p>
<ul className="list-disc ml-6 mt-2 text-green-700 text-left">
  <li>Built Environment Accessibility</li>
  <li>Transport System Accessibility</li>
  <li>Information & Communication Ecosystem Accessibility</li>
</ul>

    </div>

    {/* Right: Video */}
    <div className="relative animate-fade-in-up delay-200 group">
  {/* Video Container with Glow on Hover */}
  <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl ring-2 ring-green-200 group-hover:ring-green-400 transition-all duration-300">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/DUMMY_ID"
      title="Yi Accessibility Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

  {/* Fancy Floating Label */}
  <div className="absolute -top-5 -left-4 bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-1 rounded-full text-sm shadow-lg font-semibold animate-pulse">
    🎥 Watch Our Mission
  </div>

  {/* Decorative Bottom Border */}
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-orange-400 via-green-500 to-blue-700 rounded-full blur-sm opacity-80"></div>
</div>

  </div>
</section>


      {/* Stats Section */}
      <section className="bg-gradient-to-br from-green-100 to-orange-100 py-6 text-center">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-4xl font-bold text-green-800">1,000+</h2>
            <p className="text-gray-700">Ramps Built</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-orange-800">50,000+</h2>
            <p className="text-gray-700">People Impacted</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-blue-900">25+</h2>
            <p className="text-gray-700">Cities Reached</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-green-800">100%</h2>
            <p className="text-gray-700">Inclusion Focus</p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
<section className=" py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">

    {/* Left Column: Carousel */}
    <div className="w-full">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
        Moments from Our Journey
      </h2>
      <div className=" p-4 rounded-xl shadow-md">
        <Carousel images={imageLsit} interval={4000} height="400px" />
      </div>
    </div>

    {/* Right Column: Highlights */}
    <div className="space-y-8">
      {/* Highlight 1 */}

      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
        Highlights
      </h2>
      
      <div className="bg-orange-100 hover:bg-orange-200 transition-all duration-300 rounded-xl p-6 shadow hover:shadow-xl transform hover:scale-[1.02]">
        
        <div className="flex items-center space-x-3 mb-4">
          <Ear className="text-orange-600 w-6 h-6" />
          <h3 className="text-xl font-semibold text-orange-700">
            Braille Visiting Cards
          </h3>
        </div>
        <p className="text-gray-700">
Under Young Indians, Accessibility came up with a unique initiative of making the visiting cards Braille enabled for the Yi Members .
20% of the visiting cards of NMT members were Braille enabled.        </p>
      </div>

      {/* Highlight 2 */}
      <div className="bg-green-100 hover:bg-green-200 transition-all duration-300 rounded-xl p-6 shadow hover:shadow-xl transform hover:scale-[1.02]">
        <div className="flex items-center space-x-3 mb-4">
          <HelpingHand className="text-green-600 w-6 h-6" />
          <h3 className="text-xl font-semibold text-green-700">
            Ramp It Up Initiative
          </h3>
        </div>
        <p className="text-gray-700">
Under Accessibility Ramp it up was launched in the month of April 2019. According to the 2011 Census about 2.2% of Indias population have disablility.Of this largest forms are Mobility (20%), Vision (19%) and Hearing (19%).
With our project ramp it up we will be able to address the visibility and execution of the mobility.        </p>
      </div>
    </div>

  </div>
</section>


    </div>
  );
}
