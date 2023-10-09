import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const TableContent = styled.table`
 white-space: nowrap;
  border: 1px solid #bbb;
  border-collapse: collapse;
  width: 100%;
`;

export const Thead = styled.thead``;

export const Th = styled.th`
  background: #dfdfdf;
  padding: 0.5rem;
  border: 1px solid #bbb;
`;

export const Tr = styled.tr`
  text-align: left;
  border: 1px solid #bbb;

  &:nth-child(even) {
    background: #f0f0f0;
  }
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
  border: 1px solid #bbb;
  padding: 0.5rem;
`;