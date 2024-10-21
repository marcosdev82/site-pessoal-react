import styled from 'styled-components';

/**
 * Layout 
 * MH = Main Header
 * AS = Aside
 * CT = Content
 * FT = Footer
 */

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr repeat(6, minmax(auto, 12em)) 1fr;
    grid-template-rows: minmax(1em, auto) 1fr auto minmax(1em, auto);
    position: relative;
    overflow: hidden;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 322px;
        height: 308px;
        border-radius: 50%;
        background: ${props => props.theme.colors.tertiary};
        background: -o-linear-gradient(190deg, ${props => props.theme.colors.tertiary} 0%, rgba(115, 67, 210, 0) 100%);
        background: linear-gradient(260deg, ${props => props.theme.colors.tertiary} 0%, rgba(115, 67, 210, 0) 100%);
        -webkit-filter: blur(150px);
        filter: blur(150px);
        margin-right: -5%;
        margin-top: -5%;
        z-index: 0;
    }
    @media (max-width: 576px) {
       display: flex;
       flex-direction: column;
    }
`;