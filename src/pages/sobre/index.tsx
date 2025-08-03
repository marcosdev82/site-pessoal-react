import React from 'react';
import EntryTitle from '../../components/entrytitle';
import { Content } from '../servicos/styles';

const Sobre = () => {
    return (
        <>
            <EntryTitle title='Sobre mim' />

            <Content>
                <p>
                    Olá! Sou Marcos Tavares, natural de Porto Alegre/RS, formado em Análise e Desenvolvimento de Sistemas e atualmente residente em Fortaleza/CE. Tenho verdadeira paixão por desenvolvimento de software e já atuei com diversas tecnologias em projetos profissionais e pessoais. Sempre que possível, compartilho meu conhecimento com a comunidade e estou em constante busca por evolução e aprendizado contínuo.
                </p>
            </Content>

            <title>Sobre min - Marcos Tavares Desenvolvedor full stack</title>
            <meta name="description" content="Marcos Tavares, desenvolvedor full stack especializado em JavaScript. Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados." />
            <link rel="canonical" href="https://marcostavares.dev.br/sobre" />
            <meta name="robots" content="index, follow" />
            <meta name="keywords" content="desenvolvedor full stack, desenvolvimento web, aplicações escaláveis, criação de sites, sistemas web, design responsivo, programação front-end, programação back-end, React, Node.js, Laravel, desenvolvimento de software, soluções digitais, programador full stack, Marcos Tavares" />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Sobre - Marcos Tavares full stack" />
            <meta property="og:description" content="Marcos Tavares, desenvolvedor full stack especializado em JavaScript. Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados." />
            <meta property="og:url" content="https://marcostavares.dev.br/sobre" />
            <meta property="og:site_name" content="Marcos Tavares full stack" />
            <meta property="article:publisher" content="https://www.facebook.com/marcostavares.dev" />
        </>
    );
};

export default Sobre;
