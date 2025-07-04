import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import CustomCursor from './components/CustomCursor';
import LandingPage from './pages/Homepage';
import Theme2025 from './pages/2025/Theme2025';
import Initiatives from './pages/Initiatives/Initiatives';
import Masoom from './pages/Projects/Masoom';
import Projects from './pages/Projects/Projects';
import Accessibility from './pages/Projects/AccessibilityPage';
import RoadSafetyPage from './pages/Projects/RoadSafety';
import HealthPage from './pages/Projects/Health';
import ClimateChangePage from "./pages/Projects/ClimateChange";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <CustomCursor />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/theme-2025" element={<Theme2025 />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/masoom" element={<Masoom />} />
          <Route path="/projects/accessibility" element={<Accessibility />} />
          <Route path="/projects/road-safety" element={<RoadSafetyPage />} />
          <Route path="/projects/health" element={<HealthPage />} />
          <Route
            path="/projects/climate-change"
            element={<ClimateChangePage />}
          />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
