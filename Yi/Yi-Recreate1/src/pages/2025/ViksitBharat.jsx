import React, { useState } from "react";
import img1 from "/assets/images/Leader-Bhopal.png";
import img2 from "/assets/images/Leader-Bengaluru.png";

const descriptions = [
  {
    title: "Bhopal",
    text: "Young Indians in support of Ministry of Youth Affairs, Govt of India organized the Viksit Bharat Young Leaders Dialogue roundtable on 24th February 2025 at Indira Gandhi Rastriya Manav Sanghralaya, Bhopal, Madhya Pradesh as the part of the Invest Madhya Pradesh – Global Investors Summit. The sector theme of VBYLD roundtable was 'Empowering Women and Improving Social Indicators' which focused on identifying challenges and opportunities unique to the sector and encouraged innovative ideas and actionable strategies for growth. The roundtable was addressed by Shri Vishwas Kailash Sarang, Hon’ble Minister of Sports and Youth Welfare, Government of Madhya Pradesh, alongside esteemed panelists including Ms. Nidhi Agarwal, Dr. Priya Bhave Chittawar, and Major Aniket Chaturvedi."
  },
  {
    title: "Bengaluru",
    text: "Yi Bengaluru in collaboration with the Ministry of Youth Affairs hosted a Roundtable Discussion on ‘Tech for Viksit Bharat’ on March 19, 2025. The session brought together industry leaders and young professionals to discuss technology's role in India’s development. Eminent speakers like Mr. Yeshwanth Raj Parasmal, Ms. Jyothi Kasinath, Ms. Nithyashree Sathyanarayanan, and Mr. Vikram Balakrishna shared insights on innovation, AI, and digital transformation. The event reinforced the importance of industry-academia-government collaboration for a sustainable tech-driven ecosystem."
  }
];

const ViksitBharat = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Viksit Bharat Young Leaders Dialogue
      </h2>

      {/* Image cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {[img1, img2].map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer hover:scale-[1.02] transition duration-300"
          >
            <img src={img} alt={`Leader ${index + 1}`} className="w-full h-64 object-cover" />
            
            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-transparent">
  <span className="bg-transparent bg-opacity-80 text-black font-semibold text-lg px-4 py-2 rounded">
    Know More
  </span>
</div>


            {/* Title */}
            <h3 className="text-lg font-semibold text-center p-4 text-gray-800 bg-gray-100">
              {descriptions[index].title.split("Dialogue")[0]}
              <span className="text-sm text-gray-600">{descriptions[index].title.split("Dialogue")[1]}</span>
            </h3>
          </div>
        ))}
      </div>

      {/* Description */}
      {selectedIndex !== null && (
        <div className="mt-10 max-w-5xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">
            {descriptions[selectedIndex].title}
          </h3>
          <p className="text-gray-700 text-justify leading-relaxed">
            {descriptions[selectedIndex].text}
          </p>
        </div>
      )}
    </section>
  );
};

export default ViksitBharat;
