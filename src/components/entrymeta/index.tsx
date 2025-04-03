
import { EntryMeta } from './styles';
import { EntryMetaContent, Category } from '../../types/posts';
import useAvatarUrl from '../../hooks/useAvatarUrl';
import Avatar from '../avatar';

const PostEntryMeta = (prop: EntryMetaContent) => {
  const { author, categories_details, date } = prop;
  const avatarUrl = useAvatarUrl(author?.avatar_urls, 24);

  return (
    <EntryMeta>
      <Avatar
        // id={author?.id ?? 0}
        foto={avatarUrl} // Aqui, garantimos que não é undefined
      // name={author?.name}
      />

      {author && (
        <span>{author.name}</span>
      )}
      <span> | </span>
      {date && (
        <span>{date}</span>
      )}
      {Array.isArray(categories_details) && categories_details.length > 0 && (
        <div className='entry-category'>
          {categories_details.map((category: Category) => (
            <a href={category.slug} className='btn' key={category.id}>{category.name}</a>
          ))}
        </div>
      )}


    </EntryMeta>
  );
};

export default PostEntryMeta;
