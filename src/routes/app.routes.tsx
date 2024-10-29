import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../pages/home';

const AppRoutes: React.FC = () => (
    <Router>
        <Route path="/home" element={<Home />} />
    </Router>
);

export default AppRoutes;
