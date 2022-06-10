import { createRoot } from 'react-dom/client';
import App from './components/app/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <React.StrictMode>
    <ToastContainer />
    <App />
  </React.StrictMode>,
);
