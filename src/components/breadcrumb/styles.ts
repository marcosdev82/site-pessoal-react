import styled from 'styled-components';

export const Nav = styled.nav`
    color: #fff;
    display: flex;

    ol > li {
        display: flex;
    }

    ol > li > div {
        margin: 0 10px;
    }
    
    ol > li > a {
        color: ${({ theme }) => theme.colors.tertiary}; 
        text-decoration: none;
    }
`
