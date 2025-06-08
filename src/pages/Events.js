import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Events.css'; // Ensure this file exists

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  return (
    <div className="events-page" data-aos="fade-in">
      <h2 data-aos="fade-down">Upcoming Events</h2>

      {events.length === 0 ? (
        <p data-aos="fade-up">No upcoming events.</p>
      ) : (
        <ul className="events-list">
          {events.map((event, index) => (
            <li className="event-item" key={index} data-aos="zoom-in" data-aos-delay={index * 150}>
              <strong>{event.name}</strong> — <em>{event.date}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Events;
