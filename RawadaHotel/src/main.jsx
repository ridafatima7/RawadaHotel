import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/HomePage.css';
import './assets/PolicyPages.css';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
