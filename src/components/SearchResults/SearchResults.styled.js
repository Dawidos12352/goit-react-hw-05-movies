import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 35px;
  list-style: none;
  margin: 45px 0 0 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px 5px;
  font-size: 14px;
  width: 160px;
  text-align: center;
`;

export const Image = styled.img`
  width: 100px;
  height: 150px;
  border-radius: 4px;
  margin-bottom: 5px;
`;

export const PlaceholderImage = styled.img`
  width: 100px;
  border-radius: 4px;
  margin-bottom: 5px;
`;

export const Name = styled.p`
  font-weight: 500;
`;

export const Year = styled.p`
  font-weight: 400;
`;

export const Link = styled(NavLink)`
  padding: 4px 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 14px;

  &:hover,
  &:focus {
   border: 1px solid black;
  }
`;

export const Error = styled.p`
  font-weight: 500;
  text-align: start;
  position: absolute;
  top: 120px;
  left: 25px;
`;