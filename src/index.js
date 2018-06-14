import React from 'react';
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';
import configureStore from './state/store';
import Routes from './routes';
import AppLayout from './views/AppLayout';
import {BrowserRouter as Router} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

console.log('its.... working....');

hydrate(
  <Provider store={store}>
    <Router>
      <AppLayout>
          <Routes />
      </AppLayout>
    </Router>
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
