import React from 'react';
import { Article } from './styles';

interface PostProps {
  id: number;
  title: string;
  content: string;
  thumbnailUrl?: string;
}

const Post = ({ id, title, content, thumbnailUrl }: PostProps) => {
  return (
    <Article key={id} >
      {/* Verificar se existe a imagem antes de renderizar */}
      {thumbnailUrl && (
        <figure>
          <img
            src={thumbnailUrl}
            alt={title}
            style={{ width: '320px', height: 'auto' }} 
          />
        </figure>
      )}
      <div className='description'>
        <h2>{title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>
    </Article>
  );
};

export default Post;
