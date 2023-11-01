import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import 'leaflet/dist/leaflet.js';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

let root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
