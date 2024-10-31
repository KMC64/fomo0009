import React from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Username = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const UserNumber = styled.span`
  font-size: 1rem;
  color: var(--secondary-color);
`;

const ProfilePage = () => {
  // This is a placeholder. In a real app, you'd fetch user data from your backend.
  const user = {
    username: 'cryptouser',
    userNumber: 42,
    avatarUrl: 'https://example.com/avatar.jpg',
  };

  return (
    <ProfileWrapper>
      <ProfileHeader>
        <Avatar src={user.avatarUrl} alt={user.username} />
        <Username>{user.username}</Username>
        <UserNumber>#{user.userNumber}</UserNumber>
      </ProfileHeader>
      {/* Add more profile content here */}
    </ProfileWrapper>
  );
};

export default ProfilePage;
