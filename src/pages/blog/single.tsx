import EntryTitle from '../../components/entrytitle';
import Sidebar from '../../components/sidebar';
import Head from '../../components/head';
import { Content, EntryContent } from './styles';

const SinglePost = () => {

    return (
        <>
            <Head
                title='Blog - Marcos Tavares full stack'
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
                <EntryTitle title="Single post" />
            </section>

            <EntryContent>
                <Sidebar />
                <Content>
                    <h1>Single post</h1>
                    <p>Conteúdo do post aqui...</p>
                </Content>
            </EntryContent>

        </>
    );
};

export default SinglePost;
