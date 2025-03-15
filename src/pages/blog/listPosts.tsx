import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const API_URL_LISTAR_POSTS = 'https://marcostavares.dev.br/wp/wp-json/wp/v2/posts';

// Definir a interface do Post
interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
}

const ListPosts = () => {
  // Definir o estado com o tipo correto
  const [carregarPosts, setCarregarPosts] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function obterPost() {
      try {
        const { data } = await Axios.get<Post[]>(API_URL_LISTAR_POSTS);
        setPosts(data);
      } catch (err) {
        console.error("Erro ao obter posts:", err);
      }
    }

    if (carregarPosts) {
      obterPost();
      setCarregarPosts(false);
    }
  }, [carregarPosts]);

  return (
    <div className="list-post">
      {posts.map((post) => (
        <article key={post.id} style={{ border: "1px solid #ddd", padding: "20px", marginBottom: "20px", borderRadius: "8px" }}>
          <h2>{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </article>
      ))}
    </div>
  );
}

export default ListPosts;
