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
import Register from './Pages/Register/Register';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import AdminScreen from './Pages/Adminscreen/AdminScreen';
import SenCourses from './Pages/User/SenCourses/SenCourses';
import CybCourse from './Pages/User/CybCourse/CybCourse';

function App() {
  return (
    <Routes>
      {/* Main home route */}
      <Route path="/" element={<Home />} />
      
      {/* Login route */}
      <Route path="/login" element={<Login />} />
      <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/AdminDashboard" element={<AdminDashboard />} />
      <Route path="/AdminScreen" element={<AdminScreen />} />

      {/* User section with nested routes */}
      <Route path="/user" element={<Navsec />}>
        <Route index element={<Hero />} />
        <Route path="courses" element={<Courses />} />
        <Route path="SenCourses" element={<SenCourses />} />
        <Route path="CybCourse" element={<CybCourse />} /> {/* Now accessible at /user/courses */}
        {/* Add other user-related routes here */}
      </Route>

      {/* Separate home2 route if needed */}
      <Route path="/home2" element={<Home2 />} />
    </Routes>
  );
}

export default App;