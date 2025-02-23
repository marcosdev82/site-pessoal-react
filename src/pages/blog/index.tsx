import React from 'react';
import { Helmet } from 'react-helmet-async';
import EntryTitle from '../../components/entrytitle';

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Blog - Marcos Tavares Desenvolvedor Fullstack</title>
                <meta name="description" content="Marcos Tavares, desenvolvedor fullstack especializado em JavaScript. Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados." />
                <link rel="canonical" href="https://marcostavares.dev.br/blog" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="desenvolvedor fullstack, desenvolvimento web, aplicações escaláveis, criação de sites, sistemas web, design responsivo, programação front-end, programação back-end, React, Node.js, Laravel, desenvolvimento de software, soluções digitais, programador fullstack, Marcos Tavares" />
                <meta property="og:locale" content="pt_BR"/> 
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Blog - Marcos Tavares Fullstack"/>
                <meta property="og:description" content="Marcos Tavares, desenvolvedor fullstack especializado em JavaScript. Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados."/>
                <meta property="og:url" content="https://marcostavares.dev.br/blog"/>
                <meta property="og:site_name" content="Marcos Tavares FullStack"/>
                <meta property="article:publisher" content="https://www.facebook.com/marcostavares.dev"/>
            </Helmet>

            <EntryTitle title='Blog' />

 
        </>
    );
};

export default Blog;
