// "use client";

// import { useEffect, useState } from "react";
// import {
//   ChevronDown,
//   Heart,
//   Shield,
//   Users,
//   Award,
//   Calendar,
//   Globe,
// } from "lucide-react";
// import Carousel from '../../Components/Carousel'



// export default function Masoom() {
//   const [scrollY, setScrollY] = useState(0);
//   const imageList = [
//   "/assets/images/Bharat.png",
//   "/assets/images/indian_flag.png",
//   "/assets/image3.jpg",
//   "/assets/image4.jpg",
// ]

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const parallaxOffset = scrollY * 0.5;
//   const textParallax = scrollY * 0.3;

//   return (
//     <div className="min-h-screen bg-white overflow-hidden">
//       {/* Hero Section with Parallax */}
//       <section
//         className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50"
//         style={{
//           transform: `translateY(${parallaxOffset}px)`,
//         }}
//       >
//         {/* Background Bubbles */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-xl animate-pulse"></div>
//           <div className="absolute bottom-40 right-32 w-48 h-48 bg-blue-900 rounded-full blur-xl animate-pulse delay-1000"></div>
//           <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-600 rounded-full blur-xl animate-pulse delay-2000"></div>
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
//           <div
//             className="transition-all duration-1000 ease-out"
//             style={{
//               transform: `translateY(${-textParallax}px)`,
//             }}
//           >
//             {/* Logo */}
//             {/* <div className="mb-8 flex justify-center">
//               <div className="relative">
//                 <div className="w-32 h-32 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
//                   <Shield className="w-16 h-16 text-white" />
//                 </div>
//                 <div className="absolute -top-3 -right-3 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
//                   <Heart className="w-6 h-6 text-white" />
//                 </div>
//               </div>
//             </div> */}

//             <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-700 to-blue-500 mb-6 tracking-tight animate-pulse">
//               MASOOM
//             </h1>

//             <p className="text-3xl md:text-4xl text-blue-800 font-light mb-8 max-w-4xl mx-auto leading-relaxed">
//               We are the voice of Young Indians globally.
//             </p>

//             <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-900 px-6 py-3 rounded-full text-lg font-medium shadow-lg">
//               <Shield className="w-5 h-5" />
//               <span>Keeping Children Safe Since 2015</span>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronDown className="w-10 h-10 text-blue-800" />
//         </div>
//       </section>
//           <div>
//             <Carousel images={imageList} interval={4000} height="500px" />
//           </div>
          
//       {/* Main Section */}
//       <section className="relative py-20 bg-gradient-to-b from-white via-blue-50 to-white min-h-screen">
//         <div className="max-w-7xl mx-auto px-4">
//           {/* Mission */}
//           <div
//             className="text-center mb-16"
//             style={{
//               transform: `translateY(${Math.max(0, -(scrollY - 400) * 0.1)}px)`,
//               opacity: Math.min(1, Math.max(0, (scrollY - 200) / 300)),
//             }}
//           >
//             <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-8 leading-tight">
//               Creating Awareness on Child Safety
//             </h2>
//             <p className="text-xl md:text-2xl text-blue-700 max-w-5xl mx-auto leading-relaxed">
//               Yi Project MASOOM was conceived to keep children safe by creating
//               awareness on child safety amongst young children, parents and
//               other stakeholders.
//             </p>
//           </div>

//           {/* Story Grid */}
//           <div
//             className="grid lg:grid-cols-2 gap-12 mb-16"
//             style={{
//               opacity: Math.min(1, Math.max(0, (scrollY - 400) / 400)),
//             }}
//           >
//             {/* LEFT COLUMN – About / Statistics */}
//             <div className="space-y-6">
//               <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl">
//                 <div className="flex items-center space-x-3 mb-6">
//                   <Award className="w-8 h-8 text-blue-600" />
//                   <h3 className="text-2xl font-bold text-blue-900">
//                     Nobel Peace Prize Launch
//                   </h3>
//                 </div>
//                 <p className="text-blue-700 leading-relaxed">
//                   Project Masoom was launched nationally by{" "}
//                   <strong>Kailash Satyarthi</strong>, Nobel Peace Laureate and
//                   founder of Bachpan Bachao Andolan, at the Yi summit “Take
//                   Pride” on March 12, 2015.
//                 </p>
//               </div>

//               <div className="bg-gradient-to-br from-blue-800 to-blue-600 rounded-3xl p-8 text-white shadow-xl">
//                 <div className="flex items-center space-x-3 mb-6">
//                   <Users className="w-8 h-8" />
//                   <h3 className="text-2xl font-bold">Our Mission</h3>
//                 </div>
//                 <p className="leading-relaxed opacity-95">
//                   Masoom is one of the key projects of Yi, aimed at raising
//                   awareness on child safety and protection through campaigns,
//                   events, and partnerships across India.
//                 </p>
//               </div>

