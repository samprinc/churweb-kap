// components/Footer.js
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Kapsisywa Deliverance</h3>
          <p>Spreading the gospel, building a family of believers.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ministries">Ministries</Link></li>
            <li><Link to="/sermons">Sermons</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/giving">Giving</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@churchsite.com</p>
          <p>Phone: +254 712 345 678</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()}Deliverance Kapsisywa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
