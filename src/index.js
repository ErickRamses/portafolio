import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from "./appsl/ApiCountries/App2"

import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Grav from './appsl/gravity/Grav';
import Country from "./appsl/ApiCountries/componets/Country"
//import Grav from './apps/grav/Grav';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/portafolio" element={<App />}> </Route>
      <Route path="/" element={<App2/>}> </Route>
      <Route path="/Grav" element={<Grav/>}> </Route>
      <Route path="/ApiCountries" element={<App2/>}> </Route>
      <Route path="/country/:name" element={<Country/>} />

    </Routes>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
