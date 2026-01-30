// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Advocates from "./pages/Advocates";
import Dashboard from "./pages/Dashboard";
import QueryResolver from "./pages/QueryResolver";

// Components
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/advocates" element={<Advocates />} />

        {/* ================= PROTECTED ROUTES ================= */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/query-resolver/*"
          element={
            <ProtectedRoute>
              <QueryResolver />
            </ProtectedRoute>
          }
        />

        {/* OPTIONAL: 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;