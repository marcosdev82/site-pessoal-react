import React from 'react';
import EntryTitle from '../../components/entrytitle';
import { Content } from '../servicos/styles'
import ListarSevicos from './listar-servicos';

const Servicos = () => {
    return (
        <>
            <EntryTitle title="Serviços" />
            {/* Lista dinâmica de serviços */}
            <Content>
                <h2>Ofereço soluções completas em desenvolvimento web, com foco na criação de interfaces modernas, sistemas eficientes e experiências digitais que conectam marcas ao seu público de forma estratégica.</h2>
                <ListarSevicos />
            </Content>


            <title>Serviços - Marcos Tavares Desenvolvedor full stack</title>
            <meta
                name="description"
                content="Confira os serviços oferecidos por Marcos Tavares, desenvolvedor full stack especializado em JavaScript, React, Node.js e WordPress. "
            />
            <link rel="canonical" href="https://marcostavares.dev.br/servicos" />
            <meta name="robots" content="index, follow" />
        </>
    );
};

export default Servicos;
