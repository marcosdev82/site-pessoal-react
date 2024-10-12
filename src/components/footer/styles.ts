import styled from 'styled-components';

export const Container = styled.div`
    grid-column: span 8;
    background-color: #000;
    height: 100px;
    border-top: 1px solid ${props => props.theme.colors.border100};
    position: relative;
`;