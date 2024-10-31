import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import LandingPage from './components/LandingPage';
import FeedPage from './components/FeedPage';
import UploadPage from './components/UploadPage';
import ProfilePage from './components/ProfilePage';
import Navigation from './components/Navigation';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 480px;
  margin: 0 auto;
  background-color: var(--background-color);
`;

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Navigation />
      </AppWrapper>
    </Router>
  );
};

export default App;
