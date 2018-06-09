
import React from 'react';
import { Route, Switch } from 'react-router-dom'

import App from './views/App';
import User from './views/User';
import Todo from './views/Todo';


const Routes  = () => (
  <Switch>
    <Route path="/user" component={User} />
    <Route path="/todo" component={Todo} />
    <Route path="/" component={App} />
  </Switch>
)

export default Routes;