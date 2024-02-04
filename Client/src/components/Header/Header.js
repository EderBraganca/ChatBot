import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  > svg {
    width: 3vh;
    height: 3vh;
    margin-top: 1%;
    margin-left: 1%;
    cursor: pointer;
    z-index: 100;
  }
`;