//               <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl">
//                 <div className="flex items-center space-x-3 mb-6">
//                   <Globe className="w-8 h-8 text-blue-700" />
//                   <h3 className="text-2xl font-bold text-blue-900">
//                     Global Partnerships
//                   </h3>
//                 </div>
//                 <p className="text-blue-700 leading-relaxed">
//                   Masoom collaborates with{" "}
//                   <strong>
//                     Childline India Foundation, UNICEF India, Arpan, WeProtect
//                     Global Alliance
//                   </strong>
//                   , and other prominent organizations for child safety.
//                 </p>
//               </div>
//             </div>

//             {/* RIGHT COLUMN – Highlights & Activities */}
//             <div className="space-y-6">
//               <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-3xl p-8 text-white shadow-xl">
//                 <div className="flex items-center space-x-3 mb-6">
//                   <Calendar className="w-8 h-8" />
//                   <h3 className="text-2xl font-bold">Masoom Week & Day</h3>
//                 </div>
//                 <p className="leading-relaxed opacity-95 mb-4">
//                   Every year, <strong>November 14–20</strong> is celebrated as
//                   Masoom Week, and <strong>November 20</strong> as Masoom Day.
//                 </p>
//                 <div className="bg-white/20 rounded-2xl p-4">
//                   <p className="text-sm">
//                     Events include rallies, theatre fests, carnivals,
//                     exhibitions, and media talks to spread child safety
//                     awareness.
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl">
//                 <h3 className="text-2xl font-bold text-blue-900 mb-6">
//                   Highlights of the Year
//                 </h3>
//                 <div className="space-y-4">
//                   {[
//                     {
//                       color: "bg-blue-500",
//                       text: "Awareness sessions for Teachers, Parents, and Caregivers in partnership with local authorities.",
//                     },
//                     {
//                       color: "bg-purple-500",
//                       text: "Children Sessions: Direct engagement with young minds about safety.",
//                     },
//                     {
//                       color: "bg-pink-500",
//                       text: "Teacher Sessions: Training educators on safety protocols.",
//                     },
//                     {
//                       color: "bg-green-500",
//                       text: "Parent/Caregiver Sessions: Equipping families to protect children.",
//                     },
//                   ].map((item, i) => (
//                     <div key={i} className="flex items-start space-x-3">
//                       <div
//                         className={`w-6 h-6 ${item.color} rounded-full flex-shrink-0 mt-1`}
//                       />
//                       <p className="text-blue-700">{item.text}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 text-white shadow-xl">
//                 <div className="text-center">
//                   <h3 className="text-3xl font-bold mb-2">Millions Reached</h3>
//                   <p className="text-lg opacity-90">
//                     Communities across India impacted through our consistent
//                     efforts
//                   </p>
//                 </div>
//               </div> */}
//             </div>
//           </div>

//           {/* Call to Action */}
//           {/* <div
//             className="text-center bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-12 text-white shadow-2xl"
//             style={{
//               opacity: Math.min(1, Math.max(0, (scrollY - 800) / 400)),
//               transform: `translateY(${Math.max(0, -(scrollY - 800) * 0.05)}px)`,
//             }}
//           >
//             <h2 className="text-4xl font-bold mb-6">Join the Movement for Child Safety</h2>
//             <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
//               Support our journey to create a safer, stronger environment for every child in India.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
//                 Get Involved
//               </button>
//               <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300">
//                 Learn More
//               </button>
//             </div>
//           </div> */}
//         </div>

//         {/* Floating Background Elements */}
//         <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-bounce" />
//         <div className="absolute bottom-40 right-20 w-16 h-16 bg-blue-300 rounded-full opacity-30 animate-bounce delay-1000" />
//         <div className="absolute top-1/2 right-10 w-12 h-12 bg-blue-400 rounded-full opacity-30 animate-bounce delay-2000" />
//       </section>
//     </div>
//   );
// }

// Masoom.jsx
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
  Activity, Users, Eye,
} from "lucide-react";
import yimasoom from "/assets/images/Yi-Masoom.png";
import Carousel from "../../Components/Carousel";
import AnimatedLogo from "../../components/AnimatedLogo";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StatsCounterSection from "../../components/StatsCounterSection";

