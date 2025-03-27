import { Link } from "react-router-dom";
import { Article, CardPost } from "./styles";
import Thumbnail from "../../components/thumbnails";
import PostEntryMeta from "../../components/entrymeta";
import useThumbnail from "../../hooks/useThumbnail";
import usePostTerms from "../../hooks/usePostTerms";


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
  // const postTerms = usePostTerms(_embedded, "wp:term");
  
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
          <PostEntryMeta avatar="teste" author="Marcos Tavares" category="PHP" date="17/11/1982" />
        </div>
      </CardPost>
    </Article>
  );
};

export default Post;
