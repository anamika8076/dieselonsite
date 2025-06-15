import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesSection = styled.section`
  padding: 100px 5%;
`;

const Title = styled.h2`
  font-size: 48px;
  color: #1E3A8A;
  text-align: center;
  margin-bottom: 60px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  min-height: 270px; /* Adjust as needed for your content */

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceImage = styled.img`
  width: 60px;
  height: auto;
  margin-bottom: 15px;
`;

const ServiceTitle = styled.h3`
  font-size: 20px;
  color: #1E3A8A;
  margin-bottom: 15px;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  color: #64748B;
  line-height: 1.6;
`;

const Services = () => {
  const services = [
    {
      image: '/01.png',
      title: 'Residential Complexes',
      description: 'Scheduled deliveries for housing societies, ensuring generators never run dry during power outages.'
    },
    {
      image: '/02.png',
      title: 'Hospitals & Institutes',
      description: 'Emergency and regular supply for critical operations, with priority service during crises.'
    },
    {
      image: '/03.png',
      title: 'Colleges & Schools',
      description: 'Reliable fuel for generators and transportation, with special rates for educational institutions.'
    },
    {
      image: '/04.png',
      title: 'Hotels & Event Organizers',
      description: 'On-demand delivery for events and functions, ensuring seamless power supply for your guests.'
    },
    {
      image: '/05.png',
      title: 'Mining & Infra Equipment',
      description: 'Reliable diesel delivery for stationary mining and infrastructure machinery.'
    },
    {
      image: '/06.png',
      title: 'Custom Solutions',
      description: "Don't see what you need? Contact us for tailored diesel delivery solutions."
    }
  ];

  return (
    <ServicesSection id="services">
      <Title>Our Services</Title>
      <ServicesGrid>
        {services.map((service, index) => (
          <motion.div
            key={service.image}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceCard>
              <ServiceImage src={service.image} alt={service.title} />
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          </motion.div>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default Services;