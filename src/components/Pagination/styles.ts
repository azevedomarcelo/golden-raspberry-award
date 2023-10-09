import styled from 'styled-components';

export const PaginationNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: #dfdfdf;
`;

interface LinkPaginationProps {
  currentPage?: boolean
}
export const LinkPagination = styled.a<LinkPaginationProps>`
  padding: 0.5rem 0.875rem;
  border-radius: 0.25rem;

  
  color: ${props => props.currentPage && '#fff'};
  background-color: ${props => props.currentPage && '#3d3dff'};
  
  cursor: pointer;
`