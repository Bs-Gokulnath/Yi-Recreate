// "use client"
// import './ClimateChange.css'

// import { Leaf, Droplets, TreePine, Users, Globe, Recycle, Sprout, Shield } from "lucide-react"

// export default function ClimateChange({ scrollY }) {
//   const climateParallax = (scrollY - 1200) * 0.3
//   const moduleParallax = (scrollY - 1800) * 0.2

//   return (
//     <div className="relative">
//       {/* Climate Change Hero Section */}
//       <section
//         className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 via-green-600 to-blue-900 overflow-hidden"
//         style={{
//           transform: `translateY(${Math.max(0, -climateParallax)}px)`,
//         }}
//       >
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-20 w-40 h-40 bg-orange-400/30 rounded-full blur-xl animate-pulse"></div>
//           <div className="absolute bottom-32 right-32 w-56 h-56 bg-green-400/30 rounded-full blur-xl animate-pulse delay-1000"></div>
//           <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse delay-2000"></div>
//           <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-300/40 rounded-full blur-xl animate-pulse delay-3000"></div>
//         </div>

//         {/* Floating Icons */}
//         <div
//           className="absolute top-32 left-16 text-white/40 animate-bounce"
//           style={{ animationDelay: "0s", animationDuration: "4s" }}
//         >
//           <Leaf className="w-12 h-12" />
//         </div>
//         <div
//           className="absolute bottom-40 right-20 text-white/40 animate-bounce"
//           style={{ animationDelay: "1s", animationDuration: "5s" }}
//         >
//           <TreePine className="w-16 h-16" />
//         </div>
//         <div
//           className="absolute top-1/3 right-16 text-white/40 animate-bounce"
//           style={{ animationDelay: "2s", animationDuration: "6s" }}
//         >
//           <Droplets className="w-10 h-10" />
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
//           <div
//             className="transform transition-all duration-1000 ease-out"
//             style={{
//               transform: `translateY(${Math.max(0, -(scrollY - 1000) * 0.1)}px)`,
//               opacity: Math.min(1, Math.max(0, (scrollY - 800) / 400)),
//             }}
//           >
//             {/* Climate Logo */}
//             <div className="mb-8 flex justify-center">
//               <div className="relative">
//                 <div className="w-40 h-40 bg-gradient-to-br from-orange-500 via-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl animate-spin-slow">
//                   <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
//                     <Globe className="w-16 h-16 text-green-600" />
//                   </div>
//                 </div>
//                 <div className="absolute -top-2 -right-2 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
//                   <Leaf className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-pulse delay-1000">
//                   <Droplets className="w-6 h-6 text-white" />
//                 </div>
//               </div>
//             </div>

//             <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 mb-6 tracking-tight">
//               CLIMATE CHANGE
//             </h1>

//             <p className="text-2xl md:text-3xl text-white font-light mb-8 max-w-4xl mx-auto leading-relaxed">
//               Empowering Youth for Positive Climate Action
//             </p>

//             <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg border border-white/30">
//               <TreePine className="w-6 h-6" />
//               <span>Building a Sustainable Future Together</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Climate Content Section */}
//       <section className="relative py-20 bg-gradient-to-b from-white via-orange-50 to-green-50 min-h-screen">
//         <div className="max-w-7xl mx-auto px-4">
//           {/* Why Climate Change */}
//           <div
//             className="text-center mb-16"
//             style={{
//               transform: `translateY(${Math.max(0, -(scrollY - 1400) * 0.1)}px)`,
//               opacity: Math.min(1, Math.max(0, (scrollY - 1200) / 400)),
//             }}
//           >
//             <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-green-600 to-blue-800 mb-8 leading-tight">
//               Why Climate Change?
//             </h2>
//             <p className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
//               Yi's Climate Change Initiative aims to bring together the nation's youth and engage them in positive
//               climate action.
//             </p>
//           </div>

//           {/* Mission and Engagement Areas */}
//           <div
//             className="grid lg:grid-cols-2 gap-12 mb-16"
//             style={{
//               opacity: Math.min(1, Math.max(0, (scrollY - 1600) / 400)),
//             }}
//           >
//             {/* Left Column - Mission */}
//             <div className="space-y-6">
//               <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-white shadow-xl">
//                 <div className="flex items-center space-x-3 mb-6">
//                   <Globe className="w-8 h-8" />
//                   <h3 className="text-2xl font-bold">Our Mission</h3>
//                 </div>
//                 <p className="leading-relaxed opacity-95">
//                   It aims to create awareness, educate, and initiate projects towards world climate change, the effects
//                   of global climate change on the environment, climate adaptation, and climate mitigation.
//                 </p>
//               </div>

//               <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-green-500">
//                 <div className="flex items-center space-x-3 mb-6">
//                   <Users className="w-8 h-8 text-green-600" />
//                   <h3 className="text-2xl font-bold text-gray-900">Youth Empowerment</h3>
//                 </div>
//                 <ul className="space-y-3 text-gray-700">
//                   <li className="flex items-start space-x-2">
//                     <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
//                     <span>
//                       Empowering children and youth to understand and tackle climate change and global warming
//                     </span>
//                   </li>
//                   <li className="flex items-start space-x-2">
//                     <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
//                     <span>
//                       Encourage young people to come to the forefront of climate change issues and conversations
//                     </span>
//                   </li>
//                 </ul>
//               </div>

//               <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl">
//                 <div className="flex items-center space-x-3 mb-6">
//                   <Shield className="w-8 h-8" />
//                   <h3 className="text-2xl font-bold">Global Engagement</h3>
//                 </div>
//                 <p className="leading-relaxed opacity-95">
//                   Yi's Climate Change engages at the local, state, national, and international levels with governments
//                   and organisations working towards climate change advocacy.
//                 </p>
//               </div>
//             </div>

