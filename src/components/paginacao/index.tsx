import React from "react";
import { Pagination } from "react-bootstrap";

interface PaginacaoProps {
  currentPage: number;
  totalItems: number;
  itemsPorPagina: number;
  mudarPagina: (pagina: number) => void;
}

const Paginacao = ({
  currentPage,
  totalItems,
  itemsPorPagina,
  mudarPagina,
}: PaginacaoProps) => {
  const numPaginas = Math.max(1, Math.ceil(totalItems / itemsPorPagina));

  const gerarPrimeiroItem = () => (
    <Pagination.First
      key="pagFirst"
      onClick={() => mudarPagina(1)}
      disabled={currentPage === 1}
    />
  );

  const gerarItemAnterior = () => (
    <Pagination.Prev
      key="pagPrev"
      onClick={() => mudarPagina(currentPage - 1)}
      disabled={currentPage === 1}
    />
  );

  const gerarItemNumerico = (pagina: number) => (
    <Pagination.Item
      key={pagina}
      onClick={() => mudarPagina(pagina)}
      active={currentPage === pagina}
    >
      {pagina}
    </Pagination.Item>
  );

  const gerarProximoItem = () => (
    <Pagination.Next
      key="pagNext"
      onClick={() => mudarPagina(currentPage + 1)}
      disabled={currentPage === numPaginas}
    />
  );

  const gerarUltimoItem = () => (
    <Pagination.Last
      key="pagLast"
      onClick={() => mudarPagina(numPaginas)}
      disabled={currentPage === numPaginas}
    />
  );

  return (
    <Pagination data-testid="paginacao">
      {gerarPrimeiroItem()}
      {gerarItemAnterior()}
      {[...Array(numPaginas)].map((_, index) => gerarItemNumerico(index + 1))}
      {gerarProximoItem()}
      {gerarUltimoItem()}
    </Pagination>
  );
};

export default Paginacao;
