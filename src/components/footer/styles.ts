import styled from 'styled-components';

export const Container = styled.footer`
    grid-column: span 8;
    background-color: ${props => props.theme.colors.black};
    /* border-top: 1px solid ${props => props.theme.colors.border100}; */ 
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ContentFooter = styled.div`
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 40px 15px; 
    justify-content: center;
    color: ${props => props.theme.colors.white};
`;
export const LogoImageF = styled.img`
    width: 50px;
    width: 50px;
`;
export const Copywriter = styled.p`
    color: ${props => props.theme.colors.tertiary};
    font-size: 14px;
`;