import styled from "styled-components";

export const EntryMeta = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem 0;
    align-items: center;
    justify-content: start;
    font-size: 0.9rem;
    position: absolute;
    bottom: 0;
    color:rgb(211, 211, 211);

    .entry-category {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .entry-category a {
        padding: 0.2rem 0.5rem;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.1);
        color: #fff;
        text-decoration: none;
        font-size: 0.8rem;
        transition: background-color 0.3s ease;
    }
`;
