import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../../components/sidebar";
import Pagination from "../../../components/pagination";
import Post from "../post";
import { Content, EntryContent } from "../styles";
import EntryTitle from '../../../components/entrytitle';
import { usePosts } from "../../../hooks/usePosts";

const Category = () => {
    const { slug } = useParams<{ slug: string }>();

    const { posts, currentPage, setCurrentPage, totalPages, isLoading } = usePosts();

    const formattedTitle = 'formattedTitle';
    return (
        <>
            <section className='entry-title'>
                <EntryTitle title={formattedTitle} />
            </section>

            <EntryContent>
                <Sidebar />
                <Content>
                    {isLoading ? (
                        <p>Carregando posts...</p>
                    ) : posts.length > 0 ? (
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
                    ) : (
                        <p>Nenhum post encontrado nesta categoria.</p>
                    )}
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

export default Category;
