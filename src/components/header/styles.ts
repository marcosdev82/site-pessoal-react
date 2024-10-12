import styled from 'styled-components';

export const Container = styled.header`
    grid-column: span 8;
    /* background-color: ${props => props.theme.colors.black}; */
    height: 70px;
    border-bottom: 1px solid ${props => props.theme.colors.border100};
    
    position: relative;
    -webkit-box-shadow: 0 0 30px rgba(12, 236, 182, 0.29);
    box-shadow: 0 0 30px rgba(12, 236, 182, 0.29);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentHeader = styled.div`
    width: 100%;
    max-width: 1100px;
    display: flex;
    align-items: center;
    gap: 10px;
`;
export const LogoImage = styled.img`
    width: 30px;
    height: 30px;
`;
export const Text = styled.h1`
    color: ${props => props.theme.colors.tertiary};
    font-size: 22px;
    font-weight: 900;
    margin-top: 2px;
`;
export const Span = styled.span`
    color: ${props => props.theme.colors.white};
    font-size: 22px;
    font-weight: 900;
`;
export const ContentNav = styled.nav`
`;