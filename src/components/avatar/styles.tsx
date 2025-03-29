import styled from "styled-components";

export const EntryAvatar = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    a {
        display: flex;
    }
    
    img {
        border-radius: 50%;
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
    
    span {
        font-size: 14px;
        color: #d1d1d1;
    }
`;