import { useMemo } from "react";

interface TaxonPostContent {
  id: number;
  name: string;
  slug: string;
}

const usePostTerms = (
  _embedded: { [key: string]: any } | undefined
): TaxonPostContent | null => {
  const postTerms = useMemo(() => {
    const termsArray = _embedded?.["wp:term"]?.[0] as TaxonPostContent[] | undefined;
   
    if (!Array.isArray(termsArray) || termsArray.length === 0) {
      return null;
    }
    
    const term = termsArray[0];

    return {
      id: term.id,
      name: term.name,
      slug: term.slug,
    };
  }, [_embedded]);

  return postTerms;
};

export default usePostTerms;
