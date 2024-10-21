import React from 'react';
import { Container, About, Description, Portrait, Image, SocialMedia, Curriculo } from './styles';
import { Instagram, LinkedIn, GitHub, FileDownload } from '@mui/icons-material';
import Skills from '../skills';

const Content: React.FC = () => {
    return (
        <Container>
            <About>
                <Description>
                    {/* <h1>MARCOS TAVARES</h1> */}
                    <h2>DESENVOLVEDOR FULSTACK</h2>
                    <p>Eu destrincho problemas complexos de experiência do usuário para criar soluções 
                        focadas na integridade que conectam bilhões de pessoas. </p>
                        <SocialMedia>

                            <Curriculo>
                                <a href='http://marcostavares.dev.br/'>Download CV <FileDownload style={{ fontSize: 16 }}/></a>
                            </Curriculo>

                            <a href='http://marcostavares.dev.br/' className="social"><LinkedIn style={{ fontSize: 18 }} /></a>
                            <a href='http://marcostavares.dev.br/' className="social"><Instagram style={{ fontSize: 18 }}/></a>
                            <a href='http://marcostavares.dev.br/' className="social"><GitHub style={{ fontSize: 16 }}/></a>
                        </SocialMedia>
                </Description>
                <Portrait>
                    <Image />
                </Portrait>
               

            </About>
            <Skills />
        </Container>

    );
}
export default Content;