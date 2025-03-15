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
    border: 1px solid rgb(90 90 90);
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    background-color: #000;
    color:rgb(107, 107, 107);
    
    & p {
       color: #bbbbbb
    }
`;