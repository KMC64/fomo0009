import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const FileInput = styled.input`
  margin-bottom: 1rem;
`;

const MusicSelect = styled.select`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const UploadButton = styled(motion.button)`
  background-color: var(--primary-color);
  color: var(--background-color);
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
`;

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedMusic, setSelectedMusic] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleMusicChange = (event) => {
    setSelectedMusic(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Implement IPFS upload logic here
    console.log('Uploading file:', selectedFile);
    console.log('Selected music:', selectedMusic);
  };

  return (
    <UploadWrapper>
      <Title>Upload a Video</Title>
      <UploadForm onSubmit={handleSubmit}>
        <FileInput type="file" accept="video/*" onChange={handleFileChange} />
        <MusicSelect value={selectedMusic} onChange={handleMusicChange}>
          <option value="">Select music</option>
          <option value="song1">Free Song 1</option>
          <option value="song2">Free Song 2</option>
          <option value="song3">Free Song 3</option>
        </MusicSelect>
        <UploadButton
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Upload
        </UploadButton>
      </UploadForm>
    </UploadWrapper>
  );
};

export default UploadPage;
