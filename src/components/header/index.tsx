import React from 'react';
import  logotipo  from '../../assets/logotipo.png'; 
import sanduich from '../../assets/sanduich.svg';
import {NavLink } from 'react-router-dom';
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

 // Exemplo de dados para o menu
const menuItems = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Serviços', link: '/servicos' },
    { id: 3, name: 'Trabalhos', link: '/trabalhos' },
    { id: 4, name: 'Sobre min', link: '/sobre-min' },
    { id: 5, name: 'Blog', link: '/blog' },
    { id: 6, name: 'Contato', link: '/contato' },
];

const Header: React.FC = () => {

    return (
        <Container>
            <ContentHeader>
                <LogoWrap>
                    <LogoImage src={logotipo} alt="Marcos Tavares Desenvolvedor Fulstack"/> 
                    <Text>MARCOS<Span> TAVARES</Span> <div className='cicle'>M</div></Text>
                </LogoWrap>

                <MenuContent>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {menuItems.map(item => (
                            <li key={item.id}>
                                <NavLink 
                                    to={item.link} 
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
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
