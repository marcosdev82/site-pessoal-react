import styled from "styled-components";

export const TermsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;  
`;

export const ListTerms = styled.ul`
    list-style: none;
    padding:0;
    margin: 2px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
 
    & li a {
        color: #fff;
        text-decoration: none;
        font-size: 14px;
    }
`;