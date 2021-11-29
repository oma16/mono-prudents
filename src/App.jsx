import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router";
import Home from "./screens/index";
import DashboardHome from "./screens/dashboard/index";
import MentorIndex from './screens/mentor';
import AdminIndex from './screens/admin';
import InternIndex from './screens/intern';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashboardHome />} />
      <Route path="/mentor" element={<MentorIndex />} />
      <Route path="/intern" element={<InternIndex />} />
      <Route path="/admin" element={<AdminIndex />} />
    </Routes>
  );
}

export default App;
