import React, { useContext } from 'react';
import { BlogContext } from '../../context/BlogContext';
import Post from './Post';

const PostList = () => {
    const context = useContext(BlogContext);

    if (!context) {
        return <p>Carregando...</p>;
    }

    const { posts } = context;

    return (
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
                    author_data={post.author_data} // Corrigido de autho_data para author_data
                    slug={post.slug}
                />
            ))}
        </div>
    );
};
export default PostList;