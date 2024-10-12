import React from 'react';
import  logotipo  from '../../assets/logotipo.png'; // Importando como componente React
import { Container, ContentHeader, LogoImage, Span, Text, ContentNav } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <ContentHeader>
                <LogoImage src={logotipo} alt="Marcos Tavares Desenvolvedor Fulstack"/>  
                <Text>MARCOS<Span> TAVARES</Span></Text>
            </ContentHeader>
            <ContentNav>

            </ContentNav>
        </Container>
    );
}

export default Header;
