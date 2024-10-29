import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';

const AppRoutes: React.FC = () => (
    <Switch>
        <Route path="/home" exact component={Home} />
    </Switch>
);

export default AppRoutes;
