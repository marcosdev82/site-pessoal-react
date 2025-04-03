import { Link } from "react-router-dom";
import { Article, CardPost } from "./styles";
import Thumbnail from "../../components/thumbnails";
import useThumbnail from "../../hooks/useThumbnail";
import PostEntryMeta from "../../components/entrymeta";
// import useThumbnail from "../../hooks/useThumbnail";
// import usePostAuthor from "../../hooks/useAuthor";


interface Category {
  id: number;
  slug: string;
  name: string;
}

interface AvatarUrls {
  [size: number]: string; // Tamanhos dinâmicos como 24, 48, 96
}


interface AuthorData {
  id?: number;
  nome?: string;
  email?: string;
  description?: string;
  avatar_urls: { [key: string]: any };
}

interface PostType {
  id: number;
  title: string;
  excerpt?: string;
  media_details?: { [key: string]: any };
  date?: string;
  categories_details?: Category[];
  author_data?: AuthorData[];
  slug?: string;
}

const Post = (props: PostType) => {

  const { id, title, excerpt, media_details, author_data, categories_details, slug } = props;
  const thumbnail = useThumbnail(media_details, 'medium');
  // console.log(categories_details)
  // const authorEntry = usePostAuthor(_embedded);
  return (
    <Article key={id}>
      <CardPost>

        {thumbnail?.url && (
          <figure>
            <a href={slug}>
              <Thumbnail
                src={thumbnail.url}
                width={thumbnail.width}
                height={thumbnail.height}
                alt={title} // Agora você pode definir o alt onde for usar o hook
              />
            </a>
          </figure>
        )}

        <div className="description">
          <h2>{title}</h2>
          {excerpt && <div>{excerpt}</div>} {/* Exibe o excerpt apenas se estiver definido */}
          {/* 
          <div
            dangerouslySetInnerHTML={{
              __html: excerpt,
            }}
          />
          */}
        </div>

        <PostEntryMeta
          // author={author_data}
          categories_details={categories_details}
        // data='teste'
        />

      </CardPost>
    </Article>
  );
};

export default Post;
