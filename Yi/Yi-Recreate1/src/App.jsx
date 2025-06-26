import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import CustomCursor from './components/CustomCursor';
import LandingPage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Appabout from './pages/about/Appabout.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <CustomCursor />
        <Routes>
          
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<Appabout />} />
       
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
