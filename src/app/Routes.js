import React, { } from 'react';
import HomePage from '../pages/HomePage';
import { Switch, Redirect, Route } from 'react-router-dom';

const Routes = ()=>
(<Switch>
        <Route path="/" component={HomePage} />
        <Redirect to="/" />
    </Switch>
)

export default Routes;