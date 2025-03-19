import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Post from './post';
import Pagination from '../../components/paginacao';

const API_URL_LISTAR_POSTS = 'https://marcostavares.dev.br/wp/wp-json/wp/v2/posts?_embed';

interface PostContent {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string }[];
  };
}

const ListPosts = () => {
  const [posts, setPosts] = useState<PostContent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const totalItems = 6;  
  const itemsPorPagina = 2;  

  useEffect(() => {
    async function obterPosts() {
      try {
        const params = `&page=${paginaAtual}&per_page=2`;
        const { data } = await Axios.get<PostContent[]>(API_URL_LISTAR_POSTS + params);
        setPosts(data);
        setLoading(false);
      } catch (err) {
        console.error("Erro ao obter posts:", err);
        setError("Não foi possível carregar os posts.");
        setLoading(false);
      }
    }

    obterPosts();
  }, [paginaAtual]);

  const handleMudarPagina = (novaPagina: number) => {
    setPaginaAtual(novaPagina);
    setLoading(true);
  };

  if (loading) return <div>Carregando posts...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="list-post">
      {posts.map((post) => {

        const thumbnailUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title.rendered}
            excerpt={post.excerpt.rendered}
            thumbnailUrl={thumbnailUrl} 
          />
        );
      })}

      <Pagination
        paginaAtual={paginaAtual}
        totalItems={totalItems}
        itemsPorPagina={itemsPorPagina}
        mudarPagina={handleMudarPagina}
      />
    </div>
  );
};

export default ListPosts;