import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import './Navigation.css';
import bannerImage from '../assets/dd.jpg';
import collectionBanner from '../assets/ccc.jpg';

const products = [
  { id: 1, image: require('../assets/google.png'), name: 'Smartwatch', description: 'Latest Smartwatch - Fitness & Notifications', price: 450 },
  { id: 2, image: require('../assets/google.png'), name: 'Wireless Earbuds', description: 'Noise Cancelling Earbuds', price: 280 },
  { id: 3, image: require('../assets/google.png'), name: 'Gaming Headset', description: 'High-Quality Gaming Headset', price: 520 },
  { id: 4, image: require('../assets/google.png'), name: 'Smartphone', description: 'New 5G Smartphone - 128GB Storage', price: 3200 },
  { id: 5, image: require('../assets/google.png'), name: 'Bluetooth Speaker', description: 'Portable Speaker - 10H Playtime', price: 390 },
  { id: 6, image: require('../assets/google.png'), name: 'Laptop', description: 'Ultra-slim Laptop - 16GB RAM, 512GB SSD', price: 7500 },
];

const Navigation = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission
    setComment('');
  };

  return (
    <div className="navigation">
      <nav className="navbar">
        <div className="nav-left">
          <ul className="nav-links">
            <li><a onClick={() => navigate('/clothes')}>Clothes</a></li>
            <li><a onClick={() => navigate('/gadgets')}>Gadgets</a></li>
            <li><a onClick={() => navigate('/new')}>New</a></li>
            <li><a onClick={() => navigate('/featured')}>Featured</a></li>
            <li>
              <a href="/barter" onClick={(e) => {
                e.preventDefault();
                navigate('/barter');
              }}>
                Barter
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-center">
          <h1>TECHSELL</h1>
        </div>

        <div className="nav-right">
          <button className="icon-button"><FaSearch /></button>
          <button className="icon-button"><FaShoppingCart /></button>
          <button className="icon-button" onClick={() => navigate('/')}> <FaUser /> </button>
        </div>
      </nav>

      <div className="nav-image-container">
        <img src={bannerImage} alt="TechSell Banner" className="nav-banner" />
      </div>

      <h2 className="new-collections-header">NEW COLLECTIONS</h2>
      <div className="product-container">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p className="price">GH₵ {product.price}</p>
          </div>
        ))}
      </div>

      <div className="collection-banner-container">
        <img src={collectionBanner} alt="Exclusive Collection" className="collection-banner" />
      </div>

      <div className="collection-description">
        <h2>Exclusive Tech Collection</h2>
        <p>
          Discover the latest innovations in technology, from smart gadgets to high-performance 
          devices. Elevate your lifestyle with top-tier products designed for tech enthusiasts.
        </p>
        <button className="view-now-button" onClick={() => navigate('/collections')}>
          View Now
        </button>
      </div>

      <footer className="footer">
        <h2>TECHSELL</h2>
        <p>Your one-stop shop for the latest and most innovative tech products.</p>
        <form className="comment-section" onSubmit={handleCommentSubmit}>
          <textarea 
            placeholder="Write your comment here..." 
            value={comment} 
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </footer>
    </div>
  );
};

export default Navigation;



