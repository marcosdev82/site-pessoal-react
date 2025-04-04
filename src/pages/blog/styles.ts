import styled from "styled-components";

export const EntryContent = styled.section`
    display: flex;
    min-height: 100px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 2rem;
`;
export const Content = styled.section`
    flex-grow: 1;
    padding: 20px;
`;
export const Article = styled.article`
    margin-bottom: 20px;
    border-radius: 8px;
    background: linear-gradient(to left,rgba(43, 247, 145, 0.7) 0%,rgba(83, 176, 234, 0.54) 100%);
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1px;
    
`;

export const CardPost = styled.div`
    background-color: #000;
    width: 100%;
    padding: 20px 20px 60px;
    color:rgb(107, 107, 107);
    position: relative;
    display: inline-flex;
    display: flex;
    gap: 20px;
    flex-direction: row;
    border-radius: 8px;
    border: 3px solid transparent;


    h2 {
        font-size: 1.5rem;
        margin-bottom: 10px;
        font-weight: 600;
    }
    & p {
       color: #bbbbbb;
       line-height: 1.5;
    }

    @media (max-width: 576px) { 
        flex-direction: column;
    }
`;
export const Form = styled.input``;