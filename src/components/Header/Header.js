import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  > svg {
    width: 1%;
    height: 1%;
    margin-top: 1%;
    margin-left: 1%;
    cursor: pointer;
    z-index: 100;
  }
`;