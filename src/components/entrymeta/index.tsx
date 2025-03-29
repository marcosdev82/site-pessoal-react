        
import { EntryMeta } from './styles';
import Avatar from "../../components/avatar";
import useFormattedDate from '../../hooks/useFormattedDate';

interface Category {
  id: number;
  slug: string;
  name: string;
}

interface EntryMetaContent {
  date: string;
  avatar?: string;
  author: { [key: string]: any } | null;
  categories?: Category | null; // Agora é um objeto e não um array
}

const PostEntryMeta = ({ date, author, categories }: EntryMetaContent) => { 
  console.log("categories", categories);
  const size = 24; // Define o tamanho do avatar (24, 48 ou 96)
  const formattedDate = useFormattedDate(date);


  return (
    <EntryMeta>
      {author && author.foto && (
        <span><Avatar id={author.id} foto={author.foto} size={size} /></span>
      )}
      {author && <span className='author'>{author.name}</span>}
      | <span className='date'>{formattedDate}</span>
      
      {Array.isArray(categories) && categories.length > 0 && (
        <div className='entry-category'>
          {categories.map((category: Category) => (
            <a href={category.slug} className='btn' key={category.id}>{category.name}</a>
          ))}
        </div>
      )}
    </EntryMeta> 
  );
};

export default PostEntryMeta;
