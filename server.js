import path from 'path';
import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import {Helmet} from "react-helmet";

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

// We are going to fill these out in the sections to follow
function handleRender(req, res) { /* ... */ }
function renderFullPage(html, preloadedState) { /* ... */ }

app.listen(port)

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
  return `
    <!doctype html>
    <html>
      <head>
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.title.toString()}

        // need to make this dynamically................
        <link rel="stylesheet" href="/static/css/main.e0b3d3de.css">
        <script src="/static/js/main.99d1b178.js" defer></script>
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