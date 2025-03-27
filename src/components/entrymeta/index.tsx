        
import { EntryMeta } from './styles';

interface EntryMetaContent {
    date: string;
    author: string;
    category: string;
}

const PostEntryMeta = ({ date, author, category }: EntryMetaContent) => {
    return (
      <EntryMeta>
        <span>{date}</span>
        <span>{author}</span>
        <span>{category}</span>
      </EntryMeta> 
    );
};

export default PostEntryMeta;