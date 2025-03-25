import React from "react";
import { PaginationContainer, PaginationButtons } from "./styles";

interface PaginacaoProps {
  currentPage: number;
  totalItems: number;
  itemsPorPagina: number;
  mudarPagina: (pagina: number) => void;
}

const Pagination = ({
  currentPage,
  totalItems,
  itemsPorPagina,
  mudarPagina,
}: PaginacaoProps) => {
  const numPaginas = Math.max(1, Math.ceil(totalItems / itemsPorPagina));

  return (
    <PaginationContainer>
      <PaginationButtons.First
        onClick={() => currentPage > 1 && mudarPagina(1)}
        disabled={currentPage === 1}
      >
        {"<<"}
      </PaginationButtons.First>

      <PaginationButtons.Prev
        onClick={() => currentPage > 1 && mudarPagina(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </PaginationButtons.Prev>

      {[...Array(numPaginas)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <PaginationButtons.Item
            key={pageNumber}
            onClick={() => mudarPagina(pageNumber)}
            active={currentPage === pageNumber}
          >
            {pageNumber}
          </PaginationButtons.Item>
        );
      })}

      <PaginationButtons.Next
        onClick={() => currentPage < numPaginas && mudarPagina(currentPage + 1)}
        disabled={currentPage === numPaginas}
      >
        {">"}
      </PaginationButtons.Next>

      <PaginationButtons.Last
        onClick={() => currentPage < numPaginas && mudarPagina(numPaginas)}
        disabled={currentPage === numPaginas}
      >
        {">>"}
      </PaginationButtons.Last>
    </PaginationContainer>
  );
};

export default Pagination;
