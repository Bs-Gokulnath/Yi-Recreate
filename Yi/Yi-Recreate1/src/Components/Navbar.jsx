// import React, { useState, useEffect, useRef } from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

// const navData = [
//   { label: 'Home', path: '/', items: [] },
//   { label: 'About', path: '/about', items: ['Young Indians', 'Confederation of Indian Industry', 'Chapters Cities', 'Past National Leadership', 'Media'] },
//   { label: '2025', path: '/2025', items: ['Theme 2025', 'Team (All Chapters)', 'Viksit Bharat Young Leaders Dialogue', 'Newsletters'] },
//   { label: 'Stakeholders', path: '/stakeholders', items: ['Membership', 'YUVA', 'Thalir', 'Rural Initiative'] },
//   { label: 'Projects', path: '/projects', items: ['Masoom', 'Road Safety', 'Climate Change', 'Health', 'Accessibility'] },
//   { label: 'Initiatives', path: '/initiatives', items: ['Learning', 'Innovation', 'Entrepreneurship'] },
//   { label: 'Summits', path: '/summits', items: ['Take Pride', 'Masoom Summit', 'Inno Fest', 'YiFi'] },
//   { label: 'International', path: '/international', items: ['G20 YEA', 'CAYE (Asia)', 'BIMSTEC', 'International Membership'] },
//   { label: 'Contact Us', path: '/contact-us', items: [] },
//   { label: 'Sign In', path: '/signin', items: [] },
// ];

// const Navbar = () => {
//   const location = useLocation();
//   const [menuVisible, setMenuVisible] = useState(true);
//   const [menuKey, setMenuKey] = useState(Date.now());
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileDropdowns, setMobileDropdowns] = useState({});
//   const lastMouseMoveRef = useRef(Date.now());

//   const blackLogoPaths = ['/membership', '/yuva', '/thalir', '/rural-initiatives', '/signin'];
//   const isBlackLogoPage = blackLogoPaths.includes(location.pathname);

//   useEffect(() => {
//     const handleMouseMove = () => {
//       lastMouseMoveRef.current = Date.now();
//       if (!menuVisible) {
//         setMenuVisible(true);
//         setMenuKey(Date.now());
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [menuVisible]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (Date.now() - lastMouseMoveRef.current > 3000 && menuVisible) {
//         setMenuVisible(false);
//         setOpenDropdown(null);
//       }
//     }, 500);
//     return () => clearInterval(interval);
//   }, [menuVisible]);

//   const toggleMobileDropdown = (label) => {
//     setMobileDropdowns((prev) => ({
//       ...prev,
//       [label]: !prev[label],
//     }));
//   };

//   const closeMobileMenu = () => setMobileMenuOpen(false);

//   return (
//     <>
//       {/* Navbar */}
//       <div className="fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-6 z-50 bg-white/80 py-2 shadow-sm">
//         {/* Left Side: Hamburger (Mobile Only) */}
//         <div className="flex-1 flex items-center gap-3">
//           <div className="md:hidden">
//             <Menu className="w-8 h-8 text-black cursor-pointer" onClick={() => setMobileMenuOpen(true)} />
//           </div>
//           {/* Yi Logo (Hidden in Mobile) */}
//           <img
//             src={isBlackLogoPage ? '/assets/images/Yi_black.png' : '/assets/images/Yi_whitelog.png'}
//             alt="Yi logo"
//             className="h-16 w-auto hidden md:block"
//           />
//         </div>

//         {/* Bharat Rising Logo (Always Visible) */}
//         <div className="flex-1 flex justify-center items-center">
//           <img
//             src={isBlackLogoPage ? '/assets/images/Bharat_black.png' : '/assets/images/Bharat.png'}
//             alt="Bharat Rising logo"
//             className="h-20 w-auto"
//           />
//         </div>

//         {/* CII Logo (Hidden in Mobile) */}
//         <div className="flex-1 flex justify-end items-center">
//           <img
//             src={isBlackLogoPage ? '/assets/images/CII_blue.png' : '/assets/images/Yi-CII.png'}
//             alt="CII logo"
//             className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto hidden md:block transition-all duration-300"
//           />
//         </div>
//       </div>

//       {/* Desktop Menu Bar */}
//       <div
//         className={`hidden md:block fixed left-1/2 z-50 transition-transform duration-300 origin-top ${menuVisible ? 'scale-y-100' : 'scale-y-0'}`}
//         style={{ top: '120px', transform: 'translateX(-50%)', pointerEvents: menuVisible ? 'auto' : 'none' }}
//       >
//         <nav className="bg-white/80 rounded shadow-lg px-8 py-3 flex justify-center items-center">
//           <ul className="flex flex-row gap-6 relative">
//             {navData.map((cat) => (
//               <li
//                 key={cat.label}
//                 className="relative cursor-pointer whitespace-nowrap font-medium"
//                 onMouseEnter={() => setOpenDropdown(cat.label)}
//                 onMouseLeave={() => setOpenDropdown(null)}
//               >
//                 <Link
//                   to={cat.path}
//                   className={`px-3 py-1 rounded transition-colors ${
//                     location.pathname === cat.path
//                       ? 'bg-black text-white font-semibold'
//                       : 'text-gray-700 hover:bg-gray-200 hover:text-black'
//                   }`}
//                 >
//                   {cat.label}
//                 </Link>

//                 {cat.items.length > 0 && openDropdown === cat.label && (
//                   <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-1 bg-white rounded shadow-lg py-2 w-56 z-50">
//                     {cat.items.map((sub) => (
//                       <li
//                         key={sub}
//                         className="px-4 py-2 hover:bg-gray-100 text-sm text-gray-700 cursor-pointer"
//                       >
//                         {sub}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>

//       {/* Mobile Menu (Sidebar with Dropdown) */}
//       {mobileMenuOpen && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={closeMobileMenu}>
//           <div
//             className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4 flex flex-col overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex justify-between items-center mb-6">
//               <img
//                 src="/assets/images/Yi_black.png"
//                 alt="Yi logo"
//                 className="h-12 w-auto"
//               />
//               <X className="w-6 h-6 text-black cursor-pointer" onClick={closeMobileMenu} />
//             </div>

//             <nav className="flex flex-col gap-4">
//               {navData.map((cat) => (
//                 <div key={cat.label} className="flex flex-col">
//                   <div
//                     className="flex items-center justify-between cursor-pointer font-bold text-gray-800"
//                     onClick={() => toggleMobileDropdown(cat.label)}
//                   >
//                     <Link
//                       to={cat.path}
//                       onClick={closeMobileMenu}
//                       className={`px-3 py-2 rounded transition-colors ${
//                         location.pathname === cat.path
//                           ? 'bg-black text-white font-semibold'
//                           : 'hover:bg-gray-200 hover:text-black'
//                       }`}
//                     >
//                       {cat.label}
//                     </Link>
//                     {cat.items.length > 0 && (
//                       mobileDropdowns[cat.label] ? (
//                         <ChevronUp className="w-4 h-4 mr-2" />
//                       ) : (
//                         <ChevronDown className="w-4 h-4 mr-2" />
//                       )
//                     )}
//                   </div>

//                   {cat.items.length > 0 && mobileDropdowns[cat.label] && (
//                     <div className="ml-4 mt-1 space-y-1">
//                       {cat.items.map((sub) => (
//                         <div key={sub} className="text-gray-600 text-sm hover:text-black cursor-pointer">
//                           {sub}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </nav>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
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
  { label: 'Projects', path: '/projects', items: ['Masoom', 'Road Safety', 'Climate Change', 'Health', 'Accessibility'] },
  { label: 'Initiatives', path: '/initiatives', items: ['Learning', 'Innovation', 'Entrepreneurship'] },
  { label: 'Summits', path: '/summits', items: ['Take Pride', 'Masoom Summit', 'Inno Fest', 'YiFi'] },
  { label: 'International', path: '/international', items: ['G20 YEA', 'CAYE (Asia)', 'BIMSTEC', 'International Membership'] },
  { label: 'Contact Us', path: '/contact-us', items: [] },
  { label: 'Sign In', path: '/signin', items: [] },
];

