import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import './BarterPage.css';

const BarterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="barter-page">
      <nav className="navbar">
        <div className="nav-links">
          <a onClick={() => navigate('/clothes')}>Clothes</a>
          <a onClick={() => navigate('/gadgets')}>Gadgets</a>
          <a onClick={() => navigate('/new')}>New</a>
          <a onClick={() => navigate('/featured')}>Featured</a>
          <a onClick={() => navigate('/barter')}>Barter</a>
        </div>

        <div className="logo">
          <h1>TECHSELL</h1>
        </div>

        <div className="nav-icons">
          <FaSearch className="icon" />
          <FaShoppingCart className="icon" />
          <FaUser className="icon" onClick={() => navigate('/profile')} />
        </div>
      </nav>

      <div className="barter-content">
        <div className="banner-section">
          <img src="/images/barter-banner.jpg" alt="People exchanging items" />
          <p className="banner-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <h2>Available for Barter</h2>
        
        <div className="items-grid">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="item-card">
              <div className="item-placeholder"></div>
              <div className="item-info">
                <h3>Name</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          ))}
        </div>

        <div className="trade-section">
          <h3>Want to trade for other items?</h3>
          <button className="upload-icon">
            <img src="/images/upload-icon.png" alt="Upload" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BarterPage;