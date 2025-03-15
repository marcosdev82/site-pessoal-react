import React, { useEffect, useState } from 'react';
import Axios from 'axios';

// Definir a interface do Post
interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string }[];
  };
}

const API_URL_LISTAR_POSTS = 'https://marcostavares.dev.br/wp/wp-json/wp/v2/posts?_embed';

const ListPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);  // Novo estado de carregamento
  const [error, setError] = useState<string | null>(null); // Novo estado para erros

  useEffect(() => {
    async function obterPosts() {
      try {
        const { data } = await Axios.get<Post[]>(API_URL_LISTAR_POSTS);
        setPosts(data);
        setLoading(false); // Marcar como carregado
      } catch (err) {
        console.error("Erro ao obter posts:", err);
        setError("Não foi possível carregar os posts.");
        setLoading(false); // Marcar como carregado mesmo em caso de erro
      }
    }

    obterPosts();
  }, []);

  if (loading) return <div>Carregando posts...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="list-post">
      {posts.map((post) => (
        <article
          key={post.id}
          style={{
            border: '1px solid #ddd',
            padding: '20px',
            marginBottom: '20px',
            borderRadius: '8px',
          }}
        >
          {/* Verificar se existe a imagem antes de renderizar */}
          {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
            <img
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt={post.title.rendered}
              style={{ width: '600px', height: 'auto' }} 
            />
          )}
          <h2>{post.title.rendered}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.rendered,
            }}
          />
        </article>
      ))}
    </div>
  );
};

export default ListPosts;
