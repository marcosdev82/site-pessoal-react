import React from 'react';
import { Helmet } from 'react-helmet-async';
import EntryTitle from '../../components/entrytitle';
import { Content } from '../servicos/styles'
import ListarSevicos from './listar-servicos';

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

            <>

                <h2>Ofereço soluções completas em desenvolvimento web, com foco em:</h2>
                {/* Lista dinâmica de serviços */}
                <Content>
                    <ListarSevicos />
                </Content>
            </>
        </>
    );
};

export default Servicos;
