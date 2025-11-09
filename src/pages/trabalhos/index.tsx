import React from 'react';
import EntryTitle from '../../components/entrytitle';
import { Content } from '../servicos/styles';
import Breadcrumb from '../../components/breadcrumb';
import { Grid } from './styles';
import Thumbnail from '../../components/thumbnails';

const Trabalhos = () => {
    const portfolio = [
        {
            id: 1,
            title: 'Quero um Pet',
            description: 'Plataforma para adoção de animais desenvolvida com React, Node.js e MongoDB.',
            image: 'https://marcostavares.dev.br/wpmt/wp-content/uploads/2025/11/jsjsjs-768x433.png',
            link: 'https://quero-um-pet.vercel.app/',
        },
        {
            id: 2,
            title: 'Geekwork Site',
            description: 'Site institucional desenvolvido em WordPress com design customizado e SEO otimizado.',
            image: 'https://marcostavares.dev.br/wpmt/wp-content/uploads/2025/11/jsjsjs-768x433.png',
            link: 'https://geekwork.com.br/',
        },
        {
            id: 3,
            title: 'Monitoramento de Saúde Pública',
            description: 'Sistema de monitoramento de dados de saúde em tempo real usando IoT e Node.js.',
            image: 'https://marcostavares.dev.br/wpmt/wp-content/uploads/2025/11/jsjsjs-768x433.png',
            link: 'https://github.com/marcos-tavares/monitoramento-saude',
        },
        {
            id: 4,
            title: 'Controle de Energia Residencial',
            description: 'Projeto IoT para monitorar e reduzir o consumo elétrico com app React Native.',
            image: 'https://marcostavares.dev.br/wpmt/wp-content/uploads/2025/11/jsjsjs-768x433.png',
            link: 'https://github.com/marcos-tavares/controle-energia',
        },
    ];

    return (
        <>
            <EntryTitle title='Projetos' />
            <Breadcrumb divider="/" />

            <Content>
                <Grid>
                    {portfolio.map((item) => (
                        <Thumbnail
                            key={item.id}
                            alt={item.title}
                            url={item.image}
                        />
                    ))}
                </Grid>
            </Content>

            <title>Projetos - Marcos Tavares Desenvolvedor Full Stack</title>
            <meta
                name="description"
                content="Veja os projetos desenvolvidos por Marcos Tavares — desenvolvedor full stack apaixonado por criar soluções digitais robustas, escaláveis e funcionais utilizando React, Node.js, Laravel e outras tecnologias modernas."
            />
            <link rel="canonical" href="https://marcostavares.dev.br/projetos" />
            <meta name="robots" content="index, follow" />
            <meta
                name="keywords"
                content="projetos, portfólio, desenvolvedor full stack, Marcos Tavares, React, Node.js, Laravel, desenvolvimento web, sistemas web, programação, software"
            />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Projetos - Marcos Tavares Desenvolvedor Full Stack" />
            <meta
                property="og:description"
                content="Portfólio de Marcos Tavares — desenvolvedor full stack com experiência em React, Node.js e Laravel. Conheça os principais projetos desenvolvidos."
            />
            <meta property="og:url" content="https://marcostavares.dev.br/projetos" />
            <meta property="og:site_name" content="Marcos Tavares Full Stack" />
            <meta property="article:publisher" content="https://www.facebook.com/marcostavares.dev" />
        </>
    );
};

export default Trabalhos;
