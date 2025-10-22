import styled, { css, keyframes } from 'styled-components';

interface ContainerProps {
    isFixed?: boolean;
}

const slideDown = keyframes`
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
    }
`;

export const Container = styled.header<ContainerProps>`
    grid-column: span 8;
    height: 70px;
    border-bottom: 1px solid ${props => props.theme.colors.border400};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    position: ${({ isFixed }) => (isFixed ? 'fixed' : 'relative')};
    z-index: 10;
    width: 100%;
    background-color: ${({ isFixed }) => (isFixed ? '#00000090' : '#00000030')}; 
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: ${({ isFixed }) => isFixed ? '0 0 30px rgba(12, 236, 182, 0.29)' : '0 4px 30px rgba(0, 0, 0, 0.1)'};
    backdrop-filter: blur(8px);
    ${({ isFixed }) => isFixed &&
        css`
            animation: ${slideDown} 1s ease forwards;
        `}

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
        @media (max-width: 576px) {
            font-size: 8px;
            width: 16px;
            height: 16px;
            line-height: 14px;
            right: -20px;
        }
    }
`;

export const ContentHeader = styled.div`
    width: 100%;
    max-width: 1160px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 15px;
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

    a {
        color: ${props => props.theme.colors.tertiary};
        font-size: 22px;
        font-weight: 900;
        margin-top: 0;
        font-family: 'Gugi', sans-serif;
        position: relative;
        margin: 0;
        line-height: 32px;
        text-decoration: none;

        @media (max-width: 576px) {
            font-size: 18px;
        }
    }
`;
export const Span = styled.span`
    color: ${props => props.theme.colors.white};
    font-size: 22px;
    font-weight: 900;
    font-family: "Gugi", sans-serif;
    @media (max-width: 576px) {
        font-size: 18px;
    }
`;
