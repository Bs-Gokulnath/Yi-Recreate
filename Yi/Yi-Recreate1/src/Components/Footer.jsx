import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import yiLogo from '/assets/images/Yi.png';

const navLinkClass =
  'block font-semibold text-lg mb-2 transition-colors duration-200 hover:text-orange-500';
const activeClass = 'text-orange-500';

const Footer = () => {
  return (
    <footer className="bg-white text-black px-10 py-8 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* ───── Navigation Columns ───── */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <NavLink to="/" className={({ isActive }) => `${navLinkClass} ${isActive ? activeClass : ''}`}>Home</NavLink>
            <NavLink to="/accessibility" className={navLinkClass}>Accessibility</NavLink>
            <NavLink to="/climate-change" className={navLinkClass}>Climate Change</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact us</NavLink>
            <NavLink to="/entrepreneurship" className={navLinkClass}>Entrepreneurship</NavLink>
            <NavLink to="/genesis" className={navLinkClass}>Genesis of Yi</NavLink>
          </div>
          <div className="space-y-2">
            <NavLink to="/organization-structure" className={navLinkClass}>Organization Structure</NavLink>
            <NavLink to="/innovation" className={navLinkClass}>Innovation</NavLink>
            <NavLink to="/international-membership" className={navLinkClass}>International Membership</NavLink>
            <NavLink to="/masoom" className={navLinkClass}>Masoom</NavLink>
            <NavLink to="/media" className={navLinkClass}>Media</NavLink>
            <NavLink to="/members" className={navLinkClass}>Members</NavLink>
          </div>
          <div className="space-y-2">
            <NavLink to="/our-team" className={navLinkClass}>Our Team</NavLink>
            <NavLink to="/past-leadership" className={navLinkClass}>Past National Leadership</NavLink>
            <NavLink to="/photo-gallery" className={navLinkClass}>Photo Gallery</NavLink>
            <NavLink to="/road-safety" className={navLinkClass}>Road Safety</NavLink>
            <NavLink to="/rural-initiatives" className={navLinkClass}>Rural Initiatives</NavLink>
            <NavLink to="/together-tribe" className={navLinkClass}>TogetHer Tribe</NavLink>
          </div>
        </div>
        {/* ───── Logo and Socials ───── */}
        <div className="flex flex-col items-center md:items-end md:w-1/4">
          <img src={yiLogo} alt="Yi Logo" className="w-40 object-contain mb-2" />
          <div className="flex gap-4 text-2xl mt-4 md:mt-8">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      {/* ───── Bottom Row ───── */}
      <div className="max-w-screen-xl mx-auto mt-8 border-t border-gray-300 pt-4 flex flex-col md:flex-row md:justify-start md:items-center text-sm">
        <div className="flex gap-4 font-semibold mb-2 md:mb-0">
          <a href="#" className="hover:underline">PRIVACY POLICY</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:underline">DISCLAIMER</a>
        </div>
        <p className="text-gray-600 md:ml-8">Copyright 2024 Young Indians. All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
