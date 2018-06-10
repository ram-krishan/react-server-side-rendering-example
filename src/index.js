import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';
import configureStore from './state/store';
import Routes from './routes';
import AppLayout from './views/AppLayout';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppLayout>
      <Routes />
    </AppLayout>
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
