import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from 'react';
import axios from 'axios';
import {
  PostType,
  Category,
  BlogContextType,
  CategoryPostsResult,
} from '../types/posts';

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

  const fetchPosts = React.useCallback(
    async (
      page?: number,
      category_id?: number,
      category_slug?: string,
      slug?: string,
      id?: number
    ) => {
      setIsLoading(true);

      try {
        const response = await axios.get<PostType[]>(
          `${import.meta.env.VITE_API}/posts`,
          {
            params: {
              page: page ?? 1,
              per_page: itemsPerPage,
              categories: category_id,
              category_slug,
              slug,
              id,
            },
          }
        );

        const wpTotal = parseInt(response.headers['x-wp-total'] || '0', 10);
        const wpTotalPages = parseInt(response.headers['x-wp-totalpages'] || '1', 10);

        console.log('Params:', { page, category_id, category_slug, slug, id });


        setPosts(response.data);
        setTotalPosts(wpTotal);
        setTotalPages(wpTotalPages);
        setCurrentPage(page ?? 1);
      } catch (error) {
        console.error('Erro ao carregar os posts:', error);
      } finally {
        setIsLoading(false);
      }
    },
    [itemsPerPage]
  );

  const fetchCategories = async () => {
    try {
      const response = await axios.get<Category[]>(`${import.meta.env.VITE_API}/categories`);
      setCategories(response.data);
    } catch (error) {
      console.error('Erro ao carregar as categorias:', error);
    }
  };

  const getPostBySlug = React.useCallback(
    async (slug: string): Promise<PostType | null> => {
      try {
        const response = await axios.get<PostType[]>(
          `${import.meta.env.VITE_API}/posts?slug=${slug}`
        );
        return response.data[0] || null;
      } catch (error) {
        console.error(`Erro ao carregar o post com slug ${slug}:`, error);
        return null;
      }
    },
    []
  );

  const getPostsByCategorySlug = React.useCallback(
    async (slug: string): Promise<CategoryPostsResult | null> => {
      try {
        const categoryRes = await axios.get<Category[]>(
          `${import.meta.env.VITE_API}/categories?slug=${slug}`
        );
        if (categoryRes.data.length === 0) return null;

        const category = categoryRes.data[0];

        const postsRes = await axios.get<PostType[]>(
          `${import.meta.env.VITE_API}/posts?categories=${category.id}`
        );

        return {
          categoryName: category.name,
          posts: postsRes.data,
        };
      } catch (error) {
        console.error(`Erro ao carregar posts da categoria ${slug}:`, error);
        return null;
      }
    },
    []
  );

  const changePage = React.useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        fetchPosts(page);
      }
    },
    [totalPages, fetchPosts]
  );

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
      getPostsByCategorySlug,
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
      getPostsByCategorySlug,
    ]
  );

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
