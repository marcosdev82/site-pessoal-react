import React from "react";
import { Link } from "react-router-dom";
import { Article, CardPost } from "./styles";
import Thumbnail from "../../components/thumbnails";
import useThumbnail from "../../hooks/useThumbnail";

interface PostProps {
  id: number;
  title: string;
  excerpt: string;
  featured_media: number;
  _embedded?: { [key: string]: any };
  permalink: string;
}

const Post = ({ id, title, excerpt, featured_media, _embedded, permalink }: PostProps) => {

  const thumbnail = useThumbnail(_embedded, "medium");

  return (
    <Article key={id}>
      <CardPost>
        {thumbnail && thumbnail.url && (
          <figure>
            <Link to={permalink}>
              <Thumbnail src={thumbnail.url} alt={thumbnail.alt} width={thumbnail.width} height={thumbnail.height} />
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
