import styled from "styled-components";

export const EntryAvatar = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 50%;
    overflow: hidden;

    a {
        display: flex;
    }
    
    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
    
    span {
        font-size: 14px;
        color: #d1d1d1;
    }
`;