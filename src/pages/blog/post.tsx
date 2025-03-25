import React from "react";
import { Link } from "react-router-dom";
import { Article, CardPost } from "./styles";
import Thumbnail from "../../components/thumbnails";
import useFilteredEmbeddedData from '../../hooks/useFilteredEmbeddedData';  

interface PostProps {
  id: number;
  title: string;
  excerpt: string;
  featured_media: number;
  _embedded?: { [key: string]: any };  
  permalink: string;
}

 const Post = ({ id, title, excerpt, featured_media, _embedded, permalink }: PostProps) => {

  // const allowedKeys = ['wp:featuredmedia', 'wp:author'];
  const allowedKeys = ['wp:featuredmedia'];

  // Filtra os dados de _embedded usando o hook
  const filteredData = useFilteredEmbeddedData(_embedded || {}, allowedKeys);
  const imageSize = filteredData['wp:featuredmedia']?.[0]?.media_details?.sizes;
  const alt = filteredData['wp:featuredmedia']?.[0]?.alt_text;

  return (
    <Article key={id}>
      <CardPost>
        {featured_media > 0 && (
          <figure>
            <Link to={permalink}>
              <Thumbnail src={imageSize.medium.source_url} alt={alt} width={imageSize.medium.width}  height={imageSize.medium.height} />
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
