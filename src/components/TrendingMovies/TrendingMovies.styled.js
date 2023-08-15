import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TrendingItem = styled.li`
  padding: 5px 0;
`;

export const TrendingLink = styled(NavLink)`
  padding: 3px 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover,
  &:focus {
    border: 1px solid black;
  }
`;