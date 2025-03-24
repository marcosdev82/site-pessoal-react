import React from "react";
import { Link } from "react-router-dom";
import { Article, CardPost } from "./styles";

interface PostProps {
  id: number;
  title: string;
  excerpt: string;
  thumbnailUrl?: string;
  permalink: string;
}

const Post = ({ id, title, excerpt, thumbnailUrl, permalink }: PostProps) => {
  return (
    <Article key={id}>
      <CardPost>
        {/* Verificar se existe a imagem antes de renderizar */}
        {thumbnailUrl && (
          <figure>
            <Link to={permalink}>
              <img
                src={thumbnailUrl}
                alt={title}
                style={{ width: "320px", height: "auto" }}
              />
            </Link>
          </figure>
        )}
        <div className="description">
          <h2>{title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: excerpt,
            }}
          />
        </div>
      </CardPost>
    </Article>
  );
};

export default Post;
