import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import './ClothesPage.css';

const ClothesPage = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Denim Jacket",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&w=500&q=80"
    },
    {
      id: 2,
      name: "Classic White T-Shirt",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&w=500&q=80"
    },
    {
      id: 3,
      name: "Black Jeans",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=500&auto=format"
    },
    {
      id: 4,
      name: "Hoodie",
      price: "$59.99",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format"
    },
    {
      id: 5,
      name: "Winter Coat",
      price: "$149.99",
      image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=500&auto=format"
    },
    {
      id: 6,
      name: "Casual Shirt",
      price: "$45.99",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format"
    },
    {
      id: 7,
      name: "Summer Dress",
      price: "$65.99",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&auto=format"
    },
    {
      id: 8,
      name: "Leather Jacket",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format"
    },
    {
      id: 9,
      name: "Polo Shirt",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format"
    },
    {
      id: 10,
      name: "Sweater",
      price: "$69.99",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format"
    }
  ];

  return (
    <div className="clothes-page">
      <nav className="navbar">
        <div className="nav-left">
          <button className="back-button" onClick={() => navigate('/home')}>‹</button>
          <ul className="nav-links">
            <li><a onClick={() => navigate('/clothes')}>Clothes</a></li>
            <li><a onClick={() => navigate('/gadgets')}>Gadgets</a></li>
            <li><a onClick={() => navigate('/new')}>New</a></li>
            <li><a href="#featured">Featured</a></li>
            <li><a href="#barter">Barter</a></li>
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
        {products.map(item => (
          <div 
            key={item.id} 
            className="product-card" 
            onClick={() => {
              localStorage.setItem('selectedProduct', JSON.stringify(item));
              navigate(`/product/${item.id}`);
            }}
          >
            <img src={item.image} alt={item.name} className="product-image" />
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <button className="details-button">See Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothesPage;