const Navbar = () => {
  const location = useLocation();
  const [menuVisible, setMenuVisible] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const lastMouseMoveRef = useRef(Date.now());

  const blackLogoPaths = ['/membership', '/yuva', '/thalir', '/rural-initiatives', '/signin'];
  const isBlackLogoPage = blackLogoPaths.includes(location.pathname);

  useEffect(() => {
    const handleMouseMove = () => {
      lastMouseMoveRef.current = Date.now();
      if (!menuVisible) setMenuVisible(true);
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

  const toggleMobileDropdown = (label) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-6 z-50 bg-white/80 py-2 shadow-sm">
        <div className="flex-1 flex items-center gap-3">
          <div className="md:hidden">
            <Menu className="w-8 h-8 text-black cursor-pointer" onClick={() => setMobileMenuOpen(true)} />
          </div>
          {/* Yi Logo (Hidden in Mobile) */}
          <img
            src={isBlackLogoPage ? '/assets/images/Yi_black.png' : '/assets/images/Yi_whitelog.png'}
            alt="Yi logo"
            className="h-16 w-auto hidden md:block"
          />
        </div>

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
            alt="CII logo"
            className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto hidden md:block transition-all duration-300"
          />
        </div>
      </div>

      {/* Desktop Menu Bar */}
      <div
        className={`hidden md:block fixed left-1/2 z-50 transition-transform duration-300 origin-top ${menuVisible ? 'scale-y-100' : 'scale-y-0'}`}
        style={{ top: '120px', transform: 'translateX(-50%)', pointerEvents: menuVisible ? 'auto' : 'none' }}
      >
        <nav className="bg-white/80 rounded shadow-lg px-8 py-3 flex justify-center items-center">
          <ul className="flex flex-row gap-6 relative">
            {navData.map((cat) => (
              <li
                key={cat.label}
                className="relative cursor-pointer whitespace-nowrap font-medium"
                onMouseEnter={() => setOpenDropdown(cat.label)}
                onMouseLeave={() => setOpenDropdown(null)}
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
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
