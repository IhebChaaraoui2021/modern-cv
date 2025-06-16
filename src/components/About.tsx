import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/GlobalStyles';

interface AboutProps {
  id?: string;
}

const AboutSection = styled.section`
  padding: 4rem 0;
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
  margin-bottom: 2rem;
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  line-height: 1.8;
  color: ${theme.colors.darkGray};
  font-size: 1.1rem;
  text-align: justify;
`;

const Greeting = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
`;

const Highlight = styled.span`
  color: ${theme.colors.secondary};
  font-weight: 600;
`;

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <AboutSection id={id}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>About Me</SectionTitle>
          <Content>
            <Greeting>Hello There <span role="img" aria-label="wave">🙂</span> !</Greeting>
            <p>
              I am <Highlight>Iheb chaaraoui</Highlight> a Full-Stack Software Engineer.
            </p>
            <p>
              As a dynamic and dedicated Full Stack Software Engineer with three years of hands-on experience in the IT world, 
              I thrive in crafting innovative solutions that integrate cutting-edge technologies. Proficient in Java 17, TypeScript, 
              and adept with cloud platforms like Azure and AWS, I specialize in developing scalable applications. My expertise in 
              Docker, micro-frontends, and CI/CD pipelines, including GitHub Actions and GitLab CI/CD, underscores my commitment to 
              delivering high-quality, efficient, and robust software solutions. I excel in collaborative environments, leveraging my 
              skills to drive impactful projects that seamlessly bridge the gap between development and deployment.
            </p>
            <p>
              Passionate about innovation and driven by a continuous learning mindset, I am poised to contribute my expertise to 
              dynamic teams in driving technological advancements and achieving project success.
            </p>
            <p>
              You are very welcome in my personal portfolio website. Please feel free to take a look at the apps and samples 
              I worked on and also browse my GitHub profile.
            </p>
            <p>
              Don't hesitate to download my resume and send an email!
            </p>
          </Content>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About;
