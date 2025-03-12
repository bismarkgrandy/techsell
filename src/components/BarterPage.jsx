import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import './BarterPage.css';
// Remove this line: import barterBanner from '../assets/barter-banner.jpg';

const BarterPage = () => {
  const navigate = useNavigate();

  const barterItems = [
    {
      id: 1,
      name: 'Apple Watch Series 7',
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
      description: 'GPS, 45mm, Space Gray Aluminum Case'
    },
    {
      id: 2,
      name: 'iPhone 13 Pro',
      price: '$899.99',
      image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=500&q=80',
      description: '256GB, Graphite, Excellent Condition'
    },
    {
      id: 3,
      name: 'Samsung Galaxy Buds Pro',
      image: 'https://images.unsplash.com/photo-1627214932841-052c1c471226',
      description: 'Wireless Earbuds with Noise Cancellation'
    },
    {
      id: 4,
      name: 'MacBook Air M1',
      image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
      description: '8GB RAM, 256GB SSD, Space Gray'
    },
    {
      id: 5,
      name: 'iPad Pro 12.9"',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0',
      description: 'M1 Chip, 256GB, With Apple Pencil'
    },
    {
      id: 6,
      name: 'Sony WH-1000XM4',
      image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb',
      description: 'Wireless Noise Cancelling Headphones'
    },
    {
      id: 7,
      name: 'Dell XPS 13',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45',
      description: 'Intel i7, 16GB RAM, 512GB SSD'
    },
    {
      id: 8,
      name: 'GoPro Hero 10',
      image: 'https://images.unsplash.com/photo-1526317899880-30346c1d8b2c',
      description: 'Black, 5.3K Video, Waterproof'
    },
    {
      id: 9,
      name: 'Nintendo Switch OLED',
      image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e',
      description: 'White, With Extra Controllers'
    },
    {
      id: 10,
      name: 'Pixel 6 Pro',
      image: 'https://images.unsplash.com/photo-1635870723802-e88d76ae324e',
      description: '128GB, Stormy Black, Like New'
    },
    {
      id: 11,
      name: 'AirPods Max',
      image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf',
      description: 'Space Gray, Premium Sound Quality'
    },
    {
      id: 12,
      name: 'Surface Pro 8',
      image: 'https://images.unsplash.com/photo-1622533695790-4ccb2eaa3887',
      description: 'i5, 8GB RAM, 256GB SSD, With Keyboard'
    }
  ];

  return (
    <div className="barter-page">
      <nav className="navbar">
        <div className="nav-left">
          <button className="back-button" onClick={() => navigate('/home')}>‹</button>
          <ul className="nav-links">
            <li><a onClick={() => navigate('/clothes')}>Clothes</a></li>
            <li><a onClick={() => navigate('/gadgets')}>Gadgets</a></li>
            <li><a onClick={() => navigate('/new')}>New</a></li>
            <li><a onClick={() => navigate('/featured')}>Featured</a></li>
            <li><a onClick={() => navigate('/barter')}>Barter</a></li>
          </ul>
        </div>

        <div className="nav-center">
          <h1>TECHSELL</h1>
        </div>

        <div className="nav-right">
          <button className="icon-button"><FaSearch /></button>
          <button className="icon-button"><FaShoppingCart /></button>
          <button className="icon-button user-profile"><FaUser /></button>
        </div>
      </nav>

      <div className="barter-content">
        <div className="barter-header">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format" 
            alt="Tech Exchange Banner" 
          />
          <div className="header-text">
            <p>Exchange your tech gadgets with fellow students. Trade smartphones, laptops, tablets, and accessories with others in your campus community.</p>
          </div>
        </div>

        <h2>Available for Barter</h2>
        
        <div className="barter-grid">
          {barterItems.map(item => (
            <div key={item.id} className="barter-card">
              <div className="barter-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="barter-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="trade-section">
          <h3>Want to trade for other items?</h3>
          <button className="upload-button" onClick={() => navigate('/barter/upload')}>
            <svg width="50" height="50" viewBox="0 0 24 24" fill="white">
              <path d="M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BarterPage;