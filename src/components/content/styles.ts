import styled from 'styled-components';

export const Container = styled.div`
    grid-column: 8/2;
    min-height: 600px;
`;
export const About = styled.section`
    min-height: 100px;
    margin: 60px 0 60px;
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 15px;
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
    font-size: 65px;
  color: #000;
  text-shadow: -1px -1px 0 #09f0b4,1px -1px 0 #09f0b4,-1px 1px 0 #09f0b4,1px 1px 0 #09f0b4;
  background-color: transparent; /* Fundo transparente */

    }

    p {
        color: #dbdbdb;
        font-size: 20px;
        margin-top: 20px;
        line-height: 32px;
    }
`;
export const Portrait = styled.div`
    min-height: 100px;
    width: 50%;
    display: flex;
`;
export const Image = styled.div`

`;
export const Skills = styled.section`

`;