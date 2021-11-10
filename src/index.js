import React from 'react';
import { render } from "react-dom";
import App from './App';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Routes
import AdminPanel from './components/AdminPanel'
import Signup from './auth/Signup';
import Login from './auth/Login';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthProvider from './contexts/AuthContext';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route path='/adminpanel' element={<AdminPanel />} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </AuthProvider>
  </BrowserRouter>
  ,rootElement);




// ReactDOM.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
