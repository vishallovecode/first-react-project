import React from 'react';
import ReactDOM from 'react-dom/client'; // library
import './index.css';
import App from './App';

// react  we need to use react-dom
const rootElem = document.getElementById('root')
const root = ReactDOM.createRoot(rootElem);
root.render(<App />); // html or componet

// html code or i can give react component

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
