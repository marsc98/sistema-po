import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Login} from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import { Register } from './pages/Register';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;