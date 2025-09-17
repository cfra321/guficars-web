import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "../../src/shared/components/loading/index.js";

const DashboardHome = lazy(() => import("./dashboard-home/index.js"));
const Cars = lazy(() => import("./cars/index.js"));
const Sell = lazy(() => import("./sell/index.js"));
const About = lazy(() => import("./about/index.js"));
const Contact = lazy(() => import("./contact/index.js"));

const MainRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard-home" replace />} />
      <Route path="/dashboard-home" element={<DashboardHome />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Suspense>
);

export default MainRoutes;
