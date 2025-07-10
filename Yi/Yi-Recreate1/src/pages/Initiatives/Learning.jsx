// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "./Card";
// import { Badge } from "@/components/ui/badge";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import { useState } from "react";

// import {
//   Users,
//   Building2,
//   Globe,
//   BookOpen,
//   Target,
//   ArrowRight,
//   Lightbulb,
//   Handshake,
//   TrendingUp,
//   Award,
// } from "lucide-react";

// export default function LearningPage() {
//   const learningPrograms = [
//     {
//       icon: <Users className="h-6 w-6" />,
//       title: "Political & Administrative Interactions",
//       description:
//         "Engage with local administration and political leaders to understand modern governance and city development initiatives.",
//     },
//     {
//       icon: <Globe className="h-6 w-6" />,
//       title: "Trade Development Sessions",
//       description:
//         "Learn from trade development bodies about global business expansion opportunities and growth strategies.",
//     },
//     {
//       icon: <Building2 className="h-6 w-6" />,
//       title: "Learning Missions",
//       description:
//         "Visit companies, factories, and industries that have set global standards of excellence and innovation.",
//     },
//     {
//       icon: <Handshake className="h-6 w-6" />,
//       title: "Peer-to-Peer Learning",
//       description:
//         "Experience sharing, deliberations, and active leadership development in closed circles of peers.",
//     },
//     {
//       icon: <BookOpen className="h-6 w-6" />,
//       title: "Workshops & Seminars",
//       description:
//         "Hands-on experience with direct learning through interactive workshops, seminars, and round tables.",
//     },
//     {
//       icon: <Award className="h-6 w-6" />,
//       title: "Leadership Talks",
//       description:
//         "Interactive sessions and talks with national and global leaders sharing their expertise and insights.",
//     },
//   ];
//   const [flippedCardIndex, setFlippedCardIndex] = useState(null);

//   return (
//     <>
//       <Navbar />
//       <div className="relative pt-36 min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
//         {/* Hero Section */}
//         <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
//           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-1 gap-12 items-start">
//             <div className="space-y-6 text-justify text-gray-800 text-lg">
//               <Badge
//                 variant="outline"
//                 className="text-orange-600 border-orange-200"
//               >
//                 Leadership Development Platform
//               </Badge>
//               <h1 className="text-4xl font-bold text-orange-800 text-center md:text-left">
//                 Yi Learning
//               </h1>
//               <p>
//                 Yi ensures to hone the leadership skills of its members with
//                 several learning programs throughout the year, from interactive
//                 sessions to talks with national and global leaders to company
//                 and industry visits in India and overseas.
//               </p>
//               <p>
//                 The Learning Vertical has traditionally served as a platform for
//                 Yi members to learn from the best through interactive sessions,
//                 company visits, workshops, seminars, and from peers in the
//                 organisation.
//               </p>
//               <div className="flex items-center gap-3 text-orange-600">
//                 <Target className="h-5 w-5" />
//                 <span className="font-semibold">
//                   Leadership is a source of competitive advantage
//                 </span>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
//                   Join Learning Programs
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//                 <Button size="lg" variant="outline">
//                   Explore Opportunities
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Learning Programs */}
//         <section className="py-16 bg-white px-6">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
//                 Our Learning Programs
//               </h2>
//               <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                 Chapters across India engage in a plethora of learning
//                 activities designed to develop leadership skills and expand
//                 business knowledge.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
// {learningPrograms.map((program, index) => (
//   <div
//     key={index}
//     className="perspective h-64"
//     onClick={() =>
//       setFlippedCardIndex(flippedCardIndex === index ? null : index)
//     }
//   >
//     <div
//       className={`card-flip-inner ${
//         flippedCardIndex === index ? "flipped" : ""
//       }`}
//     >
//       {/* Front Side */}
//       <div className="card-front bg-white shadow-lg border border-orange-200 p-6 hover:bg-orange-50">
//         <div className="flex items-center justify-between mb-4">
//           <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
//             {program.icon}
//           </div>
//           <div className="font-bold text-lg text-orange-700">
//             {program.title}
//           </div>
//         </div>
//         <p className="text-gray-600 text-sm leading-relaxed">
//           Tap to view more
//         </p>
//       </div>

