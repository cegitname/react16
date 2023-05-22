import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './components/Root/index.jsx'
import Data from './components/Data/index.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
let names = 'list'
root.render(
  <React.StrictMode>
    <Root names={ names }></Root>
    <Data></Data>
  </React.StrictMode>
);



