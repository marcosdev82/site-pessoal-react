import React, { useContext, useEffect } from 'react';
import Sidebar from '../../../components/sidebar';
import { EntryContent } from './styles';
import Head from '../../../components/head';
import { Content, EntryTitle } from '../styles';
import { BlogContext } from '../../../context/BlogContext';

const Single = () => {
    const blogContext = useContext(BlogContext);

    useEffect(() => {
        if (blogContext) {
            blogContext.getPostById(123).then(post => {
                if (post) {
                    console.log('Post:', post);
                }
            });
        }
    }, []);

    return (
        <>
            <Head
                title='Blog - Marcos Tavares Fullstack'
                description='Marcos Tavares, desenvolvedor fullstack especializado em JavaScript. Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados.'
                canonical='https://marcostavares.dev.br/blog'
                robot='index, follow'
                keywords='desenvolvedor fullstack, desenvolvimento web, aplicações escaláveis, criação de sites, sistemas web, design responsivo, programação front-end, programação back-end, React, Node.js, Laravel, desenvolvimento de software, soluções digitais, programador fullstack, Marcos Tavares'
                local='pt_BR'
                type='website'
                siteName='Marcos Tavares FullStack'
                publish='https://www.facebook.com/marcostavares.dev'
            />

            <section className='entry-title'>
                <EntryTitle title="Single post" />
            </section>

            <EntryContent>
                <Sidebar />
                <Content>
                    <h1>Single post</h1>
                    <p>Conteúdo do post aqui...</p>
                </Content>
            </EntryContent>

        </>
    );
};

export default Single;
