"use client";

import AnimatedLogo from "../../components/AnimatedLogo";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { Leaf,Recycle, TreePine, Droplets, Users, Shield } from "lucide-react";
import climateLogo from "/assets/images/Yi-ClimateChange.png";

export default function ClimateChangePage({ scrollY }) {
  const parallax = (scrollY - 200) * 0.2;

  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden pt-36 min-h-screen">
        {/* Intro Animation */}
        <AnimatedLogo logoSrc={climateLogo} />
        {/* Hero */}
        <section
          className="relative min-h-screen flex flex-col items-center justify-center  text-white"
          style={{
            transform: `translateY(${Math.max(0, -parallax)}px)`,
          }}
        >
          <div className="flex justify-center mb-10">
            <img src={climateLogo} alt="Yi Health Logo" className="w-20 h-auto" />
          </div>

          <div className="relative z-10 text-center px-6">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              CLIMATE CHANGE
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-6">
              Empowering Youth for Positive Climate Action
            </p>
          </div>
        </section>

        {/* Why section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600">
              Why Climate Change?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Yi's Climate Change Initiative aims to unite the nation's youth through awareness, education and action on global climate impacts, adaptation, and mitigation.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Empower children and youth to understand and tackle climate change.
              </li>
              <li>
                Encourage youth to lead climate conversations
              </li>
              <li>
                Develop skills to adapt to climate impacts
              </li>
              <li>
                Support rural communities with sustainable solutions
              </li>
              <li>
                Initiate adaptation & mitigation projects including disaster relief
              </li>
            </ul>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-green-50">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Leaf className="w-8 h-8 text-green-600" />
                <p className="text-gray-700">
                  Yi's Climate Change engages at all levels—local, state, national and international—to influence climate advocacy .
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Droplets className="w-8 h-8 text-cyan-600" />
                <p className="text-gray-700">
                  Yi has responded to disaster relief and led afforestation & water conservation across India
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-blue-600" />
                <p className="text-gray-700">
                  Represented youth at the UN Climate Change Conference (COP26)
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              {/* <Image
                src="/assets/images/climate-afforestation.jpg"
                alt="Afforestation"
                className="rounded-xl shadow-lg object-cover w-full max-w-md h-64"
              /> */}
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-12">
              Climate Change Modules
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Miyawaki Model", icon: <TreePine className="w-8 h-8" />, desc: "Rapid native-species afforestation" },
                { title: "Water Rejuvenation", icon: <Droplets className="w-8 h-8" />, desc: "Conserve and restore water bodies" },
                { title: "Compost Challenge", icon: <Recycle className="w-8 h-8" />, desc: "Promote composting for sustainability" },
                { title: "One Student One Tree", icon: <Leaf className="w-8 h-8" />, desc: "Engage students in plantation" },
                { title: "Water Warriors", icon: <Shield className="w-8 h-8" />, desc: "Train youth in water conservation" },
              ].map((mod) => (
                <div
                  key={mod.title}
                  className="group perspective"
                >
                  <div className="relative w-full h-64 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                    <div className="absolute inset-0 bg-white rounded-xl shadow backface-hidden flex items-center justify-center">
                      {mod.icon}
                    </div>
                    <div className="absolute inset-0 bg-green-100 text-green-900 rounded-xl shadow backface-hidden rotate-y-180 flex flex-col items-center justify-center p-6 text-center">
                      <h3 className="text-xl font-bold mb-2">{mod.title}</h3>
                      <p className="text-sm">{mod.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
