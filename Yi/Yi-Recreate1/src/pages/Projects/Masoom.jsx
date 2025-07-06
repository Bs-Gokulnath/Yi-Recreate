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
import Card from "./Card";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-36">
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
      <Footer />
    </>
  );
}
