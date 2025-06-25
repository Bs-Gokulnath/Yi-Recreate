import React from "react";
import Theme2025i from "/assets/images/Bharat.png";
import ViksitBharat from "./ViksitBharat";
import Newsletter from "./Newsletter";

const Theme2025 = () => {
  const paragraphText =
    "Bharat Rising is a powerful step forward—a nation on the move, driven by its youth, inspired by innovation, and united in purpose. After building dreams, communities, and initiatives, we now elevate our impact to new heights. Through the pillars of Nation Building, Youth Leadership, and Thought Leadership, we empower changemakers and collaborators to shape a stronger, prouder, and a united Bharat. One theme. One mission. One Bharat Rising.";

  return (
    <>
      <section className="w-full bg-gray-100 py-12 px-4 flex justify-center ">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 translate-y-10">
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 p-8 animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-gray-800 mb-4">
              Theme 2025 – Bharat Rising
            </h2>
            <p className="text-justify text-base md:text-lg text-gray-700 leading-relaxed flex flex-wrap">
              {paragraphText.split("").map((char, index) =>
                char === " " ? (
                  <span key={index}>&nbsp;</span>
                ) : (
                  <span
                    key={index}
                    className="inline-block hover:animate-bounce"
                    style={{ animationDelay: `${index * 20}ms` }}
                  >
                    {char}
                  </span>
                )
              )}
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 h-[300px] md:h-auto flex justify-center items-center border-t md:border-t-0 md:border-l border-gray-200 animate-fade-in-right">
            <img
              src={Theme2025i}
              alt="Theme 2025"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Next Section */}
      <section>
        <ViksitBharat />
      </section>

      <section>
        <Newsletter />
      </section>
    </>
  );
};

export default Theme2025;
