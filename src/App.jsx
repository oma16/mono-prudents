import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router";
import Home from "./screens/index";
import DashboardHome from "./screens/dashboard/index";
import MentorSample from './screens/mentor/sample/Sample';
import AdminIndex from './screens/admin';
import InternSample from './screens/intern/sample/Sample';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashboardHome />} />
      <Route path="/mentor" element={<MentorSample />} />
      <Route path="/intern" element={<InternSample />} />
      <Route path="/admin" element={<AdminIndex />} />
    </Routes>
  );
}

export default App;
