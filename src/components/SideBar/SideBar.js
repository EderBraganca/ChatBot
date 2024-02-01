import styled from 'styled-components';

export const Container = styled.div`  
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #962038;
  width: 30%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 0;
  border-right: 1px solid black;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 30%;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;