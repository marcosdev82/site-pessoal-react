import { Article, CardPost } from "./styles";
import { PostType } from '../../types/posts';
import Thumbnail from "../../components/thumbnails";
import useThumbnail from "../../hooks/useThumbnail";
import PostEntryMeta from "../../components/entrymeta";
import useFormattedDate from '../../hooks/useFormattedDate';

const Post = (props: PostType) => {

  const { id, title, date, excerpt, media_details, author_data, categories_details, slug } = props;

  const thumbnail = useThumbnail(media_details ?? undefined, 'thumbnail')

  const postDate = useFormattedDate(date)

  return (
    <Article key={id}>
      <CardPost>

        {thumbnail && thumbnail?.url && (
          <figure>
            <a href={`blog/${slug}`} title={title}>
              <Thumbnail
                url={thumbnail.url}
                width={thumbnail.width}
                height={thumbnail.height}
                alt={title}
              />
            </a>
          </figure>
        )}

        <div className="description">
          <h2>{title}</h2>
          {excerpt && excerpt}
        </div>

        <PostEntryMeta
          author={author_data}
          date={postDate}
          categories_details={categories_details}
        />

      </CardPost>
    </Article>
  );
};

export default Post;
