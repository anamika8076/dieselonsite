import React, { useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ServiceAreas from './components/ServiceAreas';
import WhyChoose from './components/WhyChoose';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

const MainContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

function App() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <MainContainer>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ServiceAreas />
      <WhyChoose />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <Footer />
    </MainContainer>
  );
}

export default App;
