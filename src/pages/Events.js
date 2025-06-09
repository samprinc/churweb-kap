import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    fetch("https://chweb-back.onrender.com/api/events/")
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch events');
        return res.json();
      })
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error loading events: {error}</p>;

  return (
    <div className="events-page" data-aos="fade-in">
      <h2 data-aos="fade-down">Upcoming Events</h2>
      {events.length === 0 ? (
        <p data-aos="fade-up">No upcoming events.</p>
      ) : (
        <ul className="events-list">
          {events.map((event, index) => (
            <li
              className="event-item"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <strong>{event.name}</strong> — <em>{event.date}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Events;
