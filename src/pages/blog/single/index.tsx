import React from 'react';
import PostList from '../PostList';
import { BlogProvider } from '../../../contexts/BlogContext';
import PostContent from './PostContent'

const Blog = () => {
    return (

        <BlogProvider>
            <PostContent />
        </BlogProvider>

    );
};

export default Blog;