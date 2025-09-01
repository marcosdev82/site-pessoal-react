import { useContext } from 'react';
import { PostsContext } from '../contexts/PostsContext';

export const usePosts = () => {
    const context = useContext(PostsContext);


    console.log(context)
    if (!context) {
        throw new Error('usePosts must be used within a PostsProvider');
    }
    return context;
};
