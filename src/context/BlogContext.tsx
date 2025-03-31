import React, { createContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  content: string;
  categoryId: number;
}

interface Category {
  id: number;
  slug: string;
  name: string;
}

interface BlogContextType {
  posts: Post[];
  categories: Category[];
}

export const BlogContext = createContext<BlogContextType | unknown>(null);

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, categoriesResponse] = await Promise.all([
          axios.get<Post[]>('https://marcostavares.dev.br/wp/wp-json/wp/v2/posts?_embed'),
          axios.get<Category[]>('https://marcostavares.dev.br/wp/wp-json/wp/v2/categories'),
        ]);

        setPosts(postsResponse.data);
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <BlogContext.Provider value={{ posts, categories }}>
      {children}
    </BlogContext.Provider>
  );
};