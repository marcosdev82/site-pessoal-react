import React from 'react';
import  logotipo  from '../../assets/logotipo.png'; 
import sanduich from '../../assets/sanduich.svg';
import { 
    Container, 
    ContentHeader, 
    LogoWrap, 
    LogoImage, 
    Span, 
    Text, 
    NavIcon,
    MenuIcon, 
    MenuContent
 } from './styles';

const Header: React.FC = () => {

    return (
        <Container>
            <ContentHeader>
                <LogoWrap>
                    <LogoImage src={logotipo} alt="Marcos Tavares Desenvolvedor Fulstack"/> 
                    <Text>MARCOS<Span> TAVARES</Span> <div className='cicle'>M</div></Text>
                </LogoWrap>

                <MenuContent>
                    {/* <ul>
                        <li><a href="https://marcostavares.dev.br/">Serviços</a></li>
                        <li><a href="https://marcostavares.dev.br/">Trabalhos</a></li>
                        <li><a href="https://marcostavares.dev.br/">Sobre mim</a></li>
                        <li><a href="https://marcostavares.dev.br/">Blog</a></li>
                        <li><a href="https://marcostavares.dev.br/">Contato</a></li>
                    </ul> */}
                </MenuContent>
              
                <NavIcon>
                    <MenuIcon src={sanduich}/>
                </NavIcon>
            </ContentHeader>
            
        </Container>
    );
}

export default Header;
