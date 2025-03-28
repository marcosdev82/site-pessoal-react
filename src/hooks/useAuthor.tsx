import { useMemo } from "react";

interface AuthorContent {
  id: number;
  name: string;
  slug: string;
  foto: string;
  link: string;
}

const usePostAuthor = (
  _embedded: { [key: string]: any } | undefined,
): AuthorContent | null => {
  const postAuthor = useMemo(() => {
    const authorArray = _embedded?.["author"];

    if (!Array.isArray(authorArray) || authorArray.length === 0) {
      return null;
    }

    const author = authorArray[0];

    return {
      id: author.id,
      name: author.name,
      slug: author.slug,
      foto: author.avatar_urls?.["96"] || "",
      link: author.link,
    };
  }, [_embedded]);

  return postAuthor;
};

export default usePostAuthor;
