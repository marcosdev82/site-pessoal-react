import styled from "styled-components";

export const Aside = styled.aside`
    position: relative;
    display: flex;
    max-height: calc(100vh - 40px);  
    & .sidebar {
        border: 1px solid rgb(151, 151, 151);
        max-height: 500px;
        width: 278px; 
        max-width: calc(310px - 40px);  
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 8px;
        position: sticky;
        top: 20px;  
        overflow-y: auto;  
        height: auto;  
       
    }

    @media (max-width: 576px) {
        display: none;
    }
`;
