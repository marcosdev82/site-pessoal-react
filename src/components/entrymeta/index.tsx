        
import { EntryMeta } from './styles';
import Avatar from "../../components/avatar";

interface EntryMetaContent {
    date: string;
    avatar?: string;
    author: { [key: string]: any } | null;
    category?: string;
}

// const PostEntryMeta = ({ date, author, category }: EntryMetaContent) => {
//     return (
//       <EntryMeta>
//         <span className='date'>{date}</span>
//         {author.avatar_urls[96] ? (<span><Avatar id={author.id} foto={author.avatar_urls[96]} /></span>) : null}
//         <span className='author'>{author.name}</span>
//         {category ? (<div className='entry-category'>{category}</div>) : null}
//       </EntryMeta> 
//     );
// };

const PostEntryMeta = ({ date, author, category }: EntryMetaContent) => { 
  // console.log(author + "teste");
  //  console.log("Author:", JSON.stringify(author, null, 2));

  return (
    <EntryMeta>
      {author && author.foto ? (
        <span><Avatar id={author.id} foto={author.foto} size={24} /></span>
      ) : null}
      {author && <span className='author'>{author.name}</span>}
      <span className='date'>{date}</span>
      {category && <div className='entry-category'>{category}</div>}
    </EntryMeta> 
  );
};


export default PostEntryMeta;