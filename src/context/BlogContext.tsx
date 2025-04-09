import React, { createContext, useEffect, useState, ReactNode, useMemo } from 'react';
import axios from 'axios';
import { PostType, Category, BlogContextType } from '../types/posts';

// Criação do contexto
export const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Props do provider
interface BlogProviderProps {
  children: ReactNode;
  itemsPerPage?: number;
}

// Provider do blog
export const BlogProvider = ({ children, itemsPerPage = 3 }: BlogProviderProps) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPosts, setTotalPosts] = useState(0);

  const fetchPosts = async (page: number = currentPage) => {
    setIsLoading(true);
    try {
      const response = await axios.get<PostType[]>(
        'https://marcostavares.dev.br/wp/wp-json/wp/v2/posts',
        {
          params: {
            page,
            per_page: itemsPerPage,
          },
        }
      );

      // A API WordPress retorna o total de posts no header 'X-WP-Total'
      const wpTotal = parseInt(response.headers['x-wp-total'] || '0', 10);
      const wpTotalPages = parseInt(response.headers['x-wp-totalpages'] || '1', 10);

      setPosts(response.data);
      setTotalPosts(wpTotal);
      setTotalPages(wpTotalPages);
      setCurrentPage(page);
    } catch (error) {
      console.error('Erro ao carregar os posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get<Category[]>(
        'https://marcostavares.dev.br/wp/wp-json/wp/v2/categories'
      );
      setCategories(response.data);
    } catch (error) {
      console.error('Erro ao carregar as categorias:', error);
    }
  };

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      fetchPosts(page);
    }
  };

  useEffect(() => {
    // Carrega os dados iniciais
    const loadInitialData = async () => {
      await Promise.all([fetchPosts(1), fetchCategories()]);
    };

    loadInitialData();
  }, []);

  const value = useMemo(
    () => ({
      posts,
      categories,
      currentPage,
      totalPages,
      itemsPerPage,
      isLoading,
      changePage,
      fetchPosts,
      totalPosts,
    }),
    [posts, categories, currentPage, totalPages, totalPosts, isLoading]
  );

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};