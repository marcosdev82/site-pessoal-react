import React, { createContext, useEffect, useState, ReactNode, useMemo } from 'react';
import axios from 'axios';
import { PostType, Category } from '../types/posts'

interface BlogContextType {
  posts: PostType[];
  categories: Category[];
}

export const BlogContext = createContext<BlogContextType | undefined>(undefined);

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, categoriesResponse] = await Promise.all([
          axios.get<PostType[]>('https://marcostavares.dev.br/wp/wp-json/wp/v2/posts'),
          axios.get<Category[]>('https://marcostavares.dev.br/wp/wp-json/wp/v2/categories'),
        ]);

        // console.log('Posts:', postsResponse.data); // Verifique os dados recebidos
        // console.log('Categories:', categoriesResponse.data); // Verifique os dados recebidos

        setPosts(postsResponse.data);
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };

    fetchData();
  }, []);

  const value = useMemo(() => ({ posts, categories }), [posts, categories]);

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};
