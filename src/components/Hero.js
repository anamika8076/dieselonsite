import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useParallax from '../hooks/useParallax';

const HeroSection = styled.section`
  height: 89vh;
  margin-top: 80px;
  display: flex;
  align-items: center;
  padding: 80px 5%;
  position: relative;
  background-image: url('/Rectangle 1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top-left-radius: 300px;
  overflow: hidden;
  background-attachment: fixed;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 107, 0, 0.1), rgba(0, 0, 0, 0.3));
    z-index: 1;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
    padding: 60px 2%;
    border-top-left-radius: 120px;
  }
  @media (max-width: 600px) {
    padding: 40px 1%;
    border-top-left-radius: 60px;
  }
  @media (max-width: 700px) {
    padding: 40px 0 20px 0;
    min-height: 80vh;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
    background-position: center top;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  color: white;
  z-index: 2;
  max-width: 600px;
  margin-top: 60px;
  @media (max-width: 900px) {
    margin-top: 20px;
    max-width: 100%;
    text-align: center;
  }
  @media (max-width: 700px) {
    align-items: center;
    text-align: center;
    padding: 0 16px;
    h1 {
      font-size: 2rem;
      line-height: 2.4rem;
      margin-bottom: 12px;
    }
    p {
      font-size: 1rem;
      margin-bottom: 18px;
    }
    button {
      width: 100%;
      font-size: 1rem;
      padding: 12px 0;
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  @media (max-width: 900px) {
    font-size: 2.2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
  color: #0D3B5C;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const PrimaryButton = styled.button`
  padding: 1rem 2rem;
  background: white;
  color: black;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  color: white;
  border: 2px solid white;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: relative;
  height: 100%;

  img {
    height: 90vh;
    width: 80vh;
    object-fit: cover;
    padding: 0;
    transition: transform 0.1s ease-out;
  }
  @media (max-width: 900px) {
    width: 100%;
    img {
      width: 100vw;
      height: auto;
      max-width: 350px;
    }
  }
`;

const OrangeCircle = styled.div`
  position: absolute;
  width: 90px;
  height: 90px;
  background-color: #FF6B00;
  border-radius: 50%;
  bottom: -75px;
  left: 50px;
  z-index: 1;
  transition: transform 0.1s ease-out;
`;

const ParallaxElement = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: rgba(255, 107, 0, 0.6);
  border-radius: 50%;
  transition: transform 0.1s ease-out;
`;

const FloatingElement1 = styled(ParallaxElement)`
  top: 20%;
  right: 15%;
  width: 30px;
  height: 30px;
  @media (max-width: 700px) {
    display: none;
  }
`;

const FloatingElement2 = styled(ParallaxElement)`
  top: 60%;
  right: 80%;
  width: 15px;
  height: 15px;
`;

const FloatingElement3 = styled(ParallaxElement)`
  top: 80%;
  right: 30%;
  width: 25px;
  height: 25px;
  @media (max-width: 700px) {
    display: none;
  }
`;

const Hero = () => {
  const scrollY = useParallax();
  
  const parallaxOffset1 = scrollY * 0.5;
  const parallaxOffset2 = scrollY * 0.3;
  const parallaxOffset3 = scrollY * 0.7;
  const imageParallax = scrollY * 0.2;

  return (
    <HeroSection id="hero">
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <HeroTitle>Diesel Delivered<br />to Your Doorstep<br />in Delhi NCR</HeroTitle>
          <HeroSubtitle>
            Fast, reliable, and safe diesel delivery — typically within 2 hours.<br />
            Meeting your fuel needs without the hassle.
          </HeroSubtitle>
          <ButtonGroup>
            <PrimaryButton>Order Now</PrimaryButton>
            <SecondaryButton>How It Works</SecondaryButton>
          </ButtonGroup>
        </motion.div>
      </HeroContent>
      <HeroImageContainer>
        <OrangeCircle style={{ transform: `translateY(${parallaxOffset2}px)` }} />
        <motion.img
          src="/Screenshot 2025-05-20 at 3.05.50 PM 1.png"
          alt="Delivery Truck"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ transform: `translateY(${imageParallax}px)` }}
        />
        <FloatingElement1 style={{ transform: `translateY(${parallaxOffset1}px) translateX(${parallaxOffset1 * 0.5}px)` }} />
        <FloatingElement2 style={{ transform: `translateY(${parallaxOffset3}px) translateX(${-parallaxOffset3 * 0.3}px)` }} />
        <FloatingElement3 style={{ transform: `translateY(${parallaxOffset2}px) translateX(${parallaxOffset2 * 0.4}px)` }} />
      </HeroImageContainer>
    </HeroSection>
  );
};

export default Hero;