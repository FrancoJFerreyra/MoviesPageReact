import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './scss/index.scss';
import App from './components/App';
//context
import HeaderState from './contexts/Header/HeaderState';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderState>
        <App />
      </HeaderState>
    </BrowserRouter>
  </React.StrictMode>
);
