import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Login} from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import PrivateRoute from './privateRoute';
import { Line } from './pages/Line';
import { Anaminese } from './pages/Anaminese';
import { HospitalList } from './pages/HospitalList';
import { Join } from './pages/Join';
import { Profile } from './pages/Profile';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <PrivateRoute path="/home" exact component={Home} />
            <PrivateRoute path="/line" exact component={Line} />
            <PrivateRoute path="/anaminese" exact component={Anaminese} />
            <PrivateRoute path="/hospital-list" exact component={HospitalList} />
            <PrivateRoute path="/join" exact component={Join} />
            <PrivateRoute path="/profile" exact component={Profile} />
            <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;