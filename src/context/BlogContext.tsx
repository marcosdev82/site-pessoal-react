import React, { createContext, useEffect, useState, ReactNode, useMemo } from 'react';
import axios from 'axios';
import { PostType, Category, BlogContextType } from '../types/posts';

export const BlogContext = createContext<BlogContextType | undefined>(undefined);

interface BlogProviderProps {
  children: ReactNode;
  itemsPerPage?: number;
}

export const BlogProvider = ({ children, itemsPerPage = 3 }: BlogProviderProps) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPosts, setTotalPosts] = useState(0);

  const fetchPosts = React.useCallback(async (page: number = currentPage) => {
    setIsLoading(true);
    try {
      const response = await axios.get<PostType[]>(
        `${process.env.REACT_APP_API}/posts`,
        {
          params: {
            page,
            per_page: itemsPerPage,
          },
        }
      );

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
  }, [currentPage, itemsPerPage]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get<Category[]>(`${process.env.REACT_APP_API}/categories`);
      setCategories(response.data);
    } catch (error) {
      console.error('Erro ao carregar as categorias:', error);
    }
  };

  const getPostById = React.useCallback(async (id: number): Promise<PostType | null> => {
    try {
      const response = await axios.get<PostType>(`${process.env.REACT_APP_API}/posts/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao carregar o post com ID ${id}:`, error);
      return null;
    }
  }, []);

  const changePage = React.useCallback((page: number) => {
    if (page >= 1 && page <= totalPages) {
      fetchPosts(page);
    }
  }, [totalPages, fetchPosts]);

  useEffect(() => {
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
      getPostById, // Aqui está a função adicionada no contexto
    }),
    [
      posts,
      categories,
      currentPage,
      totalPages,
      totalPosts,
      isLoading,
      changePage,
      fetchPosts,
      itemsPerPage,
      getPostById,
    ]
  );

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
