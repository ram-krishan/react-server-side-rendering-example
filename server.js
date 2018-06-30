import path from 'path';
import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import {Helmet} from "react-helmet";
import fs from 'fs';

import configureStore from './src/state/store';

import Routes from './src/routes';
import AppLayout from './src/views/AppLayout';

const app = Express()
const port = 5000

//Serve static files
app.use('/static', Express.static('static'))
app.use('/', Express.static('build'))

// This is fired every time the server side receives a request
app.use(handleRender)


app.listen(port, () => {
  console.log("server started on port 5000 \n Press Ctrl + C to stop.");
  console.log('visit http://localhost:5000')
});

function handleRender(req, res) {
  console.log('....................req.............', req.url);
  // Create a new Redux store instance
  const store = configureStore();

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <AppLayout>
          <Routes />
        </AppLayout>
      </StaticRouter>
    </Provider>
  );
  const helmet = Helmet.renderStatic();

// Grab the initial state from our Redux store
const preloadedState = store.getState()
// Send the rendered page back to the client
res.send(renderFullPage(html, preloadedState, helmet))
}


function renderFullPage(html, preloadedState, helmet) {
  const assetsJson = JSON.parse(fs.readFileSync('./build/asset-manifest.json'));

  return `
    <!doctype html>
    <html>
      <head>
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.title.toString()}

        <link rel="stylesheet" href="/${assetsJson['main.css']}">
        <script src="/${assetsJson['main.js']}" defer></script>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
      </body>
    </html>
    `
}