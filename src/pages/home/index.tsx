
import { Helmet } from 'react-helmet-async';
import { About, Description, Portrait, Image, SocialMedia, Curriculo } from './styles';
import { Instagram, LinkedIn, GitHub, FileDownload } from '@mui/icons-material';
import Skills from '../../components/skills';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - Marcos Tavares Desenvolvedor Fullstack</title>
                <meta name="description" content="Marcos Tavares, desenvolvedor fullstack especializado em JavaScript. Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados." />
                <link rel="canonical" href="https://marcostavares.dev.br/" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="desenvolvedor fullstack, desenvolvimento web, aplicações escaláveis, criação de sites, sistemas web, design responsivo, programação front-end, programação back-end, React, Node.js, Laravel, desenvolvimento de software, soluções digitais, programador fullstack, Marcos Tavares" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Home - Marcos Tavares Fullstack" />
                <meta property="og:description" content="Marcos Tavares, desenvolvedor fullstack especializado em JavaScript. Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados." />
                <meta property="og:url" content="https://marcostavares.dev.br/" />
                <meta property="og:site_name" content="Marcos Tavares FullStack" />
                <meta property="article:publisher" content="https://www.facebook.com/marcostavares.dev" />
            </Helmet>

            <About>
                <Description>
                    <h2>DESENVOLVEDOR FULLSTACK</h2>
                    <p>Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados.</p>
                    <SocialMedia>
                        <Curriculo>
                            <a href="http://marcostavares.dev.br/" download><span>Download CV</span> <FileDownload style={{ fontSize: 16 }} /></a>
                        </Curriculo>
                        <a href="https://www.linkedin.com/in/marcostavares-dev/" target="_blank" className="social" rel="noopener noreferrer"><LinkedIn style={{ fontSize: 18 }} /></a>
                        <a href="https://www.instagram.com/marcostavares.dev/" target="_blank" className="social" rel="noopener noreferrer"><Instagram style={{ fontSize: 18 }} /></a>
                        <a href="https://github.com/marcosdev82" target="_blank" className="social" rel="noopener noreferrer"><GitHub style={{ fontSize: 16 }} /></a>
                        {/* <a href="https://github.com/marcosdev82" target="_blank" className="social" rel="noopener noreferrer"><GitHub style={{ fontSize: 16 }} /></a> */}
                    </SocialMedia>
                </Description>
                <Portrait>
                    <Image />
                </Portrait>
            </About>

            <Skills />
        </>
    );
}

export default Home;
