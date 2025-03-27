import useTerms from "../../hooks/useTerms"; 
import { TermsContainer, ListTerms } from "./styles";

const API_URL = "https://marcostavares.dev.br/wp/wp-json/wp/v2/categories"; 

interface TermsContent {
  id: number;
  name: string;
  slug: string;
}

const Terms = () => {
  const { Terms, loading, error } = useTerms(API_URL);  

  return (
    <TermsContainer>
      <h3>Categorias:</h3>
 
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <p>Carregando categorias...</p>
      ) : (
        <ListTerms>
          {Terms.map((term: TermsContent) => (
            <li key={term.id}>
              {term.name} ({'1'})
            </li>
          ))}
        </ListTerms>
      )}
    </TermsContainer>
  );
};

export default Terms;
