import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useParallax from '../hooks/useParallax';

const AboutSection = styled.section`
  display: flex;
  padding: 100px 5%;
  gap: 50px;
  align-items: center;
  position: relative;
  overflow: hidden;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 60px 2%;
    gap: 20px;
  }
  @media (max-width: 600px) {
    padding: 30px 1%;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  
  img {
    
    width: 100%;
    max-width: 500px;
    height: auto;
    position: relative;
    z-index: 2;
    transition: transform 0.1s ease-out;
  }
`;

const OrangeCircle = styled.div`
  width: 25px;
  height: 25px;
  background: #FF6B00;
  border-radius: 50%;
  position: absolute;
  top: 30%;
  right: 10%;
  z-index: 1;
  transition: transform 0.1s ease-out;
`;

const OrangeCirclee = styled.div`
  width: 60px;
  height: 60px;
  background: #FF6B00;
  border-radius: 50%;
  position: absolute;
  top: 70%;
  right: 90%;
  z-index: 1;
  transition: transform 0.1s ease-out;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-right: 80px;
  @media (max-width: 900px) {
    padding-left: 0;
    padding-right: 0;
    text-align: center;
  }
`;

const Title = styled.h2`
  color: #1E3A8A;
  margin-bottom: 30px;
  width: 515;
height: 91;
top: -2px;
font-weight: 700;
font-size: 38.91px;
line-height: 44px;
letter-spacing: -1px;

  @media (max-width: 900px) {
    font-size: 28px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  color:#6F6F87;
font-weight: 700;
font-size: 13.95px;
line-height: 22.5px;
letter-spacing: 0.48px;

  width: 440;
height: 213;
top: 222.05px;
left: 15px;
width: 440;
height: 213;
top: 222.05px;
left: 15px;

`;


const NumberText = styled.div`
  font-size: 64px;
  font-weight: bold;
  color: #1E3A8A;
  line-height: 1;
  margin: 10px 0;
`;

const About = () => {
  const scrollY = useParallax();
  
  const parallaxOffset1 = (scrollY - 500) * 0.3;
  const parallaxOffset2 = (scrollY - 500) * 0.5;
  const imageParallax = (scrollY - 500) * 0.1;

  return (
    <AboutSection id="about-us">
      <ImageContainer>
        <OrangeCircle style={{ transform: `translateY(${parallaxOffset1}px) translateX(${parallaxOffset1 * 0.5}px)` }} />
        <OrangeCirclee style={{ transform: `translateY(${parallaxOffset2}px) translateX(${-parallaxOffset2 * 0.3}px)` }} />
        <motion.img
          src="/Frame 2.png"
          alt="About Us"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ transform: `translateY(${imageParallax}px)` }}
        />
      </ImageContainer>
      <ContentContainer>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ transform: `translateY(${parallaxOffset1 * 0.5}px)` }}
        >
          <Title>We are doing more than<br />you expect</Title>
          <Description>
            CBL Automobiles proudly introduced DieselOnSite to revolutionize fuel delivery in the Delhi NCR region. Founded with a vision to eliminate the hassles of traditional fuel procurement, we bring diesel directly to your doorstep.
          </Description>
          <br />

          <Description>
            We are committed to providing efficient, safe, and environmentally responsible fuel delivery services, setting new standards in the industry through innovation and customer-focused solutions.
          </Description>
         
        </motion.div>
      </ContentContainer>
    </AboutSection>
  );
};

export default About;