        
import { EntryMeta } from './styles';

interface EntryMetaContent {
    date: string;
    avatar: string;
    author: string;
    category: string;
}

const PostEntryMeta = ({ date, avatar, author, category }: EntryMetaContent) => {
    return (
      <EntryMeta>
        <span>{date}</span>
        <span>{avatar}</span>
        <span>{author}</span>
        <span>{category}</span>
      </EntryMeta> 
    );
};

export default PostEntryMeta;