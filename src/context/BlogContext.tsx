import React, { createContext, useEffect, useState, ReactNode, useMemo } from 'react';
import axios from 'axios';

interface ImageSize {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  filesize: number;
  source_url: string;
}

interface MediaDetails {
  width: number;
  height: number;
  file: string;
  filesize: number;
  sizes: ImageSize;
}

interface Category {
  id: number;
  slug: string;
  name: string;
}

interface AvatarUrls {
  [size: number]: string; // Tamanhos dinâmicos como 24, 48, 96
}

interface AuthorData {
  id?: number;
  name?: string;
  email?: string;
  description?: string;
  avatar_urls?: AvatarUrls;
}

interface Post {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  media_details?: MediaDetails[];
  date: string;
  categories_details?: Category[];
  author_data?: AuthorData[];
  slug: string;
}

// Interface para o contexto do blog
interface BlogContextType {
  posts: Post[];
  categories: Category[];
}

// Criação do contexto
export const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Props do provider
interface BlogProviderProps {
  children: ReactNode;
}

// Provider do blog
export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, categoriesResponse] = await Promise.all([
          axios.get<Post[]>('https://marcostavares.dev.br/wp/wp-json/wp/v2/posts'),
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