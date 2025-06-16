import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from './GlobalStyles';

type ContainerProps = {
  $isMain?: boolean;
};

export const Container = styled.div<ContainerProps>`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => (props.$isMain ? '0 20px' : '0')};
  width: 100%;
`;

export const Section = styled.section`
  padding: 3rem 0;
  position: relative;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 1.75rem;
  color: ${theme.colors.primary};
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary});
    border-radius: 2px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr 2fr;
  }
`;

export const Card = styled(motion.div)`
  background: ${theme.colors.white};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: ${theme.shadows.md};
  margin-bottom: 1.5rem;
  transition: ${theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Button = styled(motion.a)`
  display: inline-block;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: ${theme.transitions.default};
  border: none;
  text-decoration: none;
  
  &:hover {
    background: ${theme.colors.secondary};
    transform: translateY(-2px);
  }
`;
