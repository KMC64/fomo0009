import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const EngagementOverlay = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LikeButton = styled(motion.button)`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const LikeCount = styled(motion.span)`
  font-size: 14px;
  margin-top: 5px;
`;

const VideoPlayer = ({ video, onSwipe }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <VideoWrapper>
      <Video src={video.url} loop autoPlay muted playsInline />
      <EngagementOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <LikeButton onClick={handleLike} whileTap={{ scale: 0.9 }}>
          {liked ? '❤️' : '🤍'}
        </LikeButton>
        {liked && (
          <LikeCount
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {likeCount}
          </LikeCount>
        )}
      </EngagementOverlay>
    </VideoWrapper>
  );
};

export default VideoPlayer;
