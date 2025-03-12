import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaBell, FaSignOutAlt, FaPencilAlt } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [bio, setBio] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('ahliyah');

  const handleBack = () => {
    navigate(-1);
  };

  const handleSignOut = () => {
    navigate('/signup');
  };

  const handleUsernameEdit = () => {
    setIsEditing(true);
  };

  const handleUsernameSubmit = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };

  return (
    <div className="full-profile">
      <header>
        <div className="header-left">
          <span className="back-icon" onClick={handleBack}>‹</span>
          <h1>TECHSELL</h1>
          <span className="page-label">profile</span>
        </div>
        <div className="header-right">
          <FaSearch className="header-icon" />
          <FaBell className="header-icon" />
          <FaSignOutAlt className="header-icon" onClick={handleSignOut} />
        </div>
      </header>

      <main>
        <div className="profile-image-section">
          <div className="large-profile-image">
            <span>A</span>
            <button className="edit-photo">
              <FaPencilAlt />
            </button>
          </div>
          <div className="username-section">
            {isEditing ? (
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleUsernameSubmit}
                onBlur={() => setIsEditing(false)}
                autoFocus
                className="username-input"
              />
            ) : (
              <>
                <h2>{username}</h2>
                <FaPencilAlt className="edit-name" onClick={handleUsernameEdit} />
              </>
            )}
          </div>
        </div>

        <div className="bio-section">
          <h3>Bio</h3>
          <textarea
            placeholder="Say a little something about yourself"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
      </main>
    </div>
  );
};

export default Profile;