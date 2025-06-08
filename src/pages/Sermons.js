// pages/Sermons.js
import React from 'react';
import '../styles/Sermons.css';

const sermons = [
  { title: 'Faith in Action', date: 'June 1, 2025', speaker: 'Pastor John Doe' },
  { title: 'The Power of Prayer', date: 'May 25, 2025', speaker: 'Pastor Jane Smith' },
  { title: 'Living with Hope', date: 'May 18, 2025', speaker: 'Pastor Mark Johnson' },
];

const Sermons = () => {
  return (
    <div className="sermons-page">
      <h2>Past Sermons</h2>
      <ul className="sermons-list">
        {sermons.map((sermon, idx) => (
          <li key={idx} className="sermon-card">
            <h3>{sermon.title}</h3>
            <p><strong>Date:</strong> {sermon.date}</p>
            <p><strong>Speaker:</strong> {sermon.speaker}</p>
            <button className="listen-btn">Listen</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sermons;
