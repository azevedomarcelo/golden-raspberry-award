import { Link } from "react-router-dom";
import styled from "styled-components";

export const SideBarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #ddd;
  height: 100vh;
  min-width: 250px;
  padding: 2rem;
  margin: 0 2rem 0 0;
`;

interface LinkProps {
  isCurrentPage?: boolean;
}

export const Anchor = styled(Link) <LinkProps>`
  color: ${(props) => (props.isCurrentPage ? '#6e6eff' : 'gray')};
`