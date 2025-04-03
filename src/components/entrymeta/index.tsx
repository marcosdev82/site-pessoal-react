
import { EntryMeta } from './styles';
import { EntryMetaContent, Category } from '../../types/posts';

const PostEntryMeta = (prop: EntryMetaContent) => {
  const { author, categories_details } = prop;
  return (
    <EntryMeta>

      {author && (
        <span>{author.name}</span>
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
