import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Home from "./pages/home/Home";
const RouteConfig = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </section>
  );
};

export default RouteConfig;
