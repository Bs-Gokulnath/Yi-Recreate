import React, { useState } from "react";

const newsletters = {
  2025: [
    {
      title: "Yi Newsletter March 2025",
      image: "/assets/images/NewsLetter2025.png",
      pdf: "assets/PDF/2025/CHRONICLES-MAR-2025.pdf",
    },
    {
      title: "Yi Newsletter February 2025",
      image: "/assets/images/NewsLetter2025.png",
      pdf: "assets/PDF/2025/Yi-CHRONICLES-FEBRUARY.pdf",
    },
    {
      title: "Yi Newsletter January 2025",
      image: "/assets/images/NewsLetter2025.png",
      pdf: "/assets/PDF/2025/Yi-CHRONICLES-JANUARY.pdf",
    },
  ],
  2024: [
    {
      title: "Yi Newsletter June 2024",
      image: "/assets/images/NewsLetter2024.png",
      pdf: "/assets/PDF/2024/Yi_NewsletterMay_SP_14June24-1.pdf",
    },
    {
      title: "Yi Newsletter May 2024",
      image: "/assets/images/NewsLetter2024.png",
      pdf: "/assets/PDF/2024/Yi_NewsletterMay_SP_14June24.pdf",
    },
    {
      title: "Yi Newsletter April 2024",
      image: "/assets/images/NewsLetter2024.png",
      pdf: "/assets/PDF/2024/Yi_NewsletterApril_SP_10May24.pdf",
    },
    {
      title: "Yi Newsletter March 2024",
      image: "/assets/images/NewsLetter2024.png",
      pdf: "/assets/PDF/2024/Yi_NewsletterMarch_SP_10May24.pdf",
    },
    {
      title: "Yi Newsletter February 2024",
      image: "/assets/images/NewsLetter2024.png",
      pdf: "/assets/PDF/2024/Yi_Newsletter_Feb-24-.pdf",
    },
    {
      title: "Yi Newsletter January 2024",
      image: "/assets/images/NewsLetter2024.png",
      pdf: "/assets/PDF/2024/Yi_Newsletter_January_2024.pdf",
    },
  ],
};

const NewsletterSection = () => {
  const [selectedYear, setSelectedYear] = useState("2025");

  return (
    <section className="bg-[#fefefc] py-14 px-4 md:px-10 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-14 uppercase tracking-wide border-b pb-2 border-gray-300">
          Newsletters
        </h2>

        {/* Year Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          {Object.keys(newsletters).map((year) => {
            const isSelected = selectedYear === year;
            return (
              <div
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`cursor-pointer border rounded-xl text-center font-bold text-2xl px-10 py-6 shadow-md transition-all duration-500 ease-in-out 
                  ${
                    isSelected
                      ? "bg-white scale-100 opacity-100"
                      : "bg-gray-100 scale-90 opacity-50 hover:opacity-80 hover:scale-95"
                  }`}
              >
                {year}
              </div>
            );
          })}
        </div>

        {/* Grid of Newsletters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {newsletters[selectedYear].map((item, index) => (
            <a
              key={index}
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border border-gray-300 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover group-hover:brightness-90"
              />
              <div className="p-6 h-32 flex items-center justify-center">
                <h4 className="text-lg font-semibold text-center text-gray-800 group-hover:text-blue-700 transition">
                  {item.title}
                </h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
