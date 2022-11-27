import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { loadDevTools } from 'jira-dev-tool';
import { AppProviders } from './context';

import App from './App';

import './index.css';
import 'antd/dist/reset.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

loadDevTools(() => {
  root.render(
    <React.StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
