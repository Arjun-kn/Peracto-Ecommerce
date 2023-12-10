import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './context/cart';
import { AuthProvider } from './context/auth';

import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
  <AuthProvider>
 
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </AuthProvider>
  
    
  </CartProvider>
);

reportWebVitals();
