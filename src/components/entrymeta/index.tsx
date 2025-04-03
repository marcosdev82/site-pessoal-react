
import { EntryMeta } from './styles';
import { EntryMetaContent, Category } from '../../types/posts';
// import Avatar from "../../components/avatar";
// import useFormattedDate from '../../hooks/useFormattedDate';

// interface Category {
//   id: number;
//   slug: string;
//   name: string;
// }

// interface AuthorData {
//   name?: string;
//   email?: string;
//   description?: string;
//   avatar_urls: { [key: string]: any };
// }



const PostEntryMeta = ({ author, categories_details, date }: EntryMetaContent) => {

  return (
    <EntryMeta>

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
