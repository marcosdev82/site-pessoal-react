import React from 'react';
import { Grid } from './styles';

import Header from '../header';
import Aside from '../aside';
import Content from '../content';
import Footer from '../footer';

const Layout: React.FC = () => {
    return (
        <Grid>
            <Header />
            <Aside />
            <Content /> 
            <Footer /> 
        </Grid>
    );
}

export default Layout;