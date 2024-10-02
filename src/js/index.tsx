import '../scss/style.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './app';

const rootEl = document.querySelector('#root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <HashRouter>
      <App />
    </HashRouter>,
  );
}
