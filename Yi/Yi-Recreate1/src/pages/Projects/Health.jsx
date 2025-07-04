"use client";

import AnimatedLogo from "../../components/AnimatedLogo";
import { Users, ShieldCheck, HeartPulse, Activity } from "lucide-react";
import yiHealthLogo from "/assets/images/Yi-Health.png";
import AutoScrollCarousel from "../../Components/AutoScrollCarousel"; // You should have this reusable carousel

export default function HealthPage() {
  const heroImages = [
   "/assets/images/Yi-accessibility-1.png",
    "/assets/images/Yi-accessibility-2.png",
    "/assets/images/Yi-accessibility-3.png",
    "/assets/images/Yi-accessibility-4.png",
  ];

  return (
    
    <div className="relative">
        <AnimatedLogo logoSrc={yiHealthLogo} />
      {/* Hero Section with Text and Carousel */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="flex justify-center mb-10">
          <img src={yiHealthLogo} alt="Yi Health Logo" className="w-40 h-auto" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Justified Text */}
          <div className="space-y-6 text-justify text-gray-800 text-lg">
            <h1 className="text-4xl font-bold text-green-800 text-center md:text-left">Yi Health</h1>

            <p>
              Can an Indian city aspire to be nominated as the "healthiest city" by 2030? As an answer to this
              question, Yi has launched the Health vertical with a defined roadmap to build healthy living across
              all the Yi chapters. The vertical propagates the idea of <strong>Fitness First</strong>. The pillars
              of Yi Health Vertical are <strong>Active Living</strong>, <strong>Bridging Health Inequity</strong>,
              and <strong>Child and Adolescent Health (ABC)</strong>.
            </p>

            <p>
              Yi Health Week 2022 was organised from April 4th to 10th, across all the chapters. Leaders signed the
              Yi Health Pledge in the presence of Hussain Rasheed, WHO Regional Advisor.
            </p>

            <p>
              32 Yi Chapters participated collecting 875 units of blood, conducting 3000+ rural screenings, walking
              or cycling 5814 kilometers, and educating 7000+ children on mental health and menstrual hygiene.
            </p>

            <p>
              The Yi Health Identity includes a lotus flower representing the journey from darkness to healing. The
              connected dots symbolize bridging stakeholders toward building the healthiest city by 2030.
            </p>

            <p>
              The Yi DBM conclave in Kolkata centered on mental health with Mrs. Neerja Birla of MPower leading
              discussions.
            </p>

            <p>
              <strong>Gift an Organ:</strong> Yi launched the Donor Premier League promoting organ donation, saving
              5586+ lives. Raipur led in blood collection.
            </p>

            <p>
              <strong>International Yoga Day 2021:</strong> 7,166 Yi members participated in yoga sessions led by
              Yuva and Thalir members.
            </p>
          </div>

          {/* Right-side Carousel */}
          <div className="hidden md:block">
            <AutoScrollCarousel images={heroImages} />
            <section className="py-16 bg-yellow-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-yellow-900 mb-4">Gift an Organ</h2>
    <p className="text-lg text-gray-800 max-w-3xl mx-auto mb-8">
      Despite scientific advancements, there's still no substitute for human organs. 
      Yi’s "Gift an Organ" initiative promotes organ donation to save countless lives. 
      Through this program, Yi has launched the Donor Premier League and helped save over 5,500 lives.
    </p>
    <a
      href="https://giftanorgan.youngindians.net/"
      className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-xl shadow transition-all duration-300"
    >
      Learn More
    </a>
  </div>
</section>

          </div>
        </div>
      </section>

      {/* Stats Section (unchanged) */}
      <section className="bg-green-100 py-12 text-center">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-4xl font-bold text-green-800">875+</h2>
            <p className="text-gray-700">Blood Units Collected</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-green-800">3k+</h2>
            <p className="text-gray-700">Rural Screenings</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-green-800">5.8k km</h2>
            <p className="text-gray-700">Walked/Cycled</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-green-800">7k+</h2>
            <p className="text-gray-700">Kids Educated</p>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-10">Yi Health Highlights</h2>
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
  );
}
