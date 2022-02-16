import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import './App.css';
import InfoSection from './components/InfoSection';
import { homeObjOne } from './components/InfoSection/Data';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='container'>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Footer />
    </div>
  );
}

export default App;
