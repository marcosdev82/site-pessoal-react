import { useMemo } from "react";

type Category = {
  id: number;
  name: string;
  slug: string;
};

type Post = {
  categories_details?: Category[];
};

export function useTermTitle(posts: Post[] | undefined): string | null {
  const termTitle = useMemo(() => {
    if (!posts || posts.length === 0) return null;

    const firstPost = posts[0];
    const categories = firstPost.categories_details;

    if (!categories || categories.length === 0) return null;

    return categories[0].name;
  }, [posts]);

  return termTitle;
}
