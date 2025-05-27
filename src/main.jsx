import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/TP5-React-Router-Fridman-Otero">
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
