import React, { Suspense, useContext, useEffect } from 'react';
import { BlogContext } from '../../contexts/BlogContext';
import Post from './post';
import EntryTitle from '../../components/entrytitle';
import Head from '../../components/head';
import Pagination from '../../components/pagination';
import { BlogContextType } from '../../types/posts';
import { Content, EntryContent } from './styles';
import Sidebar from '../../components/sidebar';

const PostList = () => {

    const {
        posts,
        currentPage,
        itemsPerPage,
        totalPosts,
        changePage,
        fetchPosts,
        isLoading,
    } = useContext(BlogContext) as BlogContextType;

    useEffect(() => {
        fetchPosts(currentPage);
    }, [currentPage, fetchPosts]);

    if (!posts) {
        return <p>Carregando...</p>;
    }

    const title = 'Blog - Marcos Tavares Fullstack';

    return (
        <>
            <Head
                title="Blog - Marcos Tavares Fullstack"
                description="Marcos Tavares, desenvolvedor fullstack especializado em JavaScript. Dê vida às suas ideias com soluções digitais inteligentes..."
                canonical="https://marcostavares.dev.br/blog"
                robot="index, follow"
                keywords="desenvolvedor fullstack, desenvolvimento web..."
                local="pt_BR"
                type="website"
                siteName="Marcos Tavares FullStack"
                publish="https://www.facebook.com/marcostavares.dev"
            />

            <section className="entry-title">
                <EntryTitle title={title} />
            </section>

            <EntryContent>
                <Suspense fallback={<p>Carregando categorias...</p>}>
                    <Sidebar />
                </Suspense>
                <Content>
                    {posts.length > 0 ? (
                        posts.map((post) => (
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
                        ))
                    ) : !isLoading && (
                        <p>Nenhum post encontrado.</p>
                    )}
                </Content>
            </EntryContent>

            {posts.length > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalItems={totalPosts}
                    itemsPorPagina={itemsPerPage}
                    mudarPagina={changePage}
                />
            )}

        </>
    );
};

export default PostList;
