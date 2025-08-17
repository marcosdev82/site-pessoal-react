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
    background: ${({ theme }) => theme.colors.tertiary};
    background: linear-gradient(
      260deg,
      ${({ theme }) => theme.colors.tertiary} 0%,
      rgba(115, 67, 210, 0) 100%
    );
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

export const Container = styled.main`
    display: grid:  !important;
    grid-column: 2 / 8; /* corrigido: 8/2 estava invertido */
    min-height: 600px;
    padding: 0 15px;
`;
