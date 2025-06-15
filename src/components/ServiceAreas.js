import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServiceAreas = () => {
  const areas = [
    {
      title: 'Delhi',
      description: 'Covering all areas within Delhi with prompt service.'
    },
    {
      title: 'Gurgaon',
      description: 'Fast delivery across Gurgaon for businesses and residences.'
    },
    {
      title: 'Noida',
      description: 'Reliable service throughout Noida and Greater Noida.'
    },
    {
      title: 'Faridabad',
      description: 'Comprehensive coverage in all sectors of Faridabad.'
    }
  ];

  return (
    <ServiceAreasSection>
      <Title>Service Areas</Title>
      <Subtitle>
        We deliver diesel across Delhi NCR, making sure businesses and residences get the fuel
        they need, when they need it.
      </Subtitle>
      <AreasGrid>
        {areas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <AreaCard>
              <AreaTitle>{area.title}</AreaTitle>
              <AreaDescription>{area.description}</AreaDescription>
            </AreaCard>
          </motion.div>
        ))}
      </AreasGrid>
    </ServiceAreasSection>
  );
};

const ServiceAreasSection = styled.section`
  padding: 100px 5%;
  text-align: center;
  margin-bottom: 55px;
`;

const Title = styled.h2`
  font-size: 48px;
  color: #1E3A8A;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #64748B;
  max-width: 800px;
  margin: 0 auto 60px;
  line-height: 1.6;
`;

const AreasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const AreaCard = styled.div`
  background: #FF6B00;
  color: white;
  padding: 30px 20px;
  border-radius: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const AreaTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
`;

const AreaDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export default ServiceAreas;