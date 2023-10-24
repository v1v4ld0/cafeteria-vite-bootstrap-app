import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import 'leaflet/dist/leaflet.js';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

let root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
