import React from 'react';
import { Helmet } from 'react-helmet-async';
import { EntryTitle } from './styles';

const Contato = () => {
    return (
        <>
            <Helmet>
                <title>Contato - Marcos Tavares Desenvolvedor Fullstack</title>
                <meta name="description" content="Contato" />
            </Helmet>
            <EntryTitle>
                <h1>Contato</h1>
            </EntryTitle>
        </>
    );
}

export default Contato;
