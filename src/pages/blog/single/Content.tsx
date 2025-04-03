import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import PostEntryMeta from "../../../components/entrymeta";
import EntryTitle from "../../../components/entrytitle";
import Thumbnail from "../../../components/thumbnails";
import usePostAuthor from "../../../hooks/useAuthor";
import useThumbnail from "../../../hooks/useThumbnail";
import { ContentArticle } from "./styles";

const API_URL =
  "https://marcostavares.dev.br/wp/wp-json/wp/v2/posts?_embed&slug=";

const Content = () => {
  const { post } = useParams<{ post: string }>();
  const [postData, setPostData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!post) return;

    setLoading(true);
    setError(null);

    Axios.get(`${API_URL}${post}`)
      .then((response) => {
        if (response.data.length > 0) {
          setPostData(response.data[0]);
        } else {
          setError("Post não encontrado.");
        }
      })
      .catch(() => setError("Erro ao carregar o post."))
      .finally(() => setLoading(false));
  }, [post]);

  const authorEntry = usePostAuthor(postData?._embedded ?? null);
  const thumbnail = useThumbnail(postData?._embedded ?? null, "medium");

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!postData) return <p>Nenhum post encontrado.</p>;

  return (
    <>

      <ContentArticle key={postData.id} className="Content-article">
        <EntryTitle title={postData.title?.rendered} />
        {thumbnail?.url && (
          <figure>
            <Thumbnail
              url={thumbnail.url}
              alt={postData.title || "Thumbnail"}
              width={thumbnail.width}
              height={thumbnail.height}
            />
          </figure>
        )}
        <div className="description">
          {/* <h2 dangerouslySetInnerHTML={{ __html: postData.title?.rendered }} /> */}
          <div dangerouslySetInnerHTML={{ __html: postData.content?.rendered }} />
        </div>

        {/* <PostEntryMeta author={authorEntry} categories={postData.categories} date={postData.date} /> */}
      </ContentArticle>
    </>
  );
};

export default Content;