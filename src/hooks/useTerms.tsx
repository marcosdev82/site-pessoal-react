import { useState, useEffect } from "react";

interface Terms {
  id: number;
  name: string;
  slug: string;
  count: number;
}

const useTerms = (url: string) => {
  const [Terms, setTerms] = useState<Terms[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error("Erro ao buscar categorias");
        const data = await response.json();

        // Filtrar os atributos necessários
        const formattedTerms = data.map((Terms: any) => ({
          id: Terms.id,
          name: Terms.name,
          slug: Terms.slug,
          count: Terms.count,
        }));

        setTerms(formattedTerms);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    fetchTerms();
  }, [url]);

  return { Terms, loading, error };
};

export default useTerms;
