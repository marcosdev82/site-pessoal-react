// src/components/PostList.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../../context/BlogContext';

const PostList = () => {
    const { posts } = useContext(BlogContext);

    return (
        <div>
            <h2>Todos os Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;