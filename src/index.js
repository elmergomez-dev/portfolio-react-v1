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
  <HashRouter>
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/printamerch" element={<Printamerch />} />
      <Route path="/bookishbay" element={<Bookishbay />} />
      <Route path="/downloadtoprint" element={<Downloadtoprint />} />
      <Route path="/moreprojects" element={<MoreProjects />} />
      <Route path="/myportfolio" element={<MyPortfolio />} />
    </Routes>
  </HashRouter>
  </React.StrictMode>
);