import { useState, useEffect } from "react";
import Axios from "axios";
import Post from "./Post";
import Pagination from "../../components/pagination";
import Search from "../../components/search";

const API_URL = "https://marcostavares.dev.br/wp/wp-json/wp/v2/posts?_embed";

interface Category {
  id: number;
  slug: string;
  name: string;
}

interface PostContent {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  featured_media: number; 
  date: string;
  _embedded?: { [key: string]: any };  
  categories_details?: Category | null; 
}

const ListPosts = () => {
  const [posts, setPosts] = useState<PostContent[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [filteredPosts, setFilteredPosts] = useState<PostContent[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const perPage = 3; // Quantidade de itens por página (preciso deixar dinâmico)

  // Função para buscar todos os posts inicialmente
  const fetchPosts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await Axios.get<PostContent[]>(API_URL);
      const allPosts = response.data;

      setPosts(allPosts);
      setFilteredPosts(allPosts);

      const total = response.headers["x-wp-total"];
      setTotalItems(total ? parseInt(total, 10) : allPosts.length);
    } catch (err) {
      console.error("Erro ao obter posts:", err);
      setError("Não foi possível carregar os posts.");
    } finally {
      setLoading(false);
    }
  };

  const handleMudarPagina = (page: number) => {
    setCurrentPage(page);
  };

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

  // Paginação no lado cliente (Refatorar)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  useEffect(() => {
    fetchPosts();  
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
                    featured_media={post.featured_media}
                    date={post.date}
                    _embedded={post._embedded} 
                    categories={post.categories_details}
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
