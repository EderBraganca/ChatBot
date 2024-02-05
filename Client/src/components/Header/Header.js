import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row; 
  margin-left: 12%;
  > svg {
    width: 3vh;
    margin-left: 1%;
    height: 3vh;
    margin-top: 1%;
    cursor: pointer;
    z-index: 100;
  }
`;