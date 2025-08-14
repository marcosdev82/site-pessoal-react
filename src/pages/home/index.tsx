
import { About, Description, Portrait, Image, SocialMedia, Curriculo } from './styles';
import { Instagram, LinkedIn, GitHub, FileDownload } from '@mui/icons-material';
import Skills from '../../components/skills';
import portraitImg from '../../assets/images/thumb-marcos.jpg';

const Home = () => {
    return (
        <>
            <About>
                <Description>
                    <h2 className="typewriter">DESENVOLVEDOR FULL STACK </h2>
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
                    <Image src={portraitImg} width={260} height={260} className='photo' />
                </Portrait>
            </About>

            <Skills />

            <title>Home - Marcos Tavares Desenvolvedor Full stack</title>
            <meta name="description" content="Marcos Tavares, desenvolvedor full stack especializado em JavaScript. Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados." />
            <link rel="canonical" href="https://marcostavares.dev.br/" />
            <meta name="robots" content="index, follow" />
            <meta name="keywords" content="desenvolvedor full stack, desenvolvimento web, aplicações escaláveis, criação de sites, sistemas web, design responsivo, programação front-end, programação back-end, React, Node.js, Laravel, desenvolvimento de software, soluções digitais, programador full stack, Marcos Tavares" />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Home - Marcos Tavares full stack" />
            <meta property="og:description" content="Marcos Tavares, desenvolvedor full stack especializado em JavaScript. Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados." />
            <meta property="og:url" content="https://marcostavares.dev.br/" />
            <meta property="og:site_name" content="Marcos Tavares full stack" />
            <meta property="article:publisher" content="https://www.facebook.com/marcostavares.dev" />
        </>
    );
}

export default Home;
