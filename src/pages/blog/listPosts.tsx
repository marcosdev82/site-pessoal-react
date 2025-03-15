import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Thumbnail from '../../assets/images/thumnail-1024x1024.jpg';

const ListPosts = () => {
    const API_URL_LISTAR_POSTS = 'http://localhost:4000/gerenciador-tarefas';
    const [carregarPosts, setCarregarPosts] = useState(true);

    useEffect(() => {
        async function obterPost() {

            try {
                // const params = `?pag=${paginaAtual}&ordem=${ordem}&filtro-tarefa=${filtroTarefa}`; 
                let { data } = await axios.get(API_URL_LISTAR_POSTS + params);
                console.log(data)
                
            } catch (err) {
                
            }
        }

        if (carregarPosts) {
            setCarregarPosts(false);
        }
    }, [carregarPosts]);
    
    const posts = [
        {
            id: 1,
            title: "A Importância do Desenvolvimento Web",
            author: "Marcos Tavares",
            date: "2025-02-23",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Fusce non venenatis risus, sit amet scelerisque nulla.",
            category: "Desenvolvimento Web",
            tags: ["HTML", "CSS", "JavaScript"],
            image: Thumbnail,
            comments: [
                {
                    user: "Ana Souza",
                    comment: "Ótimo artigo! Aprendi muito sobre desenvolvimento web.",
                    date: "2025-02-23"
                }
            ]
        },
        {
            id: 2,
            title: "Introdução ao React: Como Começar",
            author: "Marcos Tavares",
            date: "2025-02-20",
            content: "React é uma biblioteca JavaScript para criar interfaces de usuário. Neste artigo, vamos explorar os conceitos básicos e como começar a usar React em seus projetos.",
            category: "React",
            tags: ["React", "JavaScript", "Componentes"],
            image: Thumbnail,
            comments: [
                {
                    user: "Carlos Lima",
                    comment: "React é incrível! Obrigado pelas dicas.",
                    date: "2025-02-21"
                }
            ]
        },
        {
            id: 3,
            title: "Dicas para Melhorar a Performance do seu Site",
            author: "Marcos Tavares",
            date: "2025-02-15",
            content: "Otimizar a performance do seu site é essencial para melhorar a experiência do usuário. Descubra algumas dicas práticas para acelerar o carregamento das páginas.",
            category: "Performance Web",
            tags: ["Otimização", "SEO", "Web Performance"],
            image: Thumbnail,
            comments: []
        }
    ];

    return (
        <div className="list-post">
            {posts.map((post) => (
                <article key={post.id} style={{ border: "1px solid #ddd", padding: "20px", marginBottom: "20px", borderRadius: "8px" }}>
                    <h2>{post.title}</h2>
                    <p><strong>Autor:</strong> {post.author} - <strong>Data:</strong> {post.date}</p>
                    <img src={post.image} alt={post.title} style={{ width: "800px", maxHeight: "800px", objectFit: "cover" }} />
                    <p>{post.content}</p>
                    <p><strong>Categoria:</strong> {post.category}</p>
                    <p><strong>Tags:</strong> {post.tags.join(", ")}</p>

                    {post.comments.length > 0 && (
                        <div>
                            <h4>Comentários:</h4>
                            <ul>
                                {post.comments.map((comment, index) => (
                                    <li key={index}>
                                        <strong>{comment.user}:</strong> {comment.comment} ({comment.date})
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </article>
            ))}
        </div>
    );
}

export default ListPosts;
