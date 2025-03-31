import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../../context/BlogContext';

interface Category {
    id: number;
    slug: string;
    name: string;
}

interface Post {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    featured_media: number;
    date: string;
    _embedded?: { [key: string]: any };
    categories?: Category | null;
    permalink: string;
}

const PostList = () => {
    const { posts } = useContext(BlogContext) as { posts: Post[] }; // Tipando o contexto

    return (
        <div>
            <h2>Todos os Posts</h2>
            {posts.length > 0 ? (
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <Link to={`/post/${post.id}`}>{post.title.rendered}</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhum post encontrado.</p>
            )}
        </div>
    );
};

export default PostList;