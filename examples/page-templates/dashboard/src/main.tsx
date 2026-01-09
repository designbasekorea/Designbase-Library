import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Designbase UI CSS 임포트 (필수!)
import '@designbasekorea/tokens/dist/css/tokens.css';
import '@designbasekorea/theme/dist/css/theme.css';
import '@designbasekorea/ui/dist/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

