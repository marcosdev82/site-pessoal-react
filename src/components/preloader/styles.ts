import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    text-align: center;
    gap: 10px;
    color: #09f0b4;
`;

export  const Spinner = styled.div`
    border: 4px solid rgba(9, 240, 180, 0.2);
    border-top: 4px solid #09f0b4;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${rotate} 1s linear infinite;
`;