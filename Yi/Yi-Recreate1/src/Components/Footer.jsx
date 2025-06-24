import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import yiLogo from '/assets/images/Yi.png'; // update with your actual logo path

const Footer = () => {
  return (
    <footer className="bg-white text-black px-10 py-8 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* ───── Navigation Columns ───── */}
        <div className="space-y-2">
          <p>Home</p>
          <p>Accessibility</p>
          <p>Climate Change</p>
          <p>Contact us</p>
          <p>Entrepreneurship</p>
          <p>Genesis of Yi</p>
        </div>

        <div className="space-y-2">
          <p>Organization Structure</p>
          <p>Innovation</p>
          <p>International Membership</p>
          <p>Masoom</p>
          <p>Media</p>
          <p>Members</p>
        </div>

        <div className="space-y-2">
          <p>Our Team</p>
          <p className="text-[#3a1e09] font-medium">Past National Leadership</p>
          <p>Photo Gallery</p>
          <p>Road Safety</p>
          <p>Rural Initiatives</p>
          <p>TogetHer Tribe</p>
        </div>

        {/* ───── Logo ───── */}
        <div className="flex flex-col justify-between items-end">
          <img src={yiLogo} alt="Yi Logo" className="w-28 object-contain mb-4" />
          <div className="flex gap-4 text-xl">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      {/* ───── Bottom Row ───── */}
      <div className="mt-8 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex gap-4 font-semibold">
          <a href="#" className="hover:underline">PRIVACY POLICY</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:underline">DISCLAIMER</a>
        </div>
        <p className="text-gray-600 mt-2 md:mt-0">Copyright 2024 Young Indians. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
