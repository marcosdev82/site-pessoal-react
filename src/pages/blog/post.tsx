import { Link } from "react-router-dom";
import { Article, CardPost } from "./styles";
import Thumbnail from "../../components/thumbnails";
import PostEntryMeta from "../../components/entrymeta";
import useThumbnail from "../../hooks/useThumbnail";
import usePostAuthor from "../../hooks/useAuthor";

interface Category {
  id: number;
  slug: string;
  name: string;
}

interface PostProps {
  id: number;
  title: string;
  excerpt: string;
  featured_media: number;
  date: string;
  _embedded?: { [key: string]: any };
  categories?: Category | null;  
  permalink: string;
}

const Post = ({ id, title, excerpt, featured_media, date, _embedded, categories, permalink }: PostProps) => {
  const thumbnail = useThumbnail(_embedded, "medium");
  const authorEntry = usePostAuthor(_embedded);
 
  return (
    <Article key={id}>
      <CardPost>
        {thumbnail?.url && (
          <figure>
            <Link to={permalink}>
              <Thumbnail
                src={thumbnail.url}
                alt={thumbnail.alt || "Thumbnail"}
                width={thumbnail.width}
                height={thumbnail.height}
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
        <PostEntryMeta author={authorEntry} categories={categories} date={date} />
      </CardPost>
    </Article>
  );
};

export default Post;
