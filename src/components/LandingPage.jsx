import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useUser } from '../contexts/UserContext';

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: var(--background-color);
  color: var(--text-color);
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const BackgroundElement = styled(Tilt)`
  position: absolute;
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  opacity: 0.1;
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: 5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const StatsContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatNumber = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-color);
`;

const StatLabel = styled.span`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const SignUpButton = styled(motion.button)`
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  background-color: var(--primary-color);
  color: var(--background-color);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

const LandingPage = () => {
  const { users } = useUser();
  const navigate = useNavigate();

  const totalContent = users.reduce((sum, user) => sum + user.creations.length, 0);

  return (
    <LandingWrapper>
      <BackgroundElement
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        transitionSpeed={1500}
        scale={1.1}
        gyroscope={true}
        style={{ top: '10%', left: '10%' }}
      />
      <BackgroundElement
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        transitionSpeed={1500}
        scale={1.1}
        gyroscope={true}
        style={{ bottom: '10%', right: '10%' }}
      />
      <ContentWrapper>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          FOMO
        </Title>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Short form video platform for creatives
        </Subtitle>
        <StatsContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Stat>
            <StatNumber>{users.length}</StatNumber>
            <StatLabel>Creators</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>{totalContent}</StatNumber>
            <StatLabel>Videos</StatLabel>
          </Stat>
        </StatsContainer>
        <SignUpButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/signup')}
        >
          Join Now
        </SignUpButton>
      </ContentWrapper>
    </LandingWrapper>
  );
};

export default LandingPage;
