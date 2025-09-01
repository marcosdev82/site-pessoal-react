import EntryTitle from '../../../components/entrytitle';
import Sidebar from '../../../components/sidebar';
import { Content, EntryContent } from '../styles';
import { BlogContext } from '../../../contexts/BlogContext';

import { BlogContextType, PostType } from '../../../types/posts';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Thumbnail from '../../../components/thumbnails';
import useThumbnail from '../../../hooks/useThumbnail';
import useFormattedDate from '../../../hooks/useFormattedDate';


const SinglePost = () => {

    const { slug } = useParams<{ slug: string }>();

    const {
        posts,
    } = useContext(BlogContext) as BlogContextType;

    const post = posts?.find((p) => p.slug === slug);

    const thumbnail = useThumbnail(post?.media_details ?? undefined, 'large');
    const postDate = useFormattedDate(post?.date)

    return (
        <>
            <section className='entry-title'>
                <EntryTitle title={post?.title} />
            </section>

            <EntryContent>
                <Sidebar />
                <Content>

                    <time dateTime={postDate}>
                        {postDate}
                    </time>

                    {thumbnail && thumbnail?.url && (
                        <figure>

                            <Thumbnail
                                url={thumbnail.url}
                                width={thumbnail.width}
                                height={thumbnail.height}
                                alt={post?.title}
                            />

                        </figure>
                    )}
                    <div dangerouslySetInnerHTML={{ __html: post?.content ?? '' }} />
                </Content>
            </EntryContent>

            {/* {console.log(post?.yoast_head_json)} */}

            <title>{`Blog - ${post?.title}`}</title>

            <meta name="description" content="Marcos Tavares, desenvolvedor full stack especializado em JavaScript. 
                Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados." />
            <meta name="keywords" content="desenvolvedor full stack, desenvolvimento web, aplicações escaláveis, criação de sites, 
                sistemas web, design responsivo, programação front-end, programação back-end, React, Node.js, Laravel, desenvolvimento de software, soluções digitais, programador full stack, Marcos Tavares" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={`https://marcostavares.dev.br/blog/${post?.title}`} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`Blog - ${post?.title}`} />
            <meta property="og:description" content="Marcos Tavares, desenvolvedor full stack especializado em JavaScript. 
                Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas 
                que unem design e funcionalidade para entregar excelência e resultados." />
            <meta property="og:site_name" content="Marcos Tavares full stack" />
            <meta property="og:url" content={`https://marcostavares.dev.br/blog/${post?.title}`} />
            <meta property="og:locale" content="pt_BR" />
            <meta property="article:author" content="https://www.facebook.com/marcostavares.dev" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`Blog - ${post?.title}`} />
            <meta name="twitter:description" content="Marcos Tavares, desenvolvedor full stack especializado em JavaScript. 
                Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas 
                que unem design e funcionalidade para entregar excelência e resultados." />

        </>
    );
};

export default SinglePost;
