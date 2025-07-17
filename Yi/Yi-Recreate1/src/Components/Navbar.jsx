import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import ScrollToTopButton from "./ScrollToTop";

const navData = [
  { label: "Home", path: "/", items: [] },
  {
    label: "About",
    path: "/about",
    items: [
      "Young Indians",
      "Confederation of Indian Industry",
      "Chapters Cities",
      "Past National Leadership",
      "Media",
    ],
  },
  {
    label: "2025",
    path: "/2025",
    items: [
      "Theme 2025",
      "Team (All Chapters)",
      "Viksit Bharat Young Leaders Dialogue",
      "Newsletters",
    ],
  },
  {
    label: "Stakeholders",
    path: "",
    items: [
      { name: "Membership", link: "/membership" },
      { name: "YUVA", link: "/yuva" },
      { name: "Thalir", link: "/thalir" },
      { name: "Rural Initiative", link: "/rural-initiatives" },
    ],
  },
  {
    label: "Projects",
    path: "",
    items: [
      { name: "Masoom", link: "/masoom" },
      { name: "Road Safety", link: "/road-safety" },
      { name: "Climate Change", link: "/climate-change" },
      { name: "Health", link: "/health" },
      { name: "Accessibility", link: "/accessibility" },
    ],
  },
  {
    label: "Initiatives ",
    path: "",
    items: [
      { name: "Learning", link: "/learning" },
      { name: "Innovation", link: "/innovation" },
      { name: "Entrepreneurship", link: "/entrepreneurship" },
    ],
  },
  {
    label: "Summits",
    path: "/summits",
    items: ["Take Pride", "Masoom Summit", "Inno Fest", "YiFi"],
  },
  {
    label: "International",
    path: "/international",
    items: ["G20 YEA", "CAYE (Asia)", "BIMSTEC", "International Membership"],
  },
  { label: "Contact Us", path: "/contact-us", items: [] },
  { label: "Sign In", path: "/signin", items: [] },
];

