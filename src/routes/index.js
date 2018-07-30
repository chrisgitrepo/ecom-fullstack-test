import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ConnectedHomePage } from '../views/HomePage';
import NotFound from '../views/NotFound';

export default (
    <Switch>
        <Route exact path="/" component={ConnectedHomePage} />
        <Route path="*" component={NotFound} />
    </Switch>
);