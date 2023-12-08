import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import MyId from './MyId';
import { UserContextProvider } from './context/userContext';


import { AuthContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <UserContextProvider>
     <App />
     </UserContextProvider>
     </AuthContextProvider>
  </React.StrictMode>
);
