import React, { useEffect, useState } from 'react';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  return (
    <div className="events-section">
      <h2>Upcoming Events</h2>
      {events.length === 0 ? (
        <p>No upcoming events.</p>
      ) : (
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <strong>{event.name}</strong> - <em>{event.date}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Events;
