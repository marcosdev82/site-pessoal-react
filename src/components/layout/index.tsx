import React, { ReactNode } from 'react';
import { Grid, Container } from './styles';
import Header from '../header';
import Footer from '../footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Grid>
            <Header />
                <Container>{ children }</Container>
            <Footer /> 
        </Grid>
    );
}

export default Layout;