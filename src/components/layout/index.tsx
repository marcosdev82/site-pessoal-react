import React from 'react';
import { Grid } from './styles';

import Header from '../header';
import Content from '../content';
import Footer from '../footer';

const Layout: React.FC = () => {
    return (
        <Grid>
            <Header />
            <Content /> 
            <Footer /> 
        </Grid>
    );
}

export default Layout;