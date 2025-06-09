import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Home.css';
import { FaChurch, FaBible, FaHandsHelping } from 'react-icons/fa';

const Home = () => {
  const [welcomeText, setWelcomeText] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    // Fetch welcome text from backend
    async function fetchWelcome() {
      try {
        const response = await fetch('https://chweb-back.onrender.com/api/site-content/');
        const data = await response.json();

        // Debug output
        console.log('Fetched data:', data);

        // Extract from first item if list is not empty
        if (Array.isArray(data) && data.length > 0) {
          setWelcomeText(data[data.length - 1].welcome_text);

        }
      } catch (error) {
        console.error('Error fetching welcome text:', error);
      }
    }

    fetchWelcome();
  }, []);

  return (
    <>
      <div className="home-page">
        <div className="hero-section" data-aos="fade-down">
          <h1>Welcome to Our Church</h1>
          <p className="welcome-text">{welcomeText || "We are glad to have you here!"}</p>
          <button className="join-btn" data-aos="zoom-in" data-aos-delay="300">Join Us This Sunday</button>
        </div>
      </div>

      <div className="mission-section" data-aos="fade-up">
        <h2>Our Mission</h2>  
        <p>To spread love, faith, and hope in our community.</p>
        <p>Join us in our mission to serve and uplift each other.</p>
        <button className="learn-more-btn" data-aos="zoom-in" data-aos-delay="200">Learn More</button>
      </div>  

      <div className="services-section" data-aos="fade-right">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card" data-aos="zoom-in">
            <FaChurch size={40} className="service-icon" />
            <h3>Sunday Worship</h3>
            <p>10:00 AM</p>
          </div>
          <div className="service-card" data-aos="zoom-in" data-aos-delay="100">
            <FaBible size={40} className="service-icon" />
            <h3>Wednesday Bible Study</h3>
            <p>7:00 PM</p>
          </div>
          <div className="service-card" data-aos="zoom-in" data-aos-delay="200">
            <FaHandsHelping size={40} className="service-icon" />
            <h3>Community Outreach</h3>
            <p>Monthly</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
