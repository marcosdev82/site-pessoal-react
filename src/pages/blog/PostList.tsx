import React, { useContext } from 'react';
import { BlogContext } from '../../context/BlogContext';
import Post from './post';
import EntryTitle from '../../components/entrytitle';
import Head from '../../components/head';
import Pagination from '../../components/pagination';
import { BlogContextType } from '../../types/posts';
import { Content, EntryContent } from './styles';
import Sidebar from '../../components/sidebar';


const PostList = () => {
    const { posts, currentPage, itemsPerPage, totalPosts, changePage } = useContext(BlogContext) as BlogContextType
    // const totalPages = Math.ceil(totalPosts / itemsPerPage);
    if (!posts) {
        return <p>Carregando...</p>;
    }

    const title = 'Blog - Marcos Tavares Fullstack';

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

            <EntryContent>
                <Sidebar />
                <Content>
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
                </Content>
            </EntryContent>

            <Pagination
                currentPage={currentPage}
                totalItems={totalPosts}
                itemsPorPagina={itemsPerPage}
                mudarPagina={changePage}
            />
        </>
    );
};
export default PostList;