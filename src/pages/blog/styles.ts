import styled from "styled-components";

export const EntryTitle = styled.section``;

export const EntryContent = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  min-height: 100px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr; /* tudo em uma coluna */
    gap: 1.5rem;
  }
`;

export const Content = styled.section`
  flex-grow: 1;

  & figure {
    margin-bottom: 20px;
    padding: 0;
  }

  & figure img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  & p {
    margin-bottom: 20px;
  }

  & time {
    font-size: 14px;
    color: rgba(255, 255, 255, 1);
  }
`;

export const Article = styled.article`
  margin-bottom: 20px;
  border-radius: 8px;
  background: linear-gradient(
    to left,
    rgba(43, 247, 145, 0.7) 0%,
    rgba(83, 176, 234, 0.54) 100%
  );
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1px;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const CardPost = styled.div`
  background-color: #000;
  width: 100%;
  padding: 20px 20px 60px;
  color: rgb(107, 107, 107);
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 20px;
  border-radius: 8px;
  border: 3px solid transparent;

  h2,
  h2 a {
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: 600;
    color: #bbbbbb;
    text-decoration: none;
  }

  & p {
    color: #bbbbbb;
    line-height: 1.5;
  }

  @media (max-width: 576px) {
    flex-direction: column; /* empilha os elementos */
    align-items: flex-start;
    padding: 20px;
    gap: 15px;
  }
`;

export const Form = styled.input``;
