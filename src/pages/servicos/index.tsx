import React from 'react';
import { Helmet } from 'react-helmet-async';

import { EntryTitle } from './styles';

const Servicos: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Serviços - Marcos Tavares Fullstack</title>
                <meta name="description" content="Meus serviços" />
            </Helmet>
            <EntryTitle>
                <h1>Serviços</h1>
            </EntryTitle>
        </>
    );
};

export default Servicos;
