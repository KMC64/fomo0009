import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import VideoPlayer from './VideoPlayer';

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const VideoContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
`;

const FeedPage = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    // Fetch videos from IPFS or your backend
    // This is a placeholder for demonstration
    setVideos([
      { id: 1, url: 'https://example.com/video1.mp4' },
      { id: 2, url: 'https://example.com/video2.mp4' },
      { id: 3, url: 'https://example.com/video3.mp4' },
    ]);
  }, []);

  const handleSwipe = (direction) => {
    if (direction === 'up' && currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else if (direction === 'down' && currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  return (
    <FeedWrapper>
      <AnimatePresence initial={false}>
        <VideoContainer
          key={currentVideoIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {videos[currentVideoIndex] && (
            <VideoPlayer
              video={videos[currentVideoIndex]}
              onSwipe={handleSwipe}
            />
          )}
        </VideoContainer>
      </AnimatePresence>
    </FeedWrapper>
  );
};

export default FeedPage;
