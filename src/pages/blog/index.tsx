import React, {Suspense} from 'react';
import PostList from './PostList';
import { BlogProvider } from '../../contexts/BlogContext';

const Blog = () => {
    return (

        <BlogProvider>
            <Suspense fallback={<p>Carregando posts...</p>}>
                <PostList />
            </Suspense>
        </BlogProvider>

    );
};

export default Blog;