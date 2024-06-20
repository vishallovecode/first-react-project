import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';

// react  we need to use react-dom
const rootElem = document.getElementById('myfirstreactProject')
const root = ReactDOM.createRoot(rootElem);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
