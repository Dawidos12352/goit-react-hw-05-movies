import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Main = styled.main`
  padding: 25px 25px;
  max-width: 1920px;
`;

export const Homepage = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  border: 2px solid #ba704f;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover,
  &:focus {
    color: white;
    background-color: #ba704f;
  }
`;

export const Container = styled.div`
  text-align: center;
`;

export const Text = styled.p`
  font-size: 80px;
  font-weight: 600;
`;