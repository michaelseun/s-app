import { Routes, Route } from 'react-router-dom';
import "./index.css";
import React from "react";

import Home from './Home';
import Login from './Pages/Login/Login';
import AdminLogin from './Pages/AdminLogin/AdminLogin'; // Assuming you have an AdminLogin component
import Navsec from './Pages/User/Navsec';
import Home2 from './Home2';
import Hero from './Pages/User/Hero';
import Courses from './Pages/User/Courses';

function App() {
  return (
    <Routes>
      {/* Main home route */}
      <Route path="/" element={<Home />} />
      
      {/* Login route */}
      <Route path="/login" element={<Login />} />
      <Route path="/AdminLogin" element={<AdminLogin />} />

      {/* User section with nested routes */}
      <Route path="/user" element={<Navsec />}>
        <Route index element={<Hero />} />
        <Route path="courses" element={<Courses />} /> {/* Now accessible at /user/courses */}
        {/* Add other user-related routes here */}
      </Route>

      {/* Separate home2 route if needed */}
      <Route path="/home2" element={<Home2 />} />
    </Routes>
  );
}

export default App;