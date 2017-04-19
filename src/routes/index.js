
import React from 'react';
import { Route } from 'react-router-dom';
import App from '../components/App';
import Home from '../components/Home';
import Tools from '../components/Tools';

const routes = (
  <Route path="/" component={App}>
    <Route exact path="/" component={Home} />
    <Route path="tools" component={Tools} />
  </Route>
);

export default routes;
