import React from 'react';
import PostList from '../PostList';
import { BlogProvider } from '../../../context/BlogContext';
import PostContent from './PostContent'

const Blog = () => {
    return (

        <BlogProvider>
            <PostContent />
        </BlogProvider>

    );
};

export default Blog;