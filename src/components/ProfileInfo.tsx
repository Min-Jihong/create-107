import React from 'react';

interface ProfileInfoProps {
  username: string;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ username }) => {
  return (
    <div>
      <h1>Your Profile</h1>
      <p>Username: {username}</p>
    </div>
  );
}
