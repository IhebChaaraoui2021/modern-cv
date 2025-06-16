import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { theme } from '../styles/GlobalStyles';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
  mediaType?: 'image' | 'video';
}

const ProjectsSection = styled.section`
  padding: 5rem 0;
  background: ${theme.colors.white};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${theme.colors.primary};
  margin-bottom: 3rem;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${theme.colors.lightGray};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.text};
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
  
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img, &:hover video {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${theme.colors.text};
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.textLight};
  margin-bottom: 1.5rem;
  flex: 1;
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: ${theme.colors.lightGray};
  color: ${theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.secondary};
  }

  svg {
    font-size: 0.9rem;
  }
`;

// Styled components for the modal
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: ${theme.colors.white};
  border-radius: 8px;
  max-width: 90%;
  max-height: 90vh;
  overflow: auto;
  position: relative;
  width: 100%;
  max-width: 800px;
  
  img, video {
    width: 100%;
    max-height: 70vh;
    object-fit: contain;
    display: block;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background 0.2s ease;
  
  &:hover {
    background: ${theme.colors.primary};
  }
`;

const projects: ProjectCardProps[] = [
  {
    title: 'Federation Management System',
    description: 'A full-featured e-commerce platform with user authentication, product catalog, and payment processing.',
    technologies: ['Angular 16', 'Spring Boot 3','Java 17', 'MySQL', 'Jenkins', 'CSS3', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.com',
    videoUrl: '/Modern Auth System - Google Chrome 2025-06-12 15-08-54.mp4',
    mediaType: 'video'
  },
  {
    title: 'Project Management App',
    description: 'A collaborative project management application with real-time updates and team collaboration features. is a demo from the project and not a real project with full features production.',
    technologies: ['React', 'redux', 'tailwindcss', 'Spring boot 3','MySQL','Jenkins'],
    githubUrl: '',
    liveUrl: '/pm.mp4',
    videoUrl: '/pm.mp4',
    mediaType: 'video'
  },
  {
    title: 'Video transfer application',
    description: ' that application help user to transfer video from one device to another instantly and  notify user when video is transferred.',
    technologies: ['React', 'Redux', 'NodeJS', 'Socket.io', 'HTML', 'CSS', 'JavaScript','Nodemailer'],
    githubUrl: 'https://github.com/username/task-manager',
    liveUrl: 'https://taskmanager-demo.com',
    videoUrl: '/transfer.mp4',
    mediaType: 'video'
  },
  {
    title: 'Person Detection System (Computer Vision + ML Demo) ',
    description: 'A real-time system to detect and localize humans in video streams or images.',
    technologies: ['React', 'TypeScript', 'Styled Components', 'Tensorflow.js', 'keras', 'python', 'LLM', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/username/portfolio',
    liveUrl: 'https://myportfolio.com',
    imageUrl: '',
    mediaType: 'image'
  },
  {
    title: 'Hands Movement Recognition System (Computer Vision + ML Demo)',
    description: 'A proof-of-concept for tracking and classifying hand gestures in real-time.',
    technologies: ['React', 'TypeScript', 'Styled Components', 'Tensorflow.js', 'keras', 'python', 'LLM', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/username/portfolio',
    liveUrl: 'https://myportfolio.com',
    imageUrl: 'https://via.placeholder.com/800x450?text=Portfolio+Website',
    mediaType: 'image'
  },
  {
    title: 'GIS Dashboard Demo: Visualization of EDF ',
    description: 'This is a demo (not full features in production and data) showcasing a Geographic Information System (GIS) dashboard that displays the locations and power capacities of EDF power stations across French territory.',
    technologies: ['React', 'Redux', 'NodeJS', 'HTML', 'CSS','express.js','JavaScript','Nodemailer','Leaflet','MongoDB','docker','security web application'],
    githubUrl: '',
    liveUrl: '',
    videoUrl: '/map1.mp4',
    mediaType: 'video'
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCardProps | null>(null);

  const openModal = (project: ProjectCardProps) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  // Close modal when clicking outside content
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Close modal on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ProjectsSection id="projects">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>My Projects</SectionTitle>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectImage onClick={() => openModal(project)}>
                  {project.mediaType === 'video' ? (
                    <video
                      src={project.videoUrl}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster={project.imageUrl}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img 
                      src={project.imageUrl || `https://via.placeholder.com/800x450?text=${encodeURIComponent(project.title)}`} 
                      alt={project.title} 
                      loading="lazy"
                    />
                  )}
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <Technologies>
                    {project.technologies.map((tech, i) => (
                      <TechTag key={i}>{tech}</TechTag>
                    ))}
                  </Technologies>
                  <ProjectLinks>
                    <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Code
                    </ProjectLink>
                    {project.liveUrl && (
                      <ProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> Live Demo
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>

          <AnimatePresence>
            {selectedProject && (
              <ModalOverlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={handleOverlayClick}
              >
                <ModalContent
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                >
                  <CloseButton onClick={closeModal} aria-label="Close modal">
                    <FaTimes />
                  </CloseButton>
                  
                  {selectedProject.mediaType === 'video' ? (
                    <video
                      src={selectedProject.videoUrl}
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img 
                      src={selectedProject.imageUrl} 
                      alt={selectedProject.title} 
                    />
                  )}
                  
                  <ProjectContent>
                    <ProjectTitle>{selectedProject.title}</ProjectTitle>
                    <ProjectDescription>{selectedProject.description}</ProjectDescription>
                    <Technologies>
                      {selectedProject.technologies.map((tech, i) => (
                        <TechTag key={i}>{tech}</TechTag>
                      ))}
                    </Technologies>
                    <ProjectLinks>
                      <ProjectLink href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> Code
                      </ProjectLink>
                      {selectedProject.liveUrl && (
                        <ProjectLink href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <FaExternalLinkAlt /> Live Demo
                        </ProjectLink>
                      )}
                    </ProjectLinks>
                  </ProjectContent>
                </ModalContent>
              </ModalOverlay>
            )}
          </AnimatePresence>
        </motion.div>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
