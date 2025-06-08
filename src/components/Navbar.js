import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user, setUser, darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="favicon.ico" alt="Church Logo" className="logo" />
        </Link>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/ministries">Ministries</Link>
          <Link to="/sermons">Sermons</Link>
          <Link to="/events">Events</Link>
          <Link to="/giving">Giving</Link>

          {user ? (
            <>
              <Link to={user.isAdmin ? '/admin' : '/dashboard'}>Dashboard</Link>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Members</Link>
            </>
          )}
        </div>

        
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
         {isOpen ? '×' : '☰'}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
