import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.5rem;
  background: #3d3dff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  transition: filter 0.2s;
  cursor: pointer;
  
  &:hover {
    filter: brightness(0.9);
  }
`;
