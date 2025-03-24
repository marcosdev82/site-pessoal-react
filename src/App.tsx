import React from "react";
import { ThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import GlobalStyles from "./styles/GlobalStyles";

import dark from "./styles/themes/dark";
import Layout from "./components/layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Servicos from "./pages/servicos";
import Contato from "./pages/contato";
import Blog from "./pages/blog";
import SinglePost from "./pages/blog/SinglePost";
import Trabalhos from "./pages/trabalhos";
import Sobre from "./pages/sobre";

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:post" element={<SinglePost />} />
              <Route path="/trabalhos" element={<Trabalhos />} />
              <Route path="/sobre" element={<Sobre />} />
              {/* Redireciona outras rotas inválidas para a home */}
              {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
