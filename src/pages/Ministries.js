// pages/Ministries.js
import React from 'react';
import '../styles/Ministries.css';

const ministriesData = [
  { name: 'Youth Ministry', description: 'Engaging the young generation in faith and fellowship.' },
  { name: 'Eagles - Men', description: 'Empowering men to lead with strength and compassion.' },
  { name: 'Kingdom Generation - Children', description: 'Nurturing faith in our youngest members.' },
  { name: 'Daughters of Faith', description: 'Women united in prayer and service.' },
];

const Ministries = () => {
  return (
    <div className="ministries-page">
      <h2>Our Ministries</h2>
      <div className="ministries-list">
        {ministriesData.map((ministry, idx) => (
          <div key={idx} className="ministry-card">
            <h3>{ministry.name}</h3>
            <p>{ministry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ministries;
