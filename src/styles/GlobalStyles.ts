import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scrollbar-width: thin; /* Largura fina da scrollbar */
        scrollbar-color: #072326 ${props => props.theme.colors.tertiary}; /* Polegar (thumb) e fundo (track) */
    }
    html, body, #root{
        height: 100vh;
        background-color:#070c15;
        flex: 1;
    }
    *, button, input {
        border: 0;
        outline: 0;
        font-family: "Inter", sans-serif;

    }
    button {
        cursor: pointer;
    }
    h1,h2,h3,h4,h5,h6 {
        color: #09f0b4;
    }
    overflow-y: scroll;

`;
