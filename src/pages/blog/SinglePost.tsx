import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

const API_URL =
  "https://marcostavares.dev.br/wp/wp-json/wp/v2/posts?_embed&slug=";

const SinglePost = () => {
  const { post } = useParams<{ post: string }>();
  const [postData, setPostData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!post) return;

    setLoading(true);
    Axios.get(`${API_URL}${post}`)
      .then((response) => {
        if (response.data.length > 0) {
          setPostData(response.data[0]); // Pegando o primeiro post encontrado
        } else {
          setError("Post não encontrado.");
        }
      })
      .catch(() => setError("Erro ao carregar o post."))
      .finally(() => setLoading(false));
  }, [post]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!postData) return <p>Nenhum post encontrado.</p>;

  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: postData.title.rendered }} />
      <img
        src={postData._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""}
        alt="Imagem do post"
      />
      <div dangerouslySetInnerHTML={{ __html: postData.content.rendered }} />
    </div>
  );
};

export default SinglePost;
