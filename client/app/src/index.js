import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom'
import App from './App';
import Navbar from "./components/navbar"
import reportWebVitals from './reportWebVitals';
import Context from './helpers/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Context>
);


reportWebVitals();
