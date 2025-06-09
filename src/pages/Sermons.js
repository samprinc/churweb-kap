import React, { useEffect, useState } from 'react';
import '../styles/Sermons.css';

const Sermons = () => {
  const [sermons, setSermons] = useState([]);

  useEffect(() => {
    fetch("https://chweb-back.onrender.com/api/sermons/")
      .then(res => res.json())
      .then(data => setSermons(data))
      .catch(err => console.error('Failed to fetch sermons:', err));
  }, []);

  return (
    <div className="sermons-page">
      <h2>Past Sermons</h2>
      <ul className="sermons-list">
        {sermons.length === 0 ? (
          <li>Loading sermons...</li>
        ) : (
          sermons.map((sermon, idx) => (
            <li key={idx} className="sermon-card">
              <h3>{sermon.title}</h3>
              <p><strong>Date:</strong> {sermon.date}</p>
              <p><strong>Speaker:</strong> {sermon.speaker}</p>
              <button className="listen-btn">Listen</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Sermons;
