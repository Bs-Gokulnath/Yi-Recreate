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
"use client";

import { useEffect, useState } from "react";
import {
  ChevronDown,
  Shield,
  Award,
  Users,
  Calendar,
  Globe,
} from "lucide-react";
import Carousel from "../../Components/Carousel";
import Card from "./Card"; // make sure this exists or inline the logic
// import CustomCursor from "../../Components/CustomCursor"; // make sure this exists or inline the
// import StatCounter from "../../Components/StatCounter"; // make sure this exists or inline the logic

export default function Masoom() {
  const [scrollY, setScrollY] = useState(0);
  const imageList = [
    "/assets/images/Bharat.png",
    "/assets/images/indian_flag.png",
    "/assets/image3.jpg",
    "/assets/image4.jpg",
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50 overflow-hidden"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-24 h-24 bg-blue-400 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-blue-800 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        <div className="z-10 text-center px-4">
          <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-700 to-blue-500 mb-4">
            MASOOM
          </h1>
          <p className="text-xl md:text-2xl text-blue-800 font-medium max-w-xl mx-auto">
            Creating Awareness on Child Safety Since 2015
          </p>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-blue-700" />
        </div>
      </section>

      {/* Carousel */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <Carousel images={imageList} interval={4000} height="500px" />
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
            Impact in Numbers
          </h2>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {["Children Reached", "Schools Partnered", "Volunteers", "Sessions Conducted"].map((label, idx) => (
              <StatCounter key={idx} label={label} value={0} />
            ))}
          </div> */}
        </div>
      </section>

      {/* About + Video */}
      <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
    {/* Left Column - About Cards */}
    <div className="space-y-6">
  {/* Card 1: Nobel Peace Prize Launch */}
  <Card
    icon={Shield}
    title="Nobel Peace Prize Launch"
    description={
      <>
        Project Masoom was launched nationally by <strong>Kailash Satyarthi</strong>,
        Nobel Peace Laureate and founder of Bachpan Bachao Andolan, at the Yi summit
        “Take Pride” on March 12, 2015.
      </>
    }
  />

  {/* Card 2: Our Mission */}
  <Card
    icon={Users}
    title="Our Mission"
    description="Masoom is one of the key projects of Yi, aimed at raising awareness on child safety and protection through campaigns, events, and partnerships across India."
    color="bg-blue-700"
  />

  {/* Card 3: Global Partnerships */}
  <Card
    icon={Globe}
    title="Global Partnerships"
    description={
      <>
        Masoom collaborates with <strong>Childline India Foundation, UNICEF India,
        Arpan, WeProtect Global Alliance</strong>, and other prominent organizations
        for child safety.
      </>
    }
  />

  {/* Card 4: Masoom Week & Day */}
  <Card
    icon={Calendar}
    title="Masoom Week & Day"
    description={
      <>
        Every year, <strong>November 14–20</strong> is celebrated as Masoom Week,
        and <strong>November 20</strong> as Masoom Day.
      </>
    }
    extra={
      <div className="bg-white/20 rounded-2xl p-4">
        <p className="text-sm text-blue-800">
          Events include rallies, theatre fests, carnivals, exhibitions, and media
          talks to spread child safety awareness.
        </p>
      </div>
    }
    color="bg-blue-500"
  />
</div>


    {/* Right Column - YouTube + Highlights */}
    <div className="space-y-8">
      <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/DUMMY_ID"
          title="Masoom Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">Highlights of the Year</h3>
        <div className="space-y-4">
          {[
            {
              color: "bg-blue-500",
              text: "Awareness sessions for Teachers, Parents, and Caregivers in partnership with local authorities.",
            },
            {
              color: "bg-purple-500",
              text: "Children Sessions: Direct engagement with young minds about safety.",
            },
            {
              color: "bg-pink-500",
              text: "Teacher Sessions: Training educators on safety protocols.",
            },
            {
              color: "bg-green-500",
              text: "Parent/Caregiver Sessions: Equipping families to protect children.",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start space-x-3">
              <div className={`w-6 h-6 ${item.color} rounded-full flex-shrink-0 mt-1`} />
              <p className="text-blue-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
