import styled from 'styled-components';
import { motion } from 'framer-motion';

const HowItWorksSection = styled.section`
  padding: 100px 5%;
  background: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 48px;
  color: #1E3A8A;
  margin-bottom: 60px;
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const StepCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #1E3A8A;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #1E3A8A;
  margin-bottom: 20px;
  background: white;
`;

const StepTitle = styled.h3`
  font-size: 24px;
  color: #1E3A8A;
  margin-bottom: 10px;
`;

const StepDescription = styled.p`
  font-size: 16px;
  color: #64748B;
  line-height: 1.5;
`;

const DownloadSection = styled.div`
  margin-top: 60px;
`;

const DownloadTitle = styled.h3`
  font-size: 32px;
  color: #1E3A8A;
  margin-bottom: 30px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  img {
    height: 50px;
    width: auto;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Download App',
      description: 'Get the DieselOnSite app from App Store or Google Play'
    },
    {
      number: 2,
      title: 'Place Order',
      description: 'Specify quantity and delivery location details'
    },
    {
      number: 3,
      title: 'Track Delivery',
      description: 'Monitor your delivery in real-time on the app'
    },
    {
      number: 4,
      title: 'Receive Fuel',
      description: 'Safe and compliant delivery within 2 hours'
    }
  ];

  return (
    <HowItWorksSection id="how-it-works">
      <Title>How It Works</Title>
      
      <StepsContainer>
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <StepCard>
              <StepCircle
                as={motion.div}
                initial={{ scale: 1, backgroundColor: 'white' }}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: '#FF6B00',
                  color: 'white',
                  borderColor: '#FF6B00',
                  transition: { type: 'spring', stiffness: 300, damping: 10 }
                }}
                whileTap={{
                  scale: 1.1,
                  backgroundColor: '#FF6B00',
                  color: 'white',
                  borderColor: '#FF6B00',
                  transition: { type: 'spring', stiffness: 300, damping: 10 }
                }}
              >
                {step.number}
              </StepCircle>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepCard>
          </motion.div>
        ))}
      </StepsContainer>

      <DownloadSection>
        <DownloadTitle>Download Our App</DownloadTitle>
        <ButtonsContainer>
          <motion.a
            href="https://apps.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/appstore.png" alt="Download on App Store" />
          </motion.a>
          <motion.a
            href="https://play.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/googleplay.png" alt="Get it on Google Play" />
          </motion.a>
        </ButtonsContainer>
      </DownloadSection>
    </HowItWorksSection>
  );
};

export default HowItWorks;