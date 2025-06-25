// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function LandingPage() {
//   const [showFlashcard, setShowFlashcard] = useState(true);
//   const [showNotification, setShowNotification] = useState(false);

//   const handleCloseFlashcard = () => {
//     setShowFlashcard(false);
//     setTimeout(() => setShowNotification(true), 500); // Show notification after animation
//   };

//   const handleNotificationClick = () => {
//     setShowFlashcard(true);
//     setShowNotification(false);
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full object-cover z-0"
//         src="/assets/videos/landing_page.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Overlay (Optional) */}
//       <div className="absolute top-0 left-0 w-full h-full bg-opacity-20 z-10" />

//       {/* Flashcard Popup with Smooth Animation */}
//       <AnimatePresence>
//         {showFlashcard && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.5, ease: 'easeInOut' }}
//             className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[700px]"
//           >
//             <div className="bg-white rounded-lg shadow-2xl p-6 relative flex flex-col items-center overflow-hidden">
//               {/* Close Button */}
//               <button
//                 onClick={handleCloseFlashcard}
//                 className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl font-bold focus:outline-none z-20"
//                 aria-label="Close"
//               >
//                 &times;
//               </button>

//               {/* Image Display */}
//               <img
//                 src="/assets/images/cii_business_summit.png"
//                 alt="CII Business Summit"
//                 className="w-full h-auto rounded mb-2"
//                 style={{ maxHeight: 500 }}
//               />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Notification Icon (blinking) */}
//       {showNotification && (
//         <button
//           onClick={handleNotificationClick}
//           className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 bg-white rounded-full shadow-lg p-3 flex items-center justify-center animate-pulse border-2 border-blue-500"
//           style={{ width: 56, height: 56 }}
//           aria-label="Show CII Business Summit"
//         >
//           <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//           </svg>
//         </button>
//       )}

//       {/* Foreground Content */}
//       <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
//         <h1 className="text-5xl font-bold mb-4" style={{ color: '#FF9933' }}>DEVELOPMENT OF THE</h1>
//         <h1 className="text-5xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
//           YOUTH <span style={{ color: '#054187' }}>&</span> NATION
//         </h1>
//         <h1 className="text-5xl font-bold mb-4" style={{ color: '#138808' }}>BY THE YOUTH</h1>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LandingPage() {
  const [showFlashcard, setShowFlashcard] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  const handleCloseFlashcard = () => {
    setShowFlashcard(false);
    setTimeout(() => setShowNotification(true), 500); // Show notification after animation
  };

  const handleNotificationClick = () => {
    setShowFlashcard(true);
    setShowNotification(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full object-cover z-0"
        src="/assets/videos/landing_page.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay (Optional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-20 z-10" />

      {/* Flashcard Popup with Smooth Animation */}
      <AnimatePresence>
        {showFlashcard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[700px]"
          >
            <div className="p-0 relative flex flex-col items-center overflow-hidden bg-transparent shadow-none">
              {/* Close Button */}
              <button
                onClick={handleCloseFlashcard}
                className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl font-bold focus:outline-none z-20"
                aria-label="Close"
              >
                &times;
              </button>

              {/* Image Display */}
              <img
                src="/assets/images/cii_business_summit.png"
                alt="CII Business Summit"
                className="w-full h-auto mb-2"
                style={{ maxHeight: 500 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-5xl font-bold mb-4" style={{ color: '#FF9933' }}>DEVELOPMENT OF THE</h1>
        <h1 className="text-5xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
          YOUTH <span style={{ color: '#054187' }}>&</span> NATION
        </h1>
        <h1 className="text-5xl font-bold mb-4" style={{ color: '#138808' }}>BY THE YOUTH</h1>
      </div>
    </div>
  );
}
