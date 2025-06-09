import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user, setUser, darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsOpen(false); // Close menu on logout
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          <img src="favicon.ico" alt="Church Logo" className="logo" />
        </Link>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/ministries" onClick={() => setIsOpen(false)}>Ministries</Link>
          <Link to="/sermons" onClick={() => setIsOpen(false)}>Sermons</Link>
          <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>
          <Link to="/giving" onClick={() => setIsOpen(false)}>Giving</Link>

          {user ? (
            <>
              <Link
                to={user.isAdmin ? '/admin' : '/dashboard'}
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setIsOpen(false)}>Members</Link>
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
