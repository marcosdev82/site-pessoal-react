import { createGlobalStyle } from 'styled-components';

const portraitImg  = '../../assets/images/background-node.svg'; 

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scrollbar-width: thin; /* Largura fina da scrollbar */
        scrollbar-color: #072326 ${props => props.theme.colors.tertiary}; 
    } 
    html, body, #root{
        height: 100vh;
        background-color:#070c15;
        flex: 1;
    }
    body {
        background-image: url(${portraitImg});
        background-color: #070c15;
        background-position: 80%;
        background-size: cover;
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
    p {
        color: ${props => props.theme.colors.white}; 
    }

`;
