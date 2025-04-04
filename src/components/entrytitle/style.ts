import styled from "styled-components";

export const SectionEntryTitle = styled.div`
    min-height: 120px;
    width: 100%;
    display: flex;
    align-items: center;

    & h1{
        color: #09f0b4;
        font-size: 26px;
        font-weight: 900;
        margin-top: 2px;
        /* font-family: "Gugi", sans-serif; */
        position: relative;
        display: block; /* Garanta que não está como 'none' */
        visibility: visible;
    }

`;
