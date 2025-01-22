import React from 'react';
import logotipo  from '../../assets/logotipo.png'; // Importando como componente React
import { Container, ContentFooter, LogoImageF, Copywriter } from './styles';

const Footer = () => {
    return (
        <Container>
            <ContentFooter>
               <LogoImageF src={logotipo} alt="Marcos Tavares Desenvolvedor Fulstack"/>  
               <Copywriter>
                 © 2024 Todos os direitos reservados por Marcos Tavares
               </Copywriter>
            </ContentFooter>
        </Container>
    );
}

export default Footer;