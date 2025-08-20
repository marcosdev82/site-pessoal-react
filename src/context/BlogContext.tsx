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

  const fetchPosts = React.useCallback(async (page: number = 1) => {
    setIsLoading(true);

    try {
      const response = await axios.get<PostType[]>(
        `${import.meta.env.VITE_API}/posts`,
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
      setCurrentPage(page); // Isso deve vir após o fetch, como já está
    } catch (error) {
      console.error('Erro ao carregar os posts:', error);
    } finally {
      setIsLoading(false);
    }
  }, [itemsPerPage]); // Remova currentPage daqui


  const fetchCategories = async () => {
    try {
      const response = await axios.get<Category[]>(`${import.meta.env.VITE_API}/categories`);
      console.log(import.meta.env.VITE_API)
      setCategories(response.data);
    } catch (error) {
      console.error('Erro ao carregar as categorias:', error);
    }
  };

  const getCategoryBySlug = React.useCallback(async (slug: string): Promise<Category | null> => {
    try {
      const response = await axios.get<Category[]>(`${import.meta.env.VITE_API}/categories`, {
        params: { slug }
      });

      return response.data.length > 0 ? response.data[0] : null;
    } catch (error) {
      console.error(`Erro ao buscar categoria com slug "${slug}":`, error);
      return null;
    }
  }, []);

  const getPostBySlug = React.useCallback(async (slug: string): Promise<PostType | null> => {
    try {
      const response = await axios.get<PostType>(`${import.meta.env.VITE_API}/posts?slug=${slug}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao carregar o post com slug ${slug}:`, error);
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
  }, [fetchPosts]);

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
      getPostBySlug,
      getCategoryBySlug,
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
      getPostBySlug,
      getCategoryBySlug,
    ]
  );

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
