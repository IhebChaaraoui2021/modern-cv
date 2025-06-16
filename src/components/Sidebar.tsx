import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaGlobe, FaUser, FaProjectDiagram, FaFilePdf } from 'react-icons/fa';
import { personalInfo } from '../data/data';
import { theme } from '../styles/GlobalStyles';

// Base64 placeholder image
const placeholderImage = '../assets/cropped-01111111.jpg';

const SidebarContainer = styled.aside`
  width: 300px;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  color: ${theme.colors.white};
  padding: 2rem;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Nav = styled.nav`
  margin: 2rem 0;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: 0.5rem;
`;

const StyledNavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: ${theme.colors.white};
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
  }
`;

const ProfileSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1rem;
  border: 4px solid rgba(255, 255, 255, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Name = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Title = styled.p`
  margin: 0.5rem 0 0;
  opacity: 0.8;
  font-size: 0.9rem;
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${theme.colors.white};
  text-decoration: none;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  opacity: 0.9;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
  
  svg {
    width: 16px;
  }
`;

interface SidebarProps {
  onNavigate?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    if (onNavigate) {
      onNavigate();
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    handleNavClick(sectionId);
  };

  return (
    <SidebarContainer>
      <ProfileSection>
        <ProfileImage>
          <img src={placeholderImage} alt={personalInfo.name} />
        </ProfileImage>
        <Name>{personalInfo.name}</Name>
        <Title>{personalInfo.title}</Title>
      </ProfileSection>

      <Nav>
        <NavList>
          <NavItem>
            <StyledNavLink to="/" onClick={(e) => handleLinkClick(e, 'about')}>
              <FaUser />
              Profile
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/projects" onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate();
            }}>
              <FaProjectDiagram />
              Projects
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <a 
              href="ihebchaaraoui_S3-fr%20.pdf" 
              download="ihebchaaraoui_S3-fr.pdf"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = theme.colors.primary)}
              onMouseOut={(e) => (e.currentTarget.style.color = 'inherit')}
              type="application/pdf"
            >
              <FaFilePdf />
              Télécharger CV
            </a>
          </NavItem>
        </NavList>
      </Nav>

      <ContactInfo>
        <ContactItem href={`mailto:${personalInfo.email}`}>
          <FaEnvelope /> {personalInfo.email}
        </ContactItem>
        <ContactItem href={`tel:${personalInfo.phone}`}>
          <FaPhone /> {personalInfo.phone}
        </ContactItem>
        {personalInfo.portfolio && (
          <ContactItem href={personalInfo.portfolio} target="_blank" rel="noopener noreferrer">
            <FaGlobe /> {personalInfo.portfolio.replace(/^https?:\/\//, '')}
          </ContactItem>
        )}
        <ContactItem 
          href="ihebchaaraoui_S3-fr%20.pdf" 
          download="ihebchaaraoui_S3-fr.pdf"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <FaFilePdf /> Télécharger CV
        </ContactItem>
      </ContactInfo>
    </SidebarContainer>
  );
};

export default Sidebar;
