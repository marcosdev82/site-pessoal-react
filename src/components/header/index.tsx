import React from 'react';
import  logotipo  from '../../assets/logotipo.png'; // Importando como componente React
import { Container, ContentHeader, LogoWrap, LogoImage, Span, Text, NavIcon, Sanduich, MenuContent } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <ContentHeader>
                <LogoWrap>
                    <LogoImage src={logotipo} alt="Marcos Tavares Desenvolvedor Fulstack"/>  
                    <Text>MARCOS<Span> TAVARES</Span></Text>
                </LogoWrap>

                <NavIcon>
                    <Sanduich />
                </NavIcon>

                <MenuContent>
                    <ul>
                        <li><a href="">Serviços</a></li>
                        <li><a href="">Trabalhos</a></li>
                        <li><a href="">Sobre mim</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                </MenuContent>

            </ContentHeader>
            
        </Container>
    );
}

export default Header;
