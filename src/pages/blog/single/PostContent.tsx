import EntryTitle from '../../../components/entrytitle';
import Sidebar from '../../../components/sidebar';
import Head from '../../../components/head';
import { Content, EntryContent } from '../styles';
import { BlogContext } from '../../../context/BlogContext';

import { BlogContextType, PostType } from '../../../types/posts';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Thumbnail from '../../../components/thumbnails';



const SinglePost = () => {

    const { slug } = useParams<{ slug: string }>();

    const {
        getPostBySlug,
    } = useContext(BlogContext) as BlogContextType;

    const [post, setPost] = useState<PostType | null>(null);

    // const thumbnail = useThumbnail(media_details ?? undefined, 'thumbnail')

    useEffect(() => {
        if (slug) {
            const fetchPost = async () => {
                const result = await getPostBySlug(slug as string);
                const singlePost = Array.isArray(result) ? result[0] : result;
                setPost(singlePost);
            };
            fetchPost();
        }
    }, [slug, getPostBySlug]);

    if (!slug || !post) {
        return <p>Carregando...</p>;
    }

    const { id, title, date, content, media_details, author_data, categories_details } = post;
    console.log(media_details)

    // const postDate = useFormattedDate(date)

    return (
        <>
            <Head
                title={`Blog - ${title}`}
                description='Marcos Tavares, desenvolvedor full stack especializado em JavaScript. Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados.'
                canonical='https://marcostavares.dev.br/blog'
                robot='index, follow'
                keywords='desenvolvedor full stack, desenvolvimento web, aplicações escaláveis, criação de sites, sistemas web, design responsivo, programação front-end, programação back-end, React, Node.js, Laravel, desenvolvimento de software, soluções digitais, programador full stack, Marcos Tavares'
                local='pt_BR'
                type='website'
                siteName='Marcos Tavares full stack'
                publish='https://www.facebook.com/marcostavares.dev'
            />

            <section className='entry-title'>
                <EntryTitle title={title} />
            </section>

            <EntryContent>
                <Sidebar />
                <Content>
                    {/* {thumbnail && thumbnail?.url && (
                        <figure>

                            <Thumbnail
                                url={thumbnail.url}
                                width={thumbnail.width}
                                height={thumbnail.height}
                                alt={title}
                            />

                        </figure>
                    )} */}

                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: content ?? '' }} />
                </Content>
            </EntryContent>
        </>
    );
};

export default SinglePost;
