// Header.jsx
import React, { useEffect, useState } from 'react';
import logotipo from '../../assets/logotipo.png';
import Menu from '../menu/index';
import {
    Container,
    ContentHeader,
    LogoWrap,
    LogoImage,
    Span,
    Text,
} from './styles';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const scrollHandler = () => setIsFixed(window.scrollY > 70);
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <Container isFixed={isFixed}>
            <ContentHeader>
                <LogoWrap>
                    <NavLink to="/">
                        <LogoImage src={logotipo} alt="Marcos Tavares Desenvolvedor Fullstack" />
                    </NavLink>
                    <Text>
                        <NavLink to="/"> MARCOS<Span> TAVARES</Span>
                            <div className="cicle">M</div>
                        </NavLink>
                    </Text>
                </LogoWrap>
                <Menu />
            </ContentHeader>
        </Container>
    );
};

export default Header;
