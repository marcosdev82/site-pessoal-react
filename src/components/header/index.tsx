import React from 'react';
import  logotipo  from '../../assets/logotipo.png'; 
import Menu from '../menu/index';

import { 
    Container, 
    ContentHeader, 
    LogoWrap, 
    LogoImage, 
    Span, 
    Text, 
} from './styles';
const Header = () => {

    return (
        <Container>
            <ContentHeader>
                <LogoWrap>
                    <LogoImage src={logotipo} alt="Marcos Tavares Desenvolvedor Fulstack"/> 
                    <Text>MARCOS<Span> TAVARES</Span> <div className='cicle'>M</div></Text>
                </LogoWrap>
                <Menu /> 
            </ContentHeader>
        </Container>
    );
}

export default Header;
