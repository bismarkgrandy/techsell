import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePopup.css';

const ProfilePopup = ({ onClose }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    onClose();
    navigate('/profile');
  };

  return (
    <>
      <div className="profile-overlay" onClick={onClose} />
      <div className="profile-popup">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="profile-header">
          <div className="profile-avatar">A</div>
          <h3 className="profile-name">ahliyah</h3>
        </div>
        <div className="profile-menu">
          <button className="menu-item" onClick={handleViewProfile}>
            View full profile
          </button>
          <button className="menu-item" onClick={() => navigate('/settings')}>
            Settings
          </button>
          <button className="menu-item" onClick={() => navigate('/feedback')}>
            Give feedback
          </button>
          <button className="menu-item" onClick={() => navigate('/help')}>
            Get help
          </button>
          <div className="status-toggle">
            <span className="status-dot"></span>
            <span>Offline</span>
          </div>
          <button className="sign-out" onClick={() => navigate('/signup')}>
            Sign out
          </button>
        </div>
        <div className="footer-links">
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/cookie">Cookie Policy</a>
        </div>
        <div className="copyright">
          © 2024 TECHSELL
        </div>
      </div>
    </>
  );
};

export default ProfilePopup;