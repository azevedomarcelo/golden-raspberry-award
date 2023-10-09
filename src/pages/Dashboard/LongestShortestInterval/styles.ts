import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #fff;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 0.25rem;
  -webkit-box-shadow: 2px 2px 9px -1px #999999;
  -moz-box-shadow: 2px 2px 9px -1px #999999;
  box-shadow: 2px 2px 9px -1px #999999;
`;

export const Content = styled.div`
  margin-top: 1rem;
  >p{
    margin-bottom: 0.25rem;
  }
`;

export const Title = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Text = styled.p`
  font-size: 1rem;
`