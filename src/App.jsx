import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router";
import Home from "./layouts/Index";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
  );
}

export default App;
