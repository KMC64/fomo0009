import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  font-size: 1rem;
  background-color: var(--primary-color);
  color: var(--background-color);
  border: none;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  color: var(--primary-color);
  text-decoration: none;
`;

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { addUser, login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && email.trim() && password.trim()) {
      const newUser = {
        username,
        email,
        bio: '',
        followers: 0,
        following: 0,
        creations: [],
      };
      const createdUser = addUser(newUser);
      login(createdUser.id);
      navigate('/explore');
    }
  };

  return (
    <SignUpWrapper>
      <h1>Sign Up</h1>
      <SignUpForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Sign Up</Button>
      </SignUpForm>
      <p>Already have an account? <StyledLink to="/login">Log in</StyledLink></p>
    </SignUpWrapper>
  );
};

export default SignUpPage;
 all fields.');
    }
  };

  return (
    <SignUpWrapper>
      <h1>Sign Up for FOMO</h1>
      <SignUpForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Sign Up</Button>
      </SignUpForm>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <p>Already have an account? <StyledLink to="/login">Log in</StyledLink></p>
    </SignUpWrapper>
  );
};

export default SignUpPage;
