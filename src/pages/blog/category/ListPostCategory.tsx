import Sidebar from "../../../components/sidebar";
import { Content, EntryContent } from "../styles";
import EntryTitle from '../../../components/entrytitle';
import { useContext, useEffect } from "react";
import { BlogContext } from "../../../context/BlogContext";
import { BlogContextType } from "../../../types/posts";
import { useParams } from "react-router-dom";

const Category = () => {

    const { slug } = useParams<{ slug: string }>();

    const {
        getCategoryBySlug,
        fetchPosts,
    } = useContext(BlogContext) as BlogContextType;

    useEffect(() => {
        if (slug) {
            getCategoryBySlug(slug);
        }
    }, [slug, getCategoryBySlug]);

    const title = "Categoria"

    return (
        <>
            <section className='entry-title'>
                <EntryTitle title={title} />
            </section>

            <EntryContent>
                <Sidebar />
                <Content>
                    teste
                </Content>
            </EntryContent>

            <title>{`Blog - ${title}`}</title>

            <meta name="description" content="Marcos Tavares, desenvolvedor full stack especializado em JavaScript. 
                Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados." />
            <meta name="keywords" content="desenvolvedor full stack, desenvolvimento web, aplicações escaláveis, criação de sites, 
                sistemas web, design responsivo, programação front-end, programação back-end, React, Node.js, Laravel, desenvolvimento de software, soluções digitais, programador full stack, Marcos Tavares" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={`https://marcostavares.dev.br/blog/${title}`} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`Blog - ${title}`} />
            <meta property="og:description" content="Marcos Tavares, desenvolvedor full stack especializado em JavaScript. 
                Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas 
                que unem design e funcionalidade para entregar excelência e resultados." />
            <meta property="og:site_name" content="Marcos Tavares full stack" />
            <meta property="og:url" content={`https://marcostavares.dev.br/blog/${title}`} />
            <meta property="og:locale" content="pt_BR" />
            <meta property="article:author" content="https://www.facebook.com/marcostavares.dev" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`Blog - ${title}`} />
            <meta name="twitter:description" content="Marcos Tavares, desenvolvedor full stack especializado em JavaScript. 
                Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas 
                que unem design e funcionalidade para entregar excelência e resultados." />

        </>
    );
}

export default Category;