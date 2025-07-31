/*import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';


function App() {
//  return <Home />;
  return (
    <div>
      <LandingPage/>
     
    </div>
  );
}

export default App;*/

// App.js or App.jsx/*
/*
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import LandingPage from "./pages/LandingPage";
import Payment from './pages/Payment';

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<LandingPage />} />    
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/payment" element={<Payment />} />

      </Routes>
    </Router>
  );
}

export default App;*/

//changes

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import LandingPage from "./pages/LandingPage";
import Payment from './pages/Payment';
import RecentlyPlayed from './pages/RecentlyPlayed'; // ✅ added

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/recently" element={<RecentlyPlayed />} /> {/* ✅ added */}
      </Routes>
    </Router>
  );
}

export default App;


