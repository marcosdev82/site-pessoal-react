import React, { useContext, useEffect, useState } from 'react';
import EntryTitle from '../../../components/entrytitle';
import Sidebar from '../../../components/sidebar';
import Head from '../../../components/head';
import { Content, EntryContent } from '../styles';
import { BlogContext } from '../../../context/BlogContext';

const SinglePost = () => {
    const blogContext = useContext(BlogContext);
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (blogContext) {
            blogContext.getPostBySlug('teste-2')
                .then(fetchedPost => {
                    if (fetchedPost) {
                        setPost(fetchedPost);
                    } else {
                        console.log('Post not found');
                    }
                })
                .catch(error => {
                    console.error('Error fetching post:', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [blogContext]);

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
                    {loading ? (
                        <p>Carregando...</p>
                    ) : post ? (
                        <>
                            <h1>{post.title}</h1>
                            <p>{post.content}</p>
                        </>
                    ) : (
                        <p>Post não encontrado.</p>
                    )}
                </Content>
            </EntryContent>
        </>
    );
};

export default SinglePost;