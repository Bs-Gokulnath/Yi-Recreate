import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';

import YIlogo  from '/assets/images/Yi.png';
import CIIlogo from '/assets/images/Yi-CII.png';

const navData = [
  { label: 'Home',          path: '/',            items: [] },
  { label: 'About',         path: '/about',       items: ['Young Indians (Structure & Genesis of Yi)', 'Confederation of Indian Industry', 'Chapters Cities', 'Past National Leadership', 'Media'] },
  { label: '2025',          path: '/2025',        items: ['Theme 2025', 'Team (All Chapters)', 'Viksit Bharat Young Leaders Dialogue', 'Newsletters'] },
  { label: 'Stakeholders',  path: '/stakeholders',items: ['Membership', 'YUVA', 'Thalir', 'Rural Initiative'] },
  { label: 'Projects',      path: '/projects',    items: ['Masoom', 'Road Safety', 'Climate Change', 'Health', 'Accessibility'] },
  { label: 'Initiatives',   path: '/initiatives', items: ['Learning', 'Innovation', 'Entrepreneurship'] },
  { label: 'Summits',       path: '/summits',     items: ['Take Pride', 'Masoom Summit', 'Inno Fest', 'YiFi'] },
  { label: 'International', path: '/international',items: ['G20 YEA', 'CAYE (Asia)', 'BIMSTEC', 'International Membership'] },
  { label: 'Contact Us',    path: '/contact',     items: [] },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 px-4 md:px-6 py-3 flex justify-between items-center
             transition-all duration-500 bg-transparent"
    >
      {/* ── Left logo (hidden when scrolled) ──────────────────── */}
      <AnimatePresence>
        {!scrolled && (
          <motion.img
            key="leftLogo"
            src={YIlogo}
            alt="Yi logo"
            className="w-20 md:w-20 h-100 md:h-20 object-contain translate-x-4 md:translate-x-32"
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>

      {/* Center Menu: Desktop and Mobile Toggle */}
<div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[60]">

  {/* Desktop View: Discover Yi Button */}
  <div
    className="hidden md:block"
    onMouseEnter={() => setMenuOpen(true)}
    onMouseLeave={() => {
      setMenuOpen(false);
      setActiveIdx(null);
    }}
  >
    <motion.button
      className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] text-black font-semibold rounded-full shadow-xl px-4 py-2 md:px-6 md:py-2 tracking-wide backdrop-blur-md bg-opacity-80 text-sm md:text-base"
      style={{ overflow: 'hidden' }}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      animate={menuOpen ? { width: 230, height: 50 } : { width: 180, height: 40 }}
      transition={{ duration: 0.3 }}
    >
      Discover&nbsp;Yi
    </motion.button>

    <AnimatePresence>
      {menuOpen && (
        <motion.ul
          className="absolute top-14 left-1/2 -translate-x-1/2 flex flex-col md:flex-row gap-2 md:gap-6 bg-white text-black shadow-xl rounded-md px-4 py-3 md:px-6 md:py-3 z-50 text-sm md:text-base w-[90vw] max-w-[90vw] md:max-w-fit"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          {navData.map((cat, idx) => (
            <li
              key={cat.label}
              className="relative cursor-pointer whitespace-nowrap font-medium"
              onMouseEnter={() => setActiveIdx(idx)}
            >
              <Link
                to={cat.path}
                className={`px-3 py-1 rounded transition-colors ${
                  location.pathname === cat.path
                    ? 'bg-black text-white font-semibold'
                    : 'text-gray-700 hover:bg-gray-200 hover:text-black'
                }`}
              >
                {cat.label}
              </Link>
              <AnimatePresence>
                {activeIdx === idx && cat.items.length > 0 && (
                  <motion.ul
                    className="absolute top-8 left-1/2 -translate-x-1/2 bg-gray-50 text-gray-800 rounded-md shadow-lg flex flex-col min-w-max py-2 w-48 z-50"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {cat.items.map((sub) => (
                      <li key={sub} className="px-4 py-1 hover:bg-gray-200 transition text-sm">
                        {sub}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  </div>

  {/* Mobile View: Hamburger Icon */}
  <div className="block md:hidden">
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="text-black border border-black rounded-md px-3 py-2 shadow-md bg-white"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.ul
          className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md p-4 flex flex-col gap-4 w-[90vw] text-center z-50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {navData.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium ${
                  location.pathname === item.path ? 'text-blue-600' : 'text-black'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  </div>
</div>


      {/* ── Right logo (hidden when scrolled) ─────────────────── */}
      <AnimatePresence>
        {!scrolled && (
          <motion.img
            key="rightLogo"
            src={CIIlogo}
            alt="CII logo"
            className="w-24 md:w-32 h-40 md:h-20 object-contain -translate-x-4 md:-translate-x-32"
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
