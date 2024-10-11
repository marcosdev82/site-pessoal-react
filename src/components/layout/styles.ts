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
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;
    grid-template-areas: 
        'AS MH'
        'AS CT'
        'AS FT';
    height: 100vh;
`;