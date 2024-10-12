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
`;