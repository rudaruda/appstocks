import React from 'react';
import ReactDOM from 'react-dom/client';
// import { StrictMode } from 'react'
import { MantineProvider, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import '@mantine/core/styles.css';

import { createRoot } from 'react-dom/client';
// import './index.css'
import App from './App.jsx';

import { useLocalStorage } from '@mantine/hooks';

function MainProvider() {
  return (
  <MantineProvider classNamesPrefix="app" withGlobalStyles withNormalizeCSS >
    <App />
  </MantineProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainProvider />
  </React.StrictMode>
);
