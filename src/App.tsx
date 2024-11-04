import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import GlobalStyles from './styles/GlobalStyles';

import dark from './styles/themes/dark';
import Layout from './components/layout';
import { BrowserRouter as Router, Route, Navigate, Routes  } from 'react-router-dom';


import Home from './pages/home';
import Servicos from './pages/servicos';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicos" element={<Servicos />} />
                {/* Redireciona outras rotas inválidas para a home */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Layout>
          </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
