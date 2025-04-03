import { Article, CardPost } from "./styles";
import { PostType } from '../../types/posts';
import Thumbnail from "../../components/thumbnails";
import useThumbnail from "../../hooks/useThumbnail";
import PostEntryMeta from "../../components/entrymeta";

const Post = (props: PostType) => {

  const { id, title, excerpt, media_details, author_data, categories_details, slug } = props;
  const thumbnail = useThumbnail(media_details, 'medium');

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
                alt={title}
              />
            </a>
          </figure>
        )}

        <div className="description">
          <h2>{title}</h2>
          {excerpt && <div>{excerpt}</div>}
          {/* 
          <div
            dangerouslySetInnerHTML={{
              __html: excerpt,
            }}
          />
          */}
        </div>

        <PostEntryMeta
          author={author_data}
          categories_details={categories_details}
        // data='teste'
        />

      </CardPost>
    </Article>
  );
};

export default Post;
