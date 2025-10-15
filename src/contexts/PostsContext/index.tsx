import { fetchPostsApi } from "../../services/postsApi"
import {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
} from "react";
import { useParams } from "react-router-dom";
import { PostType, BlogContextType, Category } from "../../types/posts";

interface PostsProviderProps {
    children: React.ReactNode;
    itemsPerPage?: number;
}

export const PostsContext = createContext<BlogContextType | null>(null);

export const PostsProvider = ({
    children,
    itemsPerPage = 3,
}: PostsProviderProps) => {
    const { slug } = useParams<{ slug: string }>();

    const [posts, setPosts] = useState<PostType[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    // 🔹 Memoizar fetchPosts
    const fetchPosts = useCallback(
        async (
            page = 1,
            category_id?: number,
            category_slug?: string,
            customSlug?: string,
            id?: number
        ) => {
            const queryParams = new URLSearchParams();
            queryParams.set("page", page.toString());
            queryParams.set("per_page", itemsPerPage.toString());

            if (category_id) queryParams.set("categories", category_id.toString());
            if (category_slug) queryParams.set("categories_slug", category_slug);
            if (customSlug) queryParams.set("slug", customSlug);
            if (id) queryParams.set("id", id.toString());

            try {
                setIsLoading(true);
                const res = await fetch(
                    `${import.meta.env.VITE_API}/posts?${queryParams}`
                );
                const data = await res.json();

                const total = res.headers.get("X-WP-Total") ?? "0";
                const totalPages = res.headers.get("X-WP-TotalPages") ?? "1";

                setPosts(data);
                setTotalPosts(Number(total));
                setTotalPages(Number(totalPages));
                setCurrentPage(page);
            } catch (error) {
                console.error("Erro ao buscar posts:", error);
            } finally {
                setIsLoading(false);
            }
        },
        [itemsPerPage]
    );

    const changePage = useCallback(
        (page: number) => {
            fetchPosts(page, undefined, undefined, slug);
        },
        [fetchPosts, slug]
    );

    const getPostBySlug = useCallback(
        async (slug: string): Promise<PostType | null> => {
            await fetchPosts(1, undefined, undefined, slug);
            const foundPost = posts.find((post) => post.slug === slug);
            return foundPost ?? null;
        },
        [fetchPosts, posts]
    );

    // 🔹 Busca inicial (se tiver slug, busca pelo slug)
    useEffect(() => {
        if (slug) {
            fetchPosts(1, undefined, undefined, slug);
        } else {
            fetchPosts();
        }
    }, [fetchPosts, slug]);

    return (
        <PostsContext.Provider
            value={{
                posts,
                categories,
                currentPage,
                totalPages,
                totalPosts,
                itemsPerPage,
                isLoading,
                fetchPosts,
                changePage,
                getPostBySlug,
            }}
        >
            {children}
        </PostsContext.Provider>
    );
};