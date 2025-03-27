import useTerms from "../../hooks/useTerms"; 

const API_URL = "https://marcostavares.dev.br/wp/wp-json/wp/v2/categories"; 

interface TermsContent {
  id: number;
  name: string;
  slug: string;
}

const Terms = () => {
  const { Terms, loading, error } = useTerms(API_URL);  

  return (
    <div>
      <h3>Categorias:</h3>
 
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <p>Carregando categorias...</p>
      ) : (
        <ul>
          {Terms.map((term: TermsContent) => (
            <li key={term.id}>
              {term.name} ({term.slug})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Terms;
