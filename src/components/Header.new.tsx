import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { theme } from '../styles/GlobalStyles';
import { Container } from '../styles/Layout';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.white};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  padding: 1rem 0;
`;

const HeaderContent = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;

const Nav = styled.nav<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: ${theme.colors.white};
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  
  @media (min-width: ${theme.breakpoints.lg}) {
    position: static;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: transparent;
    padding: 0;
    box-shadow: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  
  @media (min-width: ${theme.breakpoints.lg}) {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    width: auto;
  }
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${theme.colors.primary};
    background: rgba(0, 0, 0, 0.05);
  }
  
  &.active {
    color: ${theme.colors.primary};
    font-weight: 600;
  }
`;

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuToggle();
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav') && !target.closest('button')) {
        setIsMenuOpen(false);
        onMenuToggle();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, onMenuToggle]);
  
  return (
    <StyledHeader>
      <HeaderContent>
        <Logo to="/">
          {personalInfo.name.split(' ')[0]}
        </Logo>
        
        <MobileMenuButton onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
        
        <Nav $isOpen={isMenuOpen}>
          <NavList>
            <NavItem>
              <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>
                Projects
              </NavLink>
            </NavItem>
          </NavList>
        </Nav>
      </HeaderContent>
    </StyledHeader>
  );
};

export default Header;
