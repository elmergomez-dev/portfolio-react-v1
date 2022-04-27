import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Printamerch,
  Bookishbay,
  Downloadtoprint,
  MoreProjects,
  MyPortfolio,
} from "./components";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/printamerch" element={<Printamerch />} />
      <Route path="/bookishbay" element={<Bookishbay />} />
      <Route path="/downloadtoprint" element={<Downloadtoprint />} />
      <Route path="/moreprojects" element={<MoreProjects />} />
      <Route path="/myportfolio" element={<MyPortfolio />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);