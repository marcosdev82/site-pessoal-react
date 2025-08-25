import { useContext } from 'react';
import { PostsContext } from '../contexts/PostsContext'

export const usePosts = () => {
    const context = useContext(PostsContext);
    if (!context) {
        throw new Error('usePosts deve ser usado dentro de PostsProvider');
    }
    return context;
};
