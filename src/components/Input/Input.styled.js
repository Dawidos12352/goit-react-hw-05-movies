import styled from 'styled-components';

export const Field = styled.input`
  padding: 4px 4px;
  width: 250px;
  outline: none;
  margin-right: 5px;
  &:hover,
  &:focus {
    color: black;
    border: 2px solid black;
  }
`;

export const Button = styled.button`
  padding: 4px 4px;
  color: black;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: black;
    border: 2px solid black;
  }
`;