// "use client";

// import React, { useState, useEffect } from "react";
// import CountUp from "react-countup";
// import {
//   Sparkles,
//   Users,
//   Heart,
//   BookOpen,
//   ArrowRight,
//   Leaf,
//   GraduationCap,
//   Shield,
//   Smile,
//   ChevronDown,
// } from "lucide-react";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

// // Infused Button Component
// const Button = ({ children, className = "", variant = "default", ...props }) => {
//   const baseStyle = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
//   const variants = {
//     default: "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600",
//     outline: "border-2 border-green-500 text-green-600 hover:bg-green-50 bg-transparent",
//   };
//   const style = `${baseStyle} ${variants[variant] || variants.default} ${className}`;
//   return (
//     <button className={style} {...props}>
//       {children}
//     </button>
//   );
// };

// // Infused Card Component
// const Card = ({ children, className = "", style }) => (
//   <div className={`rounded-xl bg-white shadow-md ${className}`} style={style}>
//     {children}
//   </div>
// );

// const CardContent = ({ children, className = "" }) => (
//   <div className={`p-4 ${className}`}>{children}</div>
// );

// export default function ThalirPage() {
//   const [scrollY, setScrollY] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);

//     setTimeout(() => setIsVisible(true), 100);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const stats = [
//     { number: 1000, suffix: "+", label: "Schools Reached", color: "text-green-500" },
//     { number: 50000, suffix: "+", label: "Children Impacted", color: "text-emerald-500" },
//     { number: 25, suffix: "+", label: "States Covered", color: "text-lime-500" },
//     { number: 100, suffix: "%", label: "Holistic Growth", color: "text-green-600" },
//   ];

//   return (
//     <div className="bg-white min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-1 max-w-7xl mx-auto px-4 pt-52 pb-16">
//         <section className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Left Content */}
//           <div>
//             {/* Yi Thalir Header */}
//             <div className="flex items-center mb-6 space-x-4">
//               <div className="flex items-center space-x-3">
//                 <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl">
//                   <span className="text-white font-bold text-xl">Yi</span>
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-bold text-green-600">Thalir</h2>
//               </div>
//             </div>

//             <div className="flex items-center space-x-3 text-green-600 text-xl font-medium mb-4">
//               <Sparkles className="w-6 h-6" />
//               <span>Let's Nurture From School</span>
//             </div>
//             <div className="w-40 h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 rounded-full mb-8"></div>

//             {/* Description */}
//             <div className="space-y-6 text-gray-700 text-lg leading-relaxed max-w-2xl mb-8">
//               <p>
//                 Yi Thalir opens a platform that focuses on the holistic development of school children. It works with Indian schools to empower and nurture every child to be independent, safe, happy, inclusive, and responsible citizens.
//               </p>
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="flex justify-center">
//             <Card className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-green-200/50 shadow-2xl">
//               <CardContent className="p-8">
//                 <div className="grid grid-cols-2 gap-6 mb-8">
//                   {stats.map((stat, index) => (
//                     <div key={index} className="text-center">
//                       <div className={`text-3xl font-bold ${stat.color} mb-2`}>
//                         <CountUp end={stat.number} duration={3} suffix={stat.suffix} />
//                       </div>
//                       <div className="text-gray-600 text-sm">{stat.label}</div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="text-center">
//                   <div className="w-20 h-20 bg-gradient-to-br from-green-500 via-emerald-500 to-lime-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
//                     <GraduationCap className="w-10 h-10 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">Thalir Impact</h3>
//                   <p className="text-gray-600 text-sm">Nurturing Future Citizens</p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import {
  Sparkles,
  GraduationCap,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Infused Button Component
const Button = ({ children, className = "", variant = "default", ...props }) => {
  const baseStyle = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600",
    outline: "border-2 border-green-500 text-green-600 hover:bg-green-50 bg-transparent",
  };
  const style = `${baseStyle} ${variants[variant] || variants.default} ${className}`;
  return (
    <button className={style} {...props}>
      {children}
    </button>
  );
};

// Infused Card Component
const Card = ({ children, className = "", style }) => (
  <div className={`rounded-xl bg-white shadow-md ${className}`} style={style}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

// Carousel Images
const carouselImages = [
  "/assets/images/carousel1.jpg",
  "/assets/images/carousel2.jpg",
  "/assets/images/carousel3.jpg",
];

export default function ThalirPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    setTimeout(() => setIsVisible(true), 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Carousel Auto Slide
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  const stats = [
    { number: 1000, suffix: "+", label: "Schools Reached", color: "text-green-500" },
    { number: 50000, suffix: "+", label: "Children Impacted", color: "text-emerald-500" },
    { number: 25, suffix: "+", label: "States Covered", color: "text-lime-500" },
    { number: 100, suffix: "%", label: "Holistic Growth", color: "text-green-600" },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 pt-52 pb-16">
        <section className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <div className="flex items-center mb-6 space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-xl">Yi</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-green-600">Thalir</h2>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-green-600 text-xl font-medium mb-4">
              <Sparkles className="w-6 h-6" />
              <span>Let's Nurture From School</span>
            </div>
            <div className="w-40 h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 rounded-full mb-8"></div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed max-w-2xl mb-8">
              <p>
                Yi Thalir opens a platform that focuses on the holistic development of school children. It works with Indian schools to empower and nurture every child to be independent, safe, happy, inclusive, and responsible citizens.
              </p>
            </div>
          </div>

          {/* Right: Video Section */}
          <div className="flex justify-center items-center mt-10">
            <div className="w-full h-[240px] md:h-[300px] lg:h-[350px] rounded-2xl overflow-hidden shadow-lg bg-black flex items-center justify-center">
              <video
                className="w-full h-full object-cover"
                src="https://chotacop.in/yi-ai/final.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                poster="/assets/images/rural-woman-sewing.jpg"
              />
            </div>
          </div>
        </section>

        {/* Counts Section */}
        <section className="mt-16 flex flex-wrap justify-center gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center w-40">
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                <CountUp end={stat.number} duration={3} suffix={stat.suffix} />
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Carousel Section */}
        <section className="mt-20 bg-gray-100 py-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Explore More</h2>
          <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselImages.map((image, index) => (
                <div key={index} className="min-w-full h-[400px]">
                  <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center mt-4 space-x-3">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full ${currentSlide === index ? 'bg-green-500' : 'bg-gray-400'}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
