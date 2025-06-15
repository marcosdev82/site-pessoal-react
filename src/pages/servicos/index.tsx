import React from 'react';
import { Helmet } from 'react-helmet-async';
import ListarServicos from './listar-servicos';
import EntryTitle from '../../components/entrytitle';

// Suponha que você tenha um componente estilizado para o conteúdo
import { Content } from '../../styles/PageStyles'; // ajuste conforme o seu projeto

const Servicos = () => {
    return (
        <>
            <Helmet>
                <title>Serviços - Marcos Tavares Desenvolvedor Fullstack</title>
                <meta
                    name="description"
                    content="Confira os serviços oferecidos por Marcos Tavares, desenvolvedor fullstack especializado em JavaScript, React, Node.js e WordPress."
                />
                <link rel="canonical" href="https://marcostavares.dev.br/servicos" />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <EntryTitle title="Serviços" />

            <Content>
                <p>Ofereço soluções completas em desenvolvimento web, com foco em:</p>
                <ul>
                    <li>Desenvolvimento de sites institucionais e landing pages</li>
                    <li>Criação de sistemas personalizados com React, Node.js e Laravel</li>
                    <li>Integrações com APIs e automações</li>
                    <li>Otimização de performance e SEO técnico</li>
                    <li>Criação e manutenção de temas e plugins WordPress</li>
                </ul>

                {/* Lista dinâmica de serviços */}
                <ListarServicos />
            </Content>
        </>
    );
};

export default Servicos;
