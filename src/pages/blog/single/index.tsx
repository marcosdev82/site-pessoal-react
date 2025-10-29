import React, { Suspense } from 'react';
import { BlogProvider } from '../../../contexts/BlogContext';
import PostContent from './PostContent'
import PreloaderContent from '../../../components/preloader';

const Blog = () => {
    return (

        <BlogProvider>
            <Suspense fallback={<PreloaderContent />}>
                <PostContent />
            </Suspense>
        </BlogProvider>

    );
};

export default Blog;