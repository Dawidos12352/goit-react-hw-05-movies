import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BtnBack = styled.button`
  padding: 5px 10px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 14px;
  margin-right: 25px;
  cursor: pointer;

  &:hover,
  &:focus {
    border: 2px solid black
  }
`;

export const Link = styled(NavLink)`
  padding: 4px 11px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 14px;
  margin-right: 25px;

  &:hover,
  &:focus {
   border: 1px solid black;
  }
`;
