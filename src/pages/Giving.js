// pages/Giving.js
import React from 'react';
import '../styles/Giving.css';

const Giving = () => {
  return (
    <div className="giving-page">
      <h2>Support Our Church</h2>
      <p>Your generosity helps us grow and serve the community.</p>
      <div className="giving-options">
        <div className="giving-method">
          <h3>M-Pesa</h3>
          <p>Send your donation to: <strong>+254 700 123456</strong></p>
        </div>
        <div className="giving-method">
          <h3>Bank Transfer</h3>
          <p>Account Name: Church Trust</p>
          <p>Account Number: 1234567890</p>
          <p>Bank: Your Bank Name</p>
        </div>
      </div>
      <p className="thank-you">Thank you for your support and blessings!</p>
    </div>
  );
};

export default Giving;
// This is the Giving page component for the church website.