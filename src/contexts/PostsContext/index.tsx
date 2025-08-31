import { createContext, useContext, useState, useEffect } from 'react';
import { PostType, BlogContextType, Category } from '../../types/posts';

interface PostsProviderProps {
    children: React.ReactNode;
    itemsPerPage?: number;
}

export const PostsContext = createContext<BlogContextType | null>(null);

export const PostsProvider = ({ children, itemsPerPage = 3 }: PostsProviderProps) => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);
    // const [isLoading, setIsLoading] = useState(false);



    const fetchPosts = async (
        page?: number,
        category_id?: number,
        category_slug?: string,
        slug?: string,
        id?: number
    ): Promise<void> => {

        console.log(children, itemsPerPage)

        const queryParams = new URLSearchParams();
        queryParams.set('page', (page ?? 1).toString());
        queryParams.set('per_page', itemsPerPage.toString());

        if (category_id) queryParams.set('categories', category_id.toString());
        if (category_slug) queryParams.set('categories_slug', category_slug);
        if (slug) queryParams.set('slug', slug);
        if (id) queryParams.set('id', id.toString());

        console.log(queryParams)

        try {
            // setIsLoading(true);

            console.log(queryParams.toString())

            const res = await fetch(`${import.meta.env.VITE_API}/posts?${queryParams}`);
            console.log(`${import.meta.env.VITE_API}/posts?${queryParams}`)
            const data = await res.json();

            const total = res.headers.get('X-WP-Total');
            const totalPages = res.headers.get('X-WP-TotalPages');

            setPosts(data);
            setTotalPosts(Number(total));
            setTotalPages(Number(totalPages));
            setCurrentPage(page ?? 1);
        } catch (error) {
            console.error('Erro ao buscar posts:', error);
        } finally {
            // setIsLoading(false); // Set loading to false after fetch
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const changePage = (page: number) => {
        fetchPosts(page);
    };

    const getPostBySlug = async (slug: string): Promise<PostType | null> => {
        await fetchPosts(1, undefined, undefined, slug);
        const foundPost = posts.find(post => post.slug === slug);
        return foundPost ?? null;
    };

    return (
        <PostsContext.Provider
            value={{
                posts,
                categories,
                currentPage,
                totalPages,
                totalPosts,
                itemsPerPage,
                // isLoading,
                fetchPosts,
                changePage,
                getPostBySlug,
            }}
        >
            {children}
        </PostsContext.Provider>
    );
};