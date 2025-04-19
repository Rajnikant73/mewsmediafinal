import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// src/main.tsx
import App from './App'; // ✅ Correct
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
