import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from '../src/redux/store';
import App from './components/app/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <Provider store={setupStore()}>
    <React.StrictMode>
      <ToastContainer />
      <App />
    </React.StrictMode>
  </Provider>,
);
