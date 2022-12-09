import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App'; //App.js
import CSRFToken from './pages/csrftoken';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <CSRFToken />
    </BrowserRouter>
  </React.StrictMode>
);
