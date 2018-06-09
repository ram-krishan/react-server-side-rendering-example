
import React from 'react';
import { Route, Switch } from 'react-router-dom'

import App from './views/App';
import Hello from './views/Hello';

const Routes  = () => (
  <Switch>
    <Route path="/hello" component={Hello} />
    <Route path="/" component={App} />
  </Switch>
)

export default Routes;