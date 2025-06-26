import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import ThoughtLeadershipComponent from './ThoughtLeadershipComponent';
import AboutSection from './AboutSection';
import Sec from './Sec';
import MapSection from './MapSection';
import MembershipSection from './MemberShipSection';
import VideoSection from './VideoSection';
import RegistrationPage from './RegistrationPage';
import ReadMorePage from './ReadMorePage'; 

const App = () => {
  const [showPillars, setShowPillars] = useState(false);
  const pillarsRef = useRef(null);

  const handleExploreClick = () => {
    setShowPillars(true);
    setTimeout(() => {
      if (pillarsRef.current) {
        pillarsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <Router>
      <Routes>
        {/* Registration Page Route */}
        <Route path="/register" element={<RegistrationPage />} />

        {/* Read More Page Route */}
        <Route path="/readmore" element={<ReadMorePage />} />

        {/* Main Page Route */}
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <StatsSection />
              <HeroSection onExploreClick={handleExploreClick} />
              <div ref={pillarsRef}>
                <ThoughtLeadershipComponent />
              </div>
              <Sec />
              <AboutSection />
              <div className="min-h-screen bg-slate-900 flex items-center justify-center p-8">
                <VideoSection />
              </div>
              <MembershipSection />
              <MapSection />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
