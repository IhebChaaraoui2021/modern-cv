import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { education } from '../data/data';
import { Section, SectionTitle, Card, Container } from '../styles/Layout';
import { theme } from '../styles/GlobalStyles';

interface EducationProps {
  id?: string;
}

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const EducationCard = styled(Card)`
  position: relative;
  padding-left: 2rem;
  border-left: 3px solid ${theme.colors.primary};
  
  &::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${theme.colors.primary};
  }
  
  h3 {
    color: ${theme.colors.primary};
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }
  
  p {
    color: ${theme.colors.textLight};
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    
    &:last-child {
      color: ${theme.colors.darkGray};
      font-weight: 500;
    }
  }
`;

const Education: React.FC<EducationProps> = ({ id }) => {
  return (
    <Section id={id} style={{ backgroundColor: theme.colors.background }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>Éducation</SectionTitle>
          
          <EducationGrid>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EducationCard>
                  <h3>{edu.degree}</h3>
                  <p>{edu.institution}</p>
                  <p>{edu.period}</p>
                </EducationCard>
              </motion.div>
            ))}
          </EducationGrid>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Education;
