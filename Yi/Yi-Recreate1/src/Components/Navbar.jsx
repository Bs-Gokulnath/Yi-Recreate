<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';

import YIlogo from '/assets/images/Yi.png';
import CIIlogo from '/assets/images/Yi-CII.png';

const navData = [
  { label: 'Home', path: '/', items: [] },
  {
    label: 'About',
    path: '/about',
    items: ['Young Indians (Structure & Genesis of Yi)', 'Confederation of Indian Industry', 'Chapters Cities', 'Past National Leadership', 'Media'],
  },
  {
    label: '2025',
    path: '/2025',
    items: ['Theme 2025', 'Team (All Chapters)', 'Viksit Bharat Young Leaders Dialogue', 'Newsletters'],
  },
  {
    label: 'Stakeholders',
    path: '/stakeholders',
    items: ['Membership', 'YUVA', 'Thalir', 'Rural Initiative'],
  },
  {
    label: 'Projects',
    path: '/projects',
    items: [
      { label: 'Masoom', path: '/projects/masoom' },
      { label: 'Road Safety', path: '/projects/road-safety' },
      { label: 'Climate Change', path: '/projects/climate-change' },
      { label: 'Health', path: '/projects/health' },
      { label: 'Accessibility', path: '/projects/accessibility' },
    ],
  },
  {
    label: 'Initiatives',
    path: '/initiatives',
    items: ['Learning', 'Innovation', 'Entrepreneurship'],
  },
  {
    label: 'Summits',
    path: '/summits',
    items: ['Take Pride', 'Masoom Summit', 'Inno Fest', 'YiFi'],
  },
  {
    label: 'International',
    path: '/international',
    items: ['G20 YEA', 'CAYE (Asia)', 'BIMSTEC', 'International Membership'],
  },
  { label: 'Contact Us', path: '/contact', items: [] },
=======
import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const navData = [
  { label: 'Home', path: '/', items: [] },
  { label: 'About', path: '/about', items: ['Young Indians', 'Confederation of Indian Industry', 'Chapters Cities', 'Past National Leadership', 'Media'] },
  { label: '2025', path: '/2025', items: ['Theme 2025', 'Team (All Chapters)', 'Viksit Bharat Young Leaders Dialogue', 'Newsletters'] },
  {
    label: 'Stakeholders',
    path: '', // No navigation path
    items: [
      { name: 'Membership', link: '/membership' },
      { name: 'YUVA', link: '/yuva' },
      { name: 'Thalir', link: '/thalir' },
      { name: 'Rural Initiative', link: '/rural-initiatives' }
    ]
  },
  {
    label: 'Projects',
    path: '', // No navigation path
    items: [
      { name: 'Masoom', link: '/masoom' },
      { name: 'Road Safety', link: '/road-safety' },
      { name: 'Climate Change', link: '/climate-change' },
      { name: 'Health', link: '/health' },
      { name: 'Accessibility', link: '/accessibility' },
    ]
  },
  {
    label: 'Initiatives',
    path: '', // No navigation path
    items: [
      { name: 'Learning', link: '/learning' },
      { name: 'Innovation', link: '/innovation' },
      { name: 'Entrepreneurship', link: '/entrepreneurship' }
    ]
  },
  { label: 'Summits', path: '/summits', items: ['Take Pride', 'Masoom Summit', 'Inno Fest', 'YiFi'] },
  { label: 'International', path: '/international', items: ['G20 YEA', 'CAYE (Asia)', 'BIMSTEC', 'International Membership'] },
  { label: 'Contact Us', path: '/contact-us', items: [] },
  { label: 'Sign In', path: '/signin', items: [] },
>>>>>>> 3d06dd6343337a67dadd59652ee8f6cdcfb81c91
];

const bgClassMap = {
  '/masoom': 'bg-gradient-to-br from-blue-100 via-white to-blue-50',
  '/road-safety': 'bg-gradient-to-br from-yellow-50 via-white to-yellow-100',
  '/climate-change': 'bg-gradient-to-r from-green-500 via-cyan-400 to-blue-500',
  '/health': 'bg-gradient-to-br from-green-50 via-white to-blue-50',
  '/accessibility': 'bg-gradient-to-br from-orange-50 via-green-50 to-white',
  '/learning': 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
  '/innovation': 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
  '/entrepreneurship': 'bg-gradient-to-br from-white via-gray-50 to-gray-100',
};
const defaultBgClass = 'bg-white/80';

const Navbar = () => {
  const location = useLocation();
<<<<<<< HEAD
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cursorTimeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = () => {
      setMenuOpen(true);
      if (cursorTimeoutRef.current) clearTimeout(cursorTimeoutRef.current);
      cursorTimeoutRef.current = setTimeout(() => {
        setMenuOpen(false);
        setActiveIdx(null);
      }, 800);
=======
  const [menuVisible, setMenuVisible] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const lastMouseMoveRef = useRef(Date.now());
  const [showLogoBar, setShowLogoBar] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  const blackLogoPaths = ['/membership', '/yuva', '/thalir', '/rural-initiatives', '/signin'];
  const isBlackLogoPage = blackLogoPaths.includes(location.pathname);

  const logoBarBgClass = bgClassMap[location.pathname] || defaultBgClass;

  useEffect(() => {
    const handleMouseMove = () => {
      lastMouseMoveRef.current = Date.now();
      if (!menuVisible) setMenuVisible(true);
>>>>>>> 3d06dd6343337a67dadd59652ee8f6cdcfb81c91
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [menuVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMouseMoveRef.current > 3000 && menuVisible) {
        setMenuVisible(false);
        setOpenDropdown(null);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [menuVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 40) {
        setShowLogoBar(false); // Scrolling down
      } else {
        setShowLogoBar(true); // Scrolling up
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (label) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
<<<<<<< HEAD
      <AnimatePresence>
        {!scrolled && (
          <motion.img
            key="leftLogo"
            src={YIlogo}
=======
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0  w-full flex items-center justify-between px-4 md:px-6 z-50 py-2 shadow-sm transition-transform duration-500 ${logoBarBgClass} ${showLogoBar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="flex-1 flex items-center gap-3">
          <div className="md:hidden">
            <Menu className="w-8 h-8 text-black cursor-pointer" onClick={() => setMobileMenuOpen(true)} />
          </div>
          {/* Yi Logo (Hidden in Mobile) */}
          <img
            src={isBlackLogoPage ? '/assets/images/Yi_black.png' : '/assets/images/Yi_whitelog.png'}
>>>>>>> 3d06dd6343337a67dadd59652ee8f6cdcfb81c91
            alt="Yi logo"
            className="h-16 w-auto hidden md:block"
          />
        </div>

<<<<<<< HEAD
      <AnimatePresence>
        {!scrolled && (
          <motion.img
            key="rightLogo"
            src={CIIlogo}
=======
        {/* Bharat Rising Logo (Always Visible) */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={isBlackLogoPage ? '/assets/images/Bharat_black.png' : '/assets/images/Bharat.png'}
            alt="Bharat Rising logo"
            className="h-20 w-auto"
          />
        </div>

        {/* CII Logo (Hidden in Mobile) */}
        <div className="flex-1 flex justify-end items-center">
          <img
            src={isBlackLogoPage ? '/assets/images/CII_blue.png' : '/assets/images/CII_blue.png'}
>>>>>>> 3d06dd6343337a67dadd59652ee8f6cdcfb81c91
            alt="CII logo"
            className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto hidden md:block transition-all duration-300"
          />
        </div>
      </div>

<<<<<<< HEAD
      <nav className="fixed top-0 w-full z-50" style={{ background: 'transparent', pointerEvents: 'none' }}>
        <div className="flex justify-center items-center w-full h-full" style={{ height: '100px' }}>
          <AnimatePresence>
            {menuOpen && (
              <motion.ul
                className="flex flex-col md:flex-row gap-2 md:gap-6 bg-white bg-opacity-80 text-black shadow-xl rounded-md px-4 py-3 md:px-6 md:py-3 z-50 text-sm md:text-base w-[90vw] max-w-[90vw] md:max-w-fit"
                style={{ pointerEvents: 'auto' }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
=======
      {/* Desktop Menu Bar */}
      <div
        className={`hidden md:block fixed left-1/2 z-50 transition-transform duration-300 origin-top ${menuVisible ? 'scale-y-100' : 'scale-y-0'}`}
        style={{ top: '100px', transform: 'translateX(-50%)', pointerEvents: menuVisible ? 'auto' : 'none' }}
      >
        <nav className="bg-white/80 rounded shadow-lg px-8 py-2 flex justify-center items-center">
          <ul className="flex flex-row gap-6 relative">
            {navData.map((cat) => (
              <li
                key={cat.label}
                className="relative cursor-pointer whitespace-nowrap font-medium"
                onMouseEnter={() => setOpenDropdown(cat.label)}
                onMouseLeave={() => setOpenDropdown(null)}
>>>>>>> 3d06dd6343337a67dadd59652ee8f6cdcfb81c91
              >
                {cat.label === 'Stakeholders' ? (
                  // Dropdown Only, No Navigation
                  <div className="px-3 py-1 rounded cursor-pointer text-gray-700 hover:bg-gray-200 hover:text-black">
                    {cat.label}
                  </div>
                ) : (
                  <Link
                    to={cat.path}
                    className={`px-3 py-1 rounded transition-colors ${
                      location.pathname === cat.path
                        ? 'bg-black text-white font-semibold'
                        : 'text-gray-700 hover:bg-gray-200 hover:text-black'
                    }`}
                  >
<<<<<<< HEAD
                    <Link
                      to={cat.path}
                      className={`px-3 py-1 rounded transition-colors ${
                        location.pathname === cat.path
                          ? 'bg-black text-white font-semibold'
                          : 'text-gray-700 hover:bg-gray-200 hover:text-black'
                      }`}
                      style={{ pointerEvents: 'auto' }}
                    >
                      {cat.label}
                    </Link>

                    <AnimatePresence>
                      {activeIdx === idx && cat.items.length > 0 && (
                        <motion.ul
                          className="absolute top-8 left-1/2 -translate-x-1/2 bg-gray-50 text-gray-800 rounded-md shadow-lg flex flex-col min-w-max py-2 w-48 z-50"
                          style={{ pointerEvents: 'auto' }}
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                        >
                          {cat.label === 'Projects'
                            ? cat.items.map((sub) => (
                                <li key={sub.label} className="px-4 py-1 hover:bg-gray-200 transition text-sm">
                                  <Link to={sub.path}>{sub.label}</Link>
                                </li>
                              ))
                            : cat.items.map((sub) => (
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

          {/* Mobile View: Hamburger */}
          <div className="block md:hidden" style={{ pointerEvents: 'auto' }}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black border border-black rounded-md px-3 py-2 shadow-md bg-white bg-opacity-80"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
=======
                    {cat.label}
                  </Link>
                )}

                {cat.items.length > 0 && openDropdown === cat.label && (
                  <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-1 bg-white rounded shadow-lg py-2 w-56 z-50">
                    {cat.items.map((sub) => (
                      <li key={sub.name || sub} className="px-4 py-2 hover:bg-gray-100 text-sm text-gray-700 cursor-pointer">
                        {typeof sub === 'string' ? (
                          sub
                        ) : (
                          <Link to={sub.link} className="block w-full h-full">
                            {sub.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={closeMobileMenu}>
          <div
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4 flex flex-col overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <img src="/assets/images/Yi_black.png" alt="Yi logo" className="h-12 w-auto" />
              <X className="w-6 h-6 text-black cursor-pointer" onClick={closeMobileMenu} />
            </div>

            <nav className="flex flex-col gap-4">
              {navData.map((cat) => (
                <div key={cat.label} className="flex flex-col">
                  <div
                    className="flex items-center justify-between cursor-pointer font-bold text-gray-800"
                    onClick={() => toggleMobileDropdown(cat.label)}
                  >
                    {cat.label === 'Stakeholders' ? (
                      <div className="px-3 py-2 rounded hover:bg-gray-200 hover:text-black">
                        {cat.label}
                      </div>
                    ) : (
                      <Link
                        to={cat.path}
                        onClick={closeMobileMenu}
                        className={`px-3 py-2 rounded transition-colors ${
                          location.pathname === cat.path
                            ? 'bg-black text-white font-semibold'
                            : 'hover:bg-gray-200 hover:text-black'
                        }`}
                      >
                        {cat.label}
                      </Link>
                    )}
                    {cat.items.length > 0 && (
                      mobileDropdowns[cat.label] ? (
                        <ChevronUp className="w-4 h-4 mr-2" />
                      ) : (
                        <ChevronDown className="w-4 h-4 mr-2" />
                      )
                    )}
                  </div>

                  {cat.items.length > 0 && mobileDropdowns[cat.label] && (
                    <div className="ml-4 mt-1 space-y-1">
                      {cat.items.map((sub) => (
                        <div key={sub.name || sub}>
                          {typeof sub === 'string' ? (
                            <div className="text-gray-600 text-sm hover:text-black cursor-pointer">{sub}</div>
                          ) : (
                            <Link
                              to={sub.link}
                              className="block text-gray-600 text-sm hover:text-black cursor-pointer"
                              onClick={closeMobileMenu}
                            >
                              {sub.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
>>>>>>> 3d06dd6343337a67dadd59652ee8f6cdcfb81c91
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
