import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Navbar from "./Navbar";
import Home from "./Home";
import Sightseeing from "./Sightseeing";
import SightseeingCard from "./SightseeingCard";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/sightseeing" element={<Sightseeing />}>
        <Route
          path="/sightseeing/:scenicSpotId"
          element={<SightseeingCard />}
        />
      </Route>
      <Route path="/APP" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
