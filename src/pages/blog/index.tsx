import React, { Suspense } from 'react';
import styled, { keyframes } from 'styled-components';
import PostList from './PostList';
import { BlogProvider } from '../../contexts/BlogContext';
import PreloaderContent from '../../components/preloader';

const Blog = () => {

    return (
        <BlogProvider>
            <Suspense fallback={<PreloaderContent />}>
                <PostList />
            </Suspense>
        </BlogProvider>
    );
};

export default Blog;
