import styled from 'styled-components';

export const Container = styled.div`
    grid-column: 8/2;
    min-height: 600px;
    padding: 0 15px;
`;
export const About = styled.section`
    min-height: 100px;
    margin: 60px 0 60px;
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 15px;
    @media (max-width: 576px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 20px 0 20px;
    }
`;
export const Description = styled.div`
    min-height: 100px;
    width: 50%;
    display: flex;
    flex-direction: column;
    h1 {
        font-size: 26px;
        color: #dbdbdb;
    }

    h2 {
    
        /* background-image: linear-gradient(to right, #09f0b4 0%, #fff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    font-size: 50px;
    color: #000;
    text-shadow: -1px -1px 0 #09f0b4,1px -1px 0 #09f0b4,-1px 1px 0 #09f0b4,1px 1px 0 #09f0b4;
    background-color: transparent; /* Fundo transparente */

    }

    p {
        color: #dbdbdb;
        font-size: 20px;
        margin: 20px 0 20px;
        line-height: 32px;
    }

    @media (max-width: 576px) {
        width: 100%;
        align-items: center;
        justify-content: center;
         h2 {
            font-size: 40px;
            color: #000;
            text-shadow: -1px -1px 0 #09f0b4, 1px -1px 0 #09f0b4, -1px 1px 0 #09f0b4, 1px 1px 0 #09f0b4;
            background-color: transparent;
            text-align: center;
            display: block;
        }
        p {
            text-align: center;
            font-size: 18px;
        }
    }
`;
export const Portrait = styled.div`
    min-height: 100px;
    width: 50%;
    display: flex;
    @media (max-width: 576px) {
        width: 100%;
        display: none;
    }
`;
export const Image = styled.div`

`;
export const Skills = styled.section`

`;
export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 0 20px;
    gap: 15px;
    .social {
        display: block;
        border: 1px solid #08f0b4;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        position: relative;
    }
    .social:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #09f0b4;
        -webkit-transform: scale(0);
        -ms-transform: scale(0);
        transform: scale(0);
        -webkit-transition: 0.3s;
        -o-transition: 0.3s;
        transition: 0.3s;
        border-radius: 50%;
        z-index: -1;
    }
    svg {
        fill: #09f0b4;
        z-index: 1;
    }
    .social:hover::before {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        z-index: 0;
    }
    .social:hover svg {
        fill: #000;
    }
`;

export const Curriculo = styled.div`

    a {
        display: flex;
        padding: 12px 20px; 
        text-decoration: none;
        color: #09f0b4;
        line-height: 25px;
        flex-direction: row;
        align-items: center;
        gap: 6px;
        position: relative;

        svg {
            fill: #09f0b4;
        }
            
    }

    a::before {
        content: "";
        position: absolute;
        top: -1px;
        left: -1px;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        background-color: #2BFDBE;
        z-index: -2;
        clip-path: polygon(0 0, 100% 0, 100% calc(100% - 25px), calc(100% - 25px) 100%, 0 100%);
    }

    a::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #2BFDBE;
        z-index: -1;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        clip-path: polygon(0 0, 100% 0, 100% calc(100% - 25px), calc(100% - 25px) 100%, 0 100%);
    }
    
`;