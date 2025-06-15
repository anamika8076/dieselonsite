import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
const FooterContainer = styled.footer`
  background-color: #0B2C4D;
  color: white;
  padding: 60px 20px 20px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
  margin-bottom: 20px;
  object-fit: contain;
`;

const Description = styled.p`
  color: #CBD5E1;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledLink = styled.a`
  color: #CBD5E1;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

const ContactInfo = styled.div`
  color: #CBD5E1;
  font-size: 0.95rem;
  display: flex;
  flex-direction: column;
  gap: 12px;

  strong {
    color: white;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  color: #CBD5E1;
  font-size: 1.2rem;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(203, 213, 225, 0.1);
  color: #CBD5E1;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <FooterContent>
        <Column>
          <Logo src="/Layer_1.png" alt="DieselOnSite" />
          <Description>
            DieselOnSite is Delhi NCR's premier diesel delivery service, bringing safe and reliable fuel solutions right to your doorstep.
          </Description>
          <SocialLinks>
  <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter />
  </SocialIcon>
  <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </SocialIcon>
  <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </SocialIcon>
  <SocialIcon href="https://youtube.com" target="_blank" rel="noopener noreferrer">
    <FaYoutube />
  </SocialIcon>
</SocialLinks>
        </Column>

        <Column>
          <Title>Quick Links</Title>
          <LinkList>
            <li><StyledLink href="/">Home</StyledLink></li>
            <li><StyledLink href="/about">About Us</StyledLink></li>
            <li><StyledLink href="/services">Services</StyledLink></li>
            <li><StyledLink href="/how-it-works">How it Works</StyledLink></li>
            <li><StyledLink href="/reviews">Reviews</StyledLink></li>
          </LinkList>
        </Column>

        <Column>
          <Title>Support</Title>
          <LinkList>
            <li><StyledLink href="/faq">FAQ</StyledLink></li>
            <li><StyledLink href="/contact">Contact Us</StyledLink></li>
            <li><StyledLink href="/terms">Terms & Conditions</StyledLink></li>
            <li><StyledLink href="/privacy">Privacy Policy</StyledLink></li>
            <li><StyledLink href="/careers">Careers</StyledLink></li>
          </LinkList>
        </Column>

        <Column>
          <Title>Contact Us</Title>
          <ContactInfo>
            <p><strong>📍 CNL Automobiles, Delhi NCR, India</strong></p>
            <p>📞 +91 9XXXXXXXXX</p>
            <p>✉️ info@dieselonsite.com</p>
          </ContactInfo>
        </Column>
      </FooterContent>

      <Copyright>
        © 2023 DieselOnSite - A service by CNL Automobiles. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;