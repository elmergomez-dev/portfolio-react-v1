import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Printamerch,
  Bookishbay,
  Downloadtoprint,
  MoreProjects,
  MyPortfolio,
} from "./components";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/printamerch" element={<Printamerch />} />
      <Route path="/bookishbay" element={<Bookishbay />} />
      <Route path="/downloadtoprint" element={<Downloadtoprint />} />
      <Route path="/moreprojects" element={<MoreProjects />} />
      <Route path="/myportfolio" element={<MyPortfolio />} />
    </Routes>
  </Router>
  </React.StrictMode>
);