import React from 'react';
import PostList from './PostList';
import { BlogProvider } from '../../context/BlogContext';

const Blog = () => {
    return (

        <BlogProvider>
            <PostList />
        </BlogProvider>

    );
};

export default Blog;