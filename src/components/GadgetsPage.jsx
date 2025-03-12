import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import './GadgetsPage.css';

const GadgetsPage = () => {
  const navigate = useNavigate();

  const gadgetItems = [
    {
      id: 1,
      name: "Smart Watch Pro",
      price: "$299.99",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format"
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      price: "$159.99",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format"
    },
    {
      id: 3,
      name: "Gaming Laptop",
      price: "$1299.99",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format"
    },
    {
      id: 4,
      name: "4K Monitor",
      price: "$449.99",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format"
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&auto=format"
    },
    {
      id: 6,
      name: "Premium Headphones",
      price: "$159.99",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 7,
      name: "Tablet Pro",
      price: "$699.99",
      image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format"
    },
    {
      id: 8,
      name: "Smartphone",
      price: "$899.99",
      image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=500&auto=format"
    },
    {
      id: 9,
      name: "Wireless Charger",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1622436765372-78f7f5183f74?w=500&auto=format"
    },
    {
      id: 10,
      name: "Portable SSD",
      price: "$159.99",
      image: "https://images.unsplash.com/photo-1563997080287-f3e15d438a24?w=500&auto=format"
    }
  ];

  return (
    <div className="gadgets-page">
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
          <button className="icon-button"><FaUser /></button>
        </div>
      </nav>

      <div className="products-grid">
        {gadgetItems.map(item => (
          <div 
            key={item.id} 
            className="product-card" 
            onClick={() => {
              localStorage.setItem('selectedProduct', JSON.stringify(item));
              navigate(`/product/${item.id}`);
            }}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <span className="price">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GadgetsPage;