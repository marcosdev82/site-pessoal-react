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
export const ContentArticle = styled.article`
    margin-bottom: 20px;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1px;
    
`;