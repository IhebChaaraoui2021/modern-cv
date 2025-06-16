import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { experience } from '../data/data';
import { Section, SectionTitle, Card, Container } from '../styles/Layout';
import { theme } from '../styles/GlobalStyles';

interface ExperienceProps {
  id?: string;
}

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${theme.colors.gray};
    
    @media (min-width: ${theme.breakpoints.md}) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const ExperienceCard = styled(Card)`
  position: relative;
  margin-left: 2.5rem;
  
  @media (min-width: ${theme.breakpoints.md}) {
    width: calc(50% - 1.25rem);
    
    &:nth-child(odd) {
      margin-right: auto;
      margin-left: 0;
    }
    
    &:nth-child(even) {
      margin-left: auto;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 1.5rem;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${theme.colors.primary};
    z-index: 1;
    
    @media (min-width: ${theme.breakpoints.md}) {
      left: auto;
      right: -1.9rem;
    }
  }
  
  &:nth-child(even)::before {
    @media (min-width: ${theme.breakpoints.md}) {
      right: auto;
      left: -1.9rem;
    }
  }
  
  h3 {
    color: ${theme.colors.primary};
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }
  
  .company {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 0.5rem;
    
    span {
      font-weight: 600;
      color: ${theme.colors.darkGray};
    }
    
    .location {
      color: ${theme.colors.textLight};
      font-weight: normal;
      font-size: 0.9rem;
    }
  }
  
  .period {
    display: inline-block;
    background: ${theme.colors.primary};
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
  
  .description {
    margin-bottom: 1rem;
    
    ul {
      list-style-type: disc;
      padding-left: 1.25rem;
      margin-top: 0.5rem;
      
      li {
        margin-bottom: 0.5rem;
        color: ${theme.colors.text};
        line-height: 1.6;
      }
    }
  }
  
  .technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
    
    span {
      background: ${theme.colors.lightGray};
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      color: ${theme.colors.darkGray};
    }
  }
`;

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <Section id={id}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>Expérience Professionnelle</SectionTitle>
          
          <ExperienceList>
            {experience.map((exp, index) => (
              <ExperienceCard
                key={index}
                as={motion.div}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{exp.position}</h3>
                <div className="company">
                  <span>{exp.company}</span>
                  <span className="location">| {exp.location}</span>
                </div>
                <span className="period">{exp.period}</span>
                
                <div className="description">
                  <ul>
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </ExperienceCard>
            ))}
          </ExperienceList>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Experience;
