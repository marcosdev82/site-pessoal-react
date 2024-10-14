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
                    <ul>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Trabalhos</a></li>
                        <li><a href="#">Sobre mim</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </MenuContent>
              
                <NavIcon>
                    <MenuIcon src={sanduich}/>
                </NavIcon>
            </ContentHeader>
            
        </Container>
    );
}

export default Header;
