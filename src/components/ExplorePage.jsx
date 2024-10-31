import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import VideoPlayer from './VideoPlayer';
import { useUser } from '../contexts/UserContext';

// ... (keep the styled components)

const ExplorePage = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const { users } = useUser();
  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    const videos = users.flatMap(user => user.creations);
    setAllVideos(videos);
    console.log('All videos:', videos);
  }, [users]);

  const handleSwipe = (direction) => {
    if (direction === 'up' && currentVideoIndex < allVideos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else if (direction === 'down' && currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  console.log('Current video index:', currentVideoIndex);
  console.log('Current video:', allVideos[currentVideoIndex]);

  return (
    <ExploreWrapper>
      <AnimatePresence initial={false}>
        {allVideos.length > 0 && (
          <VideoContainer
            key={currentVideoIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <VideoPlayer
              video={allVideos[currentVideoIndex]}
              onSwipe={handleSwipe}
            />
          </VideoContainer>
        )}
      </AnimatePresence>
    </ExploreWrapper>
  );
};

export default ExplorePage;
