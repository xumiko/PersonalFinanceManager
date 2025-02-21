// import{ BrowserRouter, Route, Routes } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
// import { Header } from "./components/header/Header";
// import { Home } from "./components/home/Home";
// import { About } from "./components/about/About";


// function App() {

//   return (
//     <BrowserRouter>
//     <Header/>
//     <Home />
//     <About/>
      
//     </BrowserRouter>
//   )
// }

// export default App

//-----------------------------------------------------------------------------------------------------


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import {Link} from 'react-router-dom';
import { Header } from './components/header/Header'; 
import { Home } from './components/home/Home'; 
import { About } from './components/about/About'; 
import { Login } from './components/login/Login'; 
import { Register } from './components/register/Register'; 
import { Notfound } from './components/notFound/Notfound';
import Dashboard from './components/dashboard/Dashboard';
import DashboardNavbar from './components/dashboardNavbar/DashboardNavbar';


function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);  // Manage login state

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    return storedLoginStatus === 'true'; // If 'true', user is logged in
  })

  const handleLogin = () => {
    setIsLoggedIn(true);  // Set login state to true
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);  // Set login state to false
    localStorage.setItem('isLoggedIn', 'false');
  };


  return (
    <Router>

      {isLoggedIn ? (
        <DashboardNavbar onLogout={handleLogout} /> // Show the dashboard navbar if logged in
      ) : (
        <Header /> // Otherwise, show the common header
      )}


{/* 
      <Header />    */}

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/notFound" element={<Notfound />} />
        <Route path="/register" element={<Register />} /> 

        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
