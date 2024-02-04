import styled from 'styled-components';

export const Container = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    right: 0;
    height: 100%;
    width: 200%;
    top: 0;
    z-index: -1;
    width: ${props => props.chat ? '100%' : '70%'};
    left: ${props => props.chat ? '0%' : '30'};
`;