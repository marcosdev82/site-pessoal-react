export interface PostType {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    slug: string;
    categories: number[];
    // ... outros campos
}

export interface Category {
    id: number;
    name: string;
    // ... outros campos
}

export interface BlogContextType {
    posts: PostType[];
    categories: Category[];
    currentPage: number;
    totalPages: number;
    totalPosts: number;
    itemsPerPage: number;
    // isLoading: boolean;
    getCategoryIdBySlug: (categorySlug: string) => Promise<PostType[]>;
    changePage: (page: number, categoryId?: number) => void;
    getPostBySlug: (slug: string) => Promise<PostType | null>;
}
