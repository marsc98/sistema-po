import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Login} from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import PrivateRoute from './privateRoute';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <PrivateRoute path="/home" exact component={Home} />
            <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;