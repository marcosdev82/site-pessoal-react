        
import { EntryMeta } from './styles';
import Avatar from "../../components/author";

interface EntryMetaContent {
    date: string;
    avatar?: string;
    author: { [key: string]: any | null};
    category?: string;
}

const PostEntryMeta = ({ date, author, category }: EntryMetaContent) => {
    return (
      <EntryMeta>
        <span className='date'>{date}</span>
        {author.avatar_urls[96] ? (<span><Avatar id={author.id} foto={author.avatar_urls[96]} /></span>) : null}
        <span className='author'>{author.name}</span>
        {category ? (<div className='entry-category'>{category}</div>) : null}
      </EntryMeta> 
    );
};

export default PostEntryMeta;