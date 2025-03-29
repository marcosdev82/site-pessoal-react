import styled from "styled-components";

export const Aside = styled.aside`
    position: relative;
    min-height: 60px;
    & .sidebar {
        border: 1px solid rgba(151, 151, 151, 0.32);
        width: 278px; 
        max-width: calc(310px - 40px);  
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 8px;
        position: sticky;
        top: 20px;  
        overflow-y: auto;  
        display: flex;
       
    }

    @media (max-width: 576px) {
        display: none;
    }
`;
