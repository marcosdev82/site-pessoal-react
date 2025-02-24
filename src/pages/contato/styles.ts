import styled from "styled-components";

export const EntryTitle = styled.section`
    min-height: 120px;
    width: 100%;
    display: flex;
    align-items: center;

    &h1{
        color: #09f0b4;
        font-size: 22px;
        font-weight: 900;
        margin-top: 2px;
        font-family: "Gugi", sans-serif;
        position: relative;
    }

`;
export const Content = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: minmax(1em, auto) 1fr auto minmax(1em, auto); */
`;
export const ContactForm = styled.div`
    grid-column: 1/1;
    min-height: 600px;
    padding: 0;

    & form div {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-bottom: 5px;
    }
    
    & form label {
        display: inline-block;
        color: #f2f2f2;
        font-size: 12px;
    }
    & form input {
        height: 34px;
        padding: 5px;
    }
    & form input::placeholder {
        color: gray; /* Define a cor */
        opacity: 1; /* Garante visibilidade total */
        font-style: italic; /* Opcional: deixa em itálico */
        font-size: 10px;
        text-transform: uppercase;
    }
    & form input::-webkit-input-placeholder { /* Chrome, Safari */
        color: gray; /* Define a cor */
        opacity: 1; /* Garante visibilidade total */
        font-style: italic; /* Opcional: deixa em itálico */
        font-size: 10px;
        text-transform: uppercase;
    }
    & form input::-moz-placeholder { /* Firefox */
        color: gray; /* Define a cor */
        opacity: 1; /* Garante visibilidade total */
        font-style: italic; /* Opcional: deixa em itálico */
        font-size: 10px;
        text-transform: uppercase;
    }
    & form  input:-ms-input-placeholder { /* Internet Explorer */
        color: gray; /* Define a cor */
        opacity: 1; /* Garante visibilidade total */
        font-style: italic; /* Opcional: deixa em itálico */
        font-size: 10px;
        text-transform: uppercase;
    }
    & form textarea {
       height: 70px;
       padding: 5px;
       margin-bottom: 10px;
    }
    & form textarea::placeholder {
        color: gray; /* Define a cor */
        font-size: 10px; /* Ajusta o tamanho */
        font-style: italic; /* Opcional: deixa em itálico */
        text-transform: uppercase;
        opacity: 1; /* Garante visibilidade total */
    }

    & form button { 
        display: flex;
        padding: 10px 30px;
        text-decoration: none;
        color: #000;
        line-height: 25px;
        flex-direction: row;
        align-items: center;
        gap: 6px;
        position: relative;
        background: transparent;
        z-index: 1;
    }
    & button::before {
        content: "";
        position: absolute;
        top: -1px;
        left: -1px;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        background-color: #09f0b4;
        z-index: 0;
        clip-path: polygon(0 0, 100% 0, 100% calc(100% - 25px), calc(100% - 25px) 100%, 0 100%);
    }
    & button span {
        color: #000;
        position: relative;
        z-index: 2;
        font-weight: 600;
        font-size: 12px;
        text-transform: uppercase;
    }
    & .error {
        font-size: 9px;
        text-transform: uppercase;
    }
`;
