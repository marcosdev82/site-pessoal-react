import React, { Suspense } from 'react';
import { BlogProvider } from '../../../contexts/BlogContext';
import PostContent from './PostContent'

const Blog = () => {
    return (

        <BlogProvider>
            <Suspense fallback={<p>Carregando posts...</p>}>
                <PostContent />
            </Suspense>
        </BlogProvider>

    );
};

export default Blog;