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

            <title>Sobre mim - Marcos Tavares Desenvolvedor Full Stack</title>
            <meta name="description" content="Marcos Tavares, desenvolvedor full stack natural de Porto Alegre (RS), atualmente morando em Fortaleza (CE). Formado em Análise e Desenvolvimento de Sistemas, apaixonado por desenvolvimento de software e aprendizado contínuo. Crio soluções digitais robustas, escaláveis e intuitivas, unindo design e funcionalidade para gerar resultados." />
            <link rel="canonical" href="https://marcostavares.dev.br/sobre" />
            <meta name="robots" content="index, follow" />
            <meta name="keywords" content="desenvolvedor full stack, desenvolvimento web, aplicações escaláveis, criação de sites, sistemas web, design responsivo, programação front-end, programação back-end, React, Node.js, Laravel, desenvolvimento de software, soluções digitais, programador full stack, Marcos Tavares, Fortaleza, Porto Alegre" />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Sobre mim - Marcos Tavares Desenvolvedor Full Stack" />
            <meta property="og:description" content="Marcos Tavares, desenvolvedor full stack natural de Porto Alegre (RS), atualmente em Fortaleza (CE). Formado em Análise e Desenvolvimento de Sistemas e apaixonado por tecnologia, cria soluções digitais robustas, escaláveis e funcionais." />
            <meta property="og:url" content="https://marcostavares.dev.br/sobre" />
            <meta property="og:site_name" content="Marcos Tavares Full Stack" />
            <meta property="article:publisher" content="https://www.facebook.com/marcostavares.dev" />

        </>
    );
};

export default Sobre;
