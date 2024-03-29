import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App2 from "./appsl/ApiCountries/App2";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Grav from "./appsl/gravity/Grav";
import Country from "./appsl/ApiCountries/componets/Country";
import Name from "./appsl/name/Name";
import PingPong from "./appsl/PingPong/PingPong";
import Space from "./appsl/space/App3";

//import Grav from './apps/grav/Grav';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {" "}
      </Route>
      <Route path="/portafolio" element={<App />}>
        {" "}
      </Route>
      <Route path="/Grav" element={<Grav />}>
        {" "}
      </Route>
      <Route path="/ApiCountries" element={<App2 />}>
        {" "}
      </Route>
      <Route path="/country/:name" element={<Country />} />
      <Route path="/Name" element={<Name />}>
        {" "}
      </Route>
      <Route path="/PingPong" element={<PingPong />}>
        {" "}
      </Route>
      <Route path="/space" element={<Space />}>
        {" "}
      </Route>
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
