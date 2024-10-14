import React from 'react';
import { Container, About, Description, Portrait, Image } from './styles';

const Content: React.FC = () => {
    return (
        <Container>
            <About>
                <Description>
                    <h1>MARCOS TAVARES</h1>
                    <h2>DESENVOLVEDOR FULSTACK</h2>
                    <p>Eu destrincho problemas complexos de experiência do usuário para criar soluções 
                        focadas na integridade que conectam bilhões de pessoas. </p>
                </Description>
                <Portrait>
                    <Image />
                </Portrait>
            </About>
        </Container>
    );
}

export default Content;