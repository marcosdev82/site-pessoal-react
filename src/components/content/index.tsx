import React from 'react';
import { About, Description, Portrait, Image, SocialMedia, Curriculo } from './styles';
import { Instagram, LinkedIn, GitHub, FileDownload } from '@mui/icons-material';
import Skills from '../skills';

const Content = () => {
    return (
        <>
            <About>
                <Description>
                    {/* <h1>MARCOS TAVARES</h1> */}
                    <h2>DESENVOLVEDOR FULSTACK</h2>
                    <p>Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados. </p>
                    <SocialMedia>
                        <Curriculo>
                            <a href='http://marcostavares.dev.br/'><span>Download CV</span> <FileDownload style={{ fontSize: 16 }}/></a>
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
        </>

    );
}
export default Content;