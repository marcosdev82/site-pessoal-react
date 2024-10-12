import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root{
        height: 100%;
        background-color:#070c15;
    }
    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }
    button {
        cursor: pointer;
    }
    h1,h2,h3,h4,h5,h6 {
        color: #09f0b4;
    }
`;
