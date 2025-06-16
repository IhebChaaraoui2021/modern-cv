import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from '../styles/Layout';
import { theme } from '../styles/GlobalStyles';

interface SkillsProps {
  id?: string;
}

// Styled Components
const SkillsSection = styled.section`
  padding: 5rem 0;
  background: ${theme.colors.white};
  position: relative;
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

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-top: 3rem;
`;

const SkillCategory = styled.div`
  text-align: center;
  
  h3 {
    font-size: 1.5rem;
    color: ${theme.colors.primary};
    margin-bottom: 2rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 2.5rem;
  margin-top: 1.5rem;
`;

const SkillCircle = styled.div<{ percentage: number; color: string }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: conic-gradient(
    ${props => props.color} 0% ${props => props.percentage}%,
    ${theme.colors.lightGray} ${props => props.percentage}% 100%
  );
  position: relative;
  margin-bottom: 1.5rem;
  
  &::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: white;
  }
`;

const SkillPercentage = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.text};
  position: relative;
  z-index: 1;
`;

const SkillName = styled.h4`
  font-size: 1rem;
  color: ${theme.colors.text};
  margin-top: 0.5rem;
  font-weight: 500;
  text-align: center;
`;

// Component
const Skills: React.FC<SkillsProps> = ({ id }) => {
  const technicalSkills = [
    { name: 'Java', percentage: 90, color: '#4CAF50' },
    { name: 'Spring Boot', percentage: 85, color: '#6DB33F' },
    { name: 'React', percentage: 80, color: '#61DAFB' },
    { name: 'Angular', percentage: 75, color: '#DD0031' },
    { name: 'Node.js', percentage: 85, color: '#8CC84B' },
    { name: 'Docker', percentage: 80, color: '#2496ED' },
    { name: 'Kubernetes', percentage: 75, color: '#326CE5' },
    { name: 'AWS', percentage: 80, color: '#FF9900' },
    { name: 'SQL', percentage: 85, color: '#336791' },
  ];

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: technicalSkills.slice(0, 5)
    },
    {
      title: 'Frameworks & Tools',
      skills: technicalSkills.slice(5, 9)
    }
  ];

  return (
    <SkillsSection id={id}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Technical Skills</SectionTitle>
          <SkillsContainer>
            {skillCategories.map((category, catIndex) => (
              <SkillCategory key={catIndex}>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {category.title}
                </motion.h3>
                <SkillsGrid>
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={`${catIndex}-${index}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: (catIndex * 0.1) + (index * 0.05) 
                      }}
                    >
                      <SkillCircle 
                        percentage={skill.percentage} 
                        color={skill.color}
                      >
                        <SkillPercentage>{skill.percentage}%</SkillPercentage>
                      </SkillCircle>
                      <SkillName>{skill.name}</SkillName>
                    </motion.div>
                  ))}
                </SkillsGrid>
              </SkillCategory>
            ))}
          </SkillsContainer>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
