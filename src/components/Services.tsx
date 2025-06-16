import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaServer } from 'react-icons/fa';
import { theme } from '../styles/GlobalStyles';

interface ServicesProps {
  id?: string;
}

const ServicesSection = styled.section`
  padding: 5rem 0;
  background: ${theme.colors.lightGray};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${theme.colors.text};
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: ${theme.colors.secondary};
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled(motion.div)`
  background: ${theme.colors.white};
  border-radius: 8px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  background: ${theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.8rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: ${theme.colors.text};
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: ${theme.colors.darkGray};
  line-height: 1.6;
`;

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Creating responsive and modern websites using the latest web technologies and frameworks.',
    icon: <FaLaptopCode />
  },
  {
    id: 2,
    title: 'Mobile Development',
    description: 'Building cross-platform mobile applications with React Native for iOS and Android.',
    icon: <FaMobileAlt />
  },
  {
    id: 3,
    title: 'Backend Development',
    description: 'Developing robust and scalable server-side applications with Node.js and modern frameworks.',
    icon: <FaServer />
  }
];

const Services: React.FC<ServicesProps> = ({ id }) => {
  return (
    <ServicesSection id={id}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>My Services</SectionTitle>
          <ServicesGrid>
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: service.id * 0.1 }}
              >
                <ServiceIcon>
                  {service.icon}
                </ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </motion.div>
      </Container>
    </ServicesSection>
  );
};

export default Services;
