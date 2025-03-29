import { Link } from "react-router-dom";
import { Article, CardPost } from "./styles";
import Thumbnail from "../../components/thumbnails";
import PostEntryMeta from "../../components/entrymeta";
import useThumbnail from "../../hooks/useThumbnail";
import usePostAuthor from "../../hooks/useAuthor";
// import usePostTerms from "../../hooks/usePostTerms";

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
  const authorEntry = usePostAuthor(_embedded);
  // const categorys = usePostTerms(_embedded);
 
  // console.log("Post:", JSON.stringify(terms, null, 2));
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
        <PostEntryMeta author={authorEntry} category="PHP" date="17/11/1982" />
      </CardPost>
    </Article>
  );
};

export default Post;
