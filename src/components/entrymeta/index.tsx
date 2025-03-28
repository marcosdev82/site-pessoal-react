        
import { EntryMeta } from './styles';

interface EntryMetaContent {
    date: string;
    avatar?: string;
    author: string;
    category?: string;
}

const PostEntryMeta = ({ date, avatar, author, category }: EntryMetaContent) => {
    return (
      <EntryMeta>
        <span className='date'>{date}</span>
        {avatar ? (<span>{avatar}</span>) : null}
        <span className='author'>{author}</span>
        {category ? (<div className='entry-category'>{category}</div>) : null}
      </EntryMeta> 
    );
};

export default PostEntryMeta;