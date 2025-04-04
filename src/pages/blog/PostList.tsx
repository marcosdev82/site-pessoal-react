import React, { useContext } from 'react';
import { BlogContext } from '../../context/BlogContext';
import Post from './Post';
import { EntryTitle } from '../contato/styles';
import Head from '../../components/head';

const PostList = () => {
    const context = useContext(BlogContext);

    if (!context) {
        return <p>Carregando...</p>;
    }

    const { posts } = context;
    const title = 'Blog - Marcos Tavares Fullstack';;

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
                <EntryTitle title={title} />
            </section>

            <div>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        date={post.date}
                        excerpt={post.excerpt}
                        media_details={post.media_details}
                        categories_details={post.categories_details}
                        author_data={post.author_data}
                        slug={post.slug}
                    />
                ))}
            </div >
        </>
    );
};
export default PostList;