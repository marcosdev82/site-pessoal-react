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
    margin: 0 auto;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px 0;

    & h2 {
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 20px; 
        color: #333;
    }

    & ul {
        list-style: none;
        padding-left: 0;
        margin-bottom: 20px;
    }

    & ul li {
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 1.5;   
        color: #fff;
    }

`;
