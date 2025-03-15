import React from 'react';
import { Article } from './styles';

// Definir a interface do Post
interface PostProps {
  id: number;
  title: string;
  content: string;
  thumbnailUrl?: string;
}

const Post: React.FC<PostProps> = ({ id, title, content, thumbnailUrl }) => {
  return (
    <Article key={id} >
      {/* Verificar se existe a imagem antes de renderizar */}
      {thumbnailUrl && (
        <img
          src={thumbnailUrl}
          alt={title}
          style={{ width: '600px', height: 'auto' }} // Adicionar estilo para a imagem
        />
      )}
      <h2>{title}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </Article>
  );
};

export default Post;