//       {/* Back Side */}
//       <div className="card-back bg-gradient-to-br from-orange-200 to-yellow-100 shadow-xl p-6 text-orange-900">
//         <h3 className="text-md font-bold mb-2">{program.title}</h3>
//         <p className="text-sm text-orange-800 leading-relaxed">
//           {program.description}
//         </p>
//       </div>
//     </div>
//   </div>
// ))}
//            </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </>
//   );
// }
import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Card from "./Card";
import {
  Users,
  Building2,
  Globe,
  BookOpen,
  Target,
  ArrowRight,
  Handshake,
  Award,
} from "lucide-react";

export default function LearningPage() {
  const learningPrograms = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Political & Administrative Interactions",
      description:
        "Engage with local administration and political leaders to understand modern governance and city development initiatives.",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Trade Development Sessions",
      description:
        "Learn from trade development bodies about global business expansion opportunities and growth strategies.",
    },
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      title: "Learning Missions",
      description:
        "Visit companies, factories, and industries that have set global standards of excellence and innovation.",
    },
    {
      icon: <Handshake className="h-8 w-8 text-blue-600" />,
      title: "Peer-to-Peer Learning",
      description:
        "Experience sharing, deliberations, and active leadership development in closed circles of peers.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Workshops & Seminars",
      description:
        "Hands-on experience with direct learning through interactive workshops, seminars, and round tables.",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Leadership Talks",
      description:
        "Interactive sessions and talks with national and global leaders sharing their expertise and insights.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="relative pt-36 min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-12">
            <div className="space-y-6 text-justify text-gray-800 text-lg">
              <Badge variant="outline" className="text-orange-600 border-orange-200">
                Leadership Development Platform
              </Badge>
              <h1 className="text-4xl font-bold text-orange-800 text-center md:text-left">
                Yi Learning
              </h1>
              <p>
                Yi ensures to hone the leadership skills of its members with several learning programs throughout the year, from interactive sessions to talks with national and global leaders to company and industry visits in India and overseas.
              </p>
              <p>
                The Learning Vertical has traditionally served as a platform for Yi members to learn from the best through interactive sessions, company visits, workshops, seminars, and from peers in the organisation.
              </p>
              <div className="flex items-center gap-3 text-orange-600">
                <Target className="h-5 w-5" />
                <span className="font-semibold">
                  Leadership is a source of competitive advantage
                </span>
              </div>
              
            </div>
          </div>
        </section>

        {/* Animated Cards Section */}
        {/* <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
                Our Learning Programs
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Chapters across India engage in a plethora of learning
                activities designed to develop leadership skills and expand
                business knowledge.
              </p>
            </div>

            <StyledCardGrid>
              {learningPrograms.map((program, index) => (
                <StyledWrapper key={index}>
                  <div className="card">
                    <div className="content">
                      <div>{program.icon}</div>
                      <p className="heading">{program.title}</p>
                      <p className="para">{program.description}</p>
                    </div>
                  </div>
                </StyledWrapper>
              ))}
            </StyledCardGrid>
          </div>
        </section> */}
        <Card />
      </div>
      <Footer />
    </>
  );
}

const StyledCardGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const StyledWrapper = styled.div`
  .card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2px;
    border-radius: 24px;
    overflow: hidden;
    line-height: 1.6;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 28px;
    border-radius: 22px;
    background: #ffffff;
    color: #000;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .heading {
    font-weight: 700;
    font-size: 20px;
    z-index: 1;
    transition: all 0.48s;
  }

  .para {
    z-index: 1;
    opacity: 0.85;
    font-size: 14px;
    transition: all 0.48s;
  }

  .card::before {
    content: "";
    position: absolute;
    height: 160%;
    width: 160%;
    border-radius: inherit;
    background: linear-gradient(to right, #0a3cff, #0a3cff);
    transform-origin: center;
    animation: moving 4.8s linear infinite paused;
    transition: all 0.88s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card:hover::before {
    animation-play-state: running;
    z-index: -1;
    width: 20%;
  }

  .card:hover {
    box-shadow: 0rem 6px 13px rgba(10, 60, 255, 0.1),
      0rem 24px 24px rgba(10, 60, 255, 0.09),
      0rem 55px 33px rgba(10, 60, 255, 0.05),
      0rem 97px 39px rgba(10, 60, 255, 0.01),
      0rem 152px 43px rgba(10, 60, 255, 0);
    transform: scale(1.05);
  }

  @keyframes moving {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

