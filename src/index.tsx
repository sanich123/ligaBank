import { createRoot } from 'react-dom/client';
import React from 'react';
import Main from './components/main';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
