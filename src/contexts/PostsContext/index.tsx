import { createContext, useCallback, useEffect, useMemo, useState, ReactNode } from 'react';
import { useParams } from 'react-router-dom';

// Define TypeScript interfaces
interface PostType {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  categories: number[];
  // Add other relevant fields as needed
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface BlogContextType {
  posts: PostType[];
  categories: Category[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  itemsPerPage: number;
  isLoading: boolean;
  error: string | null;
  fetchPosts: (page?: number, categoryId?: number, categorySlug?: string, customSlug?: string, id?: number) => Promise<void>;
  changePage: (page: number) => void;
  getPostBySlug: (slug: string) => Promise<PostType | null>;
}

interface PostsProviderProps {
  children: ReactNode;
  itemsPerPage?: number;
}

// Create context
export const PostsContext = createContext<BlogContextType | null>(null);

/**
 * Provider for managing blog posts and categories from WordPress API.
 * @param children - React children to be wrapped by the provider.
 * @param itemsPerPage - Number of posts per page (default: 3).
 */
export const PostsProvider = ({ children, itemsPerPage = 3 }: PostsProviderProps) => {
  const { slug } = useParams<{ slug?: string }>();
  const [posts, setPosts] = useState<PostType[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Validate environment variable
  const API_URL = import.meta.env.VITE_API;
  if (!API_URL) {
    throw new Error('VITE_API environment variable is not defined.');
  }

  /**
   * Fetches posts from WordPress API with optional filters.
   * @param page - Page number for pagination.
   * @param categoryId - Category ID to filter posts.
   * @param categorySlug - Category slug to filter posts.
   * @param customSlug - Custom slug for filtering (e.g., post slug).
   * @param id - Post ID for single post fetching.
   */
  const fetchPosts = useCallback(
    async (
      page = 1,
      categoryId?: number,
      categorySlug?: string,
      customSlug?: string,
      id?: number
    ) => {
      const controller = new AbortController(); // For canceling requests
      const queryParams = new URLSearchParams({
        page: page.toString(),
        per_page: itemsPerPage.toString(),
        ...(categoryId && { categories: categoryId.toString() }),
        ...(categorySlug && { categories_slug: categorySlug }),
        ...(customSlug && { slug: customSlug }),
        ...(id && { include: id.toString() }),
      });

      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(`${API_URL}/posts?${queryParams}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const total = response.headers.get('X-WP-Total') ?? '0';
        const totalPages = response.headers.get('X-WP-TotalPages') ?? '1';

        setPosts(Array.isArray(data) ? data : [data]);
        setTotalPosts(Number(total));
        setTotalPages(Number(totalPages));
        setCurrentPage(page);
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError('Failed to fetch posts. Please try again later.');
          console.error('Error fetching posts:', err);
        }
      } finally {
        setIsLoading(false);
      }

      return () => controller.abort(); // Cleanup on unmount
    },
    [API_URL, itemsPerPage]
  );

  /**
   * Fetches categories from WordPress API.
   */
  const fetchCategories = useCallback(async () => {
    const controller = new AbortController();
    try {
      const response = await fetch(`${API_URL}/categories?per_page=100`, {
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setCategories(data);
    } catch (err) {
      if (err instanceof Error && err.name !== 'AbortError') {
        setError('Failed to fetch categories. Please try again later.');
        console.error('Error fetching categories:', err);
      }
    }

    return () => controller.abort();
  }, [API_URL]);

  /**
   * Changes the current page and fetches posts for that page.
   * @param page - The page number to navigate to.
   */
  const changePage = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        fetchPosts(page, undefined, undefined, slug);
      }
    },
    [fetchPosts, slug, totalPages]
  );

  /**
   * Fetches a single post by its slug.
   * @param slug - The slug of the post to fetch.
   * @returns The post object or null if not found.
   */
  const getPostBySlug = useCallback(
    async (slug: string): Promise<PostType | null> => {
      try {
        await fetchPosts(1, undefined, undefined, slug);
        return posts.find((post) => post.slug === slug) ?? null;
      } catch (err) {
        console.error('Error fetching post by slug:', err);
        return null;
      }
    },
    [fetchPosts, posts]
  );

  // Fetch posts and categories on mount or slug change
  useEffect(() => {
    fetchCategories();
    if (slug) {
      fetchPosts(1, undefined, undefined, slug);
    } else {
      fetchPosts();
    }
  }, [fetchPosts, fetchCategories, slug]);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      posts,
      categories,
      currentPage,
      totalPages,
      totalPosts,
      itemsPerPage,
      isLoading,
      error,
      fetchPosts,
      changePage,
      getPostBySlug,
    }),
    [posts, categories, currentPage, totalPages, totalPosts, itemsPerPage, isLoading, error, fetchPosts, changePage, getPostBySlug]
  );

  return <PostsContext.Provider value={contextValue}>{children}</PostsContext.Provider>;
};