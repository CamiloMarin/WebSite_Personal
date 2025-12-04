// Modo de prueba
import { StrictMode } from 'react';

// React Router
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import './global.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
