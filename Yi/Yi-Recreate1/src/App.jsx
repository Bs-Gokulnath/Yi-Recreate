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
import TwentyTwentyFivePage from './pages/2025/2025';
import ContactPage from './pages/Contact_Us/Contact_Us';
import StakeholdersPage from './pages/Stakeholders/StakeholdersPage';
import RuralInitiativesContent from './pages/Stakeholders/Rural_initatives';
import MembershipPage from './pages/Stakeholders/Membership';
import YuvaPage from './pages/Stakeholders/Yuva';
import ThalirPage from './pages/Stakeholders/Thalir';
import SigninPage from './pages/Signin';
import LearningPage from './pages/Initiatives/Learning';
import InnovationPage from './pages/Initiatives/Innovation';
import EntrepreneurshipPage from './pages/Initiatives/Entrepreneurship';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <CustomCursor /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/2025" element={<TwentyTwentyFivePage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/rural-initiatives" element={<RuralInitiativesContent />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/yuva" element={<YuvaPage />} />
          <Route path="/thalir" element={<ThalirPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/theme-2025" element={<Theme2025 />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/innovation" element={<InnovationPage />} />
          <Route path="/entrepreneurship" element={<EntrepreneurshipPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/masoom" element={<Masoom />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/road-safety" element={<RoadSafetyPage />} />
          <Route path="/health" element={<HealthPage />} />
          <Route path="/climate-change" element={<ClimateChangePage />}/>
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
