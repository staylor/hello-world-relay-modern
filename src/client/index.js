
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';

const root = document.querySelector('#root');

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
