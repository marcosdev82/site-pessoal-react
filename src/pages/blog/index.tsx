import React from 'react';
import PostList from './PostList';
import { BlogProvider } from '../../contexts/BlogContext';

const Blog = () => {
    return (

        <BlogProvider>
            <PostList />
        </BlogProvider>

    );
};

export default Blog;