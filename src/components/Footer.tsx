import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Container } from '../styles/Layout';
import { theme } from '../styles/GlobalStyles';

interface FooterProps {
  id?: string;
}

const StyledFooter = styled.footer`
  background: ${theme.colors.darkGray};
  color: ${theme.colors.white};
  padding: 3rem 0;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: ${theme.colors.white};
  font-size: 1.5rem;
  transition: ${theme.transitions.default};
  
  &:hover {
    color: ${theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Footer: React.FC<FooterProps> = ({ id }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <StyledFooter id={id}>
      <Container>
        <Content>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Iheb CHAARAOUI</h3>
            <p>Développeur Fullstack</p>
            
            <SocialLinks>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <SocialLink 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </SocialLink>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <SocialLink 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </SocialLink>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <SocialLink 
                  href="mailto:iheb.chaaraoui1@gmail.com"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </SocialLink>
              </motion.div>
            </SocialLinks>
            
            <Copyright>
              &copy; {currentYear} Iheb CHAARAOUI. Tous droits réservés.
            </Copyright>
          </motion.div>
        </Content>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
