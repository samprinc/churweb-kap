import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Ministries from './pages/Ministries';
import Sermons from './pages/Sermons';
import Events from './pages/Events';
import Giving from './pages/Giving';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const [user, setUser] = useState(null);

  // Theme state: true = dark mode, false = light mode
  const [darkMode, setDarkMode] = useState(true);

  // Load user from localStorage once on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Load saved theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Save theme preference whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Router>
        {/* Pass darkMode and toggle function down to Navbar for toggle button */}
        <Navbar user={user} setUser={setUser} darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/events" element={<Events />} />
            <Route path="/giving" element={<Giving />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Login setUser={setUser} />} />
            <Route path="/admin" element={user ? <AdminDashboard /> : <Login setUser={setUser} />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
