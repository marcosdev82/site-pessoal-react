import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Post from './post'; // Importando o componente Post

const API_URL_LISTAR_POSTS = 'https://marcostavares.dev.br/wp/wp-json/wp/v2/posts?_embed';

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string }[];
  };
}

const ListPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function obterPosts() {
      try {
        const { data } = await Axios.get<Post[]>(API_URL_LISTAR_POSTS);
        setPosts(data);
        setLoading(false);
      } catch (err) {
        console.error("Erro ao obter posts:", err);
        setError("Não foi possível carregar os posts.");
        setLoading(false);
      }
    }

    obterPosts();
  }, []);

  if (loading) return <div>Carregando posts...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="list-post">
      {posts.map((post) => {
        const thumbnailUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title.rendered}
            content={post.content.rendered}
            thumbnailUrl={thumbnailUrl}
          />
        );
      })}
    </div>
  );
};

export default ListPosts;
