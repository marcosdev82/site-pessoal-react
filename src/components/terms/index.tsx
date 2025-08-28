import { use } from "react";
import { Link } from "react-router-dom";
import { TermsContainer, ListTerms } from "./styles";

const API_URL = "https://marcostavares.dev.br/wp/wp-json/wp/v2/categories";

interface TermsContent {
  id: number;
  name: string;
  slug: string;
  count: number;
}

// recurso assíncrono definido uma vez só (fora do componente)
const categoriesResource = fetch(API_URL).then((res) => res.json());

const Terms = () => {
  // React 19: suspende até a Promise resolver, cacheando o resultado
  const categories = use(categoriesResource) as TermsContent[];

  return (
    <TermsContainer>
      <h2>Categorias</h2>

      <ListTerms>
        {categories.length > 0 ? (
          categories.map(
            (term) =>
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
    </TermsContainer>
  );
};

export default Terms;
