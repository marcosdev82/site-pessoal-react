import { Link } from "react-router-dom";
import useTerms from "../../hooks/useTerms";
import { TermsContainer, ListTerms } from "./styles";

const API_URL = "https://marcostavares.dev.br/wp/wp-json/wp/v2/categories";

interface TermsContent {
  id: number;
  name: string;
  slug: string;
  count: number;
}

const Terms = () => {
  const { Terms, loading, error } = useTerms(API_URL);

  return (
    <TermsContainer>
      <h2>Categorias</h2>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <p>Carregando categorias...</p>
      ) : (
        <ListTerms>
          {Terms.length > 0 ? (
            Terms.map((term: TermsContent) =>
              term.count > 0 && (
                <li key={term.id}>
                  <Link to={`/blog/category/${term.slug}`}>
                    {term.name} <span className="badge">({term.count})</span>
                  </Link>
                </li>
              )
            )
          ) : (
            <p>Nenhuma categoria encontrada.</p>
          )}

        </ListTerms>
      )}
    </TermsContainer>
  );
};

export default Terms;
