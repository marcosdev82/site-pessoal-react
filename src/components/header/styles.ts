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

    .cicle {
        display: block;
        border: 1px solid;
        border-radius: 50%;
        width: 19px;
        height: 19px;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-content: center;
        line-height: 17px;
        font-weight: 400;
        position: absolute;
        top: -8px;
        right: -26px;
    }
`;

export const ContentHeader = styled.div`
    width: 100%;
    max-width: 1160px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: row;
    justify-content: space-between;
`;
export const LogoWrap = styled.div`
    display: flex;
    flex-direction: row;
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
    font-family: "Gugi", sans-serif;
    position: relative;
`;
export const Span = styled.span`
    color: ${props => props.theme.colors.white};
    font-size: 22px;
    font-weight: 900;
    font-family: "Gugi", sans-serif;
`;
export const NavIcon = styled.div`
    display: none;
`;
export const MenuIcon = styled.img`
    width: 40px;
    height: 40px;
`;
export const MenuContent = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: end;

    ul{
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        gap: 40px;
    }
    ul li a {
        color: ${props => props.theme.colors.white};
        text-decoration: none;
        position: relative;
        padding-bottom:5px;
        transition: color 0.3s ease; 
        text-transform: uppercase;
    }
    ul li a::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #09f0b4;
        transition: transform 0.3s ease;
        transform: scaleX(0); /* Inicialmente escondido */
        transform-origin: right;
        background: -o-linear-gradient(190deg, #6ff2cb 0%, rgba(115, 67, 210, 0) 100%);
        background: linear-gradient(260deg, #6ff2cb 0%, rgba(115, 67, 210, 0) 100%);
        /* -webkit-filter: blur(1px);
        filter: blur(1px); */
    }
    ul li a:hover {
        color:#09f0b4;
    }
    ul li a:hover::before {
        transform: scaleX(1); /* Efeito de hover: expande o pseudo-elemento */
        transform-origin: left;
    }

`;