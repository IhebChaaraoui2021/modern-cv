import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles/GlobalStyles';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

// Styled components
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout = styled.div`
  display: flex;
  flex: 1;
  padding-top: 70px; /* Height of the header */
`;

const SidebarWrapper = styled.div<{ $isOpen: boolean }>`
  width: 300px;
  flex-shrink: 0;
  position: fixed;
  top: 70px;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  z-index: 100;
  background: ${theme.colors.primary};
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    width: 280px;
  }
`;

const BackToHome = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${theme.colors.secondary};
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    margin: 2rem 1rem 1rem;
  }
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 300px;
  padding: 2rem;
  min-height: calc(100vh - 70px);
  
  @media (max-width: ${theme.breakpoints.lg}) {
    margin-left: 0;
    padding: 1rem;
    padding-top: 70px;
  }
`;

// Home page component that includes all the main sections
const HomePage: React.FC = () => (
  <>
    <About id="about" />
    <Services id="services" />
    <Skills id="skills" />
    <Education id="education" />
    <Experience id="experience" />
  </>
);

// Main app content with routing
const AppContent: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <AppContainer>
      <GlobalStyles />
      <Header onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Layout>
        <SidebarWrapper $isOpen={isSidebarOpen}>
          <Sidebar onNavigate={() => setIsSidebarOpen(false)} />
        </SidebarWrapper>
        <MainContent id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          {!isHome && (
            <BackToHome to="/">← Back to Home</BackToHome>
          )}
        </MainContent>
      </Layout>
      <Footer id="contact" />
    </AppContainer>
  );
};

// Main App component with Router and ThemeProvider
const App: React.FC = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <AppContent />
    </ThemeProvider>
  </Router>
);

export default App;