export default function Masoom() {
  const imageLsit = [
    "/assets/images/Yi-accessibility-1.png",
    "/assets/images/Yi-accessibility-2.png",
    "/assets/images/Yi-accessibility-3.png",
    "/assets/images/Yi-accessibility-4.png",
  ];

  const statsData = [
    {
      id: "ramps",
      label: "RAMPS BUILT",
      value: "1,000+",
      numericValue: 1000,
      icon: <Activity className="w-5 h-5" />,
      color: "text-blue-700",
      bgGradient: "from-blue-400 to-blue-500",
    },
    {
      id: "people",
      label: "PEOPLE IMPACTED",
      value: "50,000+",
      numericValue: 50000,
      icon: <Users className="w-5 h-5" />,
      color: "text-blue-700",
      bgGradient: "from-blue-400 to-blue-500",
    },
    {
      id: "cities",
      label: "CITIES REACHED",
      value: "25+",
      numericValue: 25,
      icon: <Eye className="w-5 h-5" />,
      color: "text-blue-700",
      bgGradient: "from-blue-400 to-blue-500",
    },
    {
      id: "inclusion",
      label: "INCLUSION FOCUS",
      value: "100%",
      numericValue: 100,
      icon: <Ear className="w-5 h-5" />,
      color: "text-blue-700",
      bgGradient: "from-blue-400 to-blue-500",
    },
  ];

  return (
    <>
      <Navbar centerLogo={yimasoom}/>
      <div className="relative pt-36 min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-white overflow-y-auto">
        <AnimatedLogo logoSrc={yimasoom} />
        <section className="py-3 bg-gradient-to-br from-blue-50 via-blue-100 to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in-up text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-snug">
                Masoom
              </h1>
              <h2 className="text-lg md:text-2xl font-medium text-blue-800">
                Creating Awareness on Child Safety
              </h2>

              <p className="text-blue-800 text-lg leading-relaxed mt-4">
                <strong className="text-blue-600">Project Masoom</strong> was launched nationally by
                <strong className="text-blue-800"> Kailash Satyarthi</strong>, Nobel Peace Laureate and founder of
                Bachpan Bachao Andolan, during the Yi Annual Summit <em>“Take Pride”</em> on <strong>March 12, 2015</strong>.
              </p>

              <div className="bg-blue-100 border-l-4 border-blue-400 p-4 rounded-xl shadow-sm">
                <p className="text-blue-800">
                  Masoom aims to <strong>eliminate child sexual abuse</strong> and <strong>raise awareness on child safety</strong> through:
                </p>
                <ul className="list-disc pl-5 mt-2 text-blue-800 font-medium">
                  <li>Awareness Sessions</li>
                  <li>Campaigns & Events</li>
                  <li>Social Media Outreach</li>
                </ul>
              </div>

              <p className="text-blue-800 text-lg leading-relaxed">
                We work in partnership with <strong>Childline India Foundation</strong>, <strong>UNICEF India</strong>,
                <strong> Arpan</strong>, <strong>WeProtect Global Alliance</strong>, and other reputed organisations
                to drive impactful safety education nationwide.
              </p>

              <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-xl shadow-sm">
                <p className="text-blue-800">
                  Yi conducts <strong>sensitization sessions</strong> with:
                </p>
                <ul className="list-disc pl-5 mt-2 text-blue-800 font-medium">
                  <li>Children</li>
                  <li>Teachers</li>
                  <li>Parents & Caregivers</li>
                </ul>
              </div>

              <p className="text-blue-800 text-lg leading-relaxed">
                Every year, <span className="font-semibold text-blue-900">November 14–20</span> is celebrated as
                <strong className="text-blue-700"> Masoom Week</strong>, and <strong>November 20</strong> as <strong>Masoom Day</strong>.
              </p>

              <div className="bg-white border-l-4 border-blue-500 p-4 rounded-xl shadow-sm">
                <p className="text-blue-800">
                  Public awareness is driven through <strong>city-wide campaigns</strong> including:
                </p>
                <ul className="list-disc pl-5 mt-2 text-blue-800 font-medium">
                  <li>Rallies & Hoardings</li>
                  <li>Theatre Festivals & Carnivals</li>
                  <li>Exhibitions & Skits</li>
                  <li>Talk Shows on Radio & TV</li>
                </ul>
              </div>
            </div>

            <div className="relative animate-fade-in-up delay-200 group">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl ring-2 ring-blue-300 group-hover:ring-blue-400 transition-all duration-300">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/DUMMY_ID"
                  title="Yi Accessibility Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="absolute -top-5 -left-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-1 rounded-full text-sm shadow-lg font-semibold animate-pulse">
                🎥 Watch Our Mission
              </div>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 rounded-full blur-sm opacity-80"></div>

              <div className="mt-10 bg-white rounded-3xl p-8 shadow-xl animate-fade-in-up delay-300">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Highlights of the Year</h3>
                <ul className="list-disc pl-6 space-y-3 text-blue-800">
                  <li>
                    <span className="font-semibold text-blue-600">Awareness Drive:</span> Focused on teachers, parents, and caregivers with sessions to strengthen partnerships with local administration.
                  </li>
                  <li>
                    <span className="font-semibold text-blue-700">Children Sessions:</span> Interactive and age-appropriate awareness workshops in schools and communities.
                  </li>
                  <li>
                    <span className="font-semibold text-blue-800">Teachers Sessions:</span> Training to identify signs of abuse and guide students with sensitivity.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <StatsCounterSection
          statsData={statsData}
          theme={{
            bgFrom: 'blue-50',
            bgVia: 'blue-100',
            bgTo: 'white',
            primaryGlow: 'from-blue-400/20 to-blue-500/20',
            borderColor: 'border-blue-100/50',
            hoverBorderColor: 'group-hover:border-blue-300',
            numberHover: 'group-hover:text-blue-700',
            lineGradient: 'from-blue-400 to-blue-500',
          }}
        />
      </div>
      <Footer />
    </>
  );
}
