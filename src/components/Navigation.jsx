import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 0.5rem;
`;

const NavItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.8rem;
`;

const NavIcon = styled.span`
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
`;

const Navigation = () => {
  return (
    <NavWrapper>
      <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <NavLink to="/feed">
          <NavIcon>🏠</NavIcon>
          Feed
        </NavLink>
      </NavItem>
      <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <NavLink to="/upload">
          <NavIcon>📤</NavIcon>
          Upload
        </NavLink>
      </NavItem>
      <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <NavLink to="/profile">
          <NavIcon>👤</NavIcon>
          Profile
        </NavLink>
      </NavItem>
    </NavWrapper>
  );
};

export default Navigation;
