import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import Layout from './components/layout';

const App: React.FC = () => {
  return (
      <>
        <GlobalStyles />
        <Layout /> 
      </>
  );
}

export default App;
