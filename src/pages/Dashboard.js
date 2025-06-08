import React, { useState } from 'react';
import '../styles/Dashboard.css';
import Library from '../Sections/Library';
import Events from '../Sections/Events';
import Gallery from '../Sections/Gallery';
import Shop from '../Sections/Shop';
import Settings from '../Sections/Settings';
import TalkToUs from '../Sections/TalkToUs';

const Dashboard = ({ user }) => {
  const [activeSection, setActiveSection] = useState('Library');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    alert('Logout triggered');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'Library': return <Library searchQuery={searchQuery} />;
      case 'Events': return <Events />;
      case 'Gallery': return <Gallery />;
      case 'Shop': return <Shop />;
      case 'Settings': return <Settings />;
      case 'Talk to Us': return <TalkToUs user={user} />;
      default: return <p>Select a section</p>;
    }
  };

  return (
    <div className="dashboard-container">
      <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰
      </button>

      <aside className={`sidebar ${sidebarOpen ? 'open' : 'collapsed'}`}>
        <h2>Dashboard</h2>
        <nav>
          <ul>
            {['Library', 'Events', 'Gallery', 'Shop', 'Talk to Us', 'Settings'].map((section) => (
              <li
                key={section}
                className={activeSection === section ? 'active' : ''}
                onClick={() => {
                  setActiveSection(section);
                  setSidebarOpen(false); // close sidebar on mobile after selecting
                }}
              >
                {section}
              </li>
            ))}
            <li className="logout" onClick={handleLogout}>Logout</li>
          </ul>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Welcome, {user?.email || 'User'}!</h1>
          <p>Resource </p>
          <p className="sub">
            Grow spiritually with devotionals, sermons, and study guides curated for your faith journey.
          </p>

          {activeSection === 'Library' && (
            <input
              type="text"
              placeholder="Search by title, author or keyword..."
              className="search-box"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          )}
        </header>

        <section className="resource-section">
          {renderSection()}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
