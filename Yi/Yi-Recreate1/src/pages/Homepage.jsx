/* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import { useLocation } from 'react-router-dom';
// import Footer from '../components/Footer';
// import Home_StatsCount from './Home_StatsCount';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// export default function LandingPage() {
//   const [showFlashcard, setShowFlashcard] = useState(true);
//   const [showNotification, setShowNotification] = useState(false);
//   const location = useLocation();

//   // Only show flashcard if on homepage
//   const isHomepage = location.pathname === '/';

//   // Handler for closing the flashcard
//   const handleCloseFlashcard = () => {
//     setShowFlashcard(false);
//     setTimeout(() => setShowNotification(true), 500); // Show notification after animation
//   };

//   // Handler for clicking the notification icon
//   const handleNotificationClick = () => {
//     setShowFlashcard(true);
//     setShowNotification(false);
//   };

//   return (
//     <Navbar/>
//     <div className="relative w-full">
//       {/* Hero Section: Video and overlays */}
//       <div className="relative w-full h-screen overflow-hidden">
//         {/* Background Video */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover z-0"
//           src="https://chotacop.in/yi-ai/final.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//         />

//         {/* Overlay (Optional) */}
//         <div className="absolute top-0 left-0 w-full h-full bg-opacity-20 z-10" />

//         {/* Flashcard Popup with Smooth Animation, only on homepage */}
//         {isHomepage && (
//           <AnimatePresence>
//             {showFlashcard && (
//               <div
//                 className="fixed left-0 top-0 w-full h-full z-50 flex items-center justify-center"
//               >
//                 {/* Overlay for closing flashcard */}
//                 <div
//                   className="absolute left-0 top-0 w-full h-full bg-opacity-30 cursor-pointer"
//                   onClick={handleCloseFlashcard}
//                 />
//                 {/* Flashcard content, stop propagation to prevent closing when clicking inside */}
//                 <div
//                   className="relative w-[700px] max-w-full flex flex-col items-center z-10"
//                   onClick={e => e.stopPropagation()}
//                 >
//                   {/* Close Button */}
//                   <button
//                     onClick={handleCloseFlashcard}
//                     className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl font-bold focus:outline-none z-20"
//                     aria-label="Close"
//                   >
//                     &times;
//                   </button>
//                   <img
//                     src="/assets/images/cii_business_summit.png"
//                     alt="CII Business Summit"
//                     className="w-full h-auto mb-2"
//                     style={{ maxHeight: 500 }}
//                   />
//                 </div>
//               </div>
//             )}
//           </AnimatePresence>
//         )}

//         {/* Notification Icon (blinking) */}
//         {showNotification && (
//           <button
//             onClick={handleNotificationClick}
//             className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 bg-white rounded-full shadow-lg p-3 flex items-center justify-center animate-pulse border-2 border-blue-500"
//             style={{ width: 56, height: 56 }}
//             aria-label="Show CII Business Summit"
//           >
//             <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//             </svg>
//           </button>
//         )}
//       </div>

//       {/* Stats Section */}
//       <Home_StatsCount />

//     </div>
//   );
// }


import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home_StatsCount from './Home_StatsCount';

export default function LandingPage() {
  const [showFlashcard, setShowFlashcard] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const location = useLocation();

  // Only show flashcard if on homepage
  const isHomepage = location.pathname === '/';

  // Handler for closing the flashcard
  const handleCloseFlashcard = () => {
    setShowFlashcard(false);
    setTimeout(() => setShowNotification(true), 500); // Show notification after animation
  };

  // Handler for clicking the notification icon
  const handleNotificationClick = () => {
    setShowFlashcard(true);
    setShowNotification(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 relative w-full">
        {/* Hero Section: Video and overlays */}
        <div className="relative w-full h-screen overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="https://chotacop.in/yi-ai/final.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Optional Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-opacity-20 z-10" />

          {/* Flashcard Popup with Smooth Animation */}
          {isHomepage && (
            <AnimatePresence>
              {showFlashcard && (
                <div className="fixed left-0 top-0 w-full h-full z-50 flex items-center justify-center">
                  {/* Overlay for closing flashcard */}
                  <div
                    className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-30 cursor-pointer"
                    onClick={handleCloseFlashcard}
                  />
                  {/* Flashcard content */}
                  <div
                    className="relative w-[700px] max-w-full flex flex-col items-center z-10"
                    onClick={e => e.stopPropagation()}
                  >
                    {/* Close Button */}
                    <button
                      onClick={handleCloseFlashcard}
                      className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl font-bold focus:outline-none z-20"
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <img
                      src="/assets/images/cii_business_summit.png"
                      alt="CII Business Summit"
                      className="w-full h-auto mb-2"
                      style={{ maxHeight: 500 }}
                    />
                  </div>
                </div>
              )}
            </AnimatePresence>
          )}

          {/* Notification Icon (blinking) */}
          {showNotification && (
            <button
              onClick={handleNotificationClick}
              className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 bg-white rounded-full shadow-lg p-3 flex items-center justify-center animate-pulse border-2 border-blue-500"
              style={{ width: 56, height: 56 }}
              aria-label="Show CII Business Summit"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          )}
        </div>

        {/* Stats Section */}
        <Home_StatsCount />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
