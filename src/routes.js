import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Login} from './pages/Login';
import PageNotFound from './pages/PageNotFound';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;