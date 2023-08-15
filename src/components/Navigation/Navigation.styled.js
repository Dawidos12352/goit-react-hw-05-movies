import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1920px;
  width: 100%;
`;

export const Header = styled.header`
  width: 100%;
  max-width: 1870px;
  padding: 25px 25px;
  border-bottom: 2px solid black;

`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-right: 30px;

  &.active {
    border: 1px solid black;
  }
`;