//             {/* Right Column - Areas of Engagement */}
//             <div className="space-y-6">
//               <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-orange-500">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas of Engagement</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-start space-x-3">
//                     <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
//                       <Leaf className="w-3 h-3 text-white" />
//                     </div>
//                     <p className="text-gray-700">
//                       Enable young people to develop skills to adapt to the impact of climate change effectively
//                     </p>
//                   </div>
//                   <div className="flex items-start space-x-3">
//                     <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
//                       <Users className="w-3 h-3 text-white" />
//                     </div>
//                     <p className="text-gray-700">
//                       Support rural population for skill development and sustainable climate change solutions
//                     </p>
//                   </div>
//                   <div className="flex items-start space-x-3">
//                     <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
//                       <Shield className="w-3 h-3 text-white" />
//                     </div>
//                     <p className="text-gray-700">
//                       Initiate projects for climate adaptation and mitigation, including focus on disaster management
//                       and relief
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-3xl p-8 text-white shadow-xl">
//                 <div className="flex items-center space-x-3 mb-6">
//                   <TreePine className="w-8 h-8" />
//                   <h3 className="text-2xl font-bold">Our Impact</h3>
//                 </div>
//                 <p className="leading-relaxed opacity-95 mb-4">
//                   Over the years, Yi has responded to and supported disaster relief work and initiated afforestation and
//                   water conservation projects across India.
//                 </p>
//                 <div className="bg-white/20 rounded-2xl p-4">
//                   <p className="text-sm">
//                     Yi participated in the <strong>UN Climate Change Conference (UNFCCC COP 26)</strong> in Glasgow to
//                     represent the young Indian faction working to subvert the climate crisis.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Climate Change Modules */}
//           <div
//             className="mb-16"
//             style={{
//               opacity: Math.min(1, Math.max(0, (scrollY - 2000) / 400)),
//               transform: `translateY(${Math.max(0, -moduleParallax)}px)`,
//             }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-green-600 to-blue-800 mb-12">
//               Yi Climate Change Modules
//             </h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {/* Miyawaki Model */}
//               <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-3xl p-6 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
//                 <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
//                   <TreePine className="w-8 h-8" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">Miyawaki Model of Afforestation</h3>
//                 <p className="text-sm opacity-90">
//                   Rapid forest creation using native species for maximum ecological impact
//                 </p>
//               </div>

//               {/* Water Body Rejuvenation */}
//               <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-6 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
//                 <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
//                   <Droplets className="w-8 h-8" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">Water Body Rejuvenation</h3>
//                 <p className="text-sm opacity-90">
//                   Restoring and conserving water bodies for sustainable water management
//                 </p>
//               </div>

//               {/* Compost Challenge */}
//               <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-6 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
//                 <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
//                   <Recycle className="w-8 h-8" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">Compost Challenge</h3>
//                 <p className="text-sm opacity-90">
//                   Promoting organic waste management and sustainable composting practices
//                 </p>
//               </div>

//               {/* One Student, One Tree */}
//               <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-6 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
//                 <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
//                   <Sprout className="w-8 h-8" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">One Student, One Tree Program</h3>
//                 <p className="text-sm opacity-90">Engaging students in tree plantation and environmental stewardship</p>
//               </div>

//               {/* Water Warriors */}
//               <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-6 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 md:col-span-2 lg:col-span-1">
//                 <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
//                   <Shield className="w-8 h-8" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">Water Warriors Program</h3>
//                 <p className="text-sm opacity-90">
//                   Training youth as water conservation champions in their communities
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Call to Action */}
//           <div
//             className="text-center bg-gradient-to-r from-orange-600 via-green-600 to-blue-700 rounded-3xl p-12 text-white shadow-2xl"
//             style={{
//               opacity: Math.min(1, Math.max(0, (scrollY - 2400) / 400)),
//             }}
//           >
//             <h2 className="text-4xl font-bold mb-6">Join the Climate Action Movement</h2>
//             <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
//               Together, we can create sustainable solutions and build a resilient future for generations to come. Every
//               action counts in the fight against climate change.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
//                 Take Climate Action
//               </button>
//               <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
//                 Learn About Our Modules
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Floating Background Elements */}
//         <div
//           className="absolute top-20 left-10 w-20 h-20 bg-orange-200/50 rounded-full animate-bounce"
//           style={{ animationDelay: "0s", animationDuration: "4s" }}
//         ></div>
//         <div
//           className="absolute bottom-40 right-20 w-16 h-16 bg-green-200/50 rounded-full animate-bounce"
//           style={{ animationDelay: "1s", animationDuration: "5s" }}
//         ></div>
//         <div
//           className="absolute top-1/2 right-10 w-12 h-12 bg-blue-200/50 rounded-full animate-bounce"
//           style={{ animationDelay: "2s", animationDuration: "6s" }}
//         ></div>
//       </section>
//     </div>
//   )
// }
// ClimateChangePage.jsx
"use client";

import AnimatedLogo from "../../components/AnimatedLogo";

import { Leaf,Recycle, TreePine, Droplets, Users, Shield } from "lucide-react";
import climateLogo from "/assets/images/Yi-ClimateChange.png";

export default function ClimateChangePage({ scrollY }) {
  const parallax = (scrollY - 200) * 0.2;

  return (
    <div className="relative overflow-hidden">
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
            Yi’s Climate Change Initiative aims to unite the nation's youth through awareness, education and action on global climate impacts, adaptation, and mitigation.
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
  );
}
