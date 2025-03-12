import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import './FeaturedPage.css';

const FeaturedPage = () => {
  const navigate = useNavigate();

  const featuredItems = [
    {
      id: 1,
      title: "Premium Headphones",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&w=500&q=80"
    },
    {
      id: 2,
      title: "Leather Backpack",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&w=500&q=80"
    },
    {
      id: 3,
      title: 'STATIONERY',
      image: 'https://images.unsplash.com/photo-1568205612837-017257d2310a?w=500&auto=format',
      description: 'School supplies'
    },
    {
      id: 4,
      title: 'ACCESSORIES',
      image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&auto=format',
      description: 'Student essentials'
    },
    {
      id: 5,
      title: 'DORM ITEMS',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format',
      description: 'Room essentials'
    },
    {
      id: 6,
      title: 'STUDY TOOLS',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format',
      description: 'Learning aids'
    }
  ];

  return (
    <div className="featured-page">
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
          <button className="icon-button user-profile" onClick={() => navigate('/profile')}><FaUser /></button>
        </div>
      </nav>

      <div className="featured-grid">
        // In your map function where you render products
        {featuredItems.map(item => (
          <div key={item.id} className="product-card" onClick={() => navigate(`/product/${item.id}`)}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button className="details-button">See Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPage;