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
        color: #fff;
    }

    & ul {
        list-style: none;
        padding-left: 0;
        margin-bottom: 20px;
    }

    & ul li {
        margin-bottom: 20px;
        border-radius: 8px;
        background: linear-gradient(to left, rgba(43, 247, 145, 0.7) 0%, rgba(83, 176, 234, 0.54) 100%);
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        padding: 1px;
    }

    & ul li div {
        background-color: #000;
        width: 100%;
        padding: 30px;
        color: rgb(107, 107, 107);
        position: relative;
        display: inline-flex;
        display: flex;
        gap: 20px;
        flex-direction: row;
        border-radius: 8px;
        border: 3px solid transparent;
        color: #fff;
        font-size: 18px;

        & FontAwesomeIcon {
            font-size: 24px;
        }
    }

`;