const Navbar = ({ centerLogo }) => {
  const location = useLocation();
  const [showLogoBar, setShowLogoBar] = useState(true);
  const [showMenuBar, setShowMenuBar] = useState(true);
  const [compactMenu, setCompactMenu] = useState(false);
  const [forceShowFullMenu, setForceShowFullMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const lastScrollY = useRef(window.scrollY);
  const dropdownTimeoutRef = useRef(null);

  const toggleMobileDropdown = (label) => {
    setMobileDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdowns({});
  };

  const getCurrentPageLabel = () => {
    const main = navData.find((nav) => nav.path === location.pathname);
    if (main) return main.label;
    for (const nav of navData) {
      for (const item of nav.items) {
        if (typeof item === "object" && item.link === location.pathname) return item.name;
      }
    }
    return "Page";
  };

  const currentPageLabel = getCurrentPageLabel();

  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY === 0;
      const goingDown = window.scrollY > lastScrollY.current;
      setShowLogoBar(isAtTop);

      if (isAtTop) {
        setCompactMenu(false);
        setShowMenuBar(true);
        setForceShowFullMenu(false);
      } else if (goingDown) {
        setCompactMenu(true);
        setShowMenuBar(false);
        setForceShowFullMenu(false);
      }

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ScrollToTopButton />

      {/* Logo Bar */}
      {showLogoBar && (
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm transition-all duration-300">
          <div className="flex justify-between items-center px-6 py-2">
            <img src="/assets/images/Yi_whitelog.png" className="h-16 hidden md:block" alt="Yi" />
            <img src={centerLogo || "/assets/images/Bharat.png"} className="h-20" alt="Bharat" />
            <img src="/assets/images/CII_blue.png" className="h-16 hidden md:block" alt="CII" />
            <Menu className="block md:hidden w-6 h-6 cursor-pointer" onClick={() => setMobileMenuOpen(true)} />
          </div>
        </div>
      )}

      {/* Compact floating bar */}
      {compactMenu && !showMenuBar && !forceShowFullMenu && (
        <div
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white text-gray-900 font-bold text-sm px-6 py-2 rounded-full shadow-xl border border-gray-200 backdrop-blur-md cursor-pointer animate-glow"
          onClick={() => {
            setMobileMenuOpen(true); 
            setCompactMenu(false);
          }}
        >
          {currentPageLabel}
        </div>
      )}

      {/* Desktop Nav */}
      {(showMenuBar || forceShowFullMenu) && (
        <div className={`fixed left-0 w-full z-40 hidden md:block transition-opacity duration-300 ${showLogoBar ? "top-[100px]" : "top-0"}`}>
          <nav className="bg-white/90 backdrop-blur-md shadow-md px-6 py-3">
            <ul className="flex justify-center gap-6 relative">
              {navData.map((cat) => (
                <li
                  key={cat.label}
                  className="relative cursor-pointer font-medium"
                  onMouseEnter={() => {
                    clearTimeout(dropdownTimeoutRef.current);
                    setOpenDropdown(cat.label);
                  }}
                  onMouseLeave={() => {
                    dropdownTimeoutRef.current = setTimeout(() => {
                      setOpenDropdown(null);
                    }, 200);
                  }}
                >
                  <Link
                    to={cat.path}
                    className={`px-3 py-1 rounded transition-colors ${
                      location.pathname === cat.path ||
                      cat.items.some(
                        (sub) => typeof sub === "object" && sub.link === location.pathname
                      )
                        ? "bg-black text-white font-semibold"
                        : "text-gray-700 hover:bg-gray-200 hover:text-black"
                    }`}
                  >
                    {cat.label}
                  </Link>

                  {cat.items.length > 0 && openDropdown === cat.label && (
                    <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white rounded shadow-lg py-2 w-56 z-50">
                      {cat.items.map((sub) => (
                        <li key={sub.name || sub}>
                          {typeof sub === "string" ? (
                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              {sub}
                            </div>
                          ) : (
                            <Link
                              to={sub.link}
                              className={`block w-full px-4 py-2 text-sm ${
                                location.pathname === sub.link
                                  ? "bg-black text-white font-semibold"
                                  : "text-gray-700 hover:bg-gray-100"
                              }`}
                            >
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
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={closeMobileMenu}>
          <div
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4 flex flex-col overflow-y-auto transform transition-transform duration-300"
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
                    {cat.label === "Stakeholders" ? (
                      <div className="px-3 py-2 rounded hover:bg-gray-200 hover:text-black">
                        {cat.label}
                      </div>
                    ) : (
                      <Link
                        to={cat.path}
                        onClick={closeMobileMenu}
                        className={`px-3 py-2 rounded transition-colors ${
                          location.pathname === cat.path
                            ? "bg-black text-white font-semibold"
                            : "hover:bg-gray-200 hover:text-black"
                        }`}
                      >
                        {cat.label}
                      </Link>
                    )}
                    {cat.items.length > 0 &&
                      (mobileDropdowns[cat.label] ? (
                        <ChevronUp className="w-4 h-4 mr-2" />
                      ) : (
                        <ChevronDown className="w-4 h-4 mr-2" />
                      ))}
                  </div>

                  {cat.items.length > 0 && mobileDropdowns[cat.label] && (
                    <div className="ml-4 mt-1 space-y-1">
                      {cat.items.map((sub) => (
                        <div key={sub.name || sub}>
                          {typeof sub === "string" ? (
                            <div
                              className={`text-sm cursor-pointer px-3 py-1 ${
                                location.pathname.includes(sub.toLowerCase())
                                  ? "bg-black text-white font-semibold"
                                  : "text-gray-600 hover:text-black"
                              }`}
                            >
                              {sub}
                            </div>
                          ) : (
                            <Link
                              to={sub.link}
                              onClick={closeMobileMenu}
                              className={`block text-sm px-3 py-1 ${
                                location.pathname === sub.link
                                  ? "bg-black text-white font-semibold"
                                  : "text-gray-600 hover:text-black"
                              }`}
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
