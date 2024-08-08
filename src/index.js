import React from 'react';
import ReactDOM from 'react-dom/client'; // library
import './index.css';
import App from './App';

// importing browser router component
import { BrowserRouter } from 'react-router-dom';

// react  we need to use react-dom
const rootElem = document.getElementById('root')
const root = ReactDOM.createRoot(rootElem);
root.render(
  
//Wrapping all react project with router component 
// so that all the component will be able to use functionality provided by react-router-dom
<BrowserRouter>
 <App />
</BrowserRouter>
); // html or componet

// html code or i can give react component

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// Virtual Dom 
// Component
// React vs ReactDom 
// Dom  
// Mounting

