// src/components/terms/Terms.tsx
import { useContext } from "react";
import { TermsContext } from "../../contexts/TermsContext"
import { TermsContainer, ListTerms } from "./styles";
import { Link } from "react-router-dom";

const Terms = () => {
  const context = useContext(TermsContext);

  if (!context) {
    throw new Error("Terms deve estar dentro de <TermsProvider>");
  }

  const { categories } = context;

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
