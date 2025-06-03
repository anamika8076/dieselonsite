import styled from 'styled-components';
import { motion } from 'framer-motion';

const WhyChoose = () => {
  const features = [
    {
      title: 'Quick Delivery',
      description: 'Guaranteed delivery within 2 hours anywhere in Delhi NCR.'
    },
    {
      title: 'Certified & Safe',
      description: 'Fully PESO-compliant operations with strict safety protocols.'
    },
    {
      title: 'Real-Time Tracking',
      description: 'Track your delivery in real-time through our mobile app.'
    },
    {
      title: 'Quality Assurance',
      description: 'Premium quality fuel with tamper-proof delivery mechanisms.'
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden charges, pay only for what you order.'
    },
    {
      title: 'Regular Scheduling',
      description: 'Set up recurring deliveries for consistent fuel supply.'
    }
  ];

  return (
    <WhyChooseSection>
      <LeftContent>
        <motion.img
          src="/90046eb2-fe21-4f2a-815b-f563aa95504a 1.png"
          alt="Fuel Nozzle"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <Title>Why Choose<br />DieselOnSite?</Title>
        <Subtitle>We go beyond just delivery - we provide peace of mind with safe, convenient, and timely service.</Subtitle>
      </LeftContent>
      
      <RightContent>
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FeatureCard>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          </motion.div>
        ))}
      </RightContent>
    </WhyChooseSection>
  );
};

const WhyChooseSection = styled.section`
  padding: 100px 5%;
  background: #F8FAFC;
  display: flex;
  gap: 50px;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  
  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    margin-bottom: 30px;
  }
`;

const Title = styled.h2`
  font-size: 45px;
  color: #1E3A8A;
  margin-bottom: 20px;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #64748B;
  line-height: 1.6;
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FeatureCard = styled.div`
  background: #FF6B00;
  padding: 15px;
  border-radius: 10px;
  color: white;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 15px;
  margin-bottom: 8px;
`;

const FeatureDescription = styled.p`
  font-size: 13px;
  opacity: 0.9;
`;

export default WhyChoose;