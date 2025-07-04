import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import CustomCursor from './components/CustomCursor';
import LandingPage from './pages/Homepage';
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



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
