import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

if (import.meta.env.MODE !== 'production') {
  import('react-axe').then(axe => {
    axe.default(React, ReactDOM, 1000);
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
