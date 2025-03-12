import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css'; // This critical import was missing
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);