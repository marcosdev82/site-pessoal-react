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
    // border: 1px solid rgb(90 90 90);
    padding: 20px;
    color:rgb(107, 107, 107);
    position: relative;
    display: inline-flex;
    display: flex;
    gap: 20px;
    flex-direction: row;
    border-radius: 8px;
    border: 3px solid transparent;
    & p {
       color: #bbbbbb
    }
`;
export const Form = styled.input``;