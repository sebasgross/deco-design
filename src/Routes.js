import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../src/components/index'

export default () => (<Switch>
    <Route exact path="/" component={Index} />

    </Switch>)