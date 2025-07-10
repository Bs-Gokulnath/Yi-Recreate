// Yi Health Page - Themed Layout in Green
"use client";

import AnimatedLogo from "../../components/AnimatedLogo";
import yiHealthLogo from "/assets/images/Yi-Health.png";
import AutoScrollCarousel from "../../Components/AutoScrollCarousel";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StatsCounterSection from "../../components/StatsCounterSection";
import { Users, ShieldCheck, HeartPulse, Activity } from "lucide-react";

export default function HealthPage() {
  const heroImages = [
    "/assets/images/Yi-accessibility-1.png",
    "/assets/images/Leader-Bengaluru.png",
    "/assets/images/Leader-Bhopal.png",
    "/assets/images/cii_business_summit.png",
  ];

  const statsData = [
    {
      id: "blood-units",
      label: "BLOOD UNITS",
      value: "875+",
      numericValue: 875,
      icon: <HeartPulse className="w-5 h-5" />,
      color: "text-green-700",
      bgGradient: "from-pink-500 to-red-500",
    },
    {
      id: "screenings",
      label: "RURAL SCREENINGS",
      value: "3000+",
      numericValue: 3000,
      icon: <Activity className="w-5 h-5" />,
      color: "text-blue-700",
      bgGradient: "from-cyan-500 to-blue-500",
    },
    {
      id: "distance",
      label: "WALKED/CYCLED (KM)",
      value: "5814+",
      numericValue: 5814,
      icon: <ShieldCheck className="w-5 h-5" />,
      color: "text-teal-700",
      bgGradient: "from-teal-500 to-green-500",
    },
    {
      id: "children-educated",
      label: "CHILDREN EDUCATED",
      value: "7000+",
      numericValue: 7000,
      icon: <Users className="w-5 h-5" />,
      color: "text-emerald-700",
      bgGradient: "from-emerald-500 to-green-600",
    },
  ];

  return (
    <>
      <Navbar centerLogo={yiHealthLogo} />
      <div className="relative pt-36 min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <AnimatedLogo logoSrc={yiHealthLogo} />

        {/* Hero Section with Text and Carousel */}
        <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-justify text-gray-800 text-lg">
              <h1 className="text-4xl font-bold text-green-800 text-center md:text-left">
                Yi Health
              </h1>

              <p>
                Can an Indian city aspire to be nominated as the "healthiest
                city" by 2030? As an answer to this question, Yi has launched
                the Health vertical with a defined roadmap to build healthy
                living across all the Yi chapters. The vertical propagates the
                idea of <strong>Fitness First</strong>. The pillars of Yi Health
                Vertical are <strong>Active Living</strong>,{" "}
                <strong>Bridging Health Inequity</strong>, and{" "}
                <strong>Child and Adolescent Health (ABC)</strong>.
              </p>

              <p>
                Yi Health Week 2022 was organised from April 4th to 10th, across
                all the chapters. Leaders signed the Yi Health Pledge in the
                presence of Hussain Rasheed, WHO Regional Advisor.
              </p>

              <p>
                32 Yi Chapters participated collecting 875 units of blood,
                conducting 3000+ rural screenings, walking or cycling 5814
                kilometers, and educating 7000+ children on mental health and
                menstrual hygiene.
              </p>

              <p>
                The Yi Health Identity includes a lotus flower representing the
                journey from darkness to healing. The connected dots symbolize
                bridging stakeholders toward building the healthiest city by
                2030.
              </p>

              <p>
                The Yi DBM conclave in Kolkata centered on mental health with
                Mrs. Neerja Birla of MPower leading discussions.
              </p>

              <p>
                <strong>Gift an Organ:</strong> Yi launched the Donor Premier
                League promoting organ donation, saving 5586+ lives. Raipur led
                in blood collection.
              </p>

              <p>
                <strong>International Yoga Day 2021:</strong> 7,166 Yi members
                participated in yoga sessions led by Yuva and Thalir members.
              </p>
            </div>

            {/* Carousel + Donate Organ Card */}
            <div className="space-y-26">
              {/* Carousel with reduced height */}
              <div className="rounded-xl overflow-hidden shadow-md ring-2 ring-green-100">
                <div className="h-auto max-h-[400px]">
                  <AutoScrollCarousel images={heroImages} />
                </div>
              </div>

              {/* Smaller "Gift an Organ" card */}
             <section className="flex justify-center items-center">
  <div className="bg-yellow-50 rounded-2xl shadow-xl border border-yellow-100 px-6 py-10 w-full max-w-md transition-transform hover:scale-[1.02] hover:shadow-2xl">
    <h2 className="text-2xl font-bold text-yellow-900 mb-4 text-center">
      🎁 Gift an Organ
    </h2>
    <p className="text-gray-700 text-sm mb-6 text-center leading-relaxed">
      Despite scientific advancements, there's still no substitute
      for human organs. Yi's initiative promotes donation and has
      helped save over <strong>5,500 lives</strong>.
    </p>
    <div className="text-center">
      <a
        href="https://giftanorgan.youngindians.net/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-sm py-2.5 px-5 rounded-lg shadow-md transition-all"
      >
        Learn More
      </a>
    </div>
  </div>
</section>

            </div>
          </div>
        </section>

        {/* Reusable Stats Counter Section */}
        <StatsCounterSection
          statsData={statsData}
          theme={{
            bgFrom: "green-50",
            bgVia: "white",
            bgTo: "blue-50",
            primaryGlow: "from-green-400/20 to-emerald-400/20",
            borderColor: "border-green-100/50",
            hoverBorderColor: "group-hover:border-green-200",
            numberHover: "group-hover:text-green-700",
            lineGradient: "from-green-400 to-emerald-400",
          }}
        />

        {/* Videos Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-10">
              Yi Health Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "https://www.youtube.com/embed/jNQXAC9IVRw",
                "https://www.youtube.com/embed/Tnyo_2zVNRc",
                "https://www.youtube.com/embed/2Vv-BfVoq4g",
              ].map((url, index) => (
                <div
                  key={index}
                  className="aspect-video rounded-xl overflow-hidden shadow-md ring-2 ring-green-100 hover:ring-green-300 transition-all"
                >
                  <iframe
                    src={url}
                    title={`Yi Health Video ${index + 1}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
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
