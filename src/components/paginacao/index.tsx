import React from "react";
import { Pagination } from "react-bootstrap";

interface PaginacaoProps {
  paginaAtual: number;
  totalItems: number;
  itemsPorPagina: number;
  mudarPagina: (pagina: number) => void;
}

const Paginacao = ({ paginaAtual, totalItems, itemsPorPagina, mudarPagina }:PaginacaoProps) => {
  const numPaginas = Math.max(1, Math.ceil(totalItems / itemsPorPagina));

  const gerarPrimeiroItem = () => (
    <Pagination.First key="pagFirst" onClick={() => mudarPagina(1)} disabled={paginaAtual === 1} />
  );

  const gerarItemAnterior = () => (
    <Pagination.Prev key="pagPrev" onClick={() => mudarPagina(paginaAtual - 1)} disabled={paginaAtual === 1} />
  );

  const gerarItemNumerico = (pagina: number) => (
    <Pagination.Item key={pagina} onClick={() => mudarPagina(pagina)} active={paginaAtual === pagina}>
      {pagina}
    </Pagination.Item>
  );

  const gerarProximoItem = () => (
    <Pagination.Next key="pagNext" onClick={() => mudarPagina(paginaAtual + 1)} disabled={paginaAtual === numPaginas} />
  );

  const gerarUltimoItem = () => (
    <Pagination.Last key="pagLast" onClick={() => mudarPagina(numPaginas)} disabled={paginaAtual === numPaginas} />
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
