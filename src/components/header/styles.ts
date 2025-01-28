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
    padding: 0 15px;

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
    color: ${props => props.theme.colors.tertiary};
    font-size: 22px;
    font-weight: 900;
    margin-top: 0;
    font-family: 'Gugi', sans-serif;
    position: relative;
    margin: 0;
    line-height: 32px;

    @media (max-width: 576px) {
        font-size: 18px;
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
