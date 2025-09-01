import { buildQueryString } from "../utils/queryString";

export async function fetchPostsApi(
    page: number,
    itemsPerPage: number,
    filters: { category_id?: number; category_slug?: string; slug?: string; id?: number } = {}
): Promise<{ data: any; total: number; totalPages: number }> {

    const queryParams = buildQueryString({
        page,
        per_page: itemsPerPage,
        ...(filters.category_id ? { categories: filters.category_id } : {}),
        ...(filters.category_slug ? { categories_slug: filters.category_slug } : {}),
        ...(filters.slug ? { slug: filters.slug } : {}),
        ...(filters.id ? { id: filters.id } : {}),
    });

    const res = await fetch(`${import.meta.env.VITE_API}/posts?${queryParams}`);
    const data = await res.json();

    return {
        data,
        total: Number(res.headers.get("X-WP-Total") ?? "0"),
        totalPages: Number(res.headers.get("X-WP-TotalPages") ?? "1"),
    };
}
