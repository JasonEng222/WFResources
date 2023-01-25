import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root, "root")
// console.log(App, "App")
// console.log(Provider, "Provider")
// root.render(
//   <Provider><App/></Provider>
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
