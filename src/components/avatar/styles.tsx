import styled from "styled-components";

export const EntryAvatar = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    
    img {
        border-radius: 50%;
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
    
    span {
        font-size: 14px;
        color: #333;
    }
`;