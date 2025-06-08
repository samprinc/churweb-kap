import React from 'react';
import '../styles/Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <h2 className="settings-title">Account Settings</h2>
      <p className="settings-description">
        Manage your account preferences and security settings
      </p>

      {/* Account Information */}
      <div className="settings-section">
        <h3>Account Information</h3>
        <div className="setting-item">
          <label>Email Address</label>
          <p>sammybett369@gmail.com</p>
        </div>
        <div className="setting-item">
          <label htmlFor="new-password">Change Password</label>
          <input type="password" id="new-password" placeholder="Enter new password" />
        </div>
      </div>

      {/* Notifications */}
      <div className="settings-section">
        <h3>Notifications</h3>
        <div className="setting-item">
          <label>Email Notifications</label>
          <div className="toggle">
            <input type="checkbox" id="email-notifications" defaultChecked />
            <label htmlFor="email-notifications"></label>
          </div>
          <p className="hint">Receive important account notifications</p>
        </div>
      </div>

      {/* Privacy */}
      <div className="settings-section">
        <h3>Privacy</h3>
        <div className="setting-item">
          <label>Private Account</label>
          <div className="toggle">
            <input type="checkbox" id="private-account" />
            <label htmlFor="private-account"></label>
          </div>
          <p className="hint">Make your profile visible only to your connections</p>
        </div>
      </div>

      {/* Account Actions */}
      <div className="settings-section danger-zone">
        <h3>Account Actions</h3>
        <p className="danger-text">
          Permanently delete your account and all associated data. This action cannot be undone.
        </p>
        <button className="delete-button">Delete Account</button>
      </div>
    </div>
  );
};

export default Settings;
