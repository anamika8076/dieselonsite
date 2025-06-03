import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi'; // FiPhone is a clean, minimal phone icon
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    setMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Nav>
      <Logo>
        <img src="/Layer_1.png" alt="Diesel Onsite" />
      </Logo>
      <RightSection>
        
        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </Hamburger>
      </RightSection>
      <AnimatePresence>
        {menuOpen && (
          <MobileNavLinks
            as={motion.div}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
          >
            <NavLink onClick={() => scrollToSection('hero')}>Home</NavLink>
            <NavLink onClick={() => scrollToSection('about-us')}>About Us</NavLink>
            <NavLink onClick={() => scrollToSection('services')}>Services</NavLink>
            <NavLink onClick={() => scrollToSection('how-it-works')}>How It Works</NavLink>
            <NavLink onClick={() => scrollToSection('reviews')}>Reviews</NavLink>
            <NavLink onClick={() => scrollToSection('faq')}>FAQ</NavLink>
            <NavLink onClick={() => scrollToSection('footer')}>Contact</NavLink>
            <MobilePhone href="tel:+91XXXXXXXXXX">
              <FiPhone style={{ marginRight: '8px' }} />
              +91 XXXXXXXXXX
            </MobilePhone>
          </MobileNavLinks>
        )}
      </AnimatePresence>
      <DesktopNavLinks>
        <NavLink onClick={() => scrollToSection('hero')}>Home</NavLink>
        <NavLink onClick={() => scrollToSection('about-us')}>About Us</NavLink>
        <NavLink onClick={() => scrollToSection('services')}>Services</NavLink>
        <NavLink onClick={() => scrollToSection('how-it-works')}>How It Works</NavLink>
        <NavLink onClick={() => scrollToSection('reviews')}>Reviews</NavLink>
        <NavLink onClick={() => scrollToSection('faq')}>FAQ</NavLink>
        <NavLink onClick={() => scrollToSection('footer')}>Contact</NavLink>
        <DesktopPhone href="tel:+91XXXXXXXXXX">
          <FiPhone style={{ marginRight: '8px' }} />
          +91 XXXXXXXXXX
        </DesktopPhone>
      </DesktopNavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
    // Hide phone number on mobile if you only want the icon
    .phone-number {
      display: none;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 700px) {
    display: block;
    z-index: 1100;
  }
`;

const DesktopPhone = styled.a`
  color: #ff6b00;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  @media (max-width: 700px) {
    display: none;
  }
`;

const MobilePhone = styled.a`
  display: flex;
  align-items: center;
  color: #ff6b00;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  justify-content: center;
  @media (min-width: 701px) {
    display: none;
  }
`;

const DesktopNavLinks = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 700px) {
    display: none;
  }
`;

const MobileNavLinks = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 60px;
    right: 0;
    left: 0;
    background: white;
    gap: 1.5rem;
    padding: 1.5rem 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    z-index: 1050;
  }
`;

const Logo = styled.div`
  img {
    height: 40px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 900px) {
    gap: 1rem;
  }
  @media (max-width: 700px) {
    display: none;
    /* For a real mobile menu, implement a hamburger menu here */
  }
`;

const PhoneNumber = styled.a`
  color: #ff6b00;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

const NavLink = styled.button`
  color: #333;
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  &:hover {
    color: #ff6b00;
  }
`;

export default Navbar;