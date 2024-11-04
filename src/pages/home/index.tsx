import React from 'react';
import { Helmet } from 'react-helmet-async';
import { About, Description, Portrait, Image, SocialMedia, Curriculo } from './styles';
import { Instagram, LinkedIn, GitHub, FileDownload } from '@mui/icons-material';
import Skills from '../../components/skills';

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Home - Marcos Tavares Desenvolvedor Fullstack</title>
                <meta name="description" content="Página inicial de Marcos Tavares, desenvolvedor fullstack especializado em Java Script, Type Script, React, Node.js, PHP, Laravel, Mongo DB, Postgres, Mysql, Docker e WordPress" />
            </Helmet>
            
            <About>
                <Description>
                    {/* <h1>MARCOS TAVARES</h1> */}
                    <h2>DESENVOLVEDOR FULLSTACK</h2>
                    <p>Transformo ideias em realidade digital, construindo aplicações robustas e escaláveis que conectam design e funcionalidade com excelência.</p>
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

export default Home;
