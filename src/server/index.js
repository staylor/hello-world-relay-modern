import express from 'express';
import proxy from 'http-proxy-middleware';
import compression from 'compression';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import morgan from 'morgan';
import template from './template';
import App from '../components/App';

const clientAssets = require(KYT.ASSETS_MANIFEST); // eslint-disable-line import/no-dynamic-require
const port = parseInt(KYT.SERVER_PORT, 10);
const app = express();

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use(compression());

app.use(morgan('combined'));

// Setup the public directory so that we can server static assets.
app.use(express.static(path.join(process.cwd(), KYT.PUBLIC_DIR)));

const gqlHost = 'http://localhost:8080';
const gqlPath = '/graphql';
app.use(gqlPath, proxy({
  target: gqlHost,
  changeOrigin: true,
}));

// Setup server side routing.
app.get('*', (request, response) => {
  response.send(template({
    root: renderToString(
      <StaticRouter
        location={request.url}
        context={{}}
      >
        <App />
      </StaticRouter>
    ),
    jsBundle: clientAssets.main.js,
    cssBundle: clientAssets.main.css,
  }));
});

app.listen(port, () => {
  console.log(`✅  server started on port: ${port}`); // eslint-disable-line no-console
});
