import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi'; // FiPhone is a clean, minimal phone icon
const Navbar = () => {
  const scrollToSection = (sectionId) => {
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
      <NavLinks>
        <NavLink onClick={() => scrollToSection('hero')}>Home</NavLink>
        <NavLink onClick={() => scrollToSection('about-us')}>About Us</NavLink>
        <NavLink onClick={() => scrollToSection('services')}>Services</NavLink>
        <NavLink onClick={() => scrollToSection('how-it-works')}>How It Works</NavLink>
        <NavLink onClick={() => scrollToSection('reviews')}>Reviews</NavLink>
        <NavLink onClick={() => scrollToSection('faq')}>FAQ</NavLink>
        <NavLink onClick={() => scrollToSection('footer')}>Contact</NavLink>
      </NavLinks>
      <PhoneNumber href="tel:+91XXXXXXXXXX">
  <FiPhone style={{ marginRight: '8px' }} />
  +91 XXXXXXXXXX
</PhoneNumber>
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

const Logo = styled.div`
  img {
    height: 40px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
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

const PhoneNumber = styled.a`
  color: #ff6b00;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
`;

export default Navbar;