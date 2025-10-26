import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react";
import axios from "axios";
import {
  PostType,
  Category,
  BlogContextType,
  CategoryPostsResult,
} from "../types/posts";
import { useParams } from "react-router-dom";

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

  const { category_slug } = useParams();

  // =============================
  // Função principal de busca
  // =============================
  const fetchPosts = React.useCallback(
    async (page?: number, category_id?: number, slug?: string) => {
      setIsLoading(true);

      try {
        const response = await axios.get<PostType[]>(
          `${import.meta.env.VITE_API}/posts`,
          {
            params: {
              page,
              per_page: itemsPerPage,
              categories: category_id,
              slug,
            },
          }
        );

        const wpTotal = parseInt(response.headers["x-wp-total"] || "0", 10);
        const wpTotalPages = parseInt(
          response.headers["x-wp-totalpages"] || "1",
          10
        );

        console.log("Params enviados:", { page, category_id, slug });

        setPosts(response.data);
        setTotalPosts(wpTotal);
        setTotalPages(wpTotalPages);
        setCurrentPage(page);
      } catch (error) {
        console.error("Erro ao carregar os posts:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [itemsPerPage]
  );

  // =============================
  // Carrega categorias
  // =============================
  const fetchCategories = async () => {
    try {
      const response = await axios.get<Category[]>(
        `${import.meta.env.VITE_API}/categories`
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Erro ao carregar as categorias:", error);
    }
  };

  // =============================
  // Busca posts por slug da categoria
  // =============================
  const getPostsByCategorySlug = React.useCallback(
    async (slug: string, page: number = 1): Promise<void> => {
      try {
        const categoryRes = await axios.get<Category[]>(
          `${import.meta.env.VITE_API}/categories?slug=${slug}`
        );

        if (categoryRes.data.length === 0) {
          console.warn(`Categoria '${slug}' não encontrada.`);
          setPosts([]);
          return;
        }

        const category = categoryRes.data[0];
        await fetchPosts(page, category.id);
      } catch (error) {
        console.error(`Erro ao carregar posts da categoria ${slug}:`, error);
      }
    },
    [fetchPosts]
  );

  // =============================
  // Paginação
  // =============================
  const changePage = React.useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        if (category_slug) {
          getPostsByCategorySlug(category_slug, page); // Pass the page
        } else {
          fetchPosts(page);
        }
      }
    },
    [totalPages, fetchPosts, category_slug, getPostsByCategorySlug]
  );

  // =============================
  // Carregamento inicial
  // =============================
  useEffect(() => {
    const loadData = async () => {
      await fetchCategories();

      if (category_slug) {
        await getPostsByCategorySlug(category_slug);
      } else {
        await fetchPosts(1);
      }
    };

    loadData();
  }, [fetchPosts, getPostsByCategorySlug, category_slug]);

  // =============================
  // Contexto
  // =============================
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
      getPostsByCategorySlug,
    ]
  );

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};