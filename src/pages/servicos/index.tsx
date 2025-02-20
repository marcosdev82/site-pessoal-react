import React from 'react';
import { Helmet } from 'react-helmet-async';

import { EntryTitle } from './styles';
import ListarSevicos from './listar-servicos';

const Servicos = () => {
    return (
        <>
            <Helmet>
                <title>Serviços - Marcos Tavares Desenvolvedor Fullstack</title>
                <meta name="description" content="Marcos Tavares, desenvolvedor fullstack especializado em Java Script, Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados." />
                <link rel="canonical" href="https://marcostavares.dev.br/servicos" />
                <meta name="robots" content="index, follow"></meta>
                <meta name="keywords" content="desenvolvedor fullstack, desenvolvimento web, Serviços, aplicações escaláveis, criação de sites, sistemas web, design responsivo, programação front-end, programação back-end, React, Node.js, Laravel, desenvolvimento de software, soluções digitais, programador fullstack, Marcos Tavares" />
                <meta property="og:locale" content="pt_BR"/> 
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Serviços - Marcos Tavares Fullstack"/>
                <meta property="og:description" content="Marcos Tavares,  Serviços, desenvolvedor fullstack especializado em Java Script, Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados."/>
                <meta property="og:url" content="https://marcostavares.dev"/>
                <meta property="og:site_name" content="Marcos Tavares FullStack"/>
                <meta property="article:publisher" content="https://www.facebook.com/marcostavares.dev"/>
                {/* <meta property="article:modified_time" content="2025-01-27T18:36:24+00:00"/> */}
                {/* <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@marcostavares.dev"/> */}
                {/* <meta name="google-site-verification" content=""/> */}
            </Helmet>
            <EntryTitle>
                <h1>Serviços</h1>
            </EntryTitle>

            <ListarSevicos />
            
        </>
    );
};

export default Servicos;
