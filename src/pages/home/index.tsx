import React from 'react';
import { Helmet } from 'react-helmet-async';
import { About, Description, Portrait, Image, SocialMedia, Curriculo } from './styles';
import { Instagram, LinkedIn, GitHub, FileDownload } from '@mui/icons-material';
import Skills from '../../components/skills';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - Marcos Tavares Desenvolvedor Fullstack</title>
                <meta name="description" content="Marcos Tavares, desenvolvedor fullstack especializado em Java Script, Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados." />
                <link rel="canonical" href="https://marcostavares.dev.br/" />
                <meta name="keywords" content="desenvolvedor fullstack, desenvolvimento web, aplicações escaláveis, criação de sites, sistemas web, design responsivo, programação front-end, programação back-end, React, Node.js, Laravel, desenvolvimento de software, soluções digitais, programador fullstack, Marcos Tavares" />
                <meta property="og:locale" content="pt_BR"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="home - Marcos Tavares Fullstack"/>
                <meta property="og:description" content="Marcos Tavares, desenvolvedor fullstack especializado em Java Script, Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados."/>
                <meta property="og:url" content="https://marcostavares.dev"/>
                <meta property="og:site_name" content="Marcos Tavares FullStack"/>
                <meta property="article:publisher" content="https://www.facebook.com/marcostavares.dev"/>
                {/* <meta property="article:modified_time" content="2025-01-27T18:36:24+00:00"/> */}
                {/* <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@marcostavares.dev"/> */}
                {/* <meta name="google-site-verification" content=""/> */}
            </Helmet>
            
            <About>
                <Description>
                    {/* <h1>MARCOS TAVARES</h1> */}
                    <h2>DESENVOLVEDOR FULLSTACK</h2>
                    <p>Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados..</p>
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
