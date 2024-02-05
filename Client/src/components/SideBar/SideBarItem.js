import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 10%;

  > svg {
    margin: 20px;
    width: 10vh;
    height: 10vh;
    cursor: pointer;
    z-index: 100;
  }
`;