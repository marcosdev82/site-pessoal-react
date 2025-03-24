import React, { useState, useEffect } from "react";
import Axios from "axios";
import Post from "./post";
import Pagination from "../../components/paginacao";
import Search from "../../components/search";

const API_URL = "https://marcostavares.dev.br/wp/wp-json/wp/v2/posts?_embed";

interface PostContent {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  thumbnails?: { [size: string]: string }; 
}

const ListPosts = () => {
  const [posts, setPosts] = useState<PostContent[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [filteredPosts, setFilteredPosts] = useState<PostContent[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const perPage = 3; // Quantidade de itens por página

  // Função para buscar todos os posts inicialmente
  const fetchPosts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await Axios.get<PostContent[]>(API_URL);
      const allPosts = response.data;

      setPosts(allPosts);
      setFilteredPosts(allPosts);

      // Pegando o total de posts do cabeçalho
      const total = response.headers["x-wp-total"];
      setTotalItems(total ? parseInt(total, 10) : allPosts.length); // Usa o total dos posts se disponível
    } catch (err) {
      console.error("Erro ao obter posts:", err);
      setError("Não foi possível carregar os posts.");
    } finally {
      setLoading(false);
    }
  };

  // Função para alterar a página
  const handleMudarPagina = (page: number) => {
    setCurrentPage(page);
  };

  // Função para filtrar posts ao submeter a pesquisa
  const handleSearchSubmit = () => {
    const filtered = posts.filter(
      (post) =>
        post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.rendered.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
    setTotalItems(filtered.length);
    setCurrentPage(1); 
  };

  // Paginação no lado cliente
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

 
  useEffect(() => {
    fetchPosts(); // Carrega todos os posts inicialmente
  }, []);

  return (
    <div>
      <div className="search-container">
        <Search
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}  
          className="filtro-tarefa"
          placeholder="Digite para filtrar..."
        />
        <button onClick={handleSearchSubmit} disabled={loading}>
          {loading ? "Pesquisando..." : "Pesquisar"}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <p>Carregando posts...</p>
      ) : (
        <>
          <div className="list-post">
            {paginatedPosts.length > 0 ? (
              paginatedPosts.map((post) => {
                return (
                  <Post
                    key={post.id}
                    id={post.id}
                    title={post.title.rendered}
                    excerpt={post.excerpt.rendered}
                    thumbnailUrl={post.thumbnails?.medium}
                    permalink={post.slug}
                  />
                );
              })
            ) : (
              <p>Nenhum post encontrado.</p>
            )}
          </div>

          {totalItems > perPage && (
            <Pagination
              currentPage={currentPage}
              totalItems={totalItems}
              itemsPorPagina={perPage}
              mudarPagina={handleMudarPagina}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ListPosts;
