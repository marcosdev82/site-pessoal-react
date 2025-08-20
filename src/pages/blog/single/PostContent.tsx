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

            <title>Blog - TÍTULO_DO_POST</title>

            <meta name="description" content="Marcos Tavares, desenvolvedor full stack especializado em JavaScript. 
                Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados." />
            <meta name="keywords" content="desenvolvedor full stack, desenvolvimento web, aplicações escaláveis, criação de sites, 
                sistemas web, design responsivo, programação front-end, programação back-end, React, Node.js, Laravel, desenvolvimento de software, soluções digitais, programador full stack, Marcos Tavares" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://marcostavares.dev.br/blog/SLUG_DO_POST" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Blog - TÍTULO_DO_POST" />
            <meta property="og:description" content="Marcos Tavares, desenvolvedor full stack especializado em JavaScript. 
                Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas 
                que unem design e funcionalidade para entregar excelência e resultados." />
            <meta property="og:site_name" content="Marcos Tavares full stack" />
            <meta property="og:url" content="https://marcostavares.dev.br/blog/SLUG_DO_POST" />
            <meta property="og:locale" content="pt_BR" />
            <meta property="article:author" content="https://www.facebook.com/marcostavares.dev" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Blog - TÍTULO_DO_POST" />
            <meta name="twitter:description" content="Marcos Tavares, desenvolvedor full stack especializado em JavaScript. 
                Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas 
                que unem design e funcionalidade para entregar excelência e resultados." />

        </>
    );
};

export default SinglePost;
