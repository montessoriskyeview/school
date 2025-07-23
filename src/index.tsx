import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Load non-critical CSS asynchronously
const loadNonCriticalCSS = () => {
  // Create link elements for non-critical CSS
  const createStylesheetLink = (href: string) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    link.onload = () => {
      link.media = 'all';
    };
    document.head.appendChild(link);
  };

  // Load theme CSS
  createStylesheetLink('/static/css/main.css');

  // Load Roboto fonts
  createStylesheetLink(
    'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
  );
};

// Load non-critical CSS after initial render
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadNonCriticalCSS);
} else {
  // Use requestIdleCallback for better performance
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadNonCriticalCSS);
  } else {
    setTimeout(loadNonCriticalCSS, 1);
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
